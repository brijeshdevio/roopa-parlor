// imports
import { RiFlowerLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import { Hero } from "@/components";
import { beautyParlorServices, testimonials } from "../../data";

// ==============================
// Reusable Components
// ==============================

interface CardProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Card = ({ name, image, description }: CardProps) => (
  <div className="card bg-base-100 w-full hover:shadow-sm">
    <div className="card-body text-center">
      <img src={image} alt={name} className="rounded-xl" />
      <h2 className="card-title mx-auto">{name}</h2>
      <p>{description}</p>
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

const TestimonialCard = ({
  name,
  profile,
  content,
  rating,
}: TestimonialProps) => (
  <div className="card bg-base-100 w-full hover:shadow-sm">
    <div className="card-body text-center">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-2">
            <img src={profile} alt={name} />
          </div>
        </div>
        <div className="text-start">
          <h2 className="text-md font-arimo font-bold">{name}</h2>
          <span className="text-warning">{rating}</span>
        </div>
      </div>
      <p className="text-sm mt-2">
        <q>{content}</q>
      </p>
    </div>
  </div>
);

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col gap-2 text-center">
    <div className="mx-auto w-fit p-3 bg-secondary rounded-full">{icon}</div>
    <h3 className="text-xl">{title}</h3>
    <p>{description}</p>
  </div>
);

// ==============================
// Home Page
// ==============================

const Home = () => {
  return (
    <>
      <Hero />
      <main className="w-full sm:w-[90%] lg:w-[80%] mx-auto flex flex-col gap-12">
        {/* Services */}
        <section className="py-10">
          <h2 className="text-3xl text-center mb-6">
            Our Most Popular Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {beautyParlorServices?.map((service) => (
              <Card key={service.id} {...service} />
            ))}
          </div>
        </section>

        {/* Roopa Difference */}
        <section className="py-10 px-6 bg-secondary/10 rounded-2xl">
          <h2 className="text-3xl text-center mb-6">
            The Roopa Beauty Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Feature
              icon={<RiFlowerLine size={30} />}
              title="A Roopa Escape"
              description="Step into a tranquil environment designed for your ultimate relaxation and comfort."
            />
            <Feature
              icon={<IoDiamondOutline size={30} />}
              title="Premium Products"
              description="We use only high-quality, professional-grade products for all our treatments."
            />
            <Feature
              icon={<PiUsersThreeBold size={30} />}
              title="Expert Stylists"
              description="Our team of experienced and passionate stylists is dedicated to making you look and feel your best."
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10">
          <h2 className="text-3xl text-center mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 px-6 bg-secondary/10 rounded-2xl text-center">
          <h2 className="text-3xl mb-2">Ready to Indulge?</h2>
          <p className="mb-6">
            Book your appointment today and discover your new look.
          </p>
          <Link to="/appointment" className="btn btn-secondary rounded-full">
            Book Now
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
