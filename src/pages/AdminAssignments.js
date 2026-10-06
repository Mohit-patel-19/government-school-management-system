/* =========================================
   ADMIN ASSIGNMENTS
========================================= */

const STORAGE_KEY = "government_school_admin_assignments_v1";

/* =========================================
   DEFAULT ASSIGNMENTS
========================================= */

const DEFAULT_ASSIGNMENTS = [
  {
    id: 1,
    title: "Algebra Practice Worksheet",
    className: "Class 10 A",
    subject: "Mathematics",
    teacher: "Rajesh Kumar",
    description:
      "Complete the algebra worksheet covering linear equations and polynomials.",
    assignedDate: "2026-09-01",
    dueDate: "2026-09-08",
    totalMarks: 20,
    submissions: 32,
    totalStudents: 40,
    status: "Active"
  },
  {
    id: 2,
    title: "Light Reflection Questions",
    className: "Class 10 B",
    subject: "Science",
    teacher: "Sunita Sharma",
    description:
      "Answer the questions related to reflection of light and mirrors.",
    assignedDate: "2026-09-02",
    dueDate: "2026-09-10",
    totalMarks: 25,
    submissions: 27,
    totalStudents: 38,
    status: "Active"
  },
  {
    id: 3,
    title: "English Grammar Exercise",
    className: "Class 9 A",
    subject: "English",
    teacher: "Priya Mehta",
    description:
      "Complete the grammar exercise covering tenses, articles and prepositions.",
    assignedDate: "2026-08-25",
    dueDate: "2026-09-03",
    totalMarks: 20,
    submissions: 42,
    totalStudents: 42,
    status: "Completed"
  },
  {
    id: 4,
    title: "Computer Fundamentals",
    className: "Class 9 B",
    subject: "Computer",
    teacher: "Amit Verma",
    description:
      "Prepare short answers on computer fundamentals and basic hardware.",
    assignedDate: "2026-09-03",
    dueDate: "2026-09-12",
    totalMarks: 30,
    submissions: 18,
    totalStudents: 36,
    status: "Active"
  }
];

/* =========================================
   STORAGE HELPERS
========================================= */

function getAssignments() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(DEFAULT_ASSIGNMENTS)
      );

      return [...DEFAULT_ASSIGNMENTS];
    }

    const parsedData = JSON.parse(savedData);

    if (!Array.isArray(parsedData)) {
      throw new Error("Invalid assignment data");
    }

    return parsedData;
  } catch (error) {
    console.error("Unable to load assignments:", error);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(DEFAULT_ASSIGNMENTS)
    );

    return [...DEFAULT_ASSIGNMENTS];
  }
}

function saveAssignments(assignments) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(assignments)
    );

    return true;
  } catch (error) {
    console.error("Unable to save assignments:", error);
    return false;
  }
}

/* =========================================
   UTILITY FUNCTIONS
========================================= */

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  if (!dateString) return "-";

  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function getStatusClass(status) {
  if (status === "Completed") {
    return "completed";
  }

  if (status === "Draft") {
    return "draft";
  }

  return "active";
}

function getSubmissionPercentage(assignment) {
  const total = Number(assignment.totalStudents) || 0;
  const submissions = Number(assignment.submissions) || 0;

  if (total <= 0) return 0;

  return Math.min(
    100,
    Math.round((submissions / total) * 100)
  );
}

function getNextId(assignments) {
  if (!assignments.length) return 1;

  return Math.max(
    ...assignments.map((item) => Number(item.id) || 0)
  ) + 1;
}

/* =========================================
   MAIN ADMIN ASSIGNMENTS
========================================= */

