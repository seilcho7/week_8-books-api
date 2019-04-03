function create(req, res) {
    res.json({ message: "Created" });
}

function retrieveAll(req, res) {
    res.render('books', { 
        locals: {
            message: "Retrieved all"
        }
    });
}

function retrieveOne(req, res) {
    res.render('books', { 
        locals: {
            message: `Retrieved ${req.params.id}`
        }
    });
}

function update(req, res) {
    res.json({ message: "Updated"});
}

function deleteOne(req, res) {
    res.json({ message: "Deleted"});
}

module.exports = {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne,
};