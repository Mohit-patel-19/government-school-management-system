/* =========================================
   ASSIGNMENT SUBMIT PAGE
========================================= */

export function AssignmentSubmit(
  assignmentName = "Assignment",
  subject = "Subject",
  teacher = "Teacher",
  dueDate = "Not specified",
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
              Submit Assignment
            </h1>

            <p>
              Upload your assignment file
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

                ${studentName
                  .charAt(0)
                  .toUpperCase()}

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
              ${assignmentName}
            </h1>

            <p>
              Submit your assignment before the due date
            </p>

          </div>


          <!-- ================= DETAILS ================= -->

          <div class="dashboard-card">


            <div class="card-header">

              <div>

                <h2>
                  Assignment Details
                </h2>

                <p>
                  Please check the details before submitting
                </p>

              </div>

            </div>


            <div class="assignment-submit-details">


              <div>

                <strong>
                  Assignment
                </strong>

                <span>
                  ${assignmentName}
                </span>

              </div>


              <div>

                <strong>
                  Subject
                </strong>

                <span>
                  ${subject}
                </span>

              </div>


              <div>

                <strong>
                  Teacher
                </strong>

                <span>
                  ${teacher}
                </span>

              </div>


              <div>

                <strong>
                  Due Date
                </strong>

                <span>
                  ${dueDate}
                </span>

              </div>

            </div>


            <!-- ================= FORM ================= -->

            <form
              id="assignmentSubmitForm"
            >


              <div class="form-group">

                <label
                  for="assignmentFile"
                >
                  Upload Assignment
                </label>


                <input
                  type="file"
                  id="assignmentFile"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  required
                />


                <small>
                  Allowed: PDF, DOC, DOCX, JPG, JPEG, PNG
                </small>

              </div>


              <div class="submit-actions">


                <button
                  type="button"
                  id="cancelAssignmentBtn"
                  class="back-btn"
                >
                  ← Cancel
                </button>


                <button
                  type="submit"
                  class="login-btn"
                >
                  Submit Assignment
                </button>


              </div>


            </form>

          </div>


          <!-- ================= BACK ================= -->

          <button
            id="backToAssignments"
            class="back-btn"
            type="button"
          >
            ← Back to Assignments
          </button>


        </section>

      </main>

    </div>

  `;
}


/* =========================================
   SUBMIT PAGE FUNCTIONALITY
========================================= */

export function setupAssignmentSubmit() {

  const form =
    document.querySelector(
      "#assignmentSubmitForm"
    );


  const fileInput =
    document.querySelector(
      "#assignmentFile"
    );


  const cancelButton =
    document.querySelector(
      "#cancelAssignmentBtn"
    );


  const backButton =
    document.querySelector(
      "#backToAssignments"
    );


  /* =====================================
     BACK TO ASSIGNMENTS
  ===================================== */

  if (backButton) {

    backButton.addEventListener(
      "click",
      () => {

        if (
          typeof window.showStudentAssignments ===
          "function"
        ) {

          window.showStudentAssignments();

        }

      }
    );

  }


  /* =====================================
     CANCEL
  ===================================== */

  if (cancelButton) {

    cancelButton.addEventListener(
      "click",
      () => {

        if (
          typeof window.showStudentAssignments ===
          "function"
        ) {

          window.showStudentAssignments();

        }

      }
    );

  }


  /* =====================================
     FORM SUBMIT
  ===================================== */

  if (form) {

    form.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        /* ===============================
           FILE CHECK
        =============================== */

        if (
          !fileInput ||
          !fileInput.files ||
          fileInput.files.length === 0
        ) {

          alert(
            "Please select an assignment file."
          );

          return;

        }


        const file =
          fileInput.files[0];


        /* ===============================
           FILE EXTENSION CHECK
        =============================== */

        const allowedExtensions = [

          "pdf",
          "doc",
          "docx",
          "jpg",
          "jpeg",
          "png"

        ];


        const extension =
          file.name
            .split(".")
            .pop()
            .toLowerCase();


        if (
          !allowedExtensions.includes(
            extension
          )
        ) {

          alert(
            "Allowed files: PDF, DOC, DOCX, JPG, JPEG, PNG"
          );

          return;

        }


        /* ===============================
           SUCCESS
        =============================== */

        alert(
          `Assignment "${file.name}" submitted successfully!`
        );


        /* ===============================
           BACK TO ASSIGNMENTS
        =============================== */

        if (
          typeof window.showStudentAssignments ===
          "function"
        ) {

          window.showStudentAssignments();

        }

      }
    );

  }


  /* =====================================
     LOGOUT
  ===================================== */

  const logoutBtn =
    document.querySelector(
      "#logoutBtn"
    );


  if (logoutBtn) {

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

}