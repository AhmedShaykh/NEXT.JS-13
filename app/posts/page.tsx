import Link from 'next/link';
import styles from '../page.module.css';

const Posts = () => {

    return (
        <div className={styles.main}>
            <h3>
                Posts Page
            </h3>

            <button style={{ marginTop: "1.5rem" }}>
                <Link
                    className={styles.button}
                    href="/"
                >
                    Go To Home
                </Link>
            </button>
        </div>
    )
};

export default Posts;