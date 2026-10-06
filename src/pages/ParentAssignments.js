/* =========================================
   PARENT ASSIGNMENTS
========================================= */

const assignmentsData = [
  {
    id: 1,
    title: "Mathematics Exercise",
    subject: "Mathematics",
    teacher: "Class Teacher",
    description:
      "Complete Chapter 5 exercise questions from the textbook.",
    assignedDate: "02 September 2026",
    dueDate: "06 September 2026",
    status: "Pending",
    priority: "High"
  },
  {
    id: 2,
    title: "Science Project",
    subject: "Science",
    teacher: "Science Teacher",
    description:
      "Prepare the assigned science project for Chapter 3.",
    assignedDate: "28 August 2026",
    dueDate: "05 September 2026",
    status: "Submitted",
    priority: "Medium"
  },
  {
    id: 3,
    title: "English Essay",
    subject: "English",
    teacher: "English Teacher",
    description:
      "Write an essay on the given topic in your English notebook.",
    assignedDate: "01 September 2026",
    dueDate: "08 September 2026",
    status: "Pending",
    priority: "Medium"
  },
  {
    id: 4,
    title: "Social Science Worksheet",
    subject: "Social Science",
    teacher: "SST Teacher",
    description:
      "Complete the worksheet related to the current chapter.",
    assignedDate: "25 August 2026",
    dueDate: "30 August 2026",
    status: "Overdue",
    priority: "High"
  },
  {
    id: 5,
    title: "Hindi Grammar Exercise",
    subject: "Hindi",
    teacher: "Hindi Teacher",
    description:
      "Complete the grammar exercises assigned in class.",
    assignedDate: "30 August 2026",
    dueDate: "07 September 2026",
    status: "Pending",
    priority: "Low"
  }
];

/* =========================================
   ICON
========================================= */

function getAssignmentIcon(subject) {
  const icons = {
    Mathematics: "📐",
    Science: "🔬",
    English: "📖",
    Hindi: "📝",
    "Social Science": "🌍",
    Computer: "💻"
  };

  return icons[subject] || "📚";
}

/* =========================================
   STATUS CLASS
========================================= */

function getStatusClass(status) {
  const value = String(status).toLowerCase();

  if (value === "submitted") {
    return "submitted";
  }

  if (value === "overdue") {
    return "overdue";
  }

  return "pending";
}

/* =========================================
   MAIN PAGE
========================================= */

