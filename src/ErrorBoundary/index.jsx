import  { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Clear the error state when the component unmounts
        return () => setHasError(false);
    }, []);

    const handleError = (error, info) => {
        // Log the error to an error reporting service
        console.error(error, info);
        setHasError(true);
    };

    if (hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
    }

    return children;
}

export default ErrorBoundary;