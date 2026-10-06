/* =====================================================
   TEACHER STUDENTS
   FULL FUNCTIONAL VERSION
===================================================== */

let students = [
  {
    id: 1,
    name: "Rahul Sharma",
    rollNo: "101",
    className: "Class 10",
    section: "B",
    gender: "Male",
    mobile: "9876543210",
    attendance: "93%",
    result: "80%",
    parentName: "Ramesh Sharma"
  },

  {
    id: 2,
    name: "Priya Kumari",
    rollNo: "102",
    className: "Class 10",
    section: "B",
    gender: "Female",
    mobile: "9876543211",
    attendance: "96%",
    result: "88%",
    parentName: "Suresh Kumar"
  },

  {
    id: 3,
    name: "Amit Patel",
    rollNo: "103",
    className: "Class 10",
    section: "B",
    gender: "Male",
    mobile: "9876543212",
    attendance: "91%",
    result: "76%",
    parentName: "Mahesh Patel"
  }
];


/* =====================================================
   MAIN STUDENTS PAGE
===================================================== */

export function TeacherStudents() {

  return `
    <div class="dashboard">

      ${teacherSidebar("students")}

      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>Students 👨‍🎓</h1>
            <p>Manage your students</p>
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
                👨‍🎓
              </div>

              <div>
                <span>Total Students</span>

                <h2 id="studentTotalCount">
                  ${students.length}
                </h2>
              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon green">
                🏫
              </div>

              <div>
                <span>Total Classes</span>

                <h2>
                  ${getTotalClasses()}
                </h2>
              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon orange">
                📅
              </div>

              <div>
                <span>Avg Attendance</span>

                <h2>
                  ${getAverageAttendance()}%
                </h2>
              </div>

            </div>


            <div class="stat-card">

              <div class="stat-icon purple">
                📊
              </div>

              <div>
                <span>Avg Result</span>

                <h2>
                  ${getAverageResult()}%
                </h2>
              </div>

            </div>

          </div>


          <!-- STUDENTS CARD -->

          <div class="dashboard-card">

            <div class="card-header">

              <div>
                <h2>My Students</h2>
                <p>View and manage all students</p>
              </div>

              <button
                type="button"
                class="view-btn"
                id="addTeacherStudentBtn"
              >
                + Add Student
              </button>

            </div>


            <!-- SEARCH + FILTER -->

            <div
              style="
                display:grid;
                grid-template-columns:
                  minmax(220px,2fr)
                  minmax(150px,1fr)
                  minmax(150px,1fr);
                gap:15px;
                margin-bottom:25px;
              "
            >

              <input
                type="text"
                id="studentSearchInput"
                placeholder="🔍 Search student name or roll number..."
              />


              <select id="studentClassFilter">

                <option value="all">
                  All Classes
                </option>

                ${getClassOptions()}

              </select>


              <select id="studentGenderFilter">

                <option value="all">
                  All Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

              </select>

            </div>


            <!-- STUDENT LIST -->

            <div id="teacherStudentList">

              ${renderStudents()}

            </div>

          </div>


          <!-- BACK -->

          <div style="margin-top:20px;">

            <button
              type="button"
              class="login-btn"
              id="backTeacherStudentDashboard"
              style="max-width:230px;"
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
          class="nav-item
          ${activePage === "dashboard" ? "active" : ""}"
          data-page="dashboard"
        >
          📊 Dashboard
        </button>


        <button
          type="button"
          class="nav-item
          ${activePage === "classes" ? "active" : ""}"
          data-page="classes"
        >
          📚 My Classes
        </button>


        <button
          type="button"
          class="nav-item
          ${activePage === "students" ? "active" : ""}"
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
   CLASS OPTIONS
===================================================== */

function getClassOptions() {

  const classes = [
    ...new Set(
      students.map(student =>
        `${student.className}|${student.section}`
      )
    )
  ];

  return classes.map(value => {

    const [className, section] =
      value.split("|");

    return `
      <option value="${escapeAttribute(value)}">
        ${escapeHTML(className)} - Section ${escapeHTML(section)}
      </option>
    `;

  }).join("");
}


/* =====================================================
   RENDER STUDENTS
===================================================== */

function renderStudents(
  search = "",
  classFilter = "all",
  genderFilter = "all"
) {

  const searchText =
    search.trim().toLowerCase();


  const filteredStudents =
    students.filter(student => {

      const matchesSearch =
        !searchText ||
        student.name.toLowerCase().includes(searchText) ||
        student.rollNo.toLowerCase().includes(searchText) ||
        student.mobile.includes(searchText);


      const matchesClass =
        classFilter === "all" ||
        `${student.className}|${student.section}` === classFilter;


      const matchesGender =
        genderFilter === "all" ||
        student.gender === genderFilter;


      return (
        matchesSearch &&
        matchesClass &&
        matchesGender
      );

    });


  if (filteredStudents.length === 0) {

    return `
      <div
        style="
          text-align:center;
          padding:60px 20px;
        "
      >

        <div style="font-size:55px;">
          👨‍🎓
        </div>

        <h3>
          No Students Found
        </h3>

        <p>
          Try another search or add a new student.
        </p>

      </div>
    `;
  }


  return `

    <div
      style="
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
        gap:20px;
      "
    >

      ${filteredStudents.map(student => `

        <div
          class="dashboard-card"
          style="
            margin:0;
            border:1px solid #e7eaf0;
          "
        >

          <!-- STUDENT HEADER -->

          <div
            style="
              display:flex;
              justify-content:space-between;
              align-items:flex-start;
              gap:10px;
            "
          >

            <div
              style="
                display:flex;
                gap:12px;
                align-items:center;
              "
            >

              <div
                style="
                  width:48px;
                  height:48px;
                  border-radius:50%;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  background:#eef4ff;
                  font-size:22px;
                "
              >
                👨‍🎓
              </div>


              <div>

                <h3 style="margin:0;">
                  ${escapeHTML(student.name)}
                </h3>

                <p style="margin:4px 0 0;">
                  Roll No: ${escapeHTML(student.rollNo)}
                </p>

              </div>

            </div>


            <span
              style="
                padding:5px 9px;
                border-radius:8px;
                background:#eef4ff;
                font-size:12px;
                font-weight:600;
              "
            >
              ${escapeHTML(student.className)}
            </span>

          </div>


          <!-- DETAILS -->

          <div
            style="
              display:grid;
              grid-template-columns:1fr 1fr;
              gap:14px;
              margin-top:20px;
            "
          >

            <div>
              <small>Section</small>
              <strong>
                ${escapeHTML(student.section)}
              </strong>
            </div>


            <div>
              <small>Gender</small>
              <strong>
                ${escapeHTML(student.gender)}
              </strong>
            </div>


            <div>
              <small>Attendance</small>
              <strong>
                ${escapeHTML(student.attendance)}
              </strong>
            </div>


            <div>
              <small>Result</small>
              <strong>
                ${escapeHTML(student.result)}
              </strong>
            </div>

          </div>


          <!-- ACTIONS -->

          <div
            style="
              display:flex;
              gap:8px;
              flex-wrap:wrap;
              margin-top:20px;
            "
          >

            <button
              type="button"
              class="view-btn"
              data-student-action="view"
              data-id="${student.id}"
            >
              👁️ View
            </button>


            <button
              type="button"
              class="view-btn"
              data-student-action="edit"
              data-id="${student.id}"
            >
              ✏️ Edit
            </button>


            <button
              type="button"
              class="view-btn"
              data-student-action="delete"
              data-id="${student.id}"
            >
              🗑️ Delete
            </button>

          </div>

        </div>

      `).join("")}

    </div>

  `;
}


/* =====================================================
   SETUP
===================================================== */

export function setupTeacherStudents() {

  const app =
    document.querySelector("#app");

  if (!app) {
    console.error("TeacherStudents: #app not found");
    return;
  }


  app.onclick =
    handleTeacherStudentClick;


  setupStudentFilters();

}


/* =====================================================
   CLICK HANDLER
===================================================== */

function handleTeacherStudentClick(event) {

  const addButton =
    event.target.closest("#addTeacherStudentBtn");


  if (addButton) {

    event.preventDefault();
    event.stopPropagation();

    showAddStudentPage();

    return;
  }


  const backButton =
    event.target.closest("#backTeacherStudentDashboard");


  if (backButton) {

    event.preventDefault();
    event.stopPropagation();

    goToDashboard();

    return;
  }


  const actionButton =
    event.target.closest("[data-student-action]");


  if (!actionButton) {
    return;
  }


  event.preventDefault();
  event.stopPropagation();


  const action =
    actionButton.dataset.studentAction;


  const id =
    Number(actionButton.dataset.id);


  if (action === "view") {

    viewStudent(id);
    return;

  }


  if (action === "edit") {

    showEditStudentPage(id);
    return;

  }


  if (action === "delete") {

    deleteStudent(id);
    return;

  }

}


/* =====================================================
   SEARCH + FILTER
===================================================== */

function setupStudentFilters() {

  const searchInput =
    document.querySelector("#studentSearchInput");

  const classFilter =
    document.querySelector("#studentClassFilter");

  const genderFilter =
    document.querySelector("#studentGenderFilter");


  function applyFilters() {

    const list =
      document.querySelector("#teacherStudentList");

    if (!list) {
      return;
    }


    list.innerHTML =
      renderStudents(
        searchInput.value,
        classFilter.value,
        genderFilter.value
      );

  }


  if (searchInput) {

    searchInput.oninput =
      applyFilters;

  }


  if (classFilter) {

    classFilter.onchange =
      applyFilters;

  }


  if (genderFilter) {

    genderFilter.onchange =
      applyFilters;

  }

}


/* =====================================================
   ADD STUDENT PAGE
===================================================== */

function showAddStudentPage() {

  const app =
    document.querySelector("#app");

  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="dashboard">

      ${teacherSidebar("students")}


      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>➕ Add Student</h1>
            <p>Add a new student</p>
          </div>

        </header>


        <section class="dashboard-content">

          <div
            class="dashboard-card"
            style="
              max-width:800px;
              margin:auto;
            "
          >

            <div class="card-header">

              <div>
                <h2>Add New Student</h2>
                <p>
                  Enter student information below
                </p>
              </div>

            </div>


            <form id="addStudentForm">

              <div
                style="
                  display:grid;
                  grid-template-columns:
                    repeat(auto-fit,minmax(220px,1fr));
                  gap:20px;
                "
              >

                <div>
                  <label>Student Name</label>

                  <input
                    type="text"
                    id="addStudentName"
                    placeholder="Enter student name"
                    required
                  />
                </div>


                <div>
                  <label>Roll Number</label>

                  <input
                    type="text"
                    id="addStudentRoll"
                    placeholder="Example: 104"
                    required
                  />
                </div>


                <div>
                  <label>Class</label>

                  <input
                    type="text"
                    id="addStudentClass"
                    placeholder="Example: Class 10"
                    required
                  />
                </div>


                <div>
                  <label>Section</label>

                  <input
                    type="text"
                    id="addStudentSection"
                    placeholder="Example: B"
                    maxlength="2"
                    required
                  />
                </div>


                <div>
                  <label>Gender</label>

                  <select id="addStudentGender" required>

                    <option value="">
                      Select Gender
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>

                  </select>
                </div>


                <div>
                  <label>Mobile Number</label>

                  <input
                    type="tel"
                    id="addStudentMobile"
                    placeholder="10 digit mobile"
                    maxlength="10"
                  />
                </div>


                <div>
                  <label>Parent Name</label>

                  <input
                    type="text"
                    id="addStudentParent"
                    placeholder="Parent / Guardian name"
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
                  💾 Save Student
                </button>


                <button
                  type="button"
                  class="view-btn"
                  id="cancelAddStudent"
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
    document.querySelector("#addStudentForm");


  form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
      document
        .querySelector("#addStudentName")
        .value
        .trim();


    const rollNo =
      document
        .querySelector("#addStudentRoll")
        .value
        .trim();


    const className =
      document
        .querySelector("#addStudentClass")
        .value
        .trim();


    const section =
      document
        .querySelector("#addStudentSection")
        .value
        .trim()
        .toUpperCase();


    const gender =
      document
        .querySelector("#addStudentGender")
        .value;


    const mobile =
      document
        .querySelector("#addStudentMobile")
        .value
        .trim();


    const parentName =
      document
        .querySelector("#addStudentParent")
        .value
        .trim();


    if (
      !name ||
      !rollNo ||
      !className ||
      !section ||
      !gender
    ) {

      alert(
        "Please fill all required fields."
      );

      return;

    }


    if (
      mobile &&
      !/^[6-9]\d{9}$/.test(mobile)
    ) {

      alert(
        "Please enter a valid Indian mobile number."
      );

      return;

    }


    students.push({

      id: Date.now(),

      name,

      rollNo,

      className,

      section,

      gender,

      mobile,

      parentName:

        parentName ||
        "Not Added",

      attendance:
        "0%",

      result:
        "0%"

    });


    renderMainStudentsPage();

  });


  document
    .querySelector("#cancelAddStudent")
    .addEventListener(
      "click",
      renderMainStudentsPage
    );

}


/* =====================================================
   EDIT STUDENT PAGE
===================================================== */

function showEditStudentPage(id) {

  const student =
    students.find(
      item => item.id === id
    );


  if (!student) {

    alert("Student not found.");
    return;

  }


  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="dashboard">

      ${teacherSidebar("students")}


      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>✏️ Edit Student</h1>
            <p>Update student information</p>
          </div>

        </header>


        <section class="dashboard-content">

          <div
            class="dashboard-card"
            style="
              max-width:800px;
              margin:auto;
            "
          >

            <div class="card-header">

              <div>
                <h2>Edit Student</h2>
                <p>
                  Update the details below
                </p>
              </div>

            </div>


            <form id="editStudentForm">

              <div
                style="
                  display:grid;
                  grid-template-columns:
                    repeat(auto-fit,minmax(220px,1fr));
                  gap:20px;
                "
              >

                <div>
                  <label>Student Name</label>

                  <input
                    type="text"
                    id="editStudentName"
                    value="${escapeAttribute(student.name)}"
                    required
                  />
                </div>


                <div>
                  <label>Roll Number</label>

                  <input
                    type="text"
                    id="editStudentRoll"
                    value="${escapeAttribute(student.rollNo)}"
                    required
                  />
                </div>


                <div>
                  <label>Class</label>

                  <input
                    type="text"
                    id="editStudentClass"
                    value="${escapeAttribute(student.className)}"
                    required
                  />
                </div>


                <div>
                  <label>Section</label>

                  <input
                    type="text"
                    id="editStudentSection"
                    value="${escapeAttribute(student.section)}"
                    maxlength="2"
                    required
                  />
                </div>


                <div>
                  <label>Gender</label>

                  <select
                    id="editStudentGender"
                    required
                  >

                    <option
                      value="Male"
                      ${student.gender === "Male" ? "selected" : ""}
                    >
                      Male
                    </option>

                    <option
                      value="Female"
                      ${student.gender === "Female" ? "selected" : ""}
                    >
                      Female
                    </option>

                  </select>
                </div>


                <div>
                  <label>Mobile Number</label>

                  <input
                    type="tel"
                    id="editStudentMobile"
                    value="${escapeAttribute(student.mobile)}"
                    maxlength="10"
                  />
                </div>


                <div>
                  <label>Parent Name</label>

                  <input
                    type="text"
                    id="editStudentParent"
                    value="${escapeAttribute(student.parentName)}"
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
                  💾 Update Student
                </button>


                <button
                  type="button"
                  class="view-btn"
                  id="cancelEditStudent"
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
    .querySelector("#editStudentForm")
    .addEventListener(
      "submit",
      function(event) {

        event.preventDefault();


        const name =
          document
            .querySelector("#editStudentName")
            .value
            .trim();


        const rollNo =
          document
            .querySelector("#editStudentRoll")
            .value
            .trim();


        const className =
          document
            .querySelector("#editStudentClass")
            .value
            .trim();


        const section =
          document
            .querySelector("#editStudentSection")
            .value
            .trim()
            .toUpperCase();


        const gender =
          document
            .querySelector("#editStudentGender")
            .value;


        const mobile =
          document
            .querySelector("#editStudentMobile")
            .value
            .trim();


        const parentName =
          document
            .querySelector("#editStudentParent")
            .value
            .trim();


        if (
          !name ||
          !rollNo ||
          !className ||
          !section ||
          !gender
        ) {

          alert(
            "Please fill all required fields."
          );

          return;

        }


        if (
          mobile &&
          !/^[6-9]\d{9}$/.test(mobile)
        ) {

          alert(
            "Please enter a valid Indian mobile number."
          );

          return;

        }


        student.name =
          name;

        student.rollNo =
          rollNo;

        student.className =
          className;

        student.section =
          section;

        student.gender =
          gender;

        student.mobile =
          mobile;

        student.parentName =
          parentName ||
          "Not Added";


        renderMainStudentsPage();

      }
    );


  document
    .querySelector("#cancelEditStudent")
    .addEventListener(
      "click",
      renderMainStudentsPage
    );

}


/* =====================================================
   VIEW STUDENT
===================================================== */

function viewStudent(id) {

  const student =
    students.find(
      item => item.id === id
    );


  if (!student) {

    alert("Student not found.");
    return;

  }


  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="dashboard">

      ${teacherSidebar("students")}


      <main class="dashboard-main">

        <header class="dashboard-header">

          <div>
            <h1>👨‍🎓 Student Profile</h1>
            <p>Student details</p>
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

            <div
              style="
                text-align:center;
                padding:20px;
              "
            >

              <div
                style="
                  width:90px;
                  height:90px;
                  margin:auto;
                  border-radius:50%;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  background:#eef4ff;
                  font-size:42px;
                "
              >
                👨‍🎓
              </div>


              <h2>
                ${escapeHTML(student.name)}
              </h2>


              <p>
                Roll No: ${escapeHTML(student.rollNo)}
              </p>

            </div>


            <div
              style="
                display:grid;
                grid-template-columns:
                  repeat(auto-fit,minmax(200px,1fr));
                gap:20px;
                margin-top:25px;
              "
            >

              ${profileItem(
                "🏫 Class",
                `${student.className} - Section ${student.section}`
              )}

              ${profileItem(
                "👤 Gender",
                student.gender
              )}

              ${profileItem(
                "📱 Mobile",
                student.mobile || "Not Added"
              )}

              ${profileItem(
                "👨‍👩‍👧 Parent",
                student.parentName
              )}

              ${profileItem(
                "📅 Attendance",
                student.attendance
              )}

              ${profileItem(
                "📊 Result",
                student.result
              )}

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
                type="button"
                class="login-btn"
                id="profileBackBtn"
                style="max-width:220px;"
              >
                ← Back to Students
              </button>


              <button
                type="button"
                class="view-btn"
                id="profileEditBtn"
                data-id="${student.id}"
              >
                ✏️ Edit Student
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  `;


  document
    .querySelector("#profileBackBtn")
    .addEventListener(
      "click",
      renderMainStudentsPage
    );


  document
    .querySelector("#profileEditBtn")
    .addEventListener(
      "click",
      () => showEditStudentPage(id)
    );

}


