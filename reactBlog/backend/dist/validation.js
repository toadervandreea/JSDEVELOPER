"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.signupValidation = void 0;
const express_validator_1 = require("express-validator");
exports.signupValidation = [
    (0, express_validator_1.check)('nume', 'Name is requied').not().isEmpty(),
    (0, express_validator_1.check)('prenume', 'Name is requied').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    (0, express_validator_1.check)('parola', 'Password must be 8 or more characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "i")
];
exports.loginValidation = [
    (0, express_validator_1.check)('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    (0, express_validator_1.check)('parola', 'Password must be 6 or more characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "i")
];
