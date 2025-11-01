import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState('Ally lee');
  const [gender, setGender] = useState('F');
  const [email, setEmail] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

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
          width: 174px;
          min-width: 174px;
          background-color: rgba(125, 140, 122, 1);
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          padding: 44px 20px 20px;
          display: flex;
          flex-direction: column;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .sidebar.collapsed {
          width: 80px;
          min-width: 80px;
          padding: 44px 12px 20px;
        }

        .menu-button {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          border-radius: 12px;
          transition: all 0.3s;
          align-self: flex-start;
          margin-bottom: 40px;
        }

        .menu-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .menu-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border-radius: 100px;
          font-size: 14px;
          transition: background-color 0.2s;
          cursor: pointer;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          white-space: nowrap;
        }

        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nav-item.active {
          background-color: rgba(232, 222, 248, 1);
          color: rgba(74, 68, 89, 1);
        }

        .sidebar.collapsed .nav-item {
          justify-content: center;
          padding: 16px 12px;
        }

        .icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .nav-text {
          transition: opacity 0.3s;
        }

        .sidebar.collapsed .nav-text {
          display: none;
        }

        .nav-item.sign-out-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px;
          cursor: pointer;
          background: rgba(255, 99, 71, 0.9);
          border: none;
          transition: all 0.3s;
          border-radius: 100px;
          color: white;
          font-size: 14px;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          margin-top: auto;
        }

        .nav-item.sign-out-button:hover {
          background: rgba(255, 69, 0, 1);
          transform: scale(1.02);
        }

        .sidebar.collapsed .nav-item.sign-out-button {
          padding: 16px 12px;
        }

        .main-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          margin-left: 174px;
          transition: all 0.3s ease;
        }

        .main-content.sidebar-collapsed {
          margin-left: 80px;
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

        @media(max-width: 768px) {
          .sidebar {
            width: 80px;
            min-width: 80px;
            padding: 44px 12px 20px;
          }

          .sidebar.collapsed {
            width: 60px;
            min-width: 60px;
            padding: 44px 8px 20px;
          }

          .sidebar .nav-text {
            display: none;
          }

          .main-content {
            margin-left: 80px;
            padding: 24px;
          }

          .main-content.sidebar-collapsed {
            margin-left: 60px;
          }
        }
      `}</style>

      <div className="container">
        <aside className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
          <button className="menu-button" onClick={toggleSidebar}>
            <div className="menu-icon">{sidebarExpanded ? '✕' : '☰'}</div>
          </button>
          
          <nav className="nav-items">
            <div className="nav-item" onClick={() => router.push('/homepage')}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {sidebarExpanded && <span className="nav-text">Home</span>}
            </div>
            
            <div className="nav-item active" onClick={() => router.push('/profile')}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {sidebarExpanded && <span className="nav-text">Profile</span>}
            </div>
            
            <div className="nav-item" onClick={() => router.push('/topicspage')}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {sidebarExpanded && <span className="nav-text">Content</span>}
            </div>
            
            <div className="nav-item" onClick={() => router.push('/activitystatspage')}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {sidebarExpanded && <span className="nav-text">Activity Stats</span>}
            </div>
          </nav>

          <button className="nav-item sign-out-button" onClick={handleSignOut}>
            {sidebarExpanded && <span className="nav-text">Sign Out</span>}
          </button>
        </aside>

        <main className={`main-content ${sidebarExpanded ? '' : 'sidebar-collapsed'}`}>
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
