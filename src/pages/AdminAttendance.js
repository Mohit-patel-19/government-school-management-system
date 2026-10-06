/* =========================================
   ADMIN ATTENDANCE MODULE
   Students + Teachers + Employees
========================================= */

import "./AdminStudents.css";

/* =========================================
   DEMO DATA
========================================= */

const attendanceStudents = [
  {
    id: 1,
    name: "Aarav Sharma",
    rollNo: "101",
    className: "10",
    section: "A"
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNo: "102",
    className: "10",
    section: "A"
  },
  {
    id: 3,
    name: "Rahul Meena",
    rollNo: "103",
    className: "10",
    section: "A"
  },
  {
    id: 4,
    name: "Neha Kumari",
    rollNo: "104",
    className: "10",
    section: "A"
  },
  {
    id: 5,
    name: "Mohit Singh",
    rollNo: "105",
    className: "10",
    section: "A"
  },
  {
    id: 6,
    name: "Anjali Sharma",
    rollNo: "106",
    className: "10",
    section: "B"
  },
  {
    id: 7,
    name: "Vikas Yadav",
    rollNo: "107",
    className: "10",
    section: "B"
  },
  {
    id: 8,
    name: "Pooja Kumari",
    rollNo: "108",
    className: "10",
    section: "B"
  },
  {
    id: 9,
    name: "Ravi Patel",
    rollNo: "109",
    className: "9",
    section: "A"
  },
  {
    id: 10,
    name: "Kiran Meena",
    rollNo: "110",
    className: "9",
    section: "A"
  },
  {
    id: 11,
    name: "Deepak Sharma",
    rollNo: "111",
    className: "9",
    section: "B"
  },
  {
    id: 12,
    name: "Riya Jain",
    rollNo: "112",
    className: "9",
    section: "B"
  }
];

const attendanceTeachers = [
  {
    id: 1,
    employeeId: "TCH001",
    name: "Rajesh Kumar",
    subject: "Mathematics",
    designation: "Senior Teacher"
  },
  {
    id: 2,
    employeeId: "TCH002",
    name: "Sunita Sharma",
    subject: "Science",
    designation: "Teacher"
  },
  {
    id: 3,
    employeeId: "TCH003",
    name: "Anil Meena",
    subject: "English",
    designation: "Teacher"
  },
  {
    id: 4,
    employeeId: "TCH004",
    name: "Kavita Patel",
    subject: "Hindi",
    designation: "Senior Teacher"
  },
  {
    id: 5,
    employeeId: "TCH005",
    name: "Ramesh Singh",
    subject: "Computer",
    designation: "Teacher"
  }
];

const attendanceEmployees = [
  {
    id: 1,
    employeeId: "EMP001",
    name: "Suresh Kumar",
    designation: "Clerk",
    department: "Administration"
  },
  {
    id: 2,
    employeeId: "EMP002",
    name: "Kamla Devi",
    designation: "Peon",
    department: "Support Staff"
  },
  {
    id: 3,
    employeeId: "EMP003",
    name: "Rakesh Sharma",
    designation: "Lab Assistant",
    department: "Laboratory"
  },
  {
    id: 4,
    employeeId: "EMP004",
    name: "Geeta Kumari",
    designation: "Librarian",
    department: "Library"
  },
  {
    id: 5,
    employeeId: "EMP005",
    name: "Mohan Lal",
    designation: "Helper",
    department: "Support Staff"
  }
];

/* =========================================
   STATE
========================================= */

let attendanceType = "students";
let attendanceDate = getTodayDate();

let studentClassFilter = "all";
let studentSectionFilter = "all";
let attendanceSearch = "";

let teacherSearch = "";
let employeeSearch = "";

/* =========================================
   STORAGE
========================================= */

const STORAGE_KEY = "government_school_attendance";

function getAttendanceData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return {};
    }

    const parsed = JSON.parse(data);

    if (!parsed || typeof parsed !== "object") {
      return {};
    }

    return parsed;
  } catch (error) {
    console.error("Attendance storage read error:", error);
    return {};
  }
}

function saveAttendanceData(data) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

    return true;
  } catch (error) {
    console.error("Attendance storage save error:", error);
    return false;
  }
}

/* =========================================
   DATE
========================================= */

