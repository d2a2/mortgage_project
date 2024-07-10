import { useHttp } from '../hooks/http.hook';

const useMortgageService = () =>{
    const {loading, request, error} = useHttp(); 
    const serverUrl = 'http://localhost:5001/'


    const getAllMentors = async () => {
        return await request(`${serverUrl}mentors`);
    }

    const getAllReviews = async () =>{
        return await request(`${serverUrl}reviews`);
    }

    return {loading, error, getAllMentors, serverUrl, getAllReviews};
};


export default useMortgageService; 