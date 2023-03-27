import path from 'path';
import * as fileSystem from 'fs/promises';

export default function ProductDetail(props) {
    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>Loading....</p>
    }


    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <div>{loadedProduct.description}</div>
        </>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'src/data', 'dummyBackend.json')
    const jsonData = await fileSystem.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const data = await getData()
    const productId = params.pid;
    const findProduct = data.products.find((product) => product.id == productId);

    if (!findProduct) {
        return {
            notFound: true
        };
    }
    return (
        {
            props: {
                loadedProduct: findProduct
            }
        }
    );
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((product) => product.id);
    const params = ids.map((id) => ({ params: { pid: id } }));

    return {
        paths: params,
        fallback: true,
    };
}