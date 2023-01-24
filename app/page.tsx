"use client"
import { FC } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Home: FC = () => {
    return (
        <main className={styles.main}>
            <head>
                <title>
                    Next.JS 13 App
                </title>
            </head>

            <div>
                <h1>Learning NEXT.JS 13!</h1>

                <Link className={styles.link} href="/data">
                    Go To Blog
                </Link>
            </div>
        </main>
    )
};

export default Home;