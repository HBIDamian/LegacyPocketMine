# Legacy-PocketMine-Archive
This is an effort to archive the legacy PocketMine-MP website(s). This was effort was created before the attacks on web.archive.org, but seeing as it became a little bit of an issue, I thought it may be wise to continue my efforts.
As some of you may know, trying to open PocketMine's website using web.archive.org doesn't quite work, as it redirects to the original url. 

Seeing the original website's source code is possible, if you append `view-source:` to the archived url. Utilising this method, I've removed the javascript used to redirect to the origin site. This code was initially used as a "Anti-Phishing" attempt, but unfortunately PocketMine management didn't consider it would create issues with archive services such as The Wayback Machine. 

The code in question:
```js
if(window.location.host != ("www.pocke"+"tmine.net") && window.location.host.indexOf("127.0.0.1") == -1){
    window.location = "ht"+"tps://www.poc"+"ketmine.net";
    if ($.browser.msie){
      document.execCommand("Stop");
    }else{
      window.stop();
    }
  }
```

## Contribute
If you wish to contribute to this project, please keep the following in mind:

1. You remove the piece of code (or similar) above from code.
2. You do not modify the content to fit your means (for example redirecting the twitter/paypal to your own links)
3. Instead of relying on web.archive.org content, you must download the content as it was at that point of time.
4. Feel free to remove any ads/trackers, so long as it doesn't change the how the site looks. (Replace the content if need be. For example, instead of an ad, it could be a rickroll gif, or anything PM related.)
5. At the time of writing, there isn't any set formatting, as it was very inconsistant anyway. So I ein't fussed about formatting.
6. Have fun, yet be sensible.

## Live View: 
You can see the work over at the following links:
- https://hbidamian.github.io/LegacyPocketMine/
- https://hbidamian.github.io/LegacyPocketMine/servers.html
