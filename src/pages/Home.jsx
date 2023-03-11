import Main from '../components/Main';
import Stats from '../components/Stats';
import Category from '../components/Category';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Main />
      <Stats />
      <Category />
      <Products />
      <Testimonials />
    </div>
  );
}
