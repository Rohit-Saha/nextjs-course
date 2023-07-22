import Image from "next/image";
import Link from "next/link";

const HomeComponent = ({ data }) => {
  return (
    <div className="home-component">
      {data.map((ev) => (
        <div key={ev.id}>
          <Image src={ev.image} alt={ev.title} width={300} height={300} />
          <div className="event-info">
            <Link href={`/events/${ev.id}`}>
              <h2>{ev.title}</h2>
            </Link>
            <p>{ev.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeComponent;
