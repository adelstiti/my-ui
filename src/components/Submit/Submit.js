import React from 'react'
import { Close } from '@material-ui/icons'
import './Submit.css'

const Submit = () => {
    return (
        <div className="submit-card">
            <div className="header-submit">
                <Close className="close-submit" fontSize="inherit" />
                <p className="title-submit">Submit a tool</p>
            </div>
            <form className="form-submit">
                <label htmlFor="name">Name</label>
                <input id="name" type="text"/>
                <label htmlFor="link">Link to resource</label>
                <input id="link" type="text"/>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="volvo">Select a category</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Submit
