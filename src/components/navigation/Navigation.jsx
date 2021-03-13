import React  from 'react'
import {useHistory} from 'react-router-dom'
import Back from './../../assets/icons/play-fill.svg';
import Button from './../../components/common/button/Button';
import './Navigation.scss';
const Navigation = ({title,children}) => {
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    }
    return (
        <div className = 'navigation-wrapper wrapper'>
            <div className = 'navigation-container'>
            <Button icon = {Back} value = {title} className = 'btn-invert btn-back' handleclick = {handleBack}/>
            </div>
            <div className = 'navigation-content'>
            {children}
            </div>
        </div>
    )
}

export default Navigation
