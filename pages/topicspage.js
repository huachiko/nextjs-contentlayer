import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Topicspage = () => {
  const router = useRouter();

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // replace hard-coded defaults; will hydrate from localStorage on mount
  const [userName, setUserName] = useState('');
  const [statusMessage, setStatusMessage] = useState('Im cooked');

  // keep userId so the page “remembers” it; we’ll also pass it to /quiz
  const [userId, setUserId] = useState(null);

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingStatus, setIsEditingStatus] = useState(false);

  // ⬇️ hydrate from localStorage and guard route
  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
      if (!raw) {
        router.replace('/'); // no session -> back to sign-in
        return;
      }
      const parsed = JSON.parse(raw);
      const id =
        parsed?.id ?? parsed?.user?.id ?? parsed?.userId ?? parsed?.data?.user?.id;

      if (!id) {
        router.replace('/'); // malformed session -> back to sign-in
        return;
      }

      setUserId(Number(id));
      // prefer displayName; fallback to username/email
      const name =
        parsed?.displayName ||
        parsed?.user?.displayName ||
        parsed?.username ||
        parsed?.user?.username ||
        parsed?.email ||
        'Friend';
      setUserName(name);
    } catch (e) {
      console.error('Failed to read user from localStorage:', e);
      router.replace('/');
    }
  }, [router]);

  const handleTopicClick = (topicName, topicTitle) => {
    // include uid for convenience; quiz still reads localStorage itself
    router.push({
      pathname: '/quiz',
      query: {
        topic: topicName,
        title: topicTitle,
        uid: userId || ''
      }
    });
  };

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

  const handleNameSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setIsEditingName(false);
      // (optional) persist edited name locally so it sticks on refresh:
      try {
        const raw = localStorage.getItem('user');
        if (raw) {
          const parsed = JSON.parse(raw);
          const updated = { ...parsed, displayName: userName };
          localStorage.setItem('user', JSON.stringify(updated));
        }
      } catch {}
    }
  };

  const handleStatusSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') setIsEditingStatus(false);
  };

  return (
    <>
      <div className="topicspage-container1">
        <Head>
          <title>Quiz generator</title>
        </Head>
        
        <div className="topicspage-topicspage">
          {/* Sidebar Navigation */}
          <div className={`topicspage-navigation-rail-expanded ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="topicspage-menu-fab">
              <button className="topicspage-iconbuttonstandard" onClick={toggleSidebar}>
                <div className="topicspage-menuicon">{sidebarExpanded ? '✕' : '☰'}</div>
              </button>
            </div>
            <div className="topicspage-segments">
              <div className="topicspage-navitem01" onClick={() => router.push('/home')}>
                <img src="/icons/HomeIcon2.png" alt="Home" className="topicspage-icon" />
                {sidebarExpanded && <span className="topicspage-text">Home</span>}
              </div>
              <div className="topicspage-navitem02" onClick={() => router.push('/profile')}>
                <img src="/icons/ProfileIcon2.png" alt="Profile" className="topicspage-icon" />
                {sidebarExpanded && <span className="topicspage-text">Profile</span>}
              </div>
              <div className="topicspage-navitem-parent active">
                <div className="topicspage-navitem-main">
                  <img src="/icons/ContentIcon1.png" alt="Content" className="topicspage-icon" />
                  {sidebarExpanded && <span className="topicspage-text">Content</span>}
                </div>
                {sidebarExpanded && (
                  <div className="topicspage-nav-subitems">
                    <div className="topicspage-nav-subitem active-sub" onClick={() => router.push('/topicspage')}>
                      Topics
                    </div>
                    <div className="topicspage-nav-subitem" onClick={() => router.push('/pyp')}>
                      PYP
                    </div>
                  </div>
                )}
              </div>
              <div className="topicspage-navitem04" onClick={() => router.push('/activitystatspage')}>
                <img src="/icons/ActivityIcon2.png" alt="Activity" className="topicspage-icon" />
                {sidebarExpanded && <span className="topicspage-text">Activity <p/> Stats</span>}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`topicspage-main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <div className="topicspage-left-section">
              <h1 className="topicspage-text10">Start your learning</h1>
              
              <div className="topicspage-topics-grid">
                {/* Card 1 - Quadratic functions */}
                <button 
                  className="topicspage-group49"
                  onClick={() => handleTopicClick('quadratic-functions', 'Quadratic functions')}
                >
                  <img src="/Rectangle20.png" alt="Space" className="topicspage-rectangle20" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/Group3.png" alt="Icon" className="topicspage-group3" />
                      <span className="topicspage-text15">Quadratic functions</span>
                    </div>
                    <span className="topicspage-text16">2,453 students</span>
                  </div>
                </button>

                {/* Card 2 - Equations and inequalities */}
                <button 
                  className="topicspage-group50"
                  onClick={() => handleTopicClick('equations-inequalities', 'Equations and inequalities')}
                >
                  <img src="/Rectangle21.png" alt="Forest" className="topicspage-rectangle21" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/Group4.png" alt="Icon" className="topicspage-group4" />
                      <span className="topicspage-text17">Equations and inequalities</span>
                    </div>
                    <span className="topicspage-text18">2,453 students</span>
                  </div>
                </button>

                {/* Card 3 - Surds */}
                <button 
                  className="topicspage-group52"
                  onClick={() => handleTopicClick('surds', 'Surds')}
                >
                  <img src="/Rectangle22.png" alt="Sunset" className="topicspage-rectangle22" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/Group51.png" alt="Icon" className="topicspage-group51" />
                      <span className="topicspage-text19">Surds</span>
                    </div>
                    <span className="topicspage-text20">2,453 students</span>
                  </div>
                </button>

                {/* Card 4 - Polynomials and Partial Fractions */}
                <button 
                  className="topicspage-group54"
                  onClick={() => handleTopicClick('polynomials-partial-fractions', 'Polynomials and Partial Fractions')}
                >
                  <img src="/Rectangle23.png" alt="Ocean" className="topicspage-rectangle23" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/Group53.png" alt="Icon" className="topicspage-group53" />
                      <span className="topicspage-text21">Polynomials and Partial Fractions</span>
                    </div>
                    <span className="topicspage-text22">2,453 students</span>
                  </div>
                </button>

                {/* Card 5 - Exponential and Logarithmic Functions */}
                <button 
                  className="topicspage-group49"
                  onClick={() => handleTopicClick('exponential-logarithmic', 'Exponential and Logarithmic Functions')}
                >
                  <img src="/topic5.png" alt="Mountain lake" className="topicspage-rectangle20" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon5.png" alt="Icon" className="topicspage-group3" />
                      <span className="topicspage-text15">Exponential and Logarithmic Functions</span>
                    </div>
                    <span className="topicspage-text16">2,453 students</span>
                  </div>
                </button>

                {/* Card 6 - Binomial Theorem */}
                <button 
                  className="topicspage-group50"
                  onClick={() => handleTopicClick('binomial-theorem', 'Binomial Theorem')}
                >
                  <img src="/topic6.png" alt="Forest path" className="topicspage-rectangle21" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon6.png" alt="Icon" className="topicspage-group4" />
                      <span className="topicspage-text17">Binomial Theorem</span>
                    </div>
                    <span className="topicspage-text18">2,453 students</span>
                  </div>
                </button>

                {/* Card 7 - Coordinate Geometry */}
                <button 
                  className="topicspage-group52"
                  onClick={() => handleTopicClick('coordinate-geometry', 'Coordinate Geometry')}
                >
                  <img src="/topic7.png" alt="Waterfall" className="topicspage-rectangle22" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon7.png" alt="Icon" className="topicspage-group51" />
                      <span className="topicspage-text19">Coordinate Geometry</span>
                    </div>
                    <span className="topicspage-text20">2,453 students</span>
                  </div>
                </button>

                {/* Card 8 - Circles */}
                <button 
                  className="topicspage-group54"
                  onClick={() => handleTopicClick('circles', 'Circles')}
                >
                  <img src="/topic8.png" alt="Winter village" className="topicspage-rectangle23" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon8.png" alt="Icon" className="topicspage-group53" />
                      <span className="topicspage-text21">Circles</span>
                    </div>
                    <span className="topicspage-text22">2,453 students</span>
                  </div>
                </button>

                {/* Card 9 - Application of Straight Line Graphs */}
                <button 
                  className="topicspage-group49"
                  onClick={() => handleTopicClick('straight-line-graphs', 'Application of Straight Line Graphs')}
                >
                  <img src="/topic9.png" alt="Desert sunset" className="topicspage-rectangle20" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon9.png" alt="Icon" className="topicspage-group3" />
                      <span className="topicspage-text15">Application of Straight Line Graphs</span>
                    </div>
                    <span className="topicspage-text16">2,453 students</span>
                  </div>
                </button>

                {/* Card 10 - Trigonometric Functions */}
                <button 
                  className="topicspage-group50"
                  onClick={() => handleTopicClick('trigonometric-functions', 'Trigonometric Functions')}
                >
                  <img src="/topic10.png" alt="Savanna" className="topicspage-rectangle21" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon10.png" alt="Icon" className="topicspage-group4" />
                      <span className="topicspage-text17">Trigonometric Functions</span>
                    </div>
                    <span className="topicspage-text18">2,453 students</span>
                  </div>
                </button>

                {/* Card 11 - Trigonometric Identities and Equations */}
                <button 
                  className="topicspage-group52"
                  onClick={() => handleTopicClick('trig-identities', 'Trigonometric Identities and Equations')}
                >
                  <img src="/topic11.png" alt="Misty lake" className="topicspage-rectangle22" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon11.png" alt="Icon" className="topicspage-group51" />
                      <span className="topicspage-text19">Trigonometric Identities and Equations</span>
                    </div>
                    <span className="topicspage-text20">2,453 students</span>
                  </div>
                </button>

                {/* Card 12 - Differentiation */}
                <button 
                  className="topicspage-group54"
                  onClick={() => handleTopicClick('differentiation', 'Differentiation')}
                >
                  <img src="/topic12.png" alt="Beach sunset" className="topicspage-rectangle23" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon12.png" alt="Icon" className="topicspage-group53" />
                      <span className="topicspage-text21">Differentiation</span>
                    </div>
                    <span className="topicspage-text22">2,453 students</span>
                  </div>
                </button>

                {/* Card 13 - Tangents, Normals and Rates of Change */}
                <button 
                  className="topicspage-group49"
                  onClick={() => handleTopicClick('tangents-normals', 'Tangents, Normals and Rates of Change')}
                >
                  <img src="/topic13.png" alt="Forest morning" className="topicspage-rectangle20" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon13.png" alt="Icon" className="topicspage-group3" />
                      <span className="topicspage-text15">Tangents, Normals and Rates of Change</span>
                    </div>
                    <span className="topicspage-text16">2,453 students</span>
                  </div>
                </button>

                {/* Card 14 - Maxima and Minima */}
                <button 
                  className="topicspage-group50"
                  onClick={() => handleTopicClick('maxima-minima', 'Maxima and Minima')}
                >
                  <img src="/topic14.png" alt="Desert dusk" className="topicspage-rectangle21" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon14.png" alt="Icon" className="topicspage-group4" />
                      <span className="topicspage-text17">Maxima and Minima</span>
                    </div>
                    <span className="topicspage-text18">2,453 students</span>
                  </div>
                </button>

                {/* Card 15 - Differentiation of Trigonometric Functions */}
                <button 
                  className="topicspage-group52"
                  onClick={() => handleTopicClick('diff-trig', 'Differentiation of Trigonometric, Exponential and Logarithmic Functions')}
                >
                  <img src="/topic15.png" alt="Ocean stars" className="topicspage-rectangle22" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon15.png" alt="Icon" className="topicspage-group51" />
                      <span className="topicspage-text19">Differentiation of Trigonometric, Exponential and Logarithmic Functions</span>
                    </div>
                    <span className="topicspage-text20">2,453 students</span>
                  </div>
                </button>

                {/* Card 16 - Integration */}
                <button 
                  className="topicspage-group54"
                  onClick={() => handleTopicClick('integration', 'Integration')}
                >
                  <img src="/topic16.png" alt="Cactus sunset" className="topicspage-rectangle23" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon16.png" alt="Icon" className="topicspage-group53" />
                      <span className="topicspage-text21">Integration</span>
                    </div>
                    <span className="topicspage-text22">2,453 students</span>
                  </div>
                </button>

                {/* Card 17 - Applications of Integration */}
                <button 
                  className="topicspage-group49"
                  onClick={() => handleTopicClick('applications-integration', 'Applications of Integration')}
                >
                  <img src="/topic17.png" alt="Ocean depths" className="topicspage-rectangle20" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon17.png" alt="Icon" className="topicspage-group3" />
                      <span className="topicspage-text15">Applications of Integration</span>
                    </div>
                    <span className="topicspage-text16">2,453 students</span>
                  </div>
                </button>

                {/* Card 18 - Kinematics */}
                <button 
                  className="topicspage-group50"
                  onClick={() => handleTopicClick('kinematics', 'Kinematics')}
                >
                  <img src="/topic18.png" alt="Aurora" className="topicspage-rectangle21" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon18.png" alt="Icon" className="topicspage-group4" />
                      <span className="topicspage-text17">Kinematics</span>
                    </div>
                    <span className="topicspage-text18">2,453 students</span>
                  </div>
                </button>

                {/* Card 19 - Plane Geometry */}
                <button 
                  className="topicspage-group52"
                  onClick={() => handleTopicClick('plane-geometry', 'Plane Geometry')}
                >
                  <img src="/topic19.png" alt="Galaxy" className="topicspage-rectangle22" />
                  <div className="topicspage-card-content">
                    <div className="topicspage-card-title">
                      <img src="/icon19.png" alt="Icon" className="topicspage-group51" />
                      <span className="topicspage-text19">Plane Geometry</span>
                    </div>
                    <span className="topicspage-text20">2,453 students</span>
                  </div>
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

      <style jsx>
        {`
          /* Reset and base styles */
          * {
            box-sizing: border-box;
          }

          body {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }

          .topicspage-container1 {
            width: 100vw;
            max-width: 100vw;
            overflow-x: hidden;
            display: flex;
            min-height: 100vh;
            background-color: rgba(212, 224, 208, 1);
            margin: 0;
            padding: 0;
          }

          .topicspage-topicspage {
            width: 100%;
            max-width: 100vw;
            min-height: 100vh;
            display: flex;
            position: relative;
            background-color: rgba(212, 224, 208, 1);
            overflow-x: hidden;
          }

          /* Sidebar */
          .topicspage-navigation-rail-expanded {
            gap: 40px;
            width: 174px;
            min-width: 174px;
            min-height: 100vh;
            display: flex;
            padding: 44px 20px 20px;
            position: fixed;
            left: 0;
            top: 0;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(125, 140, 122, 1);
            z-index: 100;
            transition: all 0.3s ease;
          }

          .topicspage-navigation-rail-expanded.collapsed {
            width: 80px;
            min-width: 80px;
            padding: 44px 12px 20px;
          }

          .topicspage-menu-fab {
            gap: 4px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }

          .topicspage-iconbuttonstandard {
            width: 56px;
            height: 56px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            cursor: pointer;
            padding: 0;
            border-radius: 12px;
            transition: all 0.3s;
          }

          .topicspage-iconbuttonstandard:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
          }

           .topicspage-menuicon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
          }

          .topicspage-segments {
            display: flex;
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .topicspage-navitem01,
          .topicspage-navitem02,
          .topicspage-navitem03,
          .topicspage-navitem04 {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            width: 100%;
            border-radius: 100px;
            cursor: pointer;
            transition: background-color 0.2s;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
          }

          .topicspage-navigation-rail-expanded.collapsed .topicspage-navitem01,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-navitem02,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-navitem03,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-navitem04 {
            justify-content: center;
          }

          .topicspage-navitem01:hover,
          .topicspage-navitem02:hover,
          .topicspage-navitem04:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .topicspage-navitem03.active {
            background-color: rgba(232, 222, 248, 1);
            color: rgba(74, 68, 89, 1);
          }

          .topicspage-icon {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }

          .topicspage-text {
            transition: opacity 0.3s;
          }

          .topicspage-navigation-rail-expanded.collapsed .topicspage-text {
            display: none;
          }


          /* Main content area */
          .topicspage-main-content {
            padding: 50px 40px 40px 60px;
            flex: 1;
            display: flex;
            gap: 40px;
            overflow-x: hidden;
            transition: all 0.3s ease;
          }

          .topicspage-main-content.sidebar-expanded {
            margin-left: 174px;
            width: calc(100vw - 174px);
            max-width: calc(100vw - 174px);
          }

          .topicspage-main-content.sidebar-collapsed {
            margin-left: 80px;
            width: calc(100vw - 80px);
            max-width: calc(100vw - 80px);
          }

          .topicspage-navitem-parent {
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            padding: 0;
            cursor: pointer;
            transition: background-color 0.2s;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
          }

          .topicspage-navitem-parent.active {
            background-color: rgba(232, 222, 248, 1);
            color: rgba(74, 68, 89, 1);
          }

          .topicspage-navitem-main {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
          }

          .topicspage-navitem-parent:not(.active) .topicspage-navitem-main:hover {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
          }

          .topicspage-nav-subitems {
            display: flex;
            flex-direction: column;
            padding: 0 16px 12px 16px;
            gap: 4px;
          }

          .topicspage-nav-subitem {
            padding: 10px 16px;
            font-size: 13px;
            border-radius: 12px;
            cursor: pointer;
            transition: background-color 0.2s;
            color: rgba(74, 68, 89, 0.8);
          }

          .topicspage-nav-subitem:hover {
            background-color: rgba(255, 255, 255, 0.5);
          }

          .topicspage-nav-subitem.active-sub {
            background-color: rgba(103, 80, 164, 0.2);
            color: rgba(74, 68, 89, 1);
            font-weight: 600;
          }

          /* Left section with title and cards */
          .topicspage-left-section {
            flex: 1;
            max-width: 920px;
            min-width: 0;
          }

          .topicspage-text10 {
            color: rgba(28, 42, 58, 1);
            font-size: 56px;
            font-style: normal;
            font-family: "Madimi One", sans-serif;
            font-weight: 400;
            line-height: 1.2;
            margin: 0 0 40px 0;
            text-align: left;
          }

          /* Grid for topic cards */
          .topicspage-topics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            margin-bottom: 40px;
            width: 100%;
          }

          /* Topic cards */
          .topicspage-group49,
          .topicspage-group50,
          .topicspage-group52,
          .topicspage-group54 {
            position: relative;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            background-color: rgba(250, 250, 247, 1);
            border-radius: 32px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
            border: none;
            padding: 0;
            text-align: left;
          }

          .topicspage-group49:hover,
          .topicspage-group50:hover,
          .topicspage-group52:hover,
          .topicspage-group54:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          }

          .topicspage-group49:active,
          .topicspage-group50:active,
          .topicspage-group52:active,
          .topicspage-group54:active {
            transform: translateY(-2px);
          }

          .topicspage-group49:focus,
          .topicspage-group50:focus,
          .topicspage-group52:focus,
          .topicspage-group54:focus {
            outline: 2px solid rgba(28, 42, 58, 0.5);
            outline-offset: 2px;
          }

          .topicspage-rectangle20,
          .topicspage-rectangle21,
          .topicspage-rectangle22,
          .topicspage-rectangle23 {
            width: 100%;
            height: 180px;
            object-fit: cover;
            display: block;
          }

          /* Card content */
          .topicspage-card-content {
            padding: 20px 24px 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex: 1;
          }

          .topicspage-card-title {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .topicspage-group3,
          .topicspage-group4,
          .topicspage-group51,
          .topicspage-group53 {
            width: 28px;
            height: 28px;
            flex-shrink: 0;
          }

          .topicspage-text15,
          .topicspage-text17,
          .topicspage-text19,
          .topicspage-text21 {
            color: rgba(0, 0, 0, 1);
            font-size: 18px;
            font-style: normal;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            line-height: 1.4;
            margin: 0;
            flex: 1;
          }

          .topicspage-text16,
          .topicspage-text18,
          .topicspage-text20,
          .topicspage-text22 {
            color: rgba(100, 100, 100, 1);
            font-size: 14px;
            font-style: normal;
            font-family: Roboto, sans-serif;
            font-weight: 400;
            margin: 0;
            padding-left: 40px;
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

          /* Responsive design */
          @media(max-width: 1600px) {
            .topicspage-profile {
              width: 340px;
              min-width: 340px;
              max-width: 340px;
            }
            
            .topicspage-main-content {
              gap: 32px;
              padding: 40px 32px 32px 50px;
            }
          }

          @media(max-width: 1400px) {
            .topicspage-profile {
              display: none;
            }
            
            .topicspage-main-content {
              padding-right: 60px;
            }
            
            .topicspage-left-section {
              max-width: 100%;
            }
          }

          @media(max-width: 1024px) {
            .topicspage-text10 {
              font-size: 44px;
            }
            
            .topicspage-topics-grid {
              gap: 24px;
            }
          }

          @media(max-width: 768px) {
            .topicspage-navigation-rail-expanded {
              width: 80px;
              min-width: 80px;
              padding: 44px 12px 20px;
            }

            .topicspage-navigation-rail-expanded.collapsed {
              width: 60px;
              min-width: 60px;
              padding: 44px 8px 20px;
            }

            .topicspage-text23,
            .topicspage-text24,
            .topicspage-text25,
            .topicspage-text26 {
              display: none;
            }
            
            .topicspage-main-content.sidebar-expanded {
              margin-left: 80px;
              padding: 24px;
              width: calc(100vw - 80px);
              max-width: calc(100vw - 80px);
            }

            .topicspage-main-content.sidebar-collapsed {
              margin-left: 60px;
              padding: 24px;
              width: calc(100vw - 60px);
              max-width: calc(100vw - 60px);
            }
            
            .topicspage-text10 {
              font-size: 36px;
            }
            
            .topicspage-topics-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }

          @media(max-width: 480px) {
            .topicspage-navigation-rail-expanded {
              width: 60px;
              min-width: 60px;
              padding: 20px 8px;
            }

            .topicspage-navigation-rail-expanded.collapsed {
              width: 50px;
              min-width: 50px;
              padding: 20px 4px;
            }
            
            .topicspage-main-content.sidebar-expanded {
              margin-left: 60px;
              padding: 16px;
              width: calc(100vw - 60px);
              max-width: calc(100vw - 60px);
            }

            .topicspage-main-content.sidebar-collapsed {
              margin-left: 50px;
              padding: 16px;
              width: calc(100vw - 50px);
              max-width: calc(100vw - 50px);
            }
            
            .topicspage-text10 {
              font-size: 28px;
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Topicspage