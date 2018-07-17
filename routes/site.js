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

router.get('/qoute/wizard/category/event/design', async (req, res) => {
    res.render('quote-wizard-category-event-design.ejs');
});

router.get('/qoute/wizard/category/event/complete', async (req, res) => {
    res.render('quote-wizard-category-event-complete.ejs');
});

// Community

router.get('/qoute/wizard/category/community/questions', async (req, res) => {
    res.render('quote-wizard-category-community-questions.ejs');
});

router.get('/qoute/wizard/category/community/features', async (req, res) => {
    res.render('quote-wizard-category-community-features.ejs');
});

router.get('/qoute/wizard/category/community/design', async (req, res) => {
    res.render('quote-wizard-category-community-design.ejs');
});

router.get('/qoute/wizard/category/community/complete', async (req, res) => {
    res.render('quote-wizard-category-community-complete.ejs');
});

// Employee

router.get('/qoute/wizard/category/employee/questions', async (req, res) => {
    res.render('quote-wizard-category-employee-questions.ejs');
});

router.get('/qoute/wizard/category/employee/features', async (req, res) => {
    res.render('quote-wizard-category-employee-features.ejs');
});

router.get('/qoute/wizard/category/employee/design', async (req, res) => {
    res.render('quote-wizard-category-employee-design.ejs');
});

router.get('/qoute/wizard/category/employee/complete', async (req, res) => {
    res.render('quote-wizard-category-employee-complete.ejs');
});

// Customer

router.get('/qoute/wizard/category/customer/questions', async (req, res) => {
    res.render('quote-wizard-category-customer-questions.ejs');
});

router.get('/qoute/wizard/category/customer/features', async (req, res) => {
    res.render('quote-wizard-category-customer-features.ejs');
});

router.get('/qoute/wizard/category/customer/design', async (req, res) => {
    res.render('quote-wizard-category-customer-design.ejs');
});

router.get('/qoute/wizard/category/customer/complete', async (req, res) => {
    res.render('quote-wizard-category-customer-complete.ejs');
});

// Other

router.get('/qoute/wizard/category/other/questions', async (req, res) => {
    res.render('quote-wizard-category-other-questions.ejs');
});

router.get('/qoute/wizard/category/other/features/', async (req, res) => {
    res.render('quote-wizard-category-other-features.ejs');
});

router.get('/qoute/wizard/category/other/design', async (req, res) => {
    res.render('quote-wizard-category-other-design.ejs');
});

router.get('/qoute/wizard/category/other/complete', async (req, res) => {
    res.render('quote-wizard-category-other-complete.ejs');
});


module.exports = router;