import React, { useEffect, useState } from "react";
import Head from "next/head";
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

  // hydrate user (same shape as your Home page)
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("user") : null;
      if (!raw) return router.replace("/");
      const parsed = JSON.parse(raw);
      const id = parsed?.id ?? parsed?.user?.id ?? parsed?.userId ?? parsed?.data?.user?.id;
      if (!id) return router.replace("/");
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
      router.replace("/");
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
        // API returns last 3 days, each { label: 'YYYY-MM-DD', totalQuestions }
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

  // simple scaling so bars never overflow
  const rawMax = Math.max(1, ...stats.map(d => d.totalQuestions || 0));
  const plotHeight = 160; // px
  const scale = plotHeight / rawMax;

  return (
    <>
      <Head><title>Activity Stats</title></Head>

      <div className="home-container">
        <div className="home-page">
          {/* Sidebar — EXACT copy from Home */}
<div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
  <button className="menu-button" onClick={toggleSidebar}>
    <div className="menu-icon">{sidebarExpanded ? '✕' : '☰'}</div>
  </button>

  <nav className="nav-items">
    <div className="nav-item" onClick={() => router.push('/home')}>
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

    <div className="nav-item active" onClick={() => router.push('/activitystatspage')}>
      <img src="/icons/ActivityIcon2.png" alt="Activity" />
      {sidebarExpanded && <span className="nav-text">Activity Stats</span>}
    </div>
  </nav>

  {/* Sign Out Button */}
  <button className="nav-item sign-out-button" onClick={handleSignOut}>
    {sidebarExpanded && <span className="nav-text">Sign Out</span>}
  </button>
</div>


          {/* Main (2 columns, 2 rows; left spans both rows) */}
          <div className={`main-content ${sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"}`}>
            <div className="activity-grid">
              {/* LEFT (spans rows 1–2): STATS */}
              <section className="card stats-card">
                <div className="section-head">
                  <h2>Stats</h2>
                  <div className="sub">Last 3 days • total questions you generated</div>
                </div>

                {loading ? (
                  <div className="loading">Loading…</div>
                ) : (
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
        /* Base container + sidebar copied from Home page for consistent look */
        .home-container { width: 100vw; max-width: 100vw; overflow-x: hidden; min-height: 100vh; background: rgba(188,203,184,1); }
        .home-page { width: 100%; min-height: 100vh; display: flex; position: relative; }

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
        .menu-icon { display: flex; align-items: center; justify-content: center; }

        .nav-items { display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .nav-item, .nav-item-parent {
          display: flex; flex-direction: column; border-radius: 100px; cursor: pointer;
          transition: background-color 0.2s; color: rgba(255,255,255,0.9); font-size: 14px;
          font-family: Roboto, sans-serif; font-weight: 500; white-space: nowrap;
        }
        .nav-item { align-items: center; gap: 12px; padding: 16px; flex-direction: row; }
        .nav-item:hover { background-color: rgba(255, 255, 255, 0.1); }
        .nav-item.active { background-color: rgba(232, 222, 248, 1); color: rgba(74, 68, 89, 1); }
        .nav-item img { width: 24px; height: 24px; flex-shrink: 0; }

        .nav-item-parent { border-radius: 20px; padding: 0; }
        .nav-item-parent.active { background-color: rgba(232, 222, 248, 1); color: rgba(74, 68, 89, 1); }
        .nav-item-main { display: flex; align-items: center; gap: 12px; padding: 16px; }
        .nav-item-parent:not(.active) .nav-item-main:hover { background-color: rgba(255, 255, 255, 0.1); border-radius: 20px; }

        .nav-subitems { display: flex; flex-direction: column; padding: 0 16px 12px 16px; gap: 4px; }
        .nav-subitem { padding: 10px 16px; font-size: 13px; border-radius: 12px; cursor: pointer;
          transition: background-color 0.2s; color: rgba(74,68,89,0.8); }
        .nav-subitem:hover { background-color: rgba(255, 255, 255, 0.5); }
        .nav-subitem.active-sub { background-color: rgba(103, 80, 164, 0.2); color: rgba(74, 68, 89, 1); font-weight: 600; }

        .nav-text { transition: opacity 0.3s; }
        .sidebar.collapsed .nav-text { display: none; }

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

        .main-content { flex:1; padding:50px 40px; display:flex; transition:all .3s ease; }
        .main-content.sidebar-expanded { margin-left:174px; width:calc(100vw - 174px); max-width:calc(100vw - 174px); }
        .main-content.sidebar-collapsed { margin-left:80px; width:calc(100vw - 80px); max-width:calc(100vw - 80px); }

        /* 2 cols × 2 rows; left column spans both rows */
        .activity-grid {
        display: grid;
        grid-template-columns: 1.6fr 1.2fr;
        grid-template-rows: 1fr 1fr; /* equal height rows */
        gap: 24px;
        width: 100%;
        min-height: calc(100vh - 120px); /* ensure full viewport height */
        align-items: stretch; /* make cards fill full row height */
        }
        .stats-card {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        }
        .history-card { grid-column:2 / 3; grid-row:1 / 2; }
        .leaderboard-card { grid-column:2 / 3; grid-row:2 / 3; }

        .card { background:#fff; border-radius:24px; padding:20px; box-shadow:0 12px 30px rgba(0,0,0,.08); }
        .card h2 { margin:0 0 6px; font-size:32px; color:#1c2a3a; font-family: 'Madimi One', sans-serif; }
        .section-head .sub { color:#666; font-size:14px; margin-top:4px; }

        /* History block */
        .history-grid { display:grid; grid-template-columns: 1fr 1fr; gap:16px; }
        .history-item { background:#fff; border-radius:18px; padding:16px; box-shadow:0 4px 14px rgba(0,0,0,.08); }
        .h-score .big { font-size:26px; color:#6a56c9; font-weight:800; }
        .h-topic { margin-top:4px; font-weight:600; color:#1c2a3a; }
        .h-meta { margin-top:8px; display:flex; justify-content:space-between; font-size:14px; color:#666; }
        .h-meta .rate { color:#6a56c9; font-weight:600; }

        /* Leaderboard block */
        .leaderboard { display:flex; flex-direction:column; gap:12px; }
        .lb-row { display:grid; grid-template-columns: 40px 1fr 80px 90px; align-items:center; gap:12px; background:#f8f7fd; border-radius:16px; padding:12px 14px; }
        .badge { width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; }
        .rank-1 { background:#f5b000; } .rank-2 { background:#9e9e9e; } .rank-3 { background:#b87333; }
        .lb-name { font-weight:600; color:#1c2a3a; }
        .lb-metric { text-align:right; font-weight:700; color:#6a56c9; }
        .lb-sub { text-align:right; color:#666; font-size:12px; }

        
        .chart3 {
        background: #f8f7fd;
        border-radius: 16px;
        padding: 20px;
        height: 530px; /* increased from 220px */
        display: flex;
        align-items: flex-end;
        gap: 22px;
        overflow: hidden;
        }
        .bar { max-height: 360px; } /* allow tall bars */
        .bar-wrap { display:flex; flex-direction:column; align-items:center; gap:6px; flex:1; min-width:48px; }
        .bar { width:32px; max-height:160px; border-radius:8px; background:#6a56c9; transition:height 200ms ease; }
        .bar-caption { text-align:center; font-size:12px; color:#333; }
        .bar-date { font-weight:600; }
        .bar-count { color:#666; }

        .loading { color:#1c2a3a; }
        .muted { color:#666; }

        /* Responsive: stack sections on narrow screens */
        @media (max-width: 1100px) {
          .activity-grid { grid-template-columns: 1fr; grid-template-rows: auto auto auto; }
          .stats-card { grid-column:1; grid-row:1; }
          .history-card { grid-column:1; grid-row:2; }
          .leaderboard-card { grid-column:1; grid-row:3; }
          .history-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .sidebar { width:80px; min-width:80px; padding:44px 12px 20px; }
          .sidebar.collapsed { width:60px; min-width:60px; padding:44px 8px 20px; }
          .sidebar .nav-text { display:none; }
          .main-content.sidebar-expanded { margin-left:80px; padding:24px; width:calc(100vw - 80px); max-width:calc(100vw - 80px); }
          .main-content.sidebar-collapsed { margin-left:60px; padding:24px; width:calc(100vw - 60px); max-width:calc(100vw - 60px); }
        }
      `}</style>
    </>
  );
}
