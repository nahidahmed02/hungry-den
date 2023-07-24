import React from 'react';

const User = ({ user }) => {
    const { name, email } = user;

    return (
        <div className="card w-auto lg:w-44 bg-base-100 shadow-2xl border border-orange-400">

            <div className="mt-2 mb-3">
                <p className='font-bold text-xs text-center'>{name}</p>
                <p className='italic text-xs text-center'>{email}</p>

                <span className="cursor-pointer bg-black btn-xs font-semibold text-green-500">Make Admin</span>
                <span className="cursor-pointer bg-black ml-1 btn-xs font-semibold text-yellow-500">Make D.Man</span>
            </div>

        </div>
    );
};

export default User;