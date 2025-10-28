import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const ActivityStatsPage = () => {
  const router = useRouter()
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [selectedTimeframe, setSelectedTimeframe] = useState('week')

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  // Mock data for quiz history
  const quizHistory = [
    { id: 1, topic: 'Quadratic Functions', score: '6/10', percentage: 60, date: '2025-10-20' },
    { id: 2, topic: 'Surds', score: '8/10', percentage: 80, date: '2025-10-19' },
    { id: 3, topic: 'Circles', score: '7/10', percentage: 70, date: '2025-10-18' },
    { id: 4, topic: 'Integration', score: '9/10', percentage: 90, date: '2025-10-17' }
  ]

  // Mock data for daily productivity (time in minutes per topic)
  const productivityData = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    topics: [
      { name: 'Quadratic Functions', color: '#f59e0b', data: [0, 25, 30, 0, 20, 0, 35] },
      { name: 'Surds', color: '#3b82f6', data: [20, 0, 35, 30, 0, 25, 20] },
      { name: 'Integration', color: '#8b5cf6', data: [15, 20, 0, 25, 30, 0, 15] },
      { name: 'Circles', color: '#10b981', data: [0, 15, 25, 20, 15, 10, 10] }
    ]
  }

  // Mock data for leaderboard
  const leaderboard = [
    { rank: 1, name: 'Charles Puyol Capitano', avatar: '/avatar1.png', course: 53, hours: 250, points: 13450, trend: 'up' },
    { rank: 2, name: 'Alexandra Morgan', avatar: '/avatar2.png', course: 88, hours: 232, points: 10333, trend: 'down' },
    { rank: 3, name: 'You', avatar: '/3d-avatar-12.png', course: 45, hours: 180, points: 8920, trend: 'up' },
    { rank: 4, name: 'Sarah Johnson', avatar: '/avatar4.png', course: 62, hours: 175, points: 8450, trend: 'up' },
    { rank: 5, name: 'Mike Chen', avatar: '/avatar5.png', course: 51, hours: 160, points: 7890, trend: 'down' }
  ]

  // Calculate overall progress
  const totalQuizzes = quizHistory.length
  const averageScore = Math.round(quizHistory.reduce((sum, quiz) => sum + quiz.percentage, 0) / totalQuizzes)
  const currentRanking = 15
  
  // Calculate max height for chart scaling
  const maxHeight = Math.max(
    ...productivityData.topics.flatMap(topic => topic.data)
  )

  // Calculate total time per day
  const totalTimePerDay = productivityData.days.map((_, dayIndex) => 
    productivityData.topics.reduce((sum, topic) => sum + topic.data[dayIndex], 0)
  )

  return (
    <>
      <div className="stats-container">
        <Head>
          <title>Activity Stats</title>
        </Head>

        <div className="stats-page">
          {/* Sidebar Navigation */}
          <div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="menu-button" onClick={toggleSidebar}>
              <div className="menu-icon">{sidebarExpanded ? '✕' : '☰'}</div>
            </button>
            <nav className="nav-items">
              <div className="nav-item" onClick={() => router.push('/')}>
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
              <div className="nav-item active">
                <img src="/icons/ActivityIcon2.png" alt="Activity" />
                {sidebarExpanded && <span className="nav-text">Activity <p/> Stats</span>}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            {/* Left Column */}
            <div className="left-column">
              {/* History Section */}
              <section className="section">
                <h2 className="section-title">History</h2>
                <div className="history-grid">
                  {quizHistory.map((quiz) => (
                    <div key={quiz.id} className="history-card">
                      <div className="score-badge">
                        <span className="score-text">{quiz.score}</span>
                      </div>
                      <h3 className="topic-name">{quiz.topic}</h3>
                      <div className="quiz-meta">
                        <span className="percentage">{quiz.percentage}%</span>
                        <span className="date">{new Date(quiz.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements Section */}
              <section className="section">
                <h2 className="section-title">Achievements</h2>
                <div className="leaderboard-card">
                  <h3 className="leaderboard-title">Leaderboard</h3>
                  <table className="leaderboard-table">
                    <thead>
                      <tr>
                        <th>RANK</th>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>HOUR</th>
                        <th>POINT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((entry) => (
                        <tr key={entry.rank} className={entry.name === 'You' ? 'current-user' : ''}>
                          <td>
                            <div className="rank-cell">
                              {entry.rank}
                              <span className={`trend-icon ${entry.trend}`}>
                                {entry.trend === 'up' ? '▲' : '▼'}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="name-cell">
                              <img src={entry.avatar} alt={entry.name} className="avatar" />
                              <span>{entry.name}</span>
                            </div>
                          </td>
                          <td>{entry.course}</td>
                          <td>{entry.hours}</td>
                          <td className="points">{entry.points.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Stats Section */}
              <section className="section">
                <h2 className="section-title">Stats</h2>
                
                {/* Productivity Chart */}
                <div className="stats-card">
                  <div className="stats-header">
                    <h3 className="stats-card-title">Productivity</h3>
                    <div className="progress-circle">
                      <svg width="80" height="80" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="35" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                        <circle 
                          cx="40" cy="40" r="35" fill="none" 
                          stroke="url(#gradient)" strokeWidth="8"
                          strokeDasharray={`${2 * Math.PI * 35 * (averageScore / 100)} ${2 * Math.PI * 35}`}
                          strokeLinecap="round"
                          transform="rotate(-90 40 40)"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#667eea" />
                            <stop offset="100%" stopColor="#f59e0b" />
                          </linearGradient>
                        </defs>
                        <text x="40" y="45" textAnchor="middle" fontSize="20" fontWeight="700" fill="#333">
                          {averageScore}%
                        </text>
                      </svg>
                      <span className="progress-label">Progress</span>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="chart-container">
                    <div className="chart">
                      {productivityData.days.map((day, dayIndex) => (
                        <div key={day} className="chart-bar-group">
                          <div className="chart-bars">
                            {productivityData.topics.map((topic, topicIndex) => {
                              const timeSpent = topic.data[dayIndex]
                              if (timeSpent === 0) return null
                              return (
                                <div 
                                  key={topicIndex}
                                  className="chart-bar"
                                  style={{ 
                                    height: `${(timeSpent / maxHeight) * 100}%`,
                                    backgroundColor: topic.color
                                  }}
                                  title={`${topic.name}: ${timeSpent} mins`}
                                />
                              )
                            })}
                          </div>
                          <span className="chart-label">{day}</span>
                          {totalTimePerDay[dayIndex] > 0 && (
                            <span className="total-time">{totalTimePerDay[dayIndex]}m</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="chart-legend">
                      {productivityData.topics.map((topic, index) => (
                        <div key={index} className="legend-item">
                          <span 
                            className="legend-dot"
                            style={{ backgroundColor: topic.color }}
                          ></span>
                          <span>{topic.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Summary */}
              <section className="section">
                <h2 className="section-title">Data</h2>
                <div className="data-grid">
                  <div className="data-card large">
                    <svg width="120" height="120" viewBox="0 0 120 120" className="data-circle">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#e0e0e0" strokeWidth="10" />
                      <circle 
                        cx="60" cy="60" r="50" fill="none" 
                        stroke="url(#dataGradient)" strokeWidth="10"
                        strokeDasharray={`${2 * Math.PI * 50 * 0.6} ${2 * Math.PI * 50}`}
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                      />
                      <defs>
                        <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                      <text x="60" y="70" textAnchor="middle" fontSize="32" fontWeight="900" fill="#333">
                        60%
                      </text>
                    </svg>
                    <p className="data-subtitle">More than most people!</p>
                  </div>

                  <div className="data-card small">
                    <div className="data-icon">🏆</div>
                    <div className="data-value">{currentRanking}</div>
                    <div className="data-label">Ranking</div>
                  </div>

                  <div className="data-card small">
                    <div className="data-icon">🏆</div>
                    <div className="data-value">{averageScore}%</div>
                    <div className="data-label">Progress</div>
                  </div>
                </div>
              </section>
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

        .stats-container {
          width: 100vw;
          max-width: 100vw;
          overflow-x: hidden;
          min-height: 100vh;
          background-color: rgba(188, 203, 184, 1);
        }

        .stats-page {
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
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          transition: all 0.3s ease;
        }

        .main-content.sidebar-expanded {
          margin-left: 174px;
        }

        .main-content.sidebar-collapsed {
          margin-left: 80px;
        }

        .left-column,
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Section Styles */
        .section {
          width: 100%;
        }

        .section-title {
          font-size: 48px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          color: rgba(28, 42, 58, 1);
          margin-bottom: 24px;
        }

        /* History Cards */
        .history-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .history-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .history-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .score-badge {
          font-size: 32px;
          font-weight: 900;
          font-family: 'Inter', sans-serif;
          color: rgba(103, 80, 164, 1);
          margin-bottom: 16px;
        }

        .topic-name {
          font-size: 18px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          color: #333;
          margin-bottom: 12px;
        }

        .quiz-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #666;
        }

        .percentage {
          font-weight: 600;
          color: rgba(103, 80, 164, 1);
        }

        /* Leaderboard */
        .leaderboard-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .leaderboard-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          font-family: 'Inter', sans-serif;
        }

        .leaderboard-table {
          width: 100%;
          border-collapse: collapse;
        }

        .leaderboard-table thead {
          border-bottom: 2px solid #e0e0e0;
        }

        .leaderboard-table th {
          text-align: left;
          padding: 12px 8px;
          font-size: 11px;
          font-weight: 600;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .leaderboard-table td {
          padding: 16px 8px;
          border-bottom: 1px solid #f0f0f0;
          font-size: 14px;
          color: #333;
        }

        .leaderboard-table tr:hover {
          background: #f9f9f9;
        }

        .leaderboard-table tr.current-user {
          background: rgba(103, 80, 164, 0.05);
        }

        .rank-cell {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .trend-icon {
          font-size: 10px;
        }

        .trend-icon.up {
          color: #4ade80;
        }

        .trend-icon.down {
          color: #ef4444;
        }

        .name-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .points {
          color: rgba(103, 80, 164, 1);
          font-weight: 600;
        }

        /* Stats Card */
        .stats-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .stats-card-title {
          font-size: 20px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
        }

        .progress-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .progress-label {
          font-size: 12px;
          color: #666;
          font-weight: 500;
        }

        /* Chart */
        .chart-container {
          margin-top: 24px;
        }

        .chart {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          height: 180px;
          padding: 0 8px;
          margin-bottom: 16px;
        }

        .chart-bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .chart-bars {
          display: flex;
          gap: 3px;
          height: 160px;
          align-items: flex-end;
        }

        .chart-bar {
          width: 12px;
          border-radius: 6px 6px 0 0;
          transition: all 0.3s;
          min-height: 8px;
        }

        .chart-bar-group:hover .chart-bar {
          opacity: 0.8;
          transform: scaleY(1.05);
        }

        .chart-label {
          font-size: 12px;
          color: #666;
          font-weight: 500;
        }

        .total-time {
          font-size: 11px;
          color: #999;
          font-weight: 600;
        }

        .chart-legend {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #666;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        /* Data Cards */
        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 20px;
        }

        .data-card {
          background: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .data-card.large {
          grid-row: span 2;
        }

        .data-circle {
          margin-bottom: 12px;
        }

        .data-subtitle {
          font-size: 14px;
          color: #666;
          text-align: center;
          font-weight: 500;
        }

        .data-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .data-value {
          font-size: 36px;
          font-weight: 900;
          font-family: 'Inter', sans-serif;
          color: #333;
          margin-bottom: 4px;
        }

        .data-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }

        /* Responsive */
        @media(max-width: 1400px) {
          .main-content {
            grid-template-columns: 1fr;
          }

          .history-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }

        @media(max-width: 768px) {
          .sidebar {
            width: 80px;
            min-width: 80px;
            padding: 44px 12px 20px;
          }

          .sidebar .nav-text {
            display: none;
          }

          .main-content.sidebar-expanded {
            margin-left: 80px;
          }

          .main-content {
            padding: 24px;
          }

          .section-title {
            font-size: 32px;
          }

          .history-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default ActivityStatsPage