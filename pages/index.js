import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link';

const HomePage = () => {
  const router = useRouter()
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  const handleTopicalQuizClick = () => {
    router.push({
      pathname: '/topicspage',
    })
  }

  const handlePastYearPaperClick = () => {
    // Add navigation for past year paper if needed
    console.log('Past Year Paper clicked')
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
      
              <Link href="/profile">
              <div className="nav-item">
                <img src="/icons/ProfileIcon2.png" alt="Profile" />
                {sidebarExpanded && <span className="nav-text">Profile</span>}
              </div>
              </Link>
              <Link href="/topicspage">
              <div className="nav-item">
                <img src="/icons/ContentIcon1.png" alt="Content" />
                {sidebarExpanded && <span className="nav-text">Content</span>}
              </div>
              </Link>
              <div className="nav-item">
                <img src="/icons/ActivityIcon2.png" alt="Activity" />
                {sidebarExpanded && <span className="nav-text">Activity Stats</span>}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <div className="content-wrapper">
              {/* Welcome Header */}
              <h1 className="welcome-title">Hi, welcome back Ally</h1>

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
            <div className="profile-sidebar">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="speech-bubble">Im cooked</div>
                  <img src="/3d-avatar-12.png" alt="Avatar" className="profile-avatar" />
                </div>
                <div className="profile-name">
                  <span>Ally lee</span>
                  <img src="/edit.png" alt="Edit" className="edit-icon" />
                </div>
              </div>

              <div className="friends-section">
                <img src="/GenericAvatar.png" alt="Friends" className="friends-icon" />
                <span className="friends-text">4 Friends Online</span>
                <div className="avatar-group">
                  <img src="/AvatarGroup.png" alt="Friend avatars" className="avatar-group-img" />
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

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 100px;
          cursor: pointer;
          transition: background-color 0.2s;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          white-space: nowrap;
        }

        .sidebar.collapsed .nav-item {
          justify-content: center;
          padding: 16px 12px;
        }

        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nav-item.active {
          background-color: rgba(232, 222, 248, 1);
          color: rgba(74, 68, 89, 1);
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

        /* Profile Sidebar */
        .profile-sidebar {
          width: 360px;
          min-width: 360px;
          max-width: 360px;
          height: fit-content;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: sticky;
          top: 50px;
        }

        .profile-card {
          background: white;
          border-radius: 32px;
          padding: 32px 28px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .profile-header {
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .speech-bubble {
          position: absolute;
          top: -10px;
          right: 40px;
          background: rgba(255, 182, 193, 1);
          padding: 10px 18px;
          border-radius: 18px;
          font-size: 15px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          color: rgba(28, 42, 58, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
        }

        .profile-name {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 28px;
          font-weight: 700;
          font-family: 'Magra', sans-serif;
          color: rgba(28, 42, 58, 1);
        }

        .edit-icon {
          width: 22px;
          height: 22px;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .edit-icon:hover {
          opacity: 1;
        }

        .friends-section {
          background: white;
          border-radius: 22px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .friends-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .friends-text {
          font-size: 15px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          color: rgba(28, 42, 58, 1);
          flex: 1;
        }

        .avatar-group-img {
          height: 28px;
          width: auto;
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