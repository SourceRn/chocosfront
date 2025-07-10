import './CTA.css';
import shoppingCartIcon from '../../assets/shopping-cart.png';

const CTA = () => {
  return (
     <a className="cta-button" href='https://chocos-ecommerce.vercel.app/products' target='_blank' rel="noopener noreferrer"><img src={shoppingCartIcon} alt="shopping" width="100px"/></a>
  );
}

export default CTA;