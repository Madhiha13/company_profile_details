const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let companyInfo = {
    organizationName: '',
    description: '',
    address: '',
    sector: '',
    currency: '',
    natureOfBusiness: '',
    website: '',
    numberOfEmployees: ''
};

// Endpoint to save company information
app.post('/api/companyInfo', (req, res) => {
    const data = req.body;
    companyInfo = { ...data };
    res.status(200).json({ message: 'Company information saved successfully' });
});

// Endpoint to retrieve company information
app.get('/api/companyInfo', (req, res) => {
    res.status(200).json(companyInfo);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log("your endpoint will be: http://localhost:5000/api/companyInfo");