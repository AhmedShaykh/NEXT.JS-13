"use client";
import useSWR from 'swr';
import Link from 'next/link';
import styles from '../../../page.module.css';

const url = 'https://api.quotable.io/random?tags=technology';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const page = () => {

    const { data, error, isLoading } = useSWR(url, fetcher);

    if (error) return <div className={styles.main}>Failed to Load</div>

    if (isLoading) return <div className={styles.main}>Loading...</div>

    return (
        <div className={styles.main}>
            <h3>Fetching In Client</h3>

            <div className={styles.contentDiv}>
                <h2 className={styles.content}>Content:</h2>

                <p className={styles.para}>
                    {data.content}
                </p>
            </div>

            <Link href="/invokeapi">
                <p
                    style={{ marginTop: "1.5rem" }}
                    className={styles.link}
                >
                    Back To Home
                </p>
            </Link>
        </div>
    )
};

export default page;