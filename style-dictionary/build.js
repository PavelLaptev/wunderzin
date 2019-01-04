const StyleDictionary = require("style-dictionary").extend({
    source: ["src/**/*.json"],
    platforms: {
        scss: {
            transformGroup: "scss",
            buildPath: "build/web/",
            files: [
                {
                    destination: "colors.scss",
                    format: "scss/variables",
                    filter: {
                        type: "color"
                    }
                },
                {
                    destination: "typography.scss",
                    format: "scss/variables",
                    filter: {
                        type: "typography"
                    }
                },
                {
                    destination: "grids.scss",
                    format: "scss/variables",
                    filter: {
                        type: "grids"
                    }
                },
                {
                    destination: "spacers.scss",
                    format: "scss/variables",
                    filter: {
                        type: "spacers"
                    }
                }
            ]
        }
    }
});

StyleDictionary.buildAllPlatforms();

console.log("done!");
