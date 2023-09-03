import { useQuery } from 'react-query';

const useEvents = () => {
    const { data: events, isLoading } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await fetch('https://hungry-den-server.onrender.com/events');
            const data = res.json();
            return data;
        }
    })

    return [events, isLoading];
};

export default useEvents;