export function AdminAssignments() {
  return `
    <div class="admin-page admin-assignments">

      <!-- PAGE HEADER -->
      <div class="admin-assignments-header">

        <div class="admin-assignments-heading">
          <span class="admin-assignments-kicker">
            Academic Management
          </span>

          <h1>Assignments</h1>

          <p>
            Create, manage and monitor assignments for all classes.
          </p>
        </div>

        <div class="admin-assignments-header-actions">

          <button
            type="button"
            class="admin-assignment-secondary-btn"
            id="adminAssignmentRefreshBtn"
          >
            <span>↻</span>
            Refresh
          </button>

          <button
            type="button"
            class="admin-assignment-primary-btn"
            id="adminAddAssignmentBtn"
          >
            <span>＋</span>
            Add Assignment
          </button>

        </div>

      </div>

      <!-- SUMMARY -->
      <div class="admin-assignment-summary-grid">

        <div class="admin-assignment-summary-card">
          <div class="admin-assignment-summary-icon">📚</div>

          <div>
            <span>Total Assignments</span>
            <strong id="adminAssignmentTotal">0</strong>
          </div>
        </div>

        <div class="admin-assignment-summary-card">
          <div class="admin-assignment-summary-icon">⚡</div>

          <div>
            <span>Active</span>
            <strong id="adminAssignmentActive">0</strong>
          </div>
        </div>

        <div class="admin-assignment-summary-card">
          <div class="admin-assignment-summary-icon">✓</div>

          <div>
            <span>Completed</span>
            <strong id="adminAssignmentCompleted">0</strong>
          </div>
        </div>

        <div class="admin-assignment-summary-card">
          <div class="admin-assignment-summary-icon">📝</div>

          <div>
            <span>Total Submissions</span>
            <strong id="adminAssignmentSubmissions">0</strong>
          </div>
        </div>

      </div>

      <!-- TOOLBAR -->
      <div class="admin-assignment-toolbar">

        <div class="admin-assignment-search">
          <span>⌕</span>

          <input
            type="text"
            id="adminAssignmentSearch"
            placeholder="Search assignment, class, subject or teacher..."
            autocomplete="off"
          />
        </div>

        <select
          id="adminAssignmentClassFilter"
          class="admin-assignment-filter"
        >
          <option value="All">All Classes</option>
          <option value="Class 10 A">Class 10 A</option>
          <option value="Class 10 B">Class 10 B</option>
          <option value="Class 9 A">Class 9 A</option>
          <option value="Class 9 B">Class 9 B</option>
        </select>

        <select
          id="adminAssignmentSubjectFilter"
          class="admin-assignment-filter"
        >
          <option value="All">All Subjects</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
          <option value="Computer">Computer</option>
          <option value="Hindi">Hindi</option>
          <option value="Social Science">Social Science</option>
        </select>

        <select
          id="adminAssignmentStatusFilter"
          class="admin-assignment-filter"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Draft">Draft</option>
        </select>

      </div>

      <!-- ASSIGNMENTS TABLE -->
      <div class="admin-assignment-table-card">

        <div class="admin-assignment-table-header">

          <div>
            <h2>Assignment Records</h2>

            <p id="adminAssignmentRecordCount">
              0 assignments
            </p>
          </div>

        </div>

        <div class="admin-assignment-table-wrapper">

          <table class="admin-assignment-table">

            <thead>
              <tr>
                <th>Assignment</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Due Date</th>
                <th>Marks</th>
                <th>Submissions</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody id="adminAssignmentTableBody"></tbody>

          </table>

        </div>

        <div
          id="adminAssignmentEmptyState"
          class="admin-assignment-empty"
          style="display:none;"
        >
          <div class="admin-assignment-empty-icon">📚</div>

          <h3>No assignments found</h3>

          <p>
            Try changing your search or filter, or create a new assignment.
          </p>

          <button
            type="button"
            class="admin-assignment-primary-btn"
            id="adminAssignmentEmptyAddBtn"
          >
            ＋ Add Assignment
          </button>
        </div>

      </div>

      <!-- MODAL HOST -->
      <div
        id="adminAssignmentModalHost"
        class="admin-assignment-modal-host"
      ></div>

    </div>
  `;
}

/* =========================================
   RENDER ASSIGNMENTS
========================================= */

