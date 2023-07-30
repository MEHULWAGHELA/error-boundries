import { Component, Fragment } from "react"
import ErrorBoundries from "./ErrorBoundries"
import Greet from "./Greet"
class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            error: false
        }
    }
    errorFunction = () => {
        this.setState({
            error: !this.state.error
        })
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.errorFunction}> Change</button>
                {
                    this.state.error && <>
                        <ErrorBoundries>
                            <Greet dialog={"I am...Inevitable."} />
                        </ErrorBoundries>
                        <ErrorBoundries>
                            <Greet dialog={"And... I am, Iron Man."} />
                        </ErrorBoundries>
                        <ErrorBoundries>
                            <Greet dialog={"I am Hulk."} />
                        </ErrorBoundries>
                    </>
                }
                {
                    !this.state.error && <>
                        <ErrorBoundries>
                            <Greet dialog={"I am...Inevitable."} />
                            <Greet dialog={"And... I am, Iron Man."} />
                            <Greet dialog={"I am Hulk."} />
                        </ErrorBoundries>
                    </>
                }
            </Fragment>
        )
    }
}
export default ParentComponent