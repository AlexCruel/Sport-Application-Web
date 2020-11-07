const {Router} = require('express');
const Record = require('../models/Record');
const router = Router();

router.post('/test', async (req, res) => {
    try {

        const { studID } = req.body;

        const record = await Record.findOne({ studID });

        if (!record)
            return res.status(400).json({ message: 'Nobody' });
        else
            return res.status(200).json([record.date, record.studID, record.fullName, record.facility, record.typeFacility, record.time]);
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