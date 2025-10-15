import { useState } from 'react';

export default function AuthPages() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Sign up data:', formData);
      alert('Sign up successful!');
    } else {
      console.log('Sign in data:', { email: formData.email, password: formData.password });
      alert('Sign in successful!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel - Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-green-100 to-green-50 p-8 md:p-12 flex flex-col justify-center">
          {!isSignUp ? (
            // Sign In Form
            <div>
              <h1 className="text-5xl font-bold text-green-800 mb-2">Welcome!</h1>
              <p className="text-xl text-gray-700 mb-8">Sign in to your Account</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 border-green-700 bg-green-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-600 transition"
                  required
                />
                
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 border-green-700 bg-green-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-600 transition"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-green-800 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-lg mx-auto block"
                >
                  SIGN IN
                </button>
              </form>
              
              <p className="text-center mt-6 text-gray-700">
                Don't have an account?{' '}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-green-800 font-semibold hover:underline"
                >
                  Sign up today
                </button>
              </p>
            </div>
          ) : (
            // Sign Up Form
            <div>
              <h1 className="text-5xl font-bold text-green-800 mb-8">Sign up</h1>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 border-green-700 bg-green-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-600 transition"
                  required
                />
                
                <input
                  type="text"
                  name="displayName"
                  placeholder="Display name"
                  value={formData.displayName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 border-green-700 bg-green-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-600 transition"
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 border-green-700 bg-green-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-600 transition"
                  required
                />
                
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 border-green-700 bg-green-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-600 transition"
                  required
                />
                
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-2 border-green-700 bg-green-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-600 transition"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-green-800 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-lg mx-auto block"
                >
                  SUBMIT
                </button>
              </form>
              
              <p className="text-center mt-6 text-gray-700">
                Already have an account?{' '}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-green-800 font-semibold hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}
        </div>
        
        {/* Right Panel - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop"
            alt="Students studying together in a library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}