import { useParams } from "react-router-dom";
import axios from "axios"; 
import { Rate } from 'antd';
import { apiKey, baseURL } from "../Constants/Constants";

function RateMovie() {
    let params = useParams();
    function rate(value) {
        console.log('RateMovie', value)
        
        // this service will move to services folder
        axios.post(`${baseURL}/movie/${params.movieid}/rating?api_key=${apiKey}`, {"value":value}).then((response) => {
            console.log('rate', response)
        });
    }
    return (
        <div>
            Rate Now : <Rate allowHalf defaultValue={2.5} onChange={rate}/>
        </div>
    );
}

export default RateMovie;