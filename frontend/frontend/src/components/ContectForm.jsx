/* eslint-disable no-unused-vars */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import styles from "./ContectForm.module.css"

const licenseTypes = [
  "Microsoft Office",
  "Adobe Creative Cloud",
  "AutoCAD",
  "Windows Server",
  "Oracle Database",
  "SAP",
  "Other",
]

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.company.trim()) newErrors.company = "Company is required"
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        })

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1500)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.div
          className={`${styles.header} text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <p>Ready to sell your software licenses? Contact us today!</p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className={styles.formCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.successIcon}
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                          type="text"
                          className={`form-control ${errors.company ? "is-invalid" : ""}`}
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                        {errors.company && <div className="invalid-feedback">{errors.company}</div>}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="licenseType">License Type</label>
                        <select
                          className={`form-select ${errors.licenseType ? "is-invalid" : ""}`}
                          id="licenseType"
                          name="licenseType"
                          value={formData.licenseType}
                          onChange={handleChange}
                        >
                          <option value="">Select License Type</option>
                          {licenseTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.licenseType && <div className="invalid-feedback">{errors.licenseType}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className={`${styles.submitButton} `}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ms-2"
                        >
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
