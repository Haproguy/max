import Item from "./item";
import styles from '../list.module.scss';

export default function List(props) {
    const { items } = props;

    return (<div>
        <ul className={styles.list}>
            {items.map((e) => {
                return (
                    <Item
                        key={e.id}
                        id={e.id}
                        title={e.title}
                        location={e.location}
                        date={e.date}
                        image={e.image} />
                );
            })}
        </ul>
    </div>);
}
