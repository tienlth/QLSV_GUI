const express = require("express");
const ProfessorController = require("../controllers/professor.controller");
const StudentController = require("../controllers/student.controller");
const ClassesController = require("../controllers/classes.controller");
const AccountsController = require("../controllers/accounts.controller");

const router = express.Router();

// students route
studentController = new StudentController();
router.route('/students')
        .get(studentController.findAll)
        .post(studentController.create)
        .delete(studentController.deleteAll);

router.route('/students/:id')
        .get(studentController.findOne)
        .put(studentController.update)

router.route('/students/:id')
        .delete(studentController.delete);

// professors route
professorController = new ProfessorController();
router.route('/professors')
        .get(professorController.findAll)
        .post(professorController.create)
        .delete(professorController.deleteAll);

router.route('/professors/:id')
        .get(professorController.findOne)
        .put(professorController.update)

router.route('/professors/:id')
        .delete(professorController.delete);

// classes route
classesController = new ClassesController();
router.route('/classes')
        .get(classesController.findAll)
        .post(classesController.create)
        .delete(classesController.deleteAll);

router.route('/classes/:id')
        .get(classesController.findOne)
        .put(classesController.update)

router.route('/classes/:id')
        .delete(classesController.delete);

// accounts route
accountsController = new AccountsController();
router.route('/accounts')
        .get(accountsController.findAll)
        .post(accountsController.create)
        .delete(accountsController.deleteAll);

router.route('/accounts/:id')
        .get(accountsController.findOne)
        .put(accountsController.update)

router.route('/accounts/:id')
        .delete(accountsController.delete);

router.route('/accounts/check')
        .post(accountsController.check);


module.exports = router;