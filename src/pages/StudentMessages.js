/* =========================================
   STUDENT MESSAGES
========================================= */

export function StudentMessages(studentName = "Student") {

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

          <button class="nav-item" data-page="notices">
            <span>📢</span>
            <strong>Notices</strong>
          </button>

          <button class="nav-item" data-page="study-material">
            <span>📖</span>
            <strong>Study Material</strong>
          </button>

          <button class="nav-item active" data-page="messages">
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
              Messages
            </h1>

            <p>
              Communicate with your teachers and school
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
              Messages
            </h1>

            <p>
              Your conversations with teachers and school staff
            </p>

          </div>


          <!-- ================= MESSAGE SUMMARY ================= -->

          <div class="stats-grid">

            <div class="stat-card">

              <div class="stat-icon blue">
                💬
              </div>

              <div>

                <span>
                  Total Messages
                </span>

                <h2>
                  24
                </h2>

              </div>

              <small>
                All conversations
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                📩
              </div>

              <div>

                <span>
                  Received
                </span>

                <h2>
                  18
                </h2>

              </div>

              <small>
                From teachers
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                📤
              </div>

              <div>

                <span>
                  Sent
                </span>

                <h2>
                  6
                </h2>

              </div>

              <small>
                Your messages
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                🔵
              </div>

              <div>

                <span>
                  Unread
                </span>

                <h2>
                  3
                </h2>

              </div>

              <small class="positive">
                Need attention
              </small>

            </div>

          </div>


          <!-- ================= MESSAGES ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Recent Conversations
                </h2>

                <p>
                  Your latest messages
                </p>

              </div>


              <button
                class="view-btn"
                id="newMessageBtn"
                type="button"
              >
                + New Message
              </button>

            </div>


            <div class="class-list">


              <!-- MESSAGE 1 -->

              <div
                class="class-item message-item"
                data-message="teacher"
              >

                <div class="subject-icon">
                  👨‍🏫
                </div>

                <div class="class-info">

                  <strong>
                    Mr. Sharma
                  </strong>

                  <span>
                    Mathematics Teacher
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Assignment reminder
                  </strong>

                  <span>
                    Today • 10:30 AM
                  </span>

                </div>

              </div>


              <!-- MESSAGE 2 -->

              <div
                class="class-item message-item"
                data-message="science"
              >

                <div class="subject-icon">
                  👩‍🏫
                </div>

                <div class="class-info">

                  <strong>
                    Mrs. Verma
                  </strong>

                  <span>
                    Science Teacher
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Science project
                  </strong>

                  <span>
                    Yesterday • 04:20 PM
                  </span>

                </div>

              </div>


              <!-- MESSAGE 3 -->

              <div
                class="class-item message-item"
                data-message="school"
              >

                <div class="subject-icon">
                  🏫
                </div>

                <div class="class-info">

                  <strong>
                    School Administration
                  </strong>

                  <span>
                    Government School
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Important notice
                  </strong>

                  <span>
                    Yesterday • 11:15 AM
                  </span>

                </div>

              </div>


              <!-- MESSAGE 4 -->

              <div
                class="class-item message-item"
                data-message="computer"
              >

                <div class="subject-icon">
                  👨‍💻
                </div>

                <div class="class-info">

                  <strong>
                    Mr. Patel
                  </strong>

                  <span>
                    Computer Science Teacher
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Practical class
                  </strong>

                  <span>
                    22 Aug • 02:10 PM
                  </span>

                </div>

              </div>


            </div>

          </div>


          <!-- ================= MESSAGE INFORMATION ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Communication
                </h2>

                <p>
                  Stay connected with your school
                </p>

              </div>

            </div>


            <div class="class-list">


              <div class="class-item">

                <div class="subject-icon">
                  👨‍🏫
                </div>

                <div class="class-info">

                  <strong>
                    Teachers
                  </strong>

                  <span>
                    Ask questions about subjects and assignments
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Available
                  </strong>

                  <span>
                    ✓
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">
                  🏫
                </div>

                <div class="class-info">

                  <strong>
                    School Administration
                  </strong>

                  <span>
                    Receive important school announcements
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Available
                  </strong>

                  <span>
                    ✓
                  </span>

                </div>

              </div>


              <div class="class-item">

                <div class="subject-icon">
                  👨‍👩‍👦
                </div>

                <div class="class-info">

                  <strong>
                    Parent Communication
                  </strong>

                  <span>
                    Parent-teacher communication support
                  </span>

                </div>

                <div class="class-time">

                  <strong>
                    Available
                  </strong>

                  <span>
                    ✓
                  </span>

                </div>

              </div>


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
   STUDENT MESSAGES NAVIGATION
========================================= */

export function setupStudentMessagesNavigation(
  studentName = "Student"
) {

  /* ================= BACK TO DASHBOARD ================= */

  const backButton =
    document.querySelector("#backToDashboard");


  if (backButton) {

    backButton.addEventListener(
      "click",
      () => {

        const event =
          new CustomEvent(
            "student-back-dashboard"
          );

        window.dispatchEvent(event);

      }
    );

  }


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


  /* ================= NEW MESSAGE ================= */

  const newMessageBtn =
    document.querySelector("#newMessageBtn");


  if (newMessageBtn) {

    newMessageBtn.addEventListener(
      "click",
      () => {

        alert(
          "New Message feature will be available soon."
        );

      }
    );

  }


  /* ================= MESSAGE CLICK ================= */

  const messages =
    document.querySelectorAll(
      ".message-item"
    );


  messages.forEach((message) => {

    message.addEventListener(
      "click",
      () => {

        const type =
          message.dataset.message;


        if (type === "teacher") {

          alert(
            "Mr. Sharma: Please complete Mathematics Chapter 5 assignment before 28 Aug 2026."
          );

          return;

        }


        if (type === "science") {

          alert(
            "Mrs. Verma: Please submit your Science Project by 30 Aug 2026."
          );

          return;

        }


        if (type === "school") {

          alert(
            "School Administration: Please check the latest school notice for important information."
          );

          return;

        }


        if (type === "computer") {

          alert(
            "Mr. Patel: Tomorrow's Computer Science practical class will be held in the Computer Lab."
          );

          return;

        }

      }
    );

  });

}