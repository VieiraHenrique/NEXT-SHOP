export default function Card({ product }) {

    return (
        <div className="card">
            
            <span>{}</span>
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <div className="btn btn-black">Add to cart</div>
        </div>
    );
}