import { Component, Fragment } from "react";

class Greet extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        if (this.props.dialog === 'I am Hulk.') {
            throw new Error("There is no dialog like this!")
        }
        return (
            <Fragment>
                <h1>{this.props.dialog}</h1>
            </Fragment>
        )
    }
}
export default Greet