export function StudentResults(studentName = "Student") {
  const safeName = studentName || "Student";
  const firstLetter = safeName.charAt(0).toUpperCase();

  return `
    <div class="dashboard student-results-page">

      <aside class="sidebar">

        <div class="sidebar-logo">
          <div class="sidebar-icon">🏫</div>

          <div>
            <h2>Government School</h2>
            <span>Student Portal</span>
          </div>
        </div>

        <nav class="sidebar-nav">

          <button class="nav-item" data-page="dashboard" type="button">
            <span>🏠</span>
            <strong>Dashboard</strong>
          </button>

          <button class="nav-item" data-page="profile" type="button">
            <span>👨‍🎓</span>
            <strong>My Profile</strong>
          </button>

          <button class="nav-item" data-page="classes" type="button">
            <span>📚</span>
            <strong>My Classes</strong>
          </button>

          <button class="nav-item" data-page="assignments" type="button">
            <span>📝</span>
            <strong>Assignments</strong>
          </button>

          <button class="nav-item" data-page="attendance" type="button">
            <span>📅</span>
            <strong>Attendance</strong>
          </button>

          <button class="nav-item active" data-page="results" type="button">
            <span>📊</span>
            <strong>Results</strong>
          </button>

          <button class="nav-item" data-page="notices" type="button">
            <span>📢</span>
            <strong>Notices</strong>
          </button>

          <button class="nav-item" data-page="study-material" type="button">
            <span>📖</span>
            <strong>Study Material</strong>
          </button>

          <button class="nav-item" data-page="messages" type="button">
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


      <main class="dashboard-main">

        <header class="dashboard-header">

          <div class="results-header-title">
            <h1>Results</h1>

            <p>
              ${safeName}'s academic results
            </p>
          </div>

          <div class="header-actions">

            <button
              class="notification-btn"
              type="button"
              aria-label="Notifications"
            >
              🔔
              <span class="notification-dot"></span>
            </button>

            <div class="profile">

              <div class="profile-avatar">
                ${firstLetter}
              </div>

              <div class="profile-info">

                <strong>${safeName}</strong>

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

          <div class="stats-grid results-stats-grid">

            <div class="stat-card">

              <div class="stat-icon blue">
                🏆
              </div>

              <div class="result-stat-content">

                <span>
                  Overall Percentage
                </span>

                <h2>
                  86%
                </h2>

              </div>

              <small class="positive">
                Excellent
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                📚
              </div>

              <div class="result-stat-content">

                <span>
                  Total Subjects
                </span>

                <h2>
                  6
                </h2>

              </div>

              <small>
                Subjects
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                ⭐
              </div>

              <div class="result-stat-content">

                <span>
                  Highest Marks
                </span>

                <h2>
                  96
                </h2>

              </div>

              <small>
                Marks
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                🎯
              </div>

              <div class="result-stat-content">

                <span>
                  Result Status
                </span>

                <h2>
                  PASS
                </h2>

              </div>

              <small class="positive">
                Congratulations
              </small>

            </div>

          </div>


          <!-- SUBJECT RESULTS -->

          <div class="dashboard-card results-card">

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


            <div class="class-list results-list">

              <div class="class-item results-item">

                <div class="subject-icon">
                  📐
                </div>

                <div class="class-info">

                  <strong>
                    Mathematics
                  </strong>

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


              <div class="class-item results-item">

                <div class="subject-icon">
                  🔬
                </div>

                <div class="class-info">

                  <strong>
                    Science
                  </strong>

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


              <div class="class-item results-item">

                <div class="subject-icon">
                  💻
                </div>

                <div class="class-info">

                  <strong>
                    Computer Science
                  </strong>

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


              <div class="class-item results-item">

                <div class="subject-icon">
                  📖
                </div>

                <div class="class-info">

                  <strong>
                    English
                  </strong>

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


              <div class="class-item results-item">

                <div class="subject-icon">
                  🕉️
                </div>

                <div class="class-info">

                  <strong>
                    Hindi
                  </strong>

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


              <div class="class-item results-item">

                <div class="subject-icon">
                  🌍
                </div>

                <div class="class-info">

                  <strong>
                    Social Science
                  </strong>

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

          <div class="dashboard-card results-card">

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


            <div class="class-list results-list">

              <div class="class-item results-item">

                <div class="subject-icon">
                  📅
                </div>

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

                  <span>
                    ✓
                  </span>

                </div>

              </div>


              <div class="class-item results-item">

                <div class="subject-icon">
                  📝
                </div>

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

                  <span>
                    ✓
                  </span>

                </div>

              </div>


              <div class="class-item results-item">

                <div class="subject-icon">
                  🎯
                </div>

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

                  <span>
                    ✓
                  </span>

                </div>

              </div>

            </div>

          </div>


          <!-- BACK TO DASHBOARD -->

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


/* =====================================================
   RESPONSIVE CSS
===================================================== */

if (!document.getElementById("student-results-responsive-css")) {

  const style = document.createElement("style");

  style.id = "student-results-responsive-css";

  style.textContent = `

    .student-results-page,
    .student-results-page * {
      box-sizing: border-box;
    }

    .student-results-page {
      width: 100%;
      min-width: 0;
      overflow-x: hidden;
    }

    .student-results-page .dashboard-main {
      min-width: 0;
      width: 100%;
    }

    .student-results-page .dashboard-content {
      min-width: 0;
      width: 100%;
      overflow-x: hidden;
    }

    .student-results-page .results-header-title {
      min-width: 0;
    }

    .student-results-page .results-header-title h1,
    .student-results-page .results-header-title p {
      overflow-wrap: anywhere;
    }

    .student-results-page .header-actions {
      min-width: 0;
    }

    .student-results-page .profile {
      min-width: 0;
    }

    .student-results-page .profile-info {
      min-width: 0;
      max-width: 180px;
    }

    .student-results-page .profile-info strong,
    .student-results-page .profile-info span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .student-results-page .results-stats-grid {
      width: 100%;
      min-width: 0;
    }

    .student-results-page .stat-card {
      min-width: 0;
      overflow: hidden;
    }

    .student-results-page .result-stat-content {
      min-width: 0;
    }

    .student-results-page .result-stat-content span {
      display: block;
      overflow-wrap: anywhere;
    }

    .student-results-page .result-stat-content h2 {
      white-space: nowrap;
    }

    .student-results-page .results-card {
      width: 100%;
      min-width: 0;
      overflow: hidden;
    }

    .student-results-page .results-list {
      width: 100%;
      min-width: 0;
    }

    .student-results-page .results-item {
      width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: 52px minmax(0, 1fr) auto;
      align-items: center;
      gap: 16px;
    }

    .student-results-page .subject-icon {
      flex-shrink: 0;
    }

    .student-results-page .class-info {
      min-width: 0;
    }

    .student-results-page .class-info strong,
    .student-results-page .class-info span {
      display: block;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .student-results-page .class-time {
      min-width: 100px;
      text-align: right;
      white-space: nowrap;
    }

    .student-results-page .back-btn {
      max-width: 100%;
    }


    /* TABLET */

    @media (max-width: 1024px) {

      .student-results-page .dashboard-content {
        padding-left: 20px;
        padding-right: 20px;
      }

      .student-results-page .results-item {
        grid-template-columns: 48px minmax(0, 1fr) auto;
        gap: 14px;
      }

      .student-results-page .class-time {
        min-width: 90px;
      }

    }


    /* MOBILE */

    @media (max-width: 768px) {

      .student-results-page {
        width: 100%;
        max-width: 100%;
      }

      .student-results-page .dashboard-main {
        width: 100%;
        min-width: 0;
      }

      .student-results-page .dashboard-header {
        width: 100%;
        min-width: 0;
        gap: 12px;
      }

      .student-results-page .results-header-title {
        min-width: 0;
        flex: 1;
      }

      .student-results-page .results-header-title h1 {
        font-size: 24px;
        line-height: 1.25;
      }

      .student-results-page .results-header-title p {
        font-size: 13px;
        line-height: 1.4;
      }

      .student-results-page .header-actions {
        flex-shrink: 0;
      }

      .student-results-page .profile-info {
        max-width: 130px;
      }

      .student-results-page .dashboard-content {
        width: 100%;
        padding: 16px;
      }

      .student-results-page .page-title {
        margin-bottom: 18px;
      }

      .student-results-page .page-title h1 {
        font-size: 22px;
        line-height: 1.3;
      }

      .student-results-page .page-title p {
        font-size: 13px;
        line-height: 1.4;
      }


      /* SUMMARY */

      .student-results-page .results-stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .student-results-page .stat-card {
        min-width: 0;
        padding: 14px;
        gap: 10px;
      }

      .student-results-page .stat-icon {
        flex-shrink: 0;
      }

      .student-results-page .result-stat-content {
        min-width: 0;
      }

      .student-results-page .result-stat-content span {
        font-size: 12px;
        line-height: 1.35;
      }

      .student-results-page .result-stat-content h2 {
        font-size: 21px;
        line-height: 1.2;
        margin-top: 4px;
      }

      .student-results-page .stat-card small {
        font-size: 11px;
        line-height: 1.3;
      }


      /* CARDS */

      .student-results-page .results-card {
        margin-bottom: 16px;
      }

      .student-results-page .card-header {
        min-width: 0;
      }

      .student-results-page .card-header h2 {
        font-size: 18px;
        line-height: 1.35;
        overflow-wrap: anywhere;
      }

      .student-results-page .card-header p {
        font-size: 13px;
        line-height: 1.4;
      }


      /* RESULT ITEMS */

      .student-results-page .results-item {
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 10px;
        padding: 14px 12px;
      }

      .student-results-page .subject-icon {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .student-results-page .class-info {
        min-width: 0;
      }

      .student-results-page .class-info strong {
        font-size: 14px;
        line-height: 1.35;
      }

      .student-results-page .class-info span {
        font-size: 12px;
        line-height: 1.4;
        margin-top: 3px;
      }

      .student-results-page .class-time {
        grid-column: 2;
        width: 100%;
        min-width: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        text-align: left;
        white-space: normal;
        margin-top: -2px;
      }

      .student-results-page .class-time strong {
        font-size: 14px;
        line-height: 1.3;
      }

      .student-results-page .class-time span {
        font-size: 12px;
        line-height: 1.3;
      }

      .student-results-page .back-btn {
        width: 100%;
        margin-top: 4px;
      }

    }


    /* SMALL MOBILE */

    @media (max-width: 480px) {

      .student-results-page .dashboard-header {
        padding-left: 12px;
        padding-right: 12px;
      }

      .student-results-page .results-header-title h1 {
        font-size: 21px;
      }

      .student-results-page .results-header-title p {
        font-size: 12px;
      }

      .student-results-page .profile-info {
        display: none;
      }

      .student-results-page .dashboard-content {
        padding: 12px;
      }

      .student-results-page .page-title h1 {
        font-size: 20px;
      }

      .student-results-page .page-title p {
        font-size: 12px;
      }


      /* SUMMARY */

      .student-results-page .results-stats-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .student-results-page .stat-card {
        width: 100%;
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
        padding: 12px;
      }

      .student-results-page .stat-icon {
        width: 42px;
        height: 42px;
      }

      .student-results-page .result-stat-content span {
        font-size: 12px;
      }

      .student-results-page .result-stat-content h2 {
        font-size: 20px;
      }

      .student-results-page .stat-card small {
        font-size: 10px;
        text-align: right;
      }


      /* CARDS */

      .student-results-page .results-card {
        margin-bottom: 12px;
      }

      .student-results-page .card-header {
        padding: 12px;
      }

      .student-results-page .card-header h2 {
        font-size: 16px;
      }

      .student-results-page .card-header p {
        font-size: 11px;
      }


      /* ITEMS */

      .student-results-page .results-item {
        grid-template-columns: 38px minmax(0, 1fr);
        gap: 9px;
        padding: 12px 10px;
      }

      .student-results-page .subject-icon {
        width: 38px;
        height: 38px;
        font-size: 16px;
      }

      .student-results-page .class-info strong {
        font-size: 13px;
      }

      .student-results-page .class-info span {
        font-size: 11px;
      }

      .student-results-page .class-time strong {
        font-size: 13px;
      }

      .student-results-page .class-time span {
        font-size: 11px;
      }

    }


    /* VERY SMALL MOBILE */

    @media (max-width: 360px) {

      .student-results-page .dashboard-content {
        padding: 10px;
      }

      .student-results-page .stat-card {
        grid-template-columns: 38px minmax(0, 1fr);
      }

      .student-results-page .stat-card small {
        grid-column: 2;
        text-align: left;
        margin-top: -4px;
      }

      .student-results-page .results-item {
        padding: 10px 8px;
      }

      .student-results-page .class-time {
        gap: 6px;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =====================================================
   BACK TO DASHBOARD
===================================================== */

export function setupStudentResultsNavigation(studentName = "Student") {

  const backButton = document.querySelector("#backToDashboard");

  if (backButton && !backButton.dataset.backDashboardBound) {

    backButton.dataset.backDashboardBound = "true";

    backButton.addEventListener("click", async (event) => {

      event.preventDefault();
      event.stopPropagation();

      try {

        const module = await import("./StudentDashboard.js");

        const app = document.querySelector("#app");

        if (!app) {
          console.error("#app element not found");
          return;
        }

        app.innerHTML = module.StudentDashboard(studentName);

        if (
          typeof module.setupStudentNavigation === "function"
        ) {

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

  if (logoutBtn && !logoutBtn.dataset.resultsLogoutBound) {

    logoutBtn.dataset.resultsLogoutBound = "true";

    logoutBtn.addEventListener("click", () => {

      const confirmLogout = confirm(
        "Are you sure you want to logout?"
      );

      if (!confirmLogout) {
        return;
      }

      localStorage.removeItem("studentToken");
      localStorage.removeItem("studentUser");
      localStorage.removeItem("studentData");
      localStorage.removeItem("studentInfo");
      localStorage.removeItem("studentName");

      window.location.reload();

    });

  }

}