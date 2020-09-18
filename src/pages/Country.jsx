import React, { Component } from 'react'
import './../App.css';
import Us from '../components/Us.jsx'
import Uk from '../components/Uk.jsx'
import Can from '../components/Can.jsx'
import Ind from '../components/Ind.jsx'
import Sin from '../components/Sin.jsx'
import Aus from '../components/Aus.jsx'
import Eur from '../components/Eur.jsx'
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
        else if(this.props.count === 4) {
            pass = <Ind />;
        }
        else if(this.props.count === 5) {
            pass = <Sin />;
        }
        else if(this.props.count === 6) {
            pass = <Aus />;
        }
        else if(this.props.count === 7) {
            pass = <Eur />;
        }
        return (
            <div>
                {pass}
            </div>
        )
    }
}
export default Country;
