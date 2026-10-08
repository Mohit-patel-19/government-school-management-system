let teacherClassesClickHandler = null
let teacherClassesSubmitHandler = null

/* =========================================================
   CSS
========================================================= */

function loadTeacherClassesCSS() {
  if (document.getElementById("teacher-classes-css")) return

  const style = document.createElement("style")
  style.id = "teacher-classes-css"

  style.textContent = `
    * {
      box-sizing: border-box;
    }

    .teacher-classes-page {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      overflow-x: hidden;
    }

    .teacher-classes-content {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 28px 32px 40px;
    }

    .teacher-classes-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 26px;
      min-width: 0;
    }

    .teacher-classes-title {
      margin: 0;
      font-size: 28px;
      line-height: 1.25;
      font-weight: 700;
      color: #172033;
    }

    .teacher-classes-subtitle {
      margin: 7px 0 0;
      font-size: 14px;
      line-height: 1.5;
      color: #6b7280;
    }

    /* ADD BUTTON */

    .teacher-add-class-btn {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 44px;
      padding: 0 18px;
      border: 0;
      border-radius: 9px;
      background: #2563eb;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }

    .teacher-add-class-btn:hover {
      background: #1d4ed8;
    }

    /* CLASS LIST */

    .teacher-class-list {
      display: flex;
      flex-direction: column;
      gap: 18px;
      width: 100%;
      min-width: 0;
    }

    .teacher-class-card {
      width: 100%;
      min-width: 0;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 22px;
      box-shadow: 0 3px 12px rgba(15, 23, 42, 0.05);
      overflow: hidden;
    }

    .teacher-class-card:hover {
      border-color: #d7dce5;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.07);
    }

    /* CARD HEADER */

    .teacher-class-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      width: 100%;
      min-width: 0;
      margin-bottom: 22px;
    }

    .teacher-class-heading {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
      flex: 1 1 auto;
    }

    .teacher-class-icon {
      width: 46px;
      height: 46px;
      flex: 0 0 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 11px;
      background: #eff6ff;
      font-size: 22px;
    }

    .teacher-class-heading-text {
      min-width: 0;
    }

    .teacher-class-name {
      margin: 0;
      color: #111827;
      font-size: 19px;
      line-height: 1.3;
      font-weight: 700;
      overflow-wrap: anywhere;
    }

    .teacher-class-subject {
      margin: 5px 0 0;
      color: #6b7280;
      font-size: 14px;
      line-height: 1.4;
    }

    .teacher-class-header-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      flex: 0 0 auto;
    }

    .teacher-class-edit-btn,
    .teacher-class-delete-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-height: 38px;
      padding: 0 13px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }

    .teacher-class-edit-btn {
      border: 1px solid #dbeafe;
      background: #eff6ff;
      color: #2563eb;
    }

    .teacher-class-delete-btn {
      border: 1px solid #fee2e2;
      background: #fef2f2;
      color: #dc2626;
    }

    .teacher-class-edit-btn:hover {
      background: #dbeafe;
    }

    .teacher-class-delete-btn:hover {
      background: #fee2e2;
    }

    /* DETAILS */

    .teacher-class-details {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      width: 100%;
      min-width: 0;
      border-top: 1px solid #eef0f3;
      border-bottom: 1px solid #eef0f3;
      padding: 18px 0;
      margin-bottom: 18px;
    }

    .teacher-class-detail {
      min-width: 0;
      padding: 0 18px;
      border-right: 1px solid #eef0f3;
    }

    .teacher-class-detail:first-child {
      padding-left: 0;
    }

    .teacher-class-detail:last-child {
      padding-right: 0;
      border-right: 0;
    }

    .teacher-class-detail-label {
      display: flex;
      align-items: center;
      gap: 7px;
      min-height: 22px;
      margin-bottom: 7px;
      color: #6b7280;
      font-size: 12px;
      line-height: 1.35;
      font-weight: 600;
      white-space: nowrap;
    }

    .teacher-class-detail-label-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 17px;
      height: 17px;
      flex: 0 0 17px;
      font-size: 14px;
    }

    .teacher-class-detail-value {
      display: block;
      margin: 0;
      color: #111827;
      font-size: 15px;
      line-height: 1.4;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* CARD PAGE BUTTONS */

    .teacher-class-actions {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
      width: 100%;
      min-width: 0;
    }

    .teacher-class-action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      min-height: 40px;
      min-width: 0;
      padding: 0 15px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #fff;
      color: #374151;
      font-size: 13px;
      line-height: 1;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
    }

    .teacher-class-action-btn:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
      color: #2563eb;
    }

    .teacher-class-action-btn span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }

    /* FORM */

    .teacher-class-form-card {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 26px;
      box-shadow: 0 3px 12px rgba(15, 23, 42, 0.05);
    }

    .teacher-form-title {
      margin: 0 0 22px;
      color: #111827;
      font-size: 21px;
      line-height: 1.3;
      font-weight: 700;
    }

    .teacher-form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .teacher-form-group {
      min-width: 0;
    }

    .teacher-form-group.full {
      grid-column: 1 / -1;
    }

    .teacher-form-label {
      display: block;
      margin-bottom: 7px;
      color: #374151;
      font-size: 13px;
      line-height: 1.4;
      font-weight: 600;
    }

    .teacher-form-input,
    .teacher-form-select {
      width: 100%;
      height: 44px;
      padding: 0 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #fff;
      color: #111827;
      font-size: 14px;
      outline: none;
    }

    .teacher-form-input:focus,
    .teacher-form-select:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.10);
    }

    .teacher-form-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid #eef0f3;
    }

    .teacher-form-cancel,
    .teacher-form-save {
      height: 42px;
      padding: 0 18px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    .teacher-form-cancel {
      border: 1px solid #d1d5db;
      background: #fff;
      color: #374151;
    }

    .teacher-form-save {
      border: 0;
      background: #2563eb;
      color: #fff;
    }

    .teacher-form-save:hover {
      background: #1d4ed8;
    }

    /* TABLET */

    @media (max-width: 1100px) {
      .teacher-class-details {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        row-gap: 18px;
      }

      .teacher-class-detail:nth-child(3) {
        border-right: 0;
        padding-right: 0;
      }

      .teacher-class-detail:nth-child(4) {
        padding-left: 0;
      }

      .teacher-class-actions {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    /* MOBILE */

    @media (max-width: 768px) {
      .teacher-classes-content {
        padding: 20px 16px 30px;
      }

      .teacher-classes-title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 14px;
        margin-bottom: 20px;
      }

      .teacher-classes-title {
        font-size: 24px;
      }

      .teacher-add-class-btn {
        width: 100%;
      }

      .teacher-class-card {
        padding: 17px;
        border-radius: 12px;
      }

      .teacher-class-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 14px;
        margin-bottom: 18px;
      }

      .teacher-class-heading {
        width: 100%;
      }

      .teacher-class-header-actions {
        width: 100%;
        justify-content: flex-start;
      }

      .teacher-class-edit-btn,
      .teacher-class-delete-btn {
        flex: 1;
      }

      .teacher-class-details {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0;
        padding: 16px 0;
      }

      .teacher-class-detail,
      .teacher-class-detail:first-child,
      .teacher-class-detail:last-child {
        padding: 10px 12px;
        border-right: 1px solid #eef0f3;
      }

      .teacher-class-detail:nth-child(2n) {
        border-right: 0;
      }

      .teacher-class-detail:nth-child(1),
      .teacher-class-detail:nth-child(2) {
        padding-top: 0;
      }

      .teacher-class-detail-label {
        font-size: 11px;
      }

      .teacher-class-detail-value {
        font-size: 14px;
      }

      .teacher-class-actions {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .teacher-class-action-btn {
        width: 100%;
      }

      .teacher-form-grid {
        grid-template-columns: 1fr;
      }

      .teacher-form-group.full {
        grid-column: auto;
      }

      .teacher-class-form-card {
        padding: 20px 16px;
      }
    }

    /* SMALL MOBILE */

    @media (max-width: 430px) {
      .teacher-classes-content {
        padding: 16px 12px 25px;
      }

      .teacher-class-card {
        padding: 14px;
      }

      .teacher-class-heading {
        gap: 10px;
      }

      .teacher-class-icon {
        width: 40px;
        height: 40px;
        flex-basis: 40px;
        font-size: 19px;
      }

      .teacher-class-name {
        font-size: 17px;
      }

      .teacher-class-subject {
        font-size: 13px;
      }

      .teacher-class-details {
        grid-template-columns: 1fr;
      }

      .teacher-class-detail,
      .teacher-class-detail:first-child,
      .teacher-class-detail:last-child,
      .teacher-class-detail:nth-child(2n) {
        padding: 10px 0;
        border-right: 0;
        border-bottom: 1px solid #eef0f3;
      }

      .teacher-class-detail:first-child {
        padding-top: 0;
      }

      .teacher-class-detail:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      .teacher-class-actions {
        grid-template-columns: 1fr;
      }

      .teacher-class-action-btn {
        min-height: 42px;
      }

      .teacher-form-actions {
        flex-direction: column;
      }

      .teacher-form-cancel,
      .teacher-form-save {
        width: 100%;
      }
    }
  `

  document.head.appendChild(style)
}


