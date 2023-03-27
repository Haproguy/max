import List from "@/components/events/list";
import Button from "@/components/UI/button";
import { useRouter } from "next/router";
import { getFilteredEvents } from '../../../dummy';
import ResultsTitle from '../../../components/events/results-title';
import ErrorAlert from "@/components/UI/error-alert";

const FilterEventPage = () => {
    const router = useRouter();

    const filterData = router.query.slug;



    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    const filterEvent = getFilteredEvents({
        year: filterYear,
        month: filterMonth
    });

    if (!filterData) {
        return (
            <p className='center'>Loading...</p>
        );
    }

    if (
        isNaN(filterMonth) ||
        isNaN(filterMonth) ||
        filterMonth > 13 ||
        filterMonth <= 0 ||
        filterYear > 2030 ||
        filterYear < 2020) {
        return (
            <>
                <ErrorAlert>
                    <p>Bad Request Sorry Please Check your Values</p>
                </ErrorAlert>
                <Button link='/events'>Show All Event</Button>
            </>
        );
    }


    if (!filterEvent || filterEvent.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>검색결과가 없습니다.</p>
                </ErrorAlert>
                <Button link='/events'>Show All Events</Button>
            </>

        );
    }


    return (
        <>
            <ResultsTitle date={filterData} />
            <List items={filterEvent}></List>
        </>
    );
}

export default FilterEventPage;