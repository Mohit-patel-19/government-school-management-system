/* =====================================================
   TEACHER STUDENTS
   CLEAN + RESPONSIVE + FULL FUNCTIONAL VERSION
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
]

let teacherStudentsClickHandler = null


/* =====================================================
   CSS
===================================================== */

function loadTeacherStudentsCSS() {
  if (document.getElementById("teacher-students-css")) return

  const style = document.createElement("style")

  style.id = "teacher-students-css"

  style.textContent = `
    /* ================================
       MAIN
    ================================= */

    .teacher-students-page {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      overflow-x: hidden;
    }

    .teacher-students-content {
      width: 100%;
      max-width: 1450px;
      margin: 0 auto;
      padding: 28px 32px 40px;
      box-sizing: border-box;
    }

    /* ================================
       HEADER
    ================================= */

    .teacher-students-page .teacher-dashboard-header {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .teacher-students-header-title {
      min-width: 0;
    }

    .teacher-students-header-title h1 {
      margin: 0;
      font-size: 26px;
      line-height: 1.3;
      color: #111827;
      font-weight: 700;
    }

    .teacher-students-header-title p {
      margin: 6px 0 0;
      color: #6b7280;
      font-size: 14px;
      line-height: 1.5;
    }

    /* ================================
       STATS
    ================================= */

    .teacher-students-stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
      width: 100%;
      margin-bottom: 24px;
    }

    .teacher-student-stat-card {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 13px;
      box-sizing: border-box;
      box-shadow: 0 3px 12px rgba(15, 23, 42, 0.04);
    }

    .teacher-student-stat-icon {
      width: 48px;
      height: 48px;
      flex: 0 0 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 11px;
      font-size: 22px;
    }

    .teacher-stat-blue {
      background: #eff6ff;
    }

    .teacher-stat-green {
      background: #ecfdf5;
    }

    .teacher-stat-orange {
      background: #fff7ed;
    }

    .teacher-stat-purple {
      background: #f5f3ff;
    }

    .teacher-student-stat-info {
      min-width: 0;
    }

    .teacher-student-stat-info span {
      display: block;
      color: #6b7280;
      font-size: 12px;
      line-height: 1.4;
      font-weight: 600;
    }

    .teacher-student-stat-info strong {
      display: block;
      margin-top: 4px;
      color: #111827;
      font-size: 24px;
      line-height: 1.2;
      font-weight: 700;
    }

    /* ================================
       MAIN CARD
    ================================= */

    .teacher-students-main-card {
      width: 100%;
      min-width: 0;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 24px;
      box-sizing: border-box;
      box-shadow: 0 3px 12px rgba(15, 23, 42, 0.04);
    }

    .teacher-students-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 22px;
    }

    .teacher-students-card-heading {
      min-width: 0;
    }

    .teacher-students-card-heading h2 {
      margin: 0;
      color: #111827;
      font-size: 20px;
      line-height: 1.3;
      font-weight: 700;
    }

    .teacher-students-card-heading p {
      margin: 5px 0 0;
      color: #6b7280;
      font-size: 13px;
      line-height: 1.5;
    }

    .teacher-add-student-btn {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      min-height: 42px;
      padding: 0 16px;
      border: 0;
      border-radius: 8px;
      background: #2563eb;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }

    .teacher-add-student-btn:hover {
      background: #1d4ed8;
    }

    /* ================================
       SEARCH FILTER
    ================================= */

    .teacher-student-filters {
      display: grid;
      grid-template-columns:
        minmax(220px, 2fr)
        minmax(160px, 1fr)
        minmax(160px, 1fr);
      gap: 13px;
      width: 100%;
      margin-bottom: 24px;
    }

    .teacher-student-filter-input,
    .teacher-student-filter-select {
      width: 100%;
      height: 44px;
      min-width: 0;
      padding: 0 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #ffffff;
      color: #111827;
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
    }

    .teacher-student-filter-input:focus,
    .teacher-student-filter-select:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    /* ================================
       STUDENT GRID
    ================================= */

    .teacher-student-list {
      width: 100%;
      min-width: 0;
    }

    .teacher-student-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
      width: 100%;
    }

    /* ================================
       STUDENT CARD
    ================================= */

    .teacher-student-card {
      width: 100%;
      min-width: 0;
      padding: 19px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      box-sizing: border-box;
      box-shadow: 0 2px 9px rgba(15, 23, 42, 0.04);
    }

    .teacher-student-card:hover {
      border-color: #d5dae2;
      box-shadow: 0 5px 15px rgba(15, 23, 42, 0.07);
    }

    .teacher-student-card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      min-width: 0;
    }

    .teacher-student-identity {
      display: flex;
      align-items: center;
      gap: 11px;
      min-width: 0;
      flex: 1;
    }

    .teacher-student-avatar {
      width: 46px;
      height: 46px;
      flex: 0 0 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #eff6ff;
      font-size: 21px;
    }

    .teacher-student-name-box {
      min-width: 0;
    }

    .teacher-student-name-box h3 {
      margin: 0;
      color: #111827;
      font-size: 16px;
      line-height: 1.35;
      font-weight: 700;
      overflow-wrap: anywhere;
    }

    .teacher-student-name-box p {
      margin: 4px 0 0;
      color: #6b7280;
      font-size: 12px;
      line-height: 1.4;
    }

    .teacher-student-class-badge {
      flex: 0 0 auto;
      padding: 5px 9px;
      border-radius: 7px;
      background: #eff6ff;
      color: #2563eb;
      font-size: 11px;
      line-height: 1.3;
      font-weight: 700;
      white-space: nowrap;
    }

    /* ================================
       STUDENT DETAILS
    ================================= */

    .teacher-student-details {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      width: 100%;
      margin-top: 20px;
    }

    .teacher-student-detail {
      min-width: 0;
      padding: 11px 12px;
      border-radius: 8px;
      background: #f8fafc;
      box-sizing: border-box;
    }

    .teacher-student-detail-label {
      display: block;
      color: #6b7280;
      font-size: 11px;
      line-height: 1.35;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .teacher-student-detail-value {
      display: block;
      color: #111827;
      font-size: 14px;
      line-height: 1.35;
      font-weight: 700;
      overflow-wrap: anywhere;
    }

    /* ================================
       ACTIONS
    ================================= */

    .teacher-student-actions {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 7px;
      width: 100%;
      margin-top: 17px;
    }

    .teacher-student-action-btn {
      min-width: 0;
      height: 38px;
      padding: 0 8px;
      border: 1px solid #e5e7eb;
      border-radius: 7px;
      background: #ffffff;
      color: #374151;
      font-size: 12px;
      line-height: 1;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }

    .teacher-student-action-btn:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
    }

    .teacher-student-action-btn.delete {
      color: #dc2626;
      border-color: #fee2e2;
      background: #fffafa;
    }

    .teacher-student-action-btn.delete:hover {
      background: #fef2f2;
    }

    /* ================================
       BACK BUTTON
    ================================= */

    .teacher-student-back-row {
      margin-top: 20px;
    }

    .teacher-student-back-btn {
      height: 42px;
      padding: 0 18px;
      border: 0;
      border-radius: 8px;
      background: #2563eb;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }

    /* ================================
       FORM
    ================================= */

    .teacher-student-form-card {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      padding: 25px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      box-sizing: border-box;
      box-shadow: 0 3px 12px rgba(15, 23, 42, 0.04);
    }

    .teacher-student-form-title {
      margin: 0;
      color: #111827;
      font-size: 21px;
      line-height: 1.3;
      font-weight: 700;
    }

    .teacher-student-form-subtitle {
      margin: 6px 0 22px;
      color: #6b7280;
      font-size: 13px;
      line-height: 1.5;
    }

    .teacher-student-form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 17px;
    }

    .teacher-student-form-group {
      min-width: 0;
    }

    .teacher-student-form-label {
      display: block;
      margin-bottom: 7px;
      color: #374151;
      font-size: 13px;
      line-height: 1.4;
      font-weight: 600;
    }

    .teacher-student-form-input,
    .teacher-student-form-select {
      width: 100%;
      height: 44px;
      padding: 0 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #ffffff;
      color: #111827;
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
    }

    .teacher-student-form-input:focus,
    .teacher-student-form-select:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .teacher-student-form-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 24px;
      padding-top: 19px;
      border-top: 1px solid #eef0f3;
    }

    .teacher-student-save-btn,
    .teacher-student-cancel-btn {
      height: 42px;
      padding: 0 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }

    .teacher-student-save-btn {
      border: 0;
      background: #2563eb;
      color: #ffffff;
    }

    .teacher-student-cancel-btn {
      border: 1px solid #d1d5db;
      background: #ffffff;
      color: #374151;
    }

    /* ================================
       PROFILE
    ================================= */

    .teacher-student-profile-card {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 25px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      box-sizing: border-box;
      box-shadow: 0 3px 12px rgba(15, 23, 42, 0.04);
    }

    .teacher-student-profile-top {
      text-align: center;
      padding: 8px 10px 22px;
    }

    .teacher-student-profile-avatar {
      width: 88px;
      height: 88px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #eff6ff;
      font-size: 40px;
    }

    .teacher-student-profile-top h2 {
      margin: 14px 0 5px;
      color: #111827;
      font-size: 22px;
      line-height: 1.3;
    }

    .teacher-student-profile-top p {
      margin: 0;
      color: #6b7280;
      font-size: 13px;
    }

    .teacher-student-profile-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 13px;
    }

    .teacher-student-profile-item {
      min-width: 0;
      padding: 14px;
      border-radius: 10px;
      background: #f8fafc;
    }

    .teacher-student-profile-item span {
      display: block;
      color: #6b7280;
      font-size: 11px;
      line-height: 1.4;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .teacher-student-profile-item strong {
      display: block;
      color: #111827;
      font-size: 14px;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .teacher-student-profile-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 22px;
      flex-wrap: wrap;
    }

    /* ================================
       EMPTY
    ================================= */

    .teacher-student-empty {
      padding: 55px 20px;
      text-align: center;
    }

    .teacher-student-empty-icon {
      font-size: 48px;
      line-height: 1;
    }

    .teacher-student-empty h3 {
      margin: 15px 0 6px;
      color: #111827;
      font-size: 18px;
    }

    .teacher-student-empty p {
      margin: 0;
      color: #6b7280;
      font-size: 13px;
    }

    /* ================================
       TABLET
    ================================= */

    @media (max-width: 1150px) {
      .teacher-students-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .teacher-student-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    /* ================================
       MOBILE
    ================================= */

    @media (max-width: 768px) {
      .teacher-students-content {
        padding: 20px 16px 30px;
      }

      .teacher-students-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .teacher-student-stat-card {
        padding: 15px;
      }

      .teacher-student-stat-icon {
        width: 40px;
        height: 40px;
        flex-basis: 40px;
        font-size: 18px;
      }

      .teacher-student-stat-info strong {
        font-size: 20px;
      }

      .teacher-students-main-card {
        padding: 17px;
      }

      .teacher-students-card-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .teacher-add-student-btn {
        width: 100%;
      }

      .teacher-student-filters {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .teacher-student-grid {
        grid-template-columns: 1fr;
      }

      .teacher-student-form-grid {
        grid-template-columns: 1fr;
      }

      .teacher-student-profile-grid {
        grid-template-columns: 1fr;
      }
    }

    /* ================================
       SMALL MOBILE
    ================================= */

    @media (max-width: 430px) {
      .teacher-students-content {
        padding: 16px 12px 25px;
      }

      .teacher-students-stats {
        grid-template-columns: 1fr;
      }

      .teacher-student-card {
        padding: 15px;
      }

      .teacher-student-card-header {
        align-items: flex-start;
      }

      .teacher-student-class-badge {
        font-size: 10px;
      }

      .teacher-student-actions {
        grid-template-columns: 1fr;
      }

      .teacher-student-action-btn {
        width: 100%;
      }

      .teacher-student-form-card,
      .teacher-student-profile-card {
        padding: 18px 15px;
      }

      .teacher-student-form-actions {
        flex-direction: column;
      }

      .teacher-student-save-btn,
      .teacher-student-cancel-btn {
        width: 100%;
      }

      .teacher-student-profile-actions {
        flex-direction: column;
      }

      .teacher-student-profile-actions button {
        width: 100%;
      }
    }
  `

  document.head.appendChild(style)
}


