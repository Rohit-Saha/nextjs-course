import EventsComponment from "@/src/components/events/events-page";

const EventsPage = ({ data, title }) => {
  return <EventsComponment data={data} title={title} />;
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      title: "Events Per City",
      data: events_categories,
    },
  };
}
