
// routes

exports.index = function (req, res) {
    res.render('index',{ title: 'My First Express App', year: new Date().getFullYear() });
};

exports.partials = function (req, res) {
    var name = req.params.name;
    if(name != 'index')
        res.render(name);    
};