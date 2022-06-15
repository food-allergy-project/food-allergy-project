import { Navigate, useLocation } from 'react-router-dom'

export function HandleRedirect() {
    let location = useLocation();
    return (
        <>
            <Navigate to="/sign-in" state={{ from: location }} replace />;
        </>

    )
}