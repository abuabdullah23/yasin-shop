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