import {Switch, Route} from 'react-router-dom'
import CartPage from '../pages/CartPage'
import MainPage from '../pages/MainPage'

const Routes = () => {

    return(
        
        <Switch>
            <Route exact path='/'>
                <MainPage/>
            </Route>

            <Route exact path='/cart'>
                <CartPage/>
            </Route>
        </Switch>

    )
}

export default Routes