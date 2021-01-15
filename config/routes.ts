module.exports = (app : any) => {
    app.route('/')
       .get(app.api.clients.get) 
       .post(app.api.clients.post)
    
    app.route('/:id')
       .put(app.api.clients.update)
       .delete(app.api.clients.destroy);
}