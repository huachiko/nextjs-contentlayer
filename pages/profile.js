import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState('Ally Lee');
  const [gender, setGender] = useState('F');
  const [email, setEmail] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSignOut = () => {
    router.push('/');
  };

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <>
      <div className="container">
        <aside className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
          <button className="menu-button" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <div className="menu-icon">{sidebarExpanded ? '✕' : '☰'}</div>
          </button>
          
          <nav className="nav-items">
            <div className="nav-item" onClick={() => navigate('/home')}>
              <img src="/icons/HomeIcon2.png" alt="Home" />
              {sidebarExpanded && <span className="nav-text">Home</span>}
            </div>

            <div className="nav-item active" onClick={() => navigate('/profile')}>
              <img src="/icons/ProfileIcon2.png" alt="Profile" />
              {sidebarExpanded && <span className="nav-text">Profile</span>}
            </div>

            <div className="nav-item-parent">
              <div className="nav-item-main">
                <img src="/icons/ContentIcon1.png" alt="Content" />
                {sidebarExpanded && <span className="nav-text">Content</span>}
              </div>
              {sidebarExpanded && (
                <div className="nav-subitems">
                  <div className="nav-subitem" onClick={() => navigate('/topicspage')}>
                    Topics
                  </div>
                  <div className="nav-subitem" onClick={() => navigate('/pyp')}>
                    PYP
                  </div>
                </div>
              )}
            </div>

            <div className="nav-item" onClick={() => navigate('/activitystatspage')}>
              <img src="/icons/ActivityIcon2.png" alt="Activity" />
              {sidebarExpanded && <span className="nav-text">Activity <p/>Stats</span>}
            </div>
          </nav>

          <button className="nav-item sign-out-button" onClick={handleSignOut}>
            {sidebarExpanded && <span className="nav-text">Sign Out</span>}
            {!sidebarExpanded && <span>⎋</span>}
          </button>
        </aside>

        <main className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
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

            <div className="field">
              <div className="field-content">
                <span className="field-text" style={{ marginRight: '8px' }}>Gender:</span>
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
                <span className="field-text" style={{ color: email ? '#1a1a1a' : '#666' }}>
                  {email || 'Add email'}
                </span>
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

            <div className="field" style={{ cursor: 'pointer' }} onClick={() => navigate('/change-password')}>
              <span className="field-text">Change Password</span>
              <svg
                className="edit-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh;
          background-color: #bccbb8;
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

        .nav-item,
        .nav-item-parent {
          display: flex;
          flex-direction: column;
          border-radius: 100px;
          cursor: pointer;
          transition: background-color 0.2s;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          white-space: nowrap;
        }

        .nav-item {
          align-items: center;
          gap: 12px;
          padding: 16px;
          flex-direction: row;
        }

        .nav-item-parent {
          border-radius: 20px;
          padding: 0;
        }

        .nav-item.active {
          background-color: rgba(232, 222, 248, 1);
          color: rgba(74, 68, 89, 1);
        }

        .nav-item-parent.active {
          background-color: rgba(232, 222, 248, 1);
          color: rgba(74, 68, 89, 1);
        }

        .nav-item-main {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          color: rgba(255, 255, 255, 0.9);
        }

        .sidebar.collapsed .nav-item {
          justify-content: center;
          padding: 16px 12px;
        }

        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nav-item-parent:not(.active) .nav-item-main:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }

        .nav-subitems {
          display: flex;
          flex-direction: column;
          padding: 0 16px 12px 16px;
          gap: 4px;
        }

        .nav-subitem {
          padding: 10px 16px;
          font-size: 13px;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
          color: rgba(74, 68, 89, 0.8);
        }

        .nav-subitem:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .nav-subitem.active-sub {
          background-color: rgba(103, 80, 164, 0.2);
          color: rgba(74, 68, 89, 1);
          font-weight: 600;
        }

        .nav-item img {
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
          transition: all 0.3s ease;
        }

        .main-content.sidebar-expanded {
          margin-left: 174px;
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
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .field {
          background-color: #dae6d5;
          border-radius: 50px;
          padding: 18px 30px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s;
        }

        .field:hover {
          background-color: #d0dccb;
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

        .field input::placeholder {
          color: #666;
          font-weight: 400;
        }

        .edit-icon {
          width: 22px;
          height: 22px;
          cursor: pointer;
          margin-left: 15px;
          color: #4a5a45;
          transition: all 0.2s;
        }

        .edit-icon:hover {
          color: #2d3a2a;
          transform: scale(1.1);
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
          transition: all 0.2s;
          border-radius: 8px;
        }

        .gender-btn:hover {
          background: rgba(16, 185, 129, 0.1);
        }

        .gender-btn.active {
          color: #10b981;
        }

        .gender-separator {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .icon-placeholder {
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
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

          .main-content.sidebar-expanded {
            margin-left: 80px;
            padding: 24px;
          }

          .main-content.sidebar-collapsed {
            margin-left: 60px;
            padding: 24px;
          }

          .profile-card {
            padding: 40px 30px;
          }

          .avatar {
            width: 140px;
            height: 140px;
          }

          .field {
            padding: 14px 24px;
          }

          .field-text,
          .field input {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}