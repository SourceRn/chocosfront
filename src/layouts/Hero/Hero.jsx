import React from 'react'
import shakeGlass from '../../assets/shake-glass.png'
import shakeBottle from '../../assets/shake-bottle.png'
import shakeGlassBottle from '../../assets/shake-glassBottle.png'

const Hero = () => {
  return (
    <section className="hero">
      <h1><strong><span className='chocos'>CHOCOS</span> <span className='inge'>EL INGE</span></strong></h1>
      <p>Energiza tu dia a dia con nuestros saludables chocos</p>
      <a href="#" className="btn">Comprar</a>
      <div className="hero-image">
        <img src={shakeGlassBottle} alt="Chocolate Shake Glass and Bottle" />
      </div>
    </section>
  )
}

export default Hero