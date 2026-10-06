/* =========================================
   ADMIN RESULTS MODULE
   Student-wise Complete Result Management
========================================= */

const RESULTS_STORAGE_KEY =
  "government_school_admin_results_v2";

/* =========================================
   SUBJECTS
========================================= */

const SUBJECTS = [
  "Mathematics",
  "Science",
  "English",
  "Hindi",
  "Social Science"
];

/* =========================================
   DEFAULT RESULTS
========================================= */

const defaultResults = [
  {
    id: 1,
    studentName: "Rahul Sharma",
    rollNo: "101",
    className: "10",
    section: "A",
    exam: "Half Yearly",

    subjects: [
      {
        name: "Mathematics",
        marks: 88,
        maxMarks: 100
      },
      {
        name: "Science",
        marks: 84,
        maxMarks: 100
      },
      {
        name: "English",
        marks: 76,
        maxMarks: 100
      },
      {
        name: "Hindi",
        marks: 91,
        maxMarks: 100
      },
      {
        name: "Social Science",
        marks: 79,
        maxMarks: 100
      }
    ],

    status: "Published",
    updatedDate: "2026-09-01",
    publishedDate: "2026-09-01"
  },

  {
    id: 2,
    studentName: "Priya Sharma",
    rollNo: "102",
    className: "10",
    section: "A",
    exam: "Half Yearly",

    subjects: [
      {
        name: "Mathematics",
        marks: 92,
        maxMarks: 100
      },
      {
        name: "Science",
        marks: 88,
        maxMarks: 100
      },
      {
        name: "English",
        marks: 86,
        maxMarks: 100
      },
      {
        name: "Hindi",
        marks: 90,
        maxMarks: 100
      },
      {
        name: "Social Science",
        marks: 84,
        maxMarks: 100
      }
    ],

    status: "Published",
    updatedDate: "2026-09-01",
    publishedDate: "2026-09-01"
  },

  {
    id: 3,
    studentName: "Amit Kumar",
    rollNo: "103",
    className: "10",
    section: "A",
    exam: "Half Yearly",

    subjects: [
      {
        name: "Mathematics",
        marks: 76,
        maxMarks: 100
      },
      {
        name: "Science",
        marks: 72,
        maxMarks: 100
      },
      {
        name: "English",
        marks: 81,
        maxMarks: 100
      },
      {
        name: "Hindi",
        marks: 78,
        maxMarks: 100
      },
      {
        name: "Social Science",
        marks: 74,
        maxMarks: 100
      }
    ],

    status: "Draft",
    updatedDate: "2026-09-02"
  },

  {
    id: 4,
    studentName: "Neha Singh",
    rollNo: "104",
    className: "10",
    section: "B",
    exam: "Half Yearly",

    subjects: [
      {
        name: "Mathematics",
        marks: 95,
        maxMarks: 100
      },
      {
        name: "Science",
        marks: 92,
        maxMarks: 100
      },
      {
        name: "English",
        marks: 89,
        maxMarks: 100
      },
      {
        name: "Hindi",
        marks: 94,
        maxMarks: 100
      },
      {
        name: "Social Science",
        marks: 91,
        maxMarks: 100
      }
    ],

    status: "Published",
    updatedDate: "2026-09-01",
    publishedDate: "2026-09-01"
  },

  {
    id: 5,
    studentName: "Vikas Meena",
    rollNo: "105",
    className: "10",
    section: "B",
    exam: "Half Yearly",

    subjects: [
      {
        name: "Mathematics",
        marks: 39,
        maxMarks: 100
      },
      {
        name: "Science",
        marks: 42,
        maxMarks: 100
      },
      {
        name: "English",
        marks: 51,
        maxMarks: 100
      },
      {
        name: "Hindi",
        marks: 48,
        maxMarks: 100
      },
      {
        name: "Social Science",
        marks: 44,
        maxMarks: 100
      }
    ],

    status: "Draft",
    updatedDate: "2026-09-02"
  },

  {
    id: 6,
    studentName: "Pooja Kumari",
    rollNo: "106",
    className: "9",
    section: "A",
    exam: "Unit Test",

    subjects: [
      {
        name: "Mathematics",
        marks: 81,
        maxMarks: 100
      },
      {
        name: "Science",
        marks: 79,
        maxMarks: 100
      },
      {
        name: "English",
        marks: 85,
        maxMarks: 100
      },
      {
        name: "Hindi",
        marks: 88,
        maxMarks: 100
      },
      {
        name: "Social Science",
        marks: 76,
        maxMarks: 100
      }
    ],

    status: "Published",
    updatedDate: "2026-09-01",
    publishedDate: "2026-09-01"
  }
];

/* =========================================
   STORAGE
========================================= */

function getResults() {
  try {
    const stored =
      localStorage.getItem(
        RESULTS_STORAGE_KEY
      );

    if (!stored) {
      saveResults(defaultResults);
      return [...defaultResults];
    }

    const parsed =
      JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      saveResults(defaultResults);
      return [...defaultResults];
    }

    return parsed.map(normalizeResult);

  } catch (error) {
    console.error(
      "Failed to load results:",
      error
    );

    return [...defaultResults];
  }
}

function saveResults(results) {
  try {
    localStorage.setItem(
      RESULTS_STORAGE_KEY,
      JSON.stringify(results)
    );

    return true;

  } catch (error) {
    console.error(
      "Failed to save results:",
      error
    );

    return false;
  }
}

/* =========================================
   NORMALIZE RESULT
========================================= */

function normalizeResult(item) {

  const subjects =
    Array.isArray(item.subjects)
      ? item.subjects
      : [];

  return {
    ...item,

    subjects: subjects.map(
      (subject) => ({
        name:
          subject.name || "Subject",
        marks:
          Number(subject.marks) || 0,
        maxMarks:
          Number(subject.maxMarks) || 100
      })
    ),

    status:
      item.status === "Published"
        ? "Published"
        : "Draft"
  };
}

/* =========================================
   HELPERS
========================================= */

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getPercentage(
  marks,
  maxMarks
) {
  const marksValue =
    Number(marks);

  const maxValue =
    Number(maxMarks);

  if (
    !Number.isFinite(marksValue) ||
    !Number.isFinite(maxValue) ||
    maxValue <= 0
  ) {
    return 0;
  }

  return Math.round(
    (marksValue / maxValue) * 10000
  ) / 100;
}

function calculateGrade(
  percentage
) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B+";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C";
  if (percentage >= 40) return "D";

  return "F";
}

