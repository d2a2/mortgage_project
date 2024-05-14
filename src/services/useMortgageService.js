import { useHttp } from '../hooks/http.hook';

const useMortgageService = () =>{
    const {loading, request, error} = useHttp(); 


    const getAllMentors = async () => {
        return await request("http://localhost:3001/mentors");
    }

    return {loading, error, getAllMentors};
};


export default useMortgageService; 