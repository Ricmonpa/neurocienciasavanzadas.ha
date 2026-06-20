import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PatientJourney from './components/PatientJourney'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="w-full">
        <HeroSection />
        <PatientJourney />
      </main>
    </>
  )
}
