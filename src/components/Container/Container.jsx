import React from 'react';

const Container = ({children}) => {
    return (
        <div className='container mx-auto px-6 md:px-12 lg:px-16'>
            {children}
        </div>
    );
};

export default Container;