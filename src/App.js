import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Explore from './components/Explore'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <main className="max-w-[1440px] max-h-[10881px] bg-[#111111]">
  <Navbar />
  <Hero />
  <Services />
  <Explore />
  <Pricing />
  <FAQ />
  <Footer />
    </main>
  );
}

export default App;
