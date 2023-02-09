"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { posts } from '../Content/post';
import Link from 'next/link';
import styles from './page.module.css';

type Post = {
    id: string,
    title: string,
    date: string
};

const Home: FC = () => {

    const router = useRouter();

    return (
        <main className={styles.main}>
            <head>
                <title>
                    Next.JS 13 App
                </title>
            </head>

            <div>
                <div>
                    {posts.map(({ id, title, date }: Post, i) => (
                        <>
                            <Link key='i' href={`/posts/${id}`}>{title}</Link>
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