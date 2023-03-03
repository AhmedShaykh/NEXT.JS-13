import { FC } from 'react';
import Link from "next/link";
import styles from '../app/Navbar.module.css';

const Navbar: FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/router" className={styles.link}>
                    Router
                </Link>
            </div>
        </div>
    )
};

export default Navbar;