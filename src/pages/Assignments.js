import {
  AssignmentSubmit,
  setupAssignmentSubmit
} from "./AssignmentSubmit.js";


/* =========================================
   ASSIGNMENT DATA
========================================= */

const assignmentData = [

  {
    id: 1,
    name: "Mathematics Chapter 5",
    subject: "Mathematics",
    teacher: "Mr. Sharma",
    dueDate: "28 Aug 2026",
    status: "Pending",
    statusClass: "pending"
  },

  {
    id: 2,
    name: "Science Project",
    subject: "Science",
    teacher: "Mrs. Verma",
    dueDate: "30 Aug 2026",
    status: "Submitted",
    statusClass: "submitted"
  },

  {
    id: 3,
    name: "English Essay",
    subject: "English",
    teacher: "Mrs. Singh",
    dueDate: "02 Sep 2026",
    status: "Pending",
    statusClass: "pending"
  }

];


/* =========================================
   ASSIGNMENTS PAGE
========================================= */

export function Assignments(studentName = "Student") {

  return `

    <div class="dashboard">

      <!-- ================= SIDEBAR ================= -->

      <aside class="sidebar">

        <div class="sidebar-logo">

          <div class="sidebar-icon">
            🏫
          </div>

          <div>
            <h2>Government School</h2>
            <span>Student Portal</span>
          </div>

        </div>


        <nav class="sidebar-nav">

          <button
            class="nav-item"
            data-page="dashboard"
            type="button"
          >
            <span>🏠</span>
            <strong>Dashboard</strong>
          </button>


          <button
            class="nav-item"
            data-page="profile"
            type="button"
          >
            <span>👨‍🎓</span>
            <strong>My Profile</strong>
          </button>


          <button
            class="nav-item"
            data-page="classes"
            type="button"
          >
            <span>📚</span>
            <strong>My Classes</strong>
          </button>


          <button
            class="nav-item active"
            data-page="assignments"
            type="button"
          >
            <span>📝</span>
            <strong>Assignments</strong>
          </button>


          <button
            class="nav-item"
            data-page="attendance"
            type="button"
          >
            <span>📅</span>
            <strong>Attendance</strong>
          </button>


          <button
            class="nav-item"
            data-page="results"
            type="button"
          >
            <span>📊</span>
            <strong>Results</strong>
          </button>


          <button
            class="nav-item"
            data-page="notices"
            type="button"
          >
            <span>📢</span>
            <strong>Notices</strong>
          </button>


          <button
            class="nav-item"
            data-page="study-material"
            type="button"
          >
            <span>📖</span>
            <strong>Study Material</strong>
          </button>


          <button
            class="nav-item"
            data-page="messages"
            type="button"
          >
            <span>💬</span>
            <strong>Messages</strong>
          </button>

        </nav>


        <div class="sidebar-bottom">

          <button
            class="nav-item logout"
            id="logoutBtn"
            type="button"
          >
            <span>🚪</span>
            <strong>Logout</strong>
          </button>

        </div>

      </aside>


      <!-- ================= MAIN ================= -->

      <main class="dashboard-main">

        <!-- ================= HEADER ================= -->

        <header class="dashboard-header">

          <div>

            <h1>
              Assignments
            </h1>

            <p>
              View and submit your assignments
            </p>

          </div>


          <div class="header-actions">

            <button
              class="notification-btn"
              type="button"
            >
              🔔
              <span class="notification-dot"></span>
            </button>


            <div class="profile">

              <div class="profile-avatar">
                ${studentName.charAt(0).toUpperCase()}
              </div>


              <div class="profile-info">

                <strong>
                  ${studentName}
                </strong>

                <span>
                  Class 10 - A
                </span>

              </div>

            </div>

          </div>

        </header>


        <!-- ================= CONTENT ================= -->

        <section class="dashboard-content">


          <div class="page-title">

            <h1>
              My Assignments
            </h1>

            <p>
              Check your assignments and submit pending work
            </p>

          </div>


          <!-- ================= SUMMARY ================= -->

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
                  ${assignmentData.length}
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                ⏳
              </div>

              <div>

                <span>
                  Pending
                </span>

                <h2>
                  ${
                    assignmentData.filter(
                      item => item.status === "Pending"
                    ).length
                  }
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                ✅
              </div>

              <div>

                <span>
                  Submitted
                </span>

                <h2>
                  ${
                    assignmentData.filter(
                      item => item.status === "Submitted"
                    ).length
                  }
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                📚
              </div>

              <div>

                <span>
                  Subjects
                </span>

                <h2>
                  ${
                    new Set(
                      assignmentData.map(
                        item => item.subject
                      )
                    ).size
                  }
                </h2>

              </div>

            </div>

          </div>


          <!-- ================= ASSIGNMENTS CARD ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  All Assignments
                </h2>

                <p>
                  Your assigned academic work
                </p>

              </div>

            </div>


            <div class="assignment-page-list">


              ${
                assignmentData.map(
                  (assignment, index) => `

                    <div
                      class="assignment-page-item"
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
                          ${assignment.name}
                        </strong>


                        <span>
                          ${assignment.subject}
                          •
                          ${assignment.teacher}
                        </span>


                        <small>
                          Due: ${assignment.dueDate}
                        </small>

                      </div>


                      <div
                        class="assignment-page-status"
                      >

                        <span
                          class="status ${assignment.statusClass}"
                        >
                          ${assignment.status}
                        </span>


                        <button
                          type="button"
                          class="submit-assignment-btn"
                          data-assignment-index="${index}"
                        >

                          ${
                            assignment.status === "Submitted"
                              ? "View"
                              : "Submit"
                          }

                        </button>

                      </div>

                    </div>

                  `
                ).join("")
              }


            </div>

          </div>


          <!-- ================= BACK ================= -->

          <button
            id="backToDashboard"
            class="back-btn"
            type="button"
          >
            ← Back to Dashboard
          </button>


        </section>

      </main>

    </div>

  `;
}


