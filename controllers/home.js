function welcome(req, res) {
    res.render('home', {
        locals: {
            welcome: 'Welcome to books api.'
        }
    });
}

module.exports = {
    welcome
};