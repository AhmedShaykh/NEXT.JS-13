import React from 'react';
import Link from 'next/link';
import styles from '../../../page.module.css';

async function getData() {

    const res = await fetch('https://api.quotable.io/random?tags=technology');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};

const page = async () => {

    const quote = await getData();

    return (
        <div className={styles.main}>
            <h3>Data Server Dynamic</h3>

            <div className={styles.contentDiv}>
                <h2 className={styles.content}>Content:</h2>

                <p className={styles.para}>
                    {quote.content}
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