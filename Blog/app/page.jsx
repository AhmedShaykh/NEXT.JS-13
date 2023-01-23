import styles from './page.module.css';
import { getSortedPostsData } from '../lib/posts.js';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <main className={styles.main}>
      <div>
        <h1 >Blog</h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))};
        </ul>
      </div>
    </main>
  )
};