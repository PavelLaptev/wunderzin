const StyleDictionary = require("style-dictionary").extend({
    source: ["src/**/*.json"],
    platforms: {
        scss: {
            transformGroup: "scss",
            buildPath: "build/web/",
            files: [
                {
                    destination: "_colors.scss",
                    format: "scss/variables",
                    filter: {
                        type: "color"
                    }
                },
                {
                    destination: "_typography.scss",
                    format: "scss/variables",
                    filter: {
                        type: "typography"
                    }
                },
                {
                    destination: "_grids.scss",
                    format: "scss/variables",
                    filter: {
                        type: "grids"
                    }
                },
                {
                    destination: "_spacers.scss",
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
