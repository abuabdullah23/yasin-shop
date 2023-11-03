import { BiLoaderAlt } from 'react-icons/bi';

const Loader = ({ loadingText }) => {
    return (
        <>
            <div className='flex items-center justify-center gap-2'>
                <BiLoaderAlt className='w-5 h-5 animate-spin' />
                <p>{loadingText}</p>
            </div>

        </>
    );
};

export default Loader;