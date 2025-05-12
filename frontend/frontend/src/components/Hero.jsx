/* eslint-disable no-unused-vars */
"use client"
import { motion } from "framer-motion"
import styles from "./Hero.module.css"
import img1 from "./images/hero.jpg"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.content}>
              <h1>Turn Unused Software Licenses Into Cash</h1>
              <p>
                SoftSell helps businesses recover value from unused or excess software licenses. Our platform makes it
                easy to sell your licenses securely and get paid quickly.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact" className={styles.button}>
                  Sell My Licenses
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ms-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6 mt-5 mt-lg-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageContainer}>
              <img
                src={img1}
                alt="Software license management"
                className={styles.image}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
