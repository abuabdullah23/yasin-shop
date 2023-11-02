import ProductsCard from './ProductsCard';

const ShopProducts = ({ styles }) => {
    return (
        <div className={`w-full grid gap-4 grid-cols-1 ${styles === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((p, i) => <ProductsCard key={i} product={p} />)
            }
        </div>
    );
};

export default ShopProducts;