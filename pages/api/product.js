import Product from '../../models/Product'

// This fetches from the id  from properties using findOne
export default async (req, res) => {
    const { _id } = req.query
    const product = await Product.findOne({_id})
    res.status(200).json(product)
}