/* =========================================
   SHOW ASSIGNMENTS PAGE
========================================= */

export function showStudentAssignments(
  studentName = "Student"
) {

  const app =
    document.querySelector("#app");


  if (!app) {

    console.error("#app not found");

    return;

  }


  app.innerHTML =
    Assignments(studentName);


  setupAssignmentNavigation(
    studentName
  );

}


/* =========================================
   ASSIGNMENT NAVIGATION
========================================= */

export function setupAssignmentNavigation(
  studentName = "Student"
) {

  const navItems =
    document.querySelectorAll(
      ".nav-item[data-page]"
    );


  navItems.forEach((item) => {

    item.addEventListener(
      "click",
      async () => {

        const page =
          item.dataset.page;


        const app =
          document.querySelector("#app");


        if (!app) {
          return;
        }


        /* ================= DASHBOARD ================= */

        if (page === "dashboard") {

          const module =
            await import(
              "./StudentDashboard.js"
            );


          app.innerHTML =
            module.StudentDashboard(
              studentName
            );


          module.setupStudentNavigation(
            studentName
          );


          return;

        }


        /* ================= PROFILE ================= */

        if (page === "profile") {

          const module =
            await import(
              "./StudentProfile.js"
            );


          app.innerHTML =
            module.StudentProfile(
              studentName
            );


          module.setupBackToDashboard(
            studentName
          );


          return;

        }


        /* ================= CLASSES ================= */

        if (page === "classes") {

          const module =
            await import(
              "./StudentClasses.js"
            );


          app.innerHTML =
            module.StudentClasses(
              studentName
            );


          if (
            typeof module.setupStudentClassesNavigation ===
            "function"
          ) {

            module.setupStudentClassesNavigation(
              studentName
            );

          } else {

            if (
              typeof module.setupBackToDashboard ===
              "function"
            ) {

              module.setupBackToDashboard(
                studentName
              );

            }

          }


          return;

        }


        /* ================= ASSIGNMENTS ================= */

        if (page === "assignments") {

          app.innerHTML =
            Assignments(studentName);


          setupAssignmentNavigation(
            studentName
          );


          return;

        }


        /* ================= ATTENDANCE ================= */

        if (page === "attendance") {

          const module =
            await import(
              "./StudentAttendance.js"
            );


          app.innerHTML =
            module.StudentAttendance(
              studentName
            );


          module.setupStudentAttendanceNavigation(
            studentName
          );


          return;

        }


        /* ================= RESULTS ================= */

        if (page === "results") {

          const module =
            await import(
              "./StudentResults.js"
            );


          app.innerHTML =
            module.StudentResults(
              studentName
            );


          module.setupStudentResultsNavigation(
            studentName
          );


          return;

        }


        /* ================= NOTICES ================= */

        if (page === "notices") {

          const module =
            await import(
              "./StudentNotices.js"
            );


          app.innerHTML =
            module.StudentNotices(
              studentName
            );


          module.setupStudentNoticesNavigation(
            studentName
          );


          return;

        }


        /* ================= STUDY MATERIAL ================= */

        if (page === "study-material") {

          const module =
            await import(
              "./StudentStudyMaterial.js"
            );


          app.innerHTML =
            module.StudentStudyMaterial(
              studentName
            );


          module.setupStudentStudyMaterialNavigation(
            studentName
          );


          return;

        }


        /* ================= MESSAGES ================= */

        if (page === "messages") {

          const module =
            await import(
              "./StudentMessages.js"
            );


          app.innerHTML =
            module.StudentMessages(
              studentName
            );


          module.setupStudentMessagesNavigation(
            studentName
          );


          return;

        }

      }
    );

  });


  /* ================= BACK TO DASHBOARD ================= */

  const backButton =
    document.querySelector(
      "#backToDashboard"
    );


  if (backButton) {

    backButton.addEventListener(
      "click",
      async () => {

        const module =
          await import(
            "./StudentDashboard.js"
          );


        const app =
          document.querySelector("#app");


        if (!app) {
          return;
        }


        app.innerHTML =
          module.StudentDashboard(
            studentName
          );


        module.setupStudentNavigation(
          studentName
        );

      }
    );

  }


  /* ================= SUBMIT / VIEW ================= */

  const assignmentButtons =
    document.querySelectorAll(
      ".submit-assignment-btn"
    );


  assignmentButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const index =
          Number(
            button.dataset.assignmentIndex
          );


        const assignment =
          assignmentData[index];


        if (!assignment) {

          alert(
            "Assignment not found."
          );

          return;

        }


        const app =
          document.querySelector("#app");


        if (!app) {
          return;
        }


        app.innerHTML =
          AssignmentSubmit(

            assignment.name,

            assignment.subject,

            assignment.teacher,

            assignment.dueDate,

            studentName

          );


        setupAssignmentSubmit();

      }
    );

  });


  /* ================= LOGOUT ================= */

  setupLogout();

}


/* =========================================
   LOGOUT
========================================= */

function setupLogout() {

  const logoutBtn =
    document.querySelector(
      "#logoutBtn"
    );


  if (!logoutBtn) {
    return;
  }


  logoutBtn.addEventListener(
    "click",
    () => {

      const confirmLogout =
        window.confirm(
          "Are you sure you want to logout?"
        );


      if (confirmLogout) {

        window.location.reload();

      }

    }
  );

}


/* =========================================
   MAKE FUNCTION AVAILABLE
========================================= */

window.showStudentAssignments =
  showStudentAssignments;