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
   TEACHER ASSIGNMENTS PAGE
===================================================== */

export function TeacherAssignments() {

  return `

    <div class="dashboard">

      <!-- =================================================
           SIDEBAR
      ================================================= -->

      <aside class="sidebar">

        <div class="sidebar-logo">

          <div class="sidebar-icon">
            🏫
          </div>

          <div>
            <h2>Govt. School</h2>
            <span>Teacher Portal</span>
          </div>

        </div>


        <nav class="sidebar-nav">

          <button
            type="button"
            class="nav-item"
            data-page="dashboard"
          >
            📊 Dashboard
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="classes"
          >
            📚 My Classes
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="students"
          >
            👨‍🎓 Students
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="attendance"
          >
            📅 Attendance
          </button>


          <button
            type="button"
            class="nav-item active"
            data-page="assignments"
          >
            📝 Assignments
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="results"
          >
            🏆 Exams & Results
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="material"
          >
            📖 Study Material
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="notices"
          >
            📢 Notices
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="messages"
          >
            💬 Messages
          </button>

        </nav>


        <div class="sidebar-bottom">

          <button
            type="button"
            class="nav-item"
            data-page="settings"
          >
            ⚙️ Settings
          </button>


          <button
            type="button"
            class="nav-item logout"
            data-page="logout"
          >
            🚪 Logout
          </button>

        </div>

      </aside>


      <!-- =================================================
           MAIN
      ================================================= -->

      <main class="dashboard-main">


        <!-- =================================================
             HEADER
        ================================================= -->

        <header class="dashboard-header">

          <div>

            <h1>
              📝 Assignments
            </h1>

            <p>
              Create and manage student assignments
            </p>

          </div>


          <div class="profile">

            <div class="profile-avatar">
              T
            </div>

            <div class="profile-info">

              <strong>
                Teacher Name
              </strong>

              <span>
                Mathematics Teacher
              </span>

            </div>

          </div>

        </header>


        <!-- =================================================
             CONTENT
        ================================================= -->

        <section class="dashboard-content">


          <!-- =================================================
               PAGE TITLE
          ================================================= -->

          <div class="page-title">

            <h1>
              Assignment Management
            </h1>

            <p>
              Create, edit and manage assignments for your students
            </p>

          </div>


          <!-- =================================================
               STATS
          ================================================= -->

          <div class="stats-grid">


            <div class="stat-card">

              <div class="stat-icon blue">
                📝
              </div>

              <div>

                <span>
                  Total Assignments
                </span>

                <h2>
                  ${teacherAssignments.length}
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                ⏳
              </div>

              <div>

                <span>
                  Pending Review
                </span>

                <h2>
                  ${teacherAssignments.reduce(
                    (total, assignment) =>
                      total +
                      Math.max(
                        assignment.totalStudents -
                        assignment.submissions,
                        0
                      ),
                    0
                  )}
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                👨‍🎓
              </div>

              <div>

                <span>
                  Total Submissions
                </span>

                <h2>
                  ${teacherAssignments.reduce(
                    (total, assignment) =>
                      total + assignment.submissions,
                    0
                  )}
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                📚
              </div>

              <div>

                <span>
                  Classes
                </span>

                <h2>
                  ${
                    new Set(
                      teacherAssignments.map(
                        assignment =>
                          `${assignment.className}-${assignment.section}`
                      )
                    ).size
                  }
                </h2>

              </div>

            </div>


          </div>


          <!-- =================================================
               CREATE ASSIGNMENT
          ================================================= -->

          <div class="dashboard-card">

            <div class="card-header">

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


              <div
                style="
                  display:grid;
                  grid-template-columns:
                    repeat(auto-fit,minmax(220px,1fr));
                  gap:20px;
                "
              >


                <!-- TITLE -->

                <div class="form-group">

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


                <!-- SUBJECT -->

                <div class="form-group">

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


                <!-- CLASS -->

                <div class="form-group">

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


                <!-- SECTION -->

                <div class="form-group">

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


                <!-- DUE DATE -->

                <div class="form-group">

                  <label for="assignmentDueDate">
                    Due Date
                  </label>

                  <input
                    type="date"
                    id="assignmentDueDate"
                    required
                  />

                </div>


              </div>


              <!-- DESCRIPTION -->

              <div
                class="form-group"
                style="margin-top:20px;"
              >

                <label for="assignmentDescription">
                  Assignment Description
                </label>

                <textarea
                  id="assignmentDescription"
                  rows="4"
                  placeholder="Enter assignment instructions..."
                  required
                ></textarea>

              </div>


              <!-- BUTTON -->

              <div
                style="
                  display:flex;
                  justify-content:flex-end;
                  margin-top:20px;
                "
              >

                <button
                  type="submit"
                  class="login-btn"
                  style="max-width:220px;"
                >
                  ➕ Create Assignment
                </button>

              </div>


            </form>

          </div>


          <!-- =================================================
               ALL ASSIGNMENTS
          ================================================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  All Assignments
                </h2>

                <p>
                  Manage assignments given to your students
                </p>

              </div>

            </div>


            <div id="teacherAssignmentList">

              ${renderAssignmentList()}

            </div>

          </div>


          <!-- =================================================
               BACK
          ================================================= -->

          <button
            type="button"
            class="back-btn"
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

      <div
        style="
          text-align:center;
          padding:50px 20px;
        "
      >

        <div style="font-size:50px;">
          📝
        </div>

        <h2>
          No Assignments
        </h2>

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

        <div
          class="assignment-page-item"
          style="
            margin-bottom:15px;
          "
        >


          <div
            class="assignment-page-icon"
          >
            📝
          </div>


          <div
            class="assignment-page-info"
          >

            <strong>
              ${assignment.title}
            </strong>

            <span>
              ${assignment.subject}
              •
              ${assignment.className}
              -
              Section ${assignment.section}
            </span>

            <small>
              Due:
              ${formatDate(assignment.dueDate)}
            </small>

            <small>
              ${assignment.description}
            </small>

          </div>


          <div
            class="assignment-page-status"
          >

            <span
              class="status ${
                pending === 0
                  ? "submitted"
                  : "pending"
              }"
            >
              ${pending === 0
                ? "Completed"
                : `${pending} Pending`}
            </span>


            <div
              style="
                display:flex;
                gap:8px;
                flex-wrap:wrap;
                justify-content:flex-end;
              "
            >

              <button
                type="button"
                class="view-btn"
                data-action="view"
                data-id="${assignment.id}"
              >
                👁 View
              </button>


              <button
                type="button"
                class="view-btn"
                data-action="edit"
                data-id="${assignment.id}"
              >
                ✏️ Edit
              </button>


              <button
                type="button"
                class="view-btn"
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
   NAVIGATION SETUP
===================================================== */

export function setupTeacherAssignments() {

  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  /* =================================================
     SIDEBAR / DATA-PAGE NAVIGATION
  ================================================= */

  app.querySelectorAll(
    "[data-page]"
  ).forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const page =
          button.dataset.page;


        if (
          typeof window.navigateTeacherPage ===
          "function"
        ) {

          window.navigateTeacherPage(
            page
          );

        }

      }
    );

  });


  /* =================================================
     CREATE ASSIGNMENT
  ================================================= */

  const form =
    document.querySelector(
      "#createAssignmentForm"
    );


  if (form) {

    form.addEventListener(
      "submit",
      (event) => {

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

          id:
            Date.now(),

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

      }
    );

  }


  /* =================================================
     ASSIGNMENT ACTIONS
  ================================================= */

  app.querySelectorAll(
    "[data-action]"
  ).forEach((button) => {

    button.addEventListener(
      "click",
      () => {

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


        /* =========================================
           VIEW
        ========================================= */

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


        /* =========================================
           EDIT
        ========================================= */

        if (action === "edit") {

          editAssignment(
            assignment
          );

          return;

        }


        /* =========================================
           DELETE
        ========================================= */

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

      }
    );

  });

}


/* =====================================================
   EDIT ASSIGNMENT
===================================================== */

function editAssignment(
  assignment
) {

  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="dashboard">

      <aside class="sidebar">

        <div class="sidebar-logo">

          <div class="sidebar-icon">
            🏫
          </div>

          <div>
            <h2>Govt. School</h2>
            <span>Teacher Portal</span>
          </div>

        </div>


        <nav class="sidebar-nav">

          <button
            type="button"
            class="nav-item"
            data-page="dashboard"
          >
            📊 Dashboard
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="classes"
          >
            📚 My Classes
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="students"
          >
            👨‍🎓 Students
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="attendance"
          >
            📅 Attendance
          </button>


          <button
            type="button"
            class="nav-item active"
            data-page="assignments"
          >
            📝 Assignments
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="results"
          >
            🏆 Exams & Results
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="material"
          >
            📖 Study Material
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="notices"
          >
            📢 Notices
          </button>


          <button
            type="button"
            class="nav-item"
            data-page="messages"
          >
            💬 Messages
          </button>

        </nav>


        <div class="sidebar-bottom">

          <button
            type="button"
            class="nav-item"
            data-page="settings"
          >
            ⚙️ Settings
          </button>


          <button
            type="button"
            class="nav-item logout"
            data-page="logout"
          >
            🚪 Logout
          </button>

        </div>

      </aside>


      <main class="dashboard-main">


        <header class="dashboard-header">

          <div>

            <h1>
              ✏️ Edit Assignment
            </h1>

            <p>
              Update assignment details
            </p>

          </div>


          <div class="profile">

            <div class="profile-avatar">
              T
            </div>

            <div class="profile-info">

              <strong>
                Teacher Name
              </strong>

              <span>
                Mathematics Teacher
              </span>

            </div>

          </div>

        </header>


        <section class="dashboard-content">


          <div class="dashboard-card">

            <div class="card-header">

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


              <div
                style="
                  display:grid;
                  grid-template-columns:
                    repeat(auto-fit,minmax(220px,1fr));
                  gap:20px;
                "
              >

                <div class="form-group">

                  <label>
                    Assignment Title
                  </label>

                  <input
                    type="text"
                    id="editTitle"
                    value="${escapeHtml(assignment.title)}"
                    required
                  />

                </div>


                <div class="form-group">

                  <label>
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


                <div class="form-group">

                  <label>
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


                <div class="form-group">

                  <label>
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


                <div class="form-group">

                  <label>
                    Due Date
                  </label>

                  <input
                    type="date"
                    id="editDueDate"
                    value="${assignment.dueDate}"
                    required
                  />

                </div>

              </div>


              <div
                class="form-group"
                style="margin-top:20px;"
              >

                <label>
                  Description
                </label>

                <textarea
                  id="editDescription"
                  rows="4"
                  required
                >${escapeHtml(
                  assignment.description
                )}</textarea>

              </div>


              <div
                style="
                  display:flex;
                  gap:12px;
                  margin-top:20px;
                  flex-wrap:wrap;
                "
              >

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
                  style="max-width:220px;"
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


  /* =================================================
     EDIT FORM
  ================================================= */

  const form =
    document.querySelector(
      "#editAssignmentForm"
    );


  form.addEventListener(
    "submit",
    (event) => {

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

    }
  );


  /* =================================================
     CANCEL EDIT
  ================================================= */

  const cancel =
    document.querySelector(
      "#cancelEditAssignment"
    );


  cancel.addEventListener(
    "click",
    () => {

      app.innerHTML =
        TeacherAssignments();

      setupTeacherAssignments();

    }
  );


  /* =================================================
     SIDEBAR NAVIGATION
  ================================================= */

  app.querySelectorAll(
    "[data-page]"
  ).forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const page =
          button.dataset.page;


        if (
          typeof window.navigateTeacherPage ===
          "function"
        ) {

          window.navigateTeacherPage(
            page
          );

        }

      }
    );

  });

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
        value="${option}"
        ${
          option === selected
            ? "selected"
            : ""
        }
      >
        ${option}
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