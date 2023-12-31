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

// get single category for details by id
export const getSingleCategory = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category-details/${id}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching category for details:', error);
        return [];
    }
}


// Update category
export const updateCategory = async (id, updateInfo) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/update-category/${id}`,
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