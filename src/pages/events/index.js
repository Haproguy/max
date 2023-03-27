import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy';
import List from '@/components/events/list';
import EventSearch from '@/components/events/event-search';


const AllEventPage = () => {
    const router = useRouter();

    const allEvents = getAllEvents();

    const findEventHandler = (year, month) => {
        const fullPush = '/event/filter' + '/' + year + '/' + month;

        router.push({ fullPush });
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <List items={allEvents} />
        </Fragment>
    );
}

export default AllEventPage;