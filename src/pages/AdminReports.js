/* =========================================
   ADMIN REPORTS MODULE
========================================= */

import "./AdminMessages.css";


/* =========================================
   REPORT DATA
========================================= */

const reportsData = [
  {
    id: 1,
    student: "Aarav Sharma",
    className: "Class 10",
    section: "A",
    attendance: 96,
    result: 88,
    fees: "Paid",
    status: "Active"
  },
  {
    id: 2,
    student: "Priya Verma",
    className: "Class 10",
    section: "A",
    attendance: 92,
    result: 84,
    fees: "Paid",
    status: "Active"
  },
  {
    id: 3,
    student: "Rahul Meena",
    className: "Class 10",
    section: "B",
    attendance: 87,
    result: 76,
    fees: "Pending",
    status: "Active"
  },
  {
    id: 4,
    student: "Sneha Kumari",
    className: "Class 9",
    section: "A",
    attendance: 95,
    result: 91,
    fees: "Paid",
    status: "Active"
  },
  {
    id: 5,
    student: "Vikas Singh",
    className: "Class 9",
    section: "B",
    attendance: 82,
    result: 69,
    fees: "Pending",
    status: "Active"
  },
  {
    id: 6,
    student: "Neha Patel",
    className: "Class 8",
    section: "A",
    attendance: 94,
    result: 86,
    fees: "Paid",
    status: "Active"
  },
  {
    id: 7,
    student: "Rohan Joshi",
    className: "Class 8",
    section: "B",
    attendance: 89,
    result: 79,
    fees: "Paid",
    status: "Active"
  },
  {
    id: 8,
    student: "Anjali Sharma",
    className: "Class 7",
    section: "A",
    attendance: 97,
    result: 93,
    fees: "Paid",
    status: "Active"
  },
  {
    id: 9,
    student: "Deepak Gurjar",
    className: "Class 7",
    section: "B",
    attendance: 78,
    result: 64,
    fees: "Pending",
    status: "Active"
  },
  {
    id: 10,
    student: "Kavya Jain",
    className: "Class 6",
    section: "A",
    attendance: 91,
    result: 82,
    fees: "Paid",
    status: "Active"
  }
];


/* =========================================
   REPORT TYPES
========================================= */

const reportTypes = [
  {
    id: "overview",
    title: "Overview Report",
    icon: "📊"
  },
  {
    id: "attendance",
    title: "Attendance Report",
    icon: "📅"
  },
  {
    id: "results",
    title: "Results Report",
    icon: "📝"
  },
  {
    id: "fees",
    title: "Fees Report",
    icon: "💰"
  },
  {
    id: "students",
    title: "Student Report",
    icon: "👨‍🎓"
  }
];


/* =========================================
   HELPER - ESCAPE HTML
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
   HELPER - GET REPORT TITLE
========================================= */

function getReportTitle(reportType) {

  const report =
    reportTypes.find(
      item => item.id === reportType
    );


  return report
    ? report.title
    : "Overview Report";

}


/* =========================================
   GET REPORT STATS
========================================= */

function getReportStats(
  data = reportsData
) {

  const totalStudents =
    data.length;


  const averageAttendance =
    totalStudents > 0
      ? (
          data.reduce(
            (total, student) =>
              total +
              Number(student.attendance || 0),
            0
          ) / totalStudents
        ).toFixed(1)
      : "0.0";


  const averageResult =
    totalStudents > 0
      ? (
          data.reduce(
            (total, student) =>
              total +
              Number(student.result || 0),
            0
          ) / totalStudents
        ).toFixed(1)
      : "0.0";


  const paidFees =
    data.filter(
      student =>
        student.fees === "Paid"
    ).length;


  const pendingFees =
    data.filter(
      student =>
        student.fees === "Pending"
    ).length;


  return {
    totalStudents,
    averageAttendance,
    averageResult,
    paidFees,
    pendingFees
  };

}


/* =========================================
   GET FILTER VALUES
========================================= */

function getFilterValues(page) {

  const searchInput =
    page.querySelector(
      "#admin-reports-search"
    );


  const classFilter =
    page.querySelector(
      "#admin-reports-class"
    );


  const sectionFilter =
    page.querySelector(
      "#admin-reports-section"
    );


  const sessionFilter =
    page.querySelector(
      "#admin-reports-session"
    );


  return {

    search:
      searchInput
        ? searchInput.value
            .trim()
            .toLowerCase()
        : "",

    className:
      classFilter
        ? classFilter.value
        : "all",

    section:
      sectionFilter
        ? sectionFilter.value
        : "all",

    session:
      sessionFilter
        ? sessionFilter.value
        : "2026-27"

  };

}


/* =========================================
   FILTER REPORT DATA
========================================= */

