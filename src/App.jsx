import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PatientJourney from './components/PatientJourney'
import Equipo from './components/Equipo'
import DoctorProfile from './components/DoctorProfile'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="w-full">
        <HeroSection />
        <PatientJourney />
        <Equipo />
        <DoctorProfile />
      </main>
    </>
  )
}
