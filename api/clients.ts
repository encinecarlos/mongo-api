const Client = require("../models/client")

module.exports = (app : any) => {
    const get = async (req : any, res : any) => {
        try {
            const clients : Promise<object[]> = await Client.find()
            res.json(clients) 
        }
        catch(err) {
            console.log(err)
            res.status(500).json({message: err.message})
        }
    }

    const post = async (req : any, res : any) => {
        const client : any = new Client({
            nome: req.body.nome,
            nascimento: Date.parse(req.body.nascimento),
            email: req.body.email,
            telefone: req.body.telefone
        })

        try {
            const newClient = await client.save()
            res.status(201).json(newClient._id)
        }
        catch(err) {
            res.status(500).json({message: err.message})
        }
    }

    const update = async (req:any, res:any) => {
        const id = req.params.id;
        const updates = req.body;
        
        try {
            const result = await Client.findOneAndUpdate(id, updates);
            res.status(200).json({message: 'updated'});
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    const destroy = async (req:any, res:any) => {
        // console.log(req.params.id);
        
        try {
            const record = await Client.deleteOne({_id: req.params.id});    
            if (record) {
                res.status(200).json({message: 'record deleted'});
            } else {
                res.status(404).json({message: 'Record not found!'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
        
    } 

    return {get, post, update, destroy}
}