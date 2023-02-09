import { FC } from 'react';
import Link from 'next/link';
import styles from '../../page.module.css';

const Posts: FC = () => {
    return (
        <div className={styles.main}>
            <h3>
                Posts Page
            </h3>

            <Link href="/">
                <p
                    style={{ marginTop: "10px" }}
                    className={styles.link}
                >
                    Back To Home
                </p>
            </Link>
        </div>
    )
};

export default Posts;