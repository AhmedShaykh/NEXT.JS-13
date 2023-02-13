import Link from "next/link";
import styles from '../page.module.css';

export default function Products({ params }: { params: { products: string } }) {
    return (
        <div className={styles.main}>
            <h3>
                The Product Name is: {params.products}
            </h3>

            <Link href="/">
                <p
                    style={{ marginTop: "1.5rem" }}
                    className={styles.link}
                >
                    Back To Home
                </p>
            </Link>
        </div>
    )
};