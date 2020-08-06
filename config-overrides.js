const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "assets/images": "src/assets/img",
    })(config);

    return config;
};
