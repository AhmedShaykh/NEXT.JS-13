"use client";
import { posts } from "../../../../Content/post";
import { Box, Heading, Text } from '@chakra-ui/react';

async function getPost(id: string) {
    const post = posts.find((post) => post.id === id);
    return post;
}

export default async function Post({ params }: { params: { id: string } }) {

    const { id } = params;

    const post = await getPost(id);

    return (
        <Box>
            <Box>
                <Heading>
                    {post?.title}
                </Heading>

                <Text>
                    {post?.date}
                </Text>
            </Box>
        </Box>
    );
};