const db = require("../data/config")

function getResources(){
    return db("resources")
}

function getResourcesById(id){
    return db("resources")
    .where("id", id)
    .first()
}

function addResource(resource) {
    return db("resources")
    .insert(resource)
    .then(ids => {
        return getResourcesById(ids[0])
    })
}

module.exports = {
    getResources,
    getResourcesById,
    addResource,
}