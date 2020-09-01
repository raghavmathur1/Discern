import React, { Component } from 'react'

 class Member extends Component {
    render() {
        return (
            <div className="box">
                <img src={this.props.mimg} className="img"></img>
                <div className="mname">{this.props.name}</div>
                <div className="mpost">{this.props.post}</div>
                <div className="mtext">{this.props.text}</div>
            </div>
        )
    }
}

export default Member;