/* =====================================================
   SIDEBAR
===================================================== */

function teacherSidebar(activePage = "students") {
  return `
    <aside class="teacher-sidebar" id="teacherStudentsSidebar">

      <button
        type="button"
        class="teacher-mobile-close"
        id="teacherStudentsMobileClose"
        aria-label="Close menu"
      >
        ✕
      </button>

      <div class="teacher-sidebar-logo">

        <div class="teacher-logo-icon">
          🏫
        </div>

        <div>
          <div class="teacher-logo-title">
            Government School
          </div>

          <div class="teacher-logo-subtitle">
            Teacher Portal
          </div>
        </div>

      </div>


      <nav class="teacher-sidebar-nav">

        ${teacherNavItem("dashboard", "🏠", "Dashboard", activePage)}

        ${teacherNavItem("classes", "📚", "My Classes", activePage)}

        ${teacherNavItem("students", "👨‍🎓", "Students", activePage)}

        ${teacherNavItem("attendance", "📅", "Attendance", activePage)}

        ${teacherNavItem("assignments", "📝", "Assignments", activePage)}

        ${teacherNavItem("results", "🏆", "Results", activePage)}

        ${teacherNavItem("study-material", "📖", "Study Material", activePage)}

        ${teacherNavItem("notices", "📢", "Notices", activePage)}

        ${teacherNavItem("messages", "💬", "Messages", activePage)}

        ${teacherNavItem("settings", "⚙️", "Settings", activePage)}

        ${teacherNavItem("logout", "🚪", "Logout", activePage, "teacher-logout-item")}

      </nav>

    </aside>


    <div
      class="teacher-sidebar-overlay"
      id="teacherStudentsSidebarOverlay"
    ></div>
  `
}


