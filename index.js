const json_server=require('json-server')
const crudServer=json_server.create()
const middleware=json_server.defaults()
const router=json_server.router('db.json')
const cors=require('cors')
crudServer.use(cors())
crudServer.use(middleware)
crudServer.use(router)
const PORT=7000
crudServer.listen(PORT,()=>{
    console.log(`crudserver started at${PORT}`);
})