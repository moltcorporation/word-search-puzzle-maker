import jsPDF from "jspdf";
import type { PuzzleResult } from "./word-search";

export function generatePDF(
  puzzle: PuzzleResult,
  title: string,
  watermark: boolean
): jsPDF {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;

  // --- Puzzle Page ---
  renderPuzzlePage(doc, puzzle, title, watermark, pageWidth, pageHeight, margin, false);

  // --- Answer Key Page ---
  doc.addPage();
  renderPuzzlePage(doc, puzzle, title + " - Answer Key", watermark, pageWidth, pageHeight, margin, true);

  return doc;
}

function renderPuzzlePage(
  doc: jsPDF,
  puzzle: PuzzleResult,
  title: string,
  watermark: boolean,
  pageWidth: number,
  pageHeight: number,
  margin: number,
  showAnswers: boolean
) {
  const { grid, placedWords } = puzzle;
  const rows = grid.length;
  const cols = grid[0].length;

  // Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(title, pageWidth / 2, margin + 5, { align: "center" });

  // Grid
  const gridTop = margin + 15;
  const availableWidth = pageWidth - margin * 2;
  const availableHeight = pageHeight - gridTop - 60; // Leave room for word list
  const cellSize = Math.min(availableWidth / cols, availableHeight / rows, 10);
  const gridWidth = cellSize * cols;
  const gridHeight = cellSize * rows;
  const gridLeft = (pageWidth - gridWidth) / 2;

  // Draw grid lines
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.2);
  for (let r = 0; r <= rows; r++) {
    doc.line(gridLeft, gridTop + r * cellSize, gridLeft + gridWidth, gridTop + r * cellSize);
  }
  for (let c = 0; c <= cols; c++) {
    doc.line(gridLeft + c * cellSize, gridTop, gridLeft + c * cellSize, gridTop + gridHeight);
  }

  // Highlight answers if answer key
  if (showAnswers) {
    doc.setFillColor(255, 255, 150);
    for (const pw of placedWords) {
      for (let i = 0; i < pw.word.length; i++) {
        const r = pw.row + pw.direction[0] * i;
        const c = pw.col + pw.direction[1] * i;
        doc.rect(
          gridLeft + c * cellSize,
          gridTop + r * cellSize,
          cellSize,
          cellSize,
          "F"
        );
      }
    }
    // Re-draw grid lines over highlights
    doc.setDrawColor(200, 200, 200);
    for (let r = 0; r <= rows; r++) {
      doc.line(gridLeft, gridTop + r * cellSize, gridLeft + gridWidth, gridTop + r * cellSize);
    }
    for (let c = 0; c <= cols; c++) {
      doc.line(gridLeft + c * cellSize, gridTop, gridLeft + c * cellSize, gridTop + gridHeight);
    }
  }

  // Letters
  doc.setFontSize(Math.min(cellSize * 2.5, 12));
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 30, 30);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      doc.text(
        grid[r][c],
        gridLeft + c * cellSize + cellSize / 2,
        gridTop + r * cellSize + cellSize * 0.72,
        { align: "center" }
      );
    }
  }

  // Word list
  const wordListTop = gridTop + gridHeight + 10;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Find these words:", margin, wordListTop);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const words = placedWords.map((pw) => pw.word);
  const colCount = Math.min(4, Math.ceil(words.length / 5));
  const colWidth = (pageWidth - margin * 2) / colCount;
  words.forEach((word, i) => {
    const col = Math.floor(i / Math.ceil(words.length / colCount));
    const row = i % Math.ceil(words.length / colCount);
    doc.text(word, margin + col * colWidth, wordListTop + 6 + row * 5);
  });

  // Watermark
  if (watermark) {
    doc.setFontSize(40);
    doc.setTextColor(220, 220, 220);
    doc.setFont("helvetica", "bold");
    doc.text("FREE - WordSearchMaker", pageWidth / 2, pageHeight / 2, {
      align: "center",
      angle: 45,
    });
    doc.setTextColor(0, 0, 0);
  }
}

export function downloadPDF(puzzle: PuzzleResult, title: string, watermark: boolean) {
  const doc = generatePDF(puzzle, title, watermark);
  doc.save(`${title.replace(/[^a-zA-Z0-9]/g, "-")}-word-search.pdf`);
}