function getTodayDate() {
  const date = new Date();

  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================
   GET PERSON KEY
========================================= */

function getPersonKey(type, person) {
  if (type === "students") {
    return `student_${person.id}`;
  }

  if (type === "teachers") {
    return `teacher_${person.id}`;
  }

  return `employee_${person.id}`;
}

/* =========================================
   GET PERSON LIST
========================================= */

function getCurrentPeople() {
  if (attendanceType === "students") {
    return attendanceStudents.filter((student) => {

      const classMatch =
        studentClassFilter === "all" ||
        student.className === studentClassFilter;

      const sectionMatch =
        studentSectionFilter === "all" ||
        student.section === studentSectionFilter;

      const searchMatch =
        attendanceSearch.trim() === "" ||
        student.name
          .toLowerCase()
          .includes(
            attendanceSearch.toLowerCase()
          ) ||
        student.rollNo
          .toLowerCase()
          .includes(
            attendanceSearch.toLowerCase()
          );

      return (
        classMatch &&
        sectionMatch &&
        searchMatch
      );
    });
  }

  if (attendanceType === "teachers") {
    return attendanceTeachers.filter((teacher) => {

      if (teacherSearch.trim() === "") {
        return true;
      }

      const search =
        teacherSearch.toLowerCase();

      return (
        teacher.name
          .toLowerCase()
          .includes(search) ||
        teacher.employeeId
          .toLowerCase()
          .includes(search) ||
        teacher.subject
          .toLowerCase()
          .includes(search)
      );
    });
  }

  return attendanceEmployees.filter((employee) => {

    if (employeeSearch.trim() === "") {
      return true;
    }

    const search =
      employeeSearch.toLowerCase();

    return (
      employee.name
        .toLowerCase()
        .includes(search) ||
      employee.employeeId
        .toLowerCase()
        .includes(search) ||
      employee.designation
        .toLowerCase()
        .includes(search) ||
      employee.department
        .toLowerCase()
        .includes(search)
    );
  });
}

/* =========================================
   GET STATUS
========================================= */

function getStatus(person) {
  const data = getAttendanceData();

  const dateData =
    data[attendanceDate] || {};

  const typeData =
    dateData[attendanceType] || {};

  const key =
    getPersonKey(
      attendanceType,
      person
    );

  return typeData[key] || "present";
}

/* =========================================
   STATUS CLASS
========================================= */

function getStatusClass(status) {
  if (status === "present") {
    return "attendance-status-present";
  }

  if (status === "absent") {
    return "attendance-status-absent";
  }

  if (status === "leave") {
    return "attendance-status-leave";
  }

  if (status === "late") {
    return "attendance-status-late";
  }

  return "";
}

/* =========================================
   SET STATUS
========================================= */

function setPersonStatus(
  type,
  personId,
  status
) {
  const data = getAttendanceData();

  if (!data[attendanceDate]) {
    data[attendanceDate] = {};
  }

  if (!data[attendanceDate][type]) {
    data[attendanceDate][type] = {};
  }

  const key =
    type === "students"
      ? `student_${personId}`
      : type === "teachers"
        ? `teacher_${personId}`
        : `employee_${personId}`;

  data[attendanceDate][type][key] =
    status;

  saveAttendanceData(data);
}

/* =========================================
   CALCULATE SUMMARY
========================================= */

function calculateSummary(people) {
  let present = 0;
  let absent = 0;
  let leave = 0;
  let late = 0;

  people.forEach((person) => {
    const status =
      getStatus(person);

    if (status === "present") {
      present++;
    } else if (status === "absent") {
      absent++;
    } else if (status === "leave") {
      leave++;
    } else if (status === "late") {
      late++;
    }
  });

  return {
    total: people.length,
    present,
    absent,
    leave,
    late
  };
}

/* =========================================
   MAIN COMPONENT
========================================= */

export function AdminAttendance() {

  return `
    <div class="admin-attendance">

      <!-- HEADER -->
      <div class="attendance-page-header">

        <div>
          <div class="attendance-breadcrumb">
            Admin / Attendance
          </div>

          <h1>
            Attendance Management
          </h1>

          <p>
            Manage student, teacher and employee attendance.
          </p>
        </div>

        <div class="attendance-header-date">
          <span>Selected Date</span>

          <strong id="attendance-header-date">
            ${escapeHTML(attendanceDate)}
          </strong>
        </div>

      </div>


      <!-- TYPE TABS -->
      <div class="attendance-type-tabs">

        <button
          type="button"
          class="attendance-type-tab active"
          data-attendance-type="students"
        >
          <span>🎓</span>
          <div>
            <strong>Students</strong>
            <small>Student Attendance</small>
          </div>
        </button>

        <button
          type="button"
          class="attendance-type-tab"
          data-attendance-type="teachers"
        >
          <span>👨‍🏫</span>
          <div>
            <strong>Teachers</strong>
            <small>Teacher Attendance</small>
          </div>
        </button>

        <button
          type="button"
          class="attendance-type-tab"
          data-attendance-type="employees"
        >
          <span>👨‍💼</span>
          <div>
            <strong>Employees</strong>
            <small>Staff Attendance</small>
          </div>
        </button>

      </div>


      <!-- SUMMARY -->
      <div
        class="attendance-summary-grid"
        id="attendance-summary"
      >
        ${renderSummary()}
      </div>


      <!-- CONTROLS -->
      <div class="attendance-control-card">

        <div class="attendance-controls">

          <div class="attendance-control-group">
            <label for="attendance-date">
              Attendance Date
            </label>

            <input
              type="date"
              id="attendance-date"
              value="${escapeHTML(attendanceDate)}"
            />
          </div>


          <div
            class="attendance-student-filter"
            id="student-attendance-filters"
          >

            <div class="attendance-control-group">

              <label for="attendance-class">
                Class
              </label>

              <select id="attendance-class">

                <option value="all">
                  All Classes
                </option>

                <option value="9">
                  Class 9
                </option>

                <option value="10">
                  Class 10
                </option>

              </select>

            </div>


            <div class="attendance-control-group">

              <label for="attendance-section">
                Section
              </label>

              <select id="attendance-section">

                <option value="all">
                  All Sections
                </option>

                <option value="A">
                  Section A
                </option>

                <option value="B">
                  Section B
                </option>

              </select>

            </div>

          </div>


          <div class="attendance-control-group attendance-search-group">

            <label>
              Search
            </label>

            <input
              type="text"
              id="attendance-search"
              placeholder="Search name / ID..."
            />

          </div>


          <div class="attendance-control-actions">

            <button
              type="button"
              class="admin-btn admin-btn-secondary"
              id="attendance-refresh"
            >
              🔄 Refresh
            </button>

            <button
              type="button"
              class="admin-btn admin-btn-primary"
              id="attendance-mark-all"
            >
              ✓ Mark All Present
            </button>

          </div>

        </div>

      </div>


      <!-- ATTENDANCE TABLE -->
      <div class="attendance-table-card">

        <div class="attendance-table-header">

          <div>
            <h2 id="attendance-table-title">
              Student Attendance
            </h2>

            <p id="attendance-table-subtitle">
              Mark attendance for selected date.
            </p>
          </div>

          <button
            type="button"
            class="admin-btn admin-btn-primary"
            id="attendance-save"
          >
            💾 Save Attendance
          </button>

        </div>


        <div
          class="attendance-table-wrapper"
          id="attendance-table-container"
        >
          ${renderAttendanceTable()}
        </div>

      </div>


      <!-- HISTORY -->
      <div class="attendance-history-card">

        <div class="attendance-history-header">

          <div>
            <h2>
              Attendance History
            </h2>

            <p>
              View previously recorded attendance.
            </p>
          </div>

          <button
            type="button"
            class="admin-btn admin-btn-secondary"
            id="attendance-history-refresh"
          >
            🔄 Refresh History
          </button>

        </div>

        <div
          id="attendance-history-container"
        >
          ${renderHistory()}
        </div>

      </div>

    </div>
  `;
}

/* =========================================
   SUMMARY HTML
========================================= */

function renderSummary() {

  const people =
    getCurrentPeople();

  const summary =
    calculateSummary(people);

  return `

    <div class="attendance-summary-card total">
      <div class="attendance-summary-icon">
        👥
      </div>

      <div>
        <span>Total</span>
        <strong>${summary.total}</strong>
      </div>
    </div>


    <div class="attendance-summary-card present">
      <div class="attendance-summary-icon">
        ✓
      </div>

      <div>
        <span>Present</span>
        <strong>${summary.present}</strong>
      </div>
    </div>


    <div class="attendance-summary-card absent">
      <div class="attendance-summary-icon">
        ✕
      </div>

      <div>
        <span>Absent</span>
        <strong>${summary.absent}</strong>
      </div>
    </div>


    <div class="attendance-summary-card leave">
      <div class="attendance-summary-icon">
        📝
      </div>

      <div>
        <span>Leave</span>
        <strong>${summary.leave}</strong>
      </div>
    </div>


    <div class="attendance-summary-card late">
      <div class="attendance-summary-icon">
        ⏰
      </div>

      <div>
        <span>Late</span>
        <strong>${summary.late}</strong>
      </div>
    </div>

  `;
}

/* =========================================
   ATTENDANCE TABLE
========================================= */

function renderAttendanceTable() {

  const people =
    getCurrentPeople();

  if (people.length === 0) {

    return `
      <div class="attendance-empty-state">

        <div class="attendance-empty-icon">
          🔍
        </div>

        <h3>
          No Records Found
        </h3>

        <p>
          No attendance records match the selected filters.
        </p>

      </div>
    `;
  }

  if (attendanceType === "students") {

    return `
      <table class="attendance-table">

        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Roll No.</th>
            <th>Class</th>
            <th>Section</th>
            <th>Attendance Status</th>
          </tr>
        </thead>

        <tbody>

          ${people.map((student, index) => {

            const status =
              getStatus(student);

            return `
              <tr>

                <td>
                  ${index + 1}
                </td>

                <td>
                  <div class="attendance-person-cell">

                    <div class="attendance-avatar">
                      ${escapeHTML(
                        student.name
                          .charAt(0)
                          .toUpperCase()
                      )}
                    </div>

                    <div>
                      <strong>
                        ${escapeHTML(student.name)}
                      </strong>

                      <small>
                        Student
                      </small>
                    </div>

                  </div>
                </td>

                <td>
                  ${escapeHTML(student.rollNo)}
                </td>

                <td>
                  Class ${escapeHTML(student.className)}
                </td>

                <td>
                  ${escapeHTML(student.section)}
                </td>

                <td>
                  ${renderStatusButtons(
                    "students",
                    student.id,
                    status
                  )}
                </td>

              </tr>
            `;

          }).join("")}

        </tbody>

      </table>
    `;
  }


  if (attendanceType === "teachers") {

    return `
      <table class="attendance-table">

        <thead>
          <tr>
            <th>#</th>
            <th>Teacher</th>
            <th>Employee ID</th>
            <th>Subject</th>
            <th>Designation</th>
            <th>Attendance Status</th>
          </tr>
        </thead>

        <tbody>

          ${people.map((teacher, index) => {

            const status =
              getStatus(teacher);

            return `
              <tr>

                <td>
                  ${index + 1}
                </td>

                <td>
                  <div class="attendance-person-cell">

                    <div class="attendance-avatar">
                      ${escapeHTML(
                        teacher.name
                          .charAt(0)
                          .toUpperCase()
                      )}
                    </div>

                    <div>
                      <strong>
                        ${escapeHTML(teacher.name)}
                      </strong>

                      <small>
                        Teacher
                      </small>
                    </div>

                  </div>
                </td>

                <td>
                  ${escapeHTML(
                    teacher.employeeId
                  )}
                </td>

                <td>
                  ${escapeHTML(
                    teacher.subject
                  )}
                </td>

                <td>
                  ${escapeHTML(
                    teacher.designation
                  )}
                </td>

                <td>
                  ${renderStatusButtons(
                    "teachers",
                    teacher.id,
                    status
                  )}
                </td>

              </tr>
            `;

          }).join("")}

        </tbody>

      </table>
    `;
  }


  return `
    <table class="attendance-table">

      <thead>
        <tr>
          <th>#</th>
          <th>Employee</th>
          <th>Employee ID</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Attendance Status</th>
        </tr>
      </thead>

      <tbody>

        ${people.map((employee, index) => {

          const status =
            getStatus(employee);

          return `
            <tr>

              <td>
                ${index + 1}
              </td>

              <td>
                <div class="attendance-person-cell">

                  <div class="attendance-avatar">
                    ${escapeHTML(
                      employee.name
                        .charAt(0)
                        .toUpperCase()
                    )}
                  </div>

                  <div>
                    <strong>
                      ${escapeHTML(
                        employee.name
                      )}
                    </strong>

                    <small>
                      Employee
                    </small>
                  </div>

                </div>
              </td>

              <td>
                ${escapeHTML(
                  employee.employeeId
                )}
              </td>

              <td>
                ${escapeHTML(
                  employee.designation
                )}
              </td>

              <td>
                ${escapeHTML(
                  employee.department
                )}
              </td>

              <td>
                ${renderStatusButtons(
                  "employees",
                  employee.id,
                  status
                )}
              </td>

            </tr>
          `;

        }).join("")}

      </tbody>

    </table>
  `;
}

/* =========================================
   STATUS BUTTONS
========================================= */

function renderStatusButtons(
  type,
  personId,
  currentStatus
) {

  const statuses = [
    {
      value: "present",
      label: "Present",
      icon: "✓"
    },
    {
      value: "absent",
      label: "Absent",
      icon: "✕"
    },
    {
      value: "leave",
      label: "Leave",
      icon: "📝"
    },
    {
      value: "late",
      label: "Late",
      icon: "⏰"
    }
  ];

  return `
    <div class="attendance-status-buttons">

      ${statuses.map((item) => {

        const active =
          currentStatus === item.value
            ? "active"
            : "";

        return `
          <button
            type="button"
            class="attendance-status-btn ${item.value} ${active}"
            data-attendance-status="${item.value}"
            data-attendance-type="${type}"
            data-person-id="${personId}"
            title="${item.label}"
          >
            <span>${item.icon}</span>
            <span>${item.label}</span>
          </button>
        `;

      }).join("")}

    </div>
  `;
}

/* =========================================
   HISTORY
========================================= */

function renderHistory() {

  const data =
    getAttendanceData();

  const dates =
    Object.keys(data)
      .sort()
      .reverse();

  if (dates.length === 0) {

    return `
      <div class="attendance-history-empty">
        No attendance history available yet.
      </div>
    `;
  }

  return `
    <div class="attendance-history-table-wrapper">

      <table class="attendance-history-table">

        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Total</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Leave</th>
            <th>Late</th>
            <th>Percentage</th>
          </tr>
        </thead>

        <tbody>

          ${dates.map((date) => {

            const typeData =
              data[date] || {};

            return renderHistoryDate(
              date,
              typeData,
              "students",
              "Students"
            ) +
            renderHistoryDate(
              date,
              typeData,
              "teachers",
              "Teachers"
            ) +
            renderHistoryDate(
              date,
              typeData,
              "employees",
              "Employees"
            );

          }).join("")}

        </tbody>

      </table>

    </div>
  `;
}

function renderHistoryDate(
  date,
  dateData,
  type,
  label
) {

  const typeData =
    dateData[type];

  if (
    !typeData ||
    Object.keys(typeData).length === 0
  ) {
    return "";
  }

  const values =
    Object.values(typeData);

  const total =
    values.length;

  const present =
    values.filter(
      (value) => value === "present"
    ).length;

  const absent =
    values.filter(
      (value) => value === "absent"
    ).length;

  const leave =
    values.filter(
      (value) => value === "leave"
    ).length;

  const late =
    values.filter(
      (value) => value === "late"
    ).length;

  const percentage =
    total > 0
      ? Math.round(
          (present / total) * 100
        )
      : 0;

  return `
    <tr>

      <td>
        ${escapeHTML(date)}
      </td>

      <td>
        <span class="attendance-history-category">
          ${label}
        </span>
      </td>

      <td>
        ${total}
      </td>

      <td class="history-present">
        ${present}
      </td>

      <td class="history-absent">
        ${absent}
      </td>

      <td class="history-leave">
        ${leave}
      </td>

      <td class="history-late">
        ${late}
      </td>

      <td>
        <strong>
          ${percentage}%
        </strong>
      </td>

    </tr>
  `;
}

/* =========================================
   UPDATE UI
========================================= */

function updateAttendanceUI() {

  const summary =
    document.querySelector(
      "#attendance-summary"
    );

  const table =
    document.querySelector(
      "#attendance-table-container"
    );

  const history =
    document.querySelector(
      "#attendance-history-container"
    );

  if (summary) {
    summary.innerHTML =
      renderSummary();
  }

  if (table) {
    table.innerHTML =
      renderAttendanceTable();
  }

  if (history) {
    history.innerHTML =
      renderHistory();
  }

  updateTitles();

  updateFilterVisibility();

  bindStatusButtons();
}

/* =========================================
   UPDATE TITLES
========================================= */

function updateTitles() {

  const title =
    document.querySelector(
      "#attendance-table-title"
    );

  const subtitle =
    document.querySelector(
      "#attendance-table-subtitle"
    );

  if (title) {

    if (attendanceType === "students") {
      title.textContent =
        "Student Attendance";
    } else if (
      attendanceType === "teachers"
    ) {
      title.textContent =
        "Teacher Attendance";
    } else {
      title.textContent =
        "Employee Attendance";
    }
  }

  if (subtitle) {

    subtitle.textContent =
      `Mark attendance for ${attendanceDate}.`;
  }

  const headerDate =
    document.querySelector(
      "#attendance-header-date"
    );

  if (headerDate) {
    headerDate.textContent =
      attendanceDate;
  }
}

/* =========================================
   FILTER VISIBILITY
========================================= */

function updateFilterVisibility() {

  const studentFilters =
    document.querySelector(
      "#student-attendance-filters"
    );

  if (!studentFilters) {
    return;
  }

  if (attendanceType === "students") {
    studentFilters.style.display =
      "flex";
  } else {
    studentFilters.style.display =
      "none";
  }
}

/* =========================================
   TAB ACTIVE STATE
========================================= */

function updateTabs() {

  document
    .querySelectorAll(
      ".attendance-type-tab"
    )
    .forEach((tab) => {

      const type =
        tab.dataset.attendanceType;

      tab.classList.toggle(
        "active",
        type === attendanceType
      );
    });
}

/* =========================================
   STATUS BUTTON EVENTS
========================================= */

function bindStatusButtons() {

  document
    .querySelectorAll(
      "[data-attendance-status]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const type =
            button.dataset
              .attendanceType;

          const personId =
            Number(
              button.dataset.personId
            );

          const status =
            button.dataset
              .attendanceStatus;

          setPersonStatus(
            type,
            personId,
            status
          );

          updateAttendanceUI();

        }
      );

    });
}

