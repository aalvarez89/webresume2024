import { Navigate, Outlet } from 'react-router-dom'
import { RouteConstants } from '../routes'

const PrivateRoutes = () => {
    let token = localStorage.getItem('token');
    return (
        token ? <Outlet /> : <Navigate to={RouteConstants.HOME} />
    )
}

export default PrivateRoutes;