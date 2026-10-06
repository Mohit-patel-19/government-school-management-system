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
   STORAGE
========================================================= */

function getData() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (Array.isArray(data)) {
      return data;
    }
  } catch (error) {
    console.error("Unable to read result data:", error);
  }

  return [];
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function createId() {
  return Date.now() + Math.floor(Math.random() * 10000);
}

/* =========================================================
   HELPERS
========================================================= */

function getExam() {
  const exams = getData();

  return exams.find(
    exam => String(exam.id) === String(selectedExamId)
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

  const hasMarks = exam.subjects.some(subject => {
    const value = student.marks?.[subject];

    return (
      value !== undefined &&
      value !== null &&
      value !== ""
    );
  });

  if (!hasMarks) {
    return "Pending";
  }

  const total = calculateTotal(student, exam);
  const percentage = calculatePercentage(student, exam);

  const failedSubject = exam.subjects.some(subject => {
    const marks = Number(student.marks?.[subject]);

    return (
      student.marks?.[subject] !== "" &&
      !Number.isNaN(marks) &&
      marks < exam.passMarks
    );
  });

  if (failedSubject || percentage < 40) {
    return "Fail";
  }

  return "Pass";
}

function calculateTotal(student, exam) {
  return exam.subjects.reduce((total, subject) => {
    const value = student.marks?.[subject];

    if (
      value === "" ||
      value === undefined ||
      value === null
    ) {
      return total;
    }

    return total + Number(value);
  }, 0);
}

function calculatePercentage(student, exam) {
  const total = calculateTotal(student, exam);

  if (!exam.subjects.length) {
    return 0;
  }

  const maximumMarks =
    exam.subjects.length * exam.maxMarks;

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
    .replaceAll("'", "&#039;");
}

/* =========================================================
   MAIN PAGE
========================================================= */

export function TeacherResults() {
  selectedExamId = null;
  searchText = "";
  editingStudentId = null;

  return `
    <div class="dashboard-main results-page">

      <div class="results-page-header">

        <div>
          <span class="results-eyebrow">
            ACADEMIC MANAGEMENT
          </span>

          <h1>Exam & Results</h1>

          <p>
            Create examinations, manage students and enter
            subject-wise marks.
          </p>
        </div>

        <div class="results-header-actions">

          <button
            class="results-secondary-btn"
            data-action="back-dashboard"
          >
            ← Back to Dashboard
          </button>

          <button
            class="results-primary-btn"
            data-action="create-exam"
          >
            + Create New Exam
          </button>

        </div>

      </div>

      <div id="resultsContent">
        ${renderOverview()}
      </div>

    </div>
  `;
}

/* =========================================================
   OVERVIEW
========================================================= */

function renderOverview() {
  const exams = getData();

  const totalStudents = exams.reduce(
    (total, exam) =>
      total + (exam.students?.length || 0),
    0
  );

  const totalSubjects = exams.reduce(
    (total, exam) =>
      total + (exam.subjects?.length || 0),
    0
  );

  const completedResults = exams.reduce(
    (total, exam) => {
      return (
        total +
        (exam.students || []).filter(student => {
          return (
            getResultStatus(student, exam) !==
            "Pending"
          );
        }).length
      );
    },
    0
  );

  return `
    <div class="results-stats-grid">

      <div class="results-stat-card">
        <div class="results-stat-icon">📋</div>

        <div>
          <span>Total Exams</span>
          <strong>${exams.length}</strong>
        </div>
      </div>

      <div class="results-stat-card">
        <div class="results-stat-icon">👨‍🎓</div>

        <div>
          <span>Total Students</span>
          <strong>${totalStudents}</strong>
        </div>
      </div>

      <div class="results-stat-card">
        <div class="results-stat-icon">📚</div>

        <div>
          <span>Total Subjects</span>
          <strong>${totalSubjects}</strong>
        </div>
      </div>

      <div class="results-stat-card">
        <div class="results-stat-icon">✅</div>

        <div>
          <span>Completed Results</span>
          <strong>${completedResults}</strong>
        </div>
      </div>

    </div>

    <div class="results-section-card">

      <div class="results-section-header">

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
            <div class="results-exam-grid">
              ${exams.map(renderExamCard).join("")}
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
  const students = exam.students || [];

  const completed = students.filter(student => {
    return (
      getResultStatus(student, exam) !==
      "Pending"
    );
  }).length;

  return `
    <div class="results-exam-card">

      <div class="results-exam-card-top">

        <div class="results-exam-icon">
          📑
        </div>

        <div class="results-exam-actions">

          <button
            class="results-icon-btn"
            title="Edit Exam"
            data-action="edit-exam"
            data-id="${exam.id}"
          >
            ✏️
          </button>

          <button
            class="results-icon-btn danger"
            title="Delete Exam"
            data-action="delete-exam"
            data-id="${exam.id}"
          >
            🗑️
          </button>

        </div>

      </div>

      <div class="results-exam-card-body">

        <h3>
          ${escapeHTML(exam.name)}
        </h3>

        <p class="results-exam-meta">
          ${escapeHTML(exam.className)} -
          ${escapeHTML(exam.section)}
        </p>

        <div class="results-exam-info">

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

        <div class="results-progress">

          <div class="results-progress-label">
            <span>Results Completed</span>

            <strong>
              ${completed}/${students.length}
            </strong>
          </div>

          <div class="results-progress-track">

            <div
              class="results-progress-bar"
              style="width:${
                students.length
                  ? (completed / students.length) * 100
                  : 0
              }%"
            ></div>

          </div>

        </div>

      </div>

      <button
        class="results-open-btn"
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
    <div class="results-empty-state">

      <div class="results-empty-icon">
        📋
      </div>

      <h3>No examinations created</h3>

      <p>
        Create your first examination to start entering
        student results.
      </p>

      <button
        class="results-primary-btn"
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
    <div class="results-section-card">

      <div class="results-section-header">

        <div>
          <h2>Create New Examination</h2>

          <p>
            Enter examination details and subjects.
          </p>
        </div>

        <button
          class="results-secondary-btn"
          data-action="back-overview"
        >
          ← Back
        </button>

      </div>

      <form id="createExamForm">

        <div class="results-form-grid">

          <div class="results-form-group results-full">

            <label>Exam Name *</label>

            <input
              type="text"
              name="examName"
              placeholder="Example: First Unit Test"
              required
            />

          </div>

          <div class="results-form-group">

            <label>Class *</label>

            <select name="className" required>

              <option value="">
                Select Class
              </option>

              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>

            </select>

          </div>

          <div class="results-form-group">

            <label>Section *</label>

            <select name="section" required>

              <option value="">
                Select Section
              </option>

              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>

            </select>

          </div>

          <div class="results-form-group">

            <label>Exam Date *</label>

            <input
              type="date"
              name="examDate"
              required
            />

          </div>

          <div class="results-form-group">

            <label>Maximum Marks *</label>

            <input
              type="number"
              name="maxMarks"
              value="100"
              min="1"
              required
            />

          </div>

          <div class="results-form-group">

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

        <div class="results-subject-section">

          <div class="results-subject-header">

            <div>
              <h3>Subjects</h3>

              <p>
                Add all subjects included in this examination.
              </p>
            </div>

            <button
              type="button"
              class="results-secondary-btn"
              data-action="add-subject"
            >
              + Add Subject
            </button>

          </div>

          <div id="subjectList">

            ${DEFAULT_SUBJECTS.map(
              (subject, index) => `
                <div class="results-subject-row">

                  <span class="results-subject-number">
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
                    class="results-remove-btn"
                    data-action="remove-subject"
                  >
                    Remove
                  </button>

                </div>
              `
            ).join("")}

          </div>

        </div>

        <div class="results-form-actions">

          <button
            type="button"
            class="results-secondary-btn"
            data-action="back-overview"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="results-primary-btn"
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
  const students = exam.students || [];

  const filteredStudents = students.filter(student => {

    const search =
      searchText.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      student.name
        .toLowerCase()
        .includes(search) ||

      String(student.rollNo)
        .toLowerCase()
        .includes(search) ||

      String(student.admissionNo || "")
        .toLowerCase()
        .includes(search)
    );
  });

  return `
    <div class="results-section-card">

      <div class="results-section-header">

        <div>

          <span class="results-eyebrow">
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
          class="results-secondary-btn"
          data-action="back-overview"
        >
          ← All Exams
        </button>

      </div>

      <div class="results-toolbar">

        <div class="results-search-box">

          <span>🔍</span>

          <input
            id="studentSearch"
            type="search"
            placeholder="Search student, roll no. or admission no."
            value="${escapeHTML(searchText)}"
          />

        </div>

        <button
          class="results-primary-btn"
          data-action="add-student"
        >
          + Add Student
        </button>

      </div>

      <div class="results-summary-row">

        <div>
          <strong>${students.length}</strong>
          <span>Total Students</span>
        </div>

        <div>
          <strong>
            ${
              students.filter(
                student =>
                  getResultStatus(student, exam) ===
                  "Pass"
              ).length
            }
          </strong>

          <span>Passed</span>
        </div>

        <div>
          <strong>
            ${
              students.filter(
                student =>
                  getResultStatus(student, exam) ===
                  "Fail"
              ).length
            }
          </strong>

          <span>Failed</span>
        </div>

        <div>
          <strong>
            ${
              students.filter(
                student =>
                  getResultStatus(student, exam) ===
                  "Pending"
              ).length
            }
          </strong>

          <span>Pending</span>
        </div>

      </div>

      ${
        filteredStudents.length
          ? `
            <div class="results-table-wrapper">

              <table class="results-table">

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
                      renderStudentRow(student, exam)
                    )
                    .join("")}

                </tbody>

              </table>

            </div>
          `
          : `
            <div class="results-empty-state small">

              <div class="results-empty-icon">
                👨‍🎓
              </div>

              <h3>No students found</h3>

              <p>
                Add students to this examination.
              </p>

              <button
                class="results-primary-btn"
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

