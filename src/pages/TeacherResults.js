import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const STORAGE_KEY = "teacher_results_data";

const DEFAULT_SUBJECTS = [
  "English",
  "Hindi",
  "Mathematics",
  "Science",
  "Social Science",
  "Computer"
];

let selectedExamId = null;
let searchText = "";
let editingStudentId = null;

/* =========================================================
   RESPONSIVE CSS
========================================================= */

function loadTeacherResultsCSS() {
  if (document.getElementById("teacher-results-css")) return;

  const style = document.createElement("style");
  style.id = "teacher-results-css";

  style.textContent = `
    /* ================================
       GLOBAL RESULTS SAFETY
    ================================= */

    .teacher-results-page,
    .teacher-results-page *,
    .teacher-results-page *::before,
    .teacher-results-page *::after {
      box-sizing: border-box;
    }

    .teacher-results-page {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      overflow-x: hidden;
      padding: 24px;
    }

    .teacher-results-page img,
    .teacher-results-page svg {
      max-width: 100%;
    }

    /* ================================
       HEADER
    ================================= */

    .teacher-results-header {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 24px;
    }

    .teacher-results-header-content {
      flex: 1 1 auto;
      min-width: 0;
    }

    .teacher-results-eyebrow {
      display: block;
      margin-bottom: 7px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .08em;
      color: #64748b;
      text-transform: uppercase;
    }

    .teacher-results-header h1 {
      margin: 0;
      font-size: 28px;
      line-height: 1.2;
      color: #0f172a;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .teacher-results-header p {
      margin: 8px 0 0;
      font-size: 14px;
      line-height: 1.6;
      color: #64748b;
      overflow-wrap: anywhere;
    }

    .teacher-results-header-actions {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 10px;
      min-width: 0;
    }

    /* ================================
       BUTTONS
    ================================= */

    .teacher-results-page button {
      font-family: inherit;
    }

    .teacher-results-primary-btn,
    .teacher-results-secondary-btn,
    .teacher-results-remove-btn,
    .teacher-results-small-btn,
    .teacher-results-icon-btn {
      border: 0;
      cursor: pointer;
      transition: .2s ease;
    }

    .teacher-results-primary-btn,
    .teacher-results-secondary-btn {
      min-height: 42px;
      padding: 10px 16px;
      border-radius: 9px;
      font-size: 13px;
      font-weight: 700;
      white-space: normal;
    }

    .teacher-results-primary-btn {
      background: #2563eb;
      color: #fff;
    }

    .teacher-results-primary-btn:hover {
      background: #1d4ed8;
    }

    .teacher-results-secondary-btn {
      background: #f1f5f9;
      color: #334155;
    }

    .teacher-results-secondary-btn:hover {
      background: #e2e8f0;
    }

    .teacher-results-icon-btn,
    .teacher-results-small-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 8px;
      background: #f1f5f9;
    }

    .teacher-results-icon-btn {
      width: 34px;
      height: 34px;
    }

    .teacher-results-small-btn {
      width: 34px;
      height: 34px;
    }

    .teacher-results-icon-btn:hover,
    .teacher-results-small-btn:hover {
      background: #e2e8f0;
    }

    .teacher-results-icon-btn.danger,
    .teacher-results-small-btn.danger {
      color: #dc2626;
    }

    .teacher-results-remove-btn {
      min-height: 38px;
      padding: 8px 12px;
      border-radius: 8px;
      background: #fee2e2;
      color: #b91c1c;
      font-size: 12px;
      font-weight: 700;
    }

    /* ================================
       STATS
    ================================= */

    .teacher-results-stats-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
      margin-bottom: 20px;
    }

    .teacher-results-stat-card {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 2px 10px rgba(15, 23, 42, .04);
    }

    .teacher-results-stat-icon {
      width: 44px;
      height: 44px;
      flex: 0 0 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #eff6ff;
      font-size: 20px;
    }

    .teacher-results-stat-card span {
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
      color: #64748b;
    }

    .teacher-results-stat-card strong {
      display: block;
      font-size: 22px;
      line-height: 1.2;
      color: #0f172a;
    }

    /* ================================
       SECTION CARD
    ================================= */

    .teacher-results-section-card {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      padding: 22px;
      margin-bottom: 20px;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 2px 12px rgba(15, 23, 42, .04);
    }

    .teacher-results-section-header {
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 20px;
    }

    .teacher-results-section-header > div {
      min-width: 0;
      flex: 1 1 auto;
    }

    .teacher-results-section-header h2 {
      margin: 0;
      font-size: 20px;
      line-height: 1.35;
      color: #0f172a;
      overflow-wrap: anywhere;
    }

    .teacher-results-section-header p {
      margin: 6px 0 0;
      font-size: 13px;
      line-height: 1.55;
      color: #64748b;
      overflow-wrap: anywhere;
    }

    /* ================================
       EXAM CARDS
    ================================= */

    .teacher-results-exam-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .teacher-results-exam-card {
      min-width: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      background: #fff;
    }

    .teacher-results-exam-card-top {
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 16px 16px 0;
    }

    .teacher-results-exam-icon {
      width: 42px;
      height: 42px;
      flex: 0 0 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #eff6ff;
      font-size: 19px;
    }

    .teacher-results-exam-actions {
      display: flex;
      align-items: center;
      gap: 7px;
      flex-wrap: wrap;
    }

    .teacher-results-exam-card-body {
      min-width: 0;
      padding: 16px;
      flex: 1 1 auto;
    }

    .teacher-results-exam-card-body h3 {
      margin: 0;
      font-size: 17px;
      line-height: 1.35;
      color: #0f172a;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .teacher-results-exam-meta {
      margin: 6px 0 14px;
      font-size: 13px;
      line-height: 1.45;
      color: #64748b;
      overflow-wrap: anywhere;
    }

    .teacher-results-exam-info {
      min-width: 0;
      display: grid;
      gap: 8px;
      margin-bottom: 18px;
    }

    .teacher-results-exam-info span {
      min-width: 0;
      font-size: 12px;
      line-height: 1.45;
      color: #475569;
      overflow-wrap: anywhere;
    }

    .teacher-results-progress {
      min-width: 0;
    }

    .teacher-results-progress-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 7px;
      font-size: 11px;
      color: #64748b;
    }

    .teacher-results-progress-label strong {
      flex: 0 0 auto;
      color: #334155;
    }

    .teacher-results-progress-track {
      width: 100%;
      height: 7px;
      overflow: hidden;
      border-radius: 20px;
      background: #e2e8f0;
    }

    .teacher-results-progress-bar {
      height: 100%;
      min-width: 0;
      border-radius: inherit;
      background: #2563eb;
    }

    .teacher-results-open-btn {
      width: calc(100% - 32px);
      min-height: 40px;
      margin: 0 16px 16px;
      padding: 9px 12px;
      border: 0;
      border-radius: 8px;
      background: #eff6ff;
      color: #2563eb;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }

    .teacher-results-open-btn:hover {
      background: #dbeafe;
    }

    /* ================================
       EMPTY
    ================================= */

    .teacher-results-empty-state {
      width: 100%;
      padding: 45px 20px;
      text-align: center;
    }

    .teacher-results-empty-state.small {
      padding: 35px 20px;
    }

    .teacher-results-empty-icon {
      width: 56px;
      height: 56px;
      margin: 0 auto 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      background: #f1f5f9;
      font-size: 24px;
    }

    .teacher-results-empty-state h3 {
      margin: 0;
      font-size: 17px;
      color: #0f172a;
    }

    .teacher-results-empty-state p {
      max-width: 520px;
      margin: 7px auto 18px;
      font-size: 13px;
      line-height: 1.6;
      color: #64748b;
    }

    /* ================================
       FORM
    ================================= */

    .teacher-results-form-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .teacher-results-form-group {
      min-width: 0;
    }

    .teacher-results-form-group.results-full {
      grid-column: 1 / -1;
    }

    .teacher-results-form-group label,
    .teacher-results-mark-input label {
      display: block;
      margin-bottom: 7px;
      font-size: 12px;
      font-weight: 700;
      line-height: 1.4;
      color: #334155;
      overflow-wrap: anywhere;
    }

    .teacher-results-page input,
    .teacher-results-page select {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      height: 42px;
      padding: 9px 11px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      outline: none;
      background: #fff;
      color: #0f172a;
      font-size: 13px;
    }

    .teacher-results-page input:focus,
    .teacher-results-page select:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, .10);
    }

    .teacher-results-subject-section,
    .teacher-results-marks-section {
      width: 100%;
      min-width: 0;
      margin-top: 24px;
      padding-top: 22px;
      border-top: 1px solid #e2e8f0;
    }

    .teacher-results-subject-header {
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 16px;
    }

    .teacher-results-subject-header > div {
      min-width: 0;
    }

    .teacher-results-subject-header h3 {
      margin: 0;
      font-size: 16px;
      color: #0f172a;
    }

    .teacher-results-subject-header p {
      margin: 5px 0 0;
      font-size: 12px;
      line-height: 1.5;
      color: #64748b;
    }

    .teacher-results-subject-row {
      width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: 38px minmax(0, 1fr) auto;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }

    .teacher-results-subject-number {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: #f1f5f9;
      color: #475569;
      font-size: 12px;
      font-weight: 700;
    }

    .teacher-results-form-actions {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 25px;
    }

    /* ================================
       TOOLBAR
    ================================= */

    .teacher-results-toolbar {
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 18px;
    }

    .teacher-results-search-box {
      min-width: 0;
      flex: 1 1 auto;
      max-width: 520px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 11px;
      border: 1px solid #cbd5e1;
      border-radius: 9px;
      background: #fff;
    }

    .teacher-results-search-box span {
      flex: 0 0 auto;
    }

    .teacher-results-search-box input {
      height: 40px;
      border: 0;
      box-shadow: none;
      padding-left: 0;
    }

    .teacher-results-search-box input:focus {
      border: 0;
      box-shadow: none;
    }

    /* ================================
       SUMMARY
    ================================= */

    .teacher-results-summary-row {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
      margin-bottom: 18px;
    }

    .teacher-results-summary-row > div {
      min-width: 0;
      padding: 13px;
      border: 1px solid #e2e8f0;
      border-radius: 9px;
      background: #f8fafc;
    }

    .teacher-results-summary-row strong {
      display: block;
      margin-bottom: 3px;
      font-size: 18px;
      color: #0f172a;
    }

    .teacher-results-summary-row span {
      display: block;
      font-size: 11px;
      color: #64748b;
      overflow-wrap: anywhere;
    }

    /* ================================
       TABLE
    ================================= */

    .teacher-results-table-wrapper {
      width: 100%;
      max-width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
    }

    .teacher-results-table {
      width: 100%;
      min-width: 900px;
      border-collapse: collapse;
      background: #fff;
    }

    .teacher-results-table th,
    .teacher-results-table td {
      padding: 12px 11px;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
      vertical-align: middle;
      white-space: nowrap;
      font-size: 12px;
    }

    .teacher-results-table th {
      background: #f8fafc;
      color: #475569;
      font-size: 11px;
      font-weight: 700;
    }

    .teacher-results-table td {
      color: #334155;
    }

    .teacher-results-table tbody tr:last-child td {
      border-bottom: 0;
    }

    .teacher-results-student-cell {
      min-width: 170px;
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .teacher-results-avatar {
      width: 34px;
      height: 34px;
      flex: 0 0 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #dbeafe;
      color: #1d4ed8;
      font-size: 12px;
      font-weight: 800;
    }

    .teacher-results-student-cell > div:last-child {
      min-width: 0;
    }

    .teacher-results-student-cell strong {
      display: block;
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #0f172a;
    }

    .teacher-results-student-cell small {
      display: block;
      max-width: 180px;
      margin-top: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 10px;
      color: #64748b;
    }

    .teacher-results-status {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 66px;
      min-height: 26px;
      padding: 4px 9px;
      border-radius: 20px;
      font-size: 10px;
      font-weight: 700;
    }

    .teacher-results-status.pass {
      background: #dcfce7;
      color: #15803d;
    }

    .teacher-results-status.fail {
      background: #fee2e2;
      color: #b91c1c;
    }

    .teacher-results-status.pending {
      background: #fef3c7;
      color: #a16207;
    }

    .teacher-results-row-actions {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    /* ================================
       MARK INPUTS
    ================================= */

    .teacher-results-marks-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .teacher-results-mark-input {
      min-width: 0;
      padding: 13px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      background: #f8fafc;
    }

    .teacher-results-mark-field {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .teacher-results-mark-field input {
      min-width: 0;
      flex: 1 1 auto;
    }

    .teacher-results-mark-field span {
      flex: 0 0 auto;
      font-size: 11px;
      color: #64748b;
      white-space: nowrap;
    }

    /* ================================
       LIVE SUMMARY
    ================================= */

    .teacher-results-live-summary {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 20px;
    }

    .teacher-results-live-summary > div {
      min-width: 0;
      padding: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      background: #f8fafc;
    }

    .teacher-results-live-summary span {
      display: block;
      margin-bottom: 5px;
      font-size: 11px;
      color: #64748b;
    }

    .teacher-results-live-summary strong {
      display: block;
      font-size: 19px;
      color: #0f172a;
    }

    /* ================================
       TABLET
    ================================= */

    @media (max-width: 1200px) {

      .teacher-results-exam-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .teacher-results-stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .teacher-results-marks-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

    }

    /* ================================
       MOBILE
    ================================= */

    @media (max-width: 768px) {

      .teacher-results-page {
        width: 100%;
        max-width: 100%;
        padding: 16px;
        overflow-x: hidden;
      }

      .teacher-results-header {
        flex-direction: column;
        align-items: stretch;
        gap: 15px;
      }

      .teacher-results-header-actions {
        width: 100%;
        justify-content: stretch;
      }

      .teacher-results-header-actions button {
        flex: 1 1 180px;
      }

      .teacher-results-header h1 {
        font-size: 23px;
      }

      .teacher-results-section-card {
        padding: 16px;
        border-radius: 11px;
      }

      .teacher-results-section-header {
        flex-direction: column;
        align-items: stretch;
      }

      .teacher-results-section-header > button {
        width: 100%;
      }

      .teacher-results-stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      .teacher-results-stat-card {
        padding: 13px;
        gap: 10px;
      }

      .teacher-results-stat-icon {
        width: 38px;
        height: 38px;
        flex-basis: 38px;
        font-size: 17px;
      }

      .teacher-results-stat-card strong {
        font-size: 18px;
      }

      .teacher-results-exam-grid {
        grid-template-columns: 1fr;
      }

      .teacher-results-toolbar {
        flex-direction: column;
        align-items: stretch;
      }

      .teacher-results-search-box {
        width: 100%;
        max-width: none;
      }

      .teacher-results-toolbar > button {
        width: 100%;
      }

      .teacher-results-summary-row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .teacher-results-form-grid {
        grid-template-columns: 1fr;
      }

      .teacher-results-form-group.results-full {
        grid-column: auto;
      }

      .teacher-results-subject-header {
        flex-direction: column;
        align-items: stretch;
      }

      .teacher-results-subject-header button {
        width: 100%;
      }

      .teacher-results-subject-row {
        grid-template-columns: 34px minmax(0, 1fr);
      }

      .teacher-results-subject-row .teacher-results-remove-btn {
        grid-column: 2;
        width: 100%;
      }

      .teacher-results-marks-grid {
        grid-template-columns: 1fr;
      }

      .teacher-results-live-summary {
        grid-template-columns: 1fr;
      }

      .teacher-results-form-actions {
        flex-direction: column-reverse;
        align-items: stretch;
      }

      .teacher-results-form-actions button {
        width: 100%;
      }

    }

    /* ================================
       SMALL MOBILE
    ================================= */

    @media (max-width: 480px) {

      .teacher-results-page {
        padding: 12px;
      }

      .teacher-results-header h1 {
        font-size: 21px;
      }

      .teacher-results-header p {
        font-size: 12px;
      }

      .teacher-results-stats-grid {
        grid-template-columns: 1fr;
      }

      .teacher-results-stat-card {
        min-height: 65px;
      }

      .teacher-results-section-card {
        padding: 13px;
      }

      .teacher-results-summary-row {
        grid-template-columns: 1fr 1fr;
      }

      .teacher-results-exam-card-body {
        padding: 13px;
      }

      .teacher-results-exam-card-top {
        padding: 13px 13px 0;
      }

      .teacher-results-open-btn {
        width: calc(100% - 26px);
        margin: 0 13px 13px;
      }

      .teacher-results-subject-row {
        grid-template-columns: 30px minmax(0, 1fr);
        gap: 8px;
      }

      .teacher-results-subject-number {
        width: 30px;
        height: 30px;
      }

    }
  `;

  document.head.appendChild(style);
}

