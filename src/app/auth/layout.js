import Container from '@/components/Container/Container';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Container>{children}</Container>
        </div>
    );
};

export default AuthLayout;