function calculateOverall(
  result
) {
  const subjects =
    Array.isArray(result.subjects)
      ? result.subjects
      : [];

  const totalMarks =
    subjects.reduce(
      (sum, subject) =>
        sum + Number(subject.marks || 0),
      0
    );

  const maxMarks =
    subjects.reduce(
      (sum, subject) =>
        sum +
        Number(
          subject.maxMarks || 0
        ),
      0
    );

  const percentage =
    getPercentage(
      totalMarks,
      maxMarks
    );

  const hasFailedSubject =
    subjects.some(
      (subject) =>
        getPercentage(
          subject.marks,
          subject.maxMarks
        ) < 40
    );

  const resultStatus =
    hasFailedSubject
      ? "Fail"
      : "Pass";

  return {
    totalMarks,
    maxMarks,
    percentage,
    grade:
      hasFailedSubject
        ? "F"
        : calculateGrade(
            percentage
          ),
    result:
      resultStatus
  };
}

function getToday() {
  const date =
    new Date();

  const year =
    date.getFullYear();

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      date.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function generateId() {
  return (
    Date.now() +
    Math.floor(
      Math.random() * 10000
    )
  );
}

/* =========================================
   MAIN PAGE
========================================= */

export function AdminResults() {

  return `
    <div class="admin-results-module">

      <!-- TOOLBAR -->
      <div class="admin-results-toolbar">

        <div class="admin-results-toolbar-left">

          <div class="admin-results-search">

            <span>🔍</span>

            <input
              type="text"
              id="admin-results-search"
              placeholder="Search student, roll no..."
              autocomplete="off"
            />

          </div>

          <select
            id="admin-results-exam-filter"
          >

            <option value="All">
              All Exams
            </option>

            <option value="Half Yearly">
              Half Yearly
            </option>

            <option value="Annual">
              Annual
            </option>

            <option value="Unit Test">
              Unit Test
            </option>

            <option value="Pre Board">
              Pre Board
            </option>

          </select>

          <select
            id="admin-results-class-filter"
          >

            <option value="All">
              All Classes
            </option>

            <option value="9">
              Class 9
            </option>

            <option value="10">
              Class 10
            </option>

            <option value="11">
              Class 11
            </option>

            <option value="12">
              Class 12
            </option>

          </select>

          <select
            id="admin-results-status-filter"
          >

            <option value="All">
              All Status
            </option>

            <option value="Published">
              Published
            </option>

            <option value="Draft">
              Draft
            </option>

          </select>

        </div>

        <div class="admin-results-toolbar-actions">

          <button
            type="button"
            class="admin-results-refresh-btn"
            id="admin-results-export"
          >
            ⬇ Export
          </button>

          <button
            type="button"
            class="admin-results-refresh-btn"
            id="admin-results-print"
          >
            🖨 Print
          </button>

          <button
            type="button"
            class="admin-results-add-btn"
            id="admin-add-result"
          >
            + Add Result
          </button>

        </div>

      </div>


      <!-- SUMMARY -->
      <div class="admin-results-summary">

        <div class="admin-results-summary-card">

          <div class="admin-results-summary-icon">
            📊
          </div>

          <div>
            <span>Total Students</span>

            <strong id="results-total-count">
              0
            </strong>
          </div>

        </div>


        <div class="admin-results-summary-card">

          <div class="admin-results-summary-icon">
            ✅
          </div>

          <div>
            <span>Published</span>

            <strong id="results-published-count">
              0
            </strong>
          </div>

        </div>


        <div class="admin-results-summary-card">

          <div class="admin-results-summary-icon">
            📝
          </div>

          <div>
            <span>Draft</span>

            <strong id="results-draft-count">
              0
            </strong>
          </div>

        </div>


        <div class="admin-results-summary-card">

          <div class="admin-results-summary-icon">
            📈
          </div>

          <div>
            <span>Average Percentage</span>

            <strong id="results-average">
              0%
            </strong>
          </div>

        </div>

      </div>


      <!-- RESULT CARD -->
      <div class="admin-results-card">

        <div class="admin-results-card-header">

          <div>

            <h3>
              Student Results
            </h3>

            <p>
              Complete subject-wise examination results
            </p>

          </div>

          <button
            type="button"
            class="admin-results-refresh-btn"
            id="admin-results-refresh"
          >
            ↻ Refresh
          </button>

        </div>


        <!-- TABLE -->
        <div class="admin-results-table-wrapper">

          <table class="admin-results-table">

            <thead>

              <tr>

                <th>Student</th>

                <th>Class</th>

                <th>Exam</th>

                <th>Subjects</th>

                <th>Total Marks</th>

                <th>Percentage</th>

                <th>Grade</th>

                <th>Result</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody
              id="admin-results-table-body"
            ></tbody>

          </table>

        </div>

      </div>


      <!-- MODAL CONTAINER -->
      <div
        id="admin-results-modal-container"
      ></div>

    </div>
  `;
}

/* =========================================
   SETUP
========================================= */

export function setupAdminResults() {

  const page =
    document.querySelector(
      ".admin-results-module"
    );

  if (!page) {
    return;
  }

  if (
    page.dataset.resultsInitialized ===
    "true"
  ) {
    renderResults();
    return;
  }

  page.dataset.resultsInitialized =
    "true";

  page.addEventListener(
    "click",
    handleResultsClick
  );

  page.addEventListener(
    "input",
    handleResultsInput
  );

  page.addEventListener(
    "change",
    handleResultsChange
  );

  renderResults();
}

/* =========================================
   CLICK HANDLER
========================================= */

function handleResultsClick(
  event
) {

  const addButton =
    event.target.closest(
      "#admin-add-result"
    );

  if (addButton) {
    openResultModal();
    return;
  }


  const refreshButton =
    event.target.closest(
      "#admin-results-refresh"
    );

  if (refreshButton) {
    renderResults();
    return;
  }


  const exportButton =
    event.target.closest(
      "#admin-results-export"
    );

  if (exportButton) {
    exportResultsCSV();
    return;
  }


  const printButton =
    event.target.closest(
      "#admin-results-print"
    );

  if (printButton) {
    printResults();
    return;
  }


  const viewButton =
    event.target.closest(
      "[data-view-result]"
    );

  if (viewButton) {

    openResultView(
      Number(
        viewButton.dataset
          .viewResult
      )
    );

    return;
  }


  const editButton =
    event.target.closest(
      "[data-edit-result]"
    );

  if (editButton) {

    openResultModal(
      Number(
        editButton.dataset
          .editResult
      )
    );

    return;
  }


  const publishButton =
    event.target.closest(
      "[data-publish-result]"
    );

  if (publishButton) {

    publishResult(
      Number(
        publishButton.dataset
          .publishResult
      )
    );

    return;
  }


  const unpublishButton =
    event.target.closest(
      "[data-unpublish-result]"
    );

  if (unpublishButton) {

    unpublishResult(
      Number(
        unpublishButton.dataset
          .unpublishResult
      )
    );

    return;
  }


  const deleteButton =
    event.target.closest(
      "[data-delete-result]"
    );

  if (deleteButton) {

    deleteResult(
      Number(
        deleteButton.dataset
          .deleteResult
      )
    );

    return;
  }


  const closeButton =
    event.target.closest(
      "[data-close-result-modal]"
    );

  if (closeButton) {
    closeResultModal();
    return;
  }


  const cancelButton =
    event.target.closest(
      "[data-cancel-result]"
    );

  if (cancelButton) {
    closeResultModal();
    return;
  }


  const modal =
    event.target.closest(
      ".admin-results-modal"
    );

  if (
    modal &&
    event.target === modal
  ) {
    closeResultModal();
  }
}

/* =========================================
   INPUT
========================================= */

function handleResultsInput(
  event
) {

  if (
    event.target.id ===
    "admin-results-search"
  ) {

    renderResults();

    return;
  }


  if (
    event.target.id.startsWith(
      "subject-marks-"
    )
  ) {

    updateFormTotals();

    return;
  }
}

/* =========================================
   CHANGE
========================================= */

function handleResultsChange(
  event
) {

  if (
    event.target.id ===
      "admin-results-exam-filter" ||
    event.target.id ===
      "admin-results-class-filter" ||
    event.target.id ===
      "admin-results-status-filter"
  ) {

    renderResults();

    return;
  }


  if (
    event.target.id.startsWith(
      "subject-marks-"
    )
  ) {

    updateFormTotals();

    return;
  }
}

/* =========================================
   FILTER
========================================= */

function getFilteredResults() {

  const results =
    getResults();

  const search =
    document.querySelector(
      "#admin-results-search"
    )?.value
      .trim()
      .toLowerCase() || "";


  const exam =
    document.querySelector(
      "#admin-results-exam-filter"
    )?.value ||
    "All";


  const className =
    document.querySelector(
      "#admin-results-class-filter"
    )?.value ||
    "All";


  const status =
    document.querySelector(
      "#admin-results-status-filter"
    )?.value ||
    "All";


  return results.filter(
    (item) => {

      const subjectNames =
        item.subjects
          .map(
            (subject) =>
              subject.name
          )
          .join(" ");


      const searchableText = [
        item.studentName,
        item.rollNo,
        item.className,
        item.section,
        item.exam,
        subjectNames
      ]
        .join(" ")
        .toLowerCase();


      const matchesSearch =
        !search ||
        searchableText.includes(
          search
        );


      const matchesExam =
        exam === "All" ||
        item.exam === exam;


      const matchesClass =
        className === "All" ||
        String(
          item.className
        ) ===
          String(className);


      const matchesStatus =
        status === "All" ||
        item.status === status;


      return (
        matchesSearch &&
        matchesExam &&
        matchesClass &&
        matchesStatus
      );
    }
  );
}

/* =========================================
   RENDER
========================================= */

function renderResults() {

  const tbody =
    document.querySelector(
      "#admin-results-table-body"
    );

  if (!tbody) {
    return;
  }


  const results =
    getFilteredResults();


  updateSummary(results);


  if (
    results.length === 0
  ) {

    tbody.innerHTML = `
      <tr>

        <td colspan="10">

          <div
            class="admin-results-empty"
          >

            <div>
              📭
            </div>

            <h4>
              No Results Found
            </h4>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        </td>

      </tr>
    `;

    return;
  }


  tbody.innerHTML =
    results
      .map(
        createResultRow
      )
      .join("");
}

/* =========================================
   TABLE ROW
========================================= */

function createResultRow(
  item
) {

  const overall =
    calculateOverall(item);


  const subjectCount =
    item.subjects.length;


  const resultClass =
    overall.result === "Pass"
      ? "result-pass"
      : "result-fail";


  const gradeClass =
    overall.grade === "F"
      ? "grade-fail"
      : "grade-pass";


  const isPublished =
    item.status === "Published";


  const statusClass =
    isPublished
      ? "result-published"
      : "result-draft";


  return `
    <tr>

      <!-- STUDENT -->
      <td>

        <div class="result-student">

          <div
            class="result-student-avatar"
          >
            ${escapeHtml(
              String(
                item.studentName ||
                  "S"
              )
                .charAt(0)
                .toUpperCase()
            )}
          </div>

          <div>

            <strong>
              ${escapeHtml(
                item.studentName
              )}
            </strong>

            <small>
              Roll No:
              ${escapeHtml(
                item.rollNo
              )}
            </small>

          </div>

        </div>

      </td>


      <!-- CLASS -->
      <td>

        <span
          class="result-class-badge"
        >
          Class
          ${escapeHtml(
            item.className
          )}
          -
          ${escapeHtml(
            item.section
          )}
        </span>

      </td>


      <!-- EXAM -->
      <td>
        ${escapeHtml(
          item.exam
        )}
      </td>


      <!-- SUBJECTS -->
      <td>

        <div
          class="result-subject-count"
        >

          <strong>
            ${subjectCount}
          </strong>

          <span>
            Subjects
          </span>

        </div>

      </td>


      <!-- TOTAL -->
      <td>

        <strong>
          ${overall.totalMarks}
        </strong>

        /

        ${overall.maxMarks}

      </td>


      <!-- PERCENTAGE -->
      <td>

        <div
          class="result-percentage"
        >

          <span>
            ${overall.percentage}%
          </span>

          <div
            class="result-progress"
          >

            <span
              style="
                width:${Math.min(
                  overall.percentage,
                  100
                )}%
              "
            ></span>

          </div>

        </div>

      </td>


      <!-- GRADE -->
      <td>

        <span
          class="
            result-grade
            ${gradeClass}
          "
        >
          ${escapeHtml(
            overall.grade
          )}
        </span>

      </td>


      <!-- RESULT -->
      <td>

        <span
          class="
            result-status
            ${resultClass}
          "
        >
          ${overall.result}
        </span>

      </td>


      <!-- PUBLISH STATUS -->
      <td>

        <span
          class="
            result-publish-status
            ${statusClass}
          "
        >

          ${
            isPublished
              ? "● Published"
              : "○ Draft"
          }

        </span>

      </td>


      <!-- ACTIONS -->
      <td>

        <div
          class="result-actions"
        >

          <button
            type="button"
            title="View Marksheet"
            data-view-result="${item.id}"
          >
            👁
          </button>


          <button
            type="button"
            title="Edit Result"
            data-edit-result="${item.id}"
          >
            ✏️
          </button>


          ${
            isPublished
              ? `
                <button
                  type="button"
                  title="Unpublish"
                  data-unpublish-result="${item.id}"
                >
                  🔒
                </button>
              `
              : `
                <button
                  type="button"
                  title="Publish"
                  data-publish-result="${item.id}"
                >
                  🚀
                </button>
              `
          }


          <button
            type="button"
            title="Delete"
            data-delete-result="${item.id}"
          >
            🗑️
          </button>

        </div>

      </td>

    </tr>
  `;
}

/* =========================================
   SUMMARY
========================================= */

function updateSummary(
  results
) {

  const totalElement =
    document.querySelector(
      "#results-total-count"
    );


  const publishedElement =
    document.querySelector(
      "#results-published-count"
    );


  const draftElement =
    document.querySelector(
      "#results-draft-count"
    );


  const averageElement =
    document.querySelector(
      "#results-average"
    );


  if (!totalElement) {
    return;
  }


  const total =
    results.length;


  const published =
    results.filter(
      (item) =>
        item.status ===
        "Published"
    ).length;


  const draft =
    results.filter(
      (item) =>
        item.status !==
        "Published"
    ).length;


  let average = 0;


  if (total > 0) {

    const totalPercentage =
      results.reduce(
        (sum, item) =>
          sum +
          calculateOverall(
            item
          ).percentage,
        0
      );


    average =
      Math.round(
        totalPercentage /
          total
      );
  }


  totalElement.textContent =
    total;


  if (publishedElement) {
    publishedElement.textContent =
      published;
  }


  if (draftElement) {
    draftElement.textContent =
      draft;
  }


  if (averageElement) {
    averageElement.textContent =
      `${average}%`;
  }
}

/* =========================================
   ADD / EDIT MODAL
========================================= */

function openResultModal(
  id = null
) {

  const container =
    document.querySelector(
      "#admin-results-modal-container"
    );

  if (!container) {
    return;
  }


  const results =
    getResults();


  const existingResult =
    id !== null
      ? results.find(
          (item) =>
            Number(item.id) ===
            Number(id)
        )
      : null;


  if (
    id !== null &&
    !existingResult
  ) {

    alert(
      "Result not found."
    );

    return;
  }


  const isEdit =
    Boolean(existingResult);


  const result =
    existingResult || {
      studentName: "",
      rollNo: "",
      className: "10",
      section: "A",
      exam: "Half Yearly",
      subjects:
        createDefaultSubjects(),
      status: "Draft"
    };


  container.innerHTML = `

    <div
      class="admin-results-modal"
    >

      <div
        class="admin-results-modal-box"
      >

        <!-- HEADER -->
        <div
          class="admin-results-modal-header"
        >

          <div>

            <h3>
              ${
                isEdit
                  ? "Edit Complete Result"
                  : "Add Complete Result"
              }
            </h3>

            <p>
              Enter marks for all subjects
            </p>

          </div>


          <button
            type="button"
            class="admin-results-modal-close"
            data-close-result-modal
          >
            ×
          </button>

        </div>


        <form
          id="admin-result-form"
        >

          <input
            type="hidden"
            id="result-id"
            value="${
              isEdit
                ? escapeHtml(
                    result.id
                  )
                : ""
            }"
          />


          <!-- STUDENT INFORMATION -->
          <div
            class="result-form-section"
          >

            <div
              class="result-form-section-title"
            >
              👨‍🎓 Student Information
            </div>


            <div
              class="admin-results-form-grid"
            >

              <div
                class="admin-results-form-group"
              >

                <label>
                  Student Name
                </label>

                <input
                  type="text"
                  id="result-student-name"
                  value="${escapeHtml(
                    result.studentName
                  )}"
                  placeholder="Enter student name"
                  required
                />

              </div>


              <div
                class="admin-results-form-group"
              >

                <label>
                  Roll Number
                </label>

                <input
                  type="text"
                  id="result-roll-no"
                  value="${escapeHtml(
                    result.rollNo
                  )}"
                  placeholder="Enter roll number"
                  required
                />

              </div>


              <div
                class="admin-results-form-group"
              >

                <label>
                  Class
                </label>

                <select
                  id="result-class"
                  required
                >
                  ${createClassOptions(
                    result.className
                  )}
                </select>

              </div>


              <div
                class="admin-results-form-group"
              >

                <label>
                  Section
                </label>

                <select
                  id="result-section"
                  required
                >
                  ${createSectionOptions(
                    result.section
                  )}
                </select>

              </div>


              <div
                class="admin-results-form-group"
              >

                <label>
                  Examination
                </label>

                <select
                  id="result-exam"
                  required
                >
                  ${createExamOptions(
                    result.exam
                  )}
                </select>

              </div>


              <div
                class="admin-results-form-group"
              >

                <label>
                  Publication Status
                </label>

                <select
                  id="result-status"
                  required
                >

                  <option
                    value="Draft"
                    ${
                      result.status !==
                      "Published"
                        ? "selected"
                        : ""
                    }
                  >
                    Draft
                  </option>

                  <option
                    value="Published"
                    ${
                      result.status ===
                      "Published"
                        ? "selected"
                        : ""
                    }
                  >
                    Published
                  </option>

                </select>

              </div>

            </div>

          </div>


          <!-- SUBJECT MARKS -->
          <div
            class="result-form-section"
          >

            <div
              class="result-form-section-title"
            >
              📚 Subject-wise Marks
            </div>


            <div
              class="result-subject-form-list"
            >

              ${SUBJECTS.map(
                (subjectName) => {

                  const existingSubject =
                    result.subjects.find(
                      (subject) =>
                        subject.name ===
                        subjectName
                    );


                  const marks =
                    existingSubject
                      ? existingSubject.marks
                      : "";


                  const maxMarks =
                    existingSubject
                      ? existingSubject.maxMarks
                      : 100;


                  return `
                    <div
                      class="result-subject-form-row"
                    >

                      <div
                        class="result-subject-number"
                      >
                        ${SUBJECTS.indexOf(
                          subjectName
                        ) + 1}
                      </div>


                      <div
                        class="result-subject-name"
                      >
                        <strong>
                          ${escapeHtml(
                            subjectName
                          )}
                        </strong>

                        <span>
                          Maximum:
                          ${maxMarks}
                        </span>
                      </div>


                      <div
                        class="result-subject-input"
                      >

                        <label>
                          Obtained Marks
                        </label>

                        <input
                          type="number"
                          id="subject-marks-${SUBJECTS.indexOf(
                            subjectName
                          )}"
                          data-subject-index="${SUBJECTS.indexOf(
                            subjectName
                          )}"
                          value="${escapeHtml(
                            marks
                          )}"
                          min="0"
                          max="${maxMarks}"
                          step="0.01"
                          placeholder="0"
                          required
                        />

                      </div>


                      <div
                        class="result-subject-result"
                        id="subject-result-${SUBJECTS.indexOf(
                          subjectName
                        )}"
                      >
                        -
                      </div>

                    </div>
                  `;
                }
              ).join("")}

            </div>


            <!-- LIVE TOTAL -->
            <div
              class="result-live-total"
            >

              <div>

                <span>
                  Total Marks
                </span>

                <strong
                  id="live-total-marks"
                >
                  0 / 500
                </strong>

              </div>


              <div>

                <span>
                  Percentage
                </span>

                <strong
                  id="live-percentage"
                >
                  0%
                </strong>

              </div>


              <div>

                <span>
                  Grade
                </span>

                <strong
                  id="live-grade"
                >
                  F
                </strong>

              </div>


              <div>

                <span>
                  Result
                </span>

                <strong
                  id="live-result"
                >
                  Fail
                </strong>

              </div>

            </div>

          </div>


          <!-- FOOTER -->
          <div
            class="admin-results-modal-footer"
          >

            <button
              type="button"
              class="admin-results-cancel-btn"
              data-cancel-result
            >
              Cancel
            </button>


            <button
              type="submit"
              class="admin-results-save-btn"
            >
              ${
                isEdit
                  ? "Update Complete Result"
                  : "Save Complete Result"
              }
            </button>

          </div>

        </form>

      </div>

    </div>
  `;


  const form =
    document.querySelector(
      "#admin-result-form"
    );


  if (form) {

    form.addEventListener(
      "submit",
      handleResultSubmit
    );
  }


  updateFormTotals();


  const firstInput =
    document.querySelector(
      "#result-student-name"
    );


  if (firstInput) {

    setTimeout(() => {
      firstInput.focus();
    }, 50);
  }
}

