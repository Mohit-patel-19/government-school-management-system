import { StudentProfile } from './StudentProfile.js'
import { StudentClasses } from './StudentClasses.js'

import {
  Assignments,
  setupAssignmentNavigation
} from './Assignments.js'

import {
  StudentAttendance,
  setupStudentAttendanceNavigation
} from './StudentAttendance.js'

import {
  StudentResults,
  setupStudentResultsNavigation
} from './StudentResults.js'

import {
  StudentNotices,
  setupStudentNoticesNavigation
} from './StudentNotices.js'

import {
  StudentStudyMaterial,
  setupStudentStudyMaterialNavigation
} from './StudentStudyMaterial.js'

import {
  StudentMessages,
  setupStudentMessagesNavigation
} from './StudentMessages.js'


/* =========================================
   STUDENT DASHBOARD
========================================= */

export function StudentDashboard(
  studentName = "Student"
) {

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
            class="nav-item active"
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
            class="nav-item"
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
              Student Dashboard
            </h1>

            <p>
              Welcome back, ${studentName}
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


          <!-- ================= STATISTICS ================= -->

          <div class="stats-grid">


            <div class="stat-card">

              <div class="stat-icon blue">
                📅
              </div>

              <div>

                <span>
                  Attendance
                </span>

                <h2>
                  92%
                </h2>

              </div>

              <small class="positive">
                Good
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                📚
              </div>

              <div>

                <span>
                  Assignments
                </span>

                <h2>
                  18
                </h2>

              </div>

              <small>
                Completed
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                📝
              </div>

              <div>

                <span>
                  Pending Work
                </span>

                <h2>
                  4
                </h2>

              </div>

              <small>
                Need attention
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                🏆
              </div>

              <div>

                <span>
                  Overall Result
                </span>

                <h2>
                  86%
                </h2>

              </div>

              <small class="positive">
                Excellent
              </small>

            </div>

          </div>


          <!-- ================= CLASSES + NOTICES ================= -->

          <div class="dashboard-grid">


            <!-- TODAY'S CLASSES -->

            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Today's Classes
                  </h2>

                  <p>
                    Your class schedule for today
                  </p>

                </div>


                <button
                  class="view-btn"
                  data-page="classes"
                  type="button"
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
                      Mr. Sharma
                    </span>

                  </div>

                  <div class="class-time">

                    <strong>
                      09:00 AM
                    </strong>

                    <span>
                      Room 101
                    </span>

                  </div>

                </div>


                <div class="class-item">

                  <div class="subject-icon">
                    🔬
                  </div>

                  <div class="class-info">

                    <strong>
                      Science
                    </strong>

                    <span>
                      Mrs. Verma
                    </span>

                  </div>

                  <div class="class-time">

                    <strong>
                      10:00 AM
                    </strong>

                    <span>
                      Lab 1
                    </span>

                  </div>

                </div>


                <div class="class-item">

                  <div class="subject-icon">
                    💻
                  </div>

                  <div class="class-info">

                    <strong>
                      Computer Science
                    </strong>

                    <span>
                      Mr. Patel
                    </span>

                  </div>

                  <div class="class-time">

                    <strong>
                      11:00 AM
                    </strong>

                    <span>
                      Computer Lab
                    </span>

                  </div>

                </div>


                <div class="class-item">

                  <div class="subject-icon">
                    📖
                  </div>

                  <div class="class-info">

                    <strong>
                      English
                    </strong>

                    <span>
                      Mrs. Singh
                    </span>

                  </div>

                  <div class="class-time">

                    <strong>
                      01:00 PM
                    </strong>

                    <span>
                      Room 104
                    </span>

                  </div>

                </div>


              </div>

            </div>


            <!-- ================= NOTICES ================= -->

            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Latest Notices
                  </h2>

                  <p>
                    School announcements
                  </p>

                </div>


                <button
                  class="view-btn"
                  data-page="notices"
                  type="button"
                >
                  View All
                </button>

              </div>


              <div class="notice-list">


                <div class="notice-item">

                  <div class="notice-icon">
                    📢
                  </div>

                  <div>

                    <strong>
                      Annual Sports Day
                    </strong>

                    <p>
                      Sports day will be held next week.
                    </p>

                    <span>
                      2 hours ago
                    </span>

                  </div>

                </div>


                <div class="notice-item">

                  <div class="notice-icon">
                    📚
                  </div>

                  <div>

                    <strong>
                      Exam Schedule Released
                    </strong>

                    <p>
                      Check the examination timetable.
                    </p>

                    <span>
                      Yesterday
                    </span>

                  </div>

                </div>


                <div class="notice-item">

                  <div class="notice-icon">
                    🏫
                  </div>

                  <div>

                    <strong>
                      School Holiday
                    </strong>

                    <p>
                      School will remain closed tomorrow.
                    </p>

                    <span>
                      2 days ago
                    </span>

                  </div>

                </div>


              </div>

            </div>

          </div>


          <!-- ================= ASSIGNMENTS + QUICK ACTIONS ================= -->

          <div class="dashboard-grid">


            <!-- ASSIGNMENTS -->

            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Recent Assignments
                  </h2>

                  <p>
                    Track your assignments
                  </p>

                </div>


                <button
                  class="view-btn"
                  data-page="assignments"
                  type="button"
                >
                  View All
                </button>

              </div>


              <div class="assignment-list">


                <div class="assignment-item">

                  <div>

                    <strong>
                      Mathematics Chapter 5
                    </strong>

                    <span>
                      Due: 28 Aug 2026
                    </span>

                  </div>

                  <span class="status pending">
                    Pending
                  </span>

                </div>


                <div class="assignment-item">

                  <div>

                    <strong>
                      Science Project
                    </strong>

                    <span>
                      Due: 30 Aug 2026
                    </span>

                  </div>

                  <span class="status submitted">
                    Submitted
                  </span>

                </div>


                <div class="assignment-item">

                  <div>

                    <strong>
                      English Essay
                    </strong>

                    <span>
                      Due: 02 Sep 2026
                    </span>

                  </div>

                  <span class="status pending">
                    Pending
                  </span>

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
                    Frequently used options
                  </p>

                </div>

              </div>


              <div class="quick-actions">


                <button
                  data-page="attendance"
                  type="button"
                >
                  <span>📅</span>
                  Attendance
                </button>


                <button
                  data-page="results"
                  type="button"
                >
                  <span>📊</span>
                  Results
                </button>


                <button
                  data-page="study-material"
                  type="button"
                >
                  <span>📚</span>
                  Study Material
                </button>


                <button
                  data-page="notices"
                  type="button"
                >
                  <span>📢</span>
                  Notices
                </button>


              </div>

            </div>

          </div>


        </section>

      </main>

    </div>
  `;
}


/* =========================================
   STUDENT NAVIGATION
========================================= */

export function setupStudentNavigation(
  studentName = "Student"
) {


  /* ================= BACK FROM PAGES ================= */

  window.onstudentbackdashboard = null;


  window.addEventListener(
    "student-back-dashboard",
    () => {

      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        StudentDashboard(studentName);


      setupStudentNavigation(
        studentName
      );

    }
  );


  /* ================= SIDEBAR NAVIGATION ================= */

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


        /* ===== DASHBOARD ===== */

        if (page === "dashboard") {

          document.querySelector("#app").innerHTML =
            StudentDashboard(studentName);

          setupStudentNavigation(
            studentName
          );

          return;
        }


        /* ===== PROFILE ===== */

        if (page === "profile") {

          document.querySelector("#app").innerHTML =
            StudentProfile(studentName);

          setupBackToDashboard(
            studentName
          );

          return;
        }


        /* ===== CLASSES ===== */

        if (page === "classes") {

          document.querySelector("#app").innerHTML =
            StudentClasses(studentName);

          setupBackToDashboard(
            studentName
          );

          return;
        }


        /* ===== ASSIGNMENTS ===== */

        if (page === "assignments") {

          document.querySelector("#app").innerHTML =
            Assignments(studentName);

          setupAssignmentNavigation(
            studentName
          );

          return;
        }


        /* ===== ATTENDANCE ===== */

        if (page === "attendance") {

          document.querySelector("#app").innerHTML =
            StudentAttendance(studentName);

          setupStudentAttendanceNavigation(
            studentName
          );

          return;
        }


        /* ===== RESULTS ===== */

        if (page === "results") {

          document.querySelector("#app").innerHTML =
            StudentResults(studentName);

          setupStudentResultsNavigation(
            studentName
          );

          return;
        }


        /* ===== NOTICES ===== */

        if (page === "notices") {

          document.querySelector("#app").innerHTML =
            StudentNotices(studentName);

          setupStudentNoticesNavigation(
            studentName
          );

          return;
        }


        /* ===== STUDY MATERIAL ===== */

        if (page === "study-material") {

          document.querySelector("#app").innerHTML =
            StudentStudyMaterial(studentName);

          setupStudentStudyMaterialNavigation(
            studentName
          );

          return;
        }


        /* ===== MESSAGES ===== */

        if (page === "messages") {

          document.querySelector("#app").innerHTML =
            StudentMessages(studentName);

          setupStudentMessagesNavigation(
            studentName
          );

          return;
        }

      }
    );

  });


  /* ================= LOGOUT ================= */

  const logoutBtn =
    document.querySelector(
      "#logoutBtn"
    );


  if (logoutBtn) {

    logoutBtn.addEventListener(
      "click",
      () => {

        const confirmLogout =
          confirm(
            "Are you sure you want to logout?"
          );


        if (confirmLogout) {

          window.location.reload();

        }

      }
    );

  }


  /* ================= QUICK ACTIONS ================= */

  const quickButtons =
    document.querySelectorAll(
      ".quick-actions button[data-page]"
    );


  quickButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const page =
          button.dataset.page;


        /* ===== ATTENDANCE ===== */

        if (page === "attendance") {

          document.querySelector("#app").innerHTML =
            StudentAttendance(studentName);

          setupStudentAttendanceNavigation(
            studentName
          );

          return;
        }


        /* ===== RESULTS ===== */

        if (page === "results") {

          document.querySelector("#app").innerHTML =
            StudentResults(studentName);

          setupStudentResultsNavigation(
            studentName
          );

          return;
        }


        /* ===== NOTICES ===== */

        if (page === "notices") {

          document.querySelector("#app").innerHTML =
            StudentNotices(studentName);

          setupStudentNoticesNavigation(
            studentName
          );

          return;
        }


        /* ===== STUDY MATERIAL ===== */

        if (page === "study-material") {

          document.querySelector("#app").innerHTML =
            StudentStudyMaterial(studentName);

          setupStudentStudyMaterialNavigation(
            studentName
          );

          return;
        }

      }
    );

  });


  /* ================= VIEW ALL BUTTONS ================= */

  const viewButtons =
    document.querySelectorAll(
      ".view-btn[data-page]"
    );


  viewButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const page =
          button.dataset.page;


        /* ===== CLASSES ===== */

        if (page === "classes") {

          document.querySelector("#app").innerHTML =
            StudentClasses(studentName);

          setupBackToDashboard(
            studentName
          );

          return;
        }


        /* ===== ASSIGNMENTS ===== */

        if (page === "assignments") {

          document.querySelector("#app").innerHTML =
            Assignments(studentName);

          setupAssignmentNavigation(
            studentName
          );

          return;
        }


        /* ===== NOTICES ===== */

        if (page === "notices") {

          document.querySelector("#app").innerHTML =
            StudentNotices(studentName);

          setupStudentNoticesNavigation(
            studentName
          );

          return;
        }

      }
    );

  });

}


/* =========================================
   BACK TO DASHBOARD
========================================= */

export function setupBackToDashboard(
  studentName = "Student"
) {

  const backButton =
    document.querySelector(
      "#backToDashboard"
    );


  if (!backButton) {
    return;
  }


  backButton.addEventListener(
    "click",
    () => {

      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        StudentDashboard(studentName);


      setupStudentNavigation(
        studentName
      );

    }
  );

}