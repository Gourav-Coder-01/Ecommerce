import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import TopSelling from './Components/TopSelling/TopSelling'
import BestProdusts from './Components/BestProducts/BestProdusts'
import Sale from './Components/Sale/Sale'
import Notified from './Components/Notified/Notified'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Popup from './Components/Popup/Popup'



const App = () => {

  React.useEffect(()=>{
    AOS.init({      // initializing aos with custom settings
      offset:100,   // start animation when 100px from viewport
      duration:800,  // animation duration 0.8 sec
      easing:'ease-in-sine',
      delay:100,
    })
    AOS.refresh();
  },[])


  const [orderPopup,setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
   <Navbar handleOrderPopup = {handleOrderPopup}/>
   <Hero  handleOrderPopup = {handleOrderPopup}/>
   <TopSelling/>
   <BestProdusts handleOrderPopup = {handleOrderPopup}/>
   <Sale/>
   <Notified/>
   <TopSelling/>
   <Testimonials/>
   <Footer/>
   <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default App
