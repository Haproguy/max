import AddressIcon from '../icon/address-icon';
import DateIcon from '../icon/date-icon';
import ArrowRightIcon from '../icon/arrow-right-icon';
import styles from '../item.module.scss';

import Button from '../UI/button';



export default function Item(props) {
    const { id, title, location, date, image } = props;

    const address = location.replace(',', '\n');
    const postingDate = new Date(date).toLocaleDateString('ko-KR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const evenyLink = `/events/${id}`

    return (<li className={styles.item}>
        <img src={'/' + image} alt="image" />
        <div className={styles.content}>
            <h2>{title}</h2>
            <div className={styles.address}>
                <span>
                    <AddressIcon />
                </span>
                <span>
                    {address}
                </span>
            </div>
            <div className={styles.date}>
                <span>
                    <DateIcon />
                </span>
                <span>
                    {postingDate}
                </span>
            </div>
            <div className={styles.id}>{id}</div>
        </div>

        <div className={styles.action}>
            <Button link={evenyLink}>
                <span>
                    Explorer Link
                </span>

                <span>
                    <ArrowRightIcon />
                </span>
            </Button>

        </div>
    </li>);
}
