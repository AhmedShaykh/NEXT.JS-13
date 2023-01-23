import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <main>
          <section>
            <h1>
              Blog App
            </h1>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link className={styles.link} href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  )
};