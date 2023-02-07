"use client";
import { contents } from '../../../content/post';
import { Box, Heading, Text } from '@chakra-ui/react';

export async function generateStaticParams() {
    const ids: string[] = ["1", "2"];
    return ids.map((id) => ({ id: id }));
};

async function getContent(id: string) {
    const content = contents.find((content) => content.id === id);
    return content;
};

async function Content({ params }: { params: { id: string } }) {

    const { id } = params;

    const content = await getContent(id);

    return (
        <Box textAlign='center'>
            <Heading>
                {content!.title}
            </Heading>
            <br />
            <Text>
                {content!.date}
            </Text>
        </Box>
    )
};

export default Content;