/* =========================================================
   STORAGE
========================================================= */

function getData() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    );

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(
      "Unable to read result data:",
      error
    );

    return [];
  }
}

function saveData(data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

function createId() {
  return (
    Date.now() +
    Math.floor(Math.random() * 10000)
  );
}

/* =========================================================
   HELPERS
========================================================= */

function getExam() {
  const exams = getData();

  return exams.find(
    exam =>
      String(exam.id) ===
      String(selectedExamId)
  );
}

function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B+";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C";
  if (percentage >= 40) return "D";

  return "F";
}

function getResultStatus(student, exam) {
  if (!exam.subjects.length) {
    return "Pending";
  }

  const hasMarks =
    exam.subjects.some(subject => {
      const value =
        student.marks?.[subject];

      return (
        value !== undefined &&
        value !== null &&
        value !== ""
      );
    });

  if (!hasMarks) {
    return "Pending";
  }

  const total =
    calculateTotal(student, exam);

  const percentage =
    calculatePercentage(
      student,
      exam
    );

  const failedSubject =
    exam.subjects.some(subject => {
      const raw =
        student.marks?.[subject];

      if (
        raw === "" ||
        raw === undefined ||
        raw === null
      ) {
        return false;
      }

      const marks = Number(raw);

      return (
        !Number.isNaN(marks) &&
        marks < exam.passMarks
      );
    });

  if (
    failedSubject ||
    percentage < 40
  ) {
    return "Fail";
  }

  return "Pass";
}

