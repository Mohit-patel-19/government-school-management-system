/* =====================================================
   TEACHER ASSIGNMENTS DATA
===================================================== */

let teacherAssignments = [
  {
    id: 1,
    title: "Mathematics Chapter 5",
    subject: "Mathematics",
    className: "Class 10",
    section: "A",
    dueDate: "2026-09-10",
    description: "Complete all questions from Chapter 5.",
    submissions: 32,
    totalStudents: 40
  },
  {
    id: 2,
    title: "Algebra Practice",
    subject: "Mathematics",
    className: "Class 10",
    section: "B",
    dueDate: "2026-09-12",
    description: "Solve the given algebra practice questions.",
    submissions: 28,
    totalStudents: 38
  }
];


/* =====================================================
   RESPONSIVE ASSIGNMENT CSS
===================================================== */

function loadTeacherAssignmentsCSS() {

  if (document.getElementById("teacher-assignments-css")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "teacher-assignments-css";

  style.textContent = `

    html,
    body {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden !important;
    }

    #app {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      overflow-x: hidden !important;
    }

    .teacher-assignment-page {
      width: 100%;
      min-width: 0;
      overflow-x: hidden;
    }

    .teacher-assignment-content {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      padding: 28px;
      min-width: 0;
    }

    .teacher-assignment-page-title {
      margin-bottom: 24px;
    }

    .teacher-assignment-page-title h2 {
      margin: 0 0 6px;
      font-size: 28px;
    }

    .teacher-assignment-page-title p {
      margin: 0;
      color: #64748b;
    }

    .teacher-assignment-stats {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
      margin-bottom: 24px;
    }

    .teacher-assignment-stat {
      min-width: 0;
      background: #ffffff;
      border-radius: 14px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
      box-sizing: border-box;
    }

    .teacher-assignment-stat-icon {
      width: 50px;
      height: 50px;
      min-width: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background: #eef2ff;
    }

    .teacher-assignment-stat span {
      display: block;
      color: #64748b;
      font-size: 14px;
      margin-bottom: 5px;
    }

    .teacher-assignment-stat h3 {
      margin: 0;
      font-size: 25px;
    }

    .teacher-assignment-card {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      background: #ffffff;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
    }

    .teacher-assignment-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      margin-bottom: 22px;
    }

    .teacher-assignment-card-header h2 {
      margin: 0 0 5px;
      font-size: 21px;
    }

    .teacher-assignment-card-header p {
      margin: 0;
      color: #64748b;
      font-size: 14px;
    }

    .teacher-assignment-form-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .teacher-assignment-field {
      min-width: 0;
    }

    .teacher-assignment-field.full {
      grid-column: 1 / -1;
    }

    .teacher-assignment-field label {
      display: block;
      font-weight: 600;
      margin-bottom: 7px;
      color: #334155;
    }

    .teacher-assignment-field input,
    .teacher-assignment-field select,
    .teacher-assignment-field textarea {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      border: 1px solid #dbe2ea;
      border-radius: 9px;
      padding: 12px 13px;
      font-size: 14px;
      background: #fff;
      outline: none;
    }

    .teacher-assignment-field textarea {
      resize: vertical;
      min-height: 110px;
    }

    .teacher-assignment-field input:focus,
    .teacher-assignment-field select:focus,
    .teacher-assignment-field textarea:focus {
      border-color: #2563eb;
    }

    .teacher-assignment-form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .teacher-assignment-list {
      width: 100%;
      min-width: 0;
    }

    .teacher-assignment-item {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 54px minmax(0, 1fr) auto;
      align-items: center;
      gap: 16px;
      padding: 18px;
      margin-bottom: 14px;
      border: 1px solid #e5e7eb;
      border-radius: 13px;
      background: #fff;
    }

    .teacher-assignment-item:last-child {
      margin-bottom: 0;
    }

    .teacher-assignment-icon {
      width: 54px;
      height: 54px;
      min-width: 54px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      background: #eff6ff;
    }

    .teacher-assignment-info {
      min-width: 0;
    }

    .teacher-assignment-info strong {
      display: block;
      font-size: 16px;
      margin-bottom: 5px;
      overflow-wrap: anywhere;
    }

    .teacher-assignment-info span,
    .teacher-assignment-info small {
      display: block;
      color: #64748b;
      line-height: 1.5;
      overflow-wrap: anywhere;
    }

    .teacher-assignment-status {
      min-width: 170px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
    }

    .teacher-assignment-status-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 6px 11px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
    }

    .teacher-assignment-status-badge.pending {
      background: #fff7ed;
      color: #c2410c;
    }

    .teacher-assignment-status-badge.completed {
      background: #ecfdf5;
      color: #047857;
    }

    .teacher-assignment-actions {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .teacher-assignment-action-btn {
      border: 1px solid #dbe2ea;
      background: #fff;
      border-radius: 8px;
      padding: 8px 10px;
      cursor: pointer;
      font-size: 13px;
      white-space: nowrap;
    }

    .teacher-assignment-action-btn:hover {
      background: #f8fafc;
    }

    .teacher-assignment-empty {
      text-align: center;
      padding: 45px 20px;
      color: #64748b;
    }

    .teacher-assignment-empty-icon {
      font-size: 48px;
      margin-bottom: 10px;
    }

    .teacher-assignment-empty h3 {
      color: #1e293b;
      margin: 0 0 7px;
    }

    .teacher-assignment-back {
      margin-top: 5px;
    }

    .teacher-mobile-menu {
      display: none;
    }

    @media (max-width: 1100px) {

      .teacher-assignment-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

    }

    @media (max-width: 768px) {

      .teacher-assignment-content {
        padding: 18px 14px 30px;
      }

      .teacher-assignment-page-title h2 {
        font-size: 23px;
      }

      .teacher-assignment-stats {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .teacher-assignment-card {
        padding: 17px;
        border-radius: 13px;
      }

      .teacher-assignment-card-header {
        align-items: flex-start;
      }

      .teacher-assignment-form-grid {
        grid-template-columns: 1fr;
      }

      .teacher-assignment-field.full {
        grid-column: auto;
      }

      .teacher-assignment-form-actions {
        justify-content: stretch;
      }

      .teacher-assignment-form-actions button {
        width: 100%;
        max-width: 100% !important;
      }

      .teacher-assignment-item {
        grid-template-columns: 46px minmax(0, 1fr);
        gap: 12px;
        padding: 14px;
      }

      .teacher-assignment-icon {
        width: 46px;
        height: 46px;
        min-width: 46px;
      }

      .teacher-assignment-status {
        grid-column: 1 / -1;
        min-width: 0;
        width: 100%;
        align-items: flex-start;
        border-top: 1px solid #eef2f7;
        padding-top: 12px;
      }

      .teacher-assignment-actions {
        width: 100%;
        justify-content: flex-start;
      }

      .teacher-assignment-action-btn {
        flex: 1;
        min-width: 90px;
      }

      .teacher-assignment-back {
        width: 100%;
      }

      .teacher-mobile-menu {
        display: flex !important;
      }

    }

    @media (max-width: 480px) {

      .teacher-assignment-content {
        padding: 15px 10px 25px;
      }

      .teacher-assignment-card {
        padding: 14px;
      }

      .teacher-assignment-item {
        padding: 12px;
      }

      .teacher-assignment-actions {
        display: grid;
        grid-template-columns: 1fr;
      }

      .teacher-assignment-action-btn {
        width: 100%;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =====================================================
   SHARED TEACHER SIDEBAR
===================================================== */

function teacherAssignmentSidebar(activePage = "assignments") {

  return `

    <aside class="teacher-sidebar">

      <button
        type="button"
        class="teacher-mobile-close"
        id="teacherAssignmentMobileClose"
        aria-label="Close menu"
      >
        ✕
      </button>

      <div class="teacher-sidebar-logo">

        <div class="teacher-sidebar-icon">
          🏫
        </div>

        <div>
          <h2>Govt. School</h2>
          <span>Teacher Portal</span>
        </div>

      </div>

      <nav class="teacher-sidebar-nav">

        <button
          type="button"
          class="teacher-nav-item ${activePage === "dashboard" ? "active" : ""}"
          data-page="dashboard"
        >
          📊 Dashboard
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "classes" ? "active" : ""}"
          data-page="classes"
        >
          📚 My Classes
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "students" ? "active" : ""}"
          data-page="students"
        >
          👨‍🎓 Students
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "attendance" ? "active" : ""}"
          data-page="attendance"
        >
          📅 Attendance
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "assignments" ? "active" : ""}"
          data-page="assignments"
        >
          📝 Assignments
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "results" ? "active" : ""}"
          data-page="results"
        >
          🏆 Exams & Results
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "material" ? "active" : ""}"
          data-page="material"
        >
          📖 Study Material
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "notices" ? "active" : ""}"
          data-page="notices"
        >
          📢 Notices
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "messages" ? "active" : ""}"
          data-page="messages"
        >
          💬 Messages
        </button>

      </nav>

      <div class="teacher-sidebar-bottom">

        <button
          type="button"
          class="teacher-nav-item ${activePage === "settings" ? "active" : ""}"
          data-page="settings"
        >
          ⚙️ Settings
        </button>

        <button
          type="button"
          class="teacher-nav-item logout"
          data-page="logout"
        >
          🚪 Logout
        </button>

      </div>

    </aside>

    <div
      class="teacher-sidebar-overlay"
      id="teacherAssignmentSidebarOverlay"
    ></div>

  `;
}


/* =====================================================
   MOBILE MENU
===================================================== */

function setupAssignmentMobileMenu() {

  const sidebar =
    document.querySelector(".teacher-sidebar");

  const overlay =
    document.querySelector(
      "#teacherAssignmentSidebarOverlay"
    );

  const menuButton =
    document.querySelector(
      "#teacherAssignmentMobileMenu"
    );

  const closeButton =
    document.querySelector(
      "#teacherAssignmentMobileClose"
    );

  if (!sidebar) {
    return;
  }

  function openMenu() {

    sidebar.classList.add(
      "teacher-mobile-open"
    );

    if (overlay) {
      overlay.classList.add(
        "teacher-overlay-active"
      );
    }

    document.body.classList.add(
      "teacher-menu-open"
    );
  }

  function closeMenu() {

    sidebar.classList.remove(
      "teacher-mobile-open"
    );

    if (overlay) {
      overlay.classList.remove(
        "teacher-overlay-active"
      );
    }

    document.body.classList.remove(
      "teacher-menu-open"
    );
  }

  closeMenu();

  if (menuButton) {
    menuButton.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openMenu();
    };
  }

  if (closeButton) {
    closeButton.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeMenu();
    };
  }

  if (overlay) {
    overlay.onclick = closeMenu;
  }

  return {
    openMenu,
    closeMenu
  };
}


/* =====================================================
   HEADER
===================================================== */

function teacherAssignmentHeader(
  title,
  subtitle
) {

  return `

    <header class="teacher-dashboard-header">

      <div class="teacher-header-left">

        <button
          type="button"
          class="teacher-mobile-menu"
          id="teacherAssignmentMobileMenu"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div>

          <h1>
            ${title}
          </h1>

          <p>
            ${subtitle}
          </p>

        </div>

      </div>

      <div class="teacher-profile">

        <div class="teacher-profile-avatar">
          T
        </div>

        <div class="teacher-profile-info">

          <strong>
            Teacher Name
          </strong>

          <span>
            Mathematics Teacher
          </span>

        </div>

      </div>

    </header>

  `;
}


/* =====================================================
   TEACHER ASSIGNMENTS PAGE
===================================================== */

export function TeacherAssignments() {

  loadTeacherAssignmentsCSS();

  const totalPending =
    teacherAssignments.reduce(
      (total, assignment) =>
        total +
        Math.max(
          assignment.totalStudents -
          assignment.submissions,
          0
        ),
      0
    );

  const totalSubmissions =
    teacherAssignments.reduce(
      (total, assignment) =>
        total + assignment.submissions,
      0
    );

  const totalClasses =
    new Set(
      teacherAssignments.map(
        assignment =>
          `${assignment.className}-${assignment.section}`
      )
    ).size;

  return `

    <div class="teacher-dashboard teacher-assignment-page">

      ${teacherAssignmentSidebar("assignments")}

      <main class="teacher-dashboard-main">

        ${teacherAssignmentHeader(
          "📝 Assignments",
          "Create and manage student assignments"
        )}

        <section class="teacher-assignment-content">

          <div class="teacher-assignment-page-title">

            <h2>
              Assignment Management
            </h2>

            <p>
              Create, edit and manage assignments for your students
            </p>

          </div>


          <!-- STATS -->

          <div class="teacher-assignment-stats">

            <div class="teacher-assignment-stat">

              <div class="teacher-assignment-stat-icon">
                📝
              </div>

              <div>

                <span>
                  Total Assignments
                </span>

                <h3>
                  ${teacherAssignments.length}
                </h3>

              </div>

            </div>


            <div class="teacher-assignment-stat">

              <div class="teacher-assignment-stat-icon">
                ⏳
              </div>

              <div>

                <span>
                  Pending Review
                </span>

                <h3>
                  ${totalPending}
                </h3>

              </div>

            </div>


            <div class="teacher-assignment-stat">

              <div class="teacher-assignment-stat-icon">
                👨‍🎓
              </div>

              <div>

                <span>
                  Total Submissions
                </span>

                <h3>
                  ${totalSubmissions}
                </h3>

              </div>

            </div>


            <div class="teacher-assignment-stat">

              <div class="teacher-assignment-stat-icon">
                📚
              </div>

              <div>

                <span>
                  Classes
                </span>

                <h3>
                  ${totalClasses}
                </h3>

              </div>

            </div>

          </div>


          <!-- CREATE ASSIGNMENT -->

          <div class="teacher-assignment-card">

            <div class="teacher-assignment-card-header">

              <div>

                <h2>
                  Create New Assignment
                </h2>

                <p>
                  Add a new assignment for your students
                </p>

              </div>

            </div>


            <form id="createAssignmentForm">

              <div class="teacher-assignment-form-grid">


                <div class="teacher-assignment-field">

                  <label for="assignmentTitle">
                    Assignment Title
                  </label>

                  <input
                    type="text"
                    id="assignmentTitle"
                    placeholder="Enter assignment title"
                    required
                  />

                </div>


                <div class="teacher-assignment-field">

                  <label for="assignmentSubject">
                    Subject
                  </label>

                  <select
                    id="assignmentSubject"
                    required
                  >

                    <option value="">
                      Select Subject
                    </option>

                    <option value="Mathematics">
                      Mathematics
                    </option>

                    <option value="Science">
                      Science
                    </option>

                    <option value="English">
                      English
                    </option>

                    <option value="Hindi">
                      Hindi
                    </option>

                    <option value="Social Science">
                      Social Science
                    </option>

                    <option value="Computer">
                      Computer
                    </option>

                  </select>

                </div>


                <div class="teacher-assignment-field">

                  <label for="assignmentClass">
                    Class
                  </label>

                  <select
                    id="assignmentClass"
                    required
                  >

                    <option value="">
                      Select Class
                    </option>

                    <option value="Class 6">
                      Class 6
                    </option>

                    <option value="Class 7">
                      Class 7
                    </option>

                    <option value="Class 8">
                      Class 8
                    </option>

                    <option value="Class 9">
                      Class 9
                    </option>

                    <option value="Class 10">
                      Class 10
                    </option>

                  </select>

                </div>


                <div class="teacher-assignment-field">

                  <label for="assignmentSection">
                    Section
                  </label>

                  <select
                    id="assignmentSection"
                    required
                  >

                    <option value="">
                      Select Section
                    </option>

                    <option value="A">
                      A
                    </option>

                    <option value="B">
                      B
                    </option>

                    <option value="C">
                      C
                    </option>

                  </select>

                </div>


                <div class="teacher-assignment-field">

                  <label for="assignmentDueDate">
                    Due Date
                  </label>

                  <input
                    type="date"
                    id="assignmentDueDate"
                    required
                  />

                </div>


                <div class="teacher-assignment-field full">

                  <label for="assignmentDescription">
                    Assignment Description
                  </label>

                  <textarea
                    id="assignmentDescription"
                    placeholder="Enter assignment instructions..."
                    required
                  ></textarea>

                </div>

              </div>


              <div class="teacher-assignment-form-actions">

                <button
                  type="submit"
                  class="login-btn"
                >
                  ➕ Create Assignment
                </button>

              </div>

            </form>

          </div>


          <!-- ALL ASSIGNMENTS -->

          <div class="teacher-assignment-card">

            <div class="teacher-assignment-card-header">

              <div>

                <h2>
                  All Assignments
                </h2>

                <p>
                  Manage assignments given to your students
                </p>

              </div>

            </div>


            <div
              id="teacherAssignmentList"
              class="teacher-assignment-list"
            >

              ${renderAssignmentList()}

            </div>

          </div>


          <button
            type="button"
            class="back-btn teacher-assignment-back"
            data-page="dashboard"
          >
            ← Back to Dashboard
          </button>

        </section>

      </main>

    </div>

  `;
}


/* =====================================================
   RENDER ASSIGNMENT LIST
===================================================== */

function renderAssignmentList() {

  if (teacherAssignments.length === 0) {

    return `

      <div class="teacher-assignment-empty">

        <div class="teacher-assignment-empty-icon">
          📝
        </div>

        <h3>
          No Assignments
        </h3>

        <p>
          Create your first assignment using the form above.
        </p>

      </div>

    `;

  }

  return teacherAssignments.map(
    (assignment) => {

      const pending =
        Math.max(
          assignment.totalStudents -
          assignment.submissions,
          0
        );

      return `

        <div class="teacher-assignment-item">

          <div class="teacher-assignment-icon">
            📝
          </div>


          <div class="teacher-assignment-info">

            <strong>
              ${escapeHtml(assignment.title)}
            </strong>

            <span>
              ${escapeHtml(assignment.subject)}
              •
              ${escapeHtml(assignment.className)}
              -
              Section ${escapeHtml(assignment.section)}
            </span>

            <small>
              Due:
              ${formatDate(assignment.dueDate)}
            </small>

            <small>
              ${escapeHtml(assignment.description)}
            </small>

          </div>


          <div class="teacher-assignment-status">

            <span
              class="teacher-assignment-status-badge ${
                pending === 0
                  ? "completed"
                  : "pending"
              }"
            >
              ${
                pending === 0
                  ? "Completed"
                  : `${pending} Pending`
              }
            </span>


            <div class="teacher-assignment-actions">

              <button
                type="button"
                class="teacher-assignment-action-btn"
                data-action="view"
                data-id="${assignment.id}"
              >
                👁 View
              </button>

              <button
                type="button"
                class="teacher-assignment-action-btn"
                data-action="edit"
                data-id="${assignment.id}"
              >
                ✏️ Edit
              </button>

              <button
                type="button"
                class="teacher-assignment-action-btn"
                data-action="delete"
                data-id="${assignment.id}"
              >
                🗑 Delete
              </button>

            </div>

          </div>

        </div>

      `;

    }
  ).join("");

}


/* =====================================================
   NAVIGATION
===================================================== */

function setupAssignmentNavigation() {

  const app =
    document.querySelector("#app");

  if (!app) {
    return;
  }

  app.querySelectorAll("[data-page]").forEach(
    (button) => {

      button.onclick = (event) => {

        event.preventDefault();

        const page =
          button.dataset.page;

        if (
          typeof window.navigateTeacherPage ===
          "function"
        ) {

          window.navigateTeacherPage(page);

        }

      };

    }
  );
}


/* =====================================================
   SETUP ASSIGNMENTS
===================================================== */

export function setupTeacherAssignments() {

  loadTeacherAssignmentsCSS();

  const app =
    document.querySelector("#app");

  if (!app) {
    return;
  }


  setupAssignmentMobileMenu();

  setupAssignmentNavigation();


  /* =================================================
     CREATE ASSIGNMENT
  ================================================= */

  const form =
    document.querySelector(
      "#createAssignmentForm"
    );

  if (form) {

    form.onsubmit = (event) => {

      event.preventDefault();


      const title =
        document.querySelector(
          "#assignmentTitle"
        ).value.trim();


      const subject =
        document.querySelector(
          "#assignmentSubject"
        ).value;


      const className =
        document.querySelector(
          "#assignmentClass"
        ).value;


      const section =
        document.querySelector(
          "#assignmentSection"
        ).value;


      const dueDate =
        document.querySelector(
          "#assignmentDueDate"
        ).value;


      const description =
        document.querySelector(
          "#assignmentDescription"
        ).value.trim();


      if (
        !title ||
        !subject ||
        !className ||
        !section ||
        !dueDate ||
        !description
      ) {

        alert(
          "Please fill all assignment fields."
        );

        return;
      }


      const newAssignment = {

        id: Date.now(),

        title,

        subject,

        className,

        section,

        dueDate,

        description,

        submissions: 0,

        totalStudents: 40

      };


      teacherAssignments.unshift(
        newAssignment
      );


      alert(
        "Assignment created successfully!"
      );


      app.innerHTML =
        TeacherAssignments();


      setupTeacherAssignments();

    };

  }


  /* =================================================
     ASSIGNMENT ACTIONS
  ================================================= */

  app.querySelectorAll(
    "[data-action]"
  ).forEach(
    (button) => {

      button.onclick = (event) => {

        event.preventDefault();


        const action =
          button.dataset.action;


        const id =
          Number(
            button.dataset.id
          );


        const assignment =
          teacherAssignments.find(
            item =>
              item.id === id
          );


        if (!assignment) {
          return;
        }


        /* VIEW */

        if (action === "view") {

          alert(

            `Assignment Details

