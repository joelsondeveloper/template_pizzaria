
import Header from './components/Header'
import Banner from './components/Banner'
import './App.css'
import Menu from './components/Menu'
import About from './components/About'
import Review from './components/Review'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatFloat from './components/WhatFloat'

function App() {

  return (
    <div className='app'>
      <Header />
      <Banner />
      <Menu />
      <About />
      <Review />
      <Location />
      {/* <WhatFloat /> */}
      <Footer />
    </div>
  )
}

export default App
