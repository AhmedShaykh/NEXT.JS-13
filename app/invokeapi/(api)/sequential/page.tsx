import React from 'react';
import Link from 'next/link';
import styles from '../../../page.module.css';

type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};

async function getFiction() {

    const res = await fetch(
        'https://simple-books-api.glitch.me/books?type=fiction',
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};

async function getNonFiction() {

    const res = await fetch(
        'https://simple-books-api.glitch.me/books?type=non-fiction',
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
};

const page = async () => {

    const fictionBooks = await getFiction();

    const nonFictionBooks = await getNonFiction();

    return (
        <div className={styles.main}>
            <h3>Data Sequential Pattern</h3>

            <div className={styles.contentDiv}>
                <h3 className={styles.content}>Fiction Books:</h3>
                {fictionBooks.map((book: Book) => (
                    <p key={book.id} className={styles.para} style={{ padding: "0.5rem 0" }}>
                        {book.name}
                    </p>
                ))}

                <br />

                <h3 className={styles.content}>Non Fiction Books:</h3>
                <ul>
                    {nonFictionBooks.map((book: Book) => (
                        <p key={book.id} className={styles.para} style={{ padding: "0.5rem 0" }}>
                            {book.name}
                        </p>
                    ))}
                </ul>
            </div>

            <Link href="/invokeapi">
                <p
                    style={{ margin: "1.5rem 0" }}
                    className={styles.link}
                >
                    Back To Home
                </p>
            </Link>
        </div >
    )
};

export default page;