function renderAssignments() {
  const tableBody = document.querySelector(
    "#adminAssignmentTableBody"
  );

  const emptyState = document.querySelector(
    "#adminAssignmentEmptyState"
  );

  const recordCount = document.querySelector(
    "#adminAssignmentRecordCount"
  );

  if (!tableBody) return;

  const searchInput = document.querySelector(
    "#adminAssignmentSearch"
  );

  const classFilter = document.querySelector(
    "#adminAssignmentClassFilter"
  );

  const subjectFilter = document.querySelector(
    "#adminAssignmentSubjectFilter"
  );

  const statusFilter = document.querySelector(
    "#adminAssignmentStatusFilter"
  );

  const searchValue = (
    searchInput?.value || ""
  ).trim().toLowerCase();

  const selectedClass =
    classFilter?.value || "All";

  const selectedSubject =
    subjectFilter?.value || "All";

  const selectedStatus =
    statusFilter?.value || "All";

  const assignments = getAssignments();

  const filteredAssignments = assignments.filter(
    (assignment) => {

      const searchableText = [
        assignment.title,
        assignment.className,
        assignment.subject,
        assignment.teacher,
        assignment.description
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchValue ||
        searchableText.includes(searchValue);

      const matchesClass =
        selectedClass === "All" ||
        assignment.className === selectedClass;

      const matchesSubject =
        selectedSubject === "All" ||
        assignment.subject === selectedSubject;

      const matchesStatus =
        selectedStatus === "All" ||
        assignment.status === selectedStatus;

      return (
        matchesSearch &&
        matchesClass &&
        matchesSubject &&
        matchesStatus
      );
    }
  );

  if (recordCount) {
    recordCount.textContent =
      `${filteredAssignments.length} assignment${
        filteredAssignments.length === 1 ? "" : "s"
      }`;
  }

  if (!filteredAssignments.length) {
    tableBody.innerHTML = "";

    if (emptyState) {
      emptyState.style.display = "flex";
    }

    updateAssignmentSummary(assignments);
    return;
  }

  if (emptyState) {
    emptyState.style.display = "none";
  }

  tableBody.innerHTML = filteredAssignments
    .map((assignment) => {

      const percentage =
        getSubmissionPercentage(assignment);

      const statusClass =
        getStatusClass(assignment.status);

      return `
        <tr>

          <td>
            <div class="admin-assignment-title-cell">

              <div class="admin-assignment-title-icon">
                📄
              </div>

              <div>
                <strong>
                  ${escapeHTML(assignment.title)}
                </strong>

                <small>
                  Assigned ${formatDate(assignment.assignedDate)}
                </small>
              </div>

            </div>
          </td>

          <td>
            <span class="admin-assignment-class-badge">
              ${escapeHTML(assignment.className)}
            </span>
          </td>

          <td>
            <span class="admin-assignment-subject">
              ${escapeHTML(assignment.subject)}
            </span>
          </td>

          <td>
            <div class="admin-assignment-teacher">
              <div class="admin-assignment-teacher-avatar">
                ${escapeHTML(
                  (assignment.teacher || "T")
                    .charAt(0)
                    .toUpperCase()
                )}
              </div>

              <span>
                ${escapeHTML(assignment.teacher)}
              </span>
            </div>
          </td>

          <td>
            <span class="admin-assignment-due-date">
              ${formatDate(assignment.dueDate)}
            </span>
          </td>

          <td>
            <strong>
              ${Number(assignment.totalMarks) || 0}
            </strong>
          </td>

          <td>
            <div class="admin-assignment-submission-cell">

              <div class="admin-assignment-submission-top">
                <span>
                  ${Number(assignment.submissions) || 0}/${
                    Number(assignment.totalStudents) || 0
                  }
                </span>

                <small>${percentage}%</small>
              </div>

              <div class="admin-assignment-progress">
                <span
                  style="width:${percentage}%"
                ></span>
              </div>

            </div>
          </td>

          <td>
            <span
              class="admin-assignment-status ${statusClass}"
            >
              ${escapeHTML(assignment.status)}
            </span>
          </td>

          <td>

            <div class="admin-assignment-actions">

              <button
                type="button"
                class="admin-assignment-action-btn view"
                data-action="view"
                data-id="${assignment.id}"
                title="View"
              >
                👁
              </button>

              <button
                type="button"
                class="admin-assignment-action-btn edit"
                data-action="edit"
                data-id="${assignment.id}"
                title="Edit"
              >
                ✎
              </button>

              <button
                type="button"
                class="admin-assignment-action-btn delete"
                data-action="delete"
                data-id="${assignment.id}"
                title="Delete"
              >
                🗑
              </button>

            </div>

          </td>

        </tr>
      `;
    })
    .join("");

  updateAssignmentSummary(assignments);
}

/* =========================================
   SUMMARY
========================================= */

function updateAssignmentSummary(assignments) {
  const totalElement = document.querySelector(
    "#adminAssignmentTotal"
  );

  const activeElement = document.querySelector(
    "#adminAssignmentActive"
  );

  const completedElement = document.querySelector(
    "#adminAssignmentCompleted"
  );

  const submissionsElement = document.querySelector(
    "#adminAssignmentSubmissions"
  );

  const total = assignments.length;

  const active = assignments.filter(
    (item) => item.status === "Active"
  ).length;

  const completed = assignments.filter(
    (item) => item.status === "Completed"
  ).length;

  const submissions = assignments.reduce(
    (sum, item) =>
      sum + (Number(item.submissions) || 0),
    0
  );

  if (totalElement) {
    totalElement.textContent = total;
  }

  if (activeElement) {
    activeElement.textContent = active;
  }

  if (completedElement) {
    completedElement.textContent = completed;
  }

  if (submissionsElement) {
    submissionsElement.textContent = submissions;
  }
}

/* =========================================
   ASSIGNMENT FORM
========================================= */

function showAssignmentForm(assignment = null) {
  const modalHost = document.querySelector(
    "#adminAssignmentModalHost"
  );

  if (!modalHost) return;

  const isEdit = Boolean(assignment);

  const title = isEdit
    ? "Edit Assignment"
    : "Create Assignment";

  const buttonText = isEdit
    ? "Update Assignment"
    : "Create Assignment";

  const safeAssignment = assignment || {
    title: "",
    className: "Class 10 A",
    subject: "Mathematics",
    teacher: "",
    description: "",
    assignedDate: new Date()
      .toISOString()
      .split("T")[0],
    dueDate: "",
    totalMarks: 20,
    submissions: 0,
    totalStudents: 40,
    status: "Active"
  };

  modalHost.innerHTML = `
    <div
      class="admin-assignment-modal-overlay"
      id="adminAssignmentModalOverlay"
    >

      <div
        class="admin-assignment-modal"
        role="dialog"
        aria-modal="true"
      >

        <div class="admin-assignment-modal-header">

          <div>
            <span>
              Assignment Management
            </span>

            <h2>${title}</h2>
          </div>

          <button
            type="button"
            class="admin-assignment-modal-close"
            id="adminAssignmentModalClose"
          >
            ×
          </button>

        </div>

        <form
          id="adminAssignmentForm"
          class="admin-assignment-form"
          novalidate
        >

          <input
            type="hidden"
            id="adminAssignmentEditId"
            value="${isEdit ? safeAssignment.id : ""}"
          />

          <div class="admin-assignment-form-grid">

            <div class="admin-assignment-form-group full">
              <label for="adminAssignmentTitle">
                Assignment Title
              </label>

              <input
                id="adminAssignmentTitle"
                type="text"
                value="${escapeHTML(safeAssignment.title)}"
                placeholder="Enter assignment title"
                maxlength="100"
                required
              />
            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentClass">
                Class
              </label>

              <select
                id="adminAssignmentClass"
                required
              >
                ${[
                  "Class 10 A",
                  "Class 10 B",
                  "Class 9 A",
                  "Class 9 B"
                ]
                  .map(
                    (item) => `
                      <option
                        value="${item}"
                        ${
                          safeAssignment.className === item
                            ? "selected"
                            : ""
                        }
                      >
                        ${item}
                      </option>
                    `
                  )
                  .join("")}
              </select>

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentSubject">
                Subject
              </label>

              <select
                id="adminAssignmentSubject"
                required
              >
                ${[
                  "Mathematics",
                  "Science",
                  "English",
                  "Computer",
                  "Hindi",
                  "Social Science"
                ]
                  .map(
                    (item) => `
                      <option
                        value="${item}"
                        ${
                          safeAssignment.subject === item
                            ? "selected"
                            : ""
                        }
                      >
                        ${item}
                      </option>
                    `
                  )
                  .join("")}
              </select>

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentTeacher">
                Teacher
              </label>

              <input
                id="adminAssignmentTeacher"
                type="text"
                value="${escapeHTML(safeAssignment.teacher)}"
                placeholder="Enter teacher name"
                maxlength="80"
                required
              />

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentMarks">
                Total Marks
              </label>

              <input
                id="adminAssignmentMarks"
                type="number"
                min="1"
                max="500"
                value="${Number(safeAssignment.totalMarks) || 20}"
                required
              />

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentAssignedDate">
                Assigned Date
              </label>

              <input
                id="adminAssignmentAssignedDate"
                type="date"
                value="${safeAssignment.assignedDate || ""}"
                required
              />

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentDueDate">
                Due Date
              </label>

              <input
                id="adminAssignmentDueDate"
                type="date"
                value="${safeAssignment.dueDate || ""}"
                required
              />

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentStudents">
                Total Students
              </label>

              <input
                id="adminAssignmentStudents"
                type="number"
                min="1"
                max="500"
                value="${
                  Number(safeAssignment.totalStudents) || 40
                }"
                required
              />

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentSubmissions">
                Current Submissions
              </label>

              <input
                id="adminAssignmentSubmissions"
                type="number"
                min="0"
                max="${
                  Number(safeAssignment.totalStudents) || 40
                }"
                value="${
                  Number(safeAssignment.submissions) || 0
                }"
                required
              />

            </div>

            <div class="admin-assignment-form-group">

              <label for="adminAssignmentStatus">
                Status
              </label>

              <select
                id="adminAssignmentStatus"
              >
                <option
                  value="Active"
                  ${
                    safeAssignment.status === "Active"
                      ? "selected"
                      : ""
                  }
                >
                  Active
                </option>

                <option
                  value="Completed"
                  ${
                    safeAssignment.status === "Completed"
                      ? "selected"
                      : ""
                  }
                >
                  Completed
                </option>

                <option
                  value="Draft"
                  ${
                    safeAssignment.status === "Draft"
                      ? "selected"
                      : ""
                  }
                >
                  Draft
                </option>
              </select>

            </div>

            <div class="admin-assignment-form-group full">

              <label for="adminAssignmentDescription">
                Description
              </label>

              <textarea
                id="adminAssignmentDescription"
                rows="5"
                maxlength="1000"
                placeholder="Enter assignment instructions..."
              >${escapeHTML(
                safeAssignment.description
              )}</textarea>

            </div>

          </div>

          <div class="admin-assignment-form-actions">

            <button
              type="button"
              class="admin-assignment-secondary-btn"
              id="adminAssignmentCancelBtn"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="admin-assignment-primary-btn"
            >
              ${buttonText}
            </button>

          </div>

        </form>

      </div>

    </div>
  `;

  setupAssignmentModal(assignment);
}

/* =========================================
   MODAL EVENTS
========================================= */

function setupAssignmentModal(editingAssignment) {
  const overlay = document.querySelector(
    "#adminAssignmentModalOverlay"
  );

  const closeButton = document.querySelector(
    "#adminAssignmentModalClose"
  );

  const cancelButton = document.querySelector(
    "#adminAssignmentCancelBtn"
  );

  const form = document.querySelector(
    "#adminAssignmentForm"
  );

  const studentsInput = document.querySelector(
    "#adminAssignmentStudents"
  );

  const submissionsInput = document.querySelector(
    "#adminAssignmentSubmissions"
  );

  const closeModal = () => {
    const modalHost = document.querySelector(
      "#adminAssignmentModalHost"
    );

    if (modalHost) {
      modalHost.innerHTML = "";
    }
  };

  closeButton?.addEventListener(
    "click",
    closeModal
  );

  cancelButton?.addEventListener(
    "click",
    closeModal
  );

  overlay?.addEventListener(
    "click",
    (event) => {
      if (event.target === overlay) {
        closeModal();
      }
    }
  );

  document.addEventListener(
    "keydown",
    function escapeHandler(event) {
      if (event.key !== "Escape") return;

      closeModal();

      document.removeEventListener(
        "keydown",
        escapeHandler
      );
    }
  );

  studentsInput?.addEventListener(
    "input",
    () => {
      const students =
        Number(studentsInput.value) || 0;

      submissionsInput.max = students;

      if (
        Number(submissionsInput.value) > students
      ) {
        submissionsInput.value = students;
      }
    }
  );

  form?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      saveAssignmentFromForm(
        editingAssignment
      );
    }
  );
}

