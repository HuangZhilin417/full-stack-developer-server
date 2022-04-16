import * as tuitsDao from "../schemas/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);

};
const updateTuit = async (req, res) => {
    const updatedTuit = req.body;
    const tuitdIdToUpdate = req.params.tid;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    console.log(tuitdIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    if (status.deletedCount === 0){
        res.send(false)
    }

    res.send(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


