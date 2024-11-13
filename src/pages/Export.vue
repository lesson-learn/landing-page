<template>
  <div>
    <button @click="generatePdf">Download PDF</button>
  </div>
</template>

<script>
import { PDFDocument, rgb } from 'pdf-lib';
import fontBytes from '../assets/fonts/NotoSansKhmer-Regular.ttf'; // Make sure the path is correct

export default {
  methods: {
    async generatePdf() {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 400]);

      // Load and embed the Khmer font
      const font = await pdfDoc.embedFont(fontBytes);

      // Add Khmer text to the PDF
      page.drawText('សួស្តី​ពិភពលោក', {
        x: 50,
        y: 300,
        size: 30,
        font: font,
        color: rgb(0, 0, 0),
      });

      // Serialize the PDFDocument to bytes
      const pdfBytes = await pdfDoc.save();

      // Create a blob from the PDF bytes
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });

      // Create a download link and trigger the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'document.pdf';
      link.click();
    }
  }
};
</script>