/* =========================================
   SAVE ASSIGNMENT
========================================= */

function saveAssignmentFromForm(
  editingAssignment
) {
  const titleInput = document.querySelector(
    "#adminAssignmentTitle"
  );

  const classInput = document.querySelector(
    "#adminAssignmentClass"
  );

  const subjectInput = document.querySelector(
    "#adminAssignmentSubject"
  );

  const teacherInput = document.querySelector(
    "#adminAssignmentTeacher"
  );

  const marksInput = document.querySelector(
    "#adminAssignmentMarks"
  );

  const assignedDateInput = document.querySelector(
    "#adminAssignmentAssignedDate"
  );

  const dueDateInput = document.querySelector(
    "#adminAssignmentDueDate"
  );

  const studentsInput = document.querySelector(
    "#adminAssignmentStudents"
  );

  const submissionsInput = document.querySelector(
    "#adminAssignmentSubmissions"
  );

  const statusInput = document.querySelector(
    "#adminAssignmentStatus"
  );

  const descriptionInput = document.querySelector(
    "#adminAssignmentDescription"
  );

  if (
    !titleInput ||
    !classInput ||
    !subjectInput ||
    !teacherInput ||
    !marksInput ||
    !assignedDateInput ||
    !dueDateInput ||
    !studentsInput ||
    !submissionsInput ||
    !statusInput ||
    !descriptionInput
  ) {
    return;
  }

  const title = titleInput.value.trim();
  const teacher = teacherInput.value.trim();

  const totalMarks =
    Number(marksInput.value);

  const totalStudents =
    Number(studentsInput.value);

  const submissions =
    Number(submissionsInput.value);

  if (!title) {
    alert("Please enter assignment title.");
    titleInput.focus();
    return;
  }

  if (!teacher) {
    alert("Please enter teacher name.");
    teacherInput.focus();
    return;
  }

  if (!assignedDateInput.value) {
    alert("Please select assigned date.");
    return;
  }

  if (!dueDateInput.value) {
    alert("Please select due date.");
    return;
  }

  if (
    new Date(dueDateInput.value) <
    new Date(assignedDateInput.value)
  ) {
    alert(
      "Due date cannot be before assigned date."
    );
    return;
  }

  if (
    !Number.isFinite(totalMarks) ||
    totalMarks <= 0
  ) {
    alert("Please enter valid total marks.");
    marksInput.focus();
    return;
  }

  if (
    !Number.isFinite(totalStudents) ||
    totalStudents <= 0
  ) {
    alert("Please enter valid student count.");
    studentsInput.focus();
    return;
  }

  if (
    !Number.isFinite(submissions) ||
    submissions < 0 ||
    submissions > totalStudents
  ) {
    alert(
      "Submissions must be between 0 and total students."
    );
    submissionsInput.focus();
    return;
  }

  const assignments = getAssignments();

  if (editingAssignment) {
    const index = assignments.findIndex(
      (item) =>
        Number(item.id) ===
        Number(editingAssignment.id)
    );

    if (index === -1) {
      alert("Assignment not found.");
      return;
    }

    assignments[index] = {
      ...assignments[index],
      title,
      className: classInput.value,
      subject: subjectInput.value,
      teacher,
      description:
        descriptionInput.value.trim(),
      assignedDate:
        assignedDateInput.value,
      dueDate:
        dueDateInput.value,
      totalMarks,
      submissions,
      totalStudents,
      status: statusInput.value
    };
  } else {
    assignments.unshift({
      id: getNextId(assignments),
      title,
      className: classInput.value,
      subject: subjectInput.value,
      teacher,
      description:
        descriptionInput.value.trim(),
      assignedDate:
        assignedDateInput.value,
      dueDate:
        dueDateInput.value,
      totalMarks,
      submissions,
      totalStudents,
      status: statusInput.value
    });
  }

  const saved = saveAssignments(
    assignments
  );

  if (!saved) {
    alert(
      "Unable to save assignment. Please try again."
    );
    return;
  }

  const modalHost = document.querySelector(
    "#adminAssignmentModalHost"
  );

  if (modalHost) {
    modalHost.innerHTML = "";
  }

  renderAssignments();

  alert(
    editingAssignment
      ? "Assignment updated successfully."
      : "Assignment created successfully."
  );
}

