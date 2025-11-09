import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ActivityStatsPage() {
  const router = useRouter();
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // session user
  const [userId, setUserId] = useState(null);
  const [displayName, setDisplayName] = useState("");

  // data
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, setStats] = useState([]);

  // hydrate user
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("user") : null;
      if (!raw) {
        router.push("/");
        return;
      }
      const parsed = JSON.parse(raw);
      const id = parsed?.id ?? parsed?.user?.id ?? parsed?.userId ?? parsed?.data?.user?.id;
      if (!id) {
        router.push("/");
        return;
      }
      setUserId(Number(id));
      setDisplayName(
        parsed?.displayName ||
          parsed?.user?.displayName ||
          parsed?.username ||
          parsed?.user?.username ||
          parsed?.email ||
          "Friend"
      );
    } catch (e) {
      console.error("session read error:", e);
      router.push("/");
    }
  }, [router]);

  // load stats for this user
  useEffect(() => {
    const run = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/activity-stats?userId=${userId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed to load");
        setHistory(data.history || []);
        setLeaderboard(data.leaderboard || []);
        setStats(data.stats || []);
      } catch (e) {
        console.error("activity load error:", e);
        alert("Failed to load activity stats. See console.");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [userId]);

  const toggleSidebar = () => setSidebarExpanded(s => !s);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  const navigate = (path) => {
    router.push(path);
  };

  // simple scaling so bars never overflow
  const rawMax = Math.max(1, ...stats.map(d => d.totalQuestions || 0));
  const plotHeight = 320;
  const scale = plotHeight / rawMax;

  return (
    <>
      <div className="home-container">
        <div className="home-page">
          {/* Sidebar */}
          <div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="menu-button" onClick={toggleSidebar}>
              <div className="menu-icon">{sidebarExpanded ? '✕' : '☰'}</div>
            </button>

            <nav className="nav-items">
              <div className="nav-item" onClick={() => navigate('/home')}>
                <img src="/icons/HomeIcon2.png" alt="Home" />
                {sidebarExpanded && <span className="nav-text">Home</span>}
              </div>

              <div className="nav-item" onClick={() => navigate('/profile')}>
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

              <div className="nav-item active" onClick={() => navigate('/activitystatspage')}>
                <img src="/icons/ActivityIcon2.png" alt="Activity" />
                {sidebarExpanded && <span className="nav-text">Activity <p/>Stats</span>}
              </div>
            </nav>

            <button className="nav-item sign-out-button" onClick={handleSignOut}>
              {sidebarExpanded && <span className="nav-text">Sign Out</span>}
            </button>
          </div>

          {/* Main Content */}
          <div className={`main-content ${sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"}`}>
            <div className="activity-grid">
              {/* LEFT: STATS */}
              <section className="card stats-card">
                <div className="section-head">
                  <h2>Stats</h2>
                  <div className="sub">Last 3 days • total questions you generated</div>
                </div>

                {loading ? (
                  <div className="loading">Loading…</div>
                ) : (
                  <div className="chart-container">
                    <div className="chart3">
                      {stats.map(d => {
                        const val = d.totalQuestions || 0;
                        const h = Math.max(4, Math.round(val * scale));
                        const label = d.label.slice(5); // MM-DD
                        return (
                          <div key={d.label} className="bar-wrap">
                            <div className="bar" style={{ height: `${h}px` }} title={`${val}`} />
                            <div className="bar-caption">
                              <div className="bar-date">{label}</div>
                              <div className="bar-count">{val}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>

              {/* RIGHT/TOP: HISTORY */}
              <section className="card history-card">
                <h2>History</h2>
                {loading ? (
                  <div className="loading">Loading…</div>
                ) : (
                  <div className="history-grid">
                    {history.length === 0 && <div className="muted">No recent quizzes yet.</div>}
                    {history.map(h => (
                      <div key={h.id} className="history-item">
                        <div className="h-score">
                          <span className="big">{h.correct}</span>/<span className="big total">{h.total}</span>
                        </div>
                        <div className="h-topic">{h.topic}</div>
                        <div className="h-meta">
                          <span className="rate">{h.rate}%</span>
                          <span className="date">{h.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* RIGHT/BOTTOM: LEADERBOARD */}
              <section className="card leaderboard-card">
                <h2>Leaderboard</h2>
                {loading ? (
                  <div className="loading">Loading…</div>
                ) : (
                  <div className="leaderboard">
                    {leaderboard.length === 0 && <div className="muted">No data yet.</div>}
                    {leaderboard.map(row => (
                      <div key={row.userId} className="lb-row">
                        <div className={`badge rank-${row.rank}`}>{row.rank}</div>
                        <div className="lb-name">{row.name}</div>
                        <div className="lb-metric">{row.avgPercent}%</div>
                        <div className="lb-sub">{row.sumCorrect}/{row.sumTotal}</div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .home-container { 
          width: 100vw; 
          max-width: 100vw; 
          overflow-x: hidden; 
          min-height: 100vh; 
          background: rgba(188,203,184,1); 
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
        
        .nav-item, .nav-item-parent {
          display: flex; 
          flex-direction: column; 
          border-radius: 100px; 
          cursor: pointer;
          transition: background-color 0.2s; 
          color: rgba(255,255,255,0.9); 
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

        .nav-item-parent { 
          border-radius: 20px; 
          padding: 0; 
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
          color: rgba(74,68,89,0.8); 
        }
        
        .nav-subitem:hover { 
          background-color: rgba(255, 255, 255, 0.5); 
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

        /* Main Content */
        .main-content { 
          flex: 1; 
          padding: 50px 40px; 
          display: flex; 
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

        /* Activity Grid Layout */
        .activity-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-template-rows: auto auto;
          gap: 32px;
          width: 100%;
          align-items: start;
        }
        
        .stats-card {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          min-height: 600px;
        }
        
        .history-card { 
          grid-column: 2 / 3; 
          grid-row: 1 / 2; 
        }
        
        .leaderboard-card { 
          grid-column: 2 / 3; 
          grid-row: 2 / 3; 
        }

        /* Card Styling */
        .card { 
          background: #fff; 
          border-radius: 32px; 
          padding: 32px; 
          box-shadow: 0 4px 12px rgba(0,0,0,.08); 
        }
        
        .card h2 { 
          margin: 0 0 8px; 
          font-size: 32px; 
          color: #1c2a3a; 
          font-family: 'Madimi One', sans-serif;
          font-weight: 400;
        }
        
        .section-head .sub { 
          color: #666; 
          font-size: 14px; 
          margin-bottom: 24px; 
        }

        /* Stats Chart */
        .chart-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }
        
        .chart3 {
          background: #f8f7fd;
          border-radius: 20px;
          padding: 32px 24px;
          width: 100%;
          height: 420px;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          gap: 40px;
        }
        
        .bar-wrap { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 12px; 
          flex: 1; 
        }
        
        .bar { 
          width: 48px; 
          max-height: 320px; 
          border-radius: 12px; 
          background: linear-gradient(180deg, #6a56c9 0%, #8b7dd8 100%); 
          transition: all 300ms ease;
          box-shadow: 0 4px 12px rgba(106, 86, 201, 0.3);
        }
        
        .bar:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(106, 86, 201, 0.4);
        }
        
        .bar-caption { 
          text-align: center; 
          font-size: 14px; 
          color: #333; 
        }
        
        .bar-date { 
          font-weight: 600; 
          margin-bottom: 4px;
        }
        
        .bar-count { 
          color: #6a56c9; 
          font-weight: 700;
          font-size: 16px;
        }

        /* History Grid */
        .history-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 16px; 
          margin-top: 20px;
        }
        
        .history-item { 
          background: #f8f7fd; 
          border-radius: 20px; 
          padding: 20px; 
          transition: all 0.2s;
        }
        
        .history-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,.1);
        }
        
        .h-score { 
          margin-bottom: 8px;
        }
        
        .h-score .big { 
          font-size: 28px; 
          color: #6a56c9; 
          font-weight: 800; 
        }
        
        .h-score .total {
          color: #999;
        }
        
        .h-topic { 
          margin-top: 8px; 
          font-weight: 600; 
          color: #1c2a3a; 
          font-size: 16px;
        }
        
        .h-meta { 
          margin-top: 12px; 
          display: flex; 
          justify-content: space-between; 
          font-size: 13px; 
          color: #666; 
        }
        
        .h-meta .rate { 
          color: #6a56c9; 
          font-weight: 700; 
        }

        /* Leaderboard */
        .leaderboard { 
          display: flex; 
          flex-direction: column; 
          gap: 12px; 
          margin-top: 20px;
        }
        
        .lb-row { 
          display: grid; 
          grid-template-columns: 44px 1fr 80px 90px; 
          align-items: center; 
          gap: 12px; 
          background: #f8f7fd; 
          border-radius: 16px; 
          padding: 14px 16px; 
          transition: all 0.2s;
        }
        
        .lb-row:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0,0,0,.08);
        }
        
        .badge { 
          width: 36px; 
          height: 36px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: #fff; 
          font-weight: 700; 
          font-size: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,.2);
        }
        
        .rank-1 { background: linear-gradient(135deg, #f5b000 0%, #ffd700 100%); }
        .rank-2 { background: linear-gradient(135deg, #9e9e9e 0%, #c0c0c0 100%); }
        .rank-3 { background: linear-gradient(135deg, #b87333 0%, #cd7f32 100%); }
        
        .lb-name { 
          font-weight: 600; 
          color: #1c2a3a; 
          font-size: 15px;
        }
        
        .lb-metric { 
          text-align: right; 
          font-weight: 700; 
          color: #6a56c9; 
          font-size: 16px;
        }
        
        .lb-sub { 
          text-align: right; 
          color: #666; 
          font-size: 13px; 
        }

        .loading { 
          color: #1c2a3a; 
          padding: 40px; 
          text-align: center;
          font-size: 18px;
        }
        
        .muted { 
          color: #999; 
          padding: 20px; 
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .activity-grid { 
            grid-template-columns: 1fr; 
            grid-template-rows: auto auto auto; 
          }
          .stats-card { 
            grid-column: 1; 
            grid-row: 1; 
            min-height: 500px;
          }
          .history-card { 
            grid-column: 1; 
            grid-row: 2; 
          }
          .leaderboard-card { 
            grid-column: 1; 
            grid-row: 3; 
          }
          .history-grid { 
            grid-template-columns: 1fr; 
          }
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
            width: calc(100vw - 80px); 
            max-width: calc(100vw - 80px); 
          }
          .main-content.sidebar-collapsed { 
            margin-left: 60px; 
            padding: 24px; 
            width: calc(100vw - 60px); 
            max-width: calc(100vw - 60px); 
          }
          .chart3 {
            gap: 20px;
            padding: 24px 16px;
          }
          .bar {
            width: 36px;
          }
        }
      `}</style>
    </>
  );
}