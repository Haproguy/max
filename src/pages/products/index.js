import path from 'path';
import * as fileSystem from 'fs/promises';
import Link from 'next/link';

export default function ProductPage(props) {
    const { products } = props;

    return (
        <ul>
            {
                products.map((product) => {
                    return (
                        <li
                            key={product.id}>
                            <Link href={`/products/${product.id}`}>
                                {product.title}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export async function getStaticProps() {

    const filePath = path.join(process.cwd(), 'src/data', 'dummyBackend.json')
    const jsonData = await fileSystem.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: {
            products: data.products
        }
    };
}