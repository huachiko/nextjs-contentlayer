import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function LoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Check if already logged in
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      const data = await response.json();
      if (data.isLoggedIn) {
        router.push('/');
      }
    } catch (error) {
      console.error('Auth check error:', error);
    }
  };

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          displayName: formData.displayName,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        alert('Account created successfully!');
        router.push('/');
      } else {
        setError(data.error || 'Sign up failed');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        router.push('/');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{isSignUp ? 'Sign Up' : 'Sign In'} - A-Math Practice</title>
      </Head>

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          background-color: #bccbb8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        
        .auth-card {
          width: 100%;
          max-width: 1300px;
          background-color: #fff;
          border-radius: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          display: flex;
          flex-direction: row;
        }
        
        .auth-left-panel {
          width: 50%;
          background-color: #d4e4d4;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .auth-right-panel {
          width: 50%;
          height: auto;
        }
        
        .auth-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .auth-form-container {
          display: flex;
          flex-direction: column;
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }
        
        .auth-heading {
          font-size: 64px;
          font-weight: 700;
          color: #4a6741;
          margin-bottom: 8px;
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .auth-subheading {
          font-size: 20px;
          color: #333;
          margin-bottom: 40px;
          font-weight: 400;
        }
        
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 24px;
        }
        
        .auth-input {
          width: 100%;
          padding: 18px 28px;
          font-size: 16px;
          border-radius: 50px;
          border: 2px solid #4a6741;
          background-color: rgba(255, 255, 255, 0.5);
          outline: none;
          color: #333;
          font-weight: 400;
          box-sizing: border-box;
        }
        
        .auth-input::placeholder {
          color: rgba(51, 51, 51, 0.6);
        }
        
        .auth-input:focus {
          border-color: #3a5331;
          background-color: rgba(255, 255, 255, 0.8);
        }

        .auth-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .auth-submit-button {
          width: 200px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          background-color: #4a6741;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          margin: 0 auto;
          letter-spacing: 1px;
          transition: background-color 0.3s ease;
        }
        
        .auth-submit-button:hover:not(:disabled) {
          background-color: #3a5331;
        }

        .auth-submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .auth-link-text {
          text-align: center;
          color: #333;
          font-size: 15px;
        }
        
        .auth-link {
          cursor: pointer;
          font-weight: 600;
          color: #333;
          text-decoration: underline;
        }
        
        .auth-link:hover {
          color: #4a6741;
        }

        .error-message {
          background-color: #fee;
          color: #c33;
          padding: 12px 20px;
          border-radius: 25px;
          text-align: center;
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        @media (max-width: 1024px) {
          .auth-card {
            border-radius: 30px;
          }
          
          .auth-left-panel {
            padding: 60px 40px;
          }
          
          .auth-heading {
            font-size: 52px;
          }
          
          .auth-subheading {
            font-size: 18px;
          }
        }
        
        @media (max-width: 768px) {
          .auth-container {
            padding: 20px 15px;
          }
          
          .auth-card {
            flex-direction: column;
            border-radius: 25px;
          }
          
          .auth-left-panel {
            width: 100%;
            padding: 40px 30px;
          }
          
          .auth-right-panel {
            width: 100%;
            height: 300px;
            order: -1;
          }
          
          .auth-heading {
            font-size: 42px;
          }
          
          .auth-subheading {
            font-size: 16px;
            margin-bottom: 30px;
          }
          
          .auth-form {
            gap: 16px;
          }
          
          .auth-input {
            padding: 16px 24px;
            font-size: 15px;
          }
          
          .auth-submit-button {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-left-panel">
            {!isSignUp ? (
              <div className="auth-form-container">
                <h1 className="auth-heading">Welcome!</h1>
                <p className="auth-subheading">Sign in to your Account</p>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSignIn} className="auth-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="auth-input"
                    disabled={loading}
                    required
                  />
                  
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="auth-input"
                    disabled={loading}
                    required
                  />
                  
                  <button
                    type="submit"
                    className="auth-submit-button"
                    disabled={loading}
                  >
                    {loading ? 'SIGNING IN...' : 'SIGN IN'}
                  </button>
                </form>
                
                <p className="auth-link-text">
                  Don't have an account?{' '}
                  <span
                    onClick={() => {
                      setIsSignUp(true);
                      setError('');
                      setFormData({
                        username: '',
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                      });
                    }}
                    className="auth-link"
                  >
                    Sign up today
                  </span>
                </p>
              </div>
            ) : (
              <div className="auth-form-container">
                <h1 className="auth-heading">Sign up</h1>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSignUp} className="auth-form">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="auth-input"
                    disabled={loading}
                    required
                  />
                  
                  <input
                    type="text"
                    name="displayName"
                    placeholder="Display name"
                    value={formData.displayName}
                    onChange={handleChange}
                    className="auth-input"
                    disabled={loading}
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="auth-input"
                    disabled={loading}
                    required
                  />
                  
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="auth-input"
                    disabled={loading}
                    required
                  />
                  
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="auth-input"
                    disabled={loading}
                    required
                  />
                  
                  <button
                    type="submit"
                    className="auth-submit-button"
                    disabled={loading}
                  >
                    {loading ? 'CREATING...' : 'SUBMIT'}
                  </button>
                </form>
                
                <p className="auth-link-text">
                  Already have an account?{' '}
                  <span
                    onClick={() => {
                      setIsSignUp(false);
                      setError('');
                      setFormData({
                        username: '',
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                      });
                    }}
                    className="auth-link"
                  >
                    Sign in
                  </span>
                </p>
              </div>
            )}
          </div>
          
          <div className="auth-right-panel">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop"
              alt="Students studying together"
              className="auth-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}