export function ParentAssignments() {
  const totalAssignments = assignmentsData.length;

  const pendingAssignments = assignmentsData.filter(
    item => item.status.toLowerCase() === "pending"
  ).length;

  const submittedAssignments = assignmentsData.filter(
    item => item.status.toLowerCase() === "submitted"
  ).length;

  const overdueAssignments = assignmentsData.filter(
    item => item.status.toLowerCase() === "overdue"
  ).length;

  return `
    <div class="parent-assignments-page">

      <!-- HEADER -->
      <div class="parent-assignments-header">

        <div>
          <button
            type="button"
            class="parent-page-back-btn"
            data-action="back"
          >
            ← Back to Dashboard
          </button>

          <h1>Assignments</h1>

          <p>
            View your child's assignments and their current status.
          </p>
        </div>

        <div class="parent-assignment-session">
          Academic Session
          <strong>2026-27</strong>
        </div>

      </div>


      <!-- STUDENT SUMMARY -->
      <div class="parent-assignment-student-card">

        <div class="parent-assignment-student-icon">
          🎓
        </div>

        <div>
          <h2>Student Name</h2>
          <p>
            Class 10 • Section A • Roll No. 24
          </p>
        </div>

        <span class="parent-view-only-badge">
          View Only
        </span>

      </div>


      <!-- STATISTICS -->
      <div class="parent-assignment-stats">

        <div class="parent-assignment-stat-card">
          <span class="stat-icon">📚</span>
          <div>
            <strong>${totalAssignments}</strong>
            <span>Total Assignments</span>
          </div>
        </div>

        <div class="parent-assignment-stat-card">
          <span class="stat-icon">⏳</span>
          <div>
            <strong>${pendingAssignments}</strong>
            <span>Pending</span>
          </div>
        </div>

        <div class="parent-assignment-stat-card">
          <span class="stat-icon">✅</span>
          <div>
            <strong>${submittedAssignments}</strong>
            <span>Submitted</span>
          </div>
        </div>

        <div class="parent-assignment-stat-card">
          <span class="stat-icon">⚠️</span>
          <div>
            <strong>${overdueAssignments}</strong>
            <span>Overdue</span>
          </div>
        </div>

      </div>


      <!-- FILTER -->
      <div class="parent-assignment-filter-card">

        <div>
          <h3>Assignment Status</h3>
          <p>Filter assignments by their current status.</p>
        </div>

        <div class="parent-assignment-filters">

          <button
            type="button"
            class="assignment-filter active"
            data-filter="all"
          >
            All
          </button>

          <button
            type="button"
            class="assignment-filter"
            data-filter="pending"
          >
            Pending
          </button>

          <button
            type="button"
            class="assignment-filter"
            data-filter="submitted"
          >
            Submitted
          </button>

          <button
            type="button"
            class="assignment-filter"
            data-filter="overdue"
          >
            Overdue
          </button>

        </div>

      </div>


      <!-- ASSIGNMENT LIST -->
      <div
        class="parent-assignment-list"
        id="parentAssignmentList"
      >
        ${renderAssignments(assignmentsData)}
      </div>


      <!-- INFORMATION -->
      <div class="parent-assignment-info">

        <span>👁</span>

        <div>
          <strong>Parent View</strong>

          <p>
            This section is for viewing assignment information only.
            Parents cannot edit, submit, or delete assignments.
          </p>
        </div>

      </div>


      <!-- MODAL -->
      <div
        class="parent-assignment-modal"
        id="parentAssignmentModal"
        aria-hidden="true"
      >

        <div
          class="parent-assignment-modal-overlay"
          data-action="close-modal"
        ></div>

        <div class="parent-assignment-modal-content">

          <button
            type="button"
            class="parent-assignment-modal-close"
            data-action="close-modal"
            aria-label="Close"
          >
            ×
          </button>

          <div class="parent-assignment-modal-header">

            <div>
              <span id="assignmentModalSubject">
                Assignment
              </span>

              <h2 id="assignmentModalTitle">
                Assignment Details
              </h2>
            </div>

          </div>

          <div id="assignmentModalBody"></div>

          <div class="parent-assignment-modal-footer">

            <button
              type="button"
              class="parent-assignment-modal-btn"
              data-action="close-modal"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   RENDER ASSIGNMENTS
========================================= */

function renderAssignments(assignments) {

  if (!assignments.length) {

    return `
      <div class="parent-assignment-empty">

        <div>📭</div>

        <h3>No Assignments Found</h3>

        <p>
          There are no assignments in this category.
        </p>

      </div>
    `;
  }

  return assignments.map(assignment => {

    return `
      <article
        class="parent-assignment-card"
        data-status="${assignment.status.toLowerCase()}"
      >

        <div class="parent-assignment-icon">
          ${getAssignmentIcon(assignment.subject)}
        </div>


        <div class="parent-assignment-main">

          <div class="parent-assignment-title-row">

            <h3>
              ${assignment.title}
            </h3>

            <span
              class="parent-assignment-status ${getStatusClass(
                assignment.status
              )}"
            >
              ${assignment.status}
            </span>

          </div>


          <div class="parent-assignment-meta">

            <span>
              📚 ${assignment.subject}
            </span>

            <span>
              👨‍🏫 ${assignment.teacher}
            </span>

          </div>


          <p class="parent-assignment-description">
            ${assignment.description}
          </p>


          <div class="parent-assignment-bottom">

            <div class="parent-assignment-dates">

              <span>
                Assigned: ${assignment.assignedDate}
              </span>

              <span>
                Due: ${assignment.dueDate}
              </span>

            </div>


            <button
              type="button"
              class="parent-assignment-view-btn"
              data-action="view-assignment"
              data-id="${assignment.id}"
            >
              View Details
            </button>

          </div>

        </div>

      </article>
    `;
  }).join("");
}


/* =========================================
   NAVIGATION SETUP
========================================= */

export function setupParentAssignmentsNavigation() {

  const page = document.querySelector(
    ".parent-assignments-page"
  );

  if (!page) {
    console.error(
      "Parent Assignments page not found."
    );
    return;
  }

  /* Remove old listeners if page is initialized again */
  if (page.dataset.initialized === "true") {
    return;
  }

  page.dataset.initialized = "true";

  page.addEventListener(
    "click",
    handleAssignmentClick
  );
}


/* =========================================
   CLICK HANDLER
========================================= */

function handleAssignmentClick(event) {

  /* -----------------------------------------
     FILTER BUTTON
  ----------------------------------------- */

  const filterButton =
    event.target.closest(".assignment-filter");

  if (filterButton) {

    const filter =
      filterButton.dataset.filter || "all";

    applyAssignmentFilter(filter);

    return;
  }


  /* -----------------------------------------
     ACTION BUTTON
  ----------------------------------------- */

  const actionElement =
    event.target.closest("[data-action]");

  if (!actionElement) {
    return;
  }

  const action =
    actionElement.dataset.action;


  /* BACK */
  if (action === "back") {

    if (
      typeof window.navigateParentPage ===
      "function"
    ) {
      window.navigateParentPage("dashboard");
    } else {
      console.error(
        "navigateParentPage is not available."
      );
    }

    return;
  }


  /* VIEW ASSIGNMENT */
  if (action === "view-assignment") {

    const id =
      Number(actionElement.dataset.id);

    openAssignmentModal(id);

    return;
  }


  /* CLOSE MODAL */
  if (action === "close-modal") {

    closeAssignmentModal();

    return;
  }
}


/* =========================================
   APPLY FILTER
========================================= */

function applyAssignmentFilter(filter) {

  const page =
    document.querySelector(
      ".parent-assignments-page"
    );

  if (!page) {
    return;
  }


  /* Normalize filter */
  const normalizedFilter =
    String(filter)
      .trim()
      .toLowerCase();


  /* -----------------------------------------
     UPDATE ACTIVE BUTTON
  ----------------------------------------- */

  const filterButtons =
    page.querySelectorAll(
      ".assignment-filter"
    );

  filterButtons.forEach(button => {

    const buttonFilter =
      String(
        button.dataset.filter || ""
      )
        .trim()
        .toLowerCase();

    button.classList.toggle(
      "active",
      buttonFilter === normalizedFilter
    );

  });


  /* -----------------------------------------
     FILTER DATA
  ----------------------------------------- */

  let filteredAssignments;


  if (normalizedFilter === "all") {

    filteredAssignments =
      assignmentsData;

  } else {

    filteredAssignments =
      assignmentsData.filter(
        assignment =>
          String(assignment.status)
            .trim()
            .toLowerCase() ===
          normalizedFilter
      );

  }


  /* -----------------------------------------
     UPDATE LIST
  ----------------------------------------- */

  const list =
    page.querySelector(
      "#parentAssignmentList"
    );

  if (!list) {
    return;
  }

  list.innerHTML =
    renderAssignments(
      filteredAssignments
    );
}


/* =========================================
   OPEN MODAL
========================================= */

function openAssignmentModal(id) {

  const assignment =
    assignmentsData.find(
      item => item.id === id
    );

  if (!assignment) {
    return;
  }


  const modal =
    document.querySelector(
      "#parentAssignmentModal"
    );

  const title =
    document.querySelector(
      "#assignmentModalTitle"
    );

  const subject =
    document.querySelector(
      "#assignmentModalSubject"
    );

  const body =
    document.querySelector(
      "#assignmentModalBody"
    );


  if (!modal || !title || !subject || !body) {
    return;
  }


  title.textContent =
    assignment.title;

  subject.textContent =
    assignment.subject;


  body.innerHTML = `

    <div class="assignment-detail-grid">

      <div class="assignment-detail-item">
        <span>Subject</span>
        <strong>${assignment.subject}</strong>
      </div>

      <div class="assignment-detail-item">
        <span>Teacher</span>
        <strong>${assignment.teacher}</strong>
      </div>

      <div class="assignment-detail-item">
        <span>Assigned Date</span>
        <strong>${assignment.assignedDate}</strong>
      </div>

      <div class="assignment-detail-item">
        <span>Due Date</span>
        <strong>${assignment.dueDate}</strong>
      </div>

      <div class="assignment-detail-item">

        <span>Status</span>

        <strong
          class="assignment-detail-status ${getStatusClass(
            assignment.status
          )}"
        >
          ${assignment.status}
        </strong>

      </div>

      <div class="assignment-detail-item">
        <span>Priority</span>
        <strong>${assignment.priority}</strong>
      </div>

    </div>


    <div class="assignment-detail-description">

      <span>Assignment Description</span>

      <p>
        ${assignment.description}
      </p>

    </div>


    <div class="assignment-parent-note">

      <span>👁</span>

      <p>
        This information is provided by the school.
        Parents cannot edit or submit this assignment.
      </p>

    </div>

  `;


  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "parent-assignment-modal-open"
  );
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeAssignmentModal() {

  const modal =
    document.querySelector(
      "#parentAssignmentModal"
    );

  if (!modal) {
    return;
  }


  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "parent-assignment-modal-open"
  );
}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }

    const modal =
      document.querySelector(
        "#parentAssignmentModal"
      );

    if (
      modal &&
      modal.classList.contains("show")
    ) {
      closeAssignmentModal();
    }

  }
);