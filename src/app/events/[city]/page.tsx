import { EventoEvent } from "@/app/lib/types";
import { FETCH_URL } from "@/lib/constants";
import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import { sleep } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  await sleep(2000);

  const response = await fetch(`${FETCH_URL}?city=${city}`);
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
