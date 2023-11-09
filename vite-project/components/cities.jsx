import cities from "../cities"
import {link,useNavigate} from "react-router-dom"

function cities(){
    const navigate=useNavigate();
    return(
        <ul>
            {cities.map((city)=>{
                return(<li key={city.id}>
                    <link to {`/cities/${city.id}`}></link>
                </li>)
            }}
        </ul>
    )
}