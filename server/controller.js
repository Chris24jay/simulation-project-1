module.exports={
    getInventory: (req,res,next) => {
        const dbInst = req.app.get('db')
        
        dbInst.get_inventory()
        .then((products) => res.status(200).send(products))
        .catch((err) => res.status(500).send(err))
    },
    create: (req,res,next) => {
        // const dbInst = req.app.get('db')
        const { product_name, price, image_url } = req.body
        console.log(req.body)
        req.app.get('db').create_product([ product_name, price, image_url ])
        .then(() => {res.status(200).send('Creation successful')})
        // .catch(() => {res.status(500).send('Create Error')})
    }

}