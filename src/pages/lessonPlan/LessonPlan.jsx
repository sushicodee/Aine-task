import React , {useState} from 'react'
import Navigation from './../../components/navigation/Navigation'
import Input from './../../components/common/input/Input';
import Button from './../../components/common/button/Button';
import './LessonPlan.scss';
const LessonPlan = () => {
    const [data, setdata] = useState({url:''})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting')
    }
    const handleChange = (e) => {
        const {name,value} = e.target;
        setdata({...data,[name]:value})
    }
    return (
       <Navigation title = {'Videos'}>
            <form className ='video-form' type = 'submit' onSubmit = {handleSubmit}>
                <Input name = 'url' placeholder = 'Insert URL here' value = {data.url} onChange = {handleChange}/>
            <p> or</p>
            <Button className = 'btn-upload' value = 'upload'/>
            </form>
       </Navigation>
    )
}

export default LessonPlan
