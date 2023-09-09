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
        <section className='pt-24 mx-4 lg:mx-14 mb-10 lg:mb-0 min-h-screen text-gray-200'>


            <h2 className='border-b-2 border-b-gray-200 mt-8 -mb-20 mx-6 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>{event?.name}</h2>

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



        </section>
    );
};

export default EventsDetails;