Title: ${assignment.title}

Subject: ${assignment.subject}

Class: ${assignment.className} - Section ${assignment.section}

Due Date: ${formatDate(assignment.dueDate)}

Submissions: ${assignment.submissions}/${assignment.totalStudents}

Description:
${assignment.description}`

          );

          return;
        }


        /* EDIT */

        if (action === "edit") {

          editAssignment(
            assignment
          );

          return;
        }


        /* DELETE */

        if (action === "delete") {

          const confirmDelete =
            window.confirm(
              `Delete "${assignment.title}"?`
            );


          if (!confirmDelete) {
            return;
          }


          teacherAssignments =
            teacherAssignments.filter(
              item =>
                item.id !== id
            );


          app.innerHTML =
            TeacherAssignments();


          setupTeacherAssignments();

        }

      };

    }
  );

}


/* =====================================================
   EDIT ASSIGNMENT
===================================================== */

function editAssignment(
  assignment
) {

  loadTeacherAssignmentsCSS();

  const app =
    document.querySelector("#app");

  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="teacher-dashboard teacher-assignment-page">

      ${teacherAssignmentSidebar("assignments")}

      <main class="teacher-dashboard-main">

        ${teacherAssignmentHeader(
          "✏️ Edit Assignment",
          "Update assignment details"
        )}

        <section class="teacher-assignment-content">

          <div class="teacher-assignment-card">

            <div class="teacher-assignment-card-header">

              <div>

                <h2>
                  Edit Assignment
                </h2>

                <p>
                  Modify the assignment information
                </p>

              </div>

            </div>


            <form id="editAssignmentForm">

              <div class="teacher-assignment-form-grid">


                <div class="teacher-assignment-field">

                  <label for="editTitle">
                    Assignment Title
                  </label>

                  <input
                    type="text"
                    id="editTitle"
                    value="${escapeHtml(assignment.title)}"
                    required
                  />

                </div>


                <div class="teacher-assignment-field">

                  <label for="editSubject">
                    Subject
                  </label>

                  <select
                    id="editSubject"
                    required
                  >

                    ${createOptions(
                      [
                        "Mathematics",
                        "Science",
                        "English",
                        "Hindi",
                        "Social Science",
                        "Computer"
                      ],
                      assignment.subject
                    )}

                  </select>

                </div>


                <div class="teacher-assignment-field">

                  <label for="editClass">
                    Class
                  </label>

                  <select
                    id="editClass"
                    required
                  >

                    ${createOptions(
                      [
                        "Class 6",
                        "Class 7",
                        "Class 8",
                        "Class 9",
                        "Class 10"
                      ],
                      assignment.className
                    )}

                  </select>

                </div>


                <div class="teacher-assignment-field">

                  <label for="editSection">
                    Section
                  </label>

                  <select
                    id="editSection"
                    required
                  >

                    ${createOptions(
                      ["A", "B", "C"],
                      assignment.section
                    )}

                  </select>

                </div>


                <div class="teacher-assignment-field">

                  <label for="editDueDate">
                    Due Date
                  </label>

                  <input
                    type="date"
                    id="editDueDate"
                    value="${escapeHtml(assignment.dueDate)}"
                    required
                  />

                </div>


                <div class="teacher-assignment-field full">

                  <label for="editDescription">
                    Description
                  </label>

                  <textarea
                    id="editDescription"
                    required
                  >${escapeHtml(assignment.description)}</textarea>

                </div>

              </div>


              <div class="teacher-assignment-form-actions">

                <button
                  type="button"
                  class="back-btn"
                  id="cancelEditAssignment"
                >
                  ← Cancel
                </button>

                <button
                  type="submit"
                  class="login-btn"
                >
                  💾 Save Changes
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>

  `;


  setupAssignmentMobileMenu();

  setupAssignmentNavigation();


  /* =================================================
     EDIT FORM
  ================================================= */

  const form =
    document.querySelector(
      "#editAssignmentForm"
    );

  if (form) {

    form.onsubmit = (event) => {

      event.preventDefault();


      assignment.title =
        document.querySelector(
          "#editTitle"
        ).value.trim();


      assignment.subject =
        document.querySelector(
          "#editSubject"
        ).value;


      assignment.className =
        document.querySelector(
          "#editClass"
        ).value;


      assignment.section =
        document.querySelector(
          "#editSection"
        ).value;


      assignment.dueDate =
        document.querySelector(
          "#editDueDate"
        ).value;


      assignment.description =
        document.querySelector(
          "#editDescription"
        ).value.trim();


      alert(
        "Assignment updated successfully!"
      );


      app.innerHTML =
        TeacherAssignments();


      setupTeacherAssignments();

    };

  }


  /* =================================================
     CANCEL
  ================================================= */

  const cancel =
    document.querySelector(
      "#cancelEditAssignment"
    );

  if (cancel) {

    cancel.onclick = () => {

      app.innerHTML =
        TeacherAssignments();

      setupTeacherAssignments();

    };

  }

}


/* =====================================================
   CREATE SELECT OPTIONS
===================================================== */

function createOptions(
  options,
  selected
) {

  return options.map(
    option => `

      <option
        value="${escapeHtml(option)}"
        ${option === selected ? "selected" : ""}
      >
        ${escapeHtml(option)}
      </option>

    `
  ).join("");

}


/* =====================================================
   DATE FORMAT
===================================================== */

function formatDate(
  date
) {

  if (!date) {
    return "Not specified";
  }

  const parts =
    date.split("-");

  if (parts.length !== 3) {
    return date;
  }

  return `${parts[2]}-${parts[1]}-${parts[0]}`;

}


/* =====================================================
   HTML ESCAPE
===================================================== */

function escapeHtml(
  value = ""
) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}