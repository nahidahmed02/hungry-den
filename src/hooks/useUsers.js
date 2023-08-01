import { useQuery } from 'react-query';

const useUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = res.json();
            return data;
        }
    })

    return [users, isLoading, refetch];
};

export default useUsers;