/* =========================================
   DEFAULT SUBJECTS
========================================= */

function createDefaultSubjects() {

  return SUBJECTS.map(
    (name) => ({
      name,
      marks: 0,
      maxMarks: 100
    })
  );
}

/* =========================================
   CLASS OPTIONS
========================================= */

function createClassOptions(
  selected
) {

  return [
    "9",
    "10",
    "11",
    "12"
  ]
    .map(
      (className) => `
        <option
          value="${className}"
          ${
            String(selected) ===
            String(className)
              ? "selected"
              : ""
          }
        >
          Class ${className}
        </option>
      `
    )
    .join("");
}

/* =========================================
   SECTION OPTIONS
========================================= */

function createSectionOptions(
  selected
) {

  return [
    "A",
    "B",
    "C",
    "D"
  ]
    .map(
      (section) => `
        <option
          value="${section}"
          ${
            selected === section
              ? "selected"
              : ""
          }
        >
          Section ${section}
        </option>
      `
    )
    .join("");
}

/* =========================================
   EXAM OPTIONS
========================================= */

function createExamOptions(
  selected
) {

  return [
    "Half Yearly",
    "Annual",
    "Unit Test",
    "Pre Board"
  ]
    .map(
      (exam) => `
        <option
          value="${escapeHtml(
            exam
          )}"
          ${
            selected === exam
              ? "selected"
              : ""
          }
        >
          ${escapeHtml(
            exam
          )}
        </option>
      `
    )
    .join("");
}

