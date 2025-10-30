import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [displayName, setDisplayName] = useState('');
  const [gender, setGender] = useState('F');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Check authentication and load profile
  useEffect(() => {
    checkAuthAndLoadProfile();
  }, []);

  const checkAuthAndLoadProfile = async () => {
    try {
      // Check if logged in
      const authResponse = await fetch('/api/auth/me');
      const authData = await authResponse.json();
      
      if (!authData.isLoggedIn) {
        router.push('/login');
        return;
      }

      setUser(authData.user);

      // Load full profile data
      const profileResponse = await fetch('/api/profile/get?userId=' + authData.user.id);
      const profileData = await profileResponse.json();
      
      if (profileData.success) {
        setDisplayName(profileData.user.displayName);
        setEmail(profileData.user.email || '');
        setGender(profileData.user.gender || 'F');
        setUsername(profileData.user.username);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      try {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  };

  const saveProfile = async (field, value) => {
    if (!user) return;
    
    setSaving(true);
    try {
      const response = await fetch('/api/profile/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          displayName,
          email,
          gender,
          [field]: value
        })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Profile updated successfully!');
        checkAuthAndLoadProfile();
      } else {
        alert(data.error || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile');
    } finally {
      setSaving(false);
    }
  };

  const handleNameBlur = () => {
    setIsEditingName(false);
    if (displayName.trim() && displayName !== user.displayName) {
      saveProfile('displayName', displayName);
    }
  };

  const handleEmailBlur = () => {
    setIsEditingEmail(false);
    if (email.trim()) {
      saveProfile('email', email);
    }
  };

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    saveProfile('gender', newGender);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (!user) return;
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      const response = await fetch('/api/profile/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Password changed successfully!');
        setShowPasswordModal(false);
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        alert(data.error || 'Failed to change password');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Failed to change password');
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#d4dcd0'
      }}>
        <div style={{ fontSize: '24px', color: '#6b7d66' }}>Loading...</div>
      </div>
    );
  }

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
          cursor: pointer;
        }

        .nav-item:hover {
          background-color: #5a6b56;
        }

        .nav-item.active {
          background-color: #d4dcd0;
          color: #2d3a2d;
        }

        .nav-item.logout {
          margin-top: 40px;
          background-color: rgba(255, 100, 100, 0.2);
        }

        .nav-item.logout:hover {
          background-color: rgba(255, 100, 100, 0.3);
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

        .saving-indicator {
          font-size: 14px;
          color: #10b981;
          margin-top: 10px;
          text-align: center;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 24px;
          padding: 40px;
          width: 90%;
          max-width: 400px;
        }

        .modal h2 {
          margin: 0 0 24px 0;
          font-size: 24px;
          color: #1a1a1a;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-input {
          padding: 12px 20px;
          border: 2px solid #dae6d5;
          border-radius: 12px;
          font-size: 16px;
          outline: none;
        }

        .modal-input:focus {
          border-color: #6b7d66;
        }

        .modal-buttons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .modal-btn {
          flex: 1;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-btn-primary {
          background: #6b7d66;
          color: white;
        }

        .modal-btn-primary:hover {
          background: #5a6b56;
        }

        .modal-btn-secondary {
          background: #dae6d5;
          color: #1a1a1a;
        }

        .modal-btn-secondary:hover {
          background: #c5d4be;
        }
      `}</style>

      <div className="container">
        <aside className="sidebar">
          <nav style={{ marginTop: '40px' }}>
            <div className="nav-item" onClick={() => router.push('/')}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </div>
            
            <div className="nav-item active">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile</span>
            </div>
            
            <div className="nav-item" onClick={() => router.push('/topicspage')}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Content</span>
            </div>
            
            <div className="nav-item" onClick={() => router.push('/')}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Activity Stats</span>
            </div>

            <div className="nav-item logout" onClick={handleLogout}>
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </div>
          </nav>
        </aside>

        <main className="main-content">
          <div className="profile-card">
            <div className="avatar-container">
              <div className="avatar">
                <img 
                  src={'https://api.dicebear.com/7.x/avataaars/svg?seed=' + username}
                  alt="Profile Avatar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="field">
              <span className="field-text">@{username}</span>
            </div>

            <div className="field">
              {isEditingName ? (
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  onBlur={handleNameBlur}
                  autoFocus
                  disabled={saving}
                />
              ) : (
                <span className="field-text">{displayName}</span>
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
                <span className="field-text" style={{ marginRight: '8px' }}>Gender :</span>
                <div className="gender-buttons">
                  <button
                    className={'gender-btn ' + (gender === 'F' ? 'active' : '')}
                    onClick={() => handleGenderChange('F')}
                    disabled={saving}
                  >
                    F
                  </button>
                  <span className="gender-separator">/</span>
                  <button
                    className={'gender-btn ' + (gender === 'M' ? 'active' : '')}
                    onClick={() => handleGenderChange('M')}
                    disabled={saving}
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
                  onBlur={handleEmailBlur}
                  placeholder="Enter email"
                  autoFocus
                  disabled={saving}
                />
              ) : (
                <span className="field-text">{email || 'Add email'}</span>
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

            <div 
              className="field" 
              style={{ cursor: 'pointer' }}
              onClick={() => setShowPasswordModal(true)}
            >
              <span className="field-text">Change Password</span>
              <svg
                className="edit-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>

            {saving && <div className="saving-indicator">Saving...</div>}
          </div>
        </main>
      </div>

      {showPasswordModal && (
        <div className="modal-overlay" onClick={() => setShowPasswordModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Change Password</h2>
            <form onSubmit={handlePasswordChange} className="modal-form">
              <input
                type="password"
                placeholder="Current Password"
                className="modal-input"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                required
              />
              <input
                type="password"
                placeholder="New Password"
                className="modal-input"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="modal-input"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                required
              />
              <div className="modal-buttons">
                <button 
                  type="button" 
                  className="modal-btn modal-btn-secondary"
                  onClick={() => setShowPasswordModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="modal-btn modal-btn-primary">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}