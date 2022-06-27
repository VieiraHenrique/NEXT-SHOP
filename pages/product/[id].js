import axios from "axios";
import { CMS_URL } from "../../lib/variables";

export default function SingleProduct({ product }) {
    return (
        <div className="single-product">
            <div className="wrapper">
                <h1>{product.name}</h1>
                <div className="two-columns">
                    <img src={product.image.data.attributes.url} alt="" />
                    <div className="description">
                        <p>{product.category.data.attributes.name}</p>
                        <h2>{product.price} €</h2>
                        <p>{product.description}</p>
                        <div className="btn btn-black">Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const props = {};

    try {
        const { data: product } = await axios.get(CMS_URL + `/api/products/${context.params.id}?populate=*`);
        props["product"] = product.data.attributes;
    } catch (err) {
        console.log(err);
    }

    return {
        props,
    };
}

export async function getStaticPaths() {
    const { data: allProducts } = await axios.get(CMS_URL + "/api/products");

    const paths = allProducts.data.map((elem) => {
        return {
            params: { id: `${elem.id}` },
        };
    });

    return {
        paths,
        fallback: false, // goes to 404 if not valid
    };
}
