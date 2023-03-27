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
                        <Link href="/events">파일기반라우팅</Link>
                    </li>
                    <li>
                        <Link href='/products'>데이터패칭</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}