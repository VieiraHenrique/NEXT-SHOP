import Link from "next/link";
import Card from "./Card";

export default function Products({ products, category }) {
    return (
        <div className="products" id={category}>
            <h2 className="collection-title">{category}</h2>
            <div className="products-grid">
                <div className="wrapper">
                    {products &&
                        products.map((product) => {
                            return (
                                <Link key={product.id} href={`/product/${product.id}`}>
                                    <a>
                                        <Card product={product.attributes} category={category} />
                                    </a>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
