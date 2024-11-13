<template>
  <div>
    <button @click="embedFontAndMeasureText">
      Generate PDF with Khmer Text
    </button>
  </div>
</template>

<script>
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
// import fontNotoSansKhmer from "../assets/fonts/NotoSansKhmer-Regular.ttf";
import fontNotoSans from "../assets/fonts/NotoSans.ttf";
import fontAKbalthomVannMolyvann from "../assets/fonts/AKbalthomVannMolyvann.ttf";

export default {
  name: "PdfGenerator",
  methods: {
    async embedFontAndMeasureText() {
      console.log("embedFontAndMeasureText");
      const url = fontAKbalthomVannMolyvann;
      const fontBytes = await fetch(url).then((res) => res.arrayBuffer());

      const pdfDoc = await PDFDocument.create();

      pdfDoc.registerFontkit(fontkit);
      const customFont = await pdfDoc.embedFont(fontBytes);

      const page = pdfDoc.addPage();

      const textSize = 35;
    //   const textWidth = customFont.widthOfTextAtSize(textSize);
    //   const textHeight = customFont.heightAtSize(textSize);

      page.drawText("សួស្ដីបាទ", {
        x: 40,
        y: 450,
        size: textSize,
        font: customFont,
        color: rgb(0, 0.53, 0.71),
      });
    //   page.drawRectangle({
    //     x: 40,
    //     y: 450,
    //     width: textWidth,
    //     height: textHeight,
    //     borderColor: rgb(1, 0, 0),
    //     borderWidth: 1.5,
    //   });

      const pdfBytes = await pdfDoc.save();

      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "document.pdf";
      link.click();
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "MyFont";
  src: url("data:font/ttf;base64, [your-base64-encoded-string-here]")
    format("truetype");
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
