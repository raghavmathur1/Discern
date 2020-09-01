import React, { Component } from 'react'
import Countries from "../components/Countries.jsx"
 class Explore extends Component {
    render() {
        return (
            <div className="exp">
                <div className="sectionHead">
					Explore
					<div className="line l2"></div>
				</div>
                <Countries />
            </div>
        )
    }
}

export default Explore;
