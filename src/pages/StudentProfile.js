export function StudentProfile(studentName = "Student") {

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
          >
            <span>🏠</span>
            <strong>Dashboard</strong>
          </button>


          <button
            class="nav-item active"
            data-page="profile"
          >
            <span>👨‍🎓</span>
            <strong>My Profile</strong>
          </button>


          <button
            class="nav-item"
            data-page="classes"
          >
            <span>📚</span>
            <strong>My Classes</strong>
          </button>


          <button
            class="nav-item"
            data-page="assignments"
          >
            <span>📝</span>
            <strong>Assignments</strong>
          </button>


          <button
            class="nav-item"
            data-page="attendance"
          >
            <span>📅</span>
            <strong>Attendance</strong>
          </button>


          <button
            class="nav-item"
            data-page="results"
          >
            <span>📊</span>
            <strong>Results</strong>
          </button>


          <button
            class="nav-item"
            data-page="notices"
          >
            <span>📢</span>
            <strong>Notices</strong>
          </button>


          <button
            class="nav-item"
            data-page="study-material"
          >
            <span>📖</span>
            <strong>Study Material</strong>
          </button>


          <button
            class="nav-item"
            data-page="messages"
          >
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


        <!-- HEADER -->

        <header class="dashboard-header">

          <div>

            <h1>
              My Profile
            </h1>

            <p>
              View and manage your student information
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
              Student Profile
            </h1>

            <p>
              Your personal and academic information
            </p>

          </div>


          <!-- PROFILE CARD -->

          <div class="dashboard-card profile-page-card">


            <!-- PROFILE HEADER -->

            <div class="profile-page-header">

              <div class="profile-large-avatar">

                ${studentName.charAt(0).toUpperCase()}

              </div>


              <div>

                <h2>
                  ${studentName}
                </h2>

                <p>
                  Class 10 - A
                </p>

                <span class="profile-status">
                  ● Active Student
                </span>

              </div>

            </div>


            <!-- PERSONAL INFORMATION -->

            <div class="profile-section">

              <div class="card-header">

                <div>

                  <h2>
                    Personal Information
                  </h2>

                  <p>
                    Basic student details
                  </p>

                </div>

              </div>


              <div class="profile-details-grid">


                <div class="profile-detail-item">

                  <span>
                    Full Name
                  </span>

                  <strong>
                    ${studentName}
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Student ID
                  </span>

                  <strong>
                    GS2026101
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Date of Birth
                  </span>

                  <strong>
                    15 March 2010
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Gender
                  </span>

                  <strong>
                    Male
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Mobile Number
                  </span>

                  <strong>
                    +91 98765 43210
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Email
                  </span>

                  <strong>
                    student@school.com
                  </strong>

                </div>

              </div>

            </div>


            <!-- ACADEMIC INFORMATION -->

            <div class="profile-section">

              <div class="card-header">

                <div>

                  <h2>
                    Academic Information
                  </h2>

                  <p>
                    Current academic details
                  </p>

                </div>

              </div>


              <div class="profile-details-grid">


                <div class="profile-detail-item">

                  <span>
                    School
                  </span>

                  <strong>
                    Government School
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Class
                  </span>

                  <strong>
                    10 - A
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Roll Number
                  </span>

                  <strong>
                    101
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Admission Number
                  </span>

                  <strong>
                    GS-2020-101
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Academic Year
                  </span>

                  <strong>
                    2026 - 2027
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Section
                  </span>

                  <strong>
                    A
                  </strong>

                </div>

              </div>

            </div>


            <!-- PARENT INFORMATION -->

            <div class="profile-section">

              <div class="card-header">

                <div>

                  <h2>
                    Parent / Guardian Information
                  </h2>

                  <p>
                    Parent or guardian details
                  </p>

                </div>

              </div>


              <div class="profile-details-grid">


                <div class="profile-detail-item">

                  <span>
                    Father's Name
                  </span>

                  <strong>
                    Rajesh Kumar
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Mother's Name
                  </span>

                  <strong>
                    Sunita Kumar
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Guardian Mobile
                  </span>

                  <strong>
                    +91 98765 12345
                  </strong>

                </div>


                <div class="profile-detail-item">

                  <span>
                    Emergency Contact
                  </span>

                  <strong>
                    +91 98765 12345
                  </strong>

                </div>

              </div>

            </div>


          </div>


          <!-- BACK BUTTON -->

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