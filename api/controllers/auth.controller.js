import User from '../models/user.model.js';
import { customError } from '../utils/customError.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check if user exist or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return next(customError(404, 'user not fount'));
    }
    //verify the password
    const validPassword = bcryptjs.compareSync(password,existingUser.password);
    if (!validPassword) {
      return next(customError(401, 'wrong credentials'));
    }
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
    const {password:hashedPassword, ...user} = existingUser._doc
    res
      .cookie('access_token', token, { httpOnly: true, maxAge: 3600000 })
      .status(200)
      .json({
        success: true,
        message: 'Successfully Signed In',
        user
      });
  } catch (error) {
    next(error);
  }
};
const signOut = (req, res, next) => {

  if(req.user.id != req.params.id) return next(customError(401,'You can only signout from your user id not others'))
  try {
    res
      .clearCookie('access_token', { httpOnly: true })
      .status(200)
      .json({ success: true, message: 'Sign out successful' });
  } catch (error) {
    next(error)
  }
};

export { signUp, signIn, signOut };
