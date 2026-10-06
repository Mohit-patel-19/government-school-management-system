/* =========================================
   PARENT DASHBOARD
========================================= */

export function ParentDashboard() {
  return `
    <div class="dashboard parent-dashboard">

      <!-- SIDEBAR -->
      <aside class="sidebar">

        <div class="sidebar-logo">

          <div class="sidebar-icon">
            🏫
          </div>

          <div>
            <h2>Govt. School</h2>
            <span>Parent Portal</span>
          </div>

        </div>


        <!-- MAIN NAVIGATION -->
        <nav class="sidebar-nav">

          <button
            class="nav-item active"
            data-page="dashboard"
            type="button"
          >
            <span>📊</span>
            Dashboard
          </button>


          <button
            class="nav-item"
            data-page="profile"
            type="button"
          >
            <span>👦</span>
            My Child
          </button>


          <button
            class="nav-item"
            data-page="attendance"
            type="button"
          >
            <span>📅</span>
            Attendance
          </button>


          <button
            class="nav-item"
            data-page="classes"
            type="button"
          >
            <span>📚</span>
            Classes
          </button>


          <button
            class="nav-item"
            data-page="assignments"
            type="button"
          >
            <span>📝</span>
            Assignments
          </button>


          <button
            class="nav-item"
            data-page="results"
            type="button"
          >
            <span>🏆</span>
            Results
          </button>


          <button
            class="nav-item"
            data-page="notices"
            type="button"
          >
            <span>📢</span>
            School Notices
          </button>


          <button
            class="nav-item"
            data-page="messages"
            type="button"
          >
            <span>💬</span>
            Teacher Messages
          </button>


          <button
            class="nav-item"
            data-page="fees"
            type="button"
          >
            <span>💳</span>
            Fees
          </button>


          <!-- DOCUMENTS -->
          <button
            class="nav-item"
            data-page="documents"
            type="button"
          >
            <span>📄</span>
            Documents
          </button>

        </nav>


        <!-- SIDEBAR BOTTOM -->
        <div class="sidebar-bottom">

          <button
            class="nav-item"
            data-page="settings"
            type="button"
          >
            <span>⚙️</span>
            Settings
          </button>


          <button
            class="nav-item logout"
            data-page="logout"
            type="button"
          >
            <span>🚪</span>
            Logout
          </button>

        </div>

      </aside>


      <!-- MAIN -->
      <main class="dashboard-main">

        <!-- HEADER -->
        <header class="dashboard-header">

          <div>

            <h1>
              Good Morning, Parent 👋
            </h1>

            <p>
              Stay updated with your child's school activities
            </p>

          </div>


          <div class="header-actions">

            <button
              class="notification-btn"
              id="parentNotificationBtn"
              type="button"
              title="Notifications"
            >
              🔔
              <span class="notification-dot"></span>
            </button>


            <div
              class="profile"
              data-page="profile"
              role="button"
              tabindex="0"
            >

              <div class="profile-avatar">
                P
              </div>


              <div class="profile-info">

                <strong>
                  Parent Name
                </strong>

                <span>
                  Parent Account
                </span>

              </div>

            </div>

          </div>

        </header>


        <!-- CONTENT -->
        <section class="dashboard-content">

          <!-- CHILD PROFILE -->
          <div class="dashboard-card child-profile-card">

            <div class="child-profile">

              <div class="child-avatar">
                A
              </div>


              <div class="child-info">

                <h2>
                  Student Name
                </h2>


                <p>
                  Class 10 • Section A • Roll No. 24
                </p>


                <span>
                  Academic Session 2026-27
                </span>

              </div>


              <button
                class="view-btn"
                data-page="profile"
                type="button"
              >
                View Profile
              </button>

            </div>

          </div>


          <!-- STATISTICS -->
          <div class="stats-grid">

            <!-- ATTENDANCE -->
            <div
              class="stat-card clickable-card"
              data-page="attendance"
              role="button"
              tabindex="0"
            >

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
                Good attendance
              </small>

            </div>


            <!-- RESULTS -->
            <div
              class="stat-card clickable-card"
              data-page="results"
              role="button"
              tabindex="0"
            >

              <div class="stat-icon green">
                🏆
              </div>


              <div>

                <span>
                  Average Score
                </span>


                <h2>
                  84%
                </h2>

              </div>


              <small class="positive">
                +5% improvement
              </small>

            </div>


            <!-- ASSIGNMENTS -->
            <div
              class="stat-card clickable-card"
              data-page="assignments"
              role="button"
              tabindex="0"
            >

              <div class="stat-icon orange">
                📝
              </div>


              <div>

                <span>
                  Assignments
                </span>


                <h2>
                  03
                </h2>

              </div>


              <small>
                Pending
              </small>

            </div>


            <!-- FEES -->
            <div
              class="stat-card clickable-card"
              data-page="fees"
              role="button"
              tabindex="0"
            >

              <div class="stat-icon purple">
                💳
              </div>


              <div>

                <span>
                  Fee Status
                </span>


                <h2>
                  Paid
                </h2>

              </div>


              <small class="positive">
                Up to date
              </small>

            </div>

          </div>


          <!-- MAIN GRID -->
          <div class="dashboard-grid">

            <!-- ATTENDANCE -->
            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Attendance Overview
                  </h2>


                  <p>
                    Monthly attendance summary
                  </p>

                </div>


                <button
                  class="view-btn"
                  data-page="attendance"
                  type="button"
                >
                  View Details
                </button>

              </div>


              <div class="notice-list">

                <div class="notice-item">

                  <div class="notice-icon">
                    📅
                  </div>


                  <div>

                    <strong>
                      August Attendance
                    </strong>


                    <p>
                      Present: 22 days • Absent: 2 days
                    </p>


                    <span>
                      92% attendance
                    </span>

                  </div>

                </div>


                <div class="notice-item">

                  <div class="notice-icon">
                    📈
                  </div>


                  <div>

                    <strong>
                      Attendance Trend
                    </strong>


                    <p>
                      Attendance has improved this month
                    </p>


                    <span class="positive">
                      +3% improvement
                    </span>

                  </div>

                </div>


                <div class="notice-item">

                  <div class="notice-icon">
                    ⚠️
                  </div>


                  <div>

                    <strong>
                      Attendance Reminder
                    </strong>


                    <p>
                      Please maintain regular attendance
                    </p>


                    <span>
                      School recommendation
                    </span>

                  </div>

                </div>

              </div>

            </div>


            <!-- SCHOOL NOTICES -->
            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    School Notices
                  </h2>


                  <p>
                    Latest announcements
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
                      Parent-Teacher Meeting
                    </strong>


                    <p>
                      Meeting scheduled for Saturday.
                    </p>


                    <span>
                      Today
                    </span>

                  </div>

                </div>


                <div class="notice-item">

                  <div class="notice-icon">
                    🏆
                  </div>


                  <div>

                    <strong>
                      Annual Sports Day
                    </strong>


                    <p>
                      Sports day will be held on 28 August.
                    </p>


                    <span>
                      Yesterday
                    </span>

                  </div>

                </div>


                <div class="notice-item">

                  <div class="notice-icon">
                    📚
                  </div>


                  <div>

                    <strong>
                      Unit Test Schedule
                    </strong>


                    <p>
                      New test schedule has been published.
                    </p>


                    <span>
                      2 days ago
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          <!-- BOTTOM GRID -->
          <div class="dashboard-grid">

            <!-- ASSIGNMENTS -->
            <div class="dashboard-card">

              <div class="card-header">

                <div>

                  <h2>
                    Recent Assignments
                  </h2>


                  <p>
                    Your child's assignments
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
                      Mathematics Exercise
                    </strong>


                    <span>
                      Chapter 5 • Due tomorrow
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
                      Chapter 3 • Submitted
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
                      Writing • Due Friday
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
                    Parent services
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
                  <span>🏆</span>
                  View Results
                </button>


                <button
                  data-page="fees"
                  type="button"
                >
                  <span>💳</span>
                  Pay Fees
                </button>


                <button
                  data-page="documents"
                  type="button"
                >
                  <span>📄</span>
                  Documents
                </button>


                <button
                  data-page="messages"
                  type="button"
                >
                  <span>💬</span>
                  Contact Teacher
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
   PARENT NAVIGATION SETUP
========================================= */

export function setupParentNavigation() {

  window.navigateParentPage =
    navigateParentPage;


  const dashboard =
    document.querySelector(
      ".parent-dashboard"
    );


  if (!dashboard) {
    return;
  }


  if (
    dashboard.dataset.navigationReady ===
    "true"
  ) {
    return;
  }


  dashboard.dataset.navigationReady =
    "true";


  dashboard.addEventListener(
    "click",
    handleParentNavigation
  );


  dashboard.addEventListener(
    "keydown",
    handleParentKeyboardNavigation
  );


  const notificationBtn =
    dashboard.querySelector(
      "#parentNotificationBtn"
    );


  if (notificationBtn) {

    notificationBtn.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

        alert(
          "You have 3 new notifications."
        );

      }
    );

  }

}


/* =========================================
   CLICK HANDLER
========================================= */

function handleParentNavigation(event) {

  const element =
    event.target.closest(
      "[data-page]"
    );


  if (!element) {
    return;
  }


  const dashboard =
    document.querySelector(
      ".parent-dashboard"
    );


  if (
    !dashboard ||
    !dashboard.contains(element)
  ) {
    return;
  }


  const page =
    element.dataset.page;


  if (!page) {
    return;
  }


  navigateParentPage(page);

}


/* =========================================
   KEYBOARD NAVIGATION
========================================= */

function handleParentKeyboardNavigation(event) {

  if (
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }


  const element =
    event.target.closest(
      "[data-page]"
    );


  if (!element) {
    return;
  }


  if (
    element.tagName !== "DIV" &&
    element.tagName !== "ARTICLE"
  ) {
    return;
  }


  event.preventDefault();


  navigateParentPage(
    element.dataset.page
  );

}


/* =========================================
   NAVIGATE PAGE
========================================= */

export async function navigateParentPage(page) {

  if (!page) {
    return;
  }


  /* =====================================
     DASHBOARD
  ===================================== */

  if (page === "dashboard") {

    showParentDashboard();

    return;
  }


  /* =====================================
     LOGOUT
  ===================================== */

  if (page === "logout") {

    handleParentLogout();

    return;
  }


  /* =====================================
     MY CHILD / PROFILE
  ===================================== */

  if (page === "profile") {

    try {

      const module =
        await import(
          "./ParentProfile.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentProfile();


      if (
        typeof module.setupParentProfileNavigation ===
        "function"
      ) {

        module.setupParentProfileNavigation();

      }

    } catch (error) {

      console.error(
        "ParentProfile loading error:",
        error
      );

      alert(
        "Unable to open My Child page."
      );

    }

    return;
  }


  /* =====================================
     ATTENDANCE
  ===================================== */

  if (page === "attendance") {

    try {

      const module =
        await import(
          "./ParentAttendance.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentAttendance();


      if (
        typeof module.setupParentAttendanceNavigation ===
        "function"
      ) {

        module.setupParentAttendanceNavigation();

      }

    } catch (error) {

      console.error(
        "ParentAttendance loading error:",
        error
      );

      alert(
        "Unable to open Attendance page."
      );

    }

    return;
  }


  /* =====================================
     CLASSES
  ===================================== */

  if (page === "classes") {

    try {

      const module =
        await import(
          "./ParentClasses.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentClasses();


      if (
        typeof module.setupParentClassesNavigation ===
        "function"
      ) {

        module.setupParentClassesNavigation();

      }

    } catch (error) {

      console.error(
        "ParentClasses loading error:",
        error
      );

      alert(
        "Unable to open Classes page."
      );

    }

    return;
  }


  /* =====================================
     ASSIGNMENTS
  ===================================== */

  if (page === "assignments") {

    try {

      const module =
        await import(
          "./ParentAssignments.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentAssignments();


      if (
        typeof module.setupParentAssignmentsNavigation ===
        "function"
      ) {

        module.setupParentAssignmentsNavigation();

      }

    } catch (error) {

      console.error(
        "ParentAssignments loading error:",
        error
      );

      alert(
        "Unable to open Assignments page."
      );

    }

    return;
  }


  /* =====================================
     RESULTS
  ===================================== */

  if (page === "results") {

    try {

      const module =
        await import(
          "./ParentResults.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentResults(
          "Student Name"
        );


      if (
        typeof module.setupParentResults ===
        "function"
      ) {

        module.setupParentResults();

      }

    } catch (error) {

      console.error(
        "ParentResults loading error:",
        error
      );

      alert(
        "Unable to open Results page."
      );

    }

    return;
  }


  /* =====================================
     SCHOOL NOTICES
  ===================================== */

  if (page === "notices") {

    try {

      const module =
        await import(
          "./ParentNotices.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentNotices(
          "Student Name"
        );


      if (
        typeof module.setupParentNotices ===
        "function"
      ) {

        module.setupParentNotices();

      }

    } catch (error) {

      console.error(
        "ParentNotices loading error:",
        error
      );

      alert(
        "Unable to open School Notices page."
      );

    }

    return;
  }


  /* =====================================
     TEACHER MESSAGES
  ===================================== */

  if (page === "messages") {

    try {

      const module =
        await import(
          "./ParentMessages.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentMessages(
          "Student Name"
        );


      if (
        typeof module.setupParentMessages ===
        "function"
      ) {

        module.setupParentMessages();

      }

    } catch (error) {

      console.error(
        "ParentMessages loading error:",
        error
      );

      alert(
        "Unable to open Teacher Messages page."
      );

    }

    return;
  }


  /* =====================================
     FEES
  ===================================== */

  if (page === "fees") {

    try {

      const module =
        await import(
          "./ParentFees.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentFees(
          "Student Name"
        );


      if (
        typeof module.setupParentFees ===
        "function"
      ) {

        module.setupParentFees();

      }

    } catch (error) {

      console.error(
        "ParentFees loading error:",
        error
      );

      alert(
        "Unable to open Fees page."
      );

    }

    return;
  }


  /* =====================================
     DOCUMENTS
  ===================================== */

  if (page === "documents") {

    try {

      const module =
        await import(
          "./ParentDocuments.js"
        );


      const app =
        document.querySelector("#app");


      if (!app) {
        return;
      }


      app.innerHTML =
        module.ParentDocuments(
          "Student Name"
        );


      if (
        typeof module.setupParentDocuments ===
        "function"
      ) {

        module.setupParentDocuments();

      }

    } catch (error) {

      console.error(
        "ParentDocuments loading error:",
        error
      );

      alert(
        "Unable to open Documents page."
      );

    }

    return;
  }


  /* =====================================
     OTHER PARENT MODULES
  ===================================== */

  showParentPage(page);

}


/* =========================================
   SHOW DASHBOARD
========================================= */

function showParentDashboard() {

  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML =
    ParentDashboard();


  setupParentNavigation();

}


/* =========================================
   OTHER PARENT PAGES
========================================= */

function showParentPage(page) {

  const dashboard =
    document.querySelector(
      ".parent-dashboard"
    );


  if (!dashboard) {
    return;
  }


  const main =
    dashboard.querySelector(
      ".dashboard-main"
    );


  if (!main) {
    return;
  }


  setActiveParentNavigation(page);


  main.innerHTML = `

    <section class="dashboard-content">

      <div class="dashboard-card">

        <div
          class="card-header"
          style="
            margin-bottom:30px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:20px;
          "
        >

          <div>

            <h2>
              ${getPageIcon(page)}
              ${getPageTitle(page)}
            </h2>


            <p>
              Parent Portal
            </p>

          </div>


          <button
            class="view-btn"
            data-page="dashboard"
            type="button"
          >
            ← Back to Dashboard
          </button>

        </div>


        <div
          style="
            text-align:center;
            padding:50px 20px;
          "
        >

          <div
            style="
              font-size:60px;
              margin-bottom:20px;
            "
          >
            ${getPageIcon(page)}
          </div>


          <h2>
            ${getPageTitle(page)}
          </h2>


          <p
            style="
              margin-top:10px;
              color:#6b7280;
            "
          >
            ${getPageTitle(page)} section is ready
            for parent portal integration.
          </p>


          <button
            class="view-btn"
            data-page="dashboard"
            type="button"
            style="margin-top:25px;"
          >
            🏠 Back to Dashboard
          </button>

        </div>

      </div>

    </section>

  `;

}


/* =========================================
   ACTIVE SIDEBAR
========================================= */

function setActiveParentNavigation(page) {

  const items =
    document.querySelectorAll(
      ".parent-dashboard .sidebar .nav-item[data-page]"
    );


  items.forEach((item) => {

    item.classList.remove(
      "active"
    );


    if (
      item.dataset.page === page
    ) {

      item.classList.add(
        "active"
      );

    }

  });

}


/* =========================================
   PAGE TITLES
========================================= */

function getPageTitle(page) {

  const titles = {

    profile: "My Child",

    attendance: "Attendance",

    classes: "Classes",

    assignments: "Assignments",

    results: "Results",

    notices: "School Notices",

    messages: "Teacher Messages",

    fees: "Fees",

    documents: "Documents",

    settings: "Settings"

  };


  return (
    titles[page] ||
    "Parent Portal"
  );

}


/* =========================================
   PAGE ICONS
========================================= */

function getPageIcon(page) {

  const icons = {

    profile: "👦",

    attendance: "📅",

    classes: "📚",

    assignments: "📝",

    results: "🏆",

    notices: "📢",

    messages: "💬",

    fees: "💳",

    documents: "📄",

    settings: "⚙️"

  };


  return (
    icons[page] ||
    "📄"
  );

}


/* =========================================
   LOGOUT
========================================= */

function handleParentLogout() {

  const confirmed =
    confirm(
      "Are you sure you want to logout?"
    );


  if (!confirmed) {
    return;
  }


  localStorage.removeItem(
    "parentLoggedIn"
  );


  localStorage.removeItem(
    "parentName"
  );


  localStorage.removeItem(
    "parentNae"
  );


  localStorage.removeItem(
    "childName"
  );


  window.location.href = "/";

}