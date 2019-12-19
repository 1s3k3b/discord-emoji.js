// even though these are in the main file under the property "util", these should only be used with the expected data types because these methods aren't designed for user input.
module.exports = {
    findStr: (x, y) => x.replace(/ +/g, "").replace(/\W/g, "").toLowerCase() === y.replace(/ +/g, "").replace(/\W/g, "").toLowerCase(),
    search: (str, categories) => {
        for (const id of Object.keys(categories)) {
            const name = categories[id];
            if (module.exports.findStr(str, name)) return Number(id);
        }
        return void console.warn("Invalid category name " + str);
    }
};
