const PDFDocument = require('pdfkit');

function buildPDF(courseName, organizationName, courseProviderName, userName, dataCallback, endCallback) {
    const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });
  

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    doc.font('Helvetica-Bold').fontSize(28).text('CERTIFICATION OF COMPLETION', { align: 'center' });
    
    doc.font('Helvetica');

    doc.moveDown(0.5);
    doc.fontSize(16).text(`This is to certifies that`, { align: 'center' });

    doc.moveDown(0.5);
    doc.fontSize(25).text(`${userName}`, { align: 'center' });

    doc.moveDown(0.5);
    doc.fontSize(16).text(`has successfully completed the ${courseName} offered by ${organizationName} in association with `, { align: 'center' });
    doc.fontSize(16).text(` ${courseProviderName}`, { align: 'center' });

    doc.moveDown(1);
    doc.fontSize(14).text(`Date of Issue: ${new Date().toLocaleDateString()}`, { align: 'left' });
    
    doc.moveUp(1).fontSize(14).text(`${organizationName}`, { align: 'right' });
    
    doc.end();
  }
  
  module.exports = { buildPDF};