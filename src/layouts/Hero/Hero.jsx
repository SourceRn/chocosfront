import shakeGlassBottle from '../../assets/shake-glassBottle.png'
import CTA from '../../components/CTA/CTA'

const Hero = () => {
  return (
    <section className="hero">
      <CTA />
      <h1><strong><span className='chocos'>CHOCOS</span> <span className='inge'>EL INGE</span></strong></h1>
      <p>Energiza tu dia a dia con nuestros saludables chocos</p>
      <a href="https://chocos-ecommerce.vercel.app/" target='_blank' rel="noopener noreferrer" className="btn">¡Aprovecha Ofertas Unicas!</a>
      <div className="hero-image">
        <img src={shakeGlassBottle} alt="Chocolate Shake Glass and Bottle" />
      </div>
    </section>
  )
}

export default Hero