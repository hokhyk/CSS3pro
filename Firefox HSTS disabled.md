

According to several forums, you can disable HSTS by introducing a new configuration variable. First, go to the Firefox configuration page (about:config), right-click, choose "New Integer", then provide the name "test.currentTimeOffsetSeconds" (no quotes) with a value of 11491200. This should bypass HSTS, although you may also need to clear the Cache and Active Logins in the Clear Recent History dialog (Ctrl-Shift-Del).

This apparently works because of a function called GetPreloadListEntry that checks to see if the current time is less than the next list expiration time; since the time is effectively calculated to be later than the expiration time, no check is performed. This effectively disables HSTS checks.

