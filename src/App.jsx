// Appp.jsx

import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Fondo from "./assets/Fondo.png"
import Footer from "./components/Footer/Footer"

function App() {
  
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative',
  }

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
