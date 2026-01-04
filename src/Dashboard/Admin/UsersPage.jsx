import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';
import { Toaster } from 'react-hot-toast';
import { User, Mail, Calendar } from 'lucide-react';

const UsersPage = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchUsers = async () => {
            const token = await user.getIdToken();

            const res = await fetch(
                `https://eco-track-server-two.vercel.app/users/role/${user?.email}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();
            setUsers(data.users || []);
            setLoading(false);
        };

        fetchUsers();
    }, [user]);



    if (loading) return <Loading />;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-green-900 mb-6">Registered Users</h1>

            {users.length === 0 ? (
                <p className="text-gray-500">No users found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Last Login</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, index) => (
                                <tr key={u._id}>
                                    <td>{index + 1}</td>
                                    <td className="flex items-center gap-2">
                                        {u.photoURL ? (
                                            <img
                                                src={u.photoURL}
                                                alt={u.name || 'User'}
                                                className="w-10 h-10 rounded-full"
                                            />
                                        ) : (
                                            <User className="w-10 h-10 text-gray-400" />
                                        )}
                                        <span>{u.name || 'No Name'}</span>
                                    </td>
                                    <td className="flex items-center gap-1">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        {u.email}
                                    </td>
                                    <td>{u.role || 'Member'}</td>
                                    <td>
                                        {u.last_loggedIn
                                            ? new Date(u.last_loggedIn).toLocaleString()
                                            : 'N/A'}
                                    </td>
                                    <td>
                                        {u.created_at
                                            ? new Date(u.created_at).toLocaleDateString()
                                            : 'N/A'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Toaster />
        </div>
    );
};

export default UsersPage;
