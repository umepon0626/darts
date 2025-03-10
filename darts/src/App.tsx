import { motion } from 'framer-motion'
import './App.css'

function App() {
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
    </div>
  )
}

export default App
