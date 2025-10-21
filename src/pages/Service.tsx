import { FiSearch } from "react-icons/fi";
import { services } from "../../data";

interface CardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  time: number;
}

const Card = (props: CardProps) => (
  <div className="card group hover:shadow-xl hover:bg-secondary/10">
    <figure>
      <img src={props.image} alt={props.name} />
    </figure>
    <div className="card-body">
      <h3 className="card-title">{props.name}</h3>
      <p>{props.description}</p>
      <p className="font-bold text-md">
        {props.price} - {props.time} min
      </p>
      <button className="btn group-hover:btn-secondary rounded-full">
        Book Now
      </button>
    </div>
  </div>
);

const IconBtn = ({
  icon,
  text = "",
}: {
  icon?: React.ReactNode;
  text?: string;
}) => <button className="btn btn-circle">{icon ? icon : text}</button>;

const Service = () => {
  return (
    <>
      <main className="w-full sm:w-[90%] lg:w-[80%] mx-auto flex flex-col gap-12 mt-20">
        <section className="flex flex-col gap-8 py-10">
          <div>
            <h2 className="text-3xl mb-1">Our Services</h2>
            <p>
              Discover our wide range of beauty treatments designed to make you
              feel and look your best.
            </p>
          </div>
          <div>
            <form className="flex flex-col gap-4">
              <label className="input w-full rounded-full">
                <FiSearch size={20} />
                <input type="text" placeholder="Search for services" />
              </label>
              <div className="flex items-center gap-3">
                <select
                  defaultValue="Pick a color"
                  className="select rounded-full w-fit"
                >
                  <option disabled={true}>Pick a color</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
                <select
                  defaultValue="Pick a color"
                  className="select rounded-full"
                >
                  <option disabled={true}>Pick a color</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
                <select
                  defaultValue="Pick a color"
                  className="select rounded-full"
                >
                  <option disabled={true}>Pick a color</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
                <select
                  defaultValue="Pick a color"
                  className="select rounded-full"
                >
                  <option disabled={true}>Pick a color</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {services?.map((service) => (
              <Card key={service.id} {...service} />
            ))}
          </div>
          <div className="join flex items-center gap-1 mx-auto">
            <IconBtn text="«" />
            <IconBtn text="1" />
            <IconBtn text="2" />
            <IconBtn text="3" />
            <IconBtn text="4" />
            <IconBtn text="»" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Service;