/* =========================================================
   SIDEBAR
========================================================= */

function teacherClassesSidebar(activePage = "classes") {
  return `
    <aside class="teacher-sidebar" id="teacherClassesSidebar">

      <button
        class="teacher-mobile-close"
        id="teacherClassesMobileClose"
        type="button"
        aria-label="Close menu"
      >
        ✕
      </button>

      <div class="teacher-sidebar-logo">
        <div class="teacher-logo-icon">🏫</div>

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

        <button
          class="teacher-nav-item ${activePage === "dashboard" ? "active" : ""}"
          data-page="dashboard"
          type="button"
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "classes" ? "active" : ""}"
          data-page="classes"
          type="button"
        >
          <span>📚</span>
          <span>My Classes</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "students" ? "active" : ""}"
          data-page="students"
          type="button"
        >
          <span>👨‍🎓</span>
          <span>Students</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "attendance" ? "active" : ""}"
          data-page="attendance"
          type="button"
        >
          <span>📅</span>
          <span>Attendance</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "assignments" ? "active" : ""}"
          data-page="assignments"
          type="button"
        >
          <span>📝</span>
          <span>Assignments</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "results" ? "active" : ""}"
          data-page="results"
          type="button"
        >
          <span>🏆</span>
          <span>Results</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "study-material" ? "active" : ""}"
          data-page="study-material"
          type="button"
        >
          <span>📖</span>
          <span>Study Material</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "notices" ? "active" : ""}"
          data-page="notices"
          type="button"
        >
          <span>📢</span>
          <span>Notices</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "messages" ? "active" : ""}"
          data-page="messages"
          type="button"
        >
          <span>💬</span>
          <span>Messages</span>
        </button>

        <button
          class="teacher-nav-item ${activePage === "settings" ? "active" : ""}"
          data-page="settings"
          type="button"
        >
          <span>⚙️</span>
          <span>Settings</span>
        </button>

        <button
          class="teacher-nav-item teacher-logout-item"
          data-page="logout"
          type="button"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>

      </nav>
    </aside>

    <div
      class="teacher-sidebar-overlay"
      id="teacherClassesSidebarOverlay"
    ></div>
  `
}


