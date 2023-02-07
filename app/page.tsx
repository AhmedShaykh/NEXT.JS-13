"use client";
import { FC } from 'react';
import styles from './page.module.css';
import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { contents } from '../content/post';
import Link from 'next/link';

type Content = {
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
                    {contents.map(({ id, title, date }: Content) => (
                        <>
                            <Link href={`/content/${id}`}>
                                {title}
                            </Link>
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