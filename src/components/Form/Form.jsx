import React from "react"
import { useState } from "react"
import { validate } from "./validation";
import styles from './Form.module.css'



const Form = (props) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validate({
              ...userData,
              [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.Login(userData)
        
        const propsArray = Object.keys(errors)
        if (propsArray.length === 0){
          setErrors({
            username: '',
            password: ''
          })
      
          setUserData({
            username: '',
            password: ''
          })
        }else alert('Debe llenar todos los campos')
      }

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>EL user es admin@gmail.com y la contraseña 1admin</h1>
                <label name='username' >Username:</label>
                <input type='text' name= 'username' value={userData.username} onChange={handleInputChange} />
                {errors.username !== ''? <p className={styles.danger} >{errors.username}</p> : ''}
                <label name='password' >Password:</label>
                <input type='text' name= 'password' value={userData.password} onChange={handleInputChange} />
                {errors.password !== ''? <p className={styles.danger} >{errors.password}</p> : ''}
                <button type='submit' >Login</button>
            </form>
        </div>
    )

}

export default Form