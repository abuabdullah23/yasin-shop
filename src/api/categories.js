// get all categories
export const getAllCategories = async () => {
    const response = await fetch('categories.json')
    const data = await response.json();
    return data;
}