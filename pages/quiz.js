
// ==========================================
// FILE: pages/quiz.js (COMPLETE UPDATED VERSION)
// ==========================================

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const QuizPage = () => {
  const router = useRouter()
  const { topic, title } = router.query
  
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [showSolution, setShowSolution] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [questionStatuses, setQuestionStatuses] = useState({})
  const [maxQuestion, setMaxQuestion] = useState(10)
  
  const [sessionId, setSessionId] = useState(null)
  const [questions, setQuestions] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Initialize session ID when component mounts
  useEffect(() => {
    const newSessionId = Date.now().toString()
    setSessionId(newSessionId)
    
    // Try to load questions from sessionStorage for this topic
    if (topic) {
      const savedData = sessionStorage.getItem(`quiz_${topic}`)
      if (savedData) {
        try {
          const parsed = JSON.parse(savedData)
          setQuestions(parsed.questions || {})
          setQuestionStatuses(parsed.statuses || {})
          setMaxQuestion(parsed.maxQuestion || 10)
        } catch (e) {
          console.error('Failed to load saved session:', e)
        }
      }
    }
  }, [topic])

  // Save questions to sessionStorage whenever they change
  useEffect(() => {
    if (topic && Object.keys(questions).length > 0) {
      const dataToSave = {
        questions,
        statuses: questionStatuses,
        maxQuestion
      }
      sessionStorage.setItem(`quiz_${topic}`, JSON.stringify(dataToSave))
    }
  }, [questions, questionStatuses, maxQuestion, topic])

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  const generateQuestion = async (questionNumber) => {
    // Check if question already exists
    if (questions[questionNumber]) {
      console.log(`Question ${questionNumber} already exists, skipping generation`)
      return
    }

    // Check if already generating this question
    if (loading && currentQuestion === questionNumber) {
      console.log(`Question ${questionNumber} is already being generated`)
      return
    }

    console.log(`Generating question ${questionNumber}...`)
    setLoading(true)
    setError(null)

    try {
      // Get all previously generated questions to avoid repetition
      const previousQuestionTexts = Object.values(questions)
        .map(q => q.question)
        .filter(Boolean);
      
      const response = await fetch('/api/generate-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          topic: title || topic || 'Additional Mathematics',
          previousQuestions: previousQuestionTexts // Send previous questions to API
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate question');
      }

      const data = await response.json();
      
      setQuestions(prev => {
        const updated = {
          ...prev,
          [questionNumber]: data.question
        }
        console.log(`Question ${questionNumber} generated and saved`, updated)
        return updated
      });
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load current question if it doesn't exist
  useEffect(() => {
    if (topic && !questions[currentQuestion]) {
      console.log(`Current question ${currentQuestion} doesn't exist, generating...`)
      generateQuestion(currentQuestion);
    }
  }, [currentQuestion, topic]);

  // Pre-generate next question (Option 3)
  useEffect(() => {
    if (questions[currentQuestion] && !questions[currentQuestion + 1]) {
      console.log(`Pre-generating next question ${currentQuestion + 1}...`)
      setTimeout(() => {
        generateQuestion(currentQuestion + 1)
      }, 500)
    }
  }, [questions, currentQuestion])

  const handleShowSolution = () => {
    setShowSolution(!showSolution)
    if (!showAnswer) {
      setShowAnswer(true)
    }
  }

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  const handleCorrectAnswer = () => {
    setQuestionStatuses(prev => ({
      ...prev,
      [currentQuestion]: 'correct'
    }))
    setSelectedAnswer('correct')
  }

  const handleIncorrectAnswer = () => {
    setQuestionStatuses(prev => ({
      ...prev,
      [currentQuestion]: 'incorrect'
    }))
    setSelectedAnswer('incorrect')
  }

  const handleEndSession = () => {
    if (confirm('Are you sure you want to end this session? All questions will be cleared.')) {
      // Clear saved session data
      sessionStorage.removeItem(`quiz_${topic}`)
      // Reset state
      setQuestions({})
      setQuestionStatuses({})
      setMaxQuestion(10)
      setCurrentQuestion(1)
      router.push('/topicspage')
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
    
    if (nextQuestion > maxQuestion) {
      setMaxQuestion(nextQuestion)
    }
    
    if (!questionStatuses[nextQuestion]) {
      setQuestionStatuses(prev => ({
        ...prev,
        [nextQuestion]: 'unanswered'
      }))
    }
    
    setShowSolution(false)
    setShowAnswer(false)
    setSelectedAnswer(null)
  }

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
      setShowSolution(false)
      setShowAnswer(false)
      setSelectedAnswer(null)
    }
  }

  const handleQuestionClick = (questionId) => {
    setCurrentQuestion(questionId)
    setShowSolution(false)
    setShowAnswer(false)
    setSelectedAnswer(null)
  }

  const questionNumbers = Array.from({ length: maxQuestion }, (_, i) => i + 1)
  const currentQuestionData = questions[currentQuestion]

  return (
    <>
      <div className="quiz-container">
        <Head>
          <title>Quiz - {title || 'Question'} {currentQuestion}</title>
        </Head>

        <div className="quiz-page">
          {/* Sidebar Navigation */}
          <div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="menu-button" onClick={toggleSidebar}>
              <div className="menu-icon">{sidebarExpanded ? '✕' : '☰'}</div>
            </button>
            <nav className="nav-items">
              <div className="nav-item" onClick={() => router.push('/')}>
                <img src="/icons/HomeIcon2.png" />
                {sidebarExpanded && <span className="nav-text">Home</span>}
              </div>
              <div className="nav-item">
                <img src="/icons/ProfileIcon2.png" />
                {sidebarExpanded && <span className="nav-text">Profile</span>}
              </div>
              <div className="nav-item active">
                <img src="/icons/ContentIcon1.png" />
                {sidebarExpanded && <span className="nav-text">Content</span>}
              </div>
              <div className="nav-item">
                <img src="/icons/ActivityIcon2.png"  />
                {sidebarExpanded && <span className="nav-text">Activity Stats</span>}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <div className="topic-header">
              <h1 className="topic-title">{title || 'Quiz'}</h1>
            </div>

            {/* Question Card */}
            <div className="question-card">
              <h2 className="question-title">Question {currentQuestion}</h2>
              
              {loading && (
                <div className="loading-state">
                  <div className="spinner"></div>
                  <p>Generating question...</p>
                </div>
              )}

              {error && (
                <div className="error-state">
                  <p>Failed to generate question: {error}</p>
                  <button 
                    className="btn-retry"
                    onClick={() => generateQuestion(currentQuestion)}
                  >
                    Try Again
                  </button>
                </div>
              )}

              {!loading && !error && currentQuestionData && (
                <>
                  <div className="question-content">
                    <p className="question-text">
                      {currentQuestionData.question}
                    </p>
                    
                    {currentQuestionData.parts && currentQuestionData.parts.length > 0 && (
                      <div className="equation-list">
                        {currentQuestionData.parts.map((part, idx) => (
                          <p key={idx} className="equation">
                            {part.label} {part.text}
                          </p>
                        ))}
                      </div>
                    )}

                    {showSolution && currentQuestionData.solution && (
                      <div className="solution-box">
                        <h3>Full Solution:</h3>
                        {currentQuestionData.solution.steps.map((step, idx) => (
                          <div key={idx} className="solution-step">
                            <p className="step-title">Step {step.step}: {step.description}</p>
                            <p className="step-work">{step.work}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {showAnswer && currentQuestionData.solution && (
                      <div className="answer-box">
                        <h3>Answer:</h3>
                        {currentQuestionData.solution.answers.map((ans, idx) => (
                          <p key={idx}>{ans.part} {ans.answer}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="action-buttons">
                    <button 
                      className="btn-outline"
                      onClick={handleShowSolution}
                    >
                      {showSolution ? 'Hide Solution' : 'Show Full Solution'}
                    </button>
                    <button 
                      className="btn-primary"
                      onClick={handleShowAnswer}
                    >
                      {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                  </div>

                  {showAnswer && (
                    <div className="feedback-section">
                      <p className="feedback-question">Did you get the correct answer?</p>
                      <div className="feedback-buttons">
                        <button 
                          className={`feedback-btn correct ${selectedAnswer === 'correct' ? 'selected' : ''}`}
                          onClick={handleCorrectAnswer}
                          disabled={questionStatuses[currentQuestion] && questionStatuses[currentQuestion] !== 'unanswered'}
                        >
                          <img src="/icons/tick.svg" alt="tick" className="Quiz-tick" />
                        </button>
                        <button 
                          className={`feedback-btn incorrect ${selectedAnswer === 'incorrect' ? 'selected' : ''}`}
                          onClick={handleIncorrectAnswer}
                          disabled={questionStatuses[currentQuestion] && questionStatuses[currentQuestion] !== 'unanswered'}
                        >
                          <img src="/icons/cross.svg" alt="cross" className="Quiz-cross" />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="nav-buttons">
                    <button 
                      className="btn-back" 
                      onClick={handlePrevious}
                      disabled={currentQuestion === 1}
                      style={{ opacity: currentQuestion === 1 ? 0.3 : 1 }}
                    >
                      ← 
                    </button>
                    <button className="btn-text" onClick={handleEndSession}>
                      End session
                    </button>
                    <button 
                      className="btn-next" 
                      onClick={handleNext}
                    >
                      Next →
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Question Progress Sidebar */}
          <div className="progress-sidebar">
            {questionNumbers.map((questionId) => {
              const status = questionId === currentQuestion ? 'current' : (questionStatuses[questionId] || 'unanswered')
              return (
                <button
                  key={questionId}
                  className={`question-indicator ${status}`}
                  onClick={() => handleQuestionClick(questionId)}
                >
                  {status === 'correct' ? (
                    <span className="status-icon correct">✓</span>
                  ) : status === 'incorrect' ? (
                    <span className="status-icon incorrect">✕</span>
                  ) : status === 'current' ? (
                    <span className="status-icon current">◯</span>
                  ) : (
                    <span className="status-icon unanswered">◯</span>
                  )}
                  <span className="question-number">Question {questionId}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .quiz-container {
          width: 100vw;
          max-width: 100vw;
          overflow-x: hidden;
          min-height: 100vh;
          background-color: rgba(188, 203, 184, 1);
        }

        .quiz-page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          position: relative;
        }

        /* Loading and Error States */
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px;
          gap: 20px;
        }

        .spinner {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(103, 80, 164, 0.2);
          border-top-color: rgba(103, 80, 164, 1);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .error-state {
          background: rgba(244, 67, 54, 0.1);
          border: 2px solid rgba(244, 67, 54, 0.3);
          border-radius: 12px;
          padding: 32px;
          text-align: center;
        }

        .error-state p {
          color: rgba(244, 67, 54, 1);
          font-size: 16px;
          margin-bottom: 16px;
        }

        .btn-retry {
          padding: 12px 24px;
          background: rgba(244, 67, 54, 1);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .btn-retry:hover {
          background: rgba(234, 57, 44, 1);
          transform: translateY(-2px);
        }

        /* Solution Steps */
        .solution-step {
          margin-bottom: 16px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 8px;
        }

        .step-title {
          font-weight: 600;
          color: rgba(103, 80, 164, 1);
          margin-bottom: 8px;
        }

        .step-work {
          font-family: 'Courier New', monospace;
          color: #333;
          white-space: pre-wrap;
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

        .main-content {
          flex: 1;
          padding: 40px 40px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .main-content.sidebar-expanded {
          margin-left: 174px;
          max-width: calc(100vw - 174px - 300px);
        }

        .main-content.sidebar-collapsed {
          margin-left: 80px;
          max-width: calc(100vw - 80px - 300px);
        }

        .topic-header {
          width: 100%;
          max-width: 800px;
          margin-bottom: 24px;
        }

        .topic-title {
          font-size: 42px;
          font-weight: 600;
          font-family: 'Madimi One', 'Inter', sans-serif;
          color: rgba(28, 42, 58, 1);
          text-align: center;
          margin: 0;
        }

        .question-card {
          background: white;
          border-radius: 40px;
          padding: 60px;
          width: 100%;
          max-width: 800px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .question-title {
          font-size: 32px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          margin-bottom: 30px;
          color: #000;
        }

        .question-content {
          margin-bottom: 40px;
        }

        .question-text {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 24px;
          color: #333;
        }

        .equation-list {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .equation {
          font-size: 18px;
          line-height: 1.8;
          color: #333;
        }

        .solution-box,
        .answer-box {
          background: rgba(232, 222, 248, 0.3);
          border-left: 4px solid rgba(103, 80, 164, 1);
          padding: 24px;
          border-radius: 8px;
          margin-top: 24px;
        }

        .solution-box h3,
        .answer-box h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          color: rgba(103, 80, 164, 1);
        }

        .solution-box p,
        .answer-box p {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 8px;
          color: #333;
        }

        .action-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 32px;
        }

        .btn-outline {
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 500;
          border: 2px solid #333;
          background: white;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }

        .btn-outline:hover {
          background: #f5f5f5;
          transform: translateY(-2px);
        }
        
        .btn-primary {
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 500;
          border: none;
          background: rgba(103, 80, 164, 1);
          color: white;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }

        .btn-primary:hover {
          background: rgba(93, 70, 154, 1);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(103, 80, 164, 0.3);
        }

        .feedback-section {
          background: white;
          border-radius: 30px;
          padding: 32px;
          margin-top: 24px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          border: 2px solid rgba(230, 230, 230, 1);
        }

        .feedback-question {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        .feedback-buttons {
          display: flex;
          gap: 24px;
        }

        .feedback-btn {
          width: 56px;
          height: 56px;
          border: 3px solid transparent;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          background: white;
          position: relative;
          padding: 0;
        }

        .feedback-btn.correct.selected {
          background: rgba(76, 175, 80, 0.1);
          border-color: rgba(76, 175, 80, 1);
          transform: scale(1.1);
        }

        .feedback-btn.incorrect.selected {
          background: rgba(244, 67, 54, 0.1);
          border-color: rgba(244, 67, 54, 1);
          transform: scale(1.1);
        }

        .nav-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
        }

        .btn-back {
          width: 48px;
          height: 48px;
          border: none;
          background: transparent;
          font-size: 24px;
          cursor: pointer;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .btn-back:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.05);
        }

        .btn-text {
          background: none;
          border: none;
          font-size: 16px;
          text-decoration: underline;
          cursor: pointer;
          color: #333;
          font-family: 'Inter', sans-serif;
        }

        .btn-next {
          padding: 12px 24px;
          background: transparent;
          border: none;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .btn-next:hover {
          transform: translateX(4px);
        }

        .progress-sidebar {
          width: 300px;
          min-width: 300px;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: fixed;
          right: 0;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }

        .question-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border: none;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          text-align: left;
        }

        .question-indicator:hover {
          transform: translateX(-4px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .question-indicator.correct {
          background: rgba(200, 230, 201, 1);
        }

        .question-indicator.incorrect {
          background: rgba(255, 205, 210, 1);
        }

        .question-indicator.current {
          background: rgba(232, 234, 246, 1);
          border: 2px solid rgba(103, 80, 164, 1);
        }

        .question-indicator.unanswered {
          background: rgba(245, 245, 245, 1);
          opacity: 0.7;
        }

        .status-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .status-icon.correct {
          background: rgba(76, 175, 80, 1);
          color: white;
        }

        .status-icon.incorrect {
          background: rgba(244, 67, 54, 1);
          color: white;
        }

        .status-icon.current {
          background: rgba(103, 80, 164, 1);
          color: white;
        }

        .status-icon.unanswered {
          background: rgba(189, 189, 189, 1);
          color: white;
        }

        .question-number {
          color: #333;
          font-weight: 500;
        }

        @media(max-width: 1400px) {
          .progress-sidebar {
            width: 250px;
            min-width: 250px;
          }

          .main-content.sidebar-expanded {
            max-width: calc(100vw - 174px - 250px);
          }

          .main-content.sidebar-collapsed {
            max-width: calc(100vw - 80px - 250px);
          }
        }

        @media(max-width: 1200px) {
          .progress-sidebar {
            display: none;
          }

          .main-content.sidebar-expanded {
            max-width: calc(100vw - 174px);
          }

          .main-content.sidebar-collapsed {
            max-width: calc(100vw - 80px);
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
            padding: 30px 20px;
            max-width: calc(100vw - 80px);
          }

          .main-content.sidebar-collapsed {
            margin-left: 60px;
            padding: 30px 20px;
            max-width: calc(100vw - 60px);
          }

          .question-card {
            padding: 30px;
          }

          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}

export default QuizPage