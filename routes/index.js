const express = require('express');
const pdfService = require('../service/pdf-service');

const router = express.Router();
router.get('/certificate', (req, res) => {

    const { courseName = "Offline Blouse Mastery Program At Surat", organizationName="Raja Rani Coaching", courseProviderName="Jash Gotawala", userName="Ashish Santani"} = req?.query;

  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
  });   
  pdfService.buildPDF(
    courseName,
    organizationName,
    courseProviderName,
    userName,
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});

module.exports = router;