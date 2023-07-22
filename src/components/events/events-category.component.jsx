const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const EventsCategory = ({ data, pageName }) => {
  return (
    <div className="events-category">
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCategory;
