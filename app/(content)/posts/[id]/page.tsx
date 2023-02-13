import { posts } from "../../../../Content/post";
import styles from '../../../page.module.css';

export async function generateStaticParams() {
    const ids: string[] = ["1", "2"];
    return ids.map(id => (
        {
            id: id
        }
    ));
};

async function getPost(id: string) {
    const post = posts.find((post) => post.id === id);
    return post;
};

export default async function Post({ params }: { params: { id: string } }) {

    const { id } = params;

    const post = await getPost(id);

    return (
        <div className={styles.main}>
            <h3>
                {post!.title}
            </h3>
            <br />
            <p>
                {post!.date}
            </p>
        </div>
    );
};