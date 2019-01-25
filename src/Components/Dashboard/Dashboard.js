import React, { Component } from 'react';
import Product from '../Product/Product'

class Dashboard extends Component {

    render() {
        let { inventory } = this.props
        // console.log(inventory) //array of objects

        let display = inventory.map((item, ind,) => {
            return (
                <div>
                    <h2 key={ind}>
                        <Product />

                        Image: {item.image},
                        Product Name: {item.name},
                        Price: ${item.price}

                        {/* stuck on end of step 2 */}
                    </h2>
                </div>
            )
        })


        




        return (
            <div>
                {display}
            </div>
        )
    }
}


export default Dashboard