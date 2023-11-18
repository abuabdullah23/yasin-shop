// Add a new category
export const addCategory = async (categoryInfo) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-category`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(categoryInfo),
    })
    const data = await response.json()
    return data;
}

// get all categories
export const getAllCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-categories`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Delete a category
export const deleteCategory = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-category/${id}`, {
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