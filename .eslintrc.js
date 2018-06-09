module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single", {
            "allowTemplateLiterals": true
        }],
        "semi": ["error", "always"]
    }
};