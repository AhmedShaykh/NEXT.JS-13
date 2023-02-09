import { posts } from "../../../../Content/post";

async function getPost(id: string) {
    const post = posts.find((post) => post.id === id);
    return post;
}

export default async function Post({ params }: { params: { id: string } }) {

    const { id } = params;

    const post = await getPost(id);

    return (
        <div>
            <div>
                <h1>
                    {post?.title}
                </h1>

                <p>
                    {post?.date}
                </p>
            </div>
        </div>
    );
};