export function StudentResults(studentName = "Student") {
  const safeName = studentName || "Student";
  const firstLetter = safeName.charAt(0).toUpperCase();

  return `
    <div class="dashboard">

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

          <button class="nav-item active" data-page="results">
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


      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>Results</h1>

            <p>
              ${safeName}'s academic results
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
                ${firstLetter}
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


        <section class="dashboard-content">

          <div class="page-title">

            <h1>
              Result Overview
            </h1>

            <p>
              Academic performance for 2026
            </p>

          </div>


          <!-- SUMMARY -->

          <div class="stats-grid">

            <div class="stat-card">

              <div class="stat-icon blue">
                🏆
              </div>

              <div>
                <span>Overall Percentage</span>

                <h2>86%</h2>
              </div>

              <small class="positive">
                Excellent
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                📚
              </div>

              <div>
                <span>Total Subjects</span>

                <h2>6</h2>
              </div>

              <small>
                Subjects
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                ⭐
              </div>

              <div>
                <span>Highest Marks</span>

                <h2>96</h2>
              </div>

              <small>
                Marks
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                🎯
              </div>

              <div>
                <span>Result Status</span>

                <h2>PASS</h2>
              </div>

              <small class="positive">
                Congratulations
              </small>

            </div>

          </div>


          <!-- SUBJECT RESULTS -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Annual Examination 2026
                </h2>

                <p>
                  Subject-wise marks
                </p>

              </div>

            </div>


            <div class="class-list">

              <div class="class-item">

                <div class="subject-icon">📐</div>

                <div class="class-info">

                  <strong>Mathematics</strong>

                  <span>
                    Theory + Internal
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    92 / 100
                  </strong>

                  <span>
                    A+
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">🔬</div>

                <div class="class-info">

                  <strong>Science</strong>

                  <span>
                    Theory + Internal
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    88 / 100
                  </strong>

                  <span>
                    A
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">💻</div>

                <div class="class-info">

                  <strong>Computer Science</strong>

                  <span>
                    Theory + Practical
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    96 / 100
                  </strong>

                  <span>
                    A+
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">📖</div>

                <div class="class-info">

                  <strong>English</strong>

                  <span>
                    Theory + Internal
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    82 / 100
                  </strong>

                  <span>
                    A
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">🕉️</div>

                <div class="class-info">

                  <strong>Hindi</strong>

                  <span>
                    Theory + Internal
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    84 / 100
                  </strong>

                  <span>
                    A
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">🌍</div>

                <div class="class-info">

                  <strong>Social Science</strong>

                  <span>
                    Theory + Internal
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    86 / 100
                  </strong>

                  <span>
                    A
                  </span>

                </div>

              </div>

            </div>

          </div>


          <!-- EXAMINATION INFORMATION -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Examination Information
                </h2>

                <p>
                  Academic session details
                </p>

              </div>

            </div>


            <div class="class-list">

              <div class="class-item">

                <div class="subject-icon">📅</div>

                <div class="class-info">

                  <strong>
                    Academic Session
                  </strong>

                  <span>
                    2026 - 27
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Completed
                  </strong>

                  <span>✓</span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">📝</div>

                <div class="class-info">

                  <strong>
                    Examination
                  </strong>

                  <span>
                    Annual Examination 2026
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Published
                  </strong>

                  <span>✓</span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">🎯</div>

                <div class="class-info">

                  <strong>
                    Final Result
                  </strong>

                  <span>
                    All subjects cleared
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    PASS
                  </strong>

                  <span>✓</span>

                </div>

              </div>

            </div>

          </div>


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
   STUDENT RESULTS NAVIGATION
========================================= */

export function setupStudentResultsNavigation(studentName = "Student") {

  /* BACK TO DASHBOARD */

  const backButton = document.querySelector("#backToDashboard");

  if (backButton) {

    backButton.addEventListener("click", async () => {

      try {

        const module = await import("./StudentDashboard.js");

        const app = document.querySelector("#app");

        if (!app) {
          console.error("#app element not found");
          return;
        }

        app.innerHTML = module.StudentDashboard(studentName);

        if (typeof module.setupStudentNavigation === "function") {

          module.setupStudentNavigation(studentName);

        } else {

          console.error(
            "setupStudentNavigation function StudentDashboard.js me export nahi hai."
          );

        }

      } catch (error) {

        console.error(
          "StudentDashboard load error:",
          error
        );

      }

    });

  }


  /* LOGOUT */

  const logoutBtn = document.querySelector("#logoutBtn");

  if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

      const confirmLogout = confirm(
        "Are you sure you want to logout?"
      );

      if (confirmLogout) {

        window.location.reload();

      }

    });

  }

}