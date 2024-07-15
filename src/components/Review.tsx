import { Link } from 'react-router-dom';
import review1 from '../assets/howimade.webp';
import review2 from '../assets/howimade2.webp';

export default function Review() {
  return (
    <section className="bg-white">
      <div className="max-ctn pad-y pad-x flex flex-wrap justify-between items-center gap-16">
        <div className="w-full max-w-lg">
          <h3 className="text-4xl font-semibold mb-6 max-md:!text-2xl font-montserrat">
            How I made $178,492 in 3 months by dropshipping US and European
            products
          </h3>

          <Link to="/login" className="primaryBtn">
            Start For Free<span className="ml-3">&rarr;</span>
          </Link>
        </div>

        <div className="w-full max-w-md">
          <img src={review1} alt="review" className="w-full" />
        </div>
      </div>

      <div className="max-ctn pad-y pad-x flex flex-wrap-reverse justify-between items-center gap-16">
        <div className="w-full max-w-md">
          <img src={review2} alt="review" className="w-full" />
        </div>

        <div className="w-full max-w-md">
          <h3 className="text-4xl font-semibold mb-6 max-md:!text-2xl font-montserrat">
            How this entrepreneur earned $442,991 in just six months
          </h3>

          <Link to="/login" className="primaryBtn">
            Start For Free<span className="ml-3">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
