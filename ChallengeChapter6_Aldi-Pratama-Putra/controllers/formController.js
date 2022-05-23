const { Admin_game, User_game_biodata} = require ("../models")

class FormController {

    static loginHandler (req, res) {
        const { username, password, radioInput } = req.body;

        console.log(username, "==> ini username");
        console.log(password, "==> ini password");
        console.log(radioInput, "==> ini radioInput");

        if (radioInput === "true") {
            Admin_game.findOne({
                where: {
                    username,
                    password
                }
            })
            .then(data => {
                if (data) {
                    res.redirect("http://localhost:3000/account/admin")
                    // console.log(data, "==> ini input login dari admin");
                    // res.status(200).json({message: 'Login Success'})
                } else {
                    res.status(400).json({message: 'Wrong Username or Password Input'})
                }
                
            })
            .catch(err => {
                console.log(err, "==> ini Error Login");
        })} else {
            User_game_biodata.findOne({
                where: {
                    username,
                    password
                }
            })
            .then(data => {
                if (data) {
                    res.render("games")
                    // console.log(data, "==> ini input login dari user");
                    // res.status(200).json({message: 'Login Success'})
                } else {
                    res.status(400).json({message: 'Wrong Username or Password Input'})
                }
                
            })
            .catch(err => {
                console.log(err, "==> ini Error Login");
            })
        }    
    }

    static createUserHandler (req, res) {
        const { username, password, fullname, birthdate, address } = req.body
        
        let userInput = {
            username: username,
            password: password,
            fullname,
            birthdate,
            address
        }

        console.log(username, "==> ini username");
        console.log(password, "==> ini password");
        console.log(fullname, "==> ini fullname");
        console.log(birthdate, "==> ini birthdate");
        console.log(address, "==> ini address");

        User_game_biodata.create(userInput)
        .then(data => {
            if (data) {
                res.redirect("http://localhost:3000/")
                // console.log(data, "Create Success");
                // res.status(200).json({message: 'Sign Up Success'})
            } else {
                res.status(400).json({message: 'Sign Up Interrupted'})
            }  
        })
        .catch(err => {
            console.log(err, "==> ini Error Login");  
        })
    }

    static createAdminHandler (req, res) {
        const { username, password } = req.body
        
        let userInput = {
            username,
            password
        }

        console.log(username, "==> ini username");
        console.log(password, "==> ini password");

        Admin_game.create(userInput)
        .then(data => {
            if (data) {
                // res.redirect("http://localhost:3000/account/admin")
                res.status(200).json({message: 'Create Admin Success'})
                // console.log(data, "Create Admin Success");
            } else {
                res.status(400).json({message: 'Create Interrupted'})
            }  
        })
        .catch(err => {
            console.log(err, "==> ini Error Login");  
        })
    }
    
    static findUserHandler (req, res) { 
        const { username } = req.body

        User_game_biodata.findOne({
            where: {
                username
            }
        })
            .then(data => {
                if (data) {
                    res.render("printSingleFindUser", { data })
                } else {
                    console.log(data);
                    res.status(400).json({message: 'Data not found'})
                }
            })
            .catch(err => {
                console.log(err, "==> ini Error Find Admin");
            })
    }

    static findAdminHandler (req, res) { 
        const { username} = req.body
    
        Admin_game.findOne({
            where: {
                username
            }
        })
            .then(data => {
                if (data) {
                    res.render("printSingleFindAdmin", { data })
                } else {
                    console.log(data);
                    res.status(400).json({message: 'Data not found'})
                }
            })
            .catch(err => {
                console.log(err, "==> ini Error Find Admin");
            })
    }

    static findAllUserHandler (req, res) {
        User_game_biodata.findAll()
            .then(data => {
                if (data) {
                    res.render("printAllFindUser", { data })
                } else {
                    console.log(data);
                    res.status(400).json({message: 'Data not found'})
                }
            })
            .catch(err => {
                console.log(err, "==> ini Error Find User");
            })
    }

    static findAllAdminHandler (req, res) {
        Admin_game.findAll()
            .then(data => {
                if (data) {
                    res.render("printAllFindAdmin", { data })
                } else {
                    console.log(data);
                    res.status(400).json({message: 'Data not found'})
                }
            })
            .catch(err => {
                console.log(err, "==> ini Error Find Admin");
            })
    }

    static editUserForm (req, res) {
        const { id } = req.params
        console.log(id, "==> ini ID User");

        User_game_biodata.findByPk(id)
        .then(data => {
            res.render("editUser", { data })
            // console.log(data, "==> ini data find user");
        })
        .catch(err => {
            console.log(err, "==> Ini Error Find User");
            // res.status(400).json(err)
        })
    }

    static editUserHandler (req, res) {
        const { id } = req.params
        console.log(id, "==> in ID");
        const { username, password, fullname, birthdate, address } = req.body

        User_game_biodata.update({
            username,
            password,
            fullname,
            birthdate,
            address
        }, {
            where: {
                id
            }
        })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Data has been changed'})
            } else {
                res.status(400).json({ message: 'Changes can\'t be executed'})
            }
        })
        .catch(err => {
            // next(err)
            console.log(err, "==> ini Error Edit");
        })
 
    }
    
    static editAdminForm (req, res) {
        const { id } = req.params

        Admin_game.findByPk(id)
        .then(data => {
            res.render("editAdmin", { data })
            // console.log(data, "==> ini data find admin");
        })
        .catch(err => {
            console.log(err, "==> Ini Error Find Admin");
            // res.status(400).json(err)
        })
    }

    static editAdminHandler (req, res) {
        const { id } = req.params
        // console.log(id, "==> ini ID yang diedit");
        const { username, password } = req.body

        Admin_game.update({
            username,
            password
        }, {
            where: {
                id
            }
        })
        .then(data => {
            if (data) {
                // res.redirect("/account/admin/findAdmin")
                res.status(200).json({ message: 'Data has been changed'})
            } else {
                res.status(400).json({ message: 'Changes can\'t be executed'})
            }
        })
        .catch(err => {
            console.log(err, "==> ini Error Edit Admin Data");
        })
    }

    static deleteUserHandler (req, res) {
        const { id } = req.params;

        User_game_biodata.destroy({
            where: {
                id
            }
        })
        .then(data => {
            if (data) {
                res.redirect("/account/admin/handleFindAllUser")
            } else {
                res.status(400).json({ message: 'Delete can\'t be executed'})
            }
        })
        .catch(err => {
            console.log(err, "==> ini Error Delete");
        })

    }

    static deleteAdminHandler (req, res) {
        const { id } = req.params;

        Admin_game.destroy({
            where: {
                id
            }
        })
        .then(data => {
            if (data) {
                res.redirect("/account/admin/handleFindAllAdmin")
            } else {
                res.status(400).json({ message: 'Delete can\'t be executed'})
            }
        })
        .catch(err => {
            console.log(err, "==> ini Error Delete");
        })

    }
}


module.exports = FormController