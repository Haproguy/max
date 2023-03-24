import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFeaturedEvents, getAllEvents } from '../../dummy';
import List from '@/components/events/list';
import EventSearch from '@/components/events/event-search';


const AllEventPage = () => {
    const router = useRouter();

    const featuredEvents = getFeaturedEvents();
    const allEvents = getAllEvents();

    const findEventHandler = (year, month) => {
        const fullPush = `/events/${year}/${month}`;

        router.push(fullPush);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <List items={allEvents} />
        </Fragment>
    );
}

export default AllEventPage;