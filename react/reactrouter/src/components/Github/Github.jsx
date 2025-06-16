import React, { useEffect,useState} from "react";
import { useLoaderData } from "react-router";
function Github(){
    // const[data,setData] = useState(0);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Maximus-08')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         setData(data);
    //         console.log(data);
    //     })
    // },[])
    const data = useLoaderData();
    return(
        <div className="text-center m-4 bg-gray-500 text-white p-4">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="" />
            </div>
    )
}
export default Github;
export const githubLoader = async()=>{const response = await fetch('https://api.github.com/users/Maximus-08')
    return response.json();
}