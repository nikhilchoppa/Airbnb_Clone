// generating JWT (JSON Web Tokens). The function takes a
// user object as an argument and signs a new JWT with a secret key from the environment variables.

const jwt = require("jsonwebtoken");

const jwtAuthToken = (newdata) => {
    const secretkey = process.env.JWT_SECRET_KEY;

    let payload = {
        user: {
            id: newdata.id,
            name: newdata.name,
            email: newdata.email,
            isUser: newdata.isUser,
            isVendor: newdata.isVendor
        },
    };

    const token = jwt.sign(payload, secretkey);

    return token;
};

module.exports = jwtAuthToken;