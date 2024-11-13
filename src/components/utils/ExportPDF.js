const fs = require("fs");
const ExcelJS = require("exceljs");
const excelToPdf = require("excel-to-pdf");

async function exportToPdf() {
  // Create an Excel file
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 30 },
    { header: "Age", key: "age", width: 10 },
  ];

  worksheet.addRow({ id: 1, name: "John Doe", age: 25 });
  worksheet.addRow({ id: 2, name: "Jane Smith", age: 30 });

  // Save Excel file
  await workbook.xlsx.writeFile("data.xlsx");

  // Convert Excel file to PDF
  excelToPdf.convert("data.xlsx", "exported-file.pdf", (err) => {
    if (err) {
      console.error("Error converting Excel to PDF:", err);
    } else {
      console.log("PDF created successfully.");
    }
  });
}

exportToPdf();
