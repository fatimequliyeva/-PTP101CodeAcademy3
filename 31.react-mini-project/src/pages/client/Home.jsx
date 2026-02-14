import { useProducts } from '../../context/ProductsContext';
import ProductCard from '../../components/client/ProductCard';
import HeroCarousel from '../../components/client/HeroCarousel';
import hero1 from '../../assets/main1.jpg';
import hero2 from '../../assets/bg_3 (1).jpg';
import hero3 from '../../assets/main2.jpg';
import Features from '../../components/client/Features';

export default function Home() {
  const { products } = useProducts();
  const featured = products.slice(0, 4);
  return (
    <div>
      <HeroCarousel
        interval={5000}
        slides={[
          { image: hero1, title: '100% Fresh & Organic Foods', subtitle: 'WE DELIVER ORGANIC VEGETABLES & FRUITS', cta: { label: 'View Details', href: '/shop' } },
          { image: hero3, title: '100% Fresh & Organic Foods', subtitle: 'WE DELIVER ORGANIC VEGETABLES & FRUITS', cta: { label: 'View Details', href: '/shop' } },
        ]}
      />
      <Features />
    </div>
  );
}
