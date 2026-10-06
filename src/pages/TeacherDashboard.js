import {
  TeacherClasses,
  setupTeacherClasses
} from "./TeacherClasses.js";

import {
  TeacherStudents,
  setupTeacherStudents
} from "./TeacherStudents.js";

import {
  TeacherAttendance,
  setupTeacherAttendance
} from "./TeacherAttendance.js";

import {
  TeacherAssignments,
  setupTeacherAssignments
} from "./TeacherAssignments.js";

import {
  TeacherResults,
  setupTeacherResults
} from "./TeacherResults.js";

import {
  TeacherStudyMaterial,
  setupTeacherStudyMaterial
} from "./TeacherStudyMaterial.js";

import {
  TeacherNotices,
  setupTeacherNotices
} from "./TeacherNotices.js";

import {
  TeacherMessages,
  setupTeacherMessages
} from "./TeacherMessages.js";


/* =====================================================
   TEACHER DASHBOARD
===================================================== */

export function TeacherDashboard() {

  return `
    <div class="dashboard">

      <!-- SIDEBAR -->
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
            class="nav-item active"
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
            class="nav-item"
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


      <!-- MAIN -->
      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>

            <h1>
              Good Morning, Teacher 👋
            </h1>

            <p>
              Manage your classes and students
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


          <!-- STATS -->
          <div class="stats-grid">

            <div class="stat-card">

              <div class="stat-icon blue">
                👨‍🎓
              </div>

              <div>

                <span>
                  Total Students
                </span>

                <h2>
                  156
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                📅
              </div>

              <div>

                <span>
                  Today's Attendance
                </span>

                <h2>
                  94%
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                📝
              </div>

              <div>

                <span>
                  Pending Assignments
                </span>

                <h2>
                  12
                </h2>

              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                📚
              </div>

              <div>

                <span>
                  My Classes
                </span>

                <h2>
                  04
                </h2>

              </div>

            </div>

          </div>


          <!-- DASHBOARD GRID -->
          <div class="dashboard-grid">


            <!-- TODAY'S CLASSES -->
            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Today's Classes
                  </h2>

                  <p>
                    Your teaching schedule for today
                  </p>

                </div>


                <button
                  type="button"
                  class="view-btn"
                  data-page="classes"
                >
                  View All
                </button>

              </div>


              <div class="class-list">


                <div class="class-item">

                  <div class="subject-icon">
                    📐
                  </div>

                  <div class="class-info">

                    <strong>
                      Mathematics
                    </strong>

                    <span>
                      Class 10 • Section A
                    </span>

                  </div>

                  <div class="class-time">

                    <strong>
                      09:00 AM
                    </strong>

                    <span>
                      45 min
                    </span>

                  </div>

                </div>


                <div class="class-item">

                  <div class="subject-icon">
                    📐
                  </div>

                  <div class="class-info">

                    <strong>
                      Mathematics
                    </strong>

                    <span>
                      Class 9 • Section B
                    </span>

                  </div>

                  <div class="class-time">

                    <strong>
                      10:00 AM
                    </strong>

                    <span>
                      45 min
                    </span>

                  </div>

                </div>


              </div>

            </div>


            <!-- QUICK ACTIONS -->
            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Quick Actions
                  </h2>

                  <p>
                    Frequently used teacher tools
                  </p>

                </div>

              </div>


              <div class="quick-actions">

                <button
                  type="button"
                  data-page="attendance"
                >
                  📅 Mark Attendance
                </button>


                <button
                  type="button"
                  data-page="assignments"
                >
                  📝 Create Assignment
                </button>


                <button
                  type="button"
                  data-page="results"
                >
                  📊 Enter Results
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  `;
}


/* =====================================================
   NAVIGATION SETUP
===================================================== */