function filterReportData(page) {

  const filters =
    getFilterValues(page);


  return reportsData.filter(
    student => {

      const matchesSearch =
        !filters.search ||
        student.student
          .toLowerCase()
          .includes(
            filters.search
          );


      const matchesClass =
        filters.className === "all" ||
        student.className ===
          filters.className;


      const matchesSection =
        filters.section === "all" ||
        student.section ===
          filters.section;


      return (
        matchesSearch &&
        matchesClass &&
        matchesSection
      );

    }
  );

}


/* =========================================
   RENDER REPORT STATS
========================================= */

function renderReportStats(data) {

  const stats =
    getReportStats(data);


  return `

    <div class="admin-reports-stats">


      <!-- TOTAL STUDENTS -->

      <div class="admin-reports-stat-card">

        <div class="admin-reports-stat-icon">
          👨‍🎓
        </div>

        <div>

          <span>
            Total Students
          </span>

          <strong>
            ${stats.totalStudents}
          </strong>

        </div>

      </div>


      <!-- ATTENDANCE -->

      <div class="admin-reports-stat-card">

        <div class="admin-reports-stat-icon">
          📅
        </div>

        <div>

          <span>
            Avg. Attendance
          </span>

          <strong>
            ${stats.averageAttendance}%
          </strong>

        </div>

      </div>


      <!-- RESULT -->

      <div class="admin-reports-stat-card">

        <div class="admin-reports-stat-icon">
          📝
        </div>

        <div>

          <span>
            Avg. Result
          </span>

          <strong>
            ${stats.averageResult}%
          </strong>

        </div>

      </div>


      <!-- PENDING FEES -->

      <div class="admin-reports-stat-card">

        <div class="admin-reports-stat-icon">
          💰
        </div>

        <div>

          <span>
            Pending Fees
          </span>

          <strong>
            ${stats.pendingFees}
          </strong>

        </div>

      </div>


    </div>

  `;

}


/* =========================================
   RENDER OVERVIEW CHART
========================================= */

function renderOverviewChart(data) {

  const stats =
    getReportStats(data);


  const attendance =
    Number(
      stats.averageAttendance
    );


  const result =
    Number(
      stats.averageResult
    );


  const feePercentage =
    data.length > 0
      ? Math.round(
          (
            stats.paidFees /
            data.length
          ) * 100
        )
      : 0;


  return `

    <div class="admin-reports-visual-grid">


      <!-- PERFORMANCE -->

      <div class="admin-reports-chart-card">

        <div class="admin-reports-card-header">

          <div>

            <h3>
              Performance Overview
            </h3>

            <p>
              Current school performance
            </p>

          </div>

        </div>


        <div class="admin-reports-chart">


          <div class="admin-reports-circle">

            <svg
              viewBox="0 0 120 120"
              class="admin-reports-svg"
            >

              <circle
                cx="60"
                cy="60"
                r="48"
                class="admin-reports-circle-bg"
              ></circle>


              <circle
                cx="60"
                cy="60"
                r="48"
                class="admin-reports-circle-progress"
                stroke-dasharray="301.59"
                stroke-dashoffset="${
                  301.59 -
                  (
                    301.59 *
                    attendance
                  ) / 100
                }"
              ></circle>

            </svg>


            <div class="admin-reports-circle-text">

              <strong>
                ${attendance}%
              </strong>

              <span>
                Attendance
              </span>

            </div>

          </div>


          <div class="admin-reports-performance">


            <!-- ATTENDANCE -->

            <div
              class="admin-reports-performance-item"
            >

              <div>

                <span>
                  Attendance
                </span>

                <strong>
                  ${attendance}%
                </strong>

              </div>


              <div
                class="admin-reports-mini-bar"
              >

                <span
                  style="width:${attendance}%"
                ></span>

              </div>

            </div>


            <!-- RESULT -->

            <div
              class="admin-reports-performance-item"
            >

              <div>

                <span>
                  Academic Result
                </span>

                <strong>
                  ${result}%
                </strong>

              </div>


              <div
                class="admin-reports-mini-bar"
              >

                <span
                  style="width:${result}%"
                ></span>

              </div>

            </div>


            <!-- FEES -->

            <div
              class="admin-reports-performance-item"
            >

              <div>

                <span>
                  Fee Collection
                </span>

                <strong>
                  ${feePercentage}%
                </strong>

              </div>


              <div
                class="admin-reports-mini-bar"
              >

                <span
                  style="width:${feePercentage}%"
                ></span>

              </div>

            </div>


          </div>

        </div>

      </div>


      <!-- CLASS PERFORMANCE -->

      ${renderClassSummary(data)}


    </div>

  `;

}


/* =========================================
   CLASS SUMMARY
========================================= */

