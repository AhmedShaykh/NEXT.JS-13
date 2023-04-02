import { FC } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

const Posts: FC = () => {
    return (
        <div className={styles.main}>
            <h3>
                Invoking API's
            </h3>
            <br />

            <Link href="/invokeapi/static">
                <h5 className={styles.heading}>
                    1) Fetching Data Server Static
                </h5>
            </Link>

            <Link href="/invokeapi/dynamic">
                <h5 className={styles.heading}>
                    2) Fetching Data Server Dynamic
                </h5>
            </Link>

            <Link href="/invokeapi/client">
                <h5 className={styles.heading}>
                    3) Fetching Data Client
                </h5>
            </Link>

            <Link href="/invokeapi/parallel">
                <h5 className={styles.heading}>
                    4) Fetching Data Parallel Pattern
                </h5>
            </Link>

            <Link href="/invokeapi/sequential ">
                <h5 className={styles.heading}>
                    5) Fetching Data Sequential Pattern
                </h5>
            </Link>
        </div>
    )
};

export default Posts;