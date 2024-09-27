// import { loginRequest, loginSuccess, loginFailure } from './authSlice'; ////////////////original
// import axios from 'axios';

// // تسجيل الدخول
// export const login = (username, password) => async (dispatch) => {
//   try {
//     dispatch(loginRequest());

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('http://localhost:5000/api/users/login', { username, password }, config);

//     dispatch(loginSuccess(data));

//   } catch (error) {
//     dispatch(loginFailure(error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message));
//   }
// };
///////////////////////////////////////////////////////////////////////////////////// origin
// import { loginRequest, loginSuccess, loginFailure } from './authSlice';
// import axios from 'axios';

// // تسجيل الدخول
// export const login = (username, password) => async (dispatch) => {
//   try {
//     dispatch(loginRequest());

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true, // التأكد من إرسال الكوكي
//     };

//     const { data } = await axios.post(
//       'http://localhost:5000/api/users/login',
//       { username, password },
//       config
//     );

//     dispatch(loginSuccess(data));

//   } catch (error) {
//     dispatch(
//       loginFailure(
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       )
//     );
//   }
// };
//11111111111111111111
// import { loginRequest, loginSuccess, loginFailure } from './authSlice';
// import axios from 'axios';

// // تسجيل الدخول
// export const login = (username, password) => async (dispatch) => {
//   try {
//     dispatch(loginRequest());

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true, // التأكد من إرسال الكوكي
//     };

//     const { data } = await axios.post(
//       'http://localhost:5000/api/users/login',
//       { username, password },
//       config
//     );

//     dispatch(loginSuccess(data));

//   } catch (error) {
//     dispatch(
//       loginFailure(
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       )
//     );
//   }
// };
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// تسجيل مستخدم جديد
// export const register = (username, email, password) => async (dispatch) => {
//   try {
//     dispatch(loginRequest());

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('http://localhost:5000/api/habits/register', { username, email, password }, config);

//     dispatch(loginSuccess(data));

//   } catch (error) {
//     dispatch(loginFailure(error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message));
//   }
// };
////////////////////////////////////////////////////////////////////////////////////////////////////original
// export const register = ({ username, email, password }) => async (dispatch) => {
//   try {
//     dispatch(loginRequest());

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('http://localhost:5000/api/users/register', { username, email, password }, config);

//     dispatch(loginSuccess(data));

//   } catch (error) {
//     dispatch(loginFailure(error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message));
//   }
// };

/////////////////////////////////////////////////////////1111111111111111111111111111
// export const register = ({ username, email, password }) => async (dispatch) => {
//   try {
//     dispatch(loginRequest());

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true, // التأكد من إرسال الكوكي
//     };

//     const { data } = await axios.post('http://localhost:5000/api/users/register', { username, email, password }, config);

//     dispatch(loginSuccess(data));

//   } catch (error) {
//     dispatch(loginFailure(
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     ));
//   }
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////
// export const verifyOTP = (email, otp) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('http://localhost:5000/api/users/verify-otp', { email, otp }, config);
    
//     dispatch(loginSuccess(data)); // يمكنك تعديل هذا حسب الحاجة

//   } catch (error) {
//     dispatch(loginFailure(error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message));
//   }
// };
// export const verifyOTP = (email, otp) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('http://localhost:5000/api/users/verify-otp', { email, otp }, config);
    
//     dispatch(loginSuccess(data)); // يمكنك تعديل هذا حسب الحاجة

//   } catch (error) {
//     dispatch(loginFailure(error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message));
//   }
// };

// export const verifyOTP = async (req, res) => {
//   const { email, otp } = req.body;

//   console.log("Request Body:", req.body);
//   console.log("Email:", email);
//   console.log("OTP:", otp);

//   if (!email || !otp) {
//     return res.status(400).json({ message: 'Email and OTP are required' });
//   }

//   if (users[email] && users[email].otp === otp && users[email].otpExpiry > Date.now()) {
//     const { username, password } = users[email];

//     try {
//       const newUser = new User({ username, email, password });
//       await newUser.save();

//       delete users[email];

//       const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//       res.status(200).json({ 
//         message: 'User registered successfully!',
//         token: token,
//         user: {
//           id: newUser._id,
//           username: newUser.username,
//           email: newUser.email
//         }
//       });
//     } catch (error) {
//       console.error('Error saving user:', error);
//       res.status(500).json({ message: 'Error registering user' });
//     }
//   } else {
//     res.status(400).json({ message: 'Invalid OTP or OTP has expired. Please try again.' });
//   }
// };
// export const verifyOTP = ({ email, otp }) => async (dispatch) => {
//   try {
//     dispatch({ type: 'VERIFY_OTP_REQUEST' });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post(
//       'http://localhost:5000/api/users/verify-otp',
//       { email, otp },
//       config
//     );

