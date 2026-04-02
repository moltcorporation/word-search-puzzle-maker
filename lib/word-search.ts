export type Direction = [number, number];

export const DIRECTIONS: { [key: string]: Direction[] } = {
  easy: [
    [0, 1],   // right
    [1, 0],   // down
  ],
  medium: [
    [0, 1],   // right
    [1, 0],   // down
    [1, 1],   // diagonal down-right
    [-1, 1],  // diagonal up-right
  ],
  hard: [
    [0, 1],   // right
    [0, -1],  // left
    [1, 0],   // down
    [-1, 0],  // up
    [1, 1],   // diagonal down-right
    [-1, -1], // diagonal up-left
    [1, -1],  // diagonal down-left
    [-1, 1],  // diagonal up-right
  ],
};

export interface PlacedWord {
  word: string;
  row: number;
  col: number;
  direction: Direction;
}

export interface PuzzleResult {
  grid: string[][];
  placedWords: PlacedWord[];
  unplacedWords: string[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function canPlace(
  grid: string[][],
  word: string,
  row: number,
  col: number,
  dir: Direction
): boolean {
  const size = grid.length;
  for (let i = 0; i < word.length; i++) {
    const r = row + dir[0] * i;
    const c = col + dir[1] * i;
    if (r < 0 || r >= size || c < 0 || c >= grid[0].length) return false;
    if (grid[r][c] !== "" && grid[r][c] !== word[i]) return false;
  }
  return true;
}

function placeWord(
  grid: string[][],
  word: string,
  row: number,
  col: number,
  dir: Direction
): void {
  for (let i = 0; i < word.length; i++) {
    grid[row + dir[0] * i][col + dir[1] * i] = word[i];
  }
}

export function generatePuzzle(
  words: string[],
  rows: number,
  cols: number,
  difficulty: "easy" | "medium" | "hard"
): PuzzleResult {
  const grid: string[][] = Array.from({ length: rows }, () =>
    Array(cols).fill("")
  );
  const dirs = DIRECTIONS[difficulty];
  const placedWords: PlacedWord[] = [];
  const unplacedWords: string[] = [];

  // Sort by length descending for better placement
  const sorted = [...words]
    .map((w) => w.toUpperCase().replace(/[^A-Z]/g, ""))
    .filter((w) => w.length > 0)
    .sort((a, b) => b.length - a.length);

  for (const word of sorted) {
    let placed = false;
    const shuffledDirs = shuffle(dirs);

    // Try random positions
    const positions: [number, number][] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        positions.push([r, c]);
      }
    }
    const shuffledPositions = shuffle(positions);

    for (const dir of shuffledDirs) {
      for (const [r, c] of shuffledPositions) {
        if (canPlace(grid, word, r, c, dir)) {
          placeWord(grid, word, r, c, dir);
          placedWords.push({ word, row: r, col: c, direction: dir });
          placed = true;
          break;
        }
      }
      if (placed) break;
    }

    if (!placed) {
      unplacedWords.push(word);
    }
  }

  // Fill empty cells with random letters
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "") {
        grid[r][c] = letters[Math.floor(Math.random() * 26)];
      }
    }
  }

  return { grid, placedWords, unplacedWords };
}
