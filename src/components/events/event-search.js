import { useRef } from "react";

import Button from "../UI/button";
import styles from './eventSearch.module.scss';


export default function EventSearch(props) {
    const yearRef = useRef();
    const monthRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const selectFilter = {
            year: yearRef.current.value,
            month: monthRef.current.value
        }

        props.onSearch(selectFilter.year, selectFilter.month);

    }

    return (
        <form className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select id='year' ref={yearRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>

                <div className={styles.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthRef}>
                        <option value="1">1월</option>
                        <option value="2">2월</option>
                        <option value="3">3월</option>
                        <option value="4">4월</option>
                        <option value="5">5월</option>
                        <option value="6">6월</option>
                        <option value="7">7월</option>
                        <option value="8">8월</option>
                        <option value="9">9월</option>
                        <option value="10">10월</option>
                        <option value="11">11월</option>
                        <option value="12">12월</option>
                    </select>
                </div>
            </div>

            <Button onClick={submitHandler}>Search</Button>
        </form>
    );
}