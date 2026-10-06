export function StudentStudyMaterial(
  studentName = "Student"
) {

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
            class="nav-item active"
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
              Study Material
            </h1>

            <p>
              Notes, videos and learning resources
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


          <!-- ================= PAGE TITLE ================= -->

          <div class="page-title">

            <h1>
              Learning Resources
            </h1>

            <p>
              Access your study material by subject
            </p>

          </div>


          <!-- ================= SUMMARY ================= -->

          <div class="stats-grid">


            <div class="stat-card">

              <div class="stat-icon blue">
                📚
              </div>

              <div>

                <span>
                  Total Materials
                </span>

                <h2>
                  24
                </h2>

              </div>

              <small>
                Resources
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                📄
              </div>

              <div>

                <span>
                  Notes
                </span>

                <h2>
                  15
                </h2>

              </div>

              <small>
                PDF Notes
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                🎥
              </div>

              <div>

                <span>
                  Videos
                </span>

                <h2>
                  6
                </h2>

              </div>

              <small>
                Lectures
              </small>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                📝
              </div>

              <div>

                <span>
                  Questions
                </span>

                <h2>
                  3
                </h2>

              </div>

              <small>
                Practice Sets
              </small>

            </div>

          </div>


          <!-- ================= SEARCH ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Find Study Material
                </h2>

                <p>
                  Search for notes, videos or questions
                </p>

              </div>

            </div>


            <div
              style="
                display:flex;
                gap:12px;
                flex-wrap:wrap;
                margin-top:10px;
              "
            >

              <input
                id="materialSearch"
                type="text"
                placeholder="Search study material..."
                style="
                  flex:1;
                  min-width:220px;
                  padding:12px 15px;
                  border:1px solid #ddd;
                  border-radius:10px;
                  outline:none;
                  font-size:14px;
                "
              />


              <select
                id="materialSubject"
                style="
                  padding:12px 15px;
                  border:1px solid #ddd;
                  border-radius:10px;
                  outline:none;
                  font-size:14px;
                  background:white;
                "
              >

                <option value="all">
                  All Subjects
                </option>

                <option value="mathematics">
                  Mathematics
                </option>

                <option value="science">
                  Science
                </option>

                <option value="computer">
                  Computer Science
                </option>

                <option value="english">
                  English
                </option>

                <option value="hindi">
                  Hindi
                </option>

                <option value="social">
                  Social Science
                </option>

              </select>

            </div>

          </div>


          <!-- ================= SUBJECT MATERIAL ================= -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>

                <h2>
                  Study Materials
                </h2>

                <p>
                  Latest learning resources
                </p>

              </div>

            </div>


            <div
              id="materialList"
              class="class-list"
            >


              <!-- MATHEMATICS -->

              <div
                class="class-item material-item"
                data-subject="mathematics"
                data-title="Mathematics Algebra Notes"
              >

                <div class="subject-icon">
                  📐
                </div>


                <div class="class-info">

                  <strong>
                    Mathematics - Algebra Notes
                  </strong>

                  <span>
                    Chapter 5 • PDF Notes
                  </span>

                </div>


                <div class="class-time">

                  <strong>
                    PDF
                  </strong>

                  <button
                    class="view-btn material-btn"
                    type="button"
                    data-material="Mathematics - Algebra Notes"
                  >
                    View
                  </button>

                </div>

              </div>


              <!-- SCIENCE -->

              <div
                class="class-item material-item"
                data-subject="science"
                data-title="Science Physics Notes"
              >

                <div class="subject-icon">
                  🔬
                </div>


                <div class="class-info">

                  <strong>
                    Science - Physics Notes
                  </strong>

                  <span>
                    Chapter 8 • PDF Notes
                  </span>

                </div>


                <div class="class-time">

                  <strong>
                    PDF
                  </strong>

                  <button
                    class="view-btn material-btn"
                    type="button"
                    data-material="Science - Physics Notes"
                  >
                    View
                  </button>

                </div>

              </div>


              <!-- COMPUTER -->

              <div
                class="class-item material-item"
                data-subject="computer"
                data-title="Computer Science Programming"
              >

                <div class="subject-icon">
                  💻
                </div>


                <div class="class-info">

                  <strong>
                    Computer Science - Programming
                  </strong>

                  <span>
                    JavaScript Basics • Video Lecture
                  </span>

                </div>


                <div class="class-time">

                  <strong>
                    VIDEO
                  </strong>

                  <button
                    class="view-btn material-btn"
                    type="button"
                    data-material="Computer Science - Programming"
                  >
                    View
                  </button>

                </div>

              </div>


              <!-- ENGLISH -->

              <div
                class="class-item material-item"
                data-subject="english"
                data-title="English Grammar Notes"
              >

                <div class="subject-icon">
                  📖
                </div>


                <div class="class-info">

                  <strong>
                    English - Grammar Notes
                  </strong>

                  <span>
                    Grammar • PDF Notes
                  </span>

                </div>


                <div class="class-time">

                  <strong>
                    PDF
                  </strong>

                  <button
                    class="view-btn material-btn"
                    type="button"
                    data-material="English - Grammar Notes"
                  >
                    View
                  </button>

                </div>

              </div>


              <!-- HINDI -->

              <div
                class="class-item material-item"
                data-subject="hindi"
                data-title="Hindi Literature Notes"
              >

                <div class="subject-icon">
                  🕉️
                </div>


                <div class="class-info">

                  <strong>
                    Hindi - Literature Notes
                  </strong>

                  <span>
                    Literature • PDF Notes
                  </span>

                </div>


                <div class="class-time">

                  <strong>
                    PDF
                  </strong>

                  <button
                    class="view-btn material-btn"
                    type="button"
                    data-material="Hindi - Literature Notes"
                  >
                    View
                  </button>

                </div>

              </div>


              <!-- SOCIAL SCIENCE -->

              <div
                class="class-item material-item"
                data-subject="social"
                data-title="Social Science Important Questions"
              >

                <div class="subject-icon">
                  🌍
                </div>


                <div class="class-info">

                  <strong>
                    Social Science - Important Questions
                  </strong>

                  <span>
                    Practice Set • Questions
                  </span>

                </div>


                <div class="class-time">

                  <strong>
                    PDF
                  </strong>

                  <button
                    class="view-btn material-btn"
                    type="button"
                    data-material="Social Science - Important Questions"
                  >
                    View
                  </button>

                </div>

              </div>


            </div>


            <!-- NO RESULT MESSAGE -->

            <div
              id="noMaterialMessage"
              style="
                display:none;
                text-align:center;
                padding:30px;
                color:#777;
              "
            >

              <div style="font-size:40px;">
                🔍
              </div>

              <h3>
                No material found
              </h3>

              <p>
                Try another subject or search keyword.
              </p>

            </div>

          </div>


          <!-- ================= CATEGORIES ================= -->

          <div class="dashboard-grid">


            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Notes & PDFs
                  </h2>

                  <p>
                    Downloadable study notes
                  </p>

                </div>

              </div>


              <div class="quick-actions">

                <button
                  type="button"
                  class="material-category"
                >
                  <span>📄</span>
                  Class Notes
                </button>


                <button
                  type="button"
                  class="material-category"
                >
                  <span>📕</span>
                  Revision Notes
                </button>


                <button
                  type="button"
                  class="material-category"
                >
                  <span>📝</span>
                  Important Questions
                </button>


                <button
                  type="button"
                  class="material-category"
                >
                  <span>📚</span>
                  Previous Papers
                </button>

              </div>

            </div>


            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Video Lectures
                  </h2>

                  <p>
                    Learn with video lessons
                  </p>

                </div>

              </div>


              <div class="quick-actions">

                <button
                  type="button"
                  class="material-category"
                >
                  <span>🎥</span>
                  Mathematics
                </button>


                <button
                  type="button"
                  class="material-category"
                >
                  <span>🎥</span>
                  Science
                </button>


                <button
                  type="button"
                  class="material-category"
                >
                  <span>🎥</span>
                  Computer
                </button>


                <button
                  type="button"
                  class="material-category"
                >
                  <span>🎥</span>
                  English
                </button>

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
   STUDENT STUDY MATERIAL NAVIGATION
========================================= */

export function setupStudentStudyMaterialNavigation(
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
    document.querySelector(
      "#backToDashboard"
    );


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


  /* ================= SEARCH ================= */

  const searchInput =
    document.querySelector(
      "#materialSearch"
    );


  const subjectSelect =
    document.querySelector(
      "#materialSubject"
    );


  const materialItems =
    document.querySelectorAll(
      ".material-item"
    );


  const noMaterialMessage =
    document.querySelector(
      "#noMaterialMessage"
    );


  function filterMaterials() {

    const searchValue =
      searchInput
        ? searchInput.value
            .toLowerCase()
            .trim()
        : "";


    const subjectValue =
      subjectSelect
        ? subjectSelect.value
        : "all";


    let visibleCount = 0;


    materialItems.forEach((item) => {

      const title =
        (
          item.dataset.title || ""
        ).toLowerCase();


      const subject =
        item.dataset.subject || "";


      const searchMatch =
        title.includes(searchValue);


      const subjectMatch =
        subjectValue === "all" ||
        subject === subjectValue;


      if (
        searchMatch &&
        subjectMatch
      ) {

        item.style.display = "flex";

        visibleCount++;

      } else {

        item.style.display = "none";

      }

    });


    if (noMaterialMessage) {

      noMaterialMessage.style.display =
        visibleCount === 0
          ? "block"
          : "none";

    }

  }


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      filterMaterials
    );

  }


  if (subjectSelect) {

    subjectSelect.addEventListener(
      "change",
      filterMaterials
    );

  }


  /* ================= MATERIAL BUTTONS ================= */

  const materialButtons =
    document.querySelectorAll(
      ".material-btn"
    );


  materialButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const material =
          button.dataset.material ||
          "Study Material";


        alert(
          `${material}\n\nMaterial preview/download feature will be connected with backend later.`
        );

      }
    );

  });


  /* ================= CATEGORY BUTTONS ================= */

  const categoryButtons =
    document.querySelectorAll(
      ".material-category"
    );


  categoryButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        alert(
          "This study material category will be connected with the school material library later."
        );

      }
    );

  });

}