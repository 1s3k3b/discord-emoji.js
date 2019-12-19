// even though these are in the main file under the property "util", these should only be used with the expected data types because these methods aren't designed for user input.
module.exports = {
    search: (str, categories) => {
        for (const id of Object.keys(categories)) {
            const name = categories[id];
            if (str.replace(/ +/g, "_").replace(/\W/g, "_").toLowerCase() === name.replace(/ +/g, "_").replace(/\W/g, "_").toLowerCase()) return Number(id);
        }
        return void console.warn("Invalid category name " + str);
    }
};
