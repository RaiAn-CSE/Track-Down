import React from 'react';

const DashboardPostCard = ({ post, handleDelete, handleAdvertise }) => {

    const { description, image, userEmail } = post;

    return (
        <tr>

            <td>

                <div>
                    <div className="font-bold">{description}</div>

                </div>

            </td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img className='image-full' src={image} alt='productImage' />
                    </div>
                </div>

            </td>
            <td>{userEmail}</td>
            {/* <th>
                <button onClick={() => handleAdvertise(product._id)} className="btn bg-boldGreen text-white btn-ghost btn-xs" disabled={product?.advertise}>Advertise</button>
                <button onClick={() => handleDelete(product._id)} className="btn btn-error text-white ml-4 btn-xs">Delete</button>
            </th> */}
        </tr>
    );
};

export default DashboardPostCard;