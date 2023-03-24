import Link from "next/link";

import styles from './header.module.scss';

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Next Main</Link>
            </div>

            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}