import ProductCard from "./ProductCard"


function ProductList() {
    return (
        <>
            <div className="product-list">
                <ProductCard
                    name="iPhone 17"
                    price="3500"
                    category="Telefon"
                    description="Apple istehsali smartfon"
                ></ProductCard>



                <ProductCard
                    name="iPhone 16"
                    price="2500"
                    category="Telefon"
                    description="Apple istehsali smartfon"
                ></ProductCard>



                <ProductCard
                    name="iPhone 15"
                    price="2200"
                    category="Telefon"
                    description="Apple istehsali smartfon"
                ></ProductCard>



                <ProductCard
                    name="MacBook Air"
                    price="3200"
                    category="Laptop"
                    description="Yungul ve guclu noutbuk"
                ></ProductCard>
            </div>
        </>
    )
}

export default ProductList