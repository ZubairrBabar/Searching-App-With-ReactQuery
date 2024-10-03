

import { useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import RecipeDetail from "./RecipeDetail"


const fetchRecipes = async (search)=>{
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
    return await response.json()
}



function Recipe() {
const [search , setSearch] = useState( "")
    const{isLoading , isError , data}= useQuery({
      queryKey: ["recipes", search],
      queryFn: ()=> fetchRecipes(search),
      keepPreviousData:true,
    } )
    console.log(data);

    if(isError) return <h1   className="text-center text-3xl font-bold">Somthing Went Wrong</h1>
    
    
    
    
    return(
            
        <div className="container mx-auto"> 
        
        <h1 className="text-3xl font-medium text-center my-5">Delicious Food</h1>
<input type="text" onChange={(e)=> setSearch(e.target.value)} className="border w-full p-2 m-2 " />
 {isLoading && <h1 className="text-center text-3xl font-bold">...Loading</h1> } 
        <div className="flex flex-wrap -m-4">
        {data?.recipes?.map((data)=>{
            const {name , id , image , rating , cuisine} = data
            return(

              <Link  to={`/${id}`} key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {cuisine}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {name}
                  </h2>
                  <p className="mt-1">Rating {rating}</p>
                </div>
              </div>
        </Link>

            )
        })}
        </div>
        </div>

    )
}
export default Recipe