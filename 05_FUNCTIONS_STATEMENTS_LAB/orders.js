function products(product, qty) {
    const products = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };
    
    const productPrice = products[product];
    const totalPrice = (productPrice * qty).toFixed(2);

    console.log(totalPrice);
}

products("water", 5);
productproduct("coffee", 2);