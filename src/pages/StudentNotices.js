export function StudentNotices(studentName = "Student") {

  const safeName = studentName || "Student"

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

          <button class="nav-item" data-page="dashboard">
            <span>🏠</span>
            <strong>Dashboard</strong>
          </button>

          <button class="nav-item" data-page="profile">
            <span>👨‍🎓</span>
            <strong>My Profile</strong>
          </button>

          <button class="nav-item" data-page="classes">
            <span>📚</span>
            <strong>My Classes</strong>
          </button>

          <button class="nav-item" data-page="assignments">
            <span>📝</span>
            <strong>Assignments</strong>
          </button>

          <button class="nav-item" data-page="attendance">
            <span>📅</span>
            <strong>Attendance</strong>
          </button>

          <button class="nav-item" data-page="results">
            <span>📊</span>
            <strong>Results</strong>
          </button>

          <button class="nav-item active" data-page="notices">
            <span>📢</span>
            <strong>Notices</strong>
          </button>

          <button class="nav-item" data-page="study-material">
            <span>📖</span>
            <strong>Study Material</strong>
          </button>

          <button class="nav-item" data-page="messages">
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

        <!-- HEADER -->

        <header class="dashboard-header">

          <div>

            <h1>
              Notices
            </h1>

            <p>
              School announcements and important updates
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
                ${safeName.charAt(0).toUpperCase()}
              </div>

              <div class="profile-info">

                <strong>
                  ${safeName}
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


          <!-- PAGE TITLE -->

          <div class="page-title">

            <h1>
              School Notices
            </h1>

            <p>
              Stay updated with the latest school announcements
            </p>

          </div>


          <!-- ================= NOTICE SUMMARY ================= -->

          <div class="stats-grid">


            <div class="stat-card">

              <div class="stat-icon blue">
                📢
              </div>

              <div>

                <span>
                  Total Notices
                </span>

                <h2>
                  8
                </h2>

              </div>

              <small>
                This Month
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                🆕
              </div>

              <div>

                <span>
                  New Notices
                </span>

                <h2>
                  3
                </h2>

              </div>

              <small class="positive">
                Recently Added
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                📅
              </div>

              <div>

                <span>
                  Upcoming Events
                </span>

                <h2>
                  4
                </h2>

              </div>

              <small>
                Events
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                ⭐
              </div>

              <div>

                <span>
                  Important
                </span>

                <h2>
                  2
                </h2>

              </div>

              <small>
                Notices
              </small>

            </div>

          </div>


          <!-- ================= NOTICE LIST ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Latest Notices
                </h2>

                <p>
                  Recent announcements from school
                </p>

              </div>

            </div>


            <div class="notice-list">


              <!-- NOTICE 1 -->

              <div class="notice-item">

                <div class="notice-icon">
                  📢
                </div>

                <div>

                  <strong>
                    Annual Sports Day
                  </strong>

                  <p>
                    Annual Sports Day will be held next week.
                    All students are requested to participate
                    and report to the sports ground on time.
                  </p>

                  <span>
                    Today • 10:30 AM
                  </span>

                </div>

              </div>


              <!-- NOTICE 2 -->

              <div class="notice-item">

                <div class="notice-icon">
                  📚
                </div>

                <div>

                  <strong>
                    Examination Schedule Released
                  </strong>

                  <p>
                    The annual examination timetable has been
                    released. Students can check their subjects
                    and examination dates.
                  </p>

                  <span>
                    Yesterday • 02:15 PM
                  </span>

                </div>

              </div>


              <!-- NOTICE 3 -->

              <div class="notice-item">

                <div class="notice-icon">
                  🏫
                </div>

                <div>

                  <strong>
                    School Holiday
                  </strong>

                  <p>
                    School will remain closed tomorrow due to
                    a scheduled holiday. Regular classes will
                    resume from the following day.
                  </p>

                  <span>
                    2 days ago
                  </span>

                </div>

              </div>


              <!-- NOTICE 4 -->

              <div class="notice-item">

                <div class="notice-icon">
                  📝
                </div>

                <div>

                  <strong>
                    Assignment Submission
                  </strong>

                  <p>
                    Students are requested to submit pending
                    assignments before the given deadline.
                  </p>

                  <span>
                    3 days ago
                  </span>

                </div>

              </div>


              <!-- NOTICE 5 -->

              <div class="notice-item">

                <div class="notice-icon">
                  🎓
                </div>

                <div>

                  <strong>
                    Parent Teacher Meeting
                  </strong>

                  <p>
                    Parent Teacher Meeting will be organized
                    this Saturday. Parents are requested to
                    attend the meeting.
                  </p>

                  <span>
                    5 days ago
                  </span>

                </div>

              </div>


              <!-- NOTICE 6 -->

              <div class="notice-item">

                <div class="notice-icon">
                  💻
                </div>

                <div>

                  <strong>
                    Computer Lab Maintenance
                  </strong>

                  <p>
                    The computer laboratory will remain closed
                    for maintenance on Friday.
                  </p>

                  <span>
                    1 week ago
                  </span>

                </div>

              </div>


            </div>

          </div>


          <!-- ================= UPCOMING EVENTS ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Upcoming Events
                </h2>

                <p>
                  Important upcoming school activities
                </p>

              </div>

            </div>


            <div class="class-list">


              <div class="class-item">

                <div class="subject-icon">
                  🏆
                </div>

                <div class="class-info">

                  <strong>
                    Annual Sports Day
                  </strong>

                  <span>
                    School Sports Ground
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    30 Aug 2026
                  </strong>

                  <span>
                    09:00 AM
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">
                  🎓
                </div>

                <div class="class-info">

                  <strong>
                    Parent Teacher Meeting
                  </strong>

                  <span>
                    School Auditorium
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    05 Sep 2026
                  </strong>

                  <span>
                    10:00 AM
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">
                  📝
                </div>

                <div class="class-info">

                  <strong>
                    Annual Examination
                  </strong>

                  <span>
                    Examination Hall
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    10 Sep 2026
                  </strong>

                  <span>
                    09:00 AM
                  </span>

                </div>

              </div>


            </div>

          </div>


          <!-- ================= BACK BUTTON ================= -->

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
   STUDENT NOTICES NAVIGATION
========================================= */

export function setupStudentNoticesNavigation(
  studentName = "Student"
) {

  /* ================= LOGOUT ================= */

  const logoutBtn =
    document.querySelector("#logoutBtn");


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


  /* ================= BACK TO DASHBOARD ================= */

  const backButton =
    document.querySelector("#backToDashboard");


  if (backButton) {

    backButton.addEventListener(
      "click",
      () => {

        window.dispatchEvent(
          new CustomEvent(
            "student-back-dashboard",
            {
              detail: {
                studentName: studentName
              }
            }
          )
        );

      }
    );

  }

}