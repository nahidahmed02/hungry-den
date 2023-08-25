import React from 'react';
import loading from '../../../public/images/loading.gif'
import Image from 'next/image';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>

            <div>
                <Image src={loading} width={100} height={100} alt='loading' />
            </div>

            <div className='loading-animation'>
                <span className="text-xl text-orange-400 animate-shine">Hungry Den</span>
            </div>
        </div>
    );
};

export default Loading;