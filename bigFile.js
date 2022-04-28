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



/* useEffect quiz

1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements

3. When does React run your useEffect function? When does it NOT run
   the useEffect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

  */

