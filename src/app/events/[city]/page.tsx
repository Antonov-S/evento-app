import { FETCH_URL } from "@/utils/constants";
import H1 from "@/components/h1";
import { log } from "console";
import { EventoEvent } from "@/app/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const response = await fetch(FETCH_URL);
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      {events.map(event => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
