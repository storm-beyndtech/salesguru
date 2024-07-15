import Footer from '@/components/Footer';
import Hero3 from '@/components/Hero3';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import { productHero, products } from '@/lib/utils';

export default function RecentProducts() {
  return (
    <section className="dark:bg-gray-900">
      <Navbar />
      <Hero3 data={productHero} isProduct={true} />
      <div className='my-20'>
        <Products products={products} />
      </div>
      <Footer />
    </section>
  );
}