function calculateTotal(student, exam) {
  return exam.subjects.reduce(
    (total, subject) => {
      const value =
        student.marks?.[subject];

      if (
        value === "" ||
        value === undefined ||
        value === null
      ) {
        return total;
      }

      const number =
        Number(value);

      return Number.isNaN(number)
        ? total
        : total + number;
    },
    0
  );
}

function calculatePercentage(
  student,
  exam
) {
  const total =
    calculateTotal(student, exam);

  if (!exam.subjects.length) {
    return 0;
  }

  const maximumMarks =
    exam.subjects.length *
    exam.maxMarks;

  return maximumMarks
    ? (total / maximumMarks) * 100
    : 0;
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll(
      "'",
      "&#039;"
    );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export function TeacherResults() {
  loadTeacherResultsCSS();

  selectedExamId = null;
  searchText = "";
  editingStudentId = null;

  return `
    <main class="teacher-results-page">

      <div class="teacher-results-header">

        <div class="teacher-results-header-content">

          <span class="teacher-results-eyebrow">
            ACADEMIC MANAGEMENT
          </span>

          <h1>Exam & Results</h1>

          <p>
            Create examinations, manage students and enter
            subject-wise marks.
          </p>

        </div>

        <div class="teacher-results-header-actions">

          <button
            type="button"
            class="teacher-results-secondary-btn"
            data-action="back-dashboard"
          >
            ← Back to Dashboard
          </button>

          <button
            type="button"
            class="teacher-results-primary-btn"
            data-action="create-exam"
          >
            + Create New Exam
          </button>

        </div>

      </div>

      <div id="resultsContent">
        ${renderOverview()}
      </div>

    </main>
  `;
}

/* =========================================================
   OVERVIEW
========================================================= */

function renderOverview() {
  const exams = getData();

  const totalStudents =
    exams.reduce(
      (total, exam) =>
        total +
        (exam.students?.length || 0),
      0
    );

  const totalSubjects =
    exams.reduce(
      (total, exam) =>
        total +
        (exam.subjects?.length || 0),
      0
    );

  const completedResults =
    exams.reduce(
      (total, exam) =>
        total +
        (exam.students || []).filter(
          student =>
            getResultStatus(
              student,
              exam
            ) !== "Pending"
        ).length,
      0
    );

  return `
    <div class="teacher-results-stats-grid">

      <div class="teacher-results-stat-card">
        <div class="teacher-results-stat-icon">📋</div>
        <div>
          <span>Total Exams</span>
          <strong>${exams.length}</strong>
        </div>
      </div>

      <div class="teacher-results-stat-card">
        <div class="teacher-results-stat-icon">👨‍🎓</div>
        <div>
          <span>Total Students</span>
          <strong>${totalStudents}</strong>
        </div>
      </div>

      <div class="teacher-results-stat-card">
        <div class="teacher-results-stat-icon">📚</div>
        <div>
          <span>Total Subjects</span>
          <strong>${totalSubjects}</strong>
        </div>
      </div>

      <div class="teacher-results-stat-card">
        <div class="teacher-results-stat-icon">✅</div>
        <div>
          <span>Completed Results</span>
          <strong>${completedResults}</strong>
        </div>
      </div>

    </div>

    <div class="teacher-results-section-card">

      <div class="teacher-results-section-header">
        <div>
          <h2>Examination List</h2>
          <p>
            Select an exam to manage students and marks.
          </p>
        </div>
      </div>

      ${
        exams.length
          ? `
            <div class="teacher-results-exam-grid">
              ${exams
                .map(renderExamCard)
                .join("")}
            </div>
          `
          : renderEmptyExams()
      }

    </div>
  `;
}

/* =========================================================
   EXAM CARD
========================================================= */

function renderExamCard(exam) {
  const students =
    exam.students || [];

  const completed =
    students.filter(
      student =>
        getResultStatus(
          student,
          exam
        ) !== "Pending"
    ).length;

  const progress =
    students.length
      ? Math.min(
          100,
          (completed /
            students.length) *
            100
        )
      : 0;

  return `
    <div class="teacher-results-exam-card">

      <div class="teacher-results-exam-card-top">

        <div class="teacher-results-exam-icon">
          📑
        </div>

        <div class="teacher-results-exam-actions">

          <button
            type="button"
            class="teacher-results-icon-btn"
            title="Edit Exam"
            data-action="edit-exam"
            data-id="${exam.id}"
          >
            ✏️
          </button>

          <button
            type="button"
            class="teacher-results-icon-btn danger"
            title="Delete Exam"
            data-action="delete-exam"
            data-id="${exam.id}"
          >
            🗑️
          </button>

        </div>

      </div>

      <div class="teacher-results-exam-card-body">

        <h3>
          ${escapeHTML(exam.name)}
        </h3>

        <p class="teacher-results-exam-meta">
          ${escapeHTML(exam.className)}
          -
          ${escapeHTML(exam.section)}
        </p>

        <div class="teacher-results-exam-info">

          <span>
            📅 ${escapeHTML(exam.examDate)}
          </span>

          <span>
            📚 ${exam.subjects.length} Subjects
          </span>

          <span>
            👨‍🎓 ${students.length} Students
          </span>

        </div>

        <div class="teacher-results-progress">

          <div class="teacher-results-progress-label">
            <span>Results Completed</span>
            <strong>
              ${completed}/${students.length}
            </strong>
          </div>

          <div class="teacher-results-progress-track">
            <div
              class="teacher-results-progress-bar"
              style="width:${progress}%"
            ></div>
          </div>

        </div>

      </div>

      <button
        type="button"
        class="teacher-results-open-btn"
        data-action="open-exam"
        data-id="${exam.id}"
      >
        Manage Results →
      </button>

    </div>
  `;
}

function renderEmptyExams() {
  return `
    <div class="teacher-results-empty-state">

      <div class="teacher-results-empty-icon">
        📋
      </div>

      <h3>No examinations created</h3>

      <p>
        Create your first examination to start entering
        student results.
      </p>

      <button
        type="button"
        class="teacher-results-primary-btn"
        data-action="create-exam"
      >
        + Create New Exam
      </button>

    </div>
  `;
}

/* =========================================================
   CREATE EXAM
========================================================= */

function renderCreateExam() {
  return `
    <div class="teacher-results-section-card">

      <div class="teacher-results-section-header">

        <div>
          <h2>Create New Examination</h2>
          <p>
            Enter examination details and subjects.
          </p>
        </div>

        <button
          type="button"
          class="teacher-results-secondary-btn"
          data-action="back-overview"
        >
          ← Back
        </button>

      </div>

      <form id="createExamForm">

        <div class="teacher-results-form-grid">

          <div class="teacher-results-form-group results-full">

            <label>Exam Name *</label>

            <input
              type="text"
              name="examName"
              placeholder="Example: First Unit Test"
              required
            />

          </div>

          <div class="teacher-results-form-group">
            <label>Class *</label>

            <select name="className" required>
              <option value="">Select Class</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
          </div>

          <div class="teacher-results-form-group">
            <label>Section *</label>

            <select name="section" required>
              <option value="">Select Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </div>

          <div class="teacher-results-form-group">
            <label>Exam Date *</label>

            <input
              type="date"
              name="examDate"
              required
            />
          </div>

          <div class="teacher-results-form-group">
            <label>Maximum Marks *</label>

            <input
              type="number"
              name="maxMarks"
              value="100"
              min="1"
              required
            />
          </div>

          <div class="teacher-results-form-group">
            <label>Pass Marks *</label>

            <input
              type="number"
              name="passMarks"
              value="33"
              min="0"
              required
            />
          </div>

        </div>

        <div class="teacher-results-subject-section">

          <div class="teacher-results-subject-header">

            <div>
              <h3>Subjects</h3>
              <p>
                Add all subjects included in this examination.
              </p>
            </div>

            <button
              type="button"
              class="teacher-results-secondary-btn"
              data-action="add-subject"
            >
              + Add Subject
            </button>

          </div>

          <div id="subjectList">

            ${DEFAULT_SUBJECTS
              .map(
                (subject, index) => `
                  <div class="teacher-results-subject-row">

                    <span class="teacher-results-subject-number">
                      ${index + 1}
                    </span>

                    <input
                      type="text"
                      class="subject-input"
                      value="${escapeHTML(subject)}"
                      placeholder="Subject name"
                    />

                    <button
                      type="button"
                      class="teacher-results-remove-btn"
                      data-action="remove-subject"
                    >
                      Remove
                    </button>

                  </div>
                `
              )
              .join("")}

          </div>

        </div>

        <div class="teacher-results-form-actions">

          <button
            type="button"
            class="teacher-results-secondary-btn"
            data-action="back-overview"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="teacher-results-primary-btn"
          >
            Create Examination
          </button>

        </div>

      </form>

    </div>
  `;
}

/* =========================================================
   MARKS PAGE
========================================================= */

function renderMarksPage(exam) {
  const students =
    exam.students || [];

  const search =
    searchText
      .toLowerCase()
      .trim();

  const filteredStudents =
    students.filter(student => {
      if (!search) return true;

      return (
        String(student.name || "")
          .toLowerCase()
          .includes(search) ||
        String(student.rollNo || "")
          .toLowerCase()
          .includes(search) ||
        String(
          student.admissionNo || ""
        )
          .toLowerCase()
          .includes(search)
      );
    });

  const passed =
    students.filter(
      student =>
        getResultStatus(
          student,
          exam
        ) === "Pass"
    ).length;

  const failed =
    students.filter(
      student =>
        getResultStatus(
          student,
          exam
        ) === "Fail"
    ).length;

  const pending =
    students.filter(
      student =>
        getResultStatus(
          student,
          exam
        ) === "Pending"
    ).length;

  return `
    <div class="teacher-results-section-card">

      <div class="teacher-results-section-header">

        <div>

          <span class="teacher-results-eyebrow">
            ${escapeHTML(exam.className)}
            -
            ${escapeHTML(exam.section)}
          </span>

          <h2>
            ${escapeHTML(exam.name)}
          </h2>

          <p>
            ${escapeHTML(exam.examDate)}
            · ${exam.subjects.length} Subjects
            · ${exam.maxMarks} Marks / Subject
          </p>

        </div>

        <button
          type="button"
          class="teacher-results-secondary-btn"
          data-action="back-overview"
        >
          ← All Exams
        </button>

      </div>

      <div class="teacher-results-toolbar">

        <div class="teacher-results-search-box">

          <span>🔍</span>

          <input
            id="studentSearch"
            type="search"
            placeholder="Search student, roll no. or admission no."
            value="${escapeHTML(searchText)}"
          />

        </div>

        <button
          type="button"
          class="teacher-results-primary-btn"
          data-action="add-student"
        >
          + Add Student
        </button>

      </div>

      <div class="teacher-results-summary-row">

        <div>
          <strong>${students.length}</strong>
          <span>Total Students</span>
        </div>

        <div>
          <strong>${passed}</strong>
          <span>Passed</span>
        </div>

        <div>
          <strong>${failed}</strong>
          <span>Failed</span>
        </div>

        <div>
          <strong>${pending}</strong>
          <span>Pending</span>
        </div>

      </div>

      ${
        filteredStudents.length
          ? `
            <div class="teacher-results-table-wrapper">

              <table class="teacher-results-table">

                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Roll No.</th>
                    <th>Subjects</th>
                    <th>Total</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  ${filteredStudents
                    .map(student =>
                      renderStudentRow(
                        student,
                        exam
                      )
                    )
                    .join("")}
                </tbody>

              </table>

            </div>
          `
          : `
            <div class="teacher-results-empty-state small">

              <div class="teacher-results-empty-icon">
                👨‍🎓
              </div>

              <h3>No students found</h3>

              <p>
                Add students to this examination.
              </p>

              <button
                type="button"
                class="teacher-results-primary-btn"
                data-action="add-student"
              >
                + Add Student
              </button>

            </div>
          `
      }

    </div>
  `;
}

/* =========================================================
   STUDENT ROW
========================================================= */

function renderStudentRow(
  student,
  exam
) {
  const total =
    calculateTotal(
      student,
      exam
    );

  const percentage =
    calculatePercentage(
      student,
      exam
    );

  const grade =
    getGrade(percentage);

  const status =
    getResultStatus(
      student,
      exam
    );

  const enteredSubjects =
    exam.subjects.filter(
      subject => {
        const value =
          student.marks?.[subject];

        return (
          value !== "" &&
          value !== undefined &&
          value !== null
        );
      }
    ).length;

  const statusClass =
    status === "Pass"
      ? "pass"
      : status === "Fail"
      ? "fail"
      : "pending";

  return `
    <tr>

      <td>

        <div class="teacher-results-student-cell">

          <div class="teacher-results-avatar">
            ${escapeHTML(
              String(
                student.name || "?"
              )
                .charAt(0)
                .toUpperCase()
            )}
          </div>

          <div>

            <strong>
              ${escapeHTML(
                student.name
              )}
            </strong>

            <small>
              ${escapeHTML(
                student.admissionNo ||
                  "No Admission No."
              )}
            </small>

          </div>

        </div>

      </td>

      <td>
        ${escapeHTML(
          student.rollNo
        )}
      </td>

      <td>
        ${enteredSubjects}/${exam.subjects.length}
      </td>

      <td>
        ${total}/${
          exam.subjects.length *
          exam.maxMarks
        }
      </td>

      <td>
        ${percentage.toFixed(2)}%
      </td>

      <td>
        <strong>${grade}</strong>
      </td>

      <td>
        <span
          class="teacher-results-status ${statusClass}"
        >
          ${status}
        </span>
      </td>

      <td>

        <div class="teacher-results-row-actions">

          <button
            type="button"
            class="teacher-results-small-btn"
            title="Enter/Edit Marks"
            data-action="marks"
            data-student-id="${student.id}"
          >
            📝
          </button>

          <button
            type="button"
            class="teacher-results-small-btn"
            title="Edit Student"
            data-action="edit-student"
            data-student-id="${student.id}"
          >
            ✏️
          </button>

          <button
            type="button"
            class="teacher-results-small-btn"
            title="Download Report Card"
            data-action="download-pdf"
            data-student-id="${student.id}"
          >
            📄
          </button>

          <button
            type="button"
            class="teacher-results-small-btn danger"
            title="Delete Student"
            data-action="delete-student"
            data-student-id="${student.id}"
          >
            🗑️
          </button>

        </div>

      </td>

    </tr>
  `;
}

/* =========================================================
   STUDENT FORM
========================================================= */

function renderStudentForm(
  student = null
) {
  const exam = getExam();

  if (!exam) return;

  editingStudentId =
    student?.id || null;

  const marks =
    student?.marks || {};

  const container =
    document.getElementById(
      "resultsContent"
    );

  if (!container) return;

  container.innerHTML = `
    <div class="teacher-results-section-card">

      <div class="teacher-results-section-header">

        <div>

          <span class="teacher-results-eyebrow">
            ${escapeHTML(exam.name)}
          </span>

          <h2>
            ${
              student
                ? "Edit Student"
                : "Add Student"
            }
          </h2>

          <p>
            Enter student details and subject-wise marks.
          </p>

        </div>

        <button
          type="button"
          class="teacher-results-secondary-btn"
          data-action="back-marks"
        >
          ← Back
        </button>

      </div>

      <form id="studentForm">

        <div class="teacher-results-form-grid">

          <div class="teacher-results-form-group">

            <label>Student Name *</label>

            <input
              type="text"
              name="studentName"
              value="${escapeHTML(
                student?.name || ""
              )}"
              placeholder="Enter student name"
              required
            />

          </div>

          <div class="teacher-results-form-group">

            <label>Roll Number *</label>

            <input
              type="text"
              name="rollNo"
              value="${escapeHTML(
                student?.rollNo || ""
              )}"
              placeholder="Example: 101"
              required
            />

          </div>

          <div class="teacher-results-form-group">

            <label>Father Name</label>

            <input
              type="text"
              name="fatherName"
              value="${escapeHTML(
                student?.fatherName || ""
              )}"
              placeholder="Father name"
            />

          </div>

          <div class="teacher-results-form-group">

            <label>Mother Name</label>

            <input
              type="text"
              name="motherName"
              value="${escapeHTML(
                student?.motherName || ""
              )}"
              placeholder="Mother name"
            />

          </div>

          <div class="teacher-results-form-group">

            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              value="${escapeHTML(
                student?.dob || ""
              )}"
            />

          </div>

          <div class="teacher-results-form-group">

            <label>Admission Number</label>

            <input
              type="text"
              name="admissionNo"
              value="${escapeHTML(
                student?.admissionNo || ""
              )}"
              placeholder="Admission number"
            />

          </div>

        </div>

        <div class="teacher-results-marks-section">

          <div class="teacher-results-subject-header">

            <div>
              <h3>Subject-wise Marks</h3>
              <p>
                Enter marks out of
                ${exam.maxMarks}
                for each subject.
              </p>
            </div>

          </div>

          <div class="teacher-results-marks-grid">

            ${exam.subjects
              .map(subject => {
                const value =
                  marks[subject] ===
                  undefined
                    ? ""
                    : marks[subject];

                return `
                  <div class="teacher-results-mark-input">

                    <label>
                      ${escapeHTML(
                        subject
                      )}
                    </label>

                    <div class="teacher-results-mark-field">

                      <input
                        type="number"
                        name="mark_${encodeURIComponent(
                          subject
                        )}"
                        value="${escapeHTML(
                          value
                        )}"
                        min="0"
                        max="${exam.maxMarks}"
                        step="1"
                        placeholder="0"
                      />

                      <span>
                        / ${exam.maxMarks}
                      </span>

                    </div>

                  </div>
                `;
              })
              .join("")}

          </div>

        </div>

        <div class="teacher-results-live-summary">

          <div>
            <span>Total Marks</span>
            <strong id="liveTotal">0</strong>
          </div>

          <div>
            <span>Percentage</span>
            <strong id="livePercentage">
              0%
            </strong>
          </div>

          <div>
            <span>Grade</span>
            <strong id="liveGrade">F</strong>
          </div>

        </div>

        <div class="teacher-results-form-actions">

          <button
            type="button"
            class="teacher-results-secondary-btn"
            data-action="back-marks"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="teacher-results-primary-btn"
          >
            ${
              student
                ? "Update Student"
                : "Save Student"
            }
          </button>

        </div>

      </form>

    </div>
  `;

  updateLiveSummary();
}

