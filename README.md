<div align="center"><a href="https://nodei.co/npm/discord-emoji.js/"><img src="https://nodei.co/npm/discord-emoji.js.png?downloads=true&stars=true"></a><p><a href="https://discordemoji.com/">DiscordEmoji</a></p></div>

# Installation
npm: `npm i discord-emoji.js`

# Usage
```js
const dEmoji = require("discord-emoji.js");

// get all thinking emojis mapped by their names
dEmoji.getEmojis("thinking", "name").then(console.log);

// find an emoji by name
dEmoji.findEmoji("lol").then(console.log);
```