/* =========================================
   LIVE FORM CALCULATION
========================================= */

function updateFormTotals() {

  const totalElement =
    document.querySelector(
      "#live-total-marks"
    );

  const percentageElement =
    document.querySelector(
      "#live-percentage"
    );

  const gradeElement =
    document.querySelector(
      "#live-grade"
    );

  const resultElement =
    document.querySelector(
      "#live-result"
    );


  if (
    !totalElement ||
    !percentageElement ||
    !gradeElement ||
    !resultElement
  ) {
    return;
  }


  let totalMarks = 0;

  let maxMarks = 0;

  let hasFailedSubject =
    false;


  SUBJECTS.forEach(
    (
      subjectName,
      index
    ) => {

      const input =
        document.querySelector(
          `#subject-marks-${index}`
        );


      const resultElement =
        document.querySelector(
          `#subject-result-${index}`
        );


      const marks =
        Number(
          input?.value || 0
        );


      const max =
        Number(
          input?.max || 100
        );


      totalMarks +=
        marks;


      maxMarks +=
        max;


      const percentage =
        getPercentage(
          marks,
          max
        );


      if (
        percentage < 40
      ) {
        hasFailedSubject =
          true;
      }


      if (resultElement) {

        resultElement.textContent =
          `${percentage}%`;

        resultElement.className =
          "result-subject-result " +
          (
            percentage >= 40
              ? "subject-pass"
              : "subject-fail"
          );
      }
    }
  );


  const percentage =
    getPercentage(
      totalMarks,
      maxMarks
    );


  const grade =
    hasFailedSubject
      ? "F"
      : calculateGrade(
          percentage
        );


  const finalResult =
    hasFailedSubject
      ? "Fail"
      : "Pass";


  totalElement.textContent =
    `${totalMarks} / ${maxMarks}`;


  percentageElement.textContent =
    `${percentage}%`;


  gradeElement.textContent =
    grade;


  resultElement.textContent =
    finalResult;


  resultElement.classList.remove(
    "result-preview-pass",
    "result-preview-fail"
  );


  resultElement.classList.add(
    finalResult === "Pass"
      ? "result-preview-pass"
      : "result-preview-fail"
  );
}