/* =========================================================
   LIVE MARKS
========================================================= */

function updateLiveSummary() {
  const exam = getExam();

  if (!exam) return;

  let total = 0;

  exam.subjects.forEach(
    subject => {
      const input =
        document.querySelector(
          `[name="mark_${encodeURIComponent(
            subject
          )}"]`
        );

      if (
        input &&
        input.value !== ""
      ) {
        const number =
          Number(input.value);

        if (!Number.isNaN(number)) {
          total += number;
        }
      }
    }
  );

  const percentage =
    exam.subjects.length
      ? (
          total /
          (
            exam.subjects.length *
            exam.maxMarks
          )
        ) * 100
      : 0;

  const totalElement =
    document.getElementById(
      "liveTotal"
    );

  const percentageElement =
    document.getElementById(
      "livePercentage"
    );

  const gradeElement =
    document.getElementById(
      "liveGrade"
    );

  if (totalElement) {
    totalElement.textContent =
      total;
  }

  if (percentageElement) {
    percentageElement.textContent =
      `${percentage.toFixed(2)}%`;
  }

  if (gradeElement) {
    gradeElement.textContent =
      getGrade(percentage);
  }
}

/* =========================================================
   REFRESH
========================================================= */

function refreshPage() {
  const container =
    document.getElementById(
      "resultsContent"
    );

  if (!container) return;

  if (selectedExamId) {
    const exam = getExam();

    if (exam) {
      container.innerHTML =
        renderMarksPage(exam);

      return;
    }

    selectedExamId = null;
  }

  container.innerHTML =
    renderOverview();
}

