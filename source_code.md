# Tổng hợp Code - Dự án de-6-hsa-dinh-luong-vnes


## index.html

``html

``


## style_6.css

``css
:root {
  --bg-color: #f8fafc;
  --grid-color: #e2e8f0;
  --ink: #1e293b;
  --navy: #1e3a8a;
  --blue-text: #2563eb;
  --gray-text: #64748b;
  --border-color: #e2e8f0;
  --font-sans:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-serif: "Times New Roman", Times, serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 25px 25px;
  font-family: var(--font-sans);
  color: var(--ink);
  line-height: 1.6;
}

.hidden {
  display: none !important;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

/* ===== THANH GHIM TRÃŠN CÃ™NG ===== */
.top-sticky {
  position: sticky;
  top: 0;
  z-index: 200;
  margin-bottom: 24px;
  background: #fff;
  border: 1px solid var(--border-color);
  border-top: none;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.18);
}

#board-container {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: #fff;
  padding: 8px 10px;
}

#board-container h3 {
  display: none;
}

#question-board {
  flex: 1;
  min-width: 0;
}

#board-expand {
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: #f8fafc;
  color: var(--navy);
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}

.board-legend {
  display: none;
  font-size: 11px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
  padding: 8px;
  background: #f8fafc;
  border-radius: 6px;
}

.box {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  background: #fff;
}

.box.done {
  background-color: #007bff;
  border-color: #007bff;
}

.box.flagged {
  background-color: #ffc107;
  border-color: #ffc107;
}

.box-label {
  font-size: 11px;
  color: var(--gray-text);
  line-height: 18px;
}

.board-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.q-grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
}

#board-container.expanded #question-board {
  max-height: 45vh;
  overflow-y: auto;
}

#board-container.expanded .board-legend {
  display: flex;
}

#board-container.expanded .q-grid {
  flex-wrap: wrap;
  overflow-x: visible;
}

.q-box {
  flex: 0 0 auto;
  min-width: 36px;
  height: 34px;
  padding: 0 8px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  background: #fff;
  transition: all 0.2s;
}

.q-box:hover {
  background: #f0f0f0;
  transform: scale(1.05);
}

.q-box.done {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.q-box.flagged {
  background-color: #ffc107;
  color: #333;
  border-color: #ffc107;
  font-weight: bold;
}

/* CARD CHUNG */
.card {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}

.login-card,
.result-card {
  text-align: center;
  max-width: 500px;
  margin: 80px auto;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 15px;
}

.btn-primary {
  background-color: var(--navy);
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.btn-primary:hover {
  background-color: #1e3a8a;
  transform: translateY(-2px);
}

.submit-container {
  text-align: center;
  margin: 40px 0 80px 0;
}

/* HEADER BÃ€I THI */
.exam-header-block {
  margin-bottom: 0;
}

.exam-header-top {
  background: #fff;
  padding: 25px 30px;
  border: 1px solid var(--border-color);
  border-radius: 12px 12px 0 0;
  border-bottom: none;
}

#login-screen .exam-header-top {
  border-radius: 8px;
}

.meta-text {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--gray-text);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.exam-title {
  font-family: var(--font-serif);
  font-size: 28px;
  color: var(--navy);
  margin-bottom: 10px;
}

.meta-sub {
  font-size: 14px;
  color: var(--gray-text);
}

.dashed-line {
  border: none;
  border-top: 1px dashed #cbd5e1;
  margin-top: 20px;
  position: relative;
}

.dashed-line::after {
  content: "";
  position: absolute;
  right: -5px;
  top: -5px;
  width: 8px;
  height: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 50%;
  background: #fff;
}

/* THANH THÃ”NG TIN & TIMER */
.exam-info-bar {
  background-color: var(--navy);
  color: #94a3b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 0;
  font-size: 14px;
  gap: 12px;
}

.exam-info-bar .student-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.exam-info-bar .progress-info,
.exam-info-bar .timer-pill,
.exam-info-bar .score-pill {
  flex: 0 0 auto;
  white-space: nowrap;
}

.timer-pill {
  background-color: #334155;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-family: monospace;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.green-dot {
  color: #4ade80;
  font-size: 12px;
}

.timer-danger {
  background-color: #ef4444 !important;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* TIÃŠU Äá»€ PHáº¦N */
.section-header {
  margin: 40px 0 20px 0;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: bold;
  color: var(--navy);
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  font-family: var(--font-sans);
  background-color: #e0e7ff;
  color: var(--blue-text);
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: bold;
}

.section-subtitle {
  font-size: 14px;
  color: var(--gray-text);
  margin-top: 5px;
}

/* CÃ‚U Há»ŽI */
.question-card {
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px 25px;
  margin-bottom: 15px;
}

.q-layout {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.q-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
}

.q-num-flag {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
}

.q-num {
  background: var(--navy);
  color: #fff;
  width: 60px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
}

.btn-flag {
  margin-bottom: 10px;
  cursor: pointer;
  padding: 4px 8px;
  width: 70px;
  height: 30px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-flag:hover {
  border-color: #ffc107;
  color: #ffc107;
  background: #fffbf0;
}

.btn-flag.active {
  background: #ffc107;
  border-color: #ffc107;
  color: #333;
}

.q-content {
  flex: 1;
}

.q-text {
  font-size: 16px;
  margin-bottom: 15px;
  margin-top: 2px;
  line-height: 1.6;
}

.q-image {
  margin: 15px 0;
  display: flex;
  justify-content: center;
}

.q-image img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ÄÃP ÃN TRáº®C NGHIá»†M */
.options-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-label {
  display: block;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 15px;
  cursor: pointer;
  transition: 0.2s;
}

.option-label:hover {
  border-color: #93c5fd;
  background: #f8fafc;
}

.option-label input {
  display: none;
}

.option-label.selected {
  border-color: var(--blue-text);
  background: #eff6ff;
}

.opt-letter {
  color: var(--blue-text);
  font-weight: bold;
  margin-right: 10px;
  font-family: var(--font-serif);
}

/* ÄÃšNG SAI */
.tf-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 10px;
}

.tf-controls {
  display: flex;
  gap: 15px;
  flex-shrink: 0;
}

.tf-controls label {
  cursor: pointer;
  font-size: 14px;
}

.short-ans-input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
}

/* CHáº¤M ÄIá»‚M */
.correct-ans {
  background-color: #dcfce7 !important;
  border-color: #22c55e !important;
}

.wrong-ans {
  background-color: #fee2e2 !important;
  border-color: #ef4444 !important;
}

.explanation {
  margin-top: 15px;
  padding: 15px;
  background: #f8fafc;
  border-left: 3px solid var(--navy);
  font-size: 14px;
  border-radius: 4px;
}

.image-placeholder {
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  padding: 30px;
  text-align: center;
  color: #64748b;
  margin: 15px 0;
  border-radius: 8px;
}

.page-footer {
  text-align: center;
  font-size: 12px;
  color: var(--gray-text);
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.form-note {
  font-size: 13px;
  color: var(--gray-text);
  margin-top: 15px;
  font-style: italic;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .exam-title {
    font-size: 22px;
  }
  .container {
    margin: 20px auto;
  }
}

@media (max-width: 600px) {
  #exam-screen .top-sticky {
    margin-left: -20px;
    margin-right: -20px;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .exam-info-bar {
    padding: 8px 12px;
    font-size: 12px;
    gap: 8px;
  }

  .timer-pill,
  .score-pill {
    font-size: 14px;
    padding: 3px 10px;
  }

  .q-num-flag {
    flex-direction: column;
    align-items: flex-start;
  }

  .tf-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .tf-controls {
    width: 100%;
    justify-content: space-around;
  }
}

.score-pill {
  background-color: #16a34a;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-family: monospace;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.score-pill .green-dot {
  color: #fff;
}

#toast {
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  background: #b91c1c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.25s;
  z-index: 10000;
}
#toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* NÃšT "TRANG CHá»¦" */
body {
  padding-top: 56px;
}

#mtsedu-back-btn a {
  position: absolute !important;
  top: 10px !important;
  left: 14px !important;
  padding: 6px 14px !important;
  font-size: 13px !important;
}

