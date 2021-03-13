
import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoutes from './public/PublicRoutes';
import Home from './../pages/Home'
import LessonPlan from './../pages/lessonPlan/LessonPlan';
import NotFound from './../pages/notFound/NotFound';

function Routes() {
    return (
            <Switch>
                <PublicRoutes exact path = '/' component = {Home}/>
                <PublicRoutes exact path = '/lessonPlan' component = {LessonPlan}/>
                <PublicRoutes component={NotFound} />
            </Switch>
    )
}
export default Routes