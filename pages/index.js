import { useState } from 'react';
import { useRouter } from "next/router";

export default function AuthPages() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSignUp) {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username.trim(),
          displayName: formData.displayName.trim(),
          email: formData.email.trim(),
          password: formData.password
        })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data?.error || "Sign up failed");
        return;
      }
    localStorage.setItem("user", JSON.stringify(data.user));
alert("Sign up successful!");
router.push("/home");
    } catch (err) {
      console.error(err);
      alert("Network error during sign up");
    }
    return;
  }

  // Sign in
  try {
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email.trim(),
        password: formData.password
      })
    });
    const data = await res.json();
    if (!res.ok) {
      // If user not found: prompt to sign up
      if (res.status === 404) {
        alert("No account found. Please sign up.");
        setIsSignUp(true);
      } else {
        alert(data?.error || "Sign in failed");
      }
      return;
    }
    localStorage.setItem("user", JSON.stringify(data.user));
alert("Sign in successful!");
router.push("/home"); // redirects to your home page
  } catch (err) {
    console.error(err);
    alert("Network error during sign in");
  }
};


  return (
    <>
      <style>{`
        .auth-container {
          min-height: 100vh;
          background-color: #f5f5f5;
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
        
        .auth-submit-button:hover {
          background-color: #3a5331;
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
        
        /* Tablet screens (768px - 1024px) */
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
        
        /* Mobile screens (up to 768px) */
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
        
        /* Small mobile screens (up to 480px) */
        @media (max-width: 480px) {
          .auth-container {
            padding: 15px 10px;
          }
          
          .auth-card {
            border-radius: 20px;
          }
          
          .auth-left-panel {
            padding: 30px 20px;
          }
          
          .auth-right-panel {
            height: 250px;
          }
          
          .auth-heading {
            font-size: 36px;
          }
          
          .auth-subheading {
            font-size: 15px;
            margin-bottom: 25px;
          }
          
          .auth-form {
            gap: 14px;
          }
          
          .auth-input {
            padding: 14px 20px;
            font-size: 14px;
          }
          
          .auth-submit-button {
            width: 100%;
            padding: 14px 28px;
            font-size: 15px;
          }
          
          .auth-link-text {
            font-size: 14px;
          }
        }
        
        /* Extra small screens (up to 360px) */
        @media (max-width: 360px) {
          .auth-heading {
            font-size: 32px;
          }
          
          .auth-subheading {
            font-size: 14px;
          }
          
          .auth-input {
            padding: 12px 18px;
            font-size: 13px;
          }
        }
      `}</style>
      
      <div className="auth-container">
        <div className="auth-card">
          {/* Left Panel - Form */}
          <div className="auth-left-panel">
            {!isSignUp ? (
              // Sign In Form
              <div className="auth-form-container">
                <h1 className="auth-heading">Welcome!</h1>
                <p className="auth-subheading">Sign in to your Account</p>
                
                <form onSubmit={handleSubmit} className="auth-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                  
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="auth-submit-button"
                  >
                    SIGN IN
                  </button>
                </form>
                
                <p className="auth-link-text">
                  Don't have an account?{' '}
                  <span
                    onClick={() => setIsSignUp(true)}
                    className="auth-link"
                  >
                    Sign up today
                  </span>
                </p>
              </div>
            ) : (
              // Sign Up Form
              <div className="auth-form-container">
                <h1 className="auth-heading">Sign up</h1>
                
                <form onSubmit={handleSubmit} className="auth-form">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                  
                  <input
                    type="text"
                    name="displayName"
                    placeholder="Display name"
                    value={formData.displayName}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                  
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                  
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="auth-input"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="auth-submit-button"
                  >
                    SUBMIT
                  </button>
                </form>
                
                <p className="auth-link-text">
                  Already have an account?{' '}
                  <span
                    onClick={() => setIsSignUp(false)}
                    className="auth-link"
                  >
                    Sign in
                  </span>
                </p>
              </div>
            )}
          </div>
          
          {/* Right Panel - Image */}
          <div className="auth-right-panel">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop"
              alt="Students studying together in a library"
              className="auth-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}