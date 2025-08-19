import axios from "axios";
import {
  CurrentUserDetails,
  UserCreateAccount,
  UserDelete,
  UserLogin,
  UserSignUp,
  UserUpdate,
} from "../constants/Api_URL";

// login user
export async function loginUser(credentials) {
  try {
    const res = await axios.post(UserLogin, credentials);

    return res.data;
  } catch (err) {
    return err;
  }
}

// signup user
export async function signupUser(userData) {
  try {
    const res = await axios.post(UserSignUp, userData);

    return res.data;
  } catch (err) {
    return err;
  }
}

// create the account of the user
export async function createAccountUser(credentials) {
  try {
    const res = await axios.post(UserCreateAccount, credentials);

    return res.data;
  } catch (err) {
    return err;
  }
}

// get current user details
export async function getUserDetails(credentials) {
  try {
    const res = await axios.post(CurrentUserDetails, credentials);

    return res.data;
  } catch (err) {
    return err;
  }
}

// update user
export async function updateUser(userData) {
  try {
    const res = await axios.put(UserUpdate, userData);

    return res.data;
  } catch (err) {
    return err;
  }
}

// delete user
export async function deleteUser(credentials) {
  try {
    const res = await axios.delete(UserDelete, credentials);

    return res.data;
  } catch (err) {
    return err;
  }
}