//     dispatch({ type: 'VERIFY_OTP_SUCCESS', payload: data });

//     // يمكنك أيضًا تخزين بيانات المستخدم في localStorage إذا كنت ترغب في ذلك
//     localStorage.setItem('userInfo', JSON.stringify(data));

//   } catch (error) {
//     dispatch({
//       type: 'VERIFY_OTP_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const verifyOTP = ({ email, otp }) => async (dispatch) => {
//   try {
//     dispatch({ type: 'VERIFY_OTP_REQUEST' });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post(
//       'http://localhost:5000/api/users/verify-otp',
//       { email, otp },
//       config
//     );

//     dispatch({ type: 'VERIFY_OTP_SUCCESS', payload: data });

//     localStorage.setItem('userInfo', JSON.stringify(data));

//   } catch (error) {
//     dispatch({
//       type: 'VERIFY_OTP_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const verifyOTP = ({ email, otp }) => async (dispatch) => {
//   try {
//     dispatch({ type: 'VERIFY_OTP_REQUEST' });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post(
//       'http://localhost:5000/api/users/verify-otp',
//       { email, otp },  // البيانات المرسلة للـ API
//       config
//     );

//     dispatch({ type: 'VERIFY_OTP_SUCCESS', payload: data });

//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: 'VERIFY_OTP_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
////////////////////////////////////////////////////////////////////////////////////////11111111111111
// export const verifyOTP = ({ email, otp }) => async (dispatch) => {
//   try {
//     dispatch({ type: 'VERIFY_OTP_REQUEST' });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true, // التأكد من إرسال الكوكي
//     };

//     const { data } = await axios.post(
//       'http://localhost:5000/api/users/verify-otp',
//       { email, otp },  // البيانات المرسلة للـ API
//       config
//     );

//     dispatch({ type: 'VERIFY_OTP_SUCCESS', payload: data });

//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: 'VERIFY_OTP_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };


//////////////////////////////////////// old way without thunk
import { loginRequest, loginSuccess, loginFailure } from './authSlice';
import axios from 'axios';

// تسجيل الدخول
export const login = (username, password) => async (dispatch) => {
  console.log('Request data:', { username, password });

  try {
    dispatch(loginRequest());
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // التأكد من إرسال الكوكي
    };

    const { data } = await axios.post(
      'http://localhost:5000/api/users/login',
      { username: trimmedUsername, password: trimmedPassword }, // استخدم القيم المقطوعة
      config
    );

    dispatch(loginSuccess(data));

  } catch (error) {
    dispatch(
      loginFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const register = ({ username, email, password }) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // التأكد من إرسال الكوكي
    };   

    const { data } = await axios.post('http://localhost:5000/api/users/register', { username, email, password }, config);

    dispatch(loginSuccess(data));

  } catch (error) {
    dispatch(loginFailure(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    ));
  }
};

export const verifyOTP = ({ email, otp }) => async (dispatch) => {
  try {
    dispatch({ type: 'VERIFY_OTP_REQUEST' });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // التأكد من إرسال الكوكي
    };

    const { data } = await axios.post(
      'http://localhost:5000/api/users/verify-otp',
      { email, otp },  // البيانات المرسلة للـ API
      config
    ); 

    dispatch({ type: 'VERIFY_OTP_SUCCESS', payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'VERIFY_OTP_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
////////////////////////////////////////////////////////////////////////////// with thunc1
// import axios from 'axios';

// // Login API
// export const loginAPI = async (credentials) => {
//   try {
//     const response = await axios.post(
//       'http://localhost:5000/api/users/login',
//       credentials,
//       { withCredentials: true } // Send cookies
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error logging in:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// // Register API
// export const registerAPI = async (userData) => {
//   try {
//     const response = await axios.post(
//       'http://localhost:5000/api/users/register',
//       userData,
//       { withCredentials: true } // Send cookies
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error registering user:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// // Verify OTP API
// export const verifyOtpAPI = async (otpData) => {
//   try {
//     const response = await axios.post(
//       'http://localhost:5000/api/users/verify-otp',
//       otpData,
//       { withCredentials: true } // Send cookies
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error verifying OTP:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// };
/////////////////////////////////////////// new 
// authAPI.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/users';
// export const loginAPI = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, credentials, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message;
//   }
// };

// export const registerAPI = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, userData, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message;
//   }
// };

// export const verifyOTPAPI = async (data) => {
//   try {
//     const response = await axios.post(`${API_URL}/verify-otp`, data, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response && error.response.data.message
//       ? error.response.data.message
//       : error.message;
//   }
// };
