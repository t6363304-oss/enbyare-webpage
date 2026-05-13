import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