function renderClassSummary(data) {

  const classes = {};


  data.forEach(
    student => {

      const className =
        student.className;


      if (
        !classes[className]
      ) {

        classes[className] = {

          students: 0,

          attendance: 0,

          result: 0

        };

      }


      classes[className].students += 1;


      classes[className].attendance +=
        Number(
          student.attendance || 0
        );


      classes[className].result +=
        Number(
          student.result || 0
        );

    }
  );


  const classNames =
    Object.keys(classes);


  if (
    classNames.length === 0
  ) {

    return `

      <div class="admin-reports-class-card">

        <div class="admin-reports-card-header">

          <div>

            <h3>
              Class Performance
            </h3>

            <p>
              No class data available
            </p>

          </div>

        </div>

      </div>

    `;

  }


  const rows =
    classNames
      .map(
        className => {

          const item =
            classes[className];


          const avgAttendance =
            (
              item.attendance /
              item.students
            ).toFixed(1);


          const avgResult =
            (
              item.result /
              item.students
            ).toFixed(1);


          return `

            <div
              class="admin-reports-class-row"
            >

              <div>

                <strong>
                  ${escapeHTML(
                    className
                  )}
                </strong>

                <span>
                  ${item.students}
                  Students
                </span>

              </div>


              <div>

                <span>
                  Attendance
                </span>

                <strong>
                  ${avgAttendance}%
                </strong>

              </div>


              <div>

                <span>
                  Result
                </span>

                <strong>
                  ${avgResult}%
                </strong>

              </div>

            </div>

          `;

        }
      )
      .join("");


  return `

    <div class="admin-reports-class-card">

      <div class="admin-reports-card-header">

        <div>

          <h3>
            Class Performance
          </h3>

          <p>
            Class-wise academic summary
          </p>

        </div>

      </div>


      <div class="admin-reports-class-list">

        ${rows}

      </div>

    </div>

  `;

}


/* =========================================
   RENDER TABLE
========================================= */

