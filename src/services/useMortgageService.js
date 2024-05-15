import { useHttp } from '../hooks/http.hook';

const useMortgageService = () =>{
    const {loading, request, error} = useHttp(); 
    const serverUrl = 'http://localhost:5001/'


    const getAllMentors = async () => {
        return await request(`${serverUrl}mentors`);
    }

    return {loading, error, getAllMentors, serverUrl};
};


export default useMortgageService; 