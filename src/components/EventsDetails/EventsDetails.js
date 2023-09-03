import useEvents from '@/src/hooks/useEvents';
import { useRouter } from 'next/router';
import React from 'react';
import Loading from '../Loading/Loading';

const EventsDetails = () => {
    const [events, isLoading] = useEvents();
    const router = useRouter();
    const eventsId = router.query.eventsId;

    const event = events?.find(event => event._id === eventsId);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='pt-24 mx-4 lg:mx-14 mb-10 lg:mb-0 min-h-screen text-gray-200'>

            <h2 className='text-2xl font-serif font-bold text-orange-500 text-center lg:mt-6 mb-5'>{event?.name}</h2>
            <p className='mb-3'><span className='font-semibold underline'>Description:</span> {event?.description}</p>

            {
                event?.venue
                &&
                <p className='mb-3'><span className='font-semibold underline'>Venue:</span> {event.venue}</p>
            }

            {
                event?.capacity
                &&
                <p className='mb-3'><span className='font-semibold underline'>Capacity:</span> {event.capacity}</p>
            }

            {
                event?.decorations
                &&
                <p className='mb-3'><span className='font-semibold underline'>Decorations:</span> {event.decorations}</p>
            }

            {
                event?.entertainment
                &&
                <p className='mb-3'><span className='font-semibold underline'>Entertainment:</span> {event.entertainment}</p>
            }

            {
                event?.accessibility
                &&
                <p className='mb-3'><span className='font-semibold underline'>Accessibility:</span> {event.accessibility}</p>
            }

            {
                event?.amenities
                &&
                <p className='mb-3'><span className='font-semibold underline'>Amenities:</span> {event.amenities}</p>
            }

            {
                event?.technology
                &&
                <p className='mb-3'><span className='font-semibold underline'>Technology:</span> {event.technology}</p>
            }

            {
                event?.menu
                &&
                <p className='mb-3'><span className='font-semibold underline'>Menu:</span> {event.menu}</p>
            }

            {
                event?.pricing
                &&
                <p className='mb-3'><span className='font-semibold underline'>Pricing:</span> {event.pricing}</p>
            }

            {
                event?.process
                &&
                <p className='mb-3'><span className='font-semibold underline'>Booking Process:</span> {event.process}</p>
            }



        </div>
    );
};

export default EventsDetails;