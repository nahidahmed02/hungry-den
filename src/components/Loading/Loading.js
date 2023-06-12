import React from 'react';

const Loading = () => {
    return (
        <div className='flex text-center justify-center my-32'>
            <span className="animate-spin rounded-full w-10 h-10 border-t-4 border-orange-400"></span>
        </div>
    );
};

export default Loading;