/* =========================================
   VIEW ASSIGNMENT
========================================= */

function showAssignmentDetails(
  assignment
) {
  const modalHost = document.querySelector(
    "#adminAssignmentModalHost"
  );

  if (!modalHost) return;

  const percentage =
    getSubmissionPercentage(assignment);

  const statusClass =
    getStatusClass(assignment.status);

  modalHost.innerHTML = `
    <div
      class="admin-assignment-modal-overlay"
      id="adminAssignmentModalOverlay"
    >

      <div
        class="admin-assignment-modal admin-assignment-view-modal"
        role="dialog"
        aria-modal="true"
      >

        <div class="admin-assignment-modal-header">

          <div>
            <span>
              Assignment Details
            </span>

            <h2>
              ${escapeHTML(assignment.title)}
            </h2>
          </div>

          <button
            type="button"
            class="admin-assignment-modal-close"
            id="adminAssignmentModalClose"
          >
            ×
          </button>

        </div>

        <div class="admin-assignment-view-body">

          <div class="admin-assignment-detail-status">
            <span
              class="admin-assignment-status ${statusClass}"
            >
              ${escapeHTML(assignment.status)}
            </span>
          </div>

          <div class="admin-assignment-details-grid">

            <div>
              <span>Class</span>
              <strong>
                ${escapeHTML(assignment.className)}
              </strong>
            </div>

            <div>
              <span>Subject</span>
              <strong>
                ${escapeHTML(assignment.subject)}
              </strong>
            </div>

            <div>
              <span>Teacher</span>
              <strong>
                ${escapeHTML(assignment.teacher)}
              </strong>
            </div>

            <div>
              <span>Total Marks</span>
              <strong>
                ${Number(assignment.totalMarks) || 0}
              </strong>
            </div>

            <div>
              <span>Assigned Date</span>
              <strong>
                ${formatDate(assignment.assignedDate)}
              </strong>
            </div>

            <div>
              <span>Due Date</span>
              <strong>
                ${formatDate(assignment.dueDate)}
              </strong>
            </div>

            <div>
              <span>Total Students</span>
              <strong>
                ${Number(assignment.totalStudents) || 0}
              </strong>
            </div>

            <div>
              <span>Submissions</span>
              <strong>
                ${Number(assignment.submissions) || 0}
              </strong>
            </div>

          </div>

          <div class="admin-assignment-view-progress">

            <div class="admin-assignment-view-progress-top">
              <span>Submission Progress</span>
              <strong>${percentage}%</strong>
            </div>

            <div class="admin-assignment-progress large">
              <span
                style="width:${percentage}%"
              ></span>
            </div>

          </div>

          <div class="admin-assignment-description-box">

            <h3>Description</h3>

            <p>
              ${
                escapeHTML(
                  assignment.description
                ) || "No description provided."
              }
            </p>

          </div>

        </div>

        <div class="admin-assignment-form-actions">

          <button
            type="button"
            class="admin-assignment-secondary-btn"
            id="adminAssignmentModalCloseBottom"
          >
            Close
          </button>

          <button
            type="button"
            class="admin-assignment-primary-btn"
            id="adminAssignmentViewEditBtn"
          >
            ✎ Edit Assignment
          </button>

        </div>

      </div>

    </div>
  `;

  const closeModal = () => {
    modalHost.innerHTML = "";
  };

  document
    .querySelector(
      "#adminAssignmentModalClose"
    )
    ?.addEventListener(
      "click",
      closeModal
    );

  document
    .querySelector(
      "#adminAssignmentModalCloseBottom"
    )
    ?.addEventListener(
      "click",
      closeModal
    );

  document
    .querySelector(
      "#adminAssignmentViewEditBtn"
    )
    ?.addEventListener(
      "click",
      () => {
        modalHost.innerHTML = "";
        showAssignmentForm(assignment);
      }
    );

  document
    .querySelector(
      "#adminAssignmentModalOverlay"
    )
    ?.addEventListener(
      "click",
      (event) => {
        if (
          event.target.id ===
          "adminAssignmentModalOverlay"
        ) {
          closeModal();
        }
      }
    );
}

