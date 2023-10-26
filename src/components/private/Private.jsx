import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="h-[100vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    // return <Navigate to={'/login'}></Navigate>
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

Private.propTypes = {
    children: PropTypes.node
}

export default Private;