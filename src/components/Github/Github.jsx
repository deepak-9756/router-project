// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
//   const [data, setDtata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/deepak-9756")
//       .then((responce) => responce.json())
//       .then((data) => {
//         // console.log(data);
//         setDtata(data);
//       });
//   }, []);
  return (
    <div className="text-center m-4 flex  justify-between p-10 bg-gray-500 text-white text-3xl">
      <img
        className="text-center "
        src={data.avatar_url}
        alt="git-picture"
        width={300}
      />
      Github followers: {data.followers}
    </div>
  );
}

export default Github;
 export const gitHubInfoLoader = async ()=>{
    const responce  = await fetch("https://api.github.com/users/deepak-9756");
    return responce.json()
 }