/* =========================================================
   CLASS DATA
========================================================= */

const teacherClassesData = [
  {
    id: 1,
    className: "Class 10",
    section: "Section A",
    subject: "Mathematics",
    students: 40,
    attendance: "95%",
    result: "82%",
    room: "Room 101",
    time: "10:00 AM - 10:45 AM"
  },
  {
    id: 2,
    className: "Class 10",
    section: "Section B",
    subject: "Mathematics",
    students: 38,
    attendance: "93%",
    result: "80%",
    room: "Room 102",
    time: "11:00 AM - 11:45 AM"
  },
  {
    id: 3,
    className: "Class 9",
    section: "Section A",
    subject: "Mathematics",
    students: 42,
    attendance: "94%",
    result: "84%",
    room: "Room 103",
    time: "12:00 PM - 12:45 PM"
  },
  {
    id: 4,
    className: "Class 9",
    section: "Section B",
    subject: "Mathematics",
    students: 36,
    attendance: "91%",
    result: "79%",
    room: "Room 104",
    time: "01:00 PM - 01:45 PM"
  }
]


/* =========================================================
   CLASS CARD
========================================================= */

function createClassCard(item) {
  return `
    <article class="teacher-class-card">

      <div class="teacher-class-header">

        <div class="teacher-class-heading">

          <div class="teacher-class-icon">
            📚
          </div>

          <div class="teacher-class-heading-text">

            <h3 class="teacher-class-name">
              ${item.className} - ${item.section}
            </h3>

            <p class="teacher-class-subject">
              ${item.subject}
            </p>

          </div>

        </div>


        <div class="teacher-class-header-actions">

          <button
            type="button"
            class="teacher-class-edit-btn"
            data-class-action="edit"
            data-id="${item.id}"
          >
            ✏️ Edit
          </button>

          <button
            type="button"
            class="teacher-class-delete-btn"
            data-class-action="delete"
            data-id="${item.id}"
          >
            🗑️ Delete
          </button>

        </div>

      </div>


      <div class="teacher-class-details">

        <div class="teacher-class-detail">

          <div class="teacher-class-detail-label">
            <span class="teacher-class-detail-label-icon">
              👨‍🎓
            </span>
            <span>Students</span>
          </div>

          <div class="teacher-class-detail-value">
            ${item.students}
          </div>

        </div>


        <div class="teacher-class-detail">

          <div class="teacher-class-detail-label">
            <span class="teacher-class-detail-label-icon">
              📅
            </span>
            <span>Attendance</span>
          </div>

          <div class="teacher-class-detail-value">
            ${item.attendance}
          </div>

        </div>


        <div class="teacher-class-detail">

          <div class="teacher-class-detail-label">
            <span class="teacher-class-detail-label-icon">
              📊
            </span>
            <span>Result</span>
          </div>

          <div class="teacher-class-detail-value">
            ${item.result}
          </div>

        </div>


        <div class="teacher-class-detail">

          <div class="teacher-class-detail-label">
            <span class="teacher-class-detail-label-icon">
              🏫
            </span>
            <span>Room</span>
          </div>

          <div class="teacher-class-detail-value">
            ${item.room}
          </div>

        </div>


        <div class="teacher-class-detail">

          <div class="teacher-class-detail-label">
            <span class="teacher-class-detail-label-icon">
              🕐
            </span>
            <span>Time</span>
          </div>

          <div class="teacher-class-detail-value">
            ${item.time}
          </div>

        </div>

      </div>


      <!-- DIRECT PAGE NAVIGATION -->

      <div class="teacher-class-actions">

        <button
          type="button"
          class="teacher-class-action-btn"
          data-class-action="students"
        >
          <span>👨‍🎓</span>
          <span>Students</span>
        </button>


        <button
          type="button"
          class="teacher-class-action-btn"
          data-class-action="attendance"
        >
          <span>📅</span>
          <span>Attendance</span>
        </button>


        <button
          type="button"
          class="teacher-class-action-btn"
          data-class-action="assignments"
        >
          <span>📝</span>
          <span>Assignments</span>
        </button>


        <button
          type="button"
          class="teacher-class-action-btn"
          data-class-action="results"
        >
          <span>🏆</span>
          <span>Results</span>
        </button>

      </div>

    </article>
  `
}