/* =========================================
   DELETE ASSIGNMENT
========================================= */

function deleteAssignment(id) {
  const assignments = getAssignments();

  const assignment = assignments.find(
    (item) =>
      Number(item.id) === Number(id)
  );

  if (!assignment) {
    alert("Assignment not found.");
    return;
  }

  const confirmed = confirm(
    `Are you sure you want to delete "${assignment.title}"?`
  );

  if (!confirmed) return;

  const updatedAssignments =
    assignments.filter(
      (item) =>
        Number(item.id) !== Number(id)
    );

  saveAssignments(
    updatedAssignments
  );

  renderAssignments();

  alert(
    "Assignment deleted successfully."
  );
}

/* =========================================
   EVENT DELEGATION
========================================= */

function setupAssignmentTableActions() {
  const tableBody = document.querySelector(
    "#adminAssignmentTableBody"
  );

  if (!tableBody) return;

  tableBody.addEventListener(
    "click",
    (event) => {

      const button =
        event.target.closest(
          "[data-action]"
        );

      if (!button) return;

      const action =
        button.dataset.action;

      const id =
        Number(button.dataset.id);

      const assignments =
        getAssignments();

      const assignment =
        assignments.find(
          (item) =>
            Number(item.id) === id
        );

      if (!assignment) {
        alert("Assignment not found.");
        return;
      }

      if (action === "view") {
        showAssignmentDetails(
          assignment
        );
      }

      if (action === "edit") {
        showAssignmentForm(
          assignment
        );
      }

      if (action === "delete") {
        deleteAssignment(id);
      }
    }
  );
}

