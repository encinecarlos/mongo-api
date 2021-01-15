import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String
    }
})

module.exports = mongoose.model("Client", clientSchema)