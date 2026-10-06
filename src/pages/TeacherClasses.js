/* =====================================================
   TEACHER CLASSES
   FULL WORKING VERSION
===================================================== */

let classes = [
  {
    id: 1,
    className: "Class 10",
    section: "B",
    subject: "Mathematics",
    students: 38,
    attendance: "93%",
    result: "80%",
    room: "Room 102",
    time: "11:00 AM - 11:45 AM"
  }
];


/* =====================================================
   MAIN CLASS PAGE
===================================================== */

export function TeacherClasses() {

  return `
    <div class="dashboard">

      <!-- SIDEBAR -->
      ${teacherSidebar("classes")}

      <!-- MAIN -->
      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>My Classes 📚</h1>
            <p>Manage your assigned classes</p>
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

          <!-- STATS -->
          <div class="stats-grid">

            <div class="stat-card">

              <div class="stat-icon blue">
                📚
              </div>

              <div>
                <span>Total Classes</span>
                <h2 id="totalClassesCount">
                  ${classes.length}
                </h2>
              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                👨‍🎓
              </div>

              <div>
                <span>Total Students</span>
                <h2 id="totalStudentsCount">
                  ${getTotalStudents()}
                </h2>
              </div>

            </div>

          </div>


          <!-- CLASS CARD -->
          <div class="dashboard-card">

            <div class="card-header">

              <div>
                <h2>My Classes</h2>
                <p>Your current teaching classes</p>
              </div>

              <button
                type="button"
                class="view-btn"
                id="addTeacherClassBtn"
              >
                + Add Class
              </button>

            </div>


            <div id="teacherClassList">
              ${renderClasses()}
            </div>

          </div>


          <div style="margin-top:20px;">

            <button
              type="button"
              class="login-btn"
              id="backTeacherDashboardBtn"
              style="max-width:220px;"
            >
              ← Back to Dashboard
            </button>

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
          class="nav-item"
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
   TOTAL STUDENTS
===================================================== */

function getTotalStudents() {

  return classes.reduce(
    (total, item) => total + Number(item.students || 0),
    0
  );

}


/* =====================================================
   RENDER CLASSES
===================================================== */

function renderClasses() {

  if (classes.length === 0) {

    return `
      <div
        style="
          text-align:center;
          padding:60px 20px;
        "
      >

        <div style="font-size:55px;">
          📚
        </div>

        <h3>No Classes Added</h3>

        <p>
          Click "+ Add Class" to create your first class.
        </p>

      </div>
    `;
  }


  return classes.map(item => `

    <div
      class="dashboard-card teacher-class-item"
      style="margin-top:20px;"
    >

      <div class="card-header">

        <div>

          <div
            style="
              display:flex;
              align-items:center;
              gap:12px;
            "
          >

            <div
              style="
                width:45px;
                height:45px;
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:12px;
                background:#eef4ff;
                font-size:22px;
              "
            >
              📐
            </div>


            <div>

              <h2>
                ${escapeHTML(item.className)}
                - Section
                ${escapeHTML(item.section)}
              </h2>

              <p>
                ${escapeHTML(item.subject)}
              </p>

            </div>

          </div>

        </div>


        <!-- EDIT / DELETE -->

        <div
          style="
            display:flex;
            gap:8px;
            flex-wrap:wrap;
          "
        >

          <button
            type="button"
            class="view-btn"
            data-class-action="edit"
            data-id="${item.id}"
          >
            ✏️ Edit
          </button>


          <button
            type="button"
            class="view-btn"
            data-class-action="delete"
            data-id="${item.id}"
          >
            🗑️ Delete
          </button>

        </div>

      </div>


      <!-- DETAILS -->

      <div
        style="
          display:grid;
          grid-template-columns:
            repeat(auto-fit,minmax(150px,1fr));
          gap:15px;
          margin-top:20px;
        "
      >

        <div>
          👨‍🎓
          <strong>Students</strong>
          <br>
          ${item.students}
        </div>


        <div>
          📅
          <strong>Attendance</strong>
          <br>
          ${item.attendance}
        </div>


        <div>
          📊
          <strong>Result</strong>
          <br>
          ${item.result}
        </div>


        <div>
          🏫
          <strong>Room</strong>
          <br>
          ${escapeHTML(item.room)}
        </div>


        <div>
          🕐
          <strong>Time</strong>
          <br>
          ${escapeHTML(item.time)}
        </div>

      </div>


      <!-- ACTIONS -->

      <div
        style="
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:20px;
        "
      >

        <button
          type="button"
          class="view-btn"
          data-class-action="students"
          data-id="${item.id}"
        >
          👨‍🎓 Students
        </button>


        <button
          type="button"
          class="view-btn"
          data-class-action="attendance"
          data-id="${item.id}"
        >
          📅 Attendance
        </button>


        <button
          type="button"
          class="view-btn"
          data-class-action="assignments"
          data-id="${item.id}"
        >
          📝 Assignments
        </button>


        <button
          type="button"
          class="view-btn"
          data-class-action="results"
          data-id="${item.id}"
        >
          🏆 Results
        </button>


        <button
          type="button"
          class="login-btn"
          data-class-action="open"
          data-id="${item.id}"
          style="
            max-width:150px;
            padding:10px 16px;
          "
        >
          Open Class →
        </button>

      </div>

    </div>

  `).join("");
}


/* =====================================================
   SETUP
===================================================== */

export function setupTeacherClasses() {

  const app = document.querySelector("#app");

  if (!app) {
    console.error("TeacherClasses: #app not found");
    return;
  }


  /*
    IMPORTANT:

    Listener app par lag raha hai.
    document par nahi.
  */

  app.onclick = handleTeacherClassClick;

}


/* =====================================================
   CLICK HANDLER
===================================================== */

function handleTeacherClassClick(event) {

  /* ADD */

  const addButton =
    event.target.closest("#addTeacherClassBtn");

  if (addButton) {

    event.preventDefault();
    event.stopPropagation();

    showAddClassPage();

    return;
  }


  /* BACK */

  const backButton =
    event.target.closest("#backTeacherDashboardBtn");

  if (backButton) {

    event.preventDefault();
    event.stopPropagation();

    goToDashboard();

    return;
  }


  /* CLASS ACTION */

  const actionButton =
    event.target.closest("[data-class-action]");

  if (!actionButton) {
    return;
  }


  event.preventDefault();
  event.stopPropagation();


  const action =
    actionButton.dataset.classAction;

  const id =
    Number(actionButton.dataset.id);


  if (action === "edit") {
    showEditClassPage(id);
    return;
  }


  if (action === "delete") {
    deleteClass(id);
    return;
  }


  if (action === "open") {
    openClass(id);
    return;
  }


  if (action === "students") {

    alert("Students module next step me connect hoga.");
    return;
  }


  if (action === "attendance") {

    alert("Attendance module next step me connect hoga.");
    return;
  }


  if (action === "assignments") {

    alert("Assignments module next step me connect hoga.");
    return;
  }


  if (action === "results") {

    alert("Results module next step me connect hoga.");
    return;
  }

}


/* =====================================================
   ADD CLASS PAGE
===================================================== */

function showAddClassPage() {

  const app =
    document.querySelector("#app");

  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="dashboard">

      ${teacherSidebar("classes")}


      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>➕ Add Class</h1>
            <p>Create a new teaching class</p>
          </div>

        </header>


        <section class="dashboard-content">

          <div
            class="dashboard-card"
            style="
              max-width:750px;
              margin:auto;
            "
          >

            <div class="card-header">

              <div>
                <h2>Add New Class</h2>
                <p>
                  Enter class information below
                </p>
              </div>

            </div>


            <form id="addClassForm">

              <div
                style="
                  display:grid;
                  grid-template-columns:
                    repeat(auto-fit,minmax(220px,1fr));
                  gap:20px;
                "
              >

                <div>

                  <label>Class</label>

                  <input
                    type="text"
                    id="addClassName"
                    placeholder="Example: Class 8"
                    required
                  />

                </div>


                <div>

                  <label>Section</label>

                  <input
                    type="text"
                    id="addSection"
                    placeholder="Example: A"
                    maxlength="2"
                    required
                  />

                </div>


                <div>

                  <label>Subject</label>

                  <input
                    type="text"
                    id="addSubject"
                    placeholder="Example: Mathematics"
                    required
                  />

                </div>


                <div>

                  <label>Total Students</label>

                  <input
                    type="number"
                    id="addStudents"
                    placeholder="Example: 40"
                    min="0"
                    required
                  />

                </div>


                <div>

                  <label>Room</label>

                  <input
                    type="text"
                    id="addRoom"
                    placeholder="Example: Room 105"
                  />

                </div>


                <div>

                  <label>Time</label>

                  <input
                    type="text"
                    id="addTime"
                    placeholder="Example: 09:00 AM - 09:45 AM"
                  />

                </div>

              </div>


              <div
                style="
                  display:flex;
                  gap:12px;
                  margin-top:30px;
                  flex-wrap:wrap;
                "
              >

                <button
                  type="submit"
                  class="login-btn"
                  style="max-width:180px;"
                >
                  💾 Save Class
                </button>


                <button
                  type="button"
                  class="view-btn"
                  id="cancelAddClass"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>

  `;


  const form =
    document.querySelector("#addClassForm");


  form.addEventListener("submit", function(event) {

    event.preventDefault();


    const className =
      document.querySelector("#addClassName").value.trim();

    const section =
      document.querySelector("#addSection").value.trim().toUpperCase();

    const subject =
      document.querySelector("#addSubject").value.trim();

    const students =
      Number(document.querySelector("#addStudents").value);

    const room =
      document.querySelector("#addRoom").value.trim();

    const time =
      document.querySelector("#addTime").value.trim();


    if (!className || !section || !subject) {

      alert("Please fill all required fields.");
      return;

    }


    if (!Number.isFinite(students) || students < 0) {

      alert("Please enter valid student count.");
      return;

    }


    classes.push({

      id: Date.now(),

      className,
      section,
      subject,
      students,

      attendance: "0%",

      result: "0%",

      room: room || "Not Assigned",

      time: time || "Not Assigned"

    });


    renderMainClassPage();

  });


  document
    .querySelector("#cancelAddClass")
    .addEventListener("click", function() {

      renderMainClassPage();

    });

}


