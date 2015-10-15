
// routes

exports.index = function (req, res) {
    res.render('index');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    if(name != 'index')
        res.render(name);    
};