const jwt = require("jsonwebtoken");

const payload = {
    firstName: 'Anthony',
    lastName: 'Lovern'
};

const secretKey = 'supersecretdonttellanyone';

const createToken = () => {
    const token = jwt.sign(payload, secretKey);
    return token;
};

console.log(createToken());

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBbnRob255IiwibGFzdE5hbWUiOiJMb3Zlcm4iLCJpYXQiOjE3MDYyMDYxMTV9.u6CnJd5Bo9EDBp5uZcbUJe18OyPIhbV0lnsAVUIh5Ec'

const verifyToken = (token) => {
    const verified = jwt.verify(token, secretKey);
    return verified
};

console.log('line 24', verifyToken(token));