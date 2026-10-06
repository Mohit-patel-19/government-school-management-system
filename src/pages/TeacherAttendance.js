/* =====================================================
   TEACHER ATTENDANCE
   FULL WORKING VERSION
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
   MAIN PAGE
===================================================== */

export function TeacherAttendance() {

  const today =
    new Date().toISOString().split("T")[0];

  return `
    <div class="dashboard">

      ${teacherSidebar("attendance")}

      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>📅 Attendance</h1>
            <p>Manage student attendance</p>
          </div>

          <div class="profile">

            <div class="profile-avatar">
              T
            </div>

            <div class="profile-info">
              <strong>Teacher Name</strong>
              <span>Mathematics Teacher</span>
            </div>

          </div>

        </header>


        <section class="dashboard-content">


          <!-- FILTER CARD -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>
                <h2>Mark Attendance</h2>
                <p>Select class and date</p>
              </div>

            </div>


            <div class="attendance-filters">

              <div class="attendance-field">

                <label>Class</label>

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


              <div class="attendance-field">

                <label>Date</label>

                <input
                  type="date"
                  id="attendanceDate"
                  value="${today}"
                />

              </div>


              <div class="attendance-field">

                <label>Subject</label>

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

          <div class="stats-grid">

            <div class="stat-card">

              <div class="stat-icon blue">
                👨‍🎓
              </div>

              <div>
                <span>Total Students</span>
                <h2 id="attendanceTotal">
                  ${students.length}
                </h2>
              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                ✅
              </div>

              <div>
                <span>Present</span>
                <h2 id="attendancePresent">
                  ${students.length}
                </h2>
              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                ❌
              </div>

              <div>
                <span>Absent</span>
                <h2 id="attendanceAbsent">
                  0
                </h2>
              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                📊
              </div>

              <div>
                <span>Attendance</span>
                <h2 id="attendancePercentage">
                  100%
                </h2>
              </div>

            </div>

          </div>


          <!-- STUDENT LIST -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>
                <h2>Student Attendance</h2>
                <p>
                  Mark students as Present or Absent
                </p>
              </div>


              <div class="attendance-header-buttons">

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


            <div id="attendanceStudentList">

              ${renderStudents()}

            </div>


            <!-- SAVE -->

            <div class="attendance-save-area">

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
   SIDEBAR
===================================================== */

function teacherSidebar(activePage) {

  return `
    <aside class="sidebar">

      <div class="sidebar-logo">

        <div class="sidebar-icon">
          🏫
        </div>

        <div>
          <h2>Govt. School</h2>
          <span>Teacher Portal</span>
        </div>

      </div>


      <nav class="sidebar-nav">

        <button
          type="button"
          class="nav-item ${activePage === "dashboard" ? "active" : ""}"
          data-page="dashboard"
        >
          📊 Dashboard
        </button>


        <button
          type="button"
          class="nav-item ${activePage === "classes" ? "active" : ""}"
          data-page="classes"
        >
          📚 My Classes
        </button>


        <button
          type="button"
          class="nav-item ${activePage === "students" ? "active" : ""}"
          data-page="students"
        >
          👨‍🎓 Students
        </button>


        <button
          type="button"
          class="nav-item ${activePage === "attendance" ? "active" : ""}"
          data-page="attendance"
        >
          📅 Attendance
        </button>


        <button
          type="button"
          class="nav-item"
          data-page="assignments"
        >
          📝 Assignments
        </button>


        <button
          type="button"
          class="nav-item"
          data-page="results"
        >
          🏆 Exams & Results
        </button>


        <button
          type="button"
          class="nav-item"
          data-page="material"
        >
          📖 Study Material
        </button>


        <button
          type="button"
          class="nav-item"
          data-page="notices"
        >
          📢 Notices
        </button>


        <button
          type="button"
          class="nav-item"
          data-page="messages"
        >
          💬 Messages
        </button>

      </nav>


      <div class="sidebar-bottom">

        <button
          type="button"
          class="nav-item"
          data-page="settings"
        >
          ⚙️ Settings
        </button>


        <button
          type="button"
          class="nav-item logout"
          data-page="logout"
        >
          🚪 Logout
        </button>

      </div>

    </aside>
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
        class="attendance-student"
        data-student-id="${student.id}"
      >

        <div class="attendance-student-info">

          <div class="student-number">
            ${student.roll}
          </div>

          <div>

            <strong>
              ${escapeHTML(student.name)}
            </strong>

            <span>
              Roll No. ${student.roll}
            </span>

          </div>

        </div>


        <div class="attendance-actions">

          <button
            type="button"
            class="attendance-btn present-btn ${
              status === "present" ? "selected" : ""
            }"
            data-attendance="present"
            data-student-id="${student.id}"
          >
            ✅ Present
          </button>


          <button
            type="button"
            class="attendance-btn absent-btn ${
              status === "absent" ? "selected" : ""
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
   SETUP
===================================================== */

export function setupTeacherAttendance() {

  const app =
    document.querySelector("#app");

  if (!app) {
    console.error(
      "TeacherAttendance: #app not found"
    );

    return;
  }


  app.onclick =
    handleAttendanceClick;

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

    students.forEach(student => {

      attendanceData[student.id] =
        "present";

    });

    refreshAttendancePage();

    return;
  }


  /* MARK ALL ABSENT */

  const allAbsent =
    event.target.closest(
      "#markAllAbsent"
    );


  if (allAbsent) {

    students.forEach(student => {

      attendanceData[student.id] =
        "absent";

    });

    refreshAttendancePage();

    return;
  }


  /* SAVE */

  const saveButton =
    event.target.closest(
      "#saveAttendanceBtn"
    );


  if (saveButton) {

    saveAttendance();

    return;
  }


  /* BACK */

  const backButton =
    event.target.closest(
      "#backAttendanceBtn"
    );


  if (backButton) {

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
      `.attendance-student[data-student-id="${id}"]`
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


  presentButton.classList.toggle(
    "selected",
    status === "present"
  );


  absentButton.classList.toggle(
    "selected",
    status === "absent"
  );

}


/* =====================================================
   SUMMARY
===================================================== */

function updateAttendanceSummary() {

  let present = 0;
  let absent = 0;


  students.forEach(student => {

    if (
      getStudentStatus(student.id)
      === "present"
    ) {

      present++;

    } else {

      absent++;

    }

  });


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


  students.forEach(student => {

    if (
      getStudentStatus(student.id)
      === "present"
    ) {

      present++;

    } else {

      absent++;

    }

  });


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
    typeof window.navigateTeacherPage
    === "function"
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