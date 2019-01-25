module.exports={
    getInventory: (req,res,next) => {
        const dbInst = req.app.get('db')
        
        dbInst.get_inventory()
        .then((products) => res.status(200).send(products))
        .catch((err) => res.status(500).send(err))
    },

}