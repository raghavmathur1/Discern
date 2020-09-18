import React, { Component } from 'react'
import './../App.css';
import Us from '../components/Us.jsx'
import Uk from '../components/Uk.jsx'
import Can from '../components/Can.jsx'
class Country extends Component {
    render() {
        let pass;
        if(this.props.count === 1){
            pass = <Us />;
        } 
        else if(this.props.count === 2) {
            pass = <Uk />;
        }
        else if(this.props.count === 3) {
            pass = <Can />;
        }
        return (
            <div>
                {pass}
            </div>
        )
    }
}
export default Country;
