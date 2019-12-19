const categories = {
    "1": "Original Style",
    "2": "TV / Movie",
    "3": "Meme",
    "4": "Anime",
    "5": "Celebrity",
    "6": "Blobs",
    "7": "Thinking",
    "8": "Animated",
    "9": "NSFW",
    "10": "Gaming",
    "11": "Letters",
    "12": "Other",
    "13": "Pepe",
    "14": "Logos",
    "15": "Cute",
    "16": "Utility",
    "17": "Animals",
    "18": "Recolors"
};

// even though these are in the main file under the property "util", these should only be used with the expected data types because these methods aren't designed for user input.
module.exports = {
    findStr: (x, y) => x.replace(/ +/g, "").replace(/\W/g, "").toLowerCase() === y.replace(/ +/g, "").replace(/\W/g, "").toLowerCase(),
    search: (str, obj = categories) => {
        for (const id of Object.keys(obj)) {
            const name = obj[id];
            if (module.exports.findStr(str, name)) return Number(id);
        }
        return void console.warn("Invalid category name " + str);
    },
    getCategoryName: id => categories[id] || null
};
