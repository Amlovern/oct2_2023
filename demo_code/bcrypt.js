const bcrypt = require('bcryptjs');

let password = 'password123';

const hashPass = (password) => {
    const hash = bcrypt.hashSync(password, 13);
    return hash;
};

const hash = hashPass(password);
// $2a$12$iHga3m8147iyFtt4yeVkM./G36/m9tnALpvp3.qNCjkYQMK.jC9Sa
//  \_/\_/\_____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash

password = 'notthistime'

const testPass = (password, hash) => {
    const isPass = bcrypt.compareSync(password, hash);
    return isPass;
};

console.log(testPass(password, hash));