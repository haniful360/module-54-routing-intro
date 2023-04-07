import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <h4>sorry an unexpected error has occurred</h4>
        </div>
    );
};

export default ErrorPage;