/* =====================================================
   PROFILE ITEM
===================================================== */

function profileItem(label, value) {

  return `
    <div
      style="
        padding:15px;
        border-radius:12px;
        background:#f8f9fc;
      "
    >

      <small>
        ${escapeHTML(label)}
      </small>

      <strong
        style="
          display:block;
          margin-top:6px;
        "
      >
        ${escapeHTML(value)}
      </strong>

    </div>
  `;
}


/* =====================================================
   DELETE STUDENT
===================================================== */

function deleteStudent(id) {

  const student =
    students.find(
      item => item.id === id
    );


  if (!student) {

    alert("Student not found.");
    return;

  }


  const confirmed =
    window.confirm(
      `Delete ${student.name}?\n\nThis action cannot be undone.`
    );


  if (!confirmed) {
    return;
  }


  students =
    students.filter(
      item => item.id !== id
    );


  renderMainStudentsPage();

}


/* =====================================================
   REFRESH MAIN PAGE
===================================================== */

function renderMainStudentsPage() {

  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML =
    TeacherStudents();


  setupTeacherStudents();

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

    return;

  }


  alert(
    "Teacher Dashboard navigation available nahi hai."
  );

}


/* =====================================================
   STATISTICS
===================================================== */

function getTotalClasses() {

  return new Set(
    students.map(
      student =>
        `${student.className}-${student.section}`
    )
  ).size;

}


function getAverageAttendance() {

  if (!students.length) {
    return 0;
  }


  const total =
    students.reduce(
      (sum, student) =>
        sum +
        parseInt(
          student.attendance,
          10
        ) || 0,
      0
    );


  return Math.round(
    total / students.length
  );

}


function getAverageResult() {

  if (!students.length) {
    return 0;
  }


  const total =
    students.reduce(
      (sum, student) =>
        sum +
        parseInt(
          student.result,
          10
        ) || 0,
      0
    );


  return Math.round(
    total / students.length
  );

}


/* =====================================================
   SAFE HTML
===================================================== */

function escapeHTML(value) {

  return String(value)
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );

}


function escapeAttribute(value) {

  return escapeHTML(value);

}