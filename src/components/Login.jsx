import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://apiportofolio.tegararsyadani.my.id/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" id="login">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
              Forgot Password?
            </a>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          >
            Log In
          </motion.button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{' '}
          <a href="#" className="text-purple-600 hover:text-purple-800">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;