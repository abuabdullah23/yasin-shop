

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