/* =========================================
   MARK ALL PRESENT
========================================= */

function markAllPresent() {

  const people =
    getCurrentPeople();

  if (people.length === 0) {
    return;
  }

  const data =
    getAttendanceData();

  if (!data[attendanceDate]) {
    data[attendanceDate] = {};
  }

  if (!data[attendanceDate][attendanceType]) {
    data[attendanceDate][attendanceType] = {};
  }

  people.forEach((person) => {

    const key =
      getPersonKey(
        attendanceType,
        person
      );

    data[attendanceDate][attendanceType][key] =
      "present";
  });

  saveAttendanceData(data);

  updateAttendanceUI();

  showAttendanceMessage(
    "All visible records marked Present."
  );
}

/* =========================================
   SAVE ATTENDANCE
========================================= */

function saveCurrentAttendance() {

  const people =
    getCurrentPeople();

  if (people.length === 0) {

    showAttendanceMessage(
      "No attendance records to save.",
      "error"
    );

    return;
  }

  const data =
    getAttendanceData();

  if (!data[attendanceDate]) {
    data[attendanceDate] = {};
  }

  if (!data[attendanceDate][attendanceType]) {
    data[attendanceDate][attendanceType] = {};
  }

  people.forEach((person) => {

    const key =
      getPersonKey(
        attendanceType,
        person
      );

    if (
      !data[attendanceDate][attendanceType][key]
    ) {
      data[attendanceDate][attendanceType][key] =
        "present";
    }

  });

  const success =
    saveAttendanceData(data);

  if (success) {

    showAttendanceMessage(
      "Attendance saved successfully."
    );

    updateAttendanceUI();

  } else {

    showAttendanceMessage(
      "Unable to save attendance.",
      "error"
    );
  }
}

