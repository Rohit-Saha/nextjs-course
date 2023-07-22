import EventsCategory from "@/src/components/events/events-category.component";
import Image from "next/image";
import Link from "next/link";

const EventCategoryPage = ({ data, pageName }) => {
  return <EventsCategory data={data} pageName={pageName} />;
};

export default EventCategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => ({
    params: {
      cat: ev.id,
    },
  }));
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === context.params.cat);
  return {
    props: {
      data,
      pageName: context.params.cat,
    },
  };
}
