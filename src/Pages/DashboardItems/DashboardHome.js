import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider';

const DashboardHome = () => {
    const [posts, setPosts] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://track-down-server.vercel.app/emailPosts?email=${user?.email}`);
            setPosts(res.data.length);
        })();
    }, [user?.email]);

    return (
        <div>
            <h1 className="my-7 text-2xl capitalize font-bold text-emerald-500 text-center">Welcome to dashboard</h1>

            <div className="w-full  mt-5 lg:mt-0 p-6 flex flex-col items-center bg-[#ff5252] border border-gray-200 rounded-lg shadow  dark:border-gray-700">

                <h5 className="mb-4 text-2xl font-semibold tracking-tight text-white">Your Posts</h5>

                <p className="mb-3 font-normal text-xl text-white">{posts}</p>
            </div>
        </div>
    );
};

export default DashboardHome;