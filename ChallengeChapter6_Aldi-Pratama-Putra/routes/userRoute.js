const express = require ("express")
const route = express.Router()
const PageController = require ("../controllers/pageController")
const FormController = require("../controllers/formController")

route.get("/login", PageController.login)
route.post("/handleLogin", FormController.loginHandler)


// AS USER
// route.get("/findUser", PageController.findUser)
route.get("/games", PageController.games)
route.get("/signUp", PageController.createUser)
route.post("/handleCreateUser", FormController.createUserHandler)


// AS ADMIN
route.get('/admin', PageController.account)

// create admin
route.get("/admin/createadmin", PageController.createAdmin)
route.post("/handleCreateAdmin", FormController.createAdminHandler)

// find admin
route.get("/admin/findAdmin", PageController.findAdmin)
route.post("/handleFindAdmin", FormController.findAdminHandler)
route.get("/admin/handleFindAllAdmin", FormController.findAllAdminHandler)

// find user
route.get("/admin/findUser", PageController.findUser)
route.post("/handleFindUser", FormController.findUserHandler)
route.get("/admin/handleFindAllUser", FormController.findAllUserHandler)

// edit admin
route.get("/admin/editAdmin/:id", PageController.editAdmin)
route.get("/editAdmin/:id", FormController.editAdminForm)
route.post("/handleEditAdmin/:id", FormController.editAdminHandler)

// edit user
route.get("/admin/editUser/:id", PageController.editUser)
route.get("/editUser/:id", FormController.editUserForm)
route.post("/handleEditUser/:id", FormController.editUserHandler)

// delete admin
route.get("/deleteAdmin/:id", FormController.deleteAdminHandler)

// delete user
route.get("/deleteUser/:id", FormController.deleteUserHandler)


module.exports = route