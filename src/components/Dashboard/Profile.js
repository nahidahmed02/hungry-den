import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className=''>
            <h2 className='mt-6 text-2xl font-serif font-bold text-orange-500 text-center'>Profile</h2>
            <div className="mx-auto card w-96 bg-base-100 shadow-2xl border mt-5">
                <figure className="px-10 pt-10">
                    <Image
                        fill='auto'
                        alt='user'
                        src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <p>Name:</p>
                    <p>E-Mail:</p>
                    <p>Phone:</p>
                    <p>Address:</p>
                    <div className="card-actions mt-3">
                        <button className="btn btn-xs border-none bg-orange-500">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile