export default function Card({ product, category }) {
    return (
        <div className="card">
            <img src={product.image.data.attributes.url} alt="" />
            <span className="cat">{category}</span>
            <h3>{product.name}</h3>
            <p className="price">{product.price} €</p>
            <div className="btn btn-black">
                View product
            </div>
        </div>
    );
}
