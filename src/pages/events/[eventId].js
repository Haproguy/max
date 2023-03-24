import { getEventById } from "@/dummy";
import { useRouter } from "next/router";
import { Fragment } from "react";

import EventSummary from "@/components/events/event-detail/event-summary";
import EventLogistics from "@/components/events/event-detail/event-logistics";
import EventContent from "@/components/events/event-detail/event-content";

const EventDetailPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>Not Found Event</p>
    }
    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}
export default EventDetailPage;