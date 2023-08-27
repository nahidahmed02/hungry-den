import { useQuery } from 'react-query';

const useUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://hungry-den-server.onrender.com/users');
            const data = res.json();
            return data;
        }
    })

    return [users, isLoading, refetch];
};

export default useUsers;