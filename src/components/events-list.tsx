import { getEvents } from "@/lib/utils";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {totalCount === 0 ? (
        <section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
          <div className="flex flex-col flex-1 justify-center items-center">
            <h2 className="text-2xl font-semibold">No results found</h2>
            <p className="italic text-white/75">
              Try a different location or check the spelling of the current one.
            </p>
          </div>
        </section>
      ) : (
        events.map(event => <EventCard event={event} key={event.id} />)
      )}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
