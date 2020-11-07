const {Router} = require('express');
const User = require('../models/User');
const router = Router();

router.post('/test', async (req, res) => {
    try {

        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user)
            return res.status(400).json({ message: 'Nobody' });

        res.status(200).json([user.email, user.password, user.id]);
            // {
            //      email: user.email, 
            //      password: user.password,
            //      id: user.id
            // });

    } catch(e) {
        res.status(500).json({ message: 'Something wrong... Try again!' });
    }
});

module.exports = router;