/* =========================================
   MAIN SETUP
========================================= */

export function setupAdminAssignments() {
  const searchInput = document.querySelector(
    "#adminAssignmentSearch"
  );

  const classFilter = document.querySelector(
    "#adminAssignmentClassFilter"
  );

  const subjectFilter = document.querySelector(
    "#adminAssignmentSubjectFilter"
  );

  const statusFilter = document.querySelector(
    "#adminAssignmentStatusFilter"
  );

  const addButton = document.querySelector(
    "#adminAddAssignmentBtn"
  );

  const emptyAddButton = document.querySelector(
    "#adminAssignmentEmptyAddBtn"
  );

  const refreshButton = document.querySelector(
    "#adminAssignmentRefreshBtn"
  );

  if (!searchInput) {
    return;
  }

  /* Prevent duplicate listeners */
  if (
    searchInput.dataset.initialized === "true"
  ) {
    renderAssignments();
    return;
  }

  searchInput.dataset.initialized = "true";

  searchInput.addEventListener(
    "input",
    renderAssignments
  );

  classFilter?.addEventListener(
    "change",
    renderAssignments
  );

  subjectFilter?.addEventListener(
    "change",
    renderAssignments
  );

  statusFilter?.addEventListener(
    "change",
    renderAssignments
  );

  addButton?.addEventListener(
    "click",
    () => {
      showAssignmentForm();
    }
  );

  emptyAddButton?.addEventListener(
    "click",
    () => {
      showAssignmentForm();
    }
  );

  refreshButton?.addEventListener(
    "click",
    () => {
      renderAssignments();
    }
  );

  setupAssignmentTableActions();

  renderAssignments();
}