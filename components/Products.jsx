import { products } from '../data/products';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';
export default function Products() { return <section id="libros" className="container section-pad reveal"><SectionHeading eyebrow="PALABRAS QUE ACOMPAÑAN · HISTORIAS QUE TRANSFORMAN" description={<p>Libros, ebooks y recursos para crecer, imaginar y compartir la fe.</p>}>Historias y recursos<br />creados <span className="script">con propósito ♡</span></SectionHeading><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">{products.map(product => <ProductCard key={product.id} product={product} />)}</div></section>; }
