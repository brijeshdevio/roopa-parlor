import { RiFlowerLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";
import { Hero } from "@/components";
import { beautyParlorServices, testimonials } from "../../data";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Card = (props: CardProps) => (
  <div className="card bg-base-100 w-full hover:shadow-sm">
    <div className="card-body text-center">
      <img src={props.image} alt="Shoes" className="rounded-xl" />

      <h2 className="card-title mx-auto">{props.name}</h2>
      <p>{props.description}</p>
    </div>
  </div>
);

interface TestimonialProps {
  id: number;
  name: string;
  profile: string;
  content: string;
  rating: string;
}

const TestimonialCard = (props: TestimonialProps) => (
  <div className="card bg-base-100 w-full hover:shadow-sm">
    <div className="card-body text-center">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2">
            <img src={props.profile} alt={props.name} />
          </div>
        </div>
        <div className="text-start">
          <h2 className="text-md font-arimo !font-bold">{props.name}</h2>
          <span className="text-warning">{props.rating}</span>
        </div>
      </div>
      <p className="text-sm">
        <q>{props.content}</q>
      </p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <Hero />
      <main className="w-full sm:w-[90%] lg:w-[80%] flex flex-col gap-5 mx-auto">
        {/* Services */}
        <section className="w-full flex flex-col gap-1 py-10">
          <h2 className="text-3xl text-center">Our Most Popular Services</h2>
          <div className="grid grid-cols-3 gap-1">
            {beautyParlorServices?.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </section>

        {/*  Roopa Difference */}
        <section className="w-full flex flex-col gap-4 py-10 px-5 bg-secondary/10 rounded-2xl">
          <h2 className="text-3xl text-center">The Roopa Beauty Difference</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2 text-center">
              <div className="mx-auto w-fit p-3 bg-secondary rounded-full">
                <RiFlowerLine size={30} />
              </div>
              <h2 className="text-xl">A Roopa Escape</h2>
              <p>
                Step into a tranquil environment designed for your ultimate
                relaxation and comfort.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="mx-auto w-fit p-3 bg-secondary rounded-full">
                <IoDiamondOutline size={30} />
              </div>
              <h2 className="text-xl">Premium Products</h2>
              <p>
                We use only high-quality, professional-grade products for all
                our treatments.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="mx-auto w-fit p-3 bg-secondary rounded-full">
                <PiUsersThreeBold size={30} />
              </div>
              <h2 className="text-xl">Expert Stylists</h2>
              <p>
                Our team of experienced and passionate stylists is dedicated to
                making you look and feel your best.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full flex flex-col gap-1 py-10">
          <h2 className="text-3xl text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-3 gap-1">
            {testimonials?.map((card) => (
              <TestimonialCard key={card.id} {...card} />
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col gap-4 py-10 px-5 bg-secondary/10 rounded-2xl text-center">
          <h2 className="text-3xl">Ready to Indulge?</h2>
          <p>Book your appointment today and discover your new look.</p>
          <div>
            <Link to="/appointment" className="btn btn-secondary rounded-full">
              Book Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
