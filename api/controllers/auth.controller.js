import User from '../models/user.model.js';
import { customError } from '../utils/customError.js';
import bcryptjs from 'bcryptjs';

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    //checking if user exist already
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser)
      return next(customError(400, 'Username or email already exists'));
    //saving the new user
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    
    res.status(201).json({
      success: true,
      message: 'User saved successfully',
    //   user: savedUser,
    });
  } catch (error) {
    nest(error)
  }
};

export { signUp };
