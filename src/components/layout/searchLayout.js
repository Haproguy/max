import { EventSearch } from '@/components/events/event-search';

export default function SearchLayout(props) {

    const findEventHandler = (year, month) => {
        const fullPush = `/events/${year}/${month}`;
        router.push(fullPush);
    }

    return (
        <>
            <EventSearch onSearch={findEventHandler} />

            {props.children}
        </>
    );
}