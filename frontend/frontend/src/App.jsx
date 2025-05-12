import { ThemeProvider } from "./components/ThemeProvider"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Benefits from "./components/Benefits"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContectForm.jsx"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import ChatBot from "./components/ChatBot.jsx"

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <ContactForm/>
        </main>
        <Footer />
        <ChatBot/>
      </div>
    </ThemeProvider>
  )
}

export default App