/* =========================================================
   CREATE EXAM
========================================================= */

function handleCreateExam(form) {
  const formData =
    new FormData(form);

  const subjects = [
    ...document.querySelectorAll(
      ".subject-input"
    )
  ]
    .map(input =>
      input.value.trim()
    )
    .filter(Boolean);

  if (!subjects.length) {
    alert(
      "Please add at least one subject."
    );
    return;
  }

  const maxMarks =
    Number(
      formData.get("maxMarks")
    );

  const passMarks =
    Number(
      formData.get("passMarks")
    );

  if (passMarks > maxMarks) {
    alert(
      "Pass marks cannot be greater than maximum marks."
    );
    return;
  }

  const exams = getData();

  exams.push({
    id: createId(),

    name:
      formData
        .get("examName")
        .trim(),

    className:
      formData.get(
        "className"
      ),

    section:
      formData.get(
        "section"
      ),

    examDate:
      formData.get(
        "examDate"
      ),

    maxMarks,

    passMarks,

    subjects,

    students: []
  });

  saveData(exams);

  selectedExamId = null;

  refreshPage();

  alert(
    "Examination created successfully."
  );
}

/* =========================================================
   STUDENT SUBMIT
========================================================= */

function handleStudentSubmit(form) {
  const exam = getExam();

  if (!exam) return;

  const formData =
    new FormData(form);

  const studentData = {
    name:
      formData
        .get("studentName")
        .trim(),

    rollNo:
      formData
        .get("rollNo")
        .trim(),

    fatherName:
      formData
        .get("fatherName")
        ?.trim() || "",

    motherName:
      formData
        .get("motherName")
        ?.trim() || "",

    dob:
      formData.get("dob") || "",

    admissionNo:
      formData
        .get("admissionNo")
        ?.trim() || "",

    marks: {}
  };

  exam.subjects.forEach(
    subject => {
      const input =
        form.querySelector(
          `[name="mark_${encodeURIComponent(
            subject
          )}"]`
        );

      studentData.marks[
        subject
      ] =
        input &&
        input.value !== ""
          ? Number(input.value)
          : "";
    }
  );

  const exams = getData();

  const examIndex =
    exams.findIndex(
      item =>
        String(item.id) ===
        String(exam.id)
    );

  if (examIndex === -1) return;

  if (editingStudentId) {
    const studentIndex =
      exams[
        examIndex
      ].students.findIndex(
        student =>
          String(student.id) ===
          String(editingStudentId)
      );

    if (studentIndex !== -1) {
      exams[
        examIndex
      ].students[
        studentIndex
      ] = {
        ...exams[
          examIndex
        ].students[
          studentIndex
        ],
        ...studentData
      };
    }
  } else {
    exams[
      examIndex
    ].students.push({
      id: createId(),
      ...studentData
    });
  }

  saveData(exams);

  editingStudentId = null;

  refreshPage();
}

