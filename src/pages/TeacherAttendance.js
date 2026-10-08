/* =====================================================
   TEACHER ATTENDANCE
   FULL RESPONSIVE WORKING VERSION
===================================================== */

let attendanceData = {};

const students = [
  {
    id: 1,
    roll: 1,
    name: "Aarav Sharma",
    father: "Rajesh Sharma"
  },
  {
    id: 2,
    roll: 2,
    name: "Vivek Kumar",
    father: "Ramesh Kumar"
  },
  {
    id: 3,
    roll: 3,
    name: "Priya Meena",
    father: "Mohan Meena"
  },
  {
    id: 4,
    roll: 4,
    name: "Neha Singh",
    father: "Mahendra Singh"
  },
  {
    id: 5,
    roll: 5,
    name: "Rohit Patel",
    father: "Suresh Patel"
  }
];


/* =====================================================
   RESPONSIVE CSS
===================================================== */

function loadTeacherAttendanceCSS() {

  if (document.getElementById("teacher-attendance-css")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "teacher-attendance-css";

  style.textContent = `

    html,
    body {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden !important;
    }

    #app {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      overflow-x: hidden !important;
    }

    .teacher-attendance-page {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      overflow-x: hidden;
    }

    .teacher-attendance-content {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      padding: 28px;
    }

    .teacher-attendance-card {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      background: #fff;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
    }

    .teacher-attendance-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      margin-bottom: 22px;
    }

    .teacher-attendance-card-header h2 {
      margin: 0 0 5px;
      font-size: 21px;
    }

    .teacher-attendance-card-header p {
      margin: 0;
      color: #64748b;
      font-size: 14px;
    }

    .teacher-attendance-filters {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .teacher-attendance-field {
      min-width: 0;
    }

    .teacher-attendance-field label {
      display: block;
      font-weight: 600;
      color: #334155;
      margin-bottom: 7px;
    }

    .teacher-attendance-field input,
    .teacher-attendance-field select {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      padding: 12px 13px;
      border: 1px solid #dbe2ea;
      border-radius: 9px;
      background: #fff;
      font-size: 14px;
      outline: none;
    }

    .teacher-attendance-field input:focus,
    .teacher-attendance-field select:focus {
      border-color: #2563eb;
    }

    .teacher-attendance-stats {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
      margin-bottom: 24px;
    }

    .teacher-attendance-stat {
      min-width: 0;
      box-sizing: border-box;
      background: #fff;
      border-radius: 14px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
    }

    .teacher-attendance-stat-icon {
      width: 50px;
      height: 50px;
      min-width: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;
      background: #eef2ff;
    }

    .teacher-attendance-stat span {
      display: block;
      color: #64748b;
      font-size: 14px;
      margin-bottom: 5px;
    }

    .teacher-attendance-stat h3 {
      margin: 0;
      font-size: 25px;
    }

    .teacher-attendance-header-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .teacher-attendance-student-list {
      width: 100%;
      min-width: 0;
    }

    .teacher-attendance-student {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      padding: 16px;
      margin-bottom: 12px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #fff;
    }

    .teacher-attendance-student:last-child {
      margin-bottom: 0;
    }

    .teacher-attendance-student-info {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .teacher-attendance-student-number {
      width: 42px;
      height: 42px;
      min-width: 42px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eff6ff;
      color: #1d4ed8;
      font-weight: 700;
    }

    .teacher-attendance-student-details {
      min-width: 0;
    }

    .teacher-attendance-student-details strong {
      display: block;
      font-size: 15px;
      margin-bottom: 4px;
      overflow-wrap: anywhere;
    }

    .teacher-attendance-student-details span {
      display: block;
      color: #64748b;
      font-size: 13px;
    }

    .teacher-attendance-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .teacher-attendance-btn {
      border: 1px solid #dbe2ea;
      background: #fff;
      border-radius: 8px;
      padding: 9px 13px;
      cursor: pointer;
      font-size: 13px;
      white-space: nowrap;
      transition: 0.2s;
    }

    .teacher-attendance-btn.present-btn.selected {
      background: #dcfce7;
      border-color: #22c55e;
      color: #166534;
      font-weight: 600;
    }

    .teacher-attendance-btn.absent-btn.selected {
      background: #fee2e2;
      border-color: #ef4444;
      color: #991b1b;
      font-weight: 600;
    }

    .teacher-attendance-save-area {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 22px;
    }

    .teacher-attendance-save-area button {
      min-width: 160px;
    }

    .teacher-mobile-menu {
      display: none;
    }

    @media (max-width: 1100px) {

      .teacher-attendance-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .teacher-attendance-filters {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

    }

    @media (max-width: 768px) {

      .teacher-attendance-content {
        padding: 18px 14px 30px;
      }

      .teacher-attendance-card {
        padding: 17px;
        border-radius: 13px;
      }

      .teacher-attendance-filters {
        grid-template-columns: 1fr;
      }

      .teacher-attendance-stats {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .teacher-attendance-card-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .teacher-attendance-header-buttons {
        width: 100%;
        justify-content: flex-start;
      }

      .teacher-attendance-header-buttons button {
        flex: 1;
        min-width: 150px;
      }

      .teacher-attendance-student {
        flex-direction: column;
        align-items: stretch;
        gap: 13px;
      }

      .teacher-attendance-student-info {
        width: 100%;
      }

      .teacher-attendance-actions {
        width: 100%;
        justify-content: stretch;
      }

      .teacher-attendance-btn {
        flex: 1;
      }

      .teacher-attendance-save-area {
        flex-direction: column;
        align-items: stretch;
      }

      .teacher-attendance-save-area button {
        width: 100%;
        min-width: 0;
      }

      .teacher-mobile-menu {
        display: flex !important;
      }

    }

    @media (max-width: 480px) {

      .teacher-attendance-content {
        padding: 15px 10px 25px;
      }

      .teacher-attendance-card {
        padding: 14px;
      }

      .teacher-attendance-header-buttons {
        flex-direction: column;
      }

      .teacher-attendance-header-buttons button {
        width: 100%;
        min-width: 0;
      }

      .teacher-attendance-actions {
        display: grid;
        grid-template-columns: 1fr;
      }

      .teacher-attendance-btn {
        width: 100%;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =====================================================
   SIDEBAR
===================================================== */

function teacherSidebar(activePage) {

  return `

    <aside class="teacher-sidebar">

      <button
        type="button"
        class="teacher-mobile-close"
        id="teacherAttendanceMobileClose"
        aria-label="Close menu"
      >
        ✕
      </button>

      <div class="teacher-sidebar-logo">

        <div class="teacher-sidebar-icon">
          🏫
        </div>

        <div>
          <h2>Govt. School</h2>
          <span>Teacher Portal</span>
        </div>

      </div>


      <nav class="teacher-sidebar-nav">

        <button
          type="button"
          class="teacher-nav-item ${activePage === "dashboard" ? "active" : ""}"
          data-page="dashboard"
        >
          📊 Dashboard
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "classes" ? "active" : ""}"
          data-page="classes"
        >
          📚 My Classes
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "students" ? "active" : ""}"
          data-page="students"
        >
          👨‍🎓 Students
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "attendance" ? "active" : ""}"
          data-page="attendance"
        >
          📅 Attendance
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "assignments" ? "active" : ""}"
          data-page="assignments"
        >
          📝 Assignments
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "results" ? "active" : ""}"
          data-page="results"
        >
          🏆 Exams & Results
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "material" ? "active" : ""}"
          data-page="material"
        >
          📖 Study Material
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "notices" ? "active" : ""}"
          data-page="notices"
        >
          📢 Notices
        </button>

        <button
          type="button"
          class="teacher-nav-item ${activePage === "messages" ? "active" : ""}"
          data-page="messages"
        >
          💬 Messages
        </button>

      </nav>


      <div class="teacher-sidebar-bottom">

        <button
          type="button"
          class="teacher-nav-item ${activePage === "settings" ? "active" : ""}"
          data-page="settings"
        >
          ⚙️ Settings
        </button>

        <button
          type="button"
          class="teacher-nav-item logout"
          data-page="logout"
        >
          🚪 Logout
        </button>

      </div>

    </aside>


    <div
      class="teacher-sidebar-overlay"
      id="teacherAttendanceSidebarOverlay"
    ></div>

  `;
}


/* =====================================================
   HEADER
===================================================== */

function teacherAttendanceHeader() {

  return `

    <header class="teacher-dashboard-header">

      <div class="teacher-header-left">

        <button
          type="button"
          class="teacher-mobile-menu"
          id="teacherAttendanceMobileMenu"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div>

          <h1>
            📅 Attendance
          </h1>

          <p>
            Manage student attendance
          </p>

        </div>

      </div>


      <div class="teacher-profile">

        <div class="teacher-profile-avatar">
          T
        </div>

        <div class="teacher-profile-info">

          <strong>
            Teacher Name
          </strong>

          <span>
            Mathematics Teacher
          </span>

        </div>

      </div>

    </header>

  `;
}


/* =====================================================
   MAIN PAGE
===================================================== */

export function TeacherAttendance() {

  loadTeacherAttendanceCSS();

  const today =
    new Date().toISOString().split("T")[0];

  return `

    <div class="teacher-dashboard teacher-attendance-page">

      ${teacherSidebar("attendance")}

      <main class="teacher-dashboard-main">

        ${teacherAttendanceHeader()}

        <section class="teacher-attendance-content">


          <!-- FILTER CARD -->

          <div class="teacher-attendance-card">

            <div class="teacher-attendance-card-header">

              <div>

                <h2>
                  Mark Attendance
                </h2>

                <p>
                  Select class and date
                </p>

              </div>

            </div>


            <div class="teacher-attendance-filters">

              <div class="teacher-attendance-field">

                <label for="attendanceClass">
                  Class
                </label>

                <select id="attendanceClass">

                  <option value="Class 10 - Section B">
                    Class 10 - Section B
                  </option>

                  <option value="Class 10 - Section A">
                    Class 10 - Section A
                  </option>

                  <option value="Class 9 - Section B">
                    Class 9 - Section B
                  </option>

                </select>

              </div>


              <div class="teacher-attendance-field">

                <label for="attendanceDate">
                  Date
                </label>

                <input
                  type="date"
                  id="attendanceDate"
                  value="${today}"
                />

              </div>


              <div class="teacher-attendance-field">

                <label for="attendanceSubject">
                  Subject
                </label>

                <input
                  type="text"
                  id="attendanceSubject"
                  value="Mathematics"
                  readonly
                />

              </div>

            </div>

          </div>


          <!-- SUMMARY -->

          <div class="teacher-attendance-stats">

            <div class="teacher-attendance-stat">

              <div class="teacher-attendance-stat-icon">
                👨‍🎓
              </div>

              <div>

                <span>
                  Total Students
                </span>

                <h3 id="attendanceTotal">
                  ${students.length}
                </h3>

              </div>

            </div>


            <div class="teacher-attendance-stat">

              <div class="teacher-attendance-stat-icon">
                ✅
              </div>

              <div>

                <span>
                  Present
                </span>

                <h3 id="attendancePresent">
                  ${students.length}
                </h3>

              </div>

            </div>


            <div class="teacher-attendance-stat">

              <div class="teacher-attendance-stat-icon">
                ❌
              </div>

              <div>

                <span>
                  Absent
                </span>

                <h3 id="attendanceAbsent">
                  0
                </h3>

              </div>

            </div>


            <div class="teacher-attendance-stat">

              <div class="teacher-attendance-stat-icon">
                📊
              </div>

              <div>

                <span>
                  Attendance
                </span>

                <h3 id="attendancePercentage">
                  100%
                </h3>

              </div>

            </div>

          </div>


          <!-- STUDENT LIST -->

          <div class="teacher-attendance-card">

            <div class="teacher-attendance-card-header">

              <div>

                <h2>
                  Student Attendance
                </h2>

                <p>
                  Mark students as Present or Absent
                </p>

              </div>


              <div class="teacher-attendance-header-buttons">

                <button
                  type="button"
                  class="view-btn"
                  id="markAllPresent"
                >
                  ✅ Mark All Present
                </button>

                <button
                  type="button"
                  class="view-btn"
                  id="markAllAbsent"
                >
                  ❌ Mark All Absent
                </button>

              </div>

            </div>


            <div
              id="attendanceStudentList"
              class="teacher-attendance-student-list"
            >

              ${renderStudents()}

            </div>


            <div class="teacher-attendance-save-area">

              <button
                type="button"
                class="login-btn"
                id="saveAttendanceBtn"
              >
                💾 Save Attendance
              </button>

              <button
                type="button"
                class="view-btn"
                id="backAttendanceBtn"
              >
                ← Back to Dashboard
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>

  `;
}


/* =====================================================
   STUDENT LIST
===================================================== */

function renderStudents() {

  return students.map(student => {

    const status =
      getStudentStatus(student.id);

    return `

      <div
        class="teacher-attendance-student"
        data-student-id="${student.id}"
      >

        <div class="teacher-attendance-student-info">

          <div class="teacher-attendance-student-number">
            ${student.roll}
          </div>

          <div class="teacher-attendance-student-details">

            <strong>
              ${escapeHTML(student.name)}
            </strong>

            <span>
              Roll No. ${student.roll}
            </span>

          </div>

        </div>


        <div class="teacher-attendance-actions">

          <button
            type="button"
            class="teacher-attendance-btn present-btn ${
              status === "present"
                ? "selected"
                : ""
            }"
            data-attendance="present"
            data-student-id="${student.id}"
          >
            ✅ Present
          </button>


          <button
            type="button"
            class="teacher-attendance-btn absent-btn ${
              status === "absent"
                ? "selected"
                : ""
            }"
            data-attendance="absent"
            data-student-id="${student.id}"
          >
            ❌ Absent
          </button>

        </div>

      </div>

    `;

  }).join("");

}


/* =====================================================
   DEFAULT STATUS
===================================================== */

function getStudentStatus(id) {

  if (attendanceData[id]) {
    return attendanceData[id];
  }

  return "present";
}


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

function setupAttendanceMobileMenu() {

  const sidebar =
    document.querySelector(
      ".teacher-sidebar"
    );

  const overlay =
    document.querySelector(
      "#teacherAttendanceSidebarOverlay"
    );

  const menuButton =
    document.querySelector(
      "#teacherAttendanceMobileMenu"
    );

  const closeButton =
    document.querySelector(
      "#teacherAttendanceMobileClose"
    );


  if (!sidebar) {
    return;
  }


  function openMenu() {

    sidebar.classList.add(
      "teacher-mobile-open"
    );

    if (overlay) {

      overlay.classList.add(
        "teacher-overlay-active"
      );

    }

    document.body.classList.add(
      "teacher-menu-open"
    );

  }


  function closeMenu() {

    sidebar.classList.remove(
      "teacher-mobile-open"
    );

    if (overlay) {

      overlay.classList.remove(
        "teacher-overlay-active"
      );

    }

    document.body.classList.remove(
      "teacher-menu-open"
    );

  }


  /* IMPORTANT:
     Mobile sidebar closed when page loads */

  closeMenu();


  if (menuButton) {

    menuButton.onclick = (event) => {

      event.preventDefault();
      event.stopPropagation();

      openMenu();

    };

  }


  if (closeButton) {

    closeButton.onclick = (event) => {

      event.preventDefault();
      event.stopPropagation();

      closeMenu();

    };

  }


  if (overlay) {

    overlay.onclick = () => {

      closeMenu();

    };

  }

}


/* =====================================================
   NAVIGATION
===================================================== */

function setupAttendanceNavigation() {

  const app =
    document.querySelector("#app");

  if (!app) {
    return;
  }


  app.querySelectorAll(
    "[data-page]"
  ).forEach(
    (button) => {

      button.onclick = (event) => {

        event.preventDefault();

        const page =
          button.dataset.page;


        if (
          typeof window.navigateTeacherPage ===
          "function"
        ) {

          window.navigateTeacherPage(
            page
          );

        }

      };

    }
  );

}


/* =====================================================
   SETUP
===================================================== */

export function setupTeacherAttendance() {

  loadTeacherAttendanceCSS();

  const app =
    document.querySelector("#app");


  if (!app) {

    console.error(
      "TeacherAttendance: #app not found"
    );

    return;

  }


  setupAttendanceMobileMenu();

  setupAttendanceNavigation();


  /*
    Do NOT use:

    app.onclick = handleAttendanceClick

    because that can overwrite the main
    teacher navigation handler.
  */

  app.addEventListener(
    "click",
    handleAttendanceClick
  );

}


/* =====================================================
   CLICK HANDLER
===================================================== */

function handleAttendanceClick(event) {

  /* PRESENT / ABSENT */

  const attendanceButton =
    event.target.closest(
      "[data-attendance]"
    );


  if (attendanceButton) {

    event.preventDefault();

    const id =
      Number(
        attendanceButton.dataset.studentId
      );


    const status =
      attendanceButton.dataset.attendance;


    attendanceData[id] =
      status;


    updateStudentRow(id);

    updateAttendanceSummary();

    return;

  }


  /* MARK ALL PRESENT */

  const allPresent =
    event.target.closest(
      "#markAllPresent"
    );


  if (allPresent) {

    event.preventDefault();

    students.forEach(
      student => {

        attendanceData[
          student.id
        ] = "present";

      }
    );


    refreshAttendancePage();

    return;

  }


  /* MARK ALL ABSENT */

  const allAbsent =
    event.target.closest(
      "#markAllAbsent"
    );


  if (allAbsent) {

    event.preventDefault();

    students.forEach(
      student => {

        attendanceData[
          student.id
        ] = "absent";

      }
    );


    refreshAttendancePage();

    return;

  }


  /* SAVE */

  const saveButton =
    event.target.closest(
      "#saveAttendanceBtn"
    );


  if (saveButton) {

    event.preventDefault();

    saveAttendance();

    return;

  }


  /* BACK */

  const backButton =
    event.target.closest(
      "#backAttendanceBtn"
    );


  if (backButton) {

    event.preventDefault();

    goToDashboard();

    return;

  }

}


/* =====================================================
   UPDATE SINGLE STUDENT
===================================================== */

function updateStudentRow(id) {

  const row =
    document.querySelector(
      `.teacher-attendance-student[data-student-id="${id}"]`
    );


  if (!row) {
    return;
  }


  const status =
    getStudentStatus(id);


  const presentButton =
    row.querySelector(
      '[data-attendance="present"]'
    );


  const absentButton =
    row.querySelector(
      '[data-attendance="absent"]'
    );


  if (presentButton) {

    presentButton.classList.toggle(
      "selected",
      status === "present"
    );

  }


  if (absentButton) {

    absentButton.classList.toggle(
      "selected",
      status === "absent"
    );

  }

}


/* =====================================================
   SUMMARY
===================================================== */

function updateAttendanceSummary() {

  let present = 0;
  let absent = 0;


  students.forEach(
    student => {

      if (
        getStudentStatus(student.id)
        === "present"
      ) {

        present++;

      } else {

        absent++;

      }

    }
  );


  const total =
    students.length;


  const percentage =
    total === 0
      ? 0
      : Math.round(
          (present / total) * 100
        );


  const presentElement =
    document.querySelector(
      "#attendancePresent"
    );


  const absentElement =
    document.querySelector(
      "#attendanceAbsent"
    );


  const percentageElement =
    document.querySelector(
      "#attendancePercentage"
    );


  if (presentElement) {

    presentElement.textContent =
      present;

  }


  if (absentElement) {

    absentElement.textContent =
      absent;

  }


  if (percentageElement) {

    percentageElement.textContent =
      `${percentage}%`;

  }

}


/* =====================================================
   REFRESH
===================================================== */

function refreshAttendancePage() {

  const list =
    document.querySelector(
      "#attendanceStudentList"
    );


  if (!list) {
    return;
  }


  list.innerHTML =
    renderStudents();


  updateAttendanceSummary();

}


/* =====================================================
   SAVE
===================================================== */

function saveAttendance() {

  const date =
    document.querySelector(
      "#attendanceDate"
    )?.value;


  const selectedClass =
    document.querySelector(
      "#attendanceClass"
    )?.value;


  if (!date) {

    alert(
      "Please select attendance date."
    );

    return;

  }


  let present = 0;
  let absent = 0;


  students.forEach(
    student => {

      if (
        getStudentStatus(student.id)
        === "present"
      ) {

        present++;

      } else {

        absent++;

      }

    }
  );


  const total =
    students.length;


  const percentage =
    total === 0
      ? 0
      : Math.round(
          (present / total) * 100
        );


  alert(
    `Attendance Saved Successfully!\n\n` +
    `Class: ${selectedClass}\n` +
    `Date: ${date}\n\n` +
    `Present: ${present}\n` +
    `Absent: ${absent}\n` +
    `Attendance: ${percentage}%`
  );

}


/* =====================================================
   DASHBOARD
===================================================== */

function goToDashboard() {

  if (
    typeof window.navigateTeacherPage ===
    "function"
  ) {

    window.navigateTeacherPage(
      "dashboard"
    );

  }

}


/* =====================================================
   SAFE HTML
===================================================== */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}