/* =========================================
   SUBMIT
========================================= */

function handleResultSubmit(
  event
) {

  event.preventDefault();


  const id =
    document.querySelector(
      "#result-id"
    )?.value.trim();


  const studentName =
    document.querySelector(
      "#result-student-name"
    )?.value.trim();


  const rollNo =
    document.querySelector(
      "#result-roll-no"
    )?.value.trim();


  const className =
    document.querySelector(
      "#result-class"
    )?.value;


  const section =
    document.querySelector(
      "#result-section"
    )?.value;


  const exam =
    document.querySelector(
      "#result-exam"
    )?.value;


  const status =
    document.querySelector(
      "#result-status"
    )?.value ||
    "Draft";


  if (!studentName) {

    alert(
      "Please enter student name."
    );

    return;
  }


  if (!rollNo) {

    alert(
      "Please enter roll number."
    );

    return;
  }


  /* =====================================
     COLLECT ALL SUBJECT MARKS
  ===================================== */

  const subjects =
    SUBJECTS.map(
      (
        subjectName,
        index
      ) => {

        const input =
          document.querySelector(
            `#subject-marks-${index}`
          );


        const marks =
          Number(
            input?.value
          );


        const maxMarks =
          Number(
            input?.max || 100
          );


        return {
          name:
            subjectName,
          marks,
          maxMarks
        };
      }
    );


  /* =====================================
     VALIDATE SUBJECTS
  ===================================== */

  for (
    const subject of subjects
  ) {

    if (
      !Number.isFinite(
        subject.marks
      )
    ) {

      alert(
        `Please enter marks for ${subject.name}.`
      );

      return;
    }


    if (
      subject.marks < 0 ||
      subject.marks >
        subject.maxMarks
    ) {

      alert(
        `Invalid marks for ${subject.name}.`
      );

      return;
    }
  }


  /* =====================================
     DUPLICATE CHECK
  ===================================== */

  const results =
    getResults();


  const duplicate =
    results.find(
      (item) =>

        Number(item.id) !==
          Number(id || 0) &&

        String(
          item.rollNo
        ).toLowerCase() ===
          rollNo.toLowerCase() &&

        String(
          item.exam
        ).toLowerCase() ===
          exam.toLowerCase()
    );


  if (duplicate) {

    const proceed =
      confirm(
        "A complete result already exists for this Roll No and Exam.\n\nDo you want to continue?"
      );


    if (!proceed) {
      return;
    }
  }


  const newResult = {

    id: id
      ? Number(id)
      : generateId(),

    studentName,

    rollNo,

    className,

    section,

    exam,

    subjects,

    status,

    updatedDate:
      getToday(),

    ...(status ===
    "Published"
      ? {
          publishedDate:
            getToday()
        }
      : {})
  };


  /* =====================================
     UPDATE
  ===================================== */

  if (id) {

    const index =
      results.findIndex(
        (item) =>
          Number(item.id) ===
          Number(id)
      );


    if (index === -1) {

      alert(
        "Result not found."
      );

      return;
    }


    const oldResult =
      results[index];


    results[index] = {

      ...oldResult,

      ...newResult,

      publishedDate:
        status ===
        "Published"
          ? oldResult.publishedDate ||
            getToday()
          : undefined
    };


    const saved =
      saveResults(
        results
      );


    if (!saved) {

      alert(
        "Failed to update result."
      );

      return;
    }


    closeResultModal();

    renderResults();


    alert(
      status === "Published"
        ? "Complete result updated and published successfully."
        : "Complete result updated and saved as Draft."
    );


    return;
  }


  /* =====================================
     ADD
  ===================================== */

  results.unshift(
    newResult
  );


  const saved =
    saveResults(
      results
    );


  if (!saved) {

    alert(
      "Failed to save result."
    );

    return;
  }


  closeResultModal();

  renderResults();


  alert(
    status === "Published"
      ? "Complete result added and published successfully."
      : "Complete result added successfully as Draft."
  );
}