/* =========================================================
   SUBJECT MANAGEMENT
========================================================= */

function addSubject() {
  const list =
    document.getElementById(
      "subjectList"
    );

  if (!list) return;

  const rows =
    list.querySelectorAll(
      ".teacher-results-subject-row"
    );

  const row =
    document.createElement(
      "div"
    );

  row.className =
    "teacher-results-subject-row";

  row.innerHTML = `
    <span class="teacher-results-subject-number">
      ${rows.length + 1}
    </span>

    <input
      type="text"
      class="subject-input"
      placeholder="Subject name"
    />

    <button
      type="button"
      class="teacher-results-remove-btn"
      data-action="remove-subject"
    >
      Remove
    </button>
  `;

  list.appendChild(row);

  updateSubjectNumbers();
}

function removeSubject(button) {
  const list =
    document.getElementById(
      "subjectList"
    );

  if (!list) return;

  const rows =
    list.querySelectorAll(
      ".teacher-results-subject-row"
    );

  if (rows.length <= 1) {
    alert(
      "At least one subject is required."
    );
    return;
  }

  button
    .closest(
      ".teacher-results-subject-row"
    )
    ?.remove();

  updateSubjectNumbers();
}

function updateSubjectNumbers() {
  document
    .querySelectorAll(
      ".teacher-results-subject-row"
    )
    .forEach(
      (row, index) => {
        const number =
          row.querySelector(
            ".teacher-results-subject-number"
          );

        if (number) {
          number.textContent =
            index + 1;
        }
      }
    );
}

