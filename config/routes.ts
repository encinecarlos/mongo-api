module.exports = (app : any) => {
   app.route('/')
      .get(() => console.log('app is running!'));
   app.route('/clients')
       .get(app.api.clients.get) 
       .post(app.api.clients.post)
    
   app.route('/clients/:id')
       .put(app.api.clients.update)
       .delete(app.api.clients.destroy);
}