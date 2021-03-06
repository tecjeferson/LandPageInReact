import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Curriculo from './pages/Curriculum'
import Form from './pages/Form'

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/curriculo">
                <Curriculo />
            </Route>
            <Route exact path="/form">
                <Form />
            </Route>
        </Switch>
    )
}