import { useEffect, useState } from "react";


function Layout (){

    const [allPost, setAllPost] = useState([]);
    const [count, setCount] = useState(10);
    const [Load, setLoad] = useState(true);

 useEffect (()=>{
    setLoad(false);
    const getPost = fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`);

    getPost.then((data)=>
    data.json().then((mainPost)=>{
        return setAllPost(mainPost)
    })).catch((error)=>console.log(error)).finally (()=> setLoad(true));
    }, [count])



    return(
         <>
         

            <h1 className=" text-3xl text-red-600 font-bold text center">this is layout page here now</h1>
              <div className="container">
              <div className="flex flex-wrap justify-center">
            {allPost.map((item, index)=>{
                return (
                    <div className=" bg-blue-700 m-2 px-2 py-6 w-80 text-white font-bold rounded-md" key={index}>
                        <h2 className=" text-green-600 text-4xl text-center">{item.id}</h2>
                        <h2 className=" text-3xl text-yellow-600 py-3">{item.title}</h2>
                        <p className=" text-justify">{item.body}</p>
                    </div>
                )
            })}

          </div>
          </div>

          
         <div className=" text-center">
         <button onClick={()=> setCount((prev)=>{
            return prev + 10;
         })} className=" bg-red-500 py-2 px-4 rounded-md font-bold text-white">{Load ? "Load more..." : "Loading"}</button>
         </div>
         </>
    )
}

export default Layout;