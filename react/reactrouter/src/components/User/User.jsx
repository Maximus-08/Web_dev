import React from "react";
import { useParams } from "react-router-dom";   
function User() {
    const { userid } = useParams();
    return (
        <div className="container mx-auto p-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <p className="text-lg">User ID: {userid}</p>
        </div>
    );
}
export default User;