function renderStudentRow(student, exam) {

  const total =
    calculateTotal(student, exam);

  const percentage =
    calculatePercentage(student, exam);

  const grade =
    getGrade(percentage);

  const status =
    getResultStatus(student, exam);

  const enteredSubjects =
    exam.subjects.filter(subject => {
      return (
        student.marks?.[subject] !== "" &&
        student.marks?.[subject] !== undefined &&
        student.marks?.[subject] !== null
      );
    }).length;

  let statusClass = "pending";

  if (status === "Pass") {
    statusClass = "pass";
  }

  if (status === "Fail") {
    statusClass = "fail";
  }

  return `
    <tr>

      <td>

        <div class="results-student-cell">

          <div class="results-avatar">
            ${escapeHTML(
              student.name
                .charAt(0)
                .toUpperCase()
            )}
          </div>

          <div>

            <strong>
              ${escapeHTML(student.name)}
            </strong>

            <small>
              ${
                escapeHTML(
                  student.admissionNo ||
                  "No Admission No."
                )
              }
            </small>

          </div>

        </div>

      </td>

      <td>
        ${escapeHTML(student.rollNo)}
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

        <span class="results-status ${statusClass}">
          ${status}
        </span>

      </td>

      <td>

        <div class="results-row-actions">

          <button
            class="results-small-btn"
            title="Enter/Edit Marks"
            data-action="marks"
            data-student-id="${student.id}"
          >
            📝
          </button>

          <button
            class="results-small-btn"
            title="Edit Student"
            data-action="edit-student"
            data-student-id="${student.id}"
          >
            ✏️
          </button>

          <button
            class="results-small-btn"
            title="Download Report Card"
            data-action="download-pdf"
            data-student-id="${student.id}"
          >
            📄
          </button>

          <button
            class="results-small-btn danger"
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

function renderStudentForm(student = null) {

  const exam = getExam();

  if (!exam) {
    return;
  }

  editingStudentId =
    student?.id || null;

  const marks =
    student?.marks || {};

  const container =
    document.getElementById(
      "resultsContent"
    );

  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="results-section-card">

      <div class="results-section-header">

        <div>

          <span class="results-eyebrow">
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
          class="results-secondary-btn"
          data-action="back-marks"
        >
          ← Back
        </button>

      </div>

      <form id="studentForm">

        <div class="results-form-grid">

          <div class="results-form-group">

            <label>
              Student Name *
            </label>

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

          <div class="results-form-group">

            <label>
              Roll Number *
            </label>

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

          <div class="results-form-group">

            <label>
              Father Name
            </label>

            <input
              type="text"
              name="fatherName"
              value="${escapeHTML(
                student?.fatherName || ""
              )}"
              placeholder="Father name"
            />

          </div>

          <div class="results-form-group">

            <label>
              Mother Name
            </label>

            <input
              type="text"
              name="motherName"
              value="${escapeHTML(
                student?.motherName || ""
              )}"
              placeholder="Mother name"
            />

          </div>

          <div class="results-form-group">

            <label>
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value="${escapeHTML(
                student?.dob || ""
              )}"
            />

          </div>

          <div class="results-form-group">

            <label>
              Admission Number
            </label>

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

        <div class="results-marks-section">

          <div class="results-subject-header">

            <div>

              <h3>
                Subject-wise Marks
              </h3>

              <p>
                Enter marks out of
                ${exam.maxMarks}
                for each subject.
              </p>

            </div>

          </div>

          <div class="results-marks-grid">

            ${exam.subjects
              .map(subject => {

                const value =
                  marks[subject] === undefined
                    ? ""
                    : marks[subject];

                return `
                  <div class="results-mark-input">

                    <label>
                      ${escapeHTML(subject)}
                    </label>

                    <div class="results-mark-field">

                      <input
                        type="number"
                        name="mark_${encodeURIComponent(
                          subject
                        )}"
                        value="${escapeHTML(value)}"
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

        <div class="results-live-summary">

          <div>
            <span>Total Marks</span>
            <strong id="liveTotal">0</strong>
          </div>

          <div>
            <span>Percentage</span>
            <strong id="livePercentage">0%</strong>
          </div>

          <div>
            <span>Grade</span>
            <strong id="liveGrade">F</strong>
          </div>

        </div>

        <div class="results-form-actions">

          <button
            type="button"
            class="results-secondary-btn"
            data-action="back-marks"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="results-primary-btn"
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
   LIVE MARK CALCULATION