/* =========================================================
   LIST
========================================================= */

function renderTeacherClassesList() {
  return teacherClassesData
    .map(createClassCard)
    .join("")
}


/* =========================================================
   FORM
========================================================= */

function renderClassForm(editId = null) {
  const existing = editId
    ? teacherClassesData.find(item => item.id === editId)
    : null

  return `
    <div class="teacher-classes-page">

      ${teacherClassesSidebar("classes")}

      <main class="teacher-dashboard-main">

        <header class="teacher-dashboard-header">

          <button
            type="button"
            class="teacher-mobile-menu"
            id="teacherClassesMobileMenu"
            aria-label="Open menu"
          >
            ☰
          </button>

          <div>
            <h2>
              ${existing ? "Edit Class" : "Add Class"}
            </h2>
          </div>

        </header>


        <section class="teacher-classes-content">

          <div class="teacher-class-form-card">

            <h2 class="teacher-form-title">
              ${existing ? "Edit Class Details" : "Add New Class"}
            </h2>

            <form
              id="teacherClassForm"
              data-edit-id="${existing ? existing.id : ""}"
            >

              <div class="teacher-form-grid">

                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Class
                  </label>

                  <select
                    class="teacher-form-select"
                    name="className"
                    required
                  >
                    <option value="">
                      Select Class
                    </option>

                    <option
                      value="Class 9"
                      ${existing?.className === "Class 9" ? "selected" : ""}
                    >
                      Class 9
                    </option>

                    <option
                      value="Class 10"
                      ${existing?.className === "Class 10" ? "selected" : ""}
                    >
                      Class 10
                    </option>

                  </select>

                </div>


                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Section
                  </label>

                  <select
                    class="teacher-form-select"
                    name="section"
                    required
                  >
                    <option value="">
                      Select Section
                    </option>

                    <option
                      value="Section A"
                      ${existing?.section === "Section A" ? "selected" : ""}
                    >
                      Section A
                    </option>

                    <option
                      value="Section B"
                      ${existing?.section === "Section B" ? "selected" : ""}
                    >
                      Section B
                    </option>

                  </select>

                </div>


                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Subject
                  </label>

                  <input
                    class="teacher-form-input"
                    type="text"
                    name="subject"
                    value="${existing?.subject || ""}"
                    placeholder="Enter subject"
                    required
                  />

                </div>


                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Students
                  </label>

                  <input
                    class="teacher-form-input"
                    type="number"
                    name="students"
                    min="1"
                    value="${existing?.students || ""}"
                    placeholder="Number of students"
                    required
                  />

                </div>


                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Attendance
                  </label>

                  <input
                    class="teacher-form-input"
                    type="text"
                    name="attendance"
                    value="${existing?.attendance || ""}"
                    placeholder="Example: 95%"
                    required
                  />

                </div>


                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Result
                  </label>

                  <input
                    class="teacher-form-input"
                    type="text"
                    name="result"
                    value="${existing?.result || ""}"
                    placeholder="Example: 82%"
                    required
                  />

                </div>


                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Room
                  </label>

                  <input
                    class="teacher-form-input"
                    type="text"
                    name="room"
                    value="${existing?.room || ""}"
                    placeholder="Example: Room 101"
                    required
                  />

                </div>


                <div class="teacher-form-group">

                  <label class="teacher-form-label">
                    Time
                  </label>

                  <input
                    class="teacher-form-input"
                    type="text"
                    name="time"
                    value="${existing?.time || ""}"
                    placeholder="Example: 10:00 AM - 10:45 AM"
                    required
                  />

                </div>

              </div>


              <div class="teacher-form-actions">

                <button
                  type="button"
                  class="teacher-form-cancel"
                  data-class-action="cancel-form"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  class="teacher-form-save"
                >
                  ${existing ? "Update Class" : "Add Class"}
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>
  `
}


