module.exports = function (req,res,next) {
    console.warn("current url of this page",req.originalUrl);
    next();
}