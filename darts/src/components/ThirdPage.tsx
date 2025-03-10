import { motion } from 'framer-motion'
import { IoIosArrowUp } from 'react-icons/io'

interface ThirdPageProps {
  isVisible: boolean
  onBack: () => void
}

function ThirdPage({ isVisible, onBack }: ThirdPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const rewards = [
    { points: "0点", reward: "スーパーのお惣菜" },
    { points: "1~100点", reward: "はま寿司" },
    { points: "101~200点", reward: "1万円までのお寿司" },
    { points: "200点以上", reward: "3万円までのお寿司" }
  ]

  return (
    <motion.div
      className="third-page"
      initial={{ y: '100%' }}
      animate={{ y: isVisible ? '0%' : '100%' }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
    >
      <motion.button 
        className="back-arrow-button"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
      >
        <IoIosArrowUp size={24} color="white" />
      </motion.button>
      <motion.div 
        className="rewards-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <h2 className="rewards-title">点数に応じたお寿司</h2>
        <motion.div className="rewards-list" variants={containerVariants}>
          {rewards.map((reward, index) => (
            <motion.div 
              key={index} 
              className="reward-item" 
              variants={itemVariants}
            >
              <div className="reward-points">{reward.points}</div>
              <div className="reward-text">{reward.reward}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ThirdPage 