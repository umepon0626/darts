import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
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
        initial={{ x: -100, y: -200, opacity: 0 }}
        animate={{ x: 90, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="sushi-text">大山結衣24歳爆誕記念</h1>
      </motion.div>
      <motion.div
        className="text-container"
        initial={{ x: 100, y: 200,opacity: 0 }}
        animate={{ x: -110, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="darts-text">寿司ダーツ</h1>
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
        <IoIosArrowDown size={24} color="white" />
      </motion.button>
      <SecondPage isVisible={currentPage >= 2} onNext={handleButtonClick} />
      <ThirdPage isVisible={currentPage >= 3} onBack={handleBackClick} />
    </div>
  )
}

export default App
