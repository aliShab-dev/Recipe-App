import {useGlobalContext} from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'
import logo from '../logo.svg'


function Meals () {
    const {meals, loading, selectMeal, addFavorite, favorites ,removeFavorite} = useGlobalContext()
    
  
    if(loading){
    return<section className='section'>
            <h1>looking for dishies ...</h1>
            <img src={logo} alt="" />
        </section>
    }
    if(!meals){
    return <section className='empty'>
    <h1 style={{color:'red'}}>404</h1>
    <h3 >object is not found :(</h3>
    </section>
    }

    const likeHandler = (id) => {
        favorites.find(meal => meal.idMeal === id) ? removeFavorite(id) : addFavorite(id)
    }


    
    return(

        
        <section className='section-center'>

            {
                meals.map((SM) => {
                    const {idMeal, strMeal:title, strMealThumb: image}=SM
                    let meal = null
                    meal = favorites.find((meal)=> meal.idMeal === idMeal)
                  
                    
                    return <article key={idMeal} className='single-meal' >
                        <img src={image} className='img' onClick={() =>selectMeal(idMeal)} />
                        <footer>
                            <h3 onClick={() =>selectMeal(idMeal)}>{title}</h3>
                            <button className={favorites.find(meal=> meal.idMeal === idMeal)? 'liked-btn': 'like-btn '} onClick={()=> {likeHandler(idMeal)}}><BsHandThumbsUp/></button>
                        </footer>

                    </article>
                    
                })
            }

        </section>
    )
}
export default Meals