export function setupTeacherNavigation() {

  if (window.teacherNavigationInitialized) {
    return;
  }

  window.teacherNavigationInitialized = true;


  /*
    Make navigation function available globally.
  */

  window.navigateTeacherPage =
    navigateTeacherPage;


  document.addEventListener("click", (event) => {

    const button =
      event.target.closest("[data-page]");


    if (!button) {
      return;
    }


    const page =
      button.dataset.page;


    if (!page) {
      return;
    }


    navigateTeacherPage(page);

  });

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

export function navigateTeacherPage(page) {

  const app =
    document.querySelector("#app");


  if (!app) {

    console.error(
      "TeacherDashboard: #app not found"
    );

    return;
  }


  /* =================================================
     DASHBOARD
  ================================================= */

  if (page === "dashboard") {

    app.innerHTML =
      TeacherDashboard();

    return;
  }


  /* =================================================
     MY CLASSES
  ================================================= */

  if (page === "classes") {

    app.innerHTML =
      TeacherClasses();

    setupTeacherClasses();

    return;
  }


  /* =================================================
     STUDENTS
  ================================================= */

  if (page === "students") {

    app.innerHTML =
      TeacherStudents();

    setupTeacherStudents();

    return;
  }


  /* =================================================
     ATTENDANCE
  ================================================= */

  if (page === "attendance") {

    app.innerHTML =
      TeacherAttendance();

    setupTeacherAttendance();

    return;
  }


  /* =================================================
     ASSIGNMENTS
  ================================================= */

  if (page === "assignments") {

    app.innerHTML =
      TeacherAssignments();

    setupTeacherAssignments();

    return;
  }


  /* =================================================
     EXAMS & RESULTS
  ================================================= */

  if (page === "results") {

    app.innerHTML =
      TeacherResults();

    setupTeacherResults();

    return;
  }


  /* =================================================
     STUDY MATERIAL
  ================================================= */

  if (page === "material") {

    app.innerHTML =
      TeacherStudyMaterial();

    setupTeacherStudyMaterial();

    return;
  }


  /* =================================================
     NOTICES
  ================================================= */

  if (page === "notices") {

    app.innerHTML =
      TeacherNotices();

    setupTeacherNotices();

    return;
  }


  /* =================================================
     MESSAGES
  ================================================= */

  if (page === "messages") {

    app.innerHTML =
      TeacherMessages();

    setupTeacherMessages();

    return;
  }


  /* =================================================
     SETTINGS
  ================================================= */

  if (page === "settings") {

    showModule(page);

    return;
  }


  /* =================================================
     LOGOUT
  ================================================= */

  if (page === "logout") {

    const confirmLogout =
      window.confirm(
        "Kya aap logout karna chahte hain?"
      );


    if (confirmLogout) {

      window.location.href = "/";

    }

    return;
  }

}


/* =====================================================
   OTHER MODULES
===================================================== */

function showModule(page) {

  const data = {

    settings: [
      "⚙️",
      "Settings"
    ]

  };


  const module =
    data[page];


  if (!module) {
    return;
  }


  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="dashboard">


      <!-- SIDEBAR -->

      <aside class="sidebar">

        <div class="sidebar-logo">

          <div class="sidebar-icon">
            🏫
          </div>

          <div>

            <h2>
              Govt. School
            </h2>

            <span>
              Teacher Portal
            </span>

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
            class="nav-item"
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


      <!-- MAIN -->

      <main class="dashboard-main">


        <header class="dashboard-header">

          <div>

            <h1>
              ${module[0]} ${module[1]}
            </h1>

            <p>
              Teacher Portal
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


          <div
            class="dashboard-card"
            style="
              text-align:center;
              padding:70px 30px;
            "
          >

            <div
              style="
                font-size:60px;
              "
            >
              ${module[0]}
            </div>


            <h2>
              ${module[1]}
            </h2>


            <p>
              This module will be added next.
            </p>


            <button
              type="button"
              class="login-btn"
              data-page="dashboard"
              style="
                margin-top:25px;
                max-width:220px;
              "
            >
              ← Back to Dashboard
            </button>

          </div>

        </section>

      </main>

    </div>

  `;
}