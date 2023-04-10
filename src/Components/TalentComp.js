import React, { Component } from 'react'

import Talent from "../Services/Talent";
import MenuAppBar from "./MenuAppBar";
import Header from "../Header";


class TalentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    componentDidMount() {
        Talent.getMessage().then(res => {
            this.setState({ message: res.data });
        })
    }

    render() {
        return (
            <div>

                <div>
                    <Header>

                    </Header>

                </div>

                <div> {this.state.message}</div>
            </div>
        )
    }
}

export default TalentComp


