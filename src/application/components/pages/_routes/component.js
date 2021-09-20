import React from 'react'
import { Route, Switch } from 'react-router'
import { ROUTES } from 'application/constants'
import { Main } from 'application/components/pages'
 
const RoutesComponent = () => {
    return <Switch>
        <Route exact path={ROUTES.BASE} component={Main.FormAssets} />
        <Route exact path={ROUTES.YOUR_CALCULATED_ASSETS} component={Main.CalculatedAssets} />
    </Switch>
}

export default RoutesComponent
