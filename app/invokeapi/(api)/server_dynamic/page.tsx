import React from 'react';
import Link from 'next/link';
import styles from '../../../page.module.css';

const page = () => {
    return (
        <div className={styles.main}>
            <h3>Data Server Dynamic</h3>

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