========================================================= */

function updateLiveSummary() {

  const exam = getExam();

  if (!exam) {
    return;
  }

  let total = 0;

  exam.subjects.forEach(subject => {

    const input =
      document.querySelector(
        `[name="mark_${encodeURIComponent(
          subject
        )}"]`
      );

    if (!input) {
      return;
    }

    if (input.value !== "") {
      total += Number(input.value);
    }
  });

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
    totalElement.textContent = total;
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

  if (!container) {
    return;
  }

  if (selectedExamId) {

    const exam =
      getExam();

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

  const newExam = {

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

  };

  exams.push(newExam);

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

  if (!exam) {
    return;
  }

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

  exam.subjects.forEach(subject => {

    const input =
      form.querySelector(
        `[name="mark_${encodeURIComponent(
          subject
        )}"]`
      );

    if (
      input &&
      input.value !== ""
    ) {
      studentData.marks[subject] =
        Number(input.value);
    } else {
      studentData.marks[subject] = "";
    }

  });

  const exams = getData();

  const examIndex =
    exams.findIndex(
      item =>
        String(item.id) ===
        String(exam.id)
    );

  if (examIndex === -1) {
    return;
  }

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
      ].students[studentIndex] = {

        ...exams[
          examIndex
        ].students[studentIndex],

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

  if (!list) {
    return;
  }

  const rows =
    list.querySelectorAll(
      ".results-subject-row"
    );

  const row =
    document.createElement(
      "div"
    );

  row.className =
    "results-subject-row";

  row.innerHTML = `

    <span class="results-subject-number">
      ${rows.length + 1}
    </span>

    <input
      type="text"
      class="subject-input"
      placeholder="Subject name"
    />

    <button
      type="button"
      class="results-remove-btn"
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

  if (!list) {
    return;
  }

  const rows =
    list.querySelectorAll(
      ".results-subject-row"
    );

  if (rows.length <= 1) {

    alert(
      "At least one subject is required."
    );

    return;
  }

  button
    .closest(
      ".results-subject-row"
    )
    ?.remove();

  updateSubjectNumbers();
}

function updateSubjectNumbers() {

  document
    .querySelectorAll(
      ".results-subject-row"
    )
    .forEach(
      (row, index) => {

        const number =
          row.querySelector(
            ".results-subject-number"
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

  if (!exam) {
    return;
  }

  const confirmed =
    confirm(
      `Delete "${exam.name}"?\n\nAll students and marks of this exam will also be deleted.`
    );

  if (!confirmed) {
    return;
  }

  const updated =
    exams.filter(
      item =>
        String(item.id) !==
        String(id)
    );

  saveData(updated);

  selectedExamId = null;

  refreshPage();
}

/* =========================================================
   DELETE STUDENT
========================================================= */

function deleteStudent(studentId) {

  const exam = getExam();

  if (!exam) {
    return;
  }

  const student =
    exam.students.find(
      item =>
        String(item.id) ===
        String(studentId)
    );

  if (!student) {
    return;
  }

  const confirmed =
    confirm(
      `Delete student "${student.name}"?`
    );

  if (!confirmed) {
    return;
  }

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

  if (!exam) {
    return;
  }

  const newName =
    prompt(
      "Enter exam name:",
      exam.name
    );

  if (newName === null) {
    return;
  }

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
   PDF REPORT CARD
========================================================= */

function downloadStudentPDF(studentId) {

  const exam = getExam();

  if (!exam) {
    return;
  }

  const student =
    exam.students.find(
      item =>
        String(item.id) ===
        String(studentId)
    );

  if (!student) {
    return;
  }

  const doc =
    new jsPDF();

  const pageWidth =
    doc.internal.pageSize.getWidth();

  /* SCHOOL HEADER */

  doc.setFontSize(18);

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.text(
    "GOVERNMENT SCHOOL",
    pageWidth / 2,
    20,
    {
      align: "center"
    }
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
    {
      align: "center"
    }
  );

  doc.text(
    "Academic Session: 2026-27",
    pageWidth / 2,
    33,
    {
      align: "center"
    }
  );

  doc.line(
    14,
    38,
    pageWidth - 14,
    38
  );

  /* REPORT TITLE */

  doc.setFontSize(15);

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.text(
    "STUDENT REPORT CARD",
    pageWidth / 2,
    49,
    {
      align: "center"
    }
  );

  /* STUDENT DETAILS */

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

  /* MARKS TABLE */

  const tableRows =
    exam.subjects.map(
      (subject, index) => {

        const marks =
          student.marks?.[subject];

        const displayMarks =
          marks === "" ||
          marks === undefined ||
          marks === null
            ? "-"
            : String(marks);

        const percentage =
          marks === "" ||
          marks === undefined ||
          marks === null
            ? "-"
            : (
                (
                  Number(marks) /
                  exam.maxMarks
                ) *
                100
              ).toFixed(2) + "%";

        const result =
          marks === "" ||
          marks === undefined ||
          marks === null
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

  /* RESULT SUMMARY */

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

  /* SIGNATURES */

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

  /* FOOTER */

  doc.setFontSize(8);

  doc.text(
    "This is a computer generated report card.",
    pageWidth / 2,
    285,
    {
      align: "center"
    }
  );

  const safeName =
    student.name
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
   EVENT HANDLERS
========================================================= */

export function setupTeacherResults() {

  if (window.teacherResultsEventsReady) {
    return;
  }

  window.teacherResultsEventsReady = true;

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-action]"
        );

      if (!button) {
        return;
      }

      const action =
        button.dataset.action;

      /* =========================================
         BACK TO TEACHER DASHBOARD
      ========================================= */

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

      /* CREATE EXAM */

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

      /* BACK OVERVIEW */

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

      /* OPEN EXAM */

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

      /* EDIT EXAM */

      if (
        action ===
        "edit-exam"
      ) {

        editExam(
          button.dataset.id
        );

        return;
      }

      /* DELETE EXAM */

      if (
        action ===
        "delete-exam"
      ) {

        deleteExam(
          button.dataset.id
        );

        return;
      }

      /* ADD SUBJECT */

      if (
        action ===
        "add-subject"
      ) {

        addSubject();

        return;
      }

      /* REMOVE SUBJECT */

      if (
        action ===
        "remove-subject"
      ) {

        removeSubject(button);

        return;
      }

      /* ADD STUDENT */

      if (
        action ===
        "add-student"
      ) {

        renderStudentForm();

        return;
      }

      /* EDIT STUDENT */

      if (
        action ===
        "edit-student"
      ) {

        const exam =
          getExam();

        if (!exam) {
          return;
        }

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

      /* ENTER MARKS */

      if (
        action ===
        "marks"
      ) {

        const exam =
          getExam();

        if (!exam) {
          return;
        }

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

      /* DELETE STUDENT */

      if (
        action ===
        "delete-student"
      ) {

        deleteStudent(
          button.dataset.studentId
        );

        return;
      }

      /* DOWNLOAD PDF */

      if (
        action ===
        "download-pdf"
      ) {

        downloadStudentPDF(
          button.dataset.studentId
        );

        return;
      }

      /* BACK FROM STUDENT FORM */

      if (
        action ===
        "back-marks"
      ) {

        editingStudentId = null;

        refreshPage();

        return;
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

        return;
      }

    }
  );

  document.addEventListener(
    "input",
    event => {

      /* SEARCH */

      if (
        event.target.id ===
        "studentSearch"
      ) {

        searchText =
          event.target.value;

        const exam =
          getExam();

        if (!exam) {
          return;
        }

        const container =
          document.getElementById(
            "resultsContent"
          );

        if (!container) {
          return;
        }

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

      /* LIVE MARKS */

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