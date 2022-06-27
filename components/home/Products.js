import Card from "./Card";

export default function Products({ products, category }) {
    console.log(products);
    return (
        <div className="products">
            <h2 className="collection-title">{category}</h2>
            <div className="products-grid">
                <div className="wrapper">
                    {products &&
                        products.map((product) => {
                            return <Card key={product.id} product={product.attributes} />;
                        })}
                </div>
            </div>
        </div>
    );
}
