import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Topicspage = () => {
  const router = useRouter()
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  
  const handleTopicClick = (topicName, topicTitle) => {
    // Navigate to quiz page with topic information
    router.push({
      pathname: '/quiz',
      query: { 
        topic: topicName,
        title: topicTitle
      }
    })
  }

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

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
                <div className="topicspage-content">
                  <div className="topicspage-statelayer1">
                    <div className="topicspage-menuicon">{sidebarExpanded ? '✕' : '☰'}</div>
                  </div>
                </div>
              </button>
            </div>
            <div className="topicspage-segments">
              <div className="topicspage-navitem01">
                <div className="topicspage-statelayer2">
                  <img src="/icons/HomeIcon2.png" alt="Home" className="topicspage-homeicon2" />
                  {sidebarExpanded && <span className="topicspage-text23 M3labellarge">Home</span>}
                </div>
              </div>
              <div className="topicspage-navitem02">
                <div className="topicspage-statelayer3">
                  <img src="/icons/ProfileIcon2.png" alt="Profile" className="topicspage-profileicon2" />
                  {sidebarExpanded && <span className="topicspage-text24 M3labellarge">Profile</span>}
                </div>
              </div>
              <div className="topicspage-navitem03">
                <div className="topicspage-statelayer4">
                  <img src="/icons/ContentIcon1.png" alt="Content" className="topicspage-contenticon1" />
                  {sidebarExpanded && <span className="topicspage-text25 M3labellarge">Content</span>}
                </div>
              </div>
              <div className="topicspage-navitem04">
                <div className="topicspage-statelayer5">
                  <img src="/icons/ActivityIcon2.png" alt="Activity" className="topicspage-activityicon2" />
                  {sidebarExpanded && <span className="topicspage-text26 M3labellarge">Activity<p/> Stats</span>}
                </div>
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
              </div>
            </div>

            {/* Profile Sidebar */}
            <div className="topicspage-profile">
              <div className="topicspage-profile-header">
                <img src="/3d-avatar-12.png" alt="Avatar" className="topicspage-avatars3davatar12" />
                <div className="topicspage-SpeechBubble">
                  <span className="topicspage-text11">Im cooked</span>
                </div>
                <div className="topicspage-name-section">
                  <span className="topicspage-text12">Ally lee</span>
                  <img src="/edit.png" alt="Edit" className="topicspage-edit" />
                </div>
              </div>
              
              <div className="topicspage-group11">
                <img src="/GenericAvatar.png" alt="Avatar" className="topicspage-genericavatar" />
                <span className="topicspage-text13">4 Friends Online</span>
                <div className="topicspage-avatar-group">
                  <img src="/AvatarGroup.png" alt="Avatars" className="topicspage-avatargroup" />
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

          .topicspage-content {
            width: 56px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
          }

          .topicspage-statelayer1 {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
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
            gap: 12px;
            display: flex;
            width: 100%;
            overflow: hidden;
            align-items: center;
            border-radius: 100px;
            cursor: pointer;
            transition: background-color 0.2s;
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

          .topicspage-navitem03 {
            background-color: var(--dl-color-m3_sys_light-secondarycontainer);
          }

          .topicspage-statelayer2,
          .topicspage-statelayer3,
          .topicspage-statelayer4,
          .topicspage-statelayer5 {
            gap: 8px;
            display: flex;
            padding: 16px;
            position: relative;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
          }

          .topicspage-navigation-rail-expanded.collapsed .topicspage-statelayer2,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-statelayer3,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-statelayer4,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-statelayer5 {
            justify-content: center;
            padding: 16px 12px;
          }

          .topicspage-homeicon2,
          .topicspage-profileicon2,
          .topicspage-contenticon1,
          .topicspage-activityicon2 {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }

          .topicspage-text23,
          .topicspage-text24,
          .topicspage-text26 {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            letter-spacing: 0.1px;
            white-space: nowrap;
            transition: opacity 0.3s;
          }

          .topicspage-text25 {
            color: var(--dl-color-m3_sys_light-onsecondarycontainer);
            font-size: 14px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            letter-spacing: 0.1px;
            white-space: nowrap;
            transition: opacity 0.3s;
          }

          .topicspage-navigation-rail-expanded.collapsed .topicspage-text23,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-text24,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-text25,
          .topicspage-navigation-rail-expanded.collapsed .topicspage-text26 {
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

          .topicspage-text11 {
            color: rgba(0, 0, 0, 1);
            font-size: 15px;
            font-style: normal;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            margin: 0;
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

          .topicspage-edit {
            width: 22px;
            height: 22px;
            cursor: pointer;
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