/* =========================================
   MESSAGE
========================================= */

function showAttendanceMessage(
  message,
  type = "success"
) {

  const oldMessage =
    document.querySelector(
      ".attendance-toast"
    );

  if (oldMessage) {
    oldMessage.remove();
  }

  const toast =
    document.createElement("div");

  toast.className =
    `attendance-toast ${type}`;

  toast.textContent =
    message;

  document.body.appendChild(toast);

  setTimeout(() => {

    toast.classList.add(
      "show"
    );

  }, 20);

  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 2500);
}

/* =========================================
   SETUP
========================================= */

export function setupAdminAttendance() {

  const root =
    document.querySelector(
      ".admin-attendance"
    );

  if (!root) {
    console.warn(
      "AdminAttendance root not found."
    );

    return;
  }

  /* Reset state */

  attendanceType =
    "students";

  attendanceDate =
    getTodayDate();

  studentClassFilter =
    "all";

  studentSectionFilter =
    "all";

  attendanceSearch =
    "";

  teacherSearch =
    "";

  employeeSearch =
    "";


  /* =====================================
     TYPE TABS
  ===================================== */

  root
    .querySelectorAll(
      "[data-attendance-type]"
    )
    .forEach((tab) => {

      tab.addEventListener(
        "click",
        () => {

          attendanceType =
            tab.dataset
              .attendanceType;

          updateTabs();

          updateAttendanceUI();

        }
      );

    });


  /* =====================================
     DATE
  ===================================== */

  const dateInput =
    root.querySelector(
      "#attendance-date"
    );

  if (dateInput) {

    dateInput.addEventListener(
      "change",
      (event) => {

        if (
          event.target.value
        ) {

          attendanceDate =
            event.target.value;

          updateAttendanceUI();

        }

      }
    );

  }


  /* =====================================
     CLASS
  ===================================== */

  const classSelect =
    root.querySelector(
      "#attendance-class"
    );

  if (classSelect) {

    classSelect.addEventListener(
      "change",
      (event) => {

        studentClassFilter =
          event.target.value;

        updateAttendanceUI();

      }
    );

  }


  /* =====================================
     SECTION
  ===================================== */

  const sectionSelect =
    root.querySelector(
      "#attendance-section"
    );

  if (sectionSelect) {

    sectionSelect.addEventListener(
      "change",
      (event) => {

        studentSectionFilter =
          event.target.value;

        updateAttendanceUI();

      }
    );

  }


  /* =====================================
     SEARCH
  ===================================== */

  const searchInput =
    root.querySelector(
      "#attendance-search"
    );

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      (event) => {

        const value =
          event.target.value;

        if (
          attendanceType ===
          "students"
        ) {

          attendanceSearch =
            value;

        } else if (
          attendanceType ===
          "teachers"
        ) {

          teacherSearch =
            value;

        } else {

          employeeSearch =
            value;

        }

        updateAttendanceUI();

        const newInput =
          document.querySelector(
            "#attendance-search"
          );

        if (newInput) {

          newInput.focus();

          newInput.setSelectionRange(
            newInput.value.length,
            newInput.value.length
          );
        }

      }
    );

  }


  /* =====================================
     REFRESH
  ===================================== */

  const refreshButton =
    root.querySelector(
      "#attendance-refresh"
    );

  if (refreshButton) {

    refreshButton.addEventListener(
      "click",
      () => {

        updateAttendanceUI();

        showAttendanceMessage(
          "Attendance refreshed."
        );

      }
    );

  }


  /* =====================================
     MARK ALL
  ===================================== */

  const markAllButton =
    root.querySelector(
      "#attendance-mark-all"
    );

  if (markAllButton) {

    markAllButton.addEventListener(
      "click",
      markAllPresent
    );

  }


  /* =====================================
     SAVE
  ===================================== */

  const saveButton =
    root.querySelector(
      "#attendance-save"
    );

  if (saveButton) {

    saveButton.addEventListener(
      "click",
      saveCurrentAttendance
    );

  }


  /* =====================================
     HISTORY REFRESH
  ===================================== */

  const historyRefresh =
    root.querySelector(
      "#attendance-history-refresh"
    );

  if (historyRefresh) {

    historyRefresh.addEventListener(
      "click",
      () => {

        const history =
          document.querySelector(
            "#attendance-history-container"
          );

        if (history) {
          history.innerHTML =
            renderHistory();
        }

        showAttendanceMessage(
          "Attendance history refreshed."
        );

      }
    );

  }


  /* Initial UI */

  updateTabs();

  updateFilterVisibility();

  updateTitles();

  bindStatusButtons();
}