const express = require('express');
const { getAllClinic, createClinic, updateClinic, deleteClinic } = require('../controller/clinicControllers.js');
const router = express.Router();

router.route('/clinic').get(getAllClinic);

router.route('/create-clinic').post(createClinic);

router.route('/clinic/:id').put(updateClinic);

router.route('/clinic/:id').delete(deleteClinic);

module.exports = router;