/* =====================================================
   EDIT CLASS PAGE
===================================================== */

function showEditClassPage(id) {

  const item =
    classes.find(
      classItem => classItem.id === id
    );


  if (!item) {

    alert("Class not found.");
    return;

  }


  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="dashboard">

      ${teacherSidebar("classes")}


      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>✏️ Edit Class</h1>
            <p>Update class information</p>
          </div>

        </header>


        <section class="dashboard-content">

          <div
            class="dashboard-card"
            style="
              max-width:750px;
              margin:auto;
            "
          >

            <div class="card-header">

              <div>
                <h2>Edit Class</h2>
                <p>
                  Update the details below
                </p>
              </div>

            </div>


            <form id="editClassForm">

              <div
                style="
                  display:grid;
                  grid-template-columns:
                    repeat(auto-fit,minmax(220px,1fr));
                  gap:20px;
                "
              >

                <div>

                  <label>Class</label>

                  <input
                    type="text"
                    id="editClassName"
                    value="${escapeAttribute(item.className)}"
                    required
                  />

                </div>


                <div>

                  <label>Section</label>

                  <input
                    type="text"
                    id="editSection"
                    value="${escapeAttribute(item.section)}"
                    maxlength="2"
                    required
                  />

                </div>


                <div>

                  <label>Subject</label>

                  <input
                    type="text"
                    id="editSubject"
                    value="${escapeAttribute(item.subject)}"
                    required
                  />

                </div>


                <div>

                  <label>Total Students</label>

                  <input
                    type="number"
                    id="editStudents"
                    value="${item.students}"
                    min="0"
                    required
                  />

                </div>


                <div>

                  <label>Room</label>

                  <input
                    type="text"
                    id="editRoom"
                    value="${escapeAttribute(item.room)}"
                  />

                </div>


                <div>

                  <label>Time</label>

                  <input
                    type="text"
                    id="editTime"
                    value="${escapeAttribute(item.time)}"
                  />

                </div>

              </div>


              <div
                style="
                  display:flex;
                  gap:12px;
                  margin-top:30px;
                  flex-wrap:wrap;
                "
              >

                <button
                  type="submit"
                  class="login-btn"
                  style="max-width:180px;"
                >
                  💾 Update Class
                </button>


                <button
                  type="button"
                  class="view-btn"
                  id="cancelEditClass"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>

  `;


  document
    .querySelector("#editClassForm")
    .addEventListener("submit", function(event) {

      event.preventDefault();


      const className =
        document.querySelector("#editClassName").value.trim();

      const section =
        document.querySelector("#editSection").value.trim().toUpperCase();

      const subject =
        document.querySelector("#editSubject").value.trim();

      const students =
        Number(document.querySelector("#editStudents").value);

      const room =
        document.querySelector("#editRoom").value.trim();

      const time =
        document.querySelector("#editTime").value.trim();


      if (!className || !section || !subject) {

        alert("Please fill all required fields.");
        return;

      }


      if (!Number.isFinite(students) || students < 0) {

        alert("Please enter valid student count.");
        return;

      }


      item.className = className;
      item.section = section;
      item.subject = subject;
      item.students = students;
      item.room = room || "Not Assigned";
      item.time = time || "Not Assigned";


      renderMainClassPage();

    });


  document
    .querySelector("#cancelEditClass")
    .addEventListener("click", function() {

      renderMainClassPage();

    });

}


/* =====================================================
   RENDER MAIN PAGE AGAIN
===================================================== */

function renderMainClassPage() {

  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML =
    TeacherClasses();


  setupTeacherClasses();

}


/* =====================================================
   DELETE
===================================================== */

function deleteClass(id) {

  const item =
    classes.find(
      classItem => classItem.id === id
    );


  if (!item) {

    alert("Class not found.");
    return;

  }


  const confirmDelete =
    window.confirm(
      `Delete ${item.className} - Section ${item.section}?`
    );


  if (!confirmDelete) {
    return;
  }


  classes =
    classes.filter(
      classItem => classItem.id !== id
    );


  renderMainClassPage();

}


/* =====================================================
   OPEN CLASS
===================================================== */

function openClass(id) {

  const item =
    classes.find(
      classItem => classItem.id === id
    );


  if (!item) {
    return;
  }


  alert(
    `${item.className} - Section ${item.section}\n\n` +
    `Subject: ${item.subject}\n` +
    `Students: ${item.students}\n` +
    `Attendance: ${item.attendance}\n` +
    `Result: ${item.result}\n` +
    `Room: ${item.room}\n` +
    `Time: ${item.time}`
  );

}


/* =====================================================
   DASHBOARD
===================================================== */

function goToDashboard() {

  if (
    typeof window.navigateTeacherPage === "function"
  ) {

    window.navigateTeacherPage("dashboard");

    return;

  }


  document.querySelector("#app").innerHTML = `
    <div style="padding:40px;">
      <h2>Teacher Dashboard</h2>
    </div>
  `;

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


function escapeAttribute(value) {

  return escapeHTML(value);

}