import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ElModelo from './components/ElModelo'
import PatientJourney from './components/PatientJourney'
import Especialidades from './components/Especialidades'
import Tecnologia from './components/Tecnologia'
import Resultados from './components/Resultados'
import Equipo from './components/Equipo'
import DoctorProfile from './components/DoctorProfile'
import Revista from './components/Revista'
import Contacto from './components/Contacto'
import WhatsAppFloat from './components/WhatsAppFloat'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="w-full">
        <HeroSection />
        <ElModelo />
        <PatientJourney />
        <Especialidades />
        <Tecnologia />
        <Resultados />
        <Equipo />
        <DoctorProfile />
        <Revista />
        <Contacto />
      </main>
      <WhatsAppFloat />
    </>
  )
}
