import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import DashboardPostCard from '../AllCards/DashboardPostCard';

const AllPosts = () => {
    const [posts, setPosts] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/posts?email=${user?.email}`)
            .then(function (response) {
                const result = response.data;
                setPosts(result);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [user?.email])

    console.log(posts);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        posts && posts?.map((post, idx) => <DashboardPostCard key={idx} post={post}></DashboardPostCard>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default AllPosts;