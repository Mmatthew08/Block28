import {routes,route,link} from 'react-router-dom'
import '/.app.css'
import home from './components/home'
import cities from './components/cities'
import city from './components/city'

function app(){
    return(
        <>
        <h1>React Router</h1>
        <nav>
            <link to= '/'>home</link>
            <link to= '/cities'>all cities</link>
            <link to='cities/random'>random cities</link>
        </nav>
        <routes>
            <route path='/' element={<home/>}></route>
            <route path='/cities' element={<cities/>}></route>
            <route path= '/cities/:cityId' element= {<city/>}></route>
        </routes>
        </>
    )
}
export default app