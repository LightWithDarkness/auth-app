import User from '../models/user.model.js';
import { customError } from '../utils/customError.js';
import bcryptjs from 'bcryptjs';

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return next(customError(400, 'Username or email already exists'));
    }

    // Hash password and save new user
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User saved successfully',
    });
  } catch (error) {
    next(error);
  }
};

export { signUp };