/* =========================================
   VIEW MARKSHEET
========================================= */

function openResultView(
  id
) {

  const results =
    getResults();


  const result =
    results.find(
      (item) =>
        Number(item.id) ===
        Number(id)
    );


  if (!result) {

    alert(
      "Result not found."
    );

    return;
  }


  const container =
    document.querySelector(
      "#admin-results-modal-container"
    );


  if (!container) {
    return;
  }


  const overall =
    calculateOverall(result);


  const isPublished =
    result.status ===
    "Published";


  container.innerHTML = `

    <div
      class="admin-results-modal"
    >

      <div
        class="admin-result-view-box"
      >

        <!-- HEADER -->
        <div
          class="admin-result-view-header"
        >

          <div
            class="admin-result-view-title"
          >

            <div
              class="result-view-icon"
            >
              🎓
            </div>

            <div>

              <h3>
                Student Marksheet
              </h3>

              <p>
                Government School
              </p>

            </div>

          </div>


          <button
            type="button"
            class="admin-results-modal-close"
            data-close-result-modal
          >
            ×
          </button>

        </div>


        <!-- STUDENT -->
        <div
          class="admin-result-student-card"
        >

          <div
            class="admin-result-big-avatar"
          >
            ${escapeHtml(
              String(
                result.studentName ||
                  "S"
              )
                .charAt(0)
                .toUpperCase()
            )}
          </div>


          <div
            class="admin-result-student-info"
          >

            <h2>
              ${escapeHtml(
                result.studentName
              )}
            </h2>

            <p>
              Roll No:
              <strong>
                ${escapeHtml(
                  result.rollNo
                )}
              </strong>
            </p>

            <span
              class="result-class-badge"
            >
              Class
              ${escapeHtml(
                result.className
              )}
              -
              ${escapeHtml(
                result.section
              )}
            </span>

          </div>


          <span
            class="
              result-publish-status
              ${
                isPublished
                  ? "result-published"
                  : "result-draft"
              }
            "
          >
            ${
              isPublished
                ? "● Published"
                : "○ Draft"
            }
          </span>

        </div>


        <!-- EXAM INFO -->
        <div
          class="marksheet-exam-info"
        >

          <div>

            <span>
              Examination
            </span>

            <strong>
              ${escapeHtml(
                result.exam
              )}
            </strong>

          </div>


          <div>

            <span>
              Academic Result
            </span>

            <strong>
              Complete Result
            </strong>

          </div>

        </div>


        <!-- SUBJECT TABLE -->
        <div
          class="marksheet-table-wrapper"
        >

          <table
            class="marksheet-table"
          >

            <thead>

              <tr>

                <th>
                  S.No.
                </th>

                <th>
                  Subject
                </th>

                <th>
                  Maximum Marks
                </th>

                <th>
                  Obtained Marks
                </th>

                <th>
                  Percentage
                </th>

                <th>
                  Grade
                </th>

                <th>
                  Result
                </th>

              </tr>

            </thead>


            <tbody>

              ${result.subjects
                .map(
                  (
                    subject,
                    index
                  ) => {

                    const percentage =
                      getPercentage(
                        subject.marks,
                        subject.maxMarks
                      );


                    const grade =
                      calculateGrade(
                        percentage
                      );


                    const passed =
                      percentage >=
                      40;


                    return `
                      <tr>

                        <td>
                          ${
                            index + 1
                          }
                        </td>

                        <td>
                          <strong>
                            ${escapeHtml(
                              subject.name
                            )}
                          </strong>
                        </td>

                        <td>
                          ${subject.maxMarks}
                        </td>

                        <td>
                          <strong>
                            ${subject.marks}
                          </strong>
                        </td>

                        <td>
                          ${percentage}%
                        </td>

                        <td>

                          <span
                            class="
                              result-grade
                              ${
                                grade ===
                                "F"
                                  ? "grade-fail"
                                  : "grade-pass"
                              }
                            "
                          >
                            ${grade}
                          </span>

                        </td>

                        <td>

                          <span
                            class="
                              result-status
                              ${
                                passed
                                  ? "result-pass"
                                  : "result-fail"
                              }
                            "
                          >
                            ${
                              passed
                                ? "Pass"
                                : "Fail"
                            }
                          </span>

                        </td>

                      </tr>
                    `;
                  }
                )
                .join("")}

            </tbody>


            <tfoot>

              <tr>

                <th colspan="2">
                  TOTAL
                </th>

                <th>
                  ${overall.maxMarks}
                </th>

                <th>
                  ${overall.totalMarks}
                </th>

                <th>
                  ${overall.percentage}%
                </th>

                <th>

                  <span
                    class="
                      result-grade
                      ${
                        overall.grade ===
                        "F"
                          ? "grade-fail"
                          : "grade-pass"
                      }
                    "
                  >
                    ${overall.grade}
                  </span>

                </th>

                <th>

                  <span
                    class="
                      result-status
                      ${
                        overall.result ===
                        "Pass"
                          ? "result-pass"
                          : "result-fail"
                      }
                    "
                  >
                    ${overall.result}
                  </span>

                </th>

              </tr>

            </tfoot>

          </table>

        </div>


        <!-- PERFORMANCE -->
        <div
          class="admin-result-score-section"
        >

          <div
            class="admin-result-score-header"
          >

            <span>
              Overall Performance
            </span>

            <strong>
              ${overall.percentage}%
            </strong>

          </div>


          <div
            class="admin-result-score-bar"
          >

            <span
              style="
                width:${Math.min(
                  overall.percentage,
                  100
                )}%
              "
            ></span>

          </div>

        </div>


        <!-- RESULT SUMMARY -->
        <div
          class="marksheet-summary-grid"
        >

          <div
            class="marksheet-summary-box"
          >

            <span>
              Total Marks
            </span>

            <strong>
              ${overall.totalMarks}
              /
              ${overall.maxMarks}
            </strong>

          </div>


          <div
            class="marksheet-summary-box"
          >

            <span>
              Percentage
            </span>

            <strong>
              ${overall.percentage}%
            </strong>

          </div>


          <div
            class="marksheet-summary-box"
          >

            <span>
              Overall Grade
            </span>

            <strong>
              ${overall.grade}
            </strong>

          </div>


          <div
            class="marksheet-summary-box"
          >

            <span>
              Final Result
            </span>

            <strong
              class="
                ${
                  overall.result ===
                  "Pass"
                    ? "result-pass"
                    : "result-fail"
                }
              "
            >
              ${overall.result}
            </strong>

          </div>

        </div>


        <!-- PUBLICATION -->
        <div
          class="admin-result-publication-box"
        >

          <div>

            <span>
              Publication Status
            </span>

            <strong
              class="
                ${
                  isPublished
                    ? "result-published"
                    : "result-draft"
                }
              "
            >
              ${
                isPublished
                  ? "Published"
                  : "Draft"
              }
            </strong>

          </div>


          <div>

            <span>
              ${
                isPublished
                  ? "Published Date"
                  : "Last Updated"
              }
            </span>

            <strong>
              ${
                isPublished
                  ? result.publishedDate ||
                    result.updatedDate ||
                    "-"
                  : result.updatedDate ||
                    "-"
              }
            </strong>

          </div>

        </div>


        <!-- FOOTER -->
        <div
          class="admin-result-view-footer"
        >

          <div
            class="admin-result-view-actions"
          >

            <button
              type="button"
              class="admin-results-cancel-btn"
              data-close-result-modal
            >
              Close
            </button>


            <button
              type="button"
              class="admin-results-save-btn"
              data-edit-result="${result.id}"
            >
              ✏️ Edit
            </button>


            <button
              type="button"
              class="admin-results-refresh-btn"
              data-print-single-result="${result.id}"
            >
              🖨 Print Marksheet
            </button>


            ${
              isPublished
                ? `
                  <button
                    type="button"
                    class="admin-results-cancel-btn"
                    data-unpublish-result="${result.id}"
                  >
                    🔒 Unpublish
                  </button>
                `
                : `
                  <button
                    type="button"
                    class="admin-results-save-btn"
                    data-publish-result="${result.id}"
                  >
                    🚀 Publish Result
                  </button>
                `
            }

          </div>

        </div>

      </div>

    </div>
  `;
}

