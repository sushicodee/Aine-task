import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidenav.scss';
import Settings from './../../assets/icons/gear.svg' 
import Plan from './../../assets/icons/journal-text.svg' 
import Person from './../../assets/icons/person.svg' 
import Logo from './../../assets/icons/imagelogo.png' 

const Sidenav = () => {
    const routes = [{path:'/home' ,title:'' ,icon:Logo},{path:'/students' ,title:'Students' ,icon:Person},{path:'/lessonPlan', title:'Lesson Plan',icon:Plan},{path:'/settings' ,title:'Settings',icon:Settings}]
    return (
        <nav className = 'side-nav'>
            {routes.map(({path,title,icon})=>
            <NavLink key = {`${title}-link`} className = 'side-nav-item' to = {path}>
                <img className = {`side-nav-item__icon`} src = {icon} alt = {title + 'link' || 'logo'}/>
                {title}
            </NavLink> )}
        </nav>
    )
}

export default Sidenav
