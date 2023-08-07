const Verification = require('../models/Verification');
const User = require('../models/User');

// Get verification status of a user
exports.getVerificationStatus = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const verification = await Verification.findOne({ user: user._id });
        if (!verification) {
            return res.status(404).json({ message: 'Verification status not found' });
        }

        res.status(200).json(verification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Verify a user
exports.verifyUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const verification = await Verification.findOne({ user: user._id });
        if (!verification) {
            return res.status(404).json({ message: 'Verification status not found' });
        }

        verification.verified = true;
        await verification.save();

        res.status(200).json({ message: 'User verified successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};