/* =========================================
   PUBLISH
========================================= */

function publishResult(
  id
) {

  const results =
    getResults();


  const index =
    results.findIndex(
      (item) =>
        Number(item.id) ===
        Number(id)
    );


  if (index === -1) {

    alert(
      "Result not found."
    );

    return;
  }


  const result =
    results[index];


  if (
    result.status ===
    "Published"
  ) {

    alert(
      "This result is already published."
    );

    return;
  }


  const confirmed =
    confirm(
      `Publish complete result of ${result.studentName}?\n\nAll subjects will become visible to students and parents.`
    );


  if (!confirmed) {
    return;
  }


  results[index] = {

    ...result,

    status:
      "Published",

    publishedDate:
      getToday(),

    updatedDate:
      getToday()
  };


  const saved =
    saveResults(
      results
    );


  if (!saved) {

    alert(
      "Failed to publish result."
    );

    return;
  }


  renderResults();

  closeResultModal();


  alert(
    "Complete result published successfully."
  );
}

/* =========================================
   UNPUBLISH
========================================= */

function unpublishResult(
  id
) {

  const results =
    getResults();


  const index =
    results.findIndex(
      (item) =>
        Number(item.id) ===
        Number(id)
    );


  if (index === -1) {

    alert(
      "Result not found."
    );

    return;
  }


  const result =
    results[index];


  if (
    result.status !==
    "Published"
  ) {

    alert(
      "This result is already a Draft."
    );

    return;
  }


  const confirmed =
    confirm(
      `Move ${result.studentName}'s complete result back to Draft?`
    );


  if (!confirmed) {
    return;
  }


  results[index] = {

    ...result,

    status:
      "Draft",

    updatedDate:
      getToday()
  };


  const saved =
    saveResults(
      results
    );


  if (!saved) {

    alert(
      "Failed to unpublish result."
    );

    return;
  }


  renderResults();

  closeResultModal();


  alert(
    "Complete result moved to Draft successfully."
  );
}

