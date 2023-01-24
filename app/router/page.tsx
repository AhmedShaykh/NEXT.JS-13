"use client"
import { FC } from 'react';
import styles from '../page.module.css';

const page: FC = () => {
    return (
        <div className={styles.main}>
            <head>
                <title>
                    Next.JS 13 App
                </title>
            </head>

            <div>
                <h1>Router Page</h1>
            </div>
        </div>
    )
};

export default page;