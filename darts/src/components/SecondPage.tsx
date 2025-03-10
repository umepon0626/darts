import { motion } from 'framer-motion'

interface SecondPageProps {
  isVisible: boolean
  onNext: () => void
}

function SecondPage({ isVisible, onNext }: SecondPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <motion.div
      className="second-page"
      initial={{ y: '100%' }}
      animate={{ y: isVisible ? '0%' : '100%' }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
    >
      <motion.div 
        className="rules-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <h2 className="rules-title">ダーツのルール</h2>
        <motion.div className="rules-list" variants={containerVariants}>
          <motion.div className="rule-item" variants={itemVariants}>
            <span className="rule-number">1</span>
            <p>4球投げた合計点数で食べられるお寿司が決まります。</p>
          </motion.div>
          <motion.div className="rule-item" variants={itemVariants}>
            <span className="rule-number">2</span>
            <p>但し青色の点数はマイナス点です。</p>
          </motion.div>
          <motion.div className="rule-item" variants={itemVariants}>
            <span className="rule-number">3</span>
            <p>もしも的のどこにも当たらなかったらその時点で点数は0点にリセットされます。</p>
          </motion.div>
          <motion.div className="rule-item" variants={itemVariants}>
            <p className="rule-example">例：3球投げた時点で30点、50点、-20点(青20点)でも4球目が的に当たらず地面に落ちた場合は合計点数は0点になります。</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.button 
        className="down-arrow-button"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </motion.div>
  )
}

export default SecondPage 