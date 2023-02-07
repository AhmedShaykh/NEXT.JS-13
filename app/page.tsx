"use client";
import { FC } from 'react';
import styles from './page.module.css';
import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

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
                <Text>Learning NEXT.JS 13!</Text>

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