function teacherNavItem(
  page,
  icon,
  label,
  activePage,
  extraClass = ""
) {
  return `
    <button
      type="button"
      class="teacher-nav-item ${
        activePage === page ? "active" : ""
      } ${extraClass}"
      data-page="${page}"
    >
      <span>${icon}</span>
      <span>${label}</span>
    </button>
  `
}


/* =====================================================
   MAIN PAGE
===================================================== */

export function TeacherStudents() {
  loadTeacherStudentsCSS()

  return `
    <div class="teacher-students-page">

      ${teacherSidebar("students")}

      <main class="teacher-dashboard-main">

        <header class="teacher-dashboard-header">

          <button
            type="button"
            class="teacher-mobile-menu"
            id="teacherStudentsMobileMenu"
            aria-label="Open menu"
          >
            ☰
          </button>

          <div class="teacher-students-header-title">

            <h1>
              Students 👨‍🎓
            </h1>

            <p>
              Manage your students
            </p>

          </div>

        </header>


        <section class="teacher-students-content">

          ${renderStats()}

          ${renderStudentsMainCard()}

          <div class="teacher-student-back-row">

            <button
              type="button"
              class="teacher-student-back-btn"
              id="backTeacherStudentDashboard"
            >
              ← Back to Dashboard
            </button>

          </div>

        </section>

      </main>

    </div>
  `
}


