

function ProductCard(props) {
    return (
        <div className="product-card">
            <h2>{props.name}</h2>
            <p>Qiymet: {props.price} AZN</p>
            <p>Kateqoriya: {props.category}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard