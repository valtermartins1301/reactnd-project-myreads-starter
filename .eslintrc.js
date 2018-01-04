module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
      "browser": true,
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "react/prop-types": [0],
      "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ]
    },
};