/* =====================================================
   STATS
===================================================== */

function renderStats() {
  return `
    <div class="teacher-students-stats">

      <div class="teacher-student-stat-card">

        <div class="teacher-student-stat-icon teacher-stat-blue">
          👨‍🎓
        </div>

        <div class="teacher-student-stat-info">

          <span>Total Students</span>

          <strong id="studentTotalCount">
            ${students.length}
          </strong>

        </div>

      </div>


      <div class="teacher-student-stat-card">

        <div class="teacher-student-stat-icon teacher-stat-green">
          🏫
        </div>

        <div class="teacher-student-stat-info">

          <span>Total Classes</span>

          <strong>
            ${getTotalClasses()}
          </strong>

        </div>

      </div>


      <div class="teacher-student-stat-card">

        <div class="teacher-student-stat-icon teacher-stat-orange">
          📅
        </div>

        <div class="teacher-student-stat-info">

          <span>Avg Attendance</span>

          <strong>
            ${getAverageAttendance()}%
          </strong>

        </div>

      </div>


      <div class="teacher-student-stat-card">

        <div class="teacher-student-stat-icon teacher-stat-purple">
          📊
        </div>

        <div class="teacher-student-stat-info">

          <span>Avg Result</span>

          <strong>
            ${getAverageResult()}%
          </strong>

        </div>

      </div>

    </div>
  `
}


/* =====================================================
   MAIN STUDENTS CARD
===================================================== */

function renderStudentsMainCard() {
  return `
    <div class="teacher-students-main-card">

      <div class="teacher-students-card-header">

        <div class="teacher-students-card-heading">

          <h2>
            My Students
          </h2>

          <p>
            View and manage all students
          </p>

        </div>


        <button
          type="button"
          class="teacher-add-student-btn"
          id="addTeacherStudentBtn"
        >
          <span>＋</span>
          <span>Add Student</span>
        </button>

      </div>


      <div class="teacher-student-filters">

        <input
          type="text"
          id="studentSearchInput"
          class="teacher-student-filter-input"
          placeholder="🔍 Search student name or roll number..."
        />


        <select
          id="studentClassFilter"
          class="teacher-student-filter-select"
        >

          <option value="all">
            All Classes
          </option>

          ${getClassOptions()}

        </select>


        <select
          id="studentGenderFilter"
          class="teacher-student-filter-select"
        >

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


      <div
        id="teacherStudentList"
        class="teacher-student-list"
      >
        ${renderStudents()}
      </div>

    </div>
  `
}


/* =====================================================
   CLASS OPTIONS
===================================================== */

function getClassOptions() {
  const classes = [
    ...new Set(
      students.map(
        student =>
          `${student.className}|${student.section}`
      )
    )
  ]

  return classes
    .map(value => {
      const [className, section] = value.split("|")

      return `
        <option value="${escapeAttribute(value)}">
          ${escapeHTML(className)} - Section ${escapeHTML(section)}
        </option>
      `
    })
    .join("")
}


/* =====================================================
   RENDER STUDENTS
===================================================== */

function renderStudents(
  search = "",
  classFilter = "all",
  genderFilter = "all"
) {
  const searchText = search.trim().toLowerCase()

  const filteredStudents = students.filter(student => {
    const matchesSearch =
      !searchText ||
      student.name.toLowerCase().includes(searchText) ||
      student.rollNo.toLowerCase().includes(searchText) ||
      student.mobile.includes(searchText)

    const matchesClass =
      classFilter === "all" ||
      `${student.className}|${student.section}` === classFilter

    const matchesGender =
      genderFilter === "all" ||
      student.gender === genderFilter

    return (
      matchesSearch &&
      matchesClass &&
      matchesGender
    )
  })


  if (filteredStudents.length === 0) {
    return `
      <div class="teacher-student-empty">

        <div class="teacher-student-empty-icon">
          👨‍🎓
        </div>

        <h3>
          No Students Found
        </h3>

        <p>
          Try another search or add a new student.
        </p>

      </div>
    `
  }


  return `
    <div class="teacher-student-grid">

      ${filteredStudents
        .map(student => createStudentCard(student))
        .join("")}

    </div>
  `
}


/* =====================================================
   STUDENT CARD
===================================================== */

function createStudentCard(student) {
  return `
    <article class="teacher-student-card">

      <div class="teacher-student-card-header">

        <div class="teacher-student-identity">

          <div class="teacher-student-avatar">
            👨‍🎓
          </div>

          <div class="teacher-student-name-box">

            <h3>
              ${escapeHTML(student.name)}
            </h3>

            <p>
              Roll No: ${escapeHTML(student.rollNo)}
            </p>

          </div>

        </div>


        <span class="teacher-student-class-badge">
          ${escapeHTML(student.className)}
        </span>

      </div>


      <div class="teacher-student-details">

        ${studentDetail(
          "Section",
          student.section
        )}

        ${studentDetail(
          "Gender",
          student.gender
        )}

        ${studentDetail(
          "Attendance",
          student.attendance
        )}

        ${studentDetail(
          "Result",
          student.result
        )}

      </div>


      <div class="teacher-student-actions">

        <button
          type="button"
          class="teacher-student-action-btn"
          data-student-action="view"
          data-id="${student.id}"
        >
          👁️ View
        </button>

        <button
          type="button"
          class="teacher-student-action-btn"
          data-student-action="edit"
          data-id="${student.id}"
        >
          ✏️ Edit
        </button>

        <button
          type="button"
          class="teacher-student-action-btn delete"
          data-student-action="delete"
          data-id="${student.id}"
        >
          🗑️ Delete
        </button>

      </div>

    </article>
  `
}


function studentDetail(label, value) {
  return `
    <div class="teacher-student-detail">

      <span class="teacher-student-detail-label">
        ${escapeHTML(label)}
      </span>

      <strong class="teacher-student-detail-value">
        ${escapeHTML(value)}
      </strong>

    </div>
  `
}


/* =====================================================
   SETUP
===================================================== */

export function setupTeacherStudents() {
  loadTeacherStudentsCSS()

  const app = document.querySelector("#app")

  if (!app) {
    console.error("TeacherStudents: #app not found")
    return
  }


  if (teacherStudentsClickHandler) {
    app.removeEventListener(
      "click",
      teacherStudentsClickHandler
    )
  }


  teacherStudentsClickHandler =
    handleTeacherStudentClick


  app.addEventListener(
    "click",
    teacherStudentsClickHandler
  )


  setupStudentFilters()

  setupStudentMobileMenu()
}


/* =====================================================
   MOBILE MENU
===================================================== */

function setupStudentMobileMenu() {
  const sidebar =
    document.getElementById(
      "teacherStudentsSidebar"
    )

  const menu =
    document.getElementById(
      "teacherStudentsMobileMenu"
    )

  const close =
    document.getElementById(
      "teacherStudentsMobileClose"
    )

  const overlay =
    document.getElementById(
      "teacherStudentsSidebarOverlay"
    )


  if (!sidebar || !menu) {
    return
  }


  const openSidebar = () => {
    sidebar.classList.add(
      "teacher-mobile-open"
    )

    if (overlay) {
      overlay.classList.add("active")
    }
  }


  const closeSidebar = () => {
    sidebar.classList.remove(
      "teacher-mobile-open"
    )

    if (overlay) {
      overlay.classList.remove("active")
    }
  }


  menu.onclick = openSidebar


  if (close) {
    close.onclick = closeSidebar
  }


  if (overlay) {
    overlay.onclick = closeSidebar
  }
}


/* =====================================================
   CLICK HANDLER
===================================================== */

function handleTeacherStudentClick(event) {
  const addButton =
    event.target.closest(
      "#addTeacherStudentBtn"
    )


  if (addButton) {
    event.preventDefault()
    event.stopPropagation()

    showAddStudentPage()
    return
  }


  const backButton =
    event.target.closest(
      "#backTeacherStudentDashboard"
    )


  if (backButton) {
    event.preventDefault()
    event.stopPropagation()

    goToDashboard()
    return
  }


  const actionButton =
    event.target.closest(
      "[data-student-action]"
    )


  if (!actionButton) {
    return
  }


  event.preventDefault()
  event.stopPropagation()


  const action =
    actionButton.dataset.studentAction

  const id =
    Number(actionButton.dataset.id)


  if (action === "view") {
    viewStudent(id)
    return
  }


  if (action === "edit") {
    showEditStudentPage(id)
    return
  }


  if (action === "delete") {
    deleteStudent(id)
    return
  }
}


/* =====================================================
   SEARCH + FILTER
===================================================== */

function setupStudentFilters() {
  const searchInput =
    document.querySelector(
      "#studentSearchInput"
    )

  const classFilter =
    document.querySelector(
      "#studentClassFilter"
    )

  const genderFilter =
    document.querySelector(
      "#studentGenderFilter"
    )


  function applyFilters() {
    const list =
      document.querySelector(
        "#teacherStudentList"
      )

    if (!list) {
      return
    }


    list.innerHTML =
      renderStudents(
        searchInput?.value || "",
        classFilter?.value || "all",
        genderFilter?.value || "all"
      )
  }


  if (searchInput) {
    searchInput.oninput =
      applyFilters
  }


  if (classFilter) {
    classFilter.onchange =
      applyFilters
  }


  if (genderFilter) {
    genderFilter.onchange =
      applyFilters
  }
}


/* =====================================================
   ADD STUDENT
===================================================== */

function showAddStudentPage() {
  const app =
    document.querySelector("#app")

  if (!app) {
    return
  }


  app.innerHTML = renderStudentForm()


  setupStudentForm("add")

  setupStudentMobileMenu()
}


/* =====================================================
   EDIT STUDENT
===================================================== */

function showEditStudentPage(id) {
  const student =
    students.find(
      item => item.id === id
    )


  if (!student) {
    alert("Student not found.")
    return
  }


  const app =
    document.querySelector("#app")

  if (!app) {
    return
  }


  app.innerHTML =
    renderStudentForm(
      "edit",
      student
    )


  setupStudentForm(
    "edit",
    student
  )

  setupStudentMobileMenu()
}


/* =====================================================
   FORM
===================================================== */

function renderStudentForm(
  mode = "add",
  student = null
) {
  const isEdit = mode === "edit"

  return `
    <div class="teacher-students-page">

      ${teacherSidebar("students")}

      <main class="teacher-dashboard-main">

        <header class="teacher-dashboard-header">

          <button
            type="button"
            class="teacher-mobile-menu"
            id="teacherStudentsMobileMenu"
            aria-label="Open menu"
          >
            ☰
          </button>

          <div class="teacher-students-header-title">

            <h1>
              ${isEdit ? "✏️ Edit Student" : "➕ Add Student"}
            </h1>

            <p>
              ${isEdit
                ? "Update student information"
                : "Add a new student"}
            </p>

          </div>

        </header>


        <section class="teacher-students-content">

          <div class="teacher-student-form-card">

            <h2 class="teacher-student-form-title">
              ${isEdit
                ? "Edit Student"
                : "Add New Student"}
            </h2>

            <p class="teacher-student-form-subtitle">
              Enter student information below
            </p>


            <form id="teacherStudentForm">

              <div class="teacher-student-form-grid">

                ${formField(
                  "Student Name",
                  "studentName",
                  "text",
                  student?.name || "",
                  "Enter student name"
                )}

                ${formField(
                  "Roll Number",
                  "studentRoll",
                  "text",
                  student?.rollNo || "",
                  "Example: 104"
                )}

                ${formField(
                  "Class",
                  "studentClass",
                  "text",
                  student?.className || "",
                  "Example: Class 10"
                )}

                ${formField(
                  "Section",
                  "studentSection",
                  "text",
                  student?.section || "",
                  "Example: B"
                )}

                <div class="teacher-student-form-group">

                  <label
                    class="teacher-student-form-label"
                    for="studentGender"
                  >
                    Gender
                  </label>

                  <select
                    id="studentGender"
                    class="teacher-student-form-select"
                    required
                  >

                    <option value="">
                      Select Gender
                    </option>

                    <option
                      value="Male"
                      ${student?.gender === "Male" ? "selected" : ""}
                    >
                      Male
                    </option>

                    <option
                      value="Female"
                      ${student?.gender === "Female" ? "selected" : ""}
                    >
                      Female
                    </option>

                  </select>

                </div>


                ${formField(
                  "Mobile Number",
                  "studentMobile",
                  "tel",
                  student?.mobile || "",
                  "10 digit mobile"
                )}

                ${formField(
                  "Parent Name",
                  "studentParent",
                  "text",
                  student?.parentName || "",
                  "Parent / Guardian name"
                )}

              </div>


              <div class="teacher-student-form-actions">

                <button
                  type="button"
                  class="teacher-student-cancel-btn"
                  id="cancelTeacherStudentForm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  class="teacher-student-save-btn"
                >
                  ${isEdit
                    ? "💾 Update Student"
                    : "💾 Save Student"}
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>
  `
}


function formField(
  label,
  id,
  type,
  value,
  placeholder
) {
  return `
    <div class="teacher-student-form-group">

      <label
        class="teacher-student-form-label"
        for="${id}"
      >
        ${label}
      </label>

      <input
        type="${type}"
        id="${id}"
        class="teacher-student-form-input"
        value="${escapeAttribute(value)}"
        placeholder="${escapeAttribute(placeholder)}"
        ${type === "tel" ? 'maxlength="10"' : ""}
        required
      />

    </div>
  `
}


/* =====================================================
   FORM SETUP
===================================================== */

function setupStudentForm(
  mode,
  student = null
) {
  const form =
    document.querySelector(
      "#teacherStudentForm"
    )

  if (!form) {
    return
  }


  form.addEventListener(
    "submit",
    event => {
      event.preventDefault()

      const name =
        document
          .querySelector("#studentName")
          .value
          .trim()

      const rollNo =
        document
          .querySelector("#studentRoll")
          .value
          .trim()

      const className =
        document
          .querySelector("#studentClass")
          .value
          .trim()

      const section =
        document
          .querySelector("#studentSection")
          .value
          .trim()
          .toUpperCase()

      const gender =
        document
          .querySelector("#studentGender")
          .value

      const mobile =
        document
          .querySelector("#studentMobile")
          .value
          .trim()

      const parentName =
        document
          .querySelector("#studentParent")
          .value
          .trim()


      if (
        !name ||
        !rollNo ||
        !className ||
        !section ||
        !gender
      ) {
        alert(
          "Please fill all required fields."
        )
        return
      }


      if (
        mobile &&
        !/^[6-9]\\d{9}$/.test(mobile)
      ) {
        alert(
          "Please enter a valid Indian mobile number."
        )
        return
      }


      if (mode === "edit" && student) {

        student.name =
          name

        student.rollNo =
          rollNo

        student.className =
          className

        student.section =
          section

        student.gender =
          gender

        student.mobile =
          mobile

        student.parentName =
          parentName || "Not Added"

      } else {

        students.push({
          id: Date.now(),
          name,
          rollNo,
          className,
          section,
          gender,
          mobile,
          parentName:
            parentName || "Not Added",
          attendance: "0%",
          result: "0%"
        })
      }


      renderMainStudentsPage()
    }
  )


  const cancel =
    document.querySelector(
      "#cancelTeacherStudentForm"
    )


  if (cancel) {
    cancel.addEventListener(
      "click",
      renderMainStudentsPage
    )
  }
}


