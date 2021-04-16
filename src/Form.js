import React, {Component} from 'react'

class Form extends Component {

    handleChage = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState
    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChage}
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChage={this.handleChage}
                />
                <input type="button" value="Submit" onClick={this.submitForm} />

            </form>
        )
    }
}

export default Form;