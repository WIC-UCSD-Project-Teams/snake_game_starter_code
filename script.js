// ── Global state ─────────────────────────────────────────────
const gameCanvas = document.getElementById('gameCanvas');
const ctx        = gameCanvas.getContext('2d');
const scoreEl    = document.getElementById('score');
const startBtn   = document.getElementById('startBtn');

let snake, dx, dy, changingDirection, score, foodX, foodY;
let gameLoopTimeout;

// ── 1. RESET & INITIALIZE ─────────────────────────────────────
function initGame() {
  // TODO: reset snake, dx/dy, score, place food, draw initial state, then main()
}

// ── 2. CANVAS DRAWING ─────────────────────────────────────────
function clearCanvas() { /* TODO */ }
function drawSnakePart(part)  { /* TODO */ }
function drawSnake()           { /* TODO */ }
function drawFood()            { /* TODO */ }

// ── 3. SNAKE ADVANCEMENT ──────────────────────────────────────
function advanceSnake() { /* TODO */ }

// ── 4. DIRECTION CONTROL ──────────────────────────────────────
function changeDirection(event) { /* TODO */ }

// ── 5. FOOD GENERATION ────────────────────────────────────────
function randomTen(min, max) { /* TODO */ }
function createFood()         { /* TODO */ }

// ── 6. COLLISION DETECTION ────────────────────────────────────
function didGameEnd() { /* TODO */ }

// ── 7. MAIN GAME LOOP ─────────────────────────────────────────
function main() { /* TODO */ }

// ── 8. HOOK UP EVENTS ─────────────────────────────────────────
document.addEventListener('keydown', changeDirection);
startBtn.addEventListener('click', initGame);
