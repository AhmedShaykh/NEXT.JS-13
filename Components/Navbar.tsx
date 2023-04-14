import Link from "next/link";
import styles from '../app/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>

                <Link href="/" className={styles.link}>
                    Home
                </Link>

                <Link href="/invokeapi" className={styles.link}>
                    API
                </Link>

            </div>
        </div>
    )
};

export default Navbar;