const jwt = require('jsonwebtoken');
const User = require('../models/User');

//generate JWT token

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES});
};

// @desc Register User
// @route POST /api/v1/auth/singup
// @access Public

const singup = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //validate

        if (!name || !email || !password) {
            return res.status(400).json({success:false, message: 'Please provide all fields'});
            
        }

        //create user

        
    } catch (error) {
        
    }
    
}