/* =====================================================
   VIEW STUDENT
===================================================== */

function viewStudent(id) {
  const student =
    students.find(
      item => item.id === id
    )


  if (!student) {
    alert("Student not found.")
    return
  }


  const app =
    document.querySelector("#app")

  if (!app) {
    return
  }


  app.innerHTML = `
    <div class="teacher-students-page">

      ${teacherSidebar("students")}

      <main class="teacher-dashboard-main">

        <header class="teacher-dashboard-header">

          <button
            type="button"
            class="teacher-mobile-menu"
            id="teacherStudentsMobileMenu"
            aria-label="Open menu"
          >
            ☰
          </button>

          <div class="teacher-students-header-title">

            <h1>
              👨‍🎓 Student Profile
            </h1>

            <p>
              Student details
            </p>

          </div>

        </header>


        <section class="teacher-students-content">

          <div class="teacher-student-profile-card">

            <div class="teacher-student-profile-top">

              <div class="teacher-student-profile-avatar">
                👨‍🎓
              </div>

              <h2>
                ${escapeHTML(student.name)}
              </h2>

              <p>
                Roll No: ${escapeHTML(student.rollNo)}
              </p>

            </div>


            <div class="teacher-student-profile-grid">

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


            <div class="teacher-student-profile-actions">

              <button
                type="button"
                class="teacher-student-back-btn"
                id="profileBackBtn"
              >
                ← Back to Students
              </button>

              <button
                type="button"
                class="teacher-student-cancel-btn"
                id="profileEditBtn"
              >
                ✏️ Edit Student
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  `


  setupStudentMobileMenu()


  document
    .querySelector("#profileBackBtn")
    ?.addEventListener(
      "click",
      renderMainStudentsPage
    )


  document
    .querySelector("#profileEditBtn")
    ?.addEventListener(
      "click",
      () => showEditStudentPage(id)
    )
}


/* =====================================================
   PROFILE ITEM
===================================================== */

function profileItem(
  label,
  value
) {
  return `
    <div class="teacher-student-profile-item">

      <span>
        ${escapeHTML(label)}
      </span>

      <strong>
        ${escapeHTML(value)}
      </strong>

    </div>
  `
}


/* =====================================================
   DELETE
===================================================== */

function deleteStudent(id) {
  const student =
    students.find(
      item => item.id === id
    )


  if (!student) {
    alert("Student not found.")
    return
  }


  const confirmed =
    window.confirm(
      `Delete ${student.name}?\n\nThis action cannot be undone.`
    )


  if (!confirmed) {
    return
  }


  students =
    students.filter(
      item => item.id !== id
    )


  renderMainStudentsPage()
}


/* =====================================================
   REFRESH
===================================================== */

function renderMainStudentsPage() {
  const app =
    document.querySelector("#app")

  if (!app) {
    return
  }


  app.innerHTML =
    TeacherStudents()


  setupTeacherStudents()
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
    )

    return
  }


  alert(
    "Teacher Dashboard navigation available nahi hai."
  )
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
  ).size
}


function getAverageAttendance() {
  if (!students.length) {
    return 0
  }


  const total =
    students.reduce(
      (sum, student) => {
        return (
          sum +
          (parseInt(
            student.attendance,
            10
          ) || 0)
        )
      },
      0
    )


  return Math.round(
    total / students.length
  )
}


function getAverageResult() {
  if (!students.length) {
    return 0
  }


  const total =
    students.reduce(
      (sum, student) => {
        return (
          sum +
          (parseInt(
            student.result,
            10
          ) || 0)
        )
      },
      0
    )


  return Math.round(
    total / students.length
  )
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
    .replaceAll("'", "&#039;")
}


function escapeAttribute(value) {
  return escapeHTML(value)
}