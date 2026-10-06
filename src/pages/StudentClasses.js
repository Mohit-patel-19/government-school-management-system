export function StudentClasses(studentName = "Student") {

  return `
    <div class="dashboard">

      <aside class="sidebar">

        <div class="sidebar-logo">
          <div class="sidebar-icon">🏫</div>

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

          <button class="nav-item active" data-page="classes">
            <span>📚</span>
            <strong>My Classes</strong>
          </button>

          <button class="nav-item" data-page="assignments">
            <span>📝</span>
            <strong>Assignments</strong>
          </button>

        </nav>

        <div class="sidebar-bottom">

          <button class="nav-item logout" id="logoutBtn">
            <span>🚪</span>
            <strong>Logout</strong>
          </button>

        </div>

      </aside>

      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>My Classes</h1>
            <p>Class 10 - A</p>
          </div>

        </header>

        <section class="dashboard-content">

          <div class="dashboard-card">

            <div class="card-header">

              <div>
                <h2>Today's Classes</h2>

                <p>
                  ${studentName}'s class schedule
                </p>
              </div>

            </div>

            <div class="class-list">

              <div class="class-item">

                <div class="subject-icon">📐</div>

                <div class="class-info">
                  <strong>Mathematics</strong>
                  <span>Mr. Sharma</span>
                </div>

                <div class="class-time">
                  <strong>09:00 AM</strong>
                  <span>Room 101</span>
                </div>

              </div>

              <div class="class-item">

                <div class="subject-icon">🔬</div>

                <div class="class-info">
                  <strong>Science</strong>
                  <span>Mrs. Verma</span>
                </div>

                <div class="class-time">
                  <strong>10:00 AM</strong>
                  <span>Lab 1</span>
                </div>

              </div>

              <div class="class-item">

                <div class="subject-icon">💻</div>

                <div class="class-info">
                  <strong>Computer Science</strong>
                  <span>Mr. Patel</span>
                </div>

                <div class="class-time">
                  <strong>11:00 AM</strong>
                  <span>Computer Lab</span>
                </div>

              </div>

              <div class="class-item">

                <div class="subject-icon">📖</div>

                <div class="class-info">
                  <strong>English</strong>
                  <span>Mrs. Singh</span>
                </div>

                <div class="class-time">
                  <strong>01:00 PM</strong>
                  <span>Room 104</span>
                </div>

              </div>

            </div>

          </div>

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