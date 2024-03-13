import { Suspense } from "react";
import { Metadata } from "next";

import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`
  };
}

export default async function EventsPage({
  params,
  searchParams
}: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page || 1;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
