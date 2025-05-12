/* eslint-disable no-unused-vars */
"use client"
import { motion } from "framer-motion"
import styles from "./Testimonials.module.css"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "IT Director, TechCorp Inc.",
    image: "https://via.placeholder.com/80",
    content:
      "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth, and their team was professional throughout. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "CFO, Innovate Solutions",
    image: "https://via.placeholder.com/80",
    content:
      "As we transitioned to cloud-based solutions, we had numerous legacy licenses sitting unused. SoftSell provided a secure way to convert these assets into capital that we reinvested in our business.",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <motion.div
          className={`${styles.header} text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Clients Say</h2>
          <p>Trusted by businesses of all sizes</p>
        </motion.div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <motion.div
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className={styles.content}>{testimonial.content}</p>
                <div className={styles.author}>
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className={styles.authorImage}
                  />
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
