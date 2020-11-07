const {Router} = require('express');
const User = require('../models/User');
const router = Router();

router.get('/test', async (req, res) => {
    try {
        const user = await User.findOne({ email: 'sasha.karpenkov@outlook.com' });

        if (!user)
            return res.send('Nobody');

        res.status(200).json(
            {
                 email: user.email, 
                 password: user.password,
                 id: user.id
            });

    } catch(e) {
        res.send('Error');
    }
});

module.exports = router;