/* =========================================
   DELETE
========================================= */

function deleteResult(
  id
) {

  const results =
    getResults();


  const result =
    results.find(
      (item) =>
        Number(item.id) ===
        Number(id)
    );


  if (!result) {

    alert(
      "Result not found."
    );

    return;
  }


  const confirmed =
    confirm(
      `Delete complete result of ${result.studentName}?\n\nAll subject marks will be deleted.\n\nThis action cannot be undone.`
    );


  if (!confirmed) {
    return;
  }


  const updatedResults =
    results.filter(
      (item) =>
        Number(item.id) !==
        Number(id)
    );


  const saved =
    saveResults(
      updatedResults
    );


  if (!saved) {

    alert(
      "Failed to delete result."
    );

    return;
  }


  renderResults();


  alert(
    "Complete result deleted successfully."
  );
}

/* =========================================
   EXPORT CSV
========================================= */

function exportResultsCSV() {

  const results =
    getFilteredResults();


  if (
    results.length === 0
  ) {

    alert(
      "No results available to export."
    );

    return;
  }


  const headers = [

    "Student Name",

    "Roll No",

    "Class",

    "Section",

    "Exam",

    "Mathematics",

    "Science",

    "English",

    "Hindi",

    "Social Science",

    "Total Marks",

    "Maximum Marks",

    "Percentage",

    "Grade",

    "Result",

    "Status",

    "Updated Date"
  ];


  const rows =
    results.map(
      (item) => {

        const overall =
          calculateOverall(
            item
          );


        const subjectMarks =
          SUBJECTS.map(
            (subjectName) => {

              const subject =
                item.subjects.find(
                  (subject) =>
                    subject.name ===
                    subjectName
                );

              return subject
                ? subject.marks
                : "";
            }
          );


        return [

          item.studentName,

          item.rollNo,

          item.className,

          item.section,

          item.exam,

          ...subjectMarks,

          overall.totalMarks,

          overall.maxMarks,

          overall.percentage,

          overall.grade,

          overall.result,

          item.status,

          item.updatedDate ||
            ""

        ];
      }
    );


  const csv = [

    headers,

    ...rows

  ]
    .map(
      (row) =>
        row
          .map(
            (value) =>
              `"${String(
                value ?? ""
              ).replaceAll(
                '"',
                '""'
              )}"`
          )
          .join(",")
    )
    .join("\n");


  const blob =
    new Blob(
      [csv],
      {
        type:
          "text/csv;charset=utf-8;"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `school-complete-results-${getToday()}.csv`;


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();


  URL.revokeObjectURL(
    url
  );
}

/* =========================================
   PRINT ALL RESULTS
========================================= */

function printResults() {

  const results =
    getFilteredResults();


  if (
    results.length === 0
  ) {

    alert(
      "No results available to print."
    );

    return;
  }


  const rows =
    results
      .map(
        (item) => {

          const overall =
            calculateOverall(
              item
            );


          return `
            <tr>

              <td>
                ${escapeHtml(
                  item.studentName
                )}
              </td>

              <td>
                ${escapeHtml(
                  item.rollNo
                )}
              </td>

              <td>
                ${escapeHtml(
                  item.className
                )}-${escapeHtml(
                  item.section
                )}
              </td>

              <td>
                ${escapeHtml(
                  item.exam
                )}
              </td>

              <td>
                ${overall.totalMarks}/${
                  overall.maxMarks
                }
              </td>

              <td>
                ${overall.percentage}%
              </td>

              <td>
                ${overall.grade}
              </td>

              <td>
                ${overall.result}
              </td>

              <td>
                ${item.status}
              </td>

            </tr>
          `;
        }
      )
      .join("");


  const printWindow =
    window.open(
      "",
      "_blank",
      "width=1200,height=800"
    );


  if (!printWindow) {

    alert(
      "Please allow pop-ups to print results."
    );

    return;
  }


  printWindow.document.write(`

    <!DOCTYPE html>

    <html>

      <head>

        <title>
          Government School Results
        </title>

        <style>

          body {
            font-family:
              Arial,
              sans-serif;

            padding: 30px;
          }

          h1 {
            text-align: center;
            margin-bottom: 5px;
          }

          h2 {
            text-align: center;
            margin-top: 0;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
          }

          th,
          td {
            border: 1px solid #d1d5db;
            padding: 9px;
            font-size: 12px;
          }

          th {
            background: #f1f5f9;
          }

        </style>

      </head>


      <body>

        <h1>
          Government School
        </h1>

        <h2>
          Complete Student Results
        </h2>


        <table>

          <thead>

            <tr>

              <th>
                Student
              </th>

              <th>
                Roll No
              </th>

              <th>
                Class
              </th>

              <th>
                Exam
              </th>

              <th>
                Total
              </th>

              <th>
                Percentage
              </th>

              <th>
                Grade
              </th>

              <th>
                Result
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>


          <tbody>
            ${rows}
          </tbody>

        </table>

      </body>

    </html>
  `);


  printWindow.document.close();


  setTimeout(() => {

    printWindow.focus();

    printWindow.print();

  }, 300);
}

/* =========================================
   CLOSE MODAL
========================================= */

function closeResultModal() {

  const container =
    document.querySelector(
      "#admin-results-modal-container"
    );


  if (container) {
    container.innerHTML = "";
  }
}

/* =========================================
   DEFAULT EXPORT
========================================= */

export default AdminResults;