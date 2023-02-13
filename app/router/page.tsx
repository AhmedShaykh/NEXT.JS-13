import { FC } from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

const page: FC = () => {
    return (
        <div className={styles.main}>
            <head>
                <title>
                    Next.JS 13 App
                </title>
            </head>

            <div>
                <h3>Routing Group Page</h3>
            </div>

            <div
                style={{ marginTop: "1.5rem" }}
            >
                <Image
                    src="/Azuki.png"
                    alt="Azuki NFT"
                    width="200"
                    height="200"
                />
            </div>
        </div>
    )
};

export default page;