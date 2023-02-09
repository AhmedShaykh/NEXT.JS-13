"use client";
import { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Posts: FC = () => {
    return (
        <Box textAlign='center'>
            <Heading fontSize="5xl">
                Content Page
            </Heading>

            <Text
                mt="4"
                color="#0074de"
                cursor="pointer"
            >
                <Link href="/">
                    Back To Home
                </Link>
            </Text>
        </Box>
    )
};

export default Posts;