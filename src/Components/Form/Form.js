import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            imgURL: '',
            productName: '',
            price: 0,
        }
        //bind cancel method here
        this.handleCancelButton = this.handleCancelButton.bind(this)
    }

    //set up a method to update state with the input values
    handleImageInput(val) {
        console.log(val)
        this.setState({ imgURL: val })
    }

    handleProductNameInput(val) {
        console.log(val)
        this.setState({ productName: val })
    }

    handlePriceInput(val) {
        console.log(val)
        this.setState({ price: val })
    }

    //set up an onclick to cancel to reset the state 
    handleCancelButton() {
        this.setState({
            imgURL: '',
            productName: '',
            price: 0,
        })
    }
    
    render() {

        return (
            <div>
                <div>
                    Image URL:<br />
                    <input onChange={e => this.handleImageInput(e.target.value)} /><br />

                    Product Name:<br />
                    <input onChange={e => this.handleProductNameInput(e.target.value)} /><br />

                    Price:<br />
                    <input onChange={e => this.handlePriceInput(e.target.value)} /><br />

                    <button onClick={ this.handleCancelButton }>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form