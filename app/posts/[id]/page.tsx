import { posts } from "../../../Content/post";
import styles from '../../page.module.css';

type Params = {
    params: {
        id: string;
    }
};

export function generateStaticParams() {

    const ids: string[] = ["1", "2"];

    return ids.map(id => (
        {
            id
        }
    ));
};

async function getPost(id: string) {

    const post = posts.find((post) => post.id === id);

    return post;
};

export default async function Post({ params }: Params) {

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