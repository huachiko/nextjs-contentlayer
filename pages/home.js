
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';


const HomePage = () => {
  const router = useRouter()
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [userName, setUserName] = useState('')
  const [statusMessage, setStatusMessage] = useState('Im cooked')
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingStatus, setIsEditingStatus] = useState(false)
    useEffect(() => {
  // Try to load user info from localStorage
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      // Pick whichever field your backend sends back (username or displayName)
      setUserName(user.displayName || user.username || 'User');
    } catch (err) {
      console.error('Failed to parse user info:', err);
    }
  }
}, []);


  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

   const handleNameSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setIsEditingName(false)
    }
  }

  const handleStatusSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setIsEditingStatus(false)
    }
  }

  const handleTopicalQuizClick = () => {
    router.push({
      pathname: '/topicspage',
    })
  }

  const handlePastYearPaperClick = () => {
    router.push('/pyp')
  }

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Home - Quiz App</title>
        </Head>

        <div className="home-page">
          {/* Sidebar Navigation */}
          <div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="menu-button" onClick={toggleSidebar}>
              <div className="menu-icon">{sidebarExpanded ? '✕' : '☰'}</div>
            </button>
            <nav className="nav-items">
        
              <div className="nav-item active">
                <img src="/icons/HomeIcon2.png" alt="Home" />
                {sidebarExpanded && <span className="nav-text">Home</span>}
              </div>
              <div className="nav-item" onClick={() => router.push('/profile')}>
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
                    <div className="nav-subitem" onClick={() => router.push('/topicspage')}>
                      Topics
                    </div>
                    <div className="nav-subitem" onClick={() => router.push('/pyp')}>
                      PYP
                    </div>
                  </div>
                )}
              </div>
              <div className="nav-item" onClick={() => router.push('/activitystatspage')}>
                <img src="/icons/ActivityIcon2.png" alt="Activity" />
                {sidebarExpanded && <span className="nav-text">Activity <p/> Stats</span>}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <div className="content-wrapper">
              {/* Welcome Header */}
            <h1 className="welcome-title">Hi, welcome back {userName || 'Guest'}</h1>

              {/* Recent Quiz Section */}
              <div className="recent-quiz-section">
                <div className="recent-quiz-badge">Recent Quiz</div>
                <div className="recent-quiz-card">
                  <div className="quiz-info">
                    <h2 className="quiz-title">Quadratic Functions</h2>
                    <p className="quiz-subtitle">You spent 3 hours on this quiz!</p>
                  </div>
                  <div className="calculator-illustration">
                    <img src="/calculator.png" alt="Calculator" className="calculator-img" />
                  </div>
                </div>
              </div>

              {/* Quiz Options */}
              <div className="quiz-options">
                <button className="quiz-option-card" onClick={handleTopicalQuizClick}>
                  <div className="quiz-icon abcd-icon">
                    <div className="icon-grid">
                      <span className="icon-letter orange">A</span>
                      <span className="icon-letter yellow">C</span>
                      <span className="icon-letter blue">B</span>
                      <span className="icon-letter green">✓</span>
                    </div>
                  </div>
                  <h3 className="option-title">Topical Quiz</h3>
                </button>

                <button className="quiz-option-card" onClick={handlePastYearPaperClick}>
                  <div className="quiz-icon paper-icon">
                    <svg viewBox="0 0 100 100" className="paper-svg">
                      <rect x="20" y="15" width="60" height="70" fill="white" stroke="#333" strokeWidth="3" rx="4"/>
                      <line x1="30" y1="30" x2="60" y2="30" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="30" y1="45" x2="70" y2="45" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="30" y1="55" x2="70" y2="55" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="30" y1="65" x2="55" y2="65" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="75" cy="70" r="18" fill="#FF9800"/>
                      <path d="M 65 75 L 70 80 L 85 60" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="option-title">Past Year Paper</h3>
                </button>
              </div>
            </div>

            {/* Profile Sidebar */}
            <div className="topicspage-profile">
              <div className="topicspage-profile-header">
                <img src="/3d-avatar-12.png" alt="Avatar" className="topicspage-avatars3davatar12" />
                <div className="topicspage-SpeechBubble">
                  {isEditingStatus ? (
                    <input
                      type="text"
                      value={statusMessage}
                      onChange={(e) => setStatusMessage(e.target.value)}
                      onBlur={handleStatusSubmit}
                      onKeyPress={handleStatusSubmit}
                      className="topicspage-status-input"
                      autoFocus
                      maxLength={20}
                    />
                  ) : (
                    <span 
                      className="topicspage-text11"
                      onClick={() => setIsEditingStatus(true)}
                    >
                      {statusMessage}
                    </span>
                  )}
                </div>
                <div className="topicspage-name-section">
                  {isEditingName ? (
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      onBlur={handleNameSubmit}
                      onKeyPress={handleNameSubmit}
                      className="topicspage-name-input"
                      autoFocus
                      maxLength={30}
                    />
                  ) : (
                    <span 
                      className="topicspage-text12"
                      onClick={() => setIsEditingName(true)}
                    >
                      {userName}
                    </span>
                  )}
                  <img 
                    src="/edit.png" 
                    alt="Edit" 
                    className="topicspage-edit"
                    onClick={() => setIsEditingName(true)}
                  />
                </div>
              </div>
              
              <div className="topicspage-group11">
                <img src="/GenericAvatar.png" alt="Avatar" className="topicspage-genericavatar" />
                <span className="topicspage-text13">4 Friends Online</span>
                <div className="topicspage-avatar-group">
                  <img src="/AvatarGroup.png" alt="Avatars" className="topicspage-avatargroup" />
                  <div className="topicspage-overflow">+1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .home-container {
          width: 100vw;
          max-width: 100vw;
          overflow-x: hidden;
          min-height: 100vh;
          background-color: rgba(188, 203, 184, 1);
        }

        .home-page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          position: relative;
        }

        /* Sidebar */
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
          gap: 40px;
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

        /* Main Content */
        .main-content {
          flex: 1;
          padding: 50px 40px;
          display: flex;
          gap: 40px;
          transition: all 0.3s ease;
        }

        .main-content.sidebar-expanded {
          margin-left: 174px;
          width: calc(100vw - 174px);
          max-width: calc(100vw - 174px);
        }

        .main-content.sidebar-collapsed {
          margin-left: 80px;
          width: calc(100vw - 80px);
          max-width: calc(100vw - 80px);
        }

        .content-wrapper {
          flex: 1;
          max-width: 1200px;
          min-width: 0;
        }

        /* Welcome Title */
        .welcome-title {
          font-size: 56px;
          font-weight: 400;
          font-family: 'Madimi One', sans-serif;
          color: rgba(28, 42, 58, 1);
          margin-bottom: 40px;
          line-height: 1.2;
        }

        /* Recent Quiz Section */
        .recent-quiz-section {
          margin-bottom: 60px;
        }

        .recent-quiz-badge {
          background-color: rgba(188, 203, 184, 1);
          color: rgba(74, 68, 89, 1);
          font-size: 16px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          padding: 12px 28px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .recent-quiz-card {
          background: white;
          border-radius: 40px;
          padding: 50px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .quiz-info {
          flex: 1;
          z-index: 2;
        }

        .quiz-title {
          font-size: 42px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          color: rgba(28, 42, 58, 1);
          margin-bottom: 12px;
        }

        .quiz-subtitle {
          font-size: 18px;
          font-weight: 400;
          font-family: 'Inter', sans-serif;
          color: rgba(100, 100, 100, 1);
          margin: 0;
        }

        .calculator-illustration {
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .calculator-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Quiz Options */
        .quiz-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .quiz-option-card {
          background: white;
          border-radius: 32px;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
        }

        .quiz-option-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .quiz-option-card:active {
          transform: translateY(-3px);
        }

        .quiz-icon {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          width: 100%;
          height: 100%;
        }

        .icon-letter {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          border-radius: 12px;
          color: white;
        }

        .icon-letter.orange {
          background-color: #FF9800;
        }

        .icon-letter.yellow {
          background-color: #FFC107;
        }

        .icon-letter.blue {
          background-color: #2196F3;
        }

        .icon-letter.green {
          background-color: #4CAF50;
          font-size: 36px;
        }

        .paper-svg {
          width: 100%;
          height: 100%;
        }

        .option-title {
          font-size: 24px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          color: rgba(28, 42, 58, 1);
          margin: 0;
        }

        /* Profile section */
        .topicspage-profile {
          width: 360px;
          min-width: 360px;
          max-width: 360px;
          height: fit-content;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 50px;
          background: white;
          border-radius: 32px;
          padding: 32px 28px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .topicspage-profile-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
        }

        .topicspage-avatars3davatar12 {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
        }

        .topicspage-SpeechBubble {
          position: absolute;
          top: -15px;
          right: 15px;
          background: white;
          padding: 10px 18px;
          border-radius: 18px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s;
        }

        .topicspage-SpeechBubble:hover {
          transform: scale(1.02);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        }

        .topicspage-text11 {
          color: rgba(0, 0, 0, 1);
          font-size: 15px;
          font-style: normal;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          margin: 0;
          cursor: pointer;
        }

        .topicspage-status-input {
          border: none;
          outline: none;
          font-size: 15px;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          background: transparent;
          width: 100%;
          padding: 0;
        }

        .topicspage-name-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .topicspage-text12 {
          color: rgba(0, 0, 0, 1);
          font-size: 28px;
          font-style: normal;
          font-family: Magra, sans-serif;
          font-weight: 700;
          margin: 0;
          cursor: pointer;
          transition: color 0.2s;
        }

        .topicspage-text12:hover {
          color: rgba(74, 68, 89, 1);
        }

        .topicspage-name-input {
          border: none;
          outline: none;
          font-size: 28px;
          font-family: Magra, sans-serif;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
          background: transparent;
          padding: 0;
          border-bottom: 2px solid rgba(74, 68, 89, 1);
        }

        .topicspage-edit {
          width: 22px;
          height: 22px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .topicspage-edit:hover {
          transform: scale(1.1);
        }

        .topicspage-group11 {
          width: 100%;
          background: rgba(245, 245, 245, 1);
          border-radius: 22px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .topicspage-genericavatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .topicspage-text13 {
          color: rgba(0, 0, 0, 1);
          font-size: 15px;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          flex: 1;
          white-space: nowrap;
        }

        .topicspage-avatar-group {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .topicspage-avatargroup {
          height: 28px;
          width: auto;
        }

        .topicspage-overflow {
          background: rgba(230, 230, 230, 1);
          border-radius: 6px;
          padding: 4px 7px;
          font-size: 12px;
          color: rgba(100, 100, 100, 1);
          font-family: Roboto, sans-serif;
        }

        /* Responsive */
        @media(max-width: 1600px) {
          .profile-sidebar {
            width: 340px;
            min-width: 340px;
            max-width: 340px;
          }

          .main-content {
            gap: 32px;
            padding: 40px 32px;
          }
        }

        @media(max-width: 1400px) {
          .profile-sidebar {
            display: none;
          }

          .content-wrapper {
            max-width: 100%;
          }
        }

        @media(max-width: 1024px) {
          .welcome-title {
            font-size: 44px;
          }

          .quiz-title {
            font-size: 36px;
          }

          .calculator-illustration {
            width: 220px;
            height: 220px;
          }
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

          .main-content.sidebar-expanded {
            margin-left: 80px;
            padding: 24px;
            width: calc(100vw - 80px);
            max-width: calc(100vw - 80px);
          }

          .main-content.sidebar-collapsed {
            margin-left: 60px;
            padding: 24px;
            width: calc(100vw - 60px);
            max-width: calc(100vw - 60px);
          }

          .welcome-title {
            font-size: 36px;
            margin-bottom: 30px;
          }

          .recent-quiz-card {
            flex-direction: column;
            padding: 40px 30px;
            text-align: center;
          }

          .calculator-illustration {
            width: 180px;
            height: 180px;
          }

          .quiz-options {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media(max-width: 480px) {
          .welcome-title {
            font-size: 28px;
          }

          .quiz-title {
            font-size: 28px;
          }

          .recent-quiz-card {
            padding: 30px 20px;
          }

          .quiz-option-card {
            padding: 36px 28px;
          }

          .quiz-icon {
            width: 100px;
            height: 100px;
          }

          .option-title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default HomePage