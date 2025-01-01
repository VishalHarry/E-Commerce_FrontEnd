import React, { useContext } from 'react';
import { AuthContext } from '../components/contaxt/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRouts({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Handle loading state
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 flex justify-center items-center rounded-full animate-spin border-4 border-t-4 border-blue-500 border-solid mb-4">
            <span className="text-4xl">🛒</span> {/* Shopping cart emoji */}
          </div>
          <p className="text-xl text-gray-800 font-semibold">Loading your shopping experience...</p>
        </div>
      </div>;
    }

    // Allow access if user exists
    if (user) {
        return children;
    }

    // Redirect to login if user is not authenticated
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
}

export default PrivateRouts;
