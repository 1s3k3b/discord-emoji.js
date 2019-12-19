const util = require("./util.js");

module.exports = class Emoji {
    constructor(data) {
        if (!data) return;
        if (!data.title) return;
        
        this.id = data.id;
        this.name = data.title;
        this.slug = data.slug;
        this.imageURL = data.image;
        this.siteURL = "https://discordemoji.com/emoji/" + this.slug;
        this.description = data.description;
        this.category = {
            name: util.getCategoryName(data.category),
            id: data.category,
            toString() {
                return util.getCategoryName(data.category);
            },
            valueOf() {
                return data.category;
            }
        };
        this.license = data.license;
        this.source = data.source;
        this.favorites = data.faves;
        this.author = data.submitted_by;
    }
}
