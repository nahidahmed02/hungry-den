import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import useEvents from '@/src/hooks/useEvents';
import Loading from '../Loading/Loading';
import { RxDividerHorizontal } from 'react-icons/rx';

const Events = () => {

    const [events, isLoading] = useEvents();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='mx-4 lg:mx-14 mb-12'>

            <h2 className='border-b-2 border-b-gray-200 mt-24 -mb-20 mx-2 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Plan Your Events</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-9 text-white'>

                {
                    events?.map(event =>
                        <div key={event._id} className="card glass">

                            <figure>
                                <Image src={event?.photo} width={90} height={50} alt="events" className='w-full h-56' />
                            </figure>

                            <div className="flex justify-evenly my-4">
                                <h2 className="text-lg font-semibold">{event?.name}</h2>
                                <Link href={`/events/${event._id}`} className="btn btn-sm bg-orange-500 hover:bg-orange-600">Book Now</Link>
                            </div>

                        </div>
                    )
                }


            </div>
        </section>
    );
};

export default Events;