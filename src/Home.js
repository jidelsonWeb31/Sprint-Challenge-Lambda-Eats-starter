import React from "react";
import {Route, Link} from 'react-router-dom';

function Home(){
    return(
        <div>
        <h1>Welcome To Joe's Pizza</h1>

        <p>
            We were created in May of 2020 to serve you the best pizza!
            </p>
            <Route exact path='/'>
                <Link to='/form?name=joe#thehash'>Order</Link>
            </Route>

            <Route path='/users/:id'>
                <Link to='/form?name=joe#pizza'></Link>
            </Route>
        </div>
    )
}

export default Home;