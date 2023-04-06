import {useState} from 'react'
import {useGlobalContext} from '../context'
import logo from '../logo.svg';

function Search () {
    const {setSearch,supriseMe,mainPage } = useGlobalContext() 
    const [text , setText] = useState('')
 
    
    function handleChange (event) {
        setText(event.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text) {
            setSearch(text)
        }
    }
    
    const handleRandom = () => {
        setSearch('')
        setText('')
        supriseMe()
    }
    
    return(
    <section className='header-section'>
        <div className='logo' onClick={mainPage} >
            <img className='pixel' src={logo} />
            <h1 >The-Meal.com</h1>
        </div>

        <main className='secrch-container'>
           <form  onSubmit={handleSubmit} >
            <input type="text" onChange={handleChange} value={text} placeholder='looking for food?' />
            <div className='btn-container'>
                <button className='btn' type='submit'>Search</button>
                <button className='btn hiphster' onClick={handleRandom}>Suprise Me</button>
            </div>
           </form>
        </main>
    </section>
    )
}

export default Search