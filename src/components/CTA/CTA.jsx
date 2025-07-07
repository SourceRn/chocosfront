import './CTA.css';
import shoppingCartIcon from '../../assets/shopping-cart.png';

const CTA = () => {
  return (
     <button className="cta-button"><img src={shoppingCartIcon} alt="shopping" width="100px"/></button>
  );
}

export default CTA;