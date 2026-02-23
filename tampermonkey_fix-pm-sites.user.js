// ==UserScript==
// @name         PocketMine Archive Fix (Universal)
// @version      1.0.0
// @description  Neutralizes PocketMine's redirect script regardless of how the strings are concatenated.
// @author       Gemini
// @match        https://web.archive.org/web/*/http*://*pocketmine.net/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Prevent the "Stop" command from working even if the script fires
    // This effectively neuters the browser's ability to halt page loading.
    const noop = () => console.log('[Fix] Blocked a window.stop() or execCommand("Stop") attempt.');
    window.stop = noop;

    // Some older scripts use document.execCommand("Stop") for IE compatibility
    const orgExec = document.execCommand;
    document.execCommand = function(command) {
        if (command && command.toLowerCase() === "stop") {
            noop();
            return true;
        }
        return orgExec.apply(this, arguments);
    };

    // 2. The Logic: Strip and Identify
    const isPocketMineRedirect = (text) => {
        // Remove all quotes, plus signs, and whitespace to see the "true" string
        const cleanText = text.replace(/['"+\s]/g, '').toLowerCase();

        // Look for the core logic: checking the host for pocketmine.net AND stopping the page
        const hasDomain = cleanText.includes('pocketmine.net');
        const hasStopCommand = cleanText.includes('window.stop') || cleanText.includes('execcommand(stop)');

        return hasDomain && hasStopCommand;
    };

    // 3. Intercept Scripts as they are added to the DOM
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'SCRIPT') {
                    if (isPocketMineRedirect(node.textContent)) {
                        console.log('[Fix] Detected and neutralized an anti-bot script.');
                        node.textContent = ''; // Wipe the code
                        node.remove();        // Remove the element
                    }
                }
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