#exam-screen.container,
#login-screen.container,
#result-screen.container {
  margin-top: 8px;
}

.question-card {
  scroll-margin-top: 150px;
}

``


## script.js

``javascript
import { examData } from "./data_6.js";
import {
  db,
  ref,
  push,
  set,
  update,
  serverTimestamp,
} from "./firebase-config_6.js";
import {
  getMTSeduSession,
  showLoginRequired,
  insertBackButton,
} from "./mtsedu-auth_6.js";

const loginScreen = document.getElementById("login-screen");
const examScreen = document.getElementById("exam-screen");
const resultScreen = document.getElementById("result-screen");
const questionsContainer = document.getElementById("questions-container");
const questionBoard = document.getElementById("question-board");
const submitBtn = document.getElementById("submit-btn");

// ===== Cáº¤U HÃŒNH Äá»€ 6 =====
const MA_DE = "HSA_DINHLUONG_DE6";
const DRAFT_KEY = "examDraft_HSA_DINHLUONG_DE6";
const EXAM_MINUTES = 75;
const RETURN_HASH = "#math";
// ================================

let timeRemaining = EXAM_MINUTES * 60;
let timerInterval;
let userAnswers = {};
let flaggedQuestions = {};
let isFinished = false;
let cheatCount = 0;
let studentName = "";
let studentClass = "";

window.addEventListener("DOMContentLoaded", () => {
  const session = getMTSeduSession();
  const btnStart = document.getElementById("btn-start-exam");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      if (!session) {
        const loginCard =
          loginScreen.querySelector(".form-card") ||
          loginScreen.querySelector(".card");
        if (loginCard) showLoginRequired(loginCard, RETURN_HASH);
        return;
      }
      const draft = JSON.parse(localStorage.getItem(DRAFT_KEY));
      if (draft && !draft.isFinished && draft.studentName === studentName) {
        loadDraftAndContinue(draft);
      } else {
        startExamDirectly();
      }
    });
  }

  if (!session) return;
  studentName = session.displayName || session.username;
  studentClass = session.username;
  insertBackButton();
});

function startExamDirectly() {
  userAnswers = {};
  flaggedQuestions = {};
  cheatCount = 0;
  isFinished = false;
  localStorage.removeItem(DRAFT_KEY);
  timeRemaining = EXAM_MINUTES * 60;
  document.getElementById("display-name").innerText = studentName;
  document.getElementById("display-class").innerText = studentClass;
  loginScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  renderExam();
  restoreDOMState();
  renderBoard();
  startTimer();
  setupAntiCheat();
}

function loadDraftAndContinue(draft) {
  studentName = draft.studentName || studentName;
  studentClass = draft.studentClass || studentClass;
  timeRemaining = draft.timeRemaining;
  userAnswers = draft.userAnswers || {};
  flaggedQuestions = draft.flaggedQuestions || {};
  cheatCount = draft.cheatCount || 0;
  document.getElementById("display-name").innerText = studentName;
  document.getElementById("display-class").innerText = studentClass;
  loginScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  renderExam();
  restoreDOMState();
  renderBoard();
  startTimer();
  setupAntiCheat();
}

