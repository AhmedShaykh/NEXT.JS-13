"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { posts } from '../Content/post';
import Link from 'next/link';
import styles from './page.module.css';

type Post = {
    id: string,
    title: string,
    date: string
};

const Home = () => {

    const router = useRouter();

    return (
        <main className={styles.main}>
            <div>
                <div>
                    {posts.map(({ id, title, date }: Post) => (
                        <>
                            <Link key={id} href={`/posts/${id}`}>
                                {title}
                            </Link>
                            <br />

                            <p>
                                {date}
                            </p>

                            <br />
                        </>
                    ))}
                </div>

                <button className={styles.button}
                    onClick={() => router.push("/posts")}
                >
                    Go To Posts
                </button>
            </div>
        </main>
    )
};

export default Home;