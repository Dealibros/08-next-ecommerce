import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  console.log(props.cartCount);
  return (
    <div>
      <Header cartCount={props.cartCount} setCartCount={props.setCartCount} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
