# Cyberdeck Touchscreen Menu #

This is a Node/Electron-based menu system for small touchscreens, for cyberdecks or the like. You'll need to build it for your system's architecture, but that's easy. (I'll add a link to Electron instructions to do that soon.)

All settings are in the `config.json` file in the `src` directory. Each button has a command associated with it and can have its own styling, or you can use global styles for all buttons. Note: **this is not a secure menu system!** I'm just learning Electron, so I'm not sure how to make sure the executed commands aren't hijacked. Don't use this in an unsecured kiosk or anything.

This is really right now just for my own use, but if anyone else likes it, I'll add features if requested.