/* =========================================================
   DELETE EXAM
========================================================= */

function deleteExam(id) {
  const exams = getData();

  const exam =
    exams.find(
      item =>
        String(item.id) ===
        String(id)
    );

  if (!exam) return;

  const confirmed =
    confirm(
      `Delete "${exam.name}"?\n\nAll students and marks of this exam will also be deleted.`
    );

  if (!confirmed) return;

  saveData(
    exams.filter(
      item =>
        String(item.id) !==
        String(id)
    )
  );

  selectedExamId = null;

  refreshPage();
}

/* =========================================================
   DELETE STUDENT
========================================================= */

function deleteStudent(studentId) {
  const exam = getExam();

  if (!exam) return;

  const student =
    exam.students.find(
      item =>
        String(item.id) ===
        String(studentId)
    );

  if (!student) return;

  const confirmed =
    confirm(
      `Delete student "${student.name}"?`
    );

  if (!confirmed) return;

  exam.students =
    exam.students.filter(
      item =>
        String(item.id) !==
        String(studentId)
    );

  const exams = getData();

  const index =
    exams.findIndex(
      item =>
        String(item.id) ===
        String(exam.id)
    );

  if (index !== -1) {
    exams[index] = exam;
  }

  saveData(exams);

  refreshPage();
}

/* =========================================================
   EDIT EXAM
========================================================= */

function editExam(id) {
  const exams = getData();

  const exam =
    exams.find(
      item =>
        String(item.id) ===
        String(id)
    );

  if (!exam) return;

  const newName =
    prompt(
      "Enter exam name:",
      exam.name
    );

  if (newName === null) return;

  const name =
    newName.trim();

  if (!name) {
    alert(
      "Exam name cannot be empty."
    );
    return;
  }

  exam.name = name;

  saveData(exams);

  refreshPage();
}

/* =========================================================
   PDF
========================================================= */

