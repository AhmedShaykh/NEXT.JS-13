"use client";
import { FC } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
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

            <Box>
                <Box>
                    {posts.map(({ id, title, date }: Post, i) => (
                        <>
                            <Link key='i' href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <Text>
                                {date}
                            </Text>
                            <br />
                        </>
                    ))}
                </Box>

                <Button
                    mt="4"
                    colorScheme="blue"
                    onClick={() => router.push("/data")}
                >
                    Go To Blog
                </Button>
            </Box>
        </main>
    )
};

export default Home;