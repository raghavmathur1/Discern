import React, { Component } from 'react'
import Country from "../components/Country.jsx"
import usa from "../images/usa.jpg"
import uk from "../images/uk.jpg"
export default class Countries extends Component {
    render() {
        return (
            <div className="clist">
                <Country img={usa}/>
                <Country img={uk}/>
                <Country img={usa}/>
                <Country img={uk}/>
                <Country img={usa}/>
                <Country img={uk}/>
                <Country img={usa}/>
                <Country img={uk}/>
            </div>
        )
    }
}
