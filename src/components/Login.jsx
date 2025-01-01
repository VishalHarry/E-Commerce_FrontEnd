import React, { useContext, useState } from 'react';
import { AuthContext } from './contaxt/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, signUpWithGmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success('Login successful!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || 'Login failed. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signUpWithGmail();
      toast.success('Logged in with Google!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || 'Google login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password *
            </label>
            <input
              type="password"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-600">Remember Me</span>
            </label>
            <a href="/forgot-password" className="text-orange-500 text-sm">
              Forget Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600"
          >
            Submit Now
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don’t Have any Account?{' '}
            <a href="/signup" className="text-orange-500">
              Sign Up
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center my-6">
          <span className="bg-gray-300 h-px flex-1"></span>
          <span className="px-4 text-gray-500">OR</span>
          <span className="bg-gray-300 h-px flex-1"></span>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Login With Social Media</p>
          <div className="flex justify-center space-x-4">
            <button 
            onClick={handleGoogleLogin}
            className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
              <i className="icofont-facebook"></i>
            </button>
            <a
              href="#"
              className="bg-blue-400 text-white w-10 h-10 flex items-center justify-center rounded-full"
            >
              <i className="icofont-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full"
            >
              <i className="icofont-instagram"></i>
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full"
            >
              <i className="icofont-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
