import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
const app = express()
const port = 3600

const { Schema } = mongoose

const productSchema = new Schema({
    image: { type: String },
    title: { type: String },
    description: { type: String },
    category: { type: String },
}, { timestamps: true })

const Products = mongoose.model('5saatliq4', productSchema)

app.use(cors())
app.use(express.json())

app.get('/products', async (req, res) => {
    try {
        const products = await Products.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findById(id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
app.post('/products', async (req, res) => {
    try {
        const product = new Products(req.body)
        await product.save()
        res.status(200).send("Product Created")
    } catch (error) {
        res.status(500).send(error.message)
    }
})


app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Products.findByIdAndDelete(id)
        res.status(200).send("product deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


mongoose.connect('mongodb+srv://Test:test123@cluster0.ghwwmer.mongodb.net/')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})