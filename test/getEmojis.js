const dEmoji = require("../src/index.js");

dEmoji.getEmojis().then(data => {
    console.log(data);
    console.log(data.map(x => x.name));
    console.log(data.map(x => x.imageURL));
});