function renderReportTable(
  data,
  reportType
) {

  if (
    !data.length
  ) {

    return `

      <div class="admin-reports-empty">

        <div class="admin-reports-empty-icon">
          🔍
        </div>

        <h3>
          No records found
        </h3>

        <p>
          Try changing your search or filter options.
        </p>

      </div>

    `;

  }


  let tableHeader = "";

  let tableRows = "";


  /* =========================================
     ATTENDANCE
  ========================================== */

  if (
    reportType === "attendance"
  ) {

    tableHeader = `

      <tr>

        <th>
          #
        </th>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Attendance
        </th>

        <th>
          Status
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          (student, index) => {

            const attendance =
              Number(
                student.attendance
              );


            const status =
              attendance >= 75
                ? "Good"
                : "Low";


            return `

              <tr>

                <td>
                  ${index + 1}
                </td>


                <td>

                  <div
                    class="admin-reports-student"
                  >

                    <div
                      class="admin-reports-avatar"
                    >
                      ${escapeHTML(
                        student.student
                          .charAt(0)
                      )}
                    </div>

                    <strong>
                      ${escapeHTML(
                        student.student
                      )}
                    </strong>

                  </div>

                </td>


                <td>
                  ${escapeHTML(
                    student.className
                  )}
                </td>


                <td>
                  ${escapeHTML(
                    student.section
                  )}
                </td>


                <td>

                  <div
                    class="admin-reports-progress"
                  >

                    <div
                      class="admin-reports-progress-bar"
                      style="width:${attendance}%"
                    ></div>

                  </div>

                  <span>
                    ${attendance}%
                  </span>

                </td>


                <td>

                  <span
                    class="admin-reports-status ${
                      status === "Good"
                        ? "success"
                        : "danger"
                    }"
                  >
                    ${status}
                  </span>

                </td>

              </tr>

            `;

          }
        )
        .join("");

  }


  /* =========================================
     RESULTS
  ========================================== */

  else if (
    reportType === "results"
  ) {

    tableHeader = `

      <tr>

        <th>
          #
        </th>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Average Result
        </th>

        <th>
          Grade
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          (student, index) => {

            const result =
              Number(
                student.result
              );


            let grade = "F";


            if (
              result >= 90
            ) {

              grade = "A+";

            }

            else if (
              result >= 80
            ) {

              grade = "A";

            }

            else if (
              result >= 70
            ) {

              grade = "B";

            }

            else if (
              result >= 60
            ) {

              grade = "C";

            }

            else if (
              result >= 50
            ) {

              grade = "D";

            }


            return `

              <tr>

                <td>
                  ${index + 1}
                </td>


                <td>

                  <div
                    class="admin-reports-student"
                  >

                    <div
                      class="admin-reports-avatar"
                    >
                      ${escapeHTML(
                        student.student
                          .charAt(0)
                      )}
                    </div>

                    <strong>
                      ${escapeHTML(
                        student.student
                      )}
                    </strong>

                  </div>

                </td>


                <td>
                  ${escapeHTML(
                    student.className
                  )}
                </td>


                <td>
                  ${escapeHTML(
                    student.section
                  )}
                </td>


                <td>

                  <strong>
                    ${result}%
                  </strong>

                </td>


                <td>

                  <span
                    class="admin-reports-grade"
                  >
                    ${grade}
                  </span>

                </td>

              </tr>

            `;

          }
        )
        .join("");

  }


  /* =========================================
     FEES
  ========================================== */

  else if (
    reportType === "fees"
  ) {

    tableHeader = `

      <tr>

        <th>
          #
        </th>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Fee Status
        </th>

        <th>
          Payment
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          (student, index) => {

            const isPaid =
              student.fees === "Paid";


            return `

              <tr>

                <td>
                  ${index + 1}
                </td>


                <td>

                  <div
                    class="admin-reports-student"
                  >

                    <div
                      class="admin-reports-avatar"
                    >
                      ${escapeHTML(
                        student.student
                          .charAt(0)
                      )}
                    </div>

                    <strong>
                      ${escapeHTML(
                        student.student
                      )}
                    </strong>

                  </div>

                </td>


                <td>
                  ${escapeHTML(
                    student.className
                  )}
                </td>


                <td>
                  ${escapeHTML(
                    student.section
                  )}
                </td>


                <td>

                  <span
                    class="admin-reports-status ${
                      isPaid
                        ? "success"
                        : "danger"
                    }"
                  >
                    ${escapeHTML(
                      student.fees
                    )}
                  </span>

                </td>


                <td>

                  ${
                    isPaid
                      ? "Completed"
                      : "Pending"
                  }

                </td>

              </tr>

            `;

          }
        )
        .join("");

  }


  /* =========================================
     STUDENTS
  ========================================== */

  else if (
    reportType === "students"
  ) {

    tableHeader = `

      <tr>

        <th>
          #
        </th>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Attendance
        </th>

        <th>
          Result
        </th>

        <th>
          Status
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          (student, index) => {

            return `

              <tr>

                <td>
                  ${index + 1}
                </td>


                <td>

                  <div
                    class="admin-reports-student"
                  >

                    <div
                      class="admin-reports-avatar"
                    >
                      ${escapeHTML(
                        student.student
                          .charAt(0)
                      )}
                    </div>

                    <strong>
                      ${escapeHTML(
                        student.student
                      )}
                    </strong>

                  </div>

                </td>


                <td>
                  ${escapeHTML(
                    student.className
                  )}
                </td>


                <td>
                  ${escapeHTML(
                    student.section
                  )}
                </td>


                <td>
                  ${student.attendance}%
                </td>


                <td>
                  ${student.result}%
                </td>


                <td>

                  <span
                    class="admin-reports-status success"
                  >
                    ${escapeHTML(
                      student.status
                    )}
                  </span>

                </td>

              </tr>

            `;

          }
        )
        .join("");

  }


  /* =========================================
     OVERVIEW
  ========================================== */

  else {

    tableHeader = `

      <tr>

        <th>
          #
        </th>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Attendance
        </th>

        <th>
          Result
        </th>

        <th>
          Fees
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          (student, index) => {

            return `

              <tr>

                <td>
                  ${index + 1}
                </td>


                <td>

                  <div
                    class="admin-reports-student"
                  >

                    <div
                      class="admin-reports-avatar"
                    >
                      ${escapeHTML(
                        student.student
                          .charAt(0)
                      )}
                    </div>

                    <strong>
                      ${escapeHTML(
                        student.student
                      )}
                    </strong>

                  </div>

                </td>


                <td>
                  ${escapeHTML(
                    student.className
                  )}
                </td>


                <td>
                  ${escapeHTML(
                    student.section
                  )}
                </td>


                <td>
                  ${student.attendance}%
                </td>


                <td>
                  ${student.result}%
                </td>


                <td>

                  <span
                    class="admin-reports-status ${
                      student.fees === "Paid"
                        ? "success"
                        : "danger"
                    }"
                  >
                    ${escapeHTML(
                      student.fees
                    )}
                  </span>

                </td>

              </tr>

            `;

          }
        )
        .join("");

  }


  return `

    <div
      class="admin-reports-table-wrapper"
    >

      <table
        class="admin-reports-table"
      >

        <thead>
          ${tableHeader}
        </thead>

        <tbody>
          ${tableRows}
        </tbody>

      </table>

    </div>

  `;

}


/* =========================================
   RENDER COMPLETE REPORT
========================================= */

function renderReportsContent(
  page,
  reportType
) {

  const data =
    filterReportData(page);


  const title =
    getReportTitle(
      reportType
    );


  const stats =
    renderReportStats(
      data
    );


  const overview =
    reportType === "overview"
      ? renderOverviewChart(data)
      : "";


  const table =
    renderReportTable(
      data,
      reportType
    );


  return `

    ${stats}


    ${overview}


    <div
      class="admin-reports-table-card"
    >

      <div
        class="admin-reports-card-header"
      >

        <div>

          <h3>
            ${escapeHTML(title)}
          </h3>

          <p>
            ${data.length}
            ${
              data.length === 1
                ? "record"
                : "records"
            }
            found
          </p>

        </div>


        <div
          class="admin-reports-table-actions"
        >

          <button
            type="button"
            class="admin-reports-secondary-btn"
            data-report-action="print"
          >
            🖨️ Print
          </button>


          <button
            type="button"
            class="admin-reports-primary-btn"
            data-report-action="export"
          >
            📥 Export CSV
          </button>

        </div>

      </div>


      ${table}

    </div>

  `;

}


/* =========================================
   ADMIN REPORTS HTML
========================================= */

export function AdminReports() {

  return `

    <div
      class="admin-reports-page"
      data-current-report="overview"
    >


      <!-- =====================================
           PAGE HEADER
      ====================================== -->

      <div
        class="admin-reports-header"
      >

        <div>

          <div
            class="admin-reports-breadcrumb"
          >
            Admin / Reports
          </div>


          <h1>
            Reports & Analytics
          </h1>


          <p>
            View school performance,
            attendance, results and fee reports.
          </p>

        </div>


        <div
          class="admin-reports-header-actions"
        >

          <button
            type="button"
            class="admin-reports-secondary-btn"
            data-report-action="reset-top"
          >
            ↻ Reset
          </button>

        </div>

      </div>


      <!-- =====================================
           REPORT TYPE TABS
      ====================================== -->

      <div
        class="admin-reports-tabs"
      >

        ${reportTypes
          .map(
            report => `

              <button
                type="button"
                class="admin-reports-tab ${
                  report.id === "overview"
                    ? "active"
                    : ""
                }"
                data-report-type="${report.id}"
              >

                <span>
                  ${report.icon}
                </span>

                <span>
                  ${report.title}
                </span>

              </button>

            `
          )
          .join("")}

      </div>


      <!-- =====================================
           FILTER CARD
      ====================================== -->

      <div
        class="admin-reports-filter-card"
      >

        <div
          class="admin-reports-filter-title"
        >

          <div>

            <h3>
              Report Filters
            </h3>

            <p>
              Filter the report according to
              your requirements.
            </p>

          </div>

        </div>


        <div
          class="admin-reports-filters"
        >


          <!-- SEARCH -->

          <div
            class="admin-reports-field"
          >

            <label
              for="admin-reports-search"
            >
              Search Student
            </label>


            <div
              class="admin-reports-search"
            >

              <span>
                🔍
              </span>


              <input
                type="text"
                id="admin-reports-search"
                placeholder="Search student name..."
              />

            </div>

          </div>


          <!-- CLASS -->

          <div
            class="admin-reports-field"
          >

            <label
              for="admin-reports-class"
            >
              Class
            </label>


            <select
              id="admin-reports-class"
            >

              <option value="all">
                All Classes
              </option>

              <option value="Class 10">
                Class 10
              </option>

              <option value="Class 9">
                Class 9
              </option>

              <option value="Class 8">
                Class 8
              </option>

              <option value="Class 7">
                Class 7
              </option>

              <option value="Class 6">
                Class 6
              </option>

            </select>

          </div>


          <!-- SECTION -->

          <div
            class="admin-reports-field"
          >

            <label
              for="admin-reports-section"
            >
              Section
            </label>


            <select
              id="admin-reports-section"
            >

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


          <!-- SESSION -->

          <div
            class="admin-reports-field"
          >

            <label
              for="admin-reports-session"
            >
              Academic Session
            </label>


            <select
              id="admin-reports-session"
            >

              <option value="2026-27">
                2026 - 27
              </option>

              <option value="2025-26">
                2025 - 26
              </option>

              <option value="2024-25">
                2024 - 25
              </option>

            </select>

          </div>


          <!-- FILTER BUTTONS -->

          <div
            class="admin-reports-filter-buttons"
          >

            <button
              type="button"
              class="admin-reports-primary-btn"
              data-report-action="apply"
            >
              🔍 Apply Filters
            </button>


            <button
              type="button"
              class="admin-reports-secondary-btn"
              data-report-action="reset"
            >
              ↻ Reset
            </button>

          </div>


        </div>

      </div>


      <!-- =====================================
           DYNAMIC REPORT CONTENT
      ====================================== -->

      <div
        id="admin-reports-content"
      >

        ${renderReportsContent(
          document.createElement("div"),
          "overview"
        )}

      </div>


    </div>

  `;

}


/* =========================================
   EXPORT CSV
========================================= */

function exportReportCSV(
  page
) {

  const reportType =
    page.dataset.currentReport ||
    "overview";


  const data =
    filterReportData(
      page
    );


  if (
    !data.length
  ) {

    alert(
      "No report data available to export."
    );

    return;

  }


  let headers = [];

  let rows = [];


  /* =========================================
     OVERVIEW
  ========================================== */

  if (
    reportType === "overview"
  ) {

    headers = [
      "Student",
      "Class",
      "Section",
      "Attendance",
      "Result",
      "Fees",
      "Status"
    ];


    rows =
      data.map(
        student => [

          student.student,

          student.className,

          student.section,

          `${student.attendance}%`,

          `${student.result}%`,

          student.fees,

          student.status

        ]
      );

  }


  /* =========================================
     ATTENDANCE
  ========================================== */

  else if (
    reportType === "attendance"
  ) {

    headers = [
      "Student",
      "Class",
      "Section",
      "Attendance",
      "Status"
    ];


    rows =
      data.map(
        student => [

          student.student,

          student.className,

          student.section,

          `${student.attendance}%`,

          student.attendance >= 75
            ? "Good"
            : "Low"

        ]
      );

  }


  /* =========================================
     RESULTS
  ========================================== */

  else if (
    reportType === "results"
  ) {

    headers = [
      "Student",
      "Class",
      "Section",
      "Result",
      "Grade"
    ];


    rows =
      data.map(
        student => {

          const result =
            Number(
              student.result
            );


          let grade = "F";


          if (
            result >= 90
          ) {

            grade = "A+";

          }

          else if (
            result >= 80
          ) {

            grade = "A";

          }

          else if (
            result >= 70
          ) {

            grade = "B";

          }

          else if (
            result >= 60
          ) {

            grade = "C";

          }

          else if (
            result >= 50
          ) {

            grade = "D";

          }


          return [

            student.student,

            student.className,

            student.section,

            `${result}%`,

            grade

          ];

        }
      );

  }


  /* =========================================
     FEES
  ========================================== */

  else if (
    reportType === "fees"
  ) {

    headers = [
      "Student",
      "Class",
      "Section",
      "Fee Status",
      "Payment"
    ];


    rows =
      data.map(
        student => [

          student.student,

          student.className,

          student.section,

          student.fees,

          student.fees === "Paid"
            ? "Completed"
            : "Pending"

        ]
      );

  }


  /* =========================================
     STUDENTS
  ========================================== */

  else if (
    reportType === "students"
  ) {

    headers = [
      "Student",
      "Class",
      "Section",
      "Attendance",
      "Result",
      "Status"
    ];


    rows =
      data.map(
        student => [

          student.student,

          student.className,

          student.section,

          `${student.attendance}%`,

          `${student.result}%`,

          student.status

        ]
      );

  }


  const csvRows = [
    headers,
    ...rows
  ];


  const csv =
    csvRows
      .map(
        row =>
          row
            .map(
              value => {

                const text =
                  String(
                    value ?? ""
                  )
                    .replace(
                      /"/g,
                      '""'
                    );


                return `"${text}"`;

              }
            )
            .join(",")
      )
      .join("\n");


  const blob =
    new Blob(
      [csv],
      {
        type:
          "text/csv;charset=utf-8;"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `school-${reportType}-report.csv`;


  document.body.appendChild(
    link
  );


  link.click();


  document.body.removeChild(
    link
  );


  URL.revokeObjectURL(
    url
  );

}


/* =========================================
   PRINT REPORT
========================================= */

function printReport(
  page
) {

  const reportType =
    page.dataset.currentReport ||
    "overview";


  const data =
    filterReportData(
      page
    );


  if (
    !data.length
  ) {

    alert(
      "No data available to print."
    );

    return;

  }


  const title =
    getReportTitle(
      reportType
    );


  const stats =
    getReportStats(
      data
    );


  let tableHeader = "";

  let tableRows = "";


  /* =========================================
     PRINT TABLE - OVERVIEW
  ========================================== */

  if (
    reportType === "overview"
  ) {

    tableHeader = `

      <tr>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Attendance
        </th>

        <th>
          Result
        </th>

        <th>
          Fees
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          student => `

            <tr>

              <td>
                ${escapeHTML(
                  student.student
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.className
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.section
                )}
              </td>

              <td>
                ${student.attendance}%
              </td>

              <td>
                ${student.result}%
              </td>

              <td>
                ${escapeHTML(
                  student.fees
                )}
              </td>

            </tr>

          `
        )
        .join("");

  }


  /* =========================================
     PRINT TABLE - ATTENDANCE
  ========================================== */

  else if (
    reportType === "attendance"
  ) {

    tableHeader = `

      <tr>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Attendance
        </th>

        <th>
          Status
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          student => `

            <tr>

              <td>
                ${escapeHTML(
                  student.student
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.className
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.section
                )}
              </td>

              <td>
                ${student.attendance}%
              </td>

              <td>
                ${
                  student.attendance >= 75
                    ? "Good"
                    : "Low"
                }
              </td>

            </tr>

          `
        )
        .join("");

  }


  /* =========================================
     PRINT TABLE - RESULTS
  ========================================== */

  else if (
    reportType === "results"
  ) {

    tableHeader = `

      <tr>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Result
        </th>

        <th>
          Grade
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          student => {

            const result =
              Number(
                student.result
              );


            let grade = "F";


            if (
              result >= 90
            ) {

              grade = "A+";

            }

            else if (
              result >= 80
            ) {

              grade = "A";

            }

            else if (
              result >= 70
            ) {

              grade = "B";

            }

            else if (
              result >= 60
            ) {

              grade = "C";

            }

            else if (
              result >= 50
            ) {

              grade = "D";

            }


            return `

              <tr>

                <td>
                  ${escapeHTML(
                    student.student
                  )}
                </td>

                <td>
                  ${escapeHTML(
                    student.className
                  )}
                </td>

                <td>
                  ${escapeHTML(
                    student.section
                  )}
                </td>

                <td>
                  ${result}%
                </td>

                <td>
                  ${grade}
                </td>

              </tr>

            `;

          }
        )
        .join("");

  }


  /* =========================================
     PRINT TABLE - FEES
  ========================================== */

  else if (
    reportType === "fees"
  ) {

    tableHeader = `

      <tr>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Fee Status
        </th>

        <th>
          Payment
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          student => `

            <tr>

              <td>
                ${escapeHTML(
                  student.student
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.className
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.section
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.fees
                )}
              </td>

              <td>
                ${
                  student.fees === "Paid"
                    ? "Completed"
                    : "Pending"
                }
              </td>

            </tr>

          `
        )
        .join("");

  }


  /* =========================================
     PRINT TABLE - STUDENTS
  ========================================== */

  else {

    tableHeader = `

      <tr>

        <th>
          Student
        </th>

        <th>
          Class
        </th>

        <th>
          Section
        </th>

        <th>
          Attendance
        </th>

        <th>
          Result
        </th>

        <th>
          Status
        </th>

      </tr>

    `;


    tableRows =
      data
        .map(
          student => `

            <tr>

              <td>
                ${escapeHTML(
                  student.student
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.className
                )}
              </td>

              <td>
                ${escapeHTML(
                  student.section
                )}
              </td>

              <td>
                ${student.attendance}%
              </td>

              <td>
                ${student.result}%
              </td>

              <td>
                ${escapeHTML(
                  student.status
                )}
              </td>

            </tr>

          `
        )
        .join("");

  }


  const printWindow =
    window.open(
      "",
      "_blank",
      "width=1200,height=800"
    );


  if (
    !printWindow
  ) {

    alert(
      "Please allow pop-ups to print the report."
    );

    return;

  }


  printWindow.document.write(`

    <!DOCTYPE html>

    <html>

      <head>

        <title>
          ${escapeHTML(title)}
        </title>


        <style>

          * {
            box-sizing: border-box;
          }


          body {

            font-family:
              Arial,
              Helvetica,
              sans-serif;

            margin: 30px;

            color: #111827;

          }


          h1 {

            margin: 0 0 5px;

          }


          h2 {

            margin-top: 30px;

          }


          p {

            color: #6b7280;

          }


          .header {

            border-bottom:
              2px solid #111827;

            padding-bottom:
              15px;

            margin-bottom:
              20px;

          }


          .stats {

            display: grid;

            grid-template-columns:
              repeat(4, 1fr);

            gap: 15px;

            margin-bottom:
              25px;

          }


          .stat {

            border:
              1px solid #d1d5db;

            padding: 15px;

          }


          .stat span {

            display: block;

            font-size: 12px;

            color: #6b7280;

            margin-bottom:
              5px;

          }


          .stat strong {

            font-size: 24px;

          }


          table {

            width: 100%;

            border-collapse:
              collapse;

            margin-top:
              20px;

          }


          th,
          td {

            border:
              1px solid #d1d5db;

            padding:
              10px;

            text-align:
              left;

          }


          th {

            background:
              #f3f4f6;

          }


          @media print {

            body {

              margin: 15px;

            }

          }

        </style>

      </head>


      <body>


        <div class="header">

          <h1>
            Government School
          </h1>

          <p>
            ${escapeHTML(title)}
          </p>

          <p>
            Academic Session:
            2026 - 27
          </p>

        </div>


        <div class="stats">


          <div class="stat">

            <span>
              Total Students
            </span>

            <strong>
              ${stats.totalStudents}
            </strong>

          </div>


          <div class="stat">

            <span>
              Average Attendance
            </span>

            <strong>
              ${stats.averageAttendance}%
            </strong>

          </div>


          <div class="stat">

            <span>
              Average Result
            </span>

            <strong>
              ${stats.averageResult}%
            </strong>

          </div>


          <div class="stat">

            <span>
              Pending Fees
            </span>

            <strong>
              ${stats.pendingFees}
            </strong>

          </div>


        </div>


        <h2>
          ${escapeHTML(title)}
        </h2>


        <table>

          <thead>

            ${tableHeader}

          </thead>


          <tbody>

            ${tableRows}

          </tbody>

        </table>


      </body>

    </html>

  `);


  printWindow.document.close();


  printWindow.focus();


  setTimeout(
    () => {

      printWindow.print();

      printWindow.close();

    },
    300
  );

}


/* =========================================
   RESET FILTERS
========================================= */

function resetFilters(
  page
) {

  const search =
    page.querySelector(
      "#admin-reports-search"
    );


  const classSelect =
    page.querySelector(
      "#admin-reports-class"
    );


  const sectionSelect =
    page.querySelector(
      "#admin-reports-section"
    );


  const sessionSelect =
    page.querySelector(
      "#admin-reports-session"
    );


  if (search) {

    search.value = "";

  }


  if (classSelect) {

    classSelect.value =
      "all";

  }


  if (sectionSelect) {

    sectionSelect.value =
      "all";

  }


  if (sessionSelect) {

    sessionSelect.value =
      "2026-27";

  }


  renderCurrentReport(
    page
  );

}


/* =========================================
   RENDER CURRENT REPORT
========================================= */

function renderCurrentReport(
  page
) {

  const content =
    page.querySelector(
      "#admin-reports-content"
    );


  if (!content) {

    return;

  }


  const reportType =
    page.dataset.currentReport ||
    "overview";


  content.innerHTML =
    renderReportsContent(
      page,
      reportType
    );

}


/* =========================================
   SET ACTIVE TAB
========================================= */

function setActiveReportTab(
  page,
  reportType
) {

  const tabs =
    page.querySelectorAll(
      "[data-report-type]"
    );


  tabs.forEach(
    tab => {

      const type =
        tab.dataset.reportType;


      if (
        type === reportType
      ) {

        tab.classList.add(
          "active"
        );

      } else {

        tab.classList.remove(
          "active"
        );

      }

    }
  );

}


/* =========================================
   REPORT ACTION HANDLER
========================================= */

function handleReportAction(
  page,
  action
) {

  if (
    action === "apply"
  ) {

    renderCurrentReport(
      page
    );


    return;

  }


  if (
    action === "reset"
  ) {

    resetFilters(
      page
    );


    return;

  }


  if (
    action === "reset-top"
  ) {

    resetFilters(
      page
    );


    return;

  }


  if (
    action === "print"
  ) {

    printReport(
      page
    );


    return;

  }


  if (
    action === "export"
  ) {

    exportReportCSV(
      page
    );


    return;

  }

}


/* =========================================
   SETUP REPORT NAVIGATION
========================================= */

export function setupAdminReportsNavigation() {

  const page =
    document.querySelector(
      ".admin-reports-page"
    );


  if (!page) {

    console.error(
      "Admin Reports page not found."
    );

    return;

  }


  /*
    Prevent duplicate event listeners.
  */

  if (
    page.dataset.reportsReady ===
    "true"
  ) {

    renderCurrentReport(
      page
    );

    return;

  }


  page.dataset.reportsReady =
    "true";


  /* =========================================
     MAIN CLICK EVENT
  ========================================== */

  page.addEventListener(
    "click",
    event => {

      /* =====================================
         REPORT TYPE BUTTON
      ====================================== */

      const reportTab =
        event.target.closest(
          "[data-report-type]"
        );


      if (
        reportTab &&
        page.contains(reportTab)
      ) {

        event.preventDefault();


        const reportType =
          reportTab.dataset.reportType;


        if (!reportType) {

          return;

        }


        page.dataset.currentReport =
          reportType;


        setActiveReportTab(
          page,
          reportType
        );


        renderCurrentReport(
          page
        );


        return;

      }


      /* =====================================
         REPORT ACTION BUTTON
      ====================================== */

      const actionButton =
        event.target.closest(
          "[data-report-action]"
        );


      if (
        actionButton &&
        page.contains(actionButton)
      ) {

        event.preventDefault();


        const action =
          actionButton.dataset.reportAction;


        if (!action) {

          return;

        }


        handleReportAction(
          page,
          action
        );


        return;

      }

    }
  );


  /* =========================================
     SEARCH INPUT
  ========================================== */

  const searchInput =
    page.querySelector(
      "#admin-reports-search"
    );


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      () => {

        renderCurrentReport(
          page
        );

      }
    );

  }


  /* =========================================
     INITIAL REPORT
  ========================================== */

  page.dataset.currentReport =
    "overview";


  setActiveReportTab(
    page,
    "overview"
  );


  renderCurrentReport(
    page
  );

}