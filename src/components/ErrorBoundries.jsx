import { Component } from "react";

class ErrorBoundries extends Component {
    constructor() {
        super()
        this.state = {
            errorAvailable: false
        }
    }
    static getDerivedStateFromError(error) {
        return { errorAvailable: true }
    }
    render() {
        return (
            this.state.errorAvailable ? <h1>Oops Something Went Wrong</h1> : this.props.children
        )
    }
}
export default ErrorBoundries