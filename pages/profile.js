import { useState } from 'react';

export default function ProfilePage() {
  const [name, setName] = useState('Ally lee');
  const [gender, setGender] = useState('F');
  const [email, setEmail] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh;
          background-color: #d4dcd0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        }

        .sidebar {
          width: 175px;
          background-color: #6b7d66;
          padding: 20px 15px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          margin-bottom: 8px;
          color: #d4dcd0;
          text-decoration: none;
          border-radius: 8px;
          font-size: 15px;
          transition: background-color 0.2s;
        }

        .nav-item:hover {
          background-color: #5a6b56;
        }

        .nav-item.active {
          background-color: #d4dcd0;
          color: #2d3a2d;
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        .main-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .profile-card {
          width: 100%;
          max-width: 480px;
          background-color: #c5d4be;
          border-radius: 48px;
          padding: 60px 50px;
        }

        .avatar-container {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }

        .avatar {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
        }

        .field {
          background-color: #dae6d5;
          border-radius: 50px;
          padding: 18px 30px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .field-content {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .field-text {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .field input {
          background: transparent;
          border: none;
          outline: none;
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          flex: 1;
        }

        .edit-icon {
          width: 22px;
          height: 22px;
          cursor: pointer;
          margin-left: 15px;
          color: #4a5a45;
        }

        .gender-buttons {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .gender-btn {
          background: none;
          border: none;
          font-size: 20px;
          font-weight: 700;
          padding: 4px 12px;
          cursor: pointer;
          color: #666;
          transition: color 0.2s;
        }

        .gender-btn.active {
          color: #10b981;
        }

        .gender-separator {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
        }
      `}</style>

      <div className="container">
        <aside className="sidebar">
          <nav style={{ marginTop: '40px' }}>
            <a href="#" className="nav-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </a>
            
            <a href="#" className="nav-item active">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile</span>
            </a>
            
            <a href="#" className="nav-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Content</span>
            </a>
            
            <a href="#" className="nav-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Activity Stats</span>
            </a>
          </nav>
        </aside>

        <main className="main-content">
          <div className="profile-card">
            <div className="avatar-container">
              <div className="avatar">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ally&backgroundColor=ffd700,ff6347&hairColor=4a5fa5" 
                  alt="Profile Avatar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Name Field */}
            <div className="field">
              {isEditingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  autoFocus
                />
              ) : (
                <span className="field-text">{name}</span>
              )}
              <svg
                className="edit-icon"
                onClick={() => setIsEditingName(true)}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>

            {/* Gender Field */}
            <div className="field">
              <div className="field-content">
                <span className="field-text" style={{ marginRight: '8px' }}>Gender :</span>
                <div className="gender-buttons">
                  <button
                    className={`gender-btn ${gender === 'F' ? 'active' : ''}`}
                    onClick={() => setGender('F')}
                  >
                    F
                  </button>
                  <span className="gender-separator">/</span>
                  <button
                    className={`gender-btn ${gender === 'M' ? 'active' : ''}`}
                    onClick={() => setGender('M')}
                  >
                    M
                  </button>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="field">
              {isEditingEmail ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setIsEditingEmail(false)}
                  placeholder="Enter email"
                  autoFocus
                />
              ) : (
                <span className="field-text">{email || 'Email'}</span>
              )}
              <svg
                className="edit-icon"
                onClick={() => setIsEditingEmail(true)}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>

            {/* Change Password Button */}
            <div className="field" style={{ cursor: 'pointer' }}>
              <span className="field-text">Change Password</span>
              <svg
                className="edit-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}