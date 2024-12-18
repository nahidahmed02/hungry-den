import useEvents from '@/src/hooks/useEvents';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

const EventsDetails = () => {
    const [event, setEvent] = useState(null);
    const [events, isLoading] = useEvents();
    const router = useRouter();
    const eventsId = router.query.eventsId;

    useEffect(() => {
        setEvent(events?.find(event => event._id === eventsId))
    }, [events, eventsId])

    // const event = events?.find(event => event._id === eventsId);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='pt-24 mx-4 lg:mx-14 mb-10 lg:mb-0 min-h-screen text-gray-200'>


            <h2 className='border-b-2 border-b-custom-500 mt-8 -mb-20 mx-6 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-custom-500 bg-black'>{event?.name}</h2>

            <p className='mb-3'><span className='font-semibold text-custom-500'>Description:</span> {event?.description}</p>

            {
                event?.venue
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Venue:</span> {event.venue}</p>
            }

            {
                event?.capacity
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Capacity:</span> {event.capacity}</p>
            }

            {
                event?.decorations
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Decorations:</span> {event.decorations}</p>
            }

            {
                event?.entertainment
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Entertainment:</span> {event.entertainment}</p>
            }

            {
                event?.accessibility
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Accessibility:</span> {event.accessibility}</p>
            }

            {
                event?.amenities
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Amenities:</span> {event.amenities}</p>
            }

            {
                event?.technology
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Technology:</span> {event.technology}</p>
            }

            {
                event?.menu
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Menu:</span> {event.menu}</p>
            }

            {
                event?.pricing
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Pricing:</span> {event.pricing}</p>
            }

            {
                event?.process
                &&
                <p className='mb-3'><span className='font-semibold text-custom-500'>Booking Process:</span> {event.process}</p>
            }



        </section>
    );
};

export default EventsDetails;