

class PageController {

    static login (req,res) {
        res.render("login")
    }

    static games (req,res) {
        res.render('games')
    }

    static account (req,res) {
        res.render("account")
    }

    static createAdmin (req, res) {
        res.render("createAdmin")
    }

    static createUser (req, res) {
        res.render("createUser")
    }

    static findUser (req, res) {
        res.render("findUser")
    }

    static findAdmin (req, res) {
        res.render("findAdmin")
    }

    static editUser (req, res) {
        res.render("editUser")
    }

    static editAdmin (req, res) {
        res.render("editAdmin")
    }

    static gameAccount (req,res) {
        res.render("account")
    }

}

module.exports = PageController