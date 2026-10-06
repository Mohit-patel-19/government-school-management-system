export function StudentAttendance(studentName = "Student") {

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


          <button
            class="nav-item active"
            data-page="attendance"
          >
            <span>📅</span>
            <strong>Attendance</strong>
          </button>


          <button class="nav-item" data-page="results">
            <span>📊</span>
            <strong>Results</strong>
          </button>


          <button class="nav-item" data-page="notices">
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


        <!-- ================= LOGOUT ================= -->

        <div class="sidebar-bottom">

          <button
            class="nav-item logout"
            id="logoutBtn"
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

            <h1>Attendance</h1>

            <p>
              ${studentName}'s attendance record
            </p>

          </div>


          <div class="header-actions">

            <button class="notification-btn">
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
              Attendance Overview
            </h1>

            <p>
              Check your attendance record
            </p>

          </div>



          <!-- ================= SUMMARY ================= -->

          <div class="stats-grid">


            <div class="stat-card">

              <div class="stat-icon blue">
                📅
              </div>

              <div>

                <span>
                  Overall Attendance
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
                ✓
              </div>

              <div>

                <span>
                  Present Days
                </span>

                <h2>
                  110
                </h2>

              </div>

              <small>
                Total
              </small>

            </div>



            <div class="stat-card">

              <div class="stat-icon orange">
                ✕
              </div>

              <div>

                <span>
                  Absent Days
                </span>

                <h2>
                  6
                </h2>

              </div>

              <small>
                Total
              </small>

            </div>



            <div class="stat-card">

              <div class="stat-icon purple">
                🟡
              </div>

              <div>

                <span>
                  Leave Days
                </span>

                <h2>
                  4
                </h2>

              </div>

              <small>
                Approved
              </small>

            </div>

          </div>



          <!-- ================= SUBJECT ATTENDANCE ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Subject-wise Attendance
                </h2>

                <p>
                  Attendance details for each subject
                </p>

              </div>

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
                    23 / 25 classes attended
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    92%
                  </strong>

                  <span>
                    Good
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
                    22 / 24 classes attended
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    91%
                  </strong>

                  <span>
                    Good
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
                    24 / 25 classes attended
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    96%
                  </strong>

                  <span>
                    Excellent
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
                    21 / 24 classes attended
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    88%
                  </strong>

                  <span>
                    Good
                  </span>

                </div>

              </div>



              <div class="class-item">

                <div class="subject-icon">
                  🌍
                </div>

                <div class="class-info">

                  <strong>
                    Social Science
                  </strong>

                  <span>
                    22 / 23 classes attended
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    96%
                  </strong>

                  <span>
                    Excellent
                  </span>

                </div>

              </div>



              <div class="class-item">

                <div class="subject-icon">
                  🕉️
                </div>

                <div class="class-info">

                  <strong>
                    Hindi
                  </strong>

                  <span>
                    23 / 24 classes attended
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    96%
                  </strong>

                  <span>
                    Excellent
                  </span>

                </div>

              </div>

            </div>

          </div>



          <!-- ================= MONTHLY ATTENDANCE ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Monthly Attendance
                </h2>

                <p>
                  Attendance percentage
                </p>

              </div>

            </div>



            <div class="class-list">


              <div class="class-item">

                <div class="subject-icon">
                  📅
                </div>

                <div class="class-info">

                  <strong>
                    June 2026
                  </strong>

                  <span>
                    20 working days
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    95%
                  </strong>

                  <span>
                    Excellent
                  </span>

                </div>

              </div>



              <div class="class-item">

                <div class="subject-icon">
                  📅
                </div>

                <div class="class-info">

                  <strong>
                    July 2026
                  </strong>

                  <span>
                    22 working days
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    91%
                  </strong>

                  <span>
                    Good
                  </span>

                </div>

              </div>



              <div class="class-item">

                <div class="subject-icon">
                  📅
                </div>

                <div class="class-info">

                  <strong>
                    August 2026
                  </strong>

                  <span>
                    18 working days
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    90%
                  </strong>

                  <span>
                    Good
                  </span>

                </div>

              </div>

            </div>

          </div>



          <!-- ================= BACK BUTTON ================= -->

          <button
            id="backToDashboard"
            class="back-btn"
          >
            ← Back to Dashboard
          </button>


        </section>

      </main>

    </div>
  `
}



/* =====================================================
   STUDENT ATTENDANCE NAVIGATION
===================================================== */

export function setupStudentAttendanceNavigation(
  studentName = "Student"
) {

  const navItems =
    document.querySelectorAll(
      '.nav-item[data-page]'
    )


  navItems.forEach((item) => {

    item.addEventListener('click', async () => {

      const page =
        item.dataset.page


      /* ================= DASHBOARD ================= */

      if (page === 'dashboard') {

        const module =
          await import('./StudentDashboard.js')

        document.querySelector('#app').innerHTML =
          module.StudentDashboard(studentName)

        module.setupStudentNavigation(
          studentName
        )

        return
      }


      /* ================= PROFILE ================= */

      if (page === 'profile') {

        const module =
          await import('./StudentProfile.js')

        document.querySelector('#app').innerHTML =
          module.StudentProfile(studentName)

        module.setupBackToDashboard(
          studentName
        )

        return
      }


      /* ================= CLASSES ================= */

      if (page === 'classes') {

        const module =
          await import('./StudentClasses.js')

        document.querySelector('#app').innerHTML =
          module.StudentClasses(studentName)

        module.setupStudentClassesNavigation(
          studentName
        )

        return
      }


      /* ================= ASSIGNMENTS ================= */

      if (page === 'assignments') {

        const module =
          await import('./Assignments.js')

        document.querySelector('#app').innerHTML =
          module.Assignments(studentName)

        module.setupAssignmentNavigation(
          studentName
        )

        return
      }


      /* ================= ATTENDANCE ================= */

      if (page === 'attendance') {

        document.querySelector('#app').innerHTML =
          StudentAttendance(studentName)

        setupStudentAttendanceNavigation(
          studentName
        )

        return
      }


      /* ================= RESULTS ================= */

      if (page === 'results') {

        alert(
          'Results section is under development.'
        )

        return
      }


      /* ================= NOTICES ================= */

      if (page === 'notices') {

        alert(
          'Notices section is under development.'
        )

        return
      }


      /* ================= STUDY MATERIAL ================= */

      if (page === 'study-material') {

        alert(
          'Study Material section is under development.'
        )

        return
      }


      /* ================= MESSAGES ================= */

      if (page === 'messages') {

        alert(
          'Messages section is under development.'
        )

        return
      }

    })

  })



  /* ===================================================
     BACK TO DASHBOARD
  =================================================== */

  const backButton =
    document.querySelector(
      '#backToDashboard'
    )


  if (backButton) {

    backButton.addEventListener(
      'click',
      async () => {

        const module =
          await import('./StudentDashboard.js')

        document.querySelector('#app').innerHTML =
          module.StudentDashboard(studentName)

        module.setupStudentNavigation(
          studentName
        )

      }
    )

  }



  /* ===================================================
     LOGOUT
  =================================================== */

  const logoutBtn =
    document.querySelector(
      '#logoutBtn'
    )


  if (logoutBtn) {

    logoutBtn.addEventListener(
      'click',
      () => {

        const confirmLogout =
          confirm(
            'Are you sure you want to logout?'
          )

        if (confirmLogout) {

          window.location.reload()

        }

      }
    )

  }

}