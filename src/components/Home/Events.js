import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import useEvents from '@/src/hooks/useEvents';
import Loading from '../Loading/Loading';

const Events = () => {

    const [events, isLoading] = useEvents();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='mx-4 lg:mx-14 mb-12'>
            <h2 className='text-3xl font-serif font-bold text-orange-500 text-center mt-14 mb-7'>Plan Your Events</h2>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-9 text-white '>

                {
                    events?.map(event =>
                        <div key={event._id} className="card glass">

                            <figure>
                                <Image src={event?.photo} width={90} height={50} alt="events" className='w-full h-56' />
                            </figure>

                            <div className="card-body h-32">
                                <h2 className="card-title">{event?.name}</h2>
                                <div className="card-actions justify-end">
                                    <Link href={`/events/${event._id}`} className="btn btn-sm bg-orange-500 hover:bg-orange-600">Book Now</Link>
                                </div>
                            </div>

                        </div>
                    )
                }


            </div>
        </section>
    );
};

export default Events;