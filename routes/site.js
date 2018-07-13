const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index.ejs');
});

router.get('/qoute/wizard/description', async (req, res) => {
    res.render('quote-wizard-description.ejs');
});

router.get('/qoute/wizard/design', async (req, res) => {
    res.render('quote-wizard-design.ejs');
});

router.get('/qoute/wizard/audience', async (req, res) => {
    res.render('quote-wizard-audience.ejs');
});

router.get('/qoute/wizard/category', async (req, res) => {
    res.render('quote-wizard-category.ejs');
});

router.get('/qoute/wizard/features', async (req, res) => {
    res.render('quote-wizard-features.ejs');
});

router.get('/qoute/wizard/integrations', async (req, res) => {
    res.render('quote-wizard-integrations.ejs');
});

router.get('/qoute/wizard/complete', async (req, res) => {
    res.render('quote-wizard-complete.ejs');
});

module.exports = router;