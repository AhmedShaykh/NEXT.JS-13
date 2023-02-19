"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../page.module.css';

const Posts: FC = () => {

    const router = useRouter();

    return (
        <div className={styles.main}>
            <h3>
                Posts Page
            </h3>

            <button
                style={{ marginTop: "1.5rem" }}
                className={styles.button}
                onClick={() => router.push("/")}
            >
                Go To Back
            </button>
        </div>
    )
};

export default Posts;