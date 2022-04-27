// Forms
import React from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * //1. Create a state object to store the 4 values we need to save.
     * //2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * //3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * //4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = React.useState({
        email: '', password: '', confirmationPassword: '', okayToEmail: false
    })

    const handleChange = (e) => {
        setFormData(prev => {return {...prev, [e.target.name ? e.target.name : e.target.id]: e.target.name ? e.target.value : !prev.okayToEmail}})
    }

    function handleSubmit(event) {
        event.preventDefault()
        formData.password === formData.confirmationPassword ? console.log('successfully signed up') : console.log('passwords do not match')
        console.log('ty for signing up for the newsletter')//yes, it triggers just by click.
    }
    
    console.log(formData)
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password"
                    name="confirmationPassword"
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.confirmationPassword}
                />       
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit" onClick={handleSubmit}> Sign up </button>
            </form>
        </div>
    )
}
