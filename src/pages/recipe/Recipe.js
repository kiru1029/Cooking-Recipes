import React, { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'

export default function Recipe() {
    const {id} = useParams()
    const url = "http://localhost:3000/recipes/" + id
    const {data:recipe, isPending, error} = useFetch(url)
    const history = useHistory()
    

    const handleClick = () => {
        console.log(recipe.id)
    }
    useEffect(() => {
        if(error){
            setTimeout(() => {
                history.push('/')
            },1000)
        }
    },[error,history])
    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">
                        {recipe.title}
                    </h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                    <button onClick={() => handleClick(recipe.id)}>Delete Recipe</button>
                </>
            )}
        </div>
    )
}
