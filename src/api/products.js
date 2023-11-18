// Add a new product
export const addProduct = async (productInfo) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-product`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(productInfo),
    })
    const data = await response.json()
    return data;
}


// Update Product
export const updateProduct = async (id, updateInfo) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/update-product/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateInfo),
        })
    const data = await response.json()
    return data;
}


// get all products
export const getAllProducts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-all-products`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all products:', error);
        return [];
    }
}

// get single products for details by id
export const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-details/${id}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product for details:', error);
        return [];
    }
}

// Delete a product
export const deleteSingleProduct = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-product/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// get category wise products
export const getCategoryProducts = async (slug) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-category-products?slug=${slug}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching category products:', error);
        return [];
    }
}

// get category wise products
export const getProductDetails = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-details/${id}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return [];
    }
}