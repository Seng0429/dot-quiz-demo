import React, { useState } from 'react';
import './SignIn.css';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'; // Import Ant Icons

import { signIn, isUserActivated } from '@services/auth/auth';
import useLoader from '@/Hooks/useLoader';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      showLoader();
      
      const userCredential = await signIn(email, password);
      let isActivated = false;
      if (userCredential) {
        isActivated = await isUserActivated(userCredential) as boolean;
      } else {
        throw new Error('Error to check email status');
      }
      hideLoader();
      if (isActivated) {
        navigate('/dashboard');
      }

    } catch (err: any) {
      hideLoader();
      setError(err.message || 'Something went wrong');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      
      <h1 className="app-title">
        dotQuiz
      </h1>

      <div className="login-card">
        <h2 className="login-title">
          Sign in
        </h2>

        <form onSubmit={loginHandler}>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Username (Email)
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="you@xxxx.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </button>
          </div>

          <div className="error-message">
            {error && <span>{error}</span>}
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Sign in
          </button>
        </form>

        <div className="footer-text">
          Don&apos;t have an account?{' '}
          <a href="/sign-up" className="footer-link">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;