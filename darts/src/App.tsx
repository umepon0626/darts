import { motion } from 'framer-motion'
import { useState } from 'react'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const handleButtonClick = () => {
    setCurrentPage(prev => prev + 1)
  }

  const handleBackClick = () => {
    setCurrentPage(prev => prev - 1)
  }

  return (
    <div className="app-container">
      <motion.div
        className="text-container"
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="sushi-text">寿司</h1>
      </motion.div>
      <motion.div
        className="text-container"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="darts-text">ダーツ</h1>
      </motion.div>
      <motion.button 
        className="down-arrow-button"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleButtonClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
      <SecondPage isVisible={currentPage >= 2} onNext={handleButtonClick} />
      <ThirdPage isVisible={currentPage >= 3} onBack={handleBackClick} />
    </div>
  )
}

export default App