function downloadStudentPDF(
  studentId
) {
  const exam = getExam();

  if (!exam) return;

  const student =
    exam.students.find(
      item =>
        String(item.id) ===
        String(studentId)
    );

  if (!student) return;

  const doc = new jsPDF();

  const pageWidth =
    doc.internal.pageSize.getWidth();

  doc.setFontSize(18);
  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.text(
    "GOVERNMENT SCHOOL",
    pageWidth / 2,
    20,
    { align: "center" }
  );

  doc.setFontSize(10);
  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.text(
    "School Education Department",
    pageWidth / 2,
    27,
    { align: "center" }
  );

  doc.text(
    "Academic Session: 2026-27",
    pageWidth / 2,
    33,
    { align: "center" }
  );

  doc.line(
    14,
    38,
    pageWidth - 14,
    38
  );

  doc.setFontSize(15);
  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.text(
    "STUDENT REPORT CARD",
    pageWidth / 2,
    49,
    { align: "center" }
  );

  doc.setFontSize(10);
  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.text(
    `Exam: ${exam.name}`,
    14,
    60
  );

  doc.text(
    `Class: ${exam.className} - ${exam.section}`,
    14,
    67
  );

  doc.text(
    `Exam Date: ${exam.examDate}`,
    14,
    74
  );

  doc.text(
    `Student Name: ${student.name}`,
    110,
    60
  );

  doc.text(
    `Roll No.: ${student.rollNo}`,
    110,
    67
  );

  doc.text(
    `Admission No.: ${
      student.admissionNo || "-"
    }`,
    110,
    74
  );

  doc.text(
    `Father Name: ${
      student.fatherName || "-"
    }`,
    14,
    82
  );

  doc.text(
    `Mother Name: ${
      student.motherName || "-"
    }`,
    110,
    82
  );

  const tableRows =
    exam.subjects.map(
      (subject, index) => {
        const marks =
          student.marks?.[subject];

        const empty =
          marks === "" ||
          marks === undefined ||
          marks === null;

        const displayMarks =
          empty
            ? "-"
            : String(marks);

        const percentage =
          empty
            ? "-"
            : (
                (Number(marks) /
                  exam.maxMarks) *
                100
              ).toFixed(2) + "%";

        const result =
          empty
            ? "Pending"
            : Number(marks) >=
              exam.passMarks
            ? "Pass"
            : "Fail";

        return [
          index + 1,
          subject,
          displayMarks,
          exam.maxMarks,
          percentage,
          result
        ];
      }
    );

  autoTable(doc, {
    startY: 90,

    head: [[
      "S.No.",
      "Subject",
      "Marks",
      "Max Marks",
      "Percentage",
      "Result"
    ]],

    body: tableRows,

    theme: "grid",

    styles: {
      fontSize: 9,
      cellPadding: 4
    },

    headStyles: {
      fontStyle: "bold"
    }
  });

  const finalY =
    doc.lastAutoTable.finalY + 12;

  const total =
    calculateTotal(
      student,
      exam
    );

  const maximum =
    exam.subjects.length *
    exam.maxMarks;

  const percentage =
    calculatePercentage(
      student,
      exam
    );

  const grade =
    getGrade(percentage);

  const status =
    getResultStatus(
      student,
      exam
    );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(11);

  doc.text(
    `Total Marks: ${total} / ${maximum}`,
    14,
    finalY
  );

  doc.text(
    `Percentage: ${percentage.toFixed(2)}%`,
    14,
    finalY + 8
  );

  doc.text(
    `Grade: ${grade}`,
    14,
    finalY + 16
  );

  doc.text(
    `Result: ${status}`,
    14,
    finalY + 24
  );

  const signatureY =
    finalY + 55;

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(9);

  doc.line(
    18,
    signatureY,
    65,
    signatureY
  );

  doc.text(
    "Class Teacher",
    18,
    signatureY + 6
  );

  doc.line(
    pageWidth - 65,
    signatureY,
    pageWidth - 18,
    signatureY
  );

  doc.text(
    "Principal",
    pageWidth - 65,
    signatureY + 6
  );

  doc.setFontSize(8);

  doc.text(
    "This is a computer generated report card.",
    pageWidth / 2,
    285,
    { align: "center" }
  );

  const safeName =
    String(student.name || "student")
      .replace(
        /[^a-z0-9]/gi,
        "_"
      )
      .toLowerCase();

  doc.save(
    `${safeName}_report_card.pdf`
  );
}

/* =========================================================
   EVENTS
========================================================= */

export function setupTeacherResults() {
  if (
    window.teacherResultsEventsReady
  ) {
    return;
  }

  window.teacherResultsEventsReady =
    true;

  loadTeacherResultsCSS();

  document.addEventListener(
    "click",
    event => {
      const button =
        event.target.closest(
          "[data-action]"
        );

      if (!button) return;

      const action =
        button.dataset.action;

      if (
        action ===
        "back-dashboard"
      ) {
        if (
          typeof window.navigateTeacherPage ===
          "function"
        ) {
          window.navigateTeacherPage(
            "dashboard"
          );
        }

        return;
      }

      if (
        action ===
        "create-exam"
      ) {
        const container =
          document.getElementById(
            "resultsContent"
          );

        if (container) {
          container.innerHTML =
            renderCreateExam();
        }

        return;
      }

      if (
        action ===
        "back-overview"
      ) {
        selectedExamId = null;
        searchText = "";
        editingStudentId = null;

        refreshPage();
        return;
      }

      if (
        action ===
        "open-exam"
      ) {
        selectedExamId =
          button.dataset.id;

        searchText = "";

        refreshPage();
        return;
      }

      if (
        action ===
        "edit-exam"
      ) {
        editExam(
          button.dataset.id
        );
        return;
      }

      if (
        action ===
        "delete-exam"
      ) {
        deleteExam(
          button.dataset.id
        );
        return;
      }

      if (
        action ===
        "add-subject"
      ) {
        addSubject();
        return;
      }

      if (
        action ===
        "remove-subject"
      ) {
        removeSubject(button);
        return;
      }

      if (
        action ===
        "add-student"
      ) {
        renderStudentForm();
        return;
      }

      if (
        action ===
        "edit-student"
      ) {
        const exam = getExam();

        if (!exam) return;

        const student =
          exam.students.find(
            item =>
              String(item.id) ===
              String(
                button.dataset.studentId
              )
          );

        if (student) {
          renderStudentForm(
            student
          );
        }

        return;
      }

      if (
        action ===
        "marks"
      ) {
        const exam = getExam();

        if (!exam) return;

        const student =
          exam.students.find(
            item =>
              String(item.id) ===
              String(
                button.dataset.studentId
              )
          );

        if (student) {
          renderStudentForm(
            student
          );
        }

        return;
      }

      if (
        action ===
        "delete-student"
      ) {
        deleteStudent(
          button.dataset.studentId
        );
        return;
      }

      if (
        action ===
        "download-pdf"
      ) {
        downloadStudentPDF(
          button.dataset.studentId
        );
        return;
      }

      if (
        action ===
        "back-marks"
      ) {
        editingStudentId = null;
        refreshPage();
      }
    }
  );

  document.addEventListener(
    "submit",
    event => {
      if (
        event.target.id ===
        "createExamForm"
      ) {
        event.preventDefault();
        handleCreateExam(
          event.target
        );
        return;
      }

      if (
        event.target.id ===
        "studentForm"
      ) {
        event.preventDefault();
        handleStudentSubmit(
          event.target
        );
      }
    }
  );

  document.addEventListener(
    "input",
    event => {
      if (
        event.target.id ===
        "studentSearch"
      ) {
        searchText =
          event.target.value;

        const exam = getExam();

        if (!exam) return;

        const container =
          document.getElementById(
            "resultsContent"
          );

        if (!container) return;

        container.innerHTML =
          renderMarksPage(
            exam
          );

        const searchInput =
          document.getElementById(
            "studentSearch"
          );

        if (searchInput) {
          searchInput.focus();

          searchInput.setSelectionRange(
            searchText.length,
            searchText.length
          );
        }

        return;
      }

      if (
        event.target.matches(
          '#studentForm input[type="number"]'
        )
      ) {
        updateLiveSummary();
      }
    }
  );

  document.addEventListener(
    "change",
    event => {
      if (
        event.target.matches(
          '#studentForm input[type="number"]'
        )
      ) {
        updateLiveSummary();
      }
    }
  );

  console.log(
    "Teacher Results module initialized"
  );
}