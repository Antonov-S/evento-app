import { FETCH_URL } from "@/lib/constants";

type EventPageProp = {
  params: { slug: string };
};

export default async function EventPage({ params }: EventPageProp) {
  const slug = params.slug;
  const response = await fetch(`${FETCH_URL}/${slug}`);
  const event = await response.json();

  return <main>EventPage</main>;
}
