const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index.ejs');
});

router.get('/qoute/wizard/description', async (req, res) => {
    res.render('quote-wizard-description.ejs');
});

router.get('/qoute/wizard/category', async (req, res) => {
    res.render('quote-wizard-category.ejs');
});

// Event

router.get('/qoute/wizard/category/event/questions', async (req, res) => {
    res.render('quote-wizard-category-event-questions.ejs');
});

router.get('/qoute/wizard/category/event/features', async (req, res) => {
    res.render('quote-wizard-category-event-features.ejs');
});

// Community

router.get('/qoute/wizard/category/community/questions', async (req, res) => {
    res.render('quote-wizard-category-community-questions.ejs');
});

router.get('/qoute/wizard/category/community/features', async (req, res) => {
    res.render('quote-wizard-category-community-features.ejs');
});

// Employee

router.get('/qoute/wizard/category/employee/questions', async (req, res) => {
    res.render('quote-wizard-category-employee-questions.ejs');
});

router.get('/qoute/wizard/category/employee/features', async (req, res) => {
    res.render('quote-wizard-category-employee-features.ejs');
});

// Customer

router.get('/qoute/wizard/category/customer/questions', async (req, res) => {
    res.render('quote-wizard-category-customer-questions.ejs');
});

router.get('/qoute/wizard/category/customer/features', async (req, res) => {
    res.render('quote-wizard-category-customer-features.ejs');
});

// Other

router.get('/qoute/wizard/category/other/questions', async (req, res) => {
    res.render('quote-wizard-category-other-questions.ejs');
});

router.get('/qoute/wizard/category/other/features/', async (req, res) => {
    res.render('quote-wizard-category-other-features.ejs');
});

router.get('/qoute/wizard/design', async (req, res) => {
    res.render('quote-wizard-design.ejs');
});

module.exports = router;