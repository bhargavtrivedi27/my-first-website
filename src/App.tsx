import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <HowItWorks />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;