/* =========================================================
   MAIN PAGE
========================================================= */

export function TeacherClasses() {
  loadTeacherClassesCSS()

  return `
    <div class="teacher-classes-page">

      ${teacherClassesSidebar("classes")}

      <main class="teacher-dashboard-main">

        <header class="teacher-dashboard-header">

          <button
            type="button"
            class="teacher-mobile-menu"
            id="teacherClassesMobileMenu"
            aria-label="Open menu"
          >
            ☰
          </button>

          <div>
            <h2>My Classes</h2>
            <p>Manage your assigned classes</p>
          </div>

        </header>


        <section class="teacher-classes-content">

          <div class="teacher-classes-title-row">

            <div>

              <h1 class="teacher-classes-title">
                My Classes
              </h1>

              <p class="teacher-classes-subtitle">
                View and manage your assigned classes
              </p>

            </div>


            <button
              type="button"
              class="teacher-add-class-btn"
              data-class-action="add"
            >
              <span>＋</span>
              <span>Add Class</span>
            </button>

          </div>


          <div class="teacher-class-list">
            ${renderTeacherClassesList()}
          </div>

        </section>

      </main>

    </div>
  `
}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupTeacherClassesMobileMenu() {
  const sidebar = document.getElementById(
    "teacherClassesSidebar"
  )

  const menu = document.getElementById(
    "teacherClassesMobileMenu"
  )

  const close = document.getElementById(
    "teacherClassesMobileClose"
  )

  const overlay = document.getElementById(
    "teacherClassesSidebarOverlay"
  )

  if (!sidebar || !menu) return

  const openSidebar = event => {
    event?.preventDefault()
    event?.stopPropagation()

    sidebar.classList.add("teacher-mobile-open")

    if (overlay) {
      overlay.classList.add("active")
    }
  }

  const closeSidebar = event => {
    event?.preventDefault()
    event?.stopPropagation()

    sidebar.classList.remove("teacher-mobile-open")

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

  /* Mobile page load par sidebar closed rahe */
  sidebar.classList.remove("teacher-mobile-open")

  if (overlay) {
    overlay.classList.remove("active")
  }
}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function navigateFromClassCard(page) {
  const navButton = document.querySelector(
    `[data-page="${page}"]`
  )

  if (!navButton) {
    console.warn(
      `Teacher navigation button not found: ${page}`
    )
    return
  }

  navButton.click()
}


/* =========================================================
   CLASS CLICK HANDLER
========================================================= */

function handleTeacherClassClick(event) {
  const actionButton = event.target.closest(
    "[data-class-action]"
  )

  if (!actionButton) return

  event.preventDefault()
  event.stopPropagation()

  const action = actionButton.dataset.classAction

  const id = Number(
    actionButton.dataset.id || 0
  )


  /* ADD */

  if (action === "add") {
    const app = document.getElementById("app")

    if (!app) return

    app.innerHTML = renderClassForm()

    setupTeacherClasses()

    return
  }


  /* EDIT */

  if (action === "edit") {
    const app = document.getElementById("app")

    if (!app) return

    const existing = teacherClassesData.find(
      item => item.id === id
    )

    if (!existing) return

    app.innerHTML = renderClassForm(id)

    setupTeacherClasses()

    return
  }


  /* DELETE */

  if (action === "delete") {
    const index = teacherClassesData.findIndex(
      item => item.id === id
    )

    if (index === -1) return

    const classItem = teacherClassesData[index]

    const confirmed = window.confirm(
      `Are you sure you want to delete ${classItem.className} - ${classItem.section}?`
    )

    if (!confirmed) return

    teacherClassesData.splice(index, 1)

    refreshTeacherClasses()

    return
  }


  /* STUDENTS */

  if (action === "students") {
    navigateFromClassCard("students")
    return
  }


  /* ATTENDANCE */

  if (action === "attendance") {
    navigateFromClassCard("attendance")
    return
  }


  /* ASSIGNMENTS */

  if (action === "assignments") {
    navigateFromClassCard("assignments")
    return
  }


  /* RESULTS */

  if (action === "results") {
    navigateFromClassCard("results")
    return
  }


  /* CANCEL */

  if (action === "cancel-form") {
    window.teacherEditingClassId = null

    refreshTeacherClasses()

    return
  }
}


/* =========================================================
   FORM SUBMIT
========================================================= */

function handleTeacherClassSubmit(event) {
  const form = event.target.closest(
    "#teacherClassForm"
  )

  if (!form) return

  event.preventDefault()
  event.stopPropagation()

  const formData = new FormData(form)

  const className = String(
    formData.get("className") || ""
  ).trim()

  const section = String(
    formData.get("section") || ""
  ).trim()

  const subject = String(
    formData.get("subject") || ""
  ).trim()

  const students = Number(
    formData.get("students")
  )

  const attendance = String(
    formData.get("attendance") || ""
  ).trim()

  const result = String(
    formData.get("result") || ""
  ).trim()

  const room = String(
    formData.get("room") || ""
  ).trim()

  const time = String(
    formData.get("time") || ""
  ).trim()


  if (
    !className ||
    !section ||
    !subject ||
    !students ||
    !attendance ||
    !result ||
    !room ||
    !time
  ) {
    return
  }


  const editId = Number(
    form.dataset.editId || 0
  )


  /* UPDATE */

  if (editId) {
    const item = teacherClassesData.find(
      classItem => classItem.id === editId
    )

    if (item) {
      item.className = className
      item.section = section
      item.subject = subject
      item.students = students
      item.attendance = attendance
      item.result = result
      item.room = room
      item.time = time
    }

    window.teacherEditingClassId = null

    refreshTeacherClasses()

    return
  }


  /* ADD */

  const newId =
    teacherClassesData.length > 0
      ? Math.max(
          ...teacherClassesData.map(
            item => item.id
          )
        ) + 1
      : 1


  teacherClassesData.push({
    id: newId,
    className,
    section,
    subject,
    students,
    attendance,
    result,
    room,
    time
  })


  refreshTeacherClasses()
}


/* =========================================================
   REFRESH
========================================================= */

function refreshTeacherClasses() {
  const app = document.getElementById("app")

  if (!app) return

  window.teacherEditingClassId = null

  app.innerHTML = TeacherClasses()

  setupTeacherClasses()
}


/* =========================================================
   SETUP
========================================================= */

export function setupTeacherClasses() {
  loadTeacherClassesCSS()

  const app = document.getElementById("app")

  if (!app) return


  /* REMOVE OLD CLICK HANDLER */

  if (teacherClassesClickHandler) {
    app.removeEventListener(
      "click",
      teacherClassesClickHandler
    )
  }


  /* ADD NEW CLICK HANDLER */

  teacherClassesClickHandler =
    handleTeacherClassClick

  app.addEventListener(
    "click",
    teacherClassesClickHandler
  )


  /* REMOVE OLD SUBMIT HANDLER */

  if (teacherClassesSubmitHandler) {
    app.removeEventListener(
      "submit",
      teacherClassesSubmitHandler
    )
  }


  /* ADD FORM SUBMIT HANDLER */

  teacherClassesSubmitHandler =
    handleTeacherClassSubmit

  app.addEventListener(
    "submit",
    teacherClassesSubmitHandler
  )


  /* MOBILE MENU */

  setupTeacherClassesMobileMenu()
}