function renderExam() {
  questionsContainer.innerHTML = "";

  const header = document.createElement("div");
  header.className = "section-header";
  header.innerHTML = `
    <div class="section-title">Pháº§n thi: TÆ° duy Ä‘á»‹nh lÆ°á»£ng <span class="badge">50 Ä‘iá»ƒm</span></div>
    <div class="section-subtitle">Má»—i cÃ¢u Ä‘Ãºng Ä‘Æ°á»£c 1 Ä‘iá»ƒm. Gá»“m tráº¯c nghiá»‡m 4 lá»±a chá»n vÃ  Ä‘iá»n Ä‘Ã¡p Ã¡n.</div>`;
  questionsContainer.appendChild(header);

  let qCounter = 1;

  examData.forEach((q) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-card-${q.id}`;

    let html = `<div class="q-layout"><div class="q-header"><div class="q-num-flag">
      <div class="q-num">CÃ¢u ${qCounter}</div>
      <button class="btn-flag ${flaggedQuestions[q.id] ? "active" : ""}" data-id="${q.id}" title="ÄÃ¡nh dáº¥u">
        ${flaggedQuestions[q.id] ? "â˜…" : "â˜†"}</button>
    </div></div><div class="q-content">
    <div class="q-text">${q.question}</div>
    ${q.image ? `<div class="q-image"><img src="${q.image}" alt="HÃ¬nh cÃ¢u ${qCounter}"></div>` : ""}`;

    if (q.type === "mcq") {
      html += `<div class="options-list">`;
      q.options.forEach((opt, idx) => {
        html += `<label class="option-label" id="lbl-${q.id}-${idx}">
          <input type="radio" name="ans-${q.id}" value="${idx}">
          <span class="opt-letter">${["A", "B", "C", "D"][idx]}.</span> ${opt}</label>`;
      });
      html += `</div>`;
    } else if (q.type === "fill") {
      html += `<input type="text" class="short-ans-input" name="ans-${q.id}" placeholder="Nháº­p Ä‘Ã¡p Ã¡n...">`;
    }

    html += `<div class="explanation hidden" id="exp-${q.id}"><strong>HÆ°á»›ng dáº«n giáº£i:</strong> ${q.explanation}</div></div></div>`;
    card.innerHTML = html;
    questionsContainer.appendChild(card);
    qCounter++;
  });

  document.querySelectorAll(".btn-flag").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const qid = e.target.closest(".btn-flag").getAttribute("data-id");
      flaggedQuestions[qid] = !flaggedQuestions[qid];
      e.target.closest(".btn-flag").classList.toggle("active");
      e.target.closest(".btn-flag").innerText = flaggedQuestions[qid]
        ? "â˜…"
        : "â˜†";
      updateBoard();
      saveDraft();
    });
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const name = e.target.name;
      if (name.startsWith("ans-") && e.target.type === "radio") {
        const qid = name.replace("ans-", "");
        document
          .querySelectorAll(`input[name="${name}"]`)
          .forEach((r) =>
            r.closest(".option-label").classList.remove("selected"),
          );
        e.target.closest(".option-label").classList.add("selected");
        userAnswers[qid] = parseInt(e.target.value);
      } else if (e.target.type === "text") {
        const qid = name.replace("ans-", "");
        userAnswers[qid] = e.target.value;
      }
      updateBoard();
      saveDraft();
    });
  });

  if (window.MathJax) MathJax.typesetPromise();
}

function renderBoard() {
  if (!questionBoard) return;
  const legend = document.createElement("div");
  legend.className = "board-legend";
  legend.innerHTML = `
    <span class="box"></span><span class="box-label">ChÆ°a lÃ m</span>
    <span class="box done"></span><span class="box-label">ÄÃ£ lÃ m</span>
    <span class="box flagged"></span><span class="box-label">ÄÃ¡nh dáº¥u</span>`;
  questionBoard.appendChild(legend);

  const grid = document.createElement("div");
  grid.className = "q-grid";
  grid.id = "q-grid-inner";
  questionBoard.appendChild(grid);

  examData.forEach((q, index) => {
    const box = document.createElement("button");
    box.className = "q-box";
    box.id = `box-${q.id}`;
    box.innerText = index + 1;
    box.type = "button";
    box.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById(`q-card-${q.id}`)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    });
    grid.appendChild(box);
  });
  updateBoard();
}

function updateBoard() {
  let answeredCount = 0;
  examData.forEach((q) => {
    let answered = false;
    if (q.type === "mcq" && userAnswers[q.id] !== undefined) answered = true;
    if (
      q.type === "fill" &&
      userAnswers[q.id] &&
      userAnswers[q.id].trim() !== ""
    )
      answered = true;

    if (answered) answeredCount++;
    if (questionBoard) {
      const box = document.getElementById(`box-${q.id}`);
      if (box) {
        box.className = "q-box";
        if (flaggedQuestions[q.id]) box.classList.add("flagged");
        else if (answered) box.classList.add("done");
      }
    }
  });
  const countEl = document.getElementById("answered-count");
  if (countEl) countEl.innerText = `${answeredCount}/${examData.length}`;
}

function saveDraft() {
  localStorage.setItem(
    DRAFT_KEY,
    JSON.stringify({
      studentName,
      studentClass,
      timeRemaining,
      userAnswers,
      flaggedQuestions,
      cheatCount,
      isFinished,
      lastSaved: new Date().toISOString(),
    }),
  );
}

function restoreDOMState() {
  document.querySelectorAll("input").forEach((input) => {
    const name = input.name;
    if (!name) return;
    if (input.type === "radio" && name.startsWith("ans-")) {
      const qid = name.replace("ans-", "");
      if (userAnswers[qid] == input.value) {
        input.checked = true;
        input.closest(".option-label").classList.add("selected");
      }
    } else if (input.type === "text") {
      const qid = name.replace("ans-", "");
      input.value = userAnswers[qid] || "";
    }
  });
}

let warned30 = false;

function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 5000);
}

function startTimer() {
  const endAt = Date.now() + timeRemaining * 1000;
  timerInterval = setInterval(() => {
    timeRemaining = Math.max(0, Math.round((endAt - Date.now()) / 1000));
    saveDraft();
    const m = Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    const s = (timeRemaining % 60).toString().padStart(2, "0");
    document.getElementById("countdown").innerText = `${m}:${s}`;
    if (timeRemaining <= 30 && !warned30) {
      warned30 = true;
      showToast("âš ï¸ Cáº£nh bÃ¡o: Chá»‰ cÃ²n 30 giÃ¢y!");
      document.querySelector(".timer-pill").classList.add("timer-danger");
    }
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function setupAntiCheat() {
  window.addEventListener("beforeunload", (e) => {
    if (!isFinished) {
      e.preventDefault();
      e.returnValue = "Báº¡n chÆ°a ná»™p bÃ i!";
    }
  });
  window.addEventListener("pagehide", () => {
    if (!isFinished) saveDraft();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !isFinished) {
      cheatCount++;
      saveDraft();
    }
  });
}

submitBtn.addEventListener("click", () => {
  if (confirm("Báº¡n cÃ³ cháº¯c muá»‘n ná»™p bÃ i?")) submitExam();
});

function parseNumber(str) {
  const t = String(str ?? "")
    .trim()
    .replace(/\s+/g, "")
    .replace(",", ".");
  if (t === "") return NaN;
  const frac = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (frac)
    return Number(frac[2]) === 0 ? NaN : Number(frac[1]) / Number(frac[2]);
  return /^-?\d+(?:\.\d+)?$/.test(t) ? Number(t) : NaN;
}

function isFillCorrect(userInput, correct) {
  const u = String(userInput ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
  const c = String(correct).trim().toLowerCase().replace(/\s+/g, "");
  if (u === "") return false;
  if (u === c) return true;
  const un = parseNumber(u),
    cn = parseNumber(c);
  return !isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 1e-9;
}

function submitExam() {
  isFinished = true;
  clearInterval(timerInterval);
  document
    .querySelectorAll("input, .btn-flag")
    .forEach((el) => (el.disabled = true));
  submitBtn.style.display = "none";
  const timerPill = document.querySelector(".timer-pill");
  if (timerPill) timerPill.classList.remove("timer-danger");

  let totalScore = 0;

  examData.forEach((q) => {
    document.getElementById(`exp-${q.id}`).classList.remove("hidden");

    if (q.type === "mcq") {
      const selected = userAnswers[q.id];
      document
        .getElementById(`lbl-${q.id}-${q.correctAnswer}`)
        .classList.add("correct-ans");
      if (selected === q.correctAnswer) {
        totalScore += 1;
      } else if (selected !== undefined) {
        document
          .getElementById(`lbl-${q.id}-${selected}`)
          .classList.add("wrong-ans");
      }
    } else if (q.type === "fill") {
      const input = document.querySelector(`input[name="ans-${q.id}"]`);
      if (isFillCorrect(userAnswers[q.id], q.correctAnswer)) {
        totalScore += 1;
        input.classList.add("correct-ans");
      } else {
        input.classList.add("wrong-ans");
      }
    }
  });

  // Hiá»ƒn thá»‹ Ä‘iá»ƒm sá»‘ lÃªn UI
  const scorePill = document.getElementById("score-pill");
  if (scorePill) {
    scorePill.classList.remove("hidden");
    document.getElementById("review-score").innerText = totalScore;
  }
  document.getElementById("final-score").innerText = totalScore;
  document.getElementById("cheat-display").innerText = cheatCount;

  examScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  // LÆ°u Ä‘iá»ƒm lÃªn Firebase
  const session = getMTSeduSession();
  if (session) {
    const resultsRef = ref(db, `hsa_results/${MA_DE}/${session.username}`);
    set(resultsRef, {
      studentName,
      studentClass,
      score: totalScore,
      cheatCount,
      answers: userAnswers,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        const fbStatus = document.getElementById("firebase-status");
        fbStatus.innerHTML = "âœ… ÄÃ£ lÆ°u Ä‘iá»ƒm lÃªn há»‡ thá»‘ng!";
        fbStatus.style.color = "#16a34a";
      })
      .catch((err) => {
        const fbStatus = document.getElementById("firebase-status");
        fbStatus.innerHTML =
          "âŒ Lá»—i lÆ°u Ä‘iá»ƒm. Vui lÃ²ng chá»¥p mÃ n hÃ¬nh bÃ¡o giÃ¡o viÃªn.";
        fbStatus.style.color = "#dc2626";
      });
  }

  // XoÃ¡ báº£n nhÃ¡p sau khi ná»™p thÃ nh cÃ´ng
  localStorage.removeItem(DRAFT_KEY);
}

// Báº¯t sá»± kiá»‡n Xem Láº¡i bÃ i lÃ m
document.getElementById("review-btn").addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
});

``


## data.js

``javascript
export const examData = [
  {
    id: "q1",
    type: "mcq",
    question: "CÃ³ bao nhiÃªu sá»‘ tá»± nhiÃªn cÃ³ 5 chá»¯ sá»‘ Ä‘Ã´i má»™t khÃ¡c nhau mÃ  cÃ¡c chá»¯ sá»‘ Ä‘Ã³ thuá»™c táº­p há»£p $\\{1;2;3;4;5\\}$ ?",
    options: ["$C_{5}^{5}$", "$A_{6}^{5}$", "$5!$", "$5^{5}$"],
    correctAnswer: 2,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q2",
    type: "mcq",
    question: "Trong khÃ´ng gian, kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y sai.",
    options: ["Náº¿u ba máº·t pháº³ng phÃ¢n biá»‡t cáº¯t nhau theo ba giao tuyáº¿n thÃ¬ ba giao tuyáº¿n áº¥y hoáº·c Ä‘á»“ng quy hoáº·c Ä‘Ã´i má»™t song song.", "Hai Ä‘Æ°á»ng tháº³ng phÃ¢n biá»‡t cÃ¹ng vuÃ´ng gÃ³c vá»›i má»™t Ä‘Æ°á»ng tháº³ng thÃ¬ song song vá»›i nhau.", "Hai máº·t pháº³ng phÃ¢n biá»‡t cÃ¹ng vuÃ´ng gÃ³c vá»›i má»™t Ä‘Æ°á»ng tháº³ng thÃ¬ song song vá»›i nhau.", "Cho hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau. CÃ³ duy nháº¥t má»™t máº·t pháº³ng chá»©a Ä‘Æ°á»ng tháº³ng nÃ y vÃ  song song vá»›i Ä‘Æ°á»ng tháº³ng kia."],
    correctAnswer: 2,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: "cau_2.png"
  },
  {
    id: "q3",
    type: "mcq",
    question: "Trong khÃ´ng gian vá»›i há»‡ tá»a Ä‘á»™ $Oxyz$; cho Ä‘iá»ƒm $A(1;3;-2)$ vÃ  $(P):2x+y-2z-3=0$. Khoáº£ng cÃ¡ch tá»« Ä‘iá»ƒm $A$ Ä‘áº¿n máº·t pháº³ng $(P)$ báº±ng",
    options: ["$1$.", "$2$.", "$\\frac{2}{3}$.", "$3$."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q4",
    type: "mcq",
    question: "Cho $a,b$ lÃ  cÃ¡c sá»‘ thá»±c dÆ°Æ¡ng tÃ¹y Ã½ vÃ  $a \\neq 1$, $\\log_{a^{4}}b$ báº±ng",
    options: ["$4+\\log_{a}b$.", "$\\frac{1}{4}\\log_{a}b$.", "$4 \\log_{a}b$.", "$\\frac{1}{4}+\\log_{a}b$."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q5",
    type: "mcq",
    question: "Cho hai vectÆ¡ $\\vec{a}$ vÃ  $\\vec{b}$ khÃ¡c vectÆ¡ - khÃ´ng thá»a mÃ£n $|\\vec{a}|=2, |\\vec{b}|=3$ vÃ  táº¡o vá»›i nhau má»™t gÃ³c báº±ng $45^{\\circ}$. Khi Ä‘Ã³ $\\vec{a}.\\vec{b}$ báº±ng bao nhiÃªu?",
    options: ["$\\vec{a}.\\vec{b}=5\\sqrt{2}$.", "$\\vec{a}.\\vec{b}=3\\sqrt{2}$.", "$\\vec{a}.\\vec{b}=2\\sqrt{5}$.", "$\\vec{a}.\\vec{b}=2\\sqrt{3}$."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q6",
    type: "mcq",
    question: "Trong hÃ¬nh váº½ dÆ°á»›i Ä‘Ã¢y, hÃ£y cho biáº¿t Ä‘iá»ƒm $L$ khÃ´ng lÃ  Ä‘iá»ƒm chung cá»§a hai máº·t pháº³ng nÃ o?",
    options: ["$(SBA)$ vÃ  $(SBC)$.", "$(SAD)$ vÃ  $(ALD)$.", "$(SBC)$ vÃ  $(SBD)$.", "$(SAB)$ vÃ  $(ALD)$."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: "cau_6.png"
  },
  {
    id: "q7",
    type: "mcq",
    question: "CÃ¢n náº·ng cá»§a 35 ngÆ°á»i trÆ°á»Ÿng thÃ nh táº¡i má»™t khu dÃ¢n cÆ° Ä‘Æ°á»£c cho nhÆ° sau:\n\n43 51 47 62 48 40 50 62 53 56 40 48 56 53 50 42 55\n52 48 46 45 54 52 50 47 44 54 55 60 63 58 55 60 58 53.\n\nChuyá»ƒn máº«u sá»‘ liá»‡u trÃªn sang dáº¡ng ghÃ©p nhÃ³m vá»›i sÃ¡u nhÃ³m cÃ³ Ä‘á»™ dÃ i báº±ng nhau. Khi Ä‘Ã³, tá»© phÃ¢n vá»‹ thá»© nháº¥t cá»§a máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m Ä‘Ã³ báº±ng bao nhiÃªu?",
    options: ["47,8.", "48,5.", "47.", "47,5."],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q8",
    type: "mcq",
    question: "Cho hÃ¬nh chÃ³p $S.ABCD$ Ä‘Ã¡y lÃ  hÃ¬nh bÃ¬nh hÃ nh $ABCD$. Gá»i $M,N,P$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cá»§a $AB,AD,SC$. Ta cÃ³ $mp(MNP)$. $MN$ cáº¯t cÃ¡c Ä‘Æ°á»ng $BC,CD$ láº§n lÆ°á»£t táº¡i $K,L$. Gá»i $E$ lÃ  giao Ä‘iá»ƒm cá»§a $PK$ vÃ  $SB$, $F$ lÃ  giao Ä‘iá»ƒm cá»§a $PL$ vÃ  $SD$. Ta cÃ³ giao Ä‘iá»ƒm cá»§a $(MNP)$ vá»›i cÃ¡c cáº¡nh $SB,SC,SD$ láº§n lÆ°á»£t lÃ  $E,P,F$. Thiáº¿t diá»‡n táº¡o bá»Ÿi $(MNP)$ vá»›i $S.ABCD$ lÃ ",
    options: ["tam giÃ¡c $MNP$.", "tá»© giÃ¡c $MEPN$.", "ngÅ© giÃ¡c $MNFPE$.", "tam giÃ¡c $PKL$."],
    correctAnswer: 2,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q9",
    type: "mcq",
    question: "DÃ£y sá»‘ $u_{n}=\\frac{2}{n}$ cÃ³ pháº£i lÃ  cáº¥p sá»‘ nhÃ¢n khÃ´ng? Náº¿u pháº£i hÃ£y xÃ¡c Ä‘á»‹nh cÃ´ng bá»™i $q$.",
    options: ["$(u_{n})$ lÃ  cáº¥p sá»‘ nhÃ¢n, $q=3$.", "$(u_{n})$ lÃ  cáº¥p sá»‘ nhÃ¢n, $q=\\frac{1}{2}$.", "$(u_{n})$ lÃ  cáº¥p sá»‘ nhÃ¢n, $q=4$.", "$(u_{n})$ khÃ´ng pháº£i lÃ  cáº¥p sá»‘ nhÃ¢n."],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q10",
    type: "mcq",
    question: "Cho cÃ¡c sá»‘ thá»±c dÆ°Æ¡ng $a,b$ thá»a mÃ£n $\\log_{2}a=x, \\log_{2}b=y$. TÃ­nh $P=\\log_{2}(a^{2}b^{3})$.",
    options: ["$P=2x+3y$.", "$P=x^{2}+y^{3}$.", "$P=6xy$.", "$P=x^{2}y^{3}$."],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q11",
    type: "mcq",
    question: "GiÃ¡ trá»‹ cá»§a $\\log_{a}\\frac{1}{a^{3}}$ vá»›i $a>0, a \\neq 1$ báº±ng",
    options: ["$-\\frac{2}{3}$.", "$\\frac{3}{2}$.", "$-\\frac{3}{2}$.", "$-3$."],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: "cau_11.png"
  },
  {
    id: "q12",
    type: "mcq",
    question: "Cho tam giÃ¡c $PMQ$ CÃ³ $PM=10$, $\\widehat{P}=25^{\\circ}$, $\\widehat{M}=52^{\\circ}$, Ä‘á»™ dÃ i cáº¡nh $PQ$ gáº§n nháº¥t vá»›i giÃ¡ trá»‹ nÃ o sau Ä‘Ã¢y?",
    options: ["8,09.", "12,91.", "13,88.", "9,43."],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q13",
    type: "mcq",
    question: "Cho tam giÃ¡c vuÃ´ng, trong Ä‘Ã³ cÃ³ má»™t gÃ³c báº±ng trung bÃ¬nh cá»™ng cá»§a hai gÃ³c cÃ²n láº¡i. Cáº¡nh lá»›n nháº¥t cá»§a tam giÃ¡c Ä‘Ã³ báº±ng $a$. TÃ­nh diá»‡n tÃ­ch tam giÃ¡c.",
    options: ["$\\frac{a^{2}\\sqrt{3}}{8}$", "$\\frac{a^{2}\\sqrt{3}}{4}$", "$\\frac{a^{2}\\sqrt{6}}{10}$", "$\\frac{a^{2}\\sqrt{2}}{4}$"],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q14",
    type: "mcq",
    question: "Biáº¿t $\\log_{7}12=a$; $\\log_{12}24=b$. GiÃ¡ trá»‹ cá»§a $\\log_{54}168$ Ä‘Æ°á»£c tÃ­nh theo $a$ vÃ  $b$ lÃ ",
    options: ["$\\frac{ab+1}{a(8-5b)}$", "$\\frac{ab-1}{a(8+5b)}$", "$\\frac{2ab+1}{8a-5b}$", "$\\frac{2ab+1}{8a+5b}$"],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q15",
    type: "mcq",
    question: "TÃ¬m $m$ Ä‘á»ƒ phÆ°Æ¡ng trÃ¬nh $\\sin x-\\cos x-m=0$ cÃ³ nghiá»‡m.",
    options: ["$-\\sqrt{2} \\leq m \\leq \\sqrt{2}$", "$-\\sqrt{2} \\leq m \\leq 1$", "$-1 \\leq m \\leq \\sqrt{2}$", "$-1 \\leq m \\leq 1$"],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: "cau_15.png"
  },
  {
    id: "q16",
    type: "mcq",
    question: "CÃ¢n náº·ng (kg) cá»§a 35 ngÆ°á»i trÆ°á»Ÿng thÃ nh táº¡i má»™t khu dÃ¢n cÆ° Ä‘Æ°á»£c cho nhÆ° sau:\n\n43 51 47 62 48 40 50 62 53 56 40 48 56 53 50 42 55\n52 48 46 45 54 52 50 47 44 54 55 60 63 58 55 60 58 53.\n\nHÃ£y chuyá»ƒn máº«u sá»‘ liá»‡u sang dáº¡ng ghÃ©p nhÃ³m vá»›i sÃ¡u nhÃ³m cÃ³ Ä‘á»™ dÃ i báº±ng nhau. TÃ­nh tá»© phÃ¢n vá»‹ thá»© ba cá»§a máº«u sá»‘ liá»‡u trÃªn.",
    options: ["55,5.", "56,25.", "59,4.", "56."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q17",
    type: "mcq",
    question: "Báº£ng sau thá»‘ng kÃª sá»‘ lá»›p vÃ  sá»‘ há»c sinh theo tá»«ng khá»‘i á»Ÿ má»™t trÆ°á»ng Trung há»c cÆ¡ sá»Ÿ.\n\n| Khá»‘i | 6 | 7 | 8 | 9 |\n|---|---|---|---|---|\n| Sá»‘ lá»›p | 9 | 8 | 8 | 9 |\n| Sá»‘ há»c sinh | 396 | 370 | 345 | 382 |\n\nHiá»‡u trÆ°á»Ÿng trÆ°á»ng Ä‘Ã³ cho biáº¿t sÄ© sá»‘ má»—i lá»›p trong trÆ°á»ng Ä‘á»u khÃ´ng vÆ°á»£t quÃ¡ 45 há»c sinh. Biáº¿t ráº±ng trong báº£ng trÃªn cÃ³ má»™t khá»‘i lá»›p bá»‹ thá»‘ng kÃª sai, hÃ£y tÃ¬m khá»‘i lá»›p Ä‘Ã³.",
    options: ["Lá»›p 6.", "Lá»›p 7.", "Lá»›p 8.", "Lá»›p 9."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q18",
    type: "mcq",
    question: "Muá»‘n Ä‘o chiá»u cao cá»§a má»™t tÃ²a nhÃ , ngÆ°á»i ta láº¥y hai Ä‘iá»ƒm $A, B$ trÃªn máº·t Ä‘áº¥t cÃ¡ch nhau 10 m cÃ¹ng tháº³ng hÃ ng vá»›i chÃ¢n $C$ cá»§a tÃ²a nhÃ  Ä‘á»ƒ Ä‘áº·t hai giÃ¡c káº¿. ChÃ¢n cá»§a hai giÃ¡c káº¿ cÃ³ cÃ¹ng chiá»u cao lÃ  1 m. Gá»i $D$ lÃ  Ä‘á»‰nh tÃ²a nhÃ  vÃ  hai Ä‘iá»ƒm $A_{1}, B_{1}$ cÃ¹ng tháº³ng hÃ ng vá»›i $C_{1}$ thuá»™c Ä‘Æ°á»ng cao $CD$ cá»§a tÃ²a nhÃ . NgÆ°á»i ta Ä‘o Ä‘Æ°á»£c $\\widehat{DA_{1}C_{1}}=48^{\\circ}$, $\\widehat{DB_{1}C_{1}}=36^{\\circ}$. TÃ­nh chiá»u cao $CD$ cá»§a tÃ²a nhÃ .",
    options: ["$CD \\approx 25,77$ m.", "$CD \\approx 23,08$ m.", "$CD \\approx 24,84$ m.", "$CD \\approx 26,21$ m."],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: "cau_18.png"
  },
  {
    id: "q19",
    type: "mcq",
    question: "Má»™t ngÆ°á»i lÃ m má»™t cÃ¡i cá»•ng cá»• xÆ°a cÃ³ dáº¡ng Parabol nhÆ° hÃ¬nh váº½. HÃ£y tÃ­nh diá»‡n tÃ­ch cá»§a cÃ¡i cá»•ng?",
    options: ["$\\frac{28}{3}$", "$\\frac{16}{3}$", "16", "$\\frac{32}{3}$"],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: "cau_19.png"
  },
  {
    id: "q20",
    type: "mcq",
    question: "Bá»‘n cung thá»§ $A, B, C, D$ thi Ä‘áº¥u vá»›i nhau vÃ  Ä‘Æ°á»£c ghi láº¡i káº¿t quáº£ sau 6 láº§n báº¯n nhÆ° sau:\n\n| Láº§n | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| Cung thá»§ $A$ | 7 | 7 | 6 | 5 | 8 | 9 |\n| Cung thá»§ $B$ | 9 | 10 | 5 | 8 | 7 | 8 |\n| Cung thá»§ $C$ | 6 | 7 | 8 | 9 | 10 | 9 |\n| Cung thá»§ $D$ | 6 | 8 | 7 | 9 | 6 | 5 |\n\nHá»i cung thá»§ nÃ o cÃ³ phong Ä‘á»™ á»•n Ä‘á»‹nh nháº¥t?",
    options: ["Cung thá»§ D.", "Cung thá»§ B.", "Cung thá»§ C.", "Cung thá»§ A."],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q21",
    type: "mcq",
    question: "Äá»ƒ phÆ°Æ¡ng trÃ¬nh $\\frac{5+4\\sin\\left(\\frac{3\\pi}{2}-x\\right)}{\\sin x}=\\frac{6\\tan\\alpha}{1+\\tan^{2}\\alpha}$ cÃ³ nghiá»‡m thÃ¬ giÃ¡ trá»‹ $\\alpha$ lÃ ",
    options: ["$\\alpha=\\frac{\\pi}{3}+k\\frac{\\pi}{2}$", "$\\alpha=\\frac{\\pi}{4}+k\\frac{\\pi}{2}$", "$\\alpha=-\\frac{\\pi}{4}+k\\pi$", "$\\alpha=k\\frac{\\pi}{2}$"],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q22",
    type: "mcq",
    question: "Trong má»™t buá»•i trÃ¬nh diá»…n thá»i trang, hÃ ng gháº¿ VIP Ä‘áº§u tiÃªn Ä‘Æ°á»£c sáº¯p xáº¿p bao gá»“m 10 gháº¿ trong Ä‘Ã³ cÃ³ 2 gháº¿ dÃ nh cho 2 nhÃ  phÃª bÃ¬nh thá»i trang ná»•i tiáº¿ng. Biáº¿t ráº±ng 2 nhÃ  phÃª bÃ¬nh nÃ y pháº£i ngá»“i cÃ¡ch nhau Ä‘Ãºng 2 gháº¿ Ä‘á»ƒ khi mÃ¡y quay lia Ä‘áº¿n thÃ¬ cáº£ hai ngÆ°á»i vá»«a lá»t khung hÃ¬nh. Há»i cÃ³ bao nhiÃªu cÃ¡ch sáº¯p xáº¿p hÃ ng gháº¿ VIP Ä‘áº§u tiÃªn?",
    options: ["1814400.", "161280.", "5080320.", "564480."],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q23",
    type: "mcq",
    question: "Cho khá»‘i chÃ³p $S.ABC$ cÃ³ Ä‘Ã¡y lÃ  tam giÃ¡c vuÃ´ng táº¡i $B$, $BA=a$, $BC=2a$, $SA=2a$, $SA \\perp (ABC)$. Gá»i $K$ lÃ  hÃ¬nh chiáº¿u cá»§a $A$ trÃªn $SC$. TÃ­nh khoáº£ng cÃ¡ch tá»« Ä‘iá»ƒm $K$ Ä‘áº¿n máº·t pháº³ng $(SAB)$.",
    options: ["$\\frac{8a}{9}$", "$\\frac{a}{9}$", "$\\frac{2a}{9}$", "$\\frac{5a}{9}$"],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q24",
    type: "mcq",
    question: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh cÃ³ tÃ¢m $O$, $AB=8$, $SA=SB=6$. Gá»i $(P)$ lÃ  máº·t pháº³ng qua $O$ vÃ  song song vá»›i $(SAB)$. Thiáº¿t diá»‡n cá»§a $(P)$ vÃ  hÃ¬nh chÃ³p $S.ABCD$ lÃ ",
    options: ["$5\\sqrt{5}$.", "$6\\sqrt{5}$.", "12.", "13."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q25",
    type: "mcq",
    question: "Gieo má»™t con xÃºc xáº¯c liÃªn tiáº¿p 2 láº§n. XÃ¡c suáº¥t cá»§a biáº¿n cá»‘ $A$ \"Sá»‘ cháº¥m xuáº¥t hiá»‡n á»Ÿ láº§n gieo sau lá»›n hÆ¡n láº§n gieo trÆ°á»›c\" lÃ ",
    options: ["$P(A)=\\frac{21}{36}$", "$P(A)=\\frac{5}{12}$", "$P(A)=\\frac{5}{36}$", "$P(A)=\\frac{1}{6}$"],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q26",
    type: "mcq",
    question: "Cho hÃ¬nh chÃ³p $S.ABC$ cÃ³ Ä‘Ã¡y $ABC$ lÃ  tam giÃ¡c vuÃ´ng cÃ¢n táº¡i $B$, $AB=a$, $SA=a\\sqrt{3}$ vÃ  $SA \\perp (ABC)$. Gá»i $M$ lÃ  Ä‘iá»ƒm trÃªn cáº¡nh $AB$ vÃ  $AM=x (0<x<a)$ máº·t pháº³ng $(\\alpha)$ Ä‘i qua $M$ vÃ  vuÃ´ng gÃ³c vá»›i $AB$. Giáº£ sá»­ thiáº¿t diá»‡n cá»§a hÃ¬nh chÃ³p $S.ABC$ vá»›i $(\\alpha)$ lÃ  tá»© giÃ¡c $MNPQ$. TÃ¬m $x$ Ä‘á»ƒ thiáº¿t diá»‡n $MNPQ$ lá»›n nháº¥t?",
    options: ["$x=\\frac{a}{2}$.", "$x=\\frac{a}{\\sqrt{2}}$.", "$x=\\frac{3a}{2}$.", "$x=a$."],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q27",
    type: "mcq",
    question: "CÃ³ 30 quáº£ cáº§u Ä‘Æ°á»£c Ä‘Ã¡nh sá»‘ tá»« 1 Ä‘áº¿n 30. Láº¥y Ä‘á»“ng thá»i hai quáº£ cáº§u rá»“i nhÃ¢n hai sá»‘ trÃªn hai quáº£ cáº§u láº¥y Ä‘Æ°á»£c. CÃ³ bao nhiÃªu cÃ¡ch láº¥y hai quáº£ cáº§u Ä‘á»ƒ tÃ­ch nháº­n Ä‘Æ°á»£c lÃ  má»™t sá»‘ chia háº¿t cho 10?",
    options: ["3.", "120", "81", "36"],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q28",
    type: "mcq",
    question: "Tá»« cÃ¡c chá»¯ sá»‘ $0, 1, 2, 3, 4, 5$ cÃ³ thá»ƒ láº­p Ä‘Æ°á»£c bao nhiÃªu sá»‘ tá»± nhiÃªn cháºµn cÃ³ 4 chá»¯ sá»‘ Ä‘Ã´i má»™t khÃ¡c nhau?",
    options: ["240.", "160.", "752.", "156."],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q29",
    type: "mcq",
    question: "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn dÆ°Æ¡ng cá»§a tham sá»‘ $m$ Ä‘á»ƒ hÃ m sá»‘ $y=\\frac{mx+2}{x+3m}$ Ä‘á»“ng biáº¿n trÃªn khoáº£ng $(-\\infty;-6)$.",
    options: ["2.", "6.", "VÃ´ sá»‘.", "1."],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q30",
    type: "mcq",
    question: "Giáº£ sá»­ $(1+x)(1+x+x^{2})...(1+x+x^{2}+\\cdot\\cdot\\cdot+x^{n})=a_{0}+a_{1}x+a_{2}x^{2}+\\cdot\\cdot\\cdot+a_{m}x^{m}$. TÃ­nh $\\sum_{r=0}^{m}a_{r}$.",
    options: ["$n$.", "$n!$", "1.", "$(n+1)!$"],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q31",
    type: "mcq",
    question: "Gá»i $S$ lÃ  táº­p nghiá»‡m cá»§a phÆ°Æ¡ng trÃ¬nh $x^{3}+x-7=\\sqrt{x^{2}+5}$. Sá»‘ pháº§n tá»­ con cá»§a táº­p há»£p $S$ lÃ ",
    options: ["1.", "2.", "4.", "8."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q32",
    type: "mcq",
    question: "XÃ¡c Ä‘á»‹nh $m$ Ä‘á»ƒ phÆ°Æ¡ng trÃ¬nh $x^{3}-3x^{2}-9x+m=0$ cÃ³ ba nghiá»‡m phÃ¢n biá»‡t láº­p thÃ nh cáº¥p sá»‘ cá»™ng.",
    options: ["$m=13$.", "$m=12$.", "$m=16$.", "$m=11$."],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q33",
    type: "mcq",
    question: "Gá»i $S_{1}; S_{2}; S_{3}$ lÃ  tá»•ng $n_{1}; n_{2}; n_{3}$ sá»‘ háº¡ng Ä‘áº§u cá»§a má»™t cáº¥p sá»‘ cá»™ng. Khi Ä‘Ã³ $\\frac{S_{1}}{n_{1}}(n_{2}-n_{3})+\\frac{S_{2}}{n_{2}}(n_{3}-n_{1})+\\frac{S_{3}}{n_{3}}(n_{1}-n_{2})$ báº±ng",
    options: ["0.", "1.", "2.", "3."],
    correctAnswer: 0,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q34",
    type: "mcq",
    question: "XÃ¡c Ä‘á»‹nh táº¥t cáº£ cÃ¡c giÃ¡ trá»‹ cá»§a $m$ Ä‘á»ƒ $1-\\cos 2x+2\\cos^{2}x+2\\tan x = 4m\\sin x$ chá»‰ cÃ³ 3 Ä‘iá»ƒm biá»ƒu diá»…n trÃªn Ä‘Æ°á»ng trÃ²n lÆ°á»£ng giÃ¡c.",
    options: ["$m=\\sqrt{2}$", "$m=-\\sqrt{2}$", "$m=0$", "$m=\\pm\\sqrt{2}$"],
    correctAnswer: 3,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q35",
    type: "mcq",
    question: "GiÃ¡ trá»‹ nhá» nháº¥t cá»§a biá»ƒu thá»©c $F=4x-7y$ trÃªn miá»n xÃ¡c Ä‘á»‹nh bá»Ÿi há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh $\\begin{cases}0 \\leq x-y \\leq 3\\\\ 0 \\leq x+2y \\leq 4\\end{cases}$ lÃ ",
    options: ["0.", "-4.", "11.", "15."],
    correctAnswer: 1,
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q36",
    type: "fill",
    question: "Cho hÃ¬nh láº­p phÆ°Æ¡ng $ABCD.A'B'C'D'$. Gá»i $M$ lÃ  trung Ä‘iá»ƒm cá»§a $BC$. Sá»‘ Ä‘o gÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng $AM$ vÃ  $B'C'$ báº±ng bao nhiÃªu Ä‘á»™?",
    correctAnswer: "45",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q37",
    type: "fill",
    question: "Má»™t cÄƒn bá»‡nh cÃ³ 1% dÃ¢n sá»‘ máº¯c pháº£i. Má»™t phÆ°Æ¡ng phÃ¡p chuáº©n Ä‘oÃ¡n Ä‘Æ°á»£c phÃ¡t triá»ƒn cÃ³ tá»· lá»‡ chÃ­nh xÃ¡c lÃ  99%. Vá»›i nhá»¯ng ngÆ°á»i bá»‹ bá»‡nh, phÆ°Æ¡ng phÃ¡p nÃ y sáº½ Ä‘Æ°a ra káº¿t quáº£ dÆ°Æ¡ng tÃ­nh 99% sá»‘ trÆ°á»ng há»£p. Vá»›i ngÆ°á»i khÃ´ng máº¯c bá»‡nh, phÆ°Æ¡ng phÃ¡p nÃ y cÅ©ng chuáº©n Ä‘oÃ¡n Ä‘Ãºng 99 trong 100 trÆ°á»ng há»£p. Náº¿u má»™t ngÆ°á»i kiá»ƒm tra vÃ  káº¿t quáº£ lÃ  dÆ°Æ¡ng tÃ­nh (bá»‹ bá»‡nh), xÃ¡c suáº¥t Ä‘á»ƒ ngÆ°á»i Ä‘Ã³ thá»±c sá»± bá»‹ bá»‡nh lÃ  bao nhiÃªu?",
    correctAnswer: "0,5",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q38",
    type: "fill",
    question: "Cho hÃ¬nh lÄƒng trá»¥ $ABC.A'B'C'$ cÃ³ Ä‘á»™ dÃ i cáº¡nh bÃªn báº±ng $2a$, Ä‘Ã¡y $ABC$ lÃ  tam giÃ¡c vuÃ´ng táº¡i $A, AB=a, AC=a\\sqrt{3}$ vÃ  hÃ¬nh chiáº¿u vuÃ´ng gÃ³c cá»§a Ä‘á»‰nh $A'$ trÃªn máº·t pháº³ng $(ABC)$ lÃ  trung Ä‘iá»ƒm cá»§a cáº¡nh $BC$. CÃ´sin cá»§a gÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng $AA'$ vÃ  $B'C'$ báº±ng bao nhiÃªu?",
    correctAnswer: "0,25",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q39",
    type: "fill",
    question: "Cho $F(x)$ lÃ  há» nguyÃªn hÃ m cá»§a hÃ m sá»‘ $f(x)=\\sin x-\\cos x+\\frac{2}{\\cos^{2}x}, F(0)=1$. GiÃ¡ trá»‹ $F(\\pi)$ báº±ng bao nhiÃªu?",
    correctAnswer: "3",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q40",
    type: "fill",
    question: "Má»™t váº­t Ä‘ang chuyá»ƒn Ä‘á»™ng vá»›i váº­n tá»‘c $10(m/s)$ thÃ¬ thay Ä‘á»•i vá»›i gia tá»‘c $a(t)=3-4t+t^{2}(m/s^{2})$. Trong 10 giÃ¢y sau khi thay Ä‘á»•i váº­n tá»‘c lá»›n nháº¥t cá»§a váº­t báº±ng bao nhiÃªu m/s?",
    correctAnswer: "173,3",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q41",
    type: "fill",
    question: "Cho hÃ¬nh lÄƒng trá»¥ Ä‘á»©ng $ABC.A'B'C'$ cÃ³ Ä‘Ã¡y lÃ  tam giÃ¡c vuÃ´ng cÃ¢n táº¡i $B, AC=2a$ vÃ  $A'B=3a$. Sá»‘ Ä‘o cá»§a gÃ³c pháº³ng nhá»‹ diá»‡n $[B', AC, B]$ báº±ng bao nhiÃªu Ä‘á»™? (Káº¿t quáº£ lÃ m trÃ²n Ä‘áº¿n chá»¯ sá»‘ tháº­p phÃ¢n thá»© nháº¥t)",
    correctAnswer: "69,3",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q42",
    type: "fill",
    question: "Giá»›i háº¡n dÃ£y sá»‘ $u_{n}=\\frac{\\sqrt{n^{2}+2n}-\\sqrt{n^{2}+n}}{n}$ cÃ³ dáº¡ng $\\lim \\frac{a}{n \\left( \\sqrt{1+\\frac{b}{n}} + \\sqrt{1+\\frac{c}{n}} \\right)}$ vá»›i $a; b; c$ lÃ  cÃ¡c sá»‘ tá»± nhiÃªn. TÃ­nh giÃ¡ trá»‹ $a-b-c$",
    correctAnswer: "-2",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: "cau_42.png"
  },
  {
    id: "q43",
    type: "fill",
    question: "Sá»‘ cÃ¡c nghiá»‡m nguyÃªn khÃ´ng Ã¢m cá»§a báº¥t phÆ°Æ¡ng trÃ¬nh $x_{1}+x_{2}+x_{3}+x_{4} \\leq 11$ lÃ  bao nhiÃªu?",
    correctAnswer: "1365",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q44",
    type: "fill",
    question: "HÃ m sá»‘ $f(x)$ xÃ¡c Ä‘á»‹nh, liÃªn tá»¥c trÃªn $\\mathbb{R}$ vÃ  cÃ³ Ä‘áº¡o hÃ m lÃ  $f'(x)=|x-1|$. Biáº¿t ráº±ng $f(0)=3$. Tá»•ng $f(2)+f(4)$ báº±ng bao nhiÃªu?",
    correctAnswer: "12",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q45",
    type: "fill",
    question: "Tá»« cÃ¡c sá»‘ 7, 8, 9 láº­p Ä‘Æ°á»£c bao nhiÃªu sá»‘ tá»± nhiÃªn gá»“m 6 chá»¯ sá»‘ thá»a mÃ£n Ä‘á»“ng thá»i hai Ä‘iá»u kiá»‡n sau: Má»—i chá»¯ sá»‘ xuáº¥t hiá»‡n Ä‘Ãºng hai láº§n vÃ  hai chá»¯ sá»‘ giá»‘ng nhau khÃ´ng Ä‘á»©ng cáº¡nh nhau?",
    correctAnswer: "76",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q46",
    type: "fill",
    question: "NgÆ°á»i ta dÃ¹ng 20 cuá»‘n sÃ¡ch bao gá»“m 8 cuá»‘n sÃ¡ch ToÃ¡n, 7 cuá»‘n sÃ¡ch LÃ½ vÃ  5 cuá»‘n sÃ¡ch HÃ³a (cÃ¡c cuá»‘n sÃ¡ch cÃ¹ng loáº¡i thÃ¬ giá»‘ng nhau) Ä‘á»ƒ lÃ m pháº§n thÆ°á»Ÿng cho 10 há»c sinh, má»—i há»c sinh nháº­n Ä‘Æ°á»£c 2 cuá»‘n sÃ¡ch khÃ¡c thá»ƒ loáº¡i (khÃ´ng tÃ­nh thá»© tá»± cÃ¡c cuá»‘n sÃ¡ch). CÃ³ bao nhiÃªu cÃ¡ch phÃ¡t thÆ°á»Ÿng cho há»c sinh?",
    correctAnswer: "2520",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q47",
    type: "fill",
    question: "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn cá»§a tham sá»‘ $m$ Ä‘á»ƒ hÃ m sá»‘ $f(x)=\\begin{cases}\\frac{x^{2}-x-2}{x+1} & \\text{khi } x>-1\\\\ |mx-2m^{2}| & \\text{khi } x \\leq -1\\end{cases}$ liÃªn tá»¥c táº¡i $x=-1$?",
    correctAnswer: "1",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q48",
    type: "fill",
    question: "Má»™t báº£ng xáº¿p háº¡ng Ä‘Ã£ tÃ­nh Ä‘iá»ƒm chuáº©n hoÃ¡ cho chá»‰ sá»‘ nghiÃªn cá»©u khoa há»c cá»§a má»™t sá»‘ trÆ°á»ng Ä‘áº¡i há»c á»Ÿ Viá»‡t Nam vÃ  thu Ä‘Æ°á»£c káº¿t quáº£ sau:\n\n| Äiá»ƒm | DÆ°á»›i 20 | [20;30) | [30;40) | [40;60) | [60;80) | [80;100) |\n|---|---|---|---|---|---|---|\n| Sá»‘ trÆ°á»ng | 7 | 19 | 8 | 5 | 4 | 3 |\n\nNgÆ°á»¡ng Ä‘iá»ƒm tá»‘i thiá»ƒu Ä‘á»ƒ Ä‘Æ°a ra danh sÃ¡ch 25% trÆ°á»ng Ä‘áº¡i há»c cÃ³ chá»‰ sá»‘ nghiÃªn cá»©u tá»‘t nháº¥t Viá»‡t Nam báº±ng bao nhiÃªu?",
    correctAnswer: "42",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q49",
    type: "fill",
    question: "Giáº£ sá»­ sá»± lÃ¢y lan cá»§a má»™t vi rÃºt Ä‘Æ°á»£c mÃ´ hÃ¬nh hoÃ¡ bá»Ÿi hÃ m sá»‘ $y=(2e-x)\\log x$, vá»›i $x>0$ vÃ  $x$ tÃ­nh báº±ng giá». Gá»i $x_{0}$ lÃ  thá»i Ä‘iá»ƒm mÃ  sá»± lÃ¢y lan lÃ  lá»›n nháº¥t. GiÃ¡ trá»‹ cá»§a biá»ƒu thá»©c $P=\\log_{2}\\frac{\\sqrt[3]{e.x_{0}}}{x_{0}+1}+\\log_{2}(e+1)$ báº±ng",
    correctAnswer: "0,96",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  },
  {
    id: "q50",
    type: "fill",
    question: "CÃ³ bao nhiÃªu giÃ¡ trá»‹ nguyÃªn thuá»™c Ä‘á»an $[-2025;2025]$ cá»§a tham sá»‘ $m$ Ä‘á»ƒ Ä‘á»“ thá»‹ hÃ m sá»‘ $y=\\frac{\\sqrt{x-3}}{x^{2}+x-m}$ cÃ³ Ä‘Ãºng hai Ä‘Æ°á»ng tiá»‡m cáº­n?",
    correctAnswer: "2014",
    explanation: "Lá»i giáº£i Ä‘ang cáº­p nháº­t",
    image: null
  }
];

``


## firebase-config.js

``javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase, ref, push, set, update, serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8AT2g3vS54-Qco3uU36xYsXN04trj0Yw",
  authDomain: "mtsedu-85ea3.firebaseapp.com",
  databaseURL: "https://mtsedu-85ea3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mtsedu-85ea3",
  storageBucket: "mtsedu-85ea3.firebasestorage.app",
  messagingSenderId: "73617729802",
  appId: "1:73617729802:web:e7fa3c3c3b9ded7522f2f3",
  measurementId: "G-JHQC9DSKY5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, push, set, update, serverTimestamp };
``


## mtsedu-auth.js

``javascript
const SESSION_KEY = "mtsedu_session";

export function getMTSeduSession() {
  const params = new URLSearchParams(window.location.search);
  const urlUsername = params.get("mtsedu_user");
  const urlName = params.get("mtsedu_name");
  const urlId = params.get("mtsedu_id");
  const returnUrl = params.get("mtsedu_return");

  if (urlUsername) {
    const session = {
      username: urlUsername,
      displayName: urlName || urlUsername,
      id: urlId || "user_" + urlUsername,
      returnUrl: returnUrl || "https://mtsedu.vercel.app",
    };
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch {}
    return session;
  }

  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    return user && user.username ? user : null;
  } catch {
    return null;
  }
}

export function getReturnUrl() {
  const session = getMTSeduSession();
  return session && session.returnUrl
    ? session.returnUrl
    : "https://mtsedu.vercel.app";
}

export function isLoggedIn() {
  return getMTSeduSession() !== null;
}

export function getStudentName() {
  const s = getMTSeduSession();
  return s ? s.displayName || s.username : "";
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {}
}

export function showLoginRequired(container, returnHash = "") {
  const mtseduUrl = "https://mtsedu.vercel.app/" + returnHash;
  container.innerHTML = `
    <div style="max-width:480px;margin:0 auto;padding:36px;background:white;border-radius:16px;
      box-shadow:0 4px 24px rgba(0,0,0,0.08);text-align:center;
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <div style="font-size:48px;margin-bottom:16px;">ðŸ”’</div>
      <h2 style="font-size:22px;font-weight:700;margin:0 0 8px;color:#111;">Vui lÃ²ng Ä‘Äƒng nháº­p</h2>
      <p style="color:#666;font-size:15px;margin:0 0 28px;line-height:1.6;">
        Báº¡n cáº§n Ä‘Äƒng nháº­p vÃ o há»‡ thá»‘ng <strong>MTS Education</strong> Ä‘á»ƒ lÃ m bÃ i thi nÃ y.
      </p>
      <a href="${mtseduUrl}" style="display:inline-block;background:#000;color:#fff;
        text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;">
        ÄÄƒng nháº­p táº¡i MTS Education â†’
      </a>
      <p style="margin-top:20px;font-size:13px;color:#999;">TÃ i khoáº£n Ä‘Æ°á»£c cung cáº¥p bá»Ÿi giÃ¡o viÃªn</p>
    </div>
  `;
}

export function insertBackButton() {
  const session = getMTSeduSession();
  const returnUrl =
    session && session.returnUrl
      ? session.returnUrl
      : "https://mtsedu.vercel.app";
  const btn = document.createElement("div");
  btn.id = "mtsedu-back-btn";
  btn.innerHTML = `
    <a href="${returnUrl}" style="display:inline-flex;align-items:center;gap:8px;
      position:fixed;top:14px;left:14px;z-index:9999;background:rgba(0,0,0,0.85);
      color:white;text-decoration:none;padding:9px 18px;border-radius:50px;
      font-size:14px;font-weight:600;font-family:-apple-system,sans-serif;
      backdrop-filter:blur(8px);box-shadow:0 2px 12px rgba(0,0,0,0.3);"
      onmouseover="this.style.background='rgba(0,0,0,1)'"
      onmouseout="this.style.background='rgba(0,0,0,0.85)'">
      â† Trang chá»§
    </a>
  `;
  document.body.appendChild(btn);
}

``

