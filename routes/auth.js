const {Router} = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

// /api/auth/register
router.post(
    '/register', 
    [
        check('email', 'Wrong email!').isEmail(),
        check('password', 'Min length is 6').isLength({ min: 6 })
    ], 
    async (req, res) => {
    try {
        console.log('Body:', req.body);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data!'
            });
        }

        const {email, password} = req.body;

        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'User exists!' });
        }

        const hash = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hash });

        await user.save();

        res.status(201).json({ message: 'User has been created!' });

    } catch(e) {
        res.status(500).json({ message: 'Something wrong... Try again!' });
    }
});

// /api/auth/login
router.post(
    '/login', 
    [
        check('email', 'Wrong email!').normalizeEmail().isEmail(),
        check('password', 'Write your password!').exists()
    ], 
    async (req, res) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data!'
            });
        }

        const {email, password} = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User is not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Wrong password!' });
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        );

        res.json({ token, userId: user.id });

    } catch(e) {
        res.status(500).json({ message: 'Something wrong... Try again!' });
    }
});

module.exports = router;