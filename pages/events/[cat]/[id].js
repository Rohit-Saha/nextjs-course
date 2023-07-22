import EventComponent from "@/src/components/events/event.component";

const EventPage = ({ data }) => {
  return <EventComponent data={data} />;
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => ({
    params: {
      cat: path.city,
      id: path.id,
    },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.find((ev) => ev.id === context.params.id);
  return {
    props: {
      data,
    },
  };
}
