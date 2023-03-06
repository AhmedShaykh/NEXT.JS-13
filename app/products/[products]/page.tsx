import Link from "next/link";
import styles from '../../page.module.css';

export const generateStaticParams = () => {
    return [
        { products: "iphone" },
        { products: "mac" },
    ];
};

export default function Products({ params }: { params: { products: string } }) {

    const product = params.products;

    return (
        <div className={styles.main}>
            <h3>
                The Product Name is: {product}
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