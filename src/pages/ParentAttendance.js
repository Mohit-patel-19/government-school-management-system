/* =========================================
   PARENT ATTENDANCE
   ========================================= */

const attendanceData = {
  studentName: "Student Name",
  className: "10",
  section: "A",
  rollNo: "24",
  academicSession: "2026-27",

  overall: {
    percentage: 92,
    present: 184,
    absent: 16,
    late: 4,
    total: 200
  },

  monthly: [
    {
      month: "April",
      total: 20,
      present: 19,
      absent: 1,
      late: 0,
      percentage: 95
    },
    {
      month: "May",
      total: 22,
      present: 20,
      absent: 2,
      late: 1,
      percentage: 91
    },
    {
      month: "June",
      total: 21,
      present: 19,
      absent: 2,
      late: 0,
      percentage: 90
    },
    {
      month: "July",
      total: 23,
      present: 21,
      absent: 2,
      late: 1,
      percentage: 91
    },
    {
      month: "August",
      total: 24,
      present: 23,
      absent: 1,
      late: 0,
      percentage: 96
    }
  ],

  subjects: [
    {
      subject: "Mathematics",
      total: 40,
      present: 37,
      absent: 3,
      percentage: 92.5
    },
    {
      subject: "Science",
      total: 38,
      present: 36,
      absent: 2,
      percentage: 94.7
    },
    {
      subject: "English",
      total: 39,
      present: 35,
      absent: 4,
      percentage: 89.7
    },
    {
      subject: "Hindi",
      total: 41,
      present: 39,
      absent: 2,
      percentage: 95.1
    },
    {
      subject: "Social Science",
      total: 42,
      present: 37,
      absent: 5,
      percentage: 88.1
    }
  ],

  recent: [
    {
      date: "05 Sep 2026",
      day: "Saturday",
      subject: "Mathematics",
      status: "Present"
    },
    {
      date: "04 Sep 2026",
      day: "Friday",
      subject: "Science",
      status: "Present"
    },
    {
      date: "03 Sep 2026",
      day: "Thursday",
      subject: "English",
      status: "Absent"
    },
    {
      date: "02 Sep 2026",
      day: "Wednesday",
      subject: "Hindi",
      status: "Present"
    },
    {
      date: "01 Sep 2026",
      day: "Tuesday",
      subject: "Social Science",
      status: "Late"
    }
  ]
};


/* =========================================
   MAIN ATTENDANCE PAGE
   ========================================= */

export function ParentAttendance() {
  const data = attendanceData;

  return `
    <div class="parent-attendance-page">

      <!-- HEADER -->
      <div class="parent-attendance-header">

        <div class="attendance-header-left">

          <button
            class="parent-attendance-back-btn"
            data-attendance-action="back"
            type="button"
          >
            ← Back to Dashboard
          </button>

          <div>
            <h1>Attendance</h1>
            <p>
              View your child's attendance details
            </p>
          </div>

        </div>

        <div class="attendance-session">
          <span>Academic Session</span>
          <strong>${data.academicSession}</strong>
        </div>

      </div>


      <!-- STUDENT INFO -->
      <div class="attendance-student-card">

        <div class="attendance-student-avatar">
          👨‍🎓
        </div>

        <div class="attendance-student-info">

          <h2>${data.studentName}</h2>

          <p>
            Class ${data.className}
            - Section ${data.section}
            • Roll No. ${data.rollNo}
          </p>

        </div>

        <div class="attendance-status">
          <span class="attendance-status-dot"></span>
          Regular Attendance
        </div>

      </div>


      <!-- OVERALL ATTENDANCE -->
      <section class="attendance-section">

        <div class="attendance-section-heading">
          <div>
            <h2>Overall Attendance</h2>
            <p>Current academic session attendance</p>
          </div>
        </div>


        <div class="attendance-overview-grid">

          <!-- Percentage -->
          <div class="attendance-percentage-card">

            <div class="attendance-circle">
              <div class="attendance-circle-inner">
                <strong>${data.overall.percentage}%</strong>
                <span>Attendance</span>
              </div>
            </div>

            <div class="attendance-percentage-text">
              <h3>Good Attendance</h3>
              <p>
                Your child's attendance is currently
                above the required level.
              </p>
            </div>

          </div>


          <!-- Present -->
          <div class="attendance-stat-card present">

            <div class="attendance-stat-icon">
              ✓
            </div>

            <div>
              <span>Present Days</span>
              <strong>${data.overall.present}</strong>
              <small>Out of ${data.overall.total} days</small>
            </div>

          </div>


          <!-- Absent -->
          <div class="attendance-stat-card absent">

            <div class="attendance-stat-icon">
              ✕
            </div>

            <div>
              <span>Absent Days</span>
              <strong>${data.overall.absent}</strong>
              <small>Out of ${data.overall.total} days</small>
            </div>

          </div>


          <!-- Late -->
          <div class="attendance-stat-card late">

            <div class="attendance-stat-icon">
              ⏱
            </div>

            <div>
              <span>Late Days</span>
              <strong>${data.overall.late}</strong>
              <small>Recorded late arrivals</small>
            </div>

          </div>

        </div>

      </section>


      <!-- MONTHLY ATTENDANCE -->
      <section class="attendance-section">

        <div class="attendance-section-heading">

          <div>
            <h2>Monthly Attendance</h2>
            <p>Month-wise attendance performance</p>
          </div>

        </div>


        <div class="attendance-table-card">

          <div class="attendance-table-wrapper">

            <table class="parent-attendance-table">

              <thead>
                <tr>
                  <th>Month</th>
                  <th>Total Days</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Late</th>
                  <th>Attendance</th>
                </tr>
              </thead>

              <tbody>

                ${data.monthly.map(item => `
                  <tr>

                    <td>
                      <strong>${item.month}</strong>
                    </td>

                    <td>${item.total}</td>

                    <td>
                      <span class="attendance-present-text">
                        ${item.present}
                      </span>
                    </td>

                    <td>
                      <span class="attendance-absent-text">
                        ${item.absent}
                      </span>
                    </td>

                    <td>
                      <span class="attendance-late-text">
                        ${item.late}
                      </span>
                    </td>

                    <td>

                      <div class="attendance-progress-cell">

                        <div class="attendance-progress">
                          <span
                            style="width: ${item.percentage}%"
                          ></span>
                        </div>

                        <strong>
                          ${item.percentage}%
                        </strong>

                      </div>

                    </td>

                  </tr>
                `).join("")}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      <!-- SUBJECT ATTENDANCE -->
      <section class="attendance-section">

        <div class="attendance-section-heading">

          <div>
            <h2>Subject-wise Attendance</h2>
            <p>Attendance according to subjects</p>
          </div>

        </div>


        <div class="subject-attendance-grid">

          ${data.subjects.map(subject => {

            let status = "good";

            if (subject.percentage < 75) {
              status = "danger";
            } else if (subject.percentage < 85) {
              status = "warning";
            }

            return `
              <div class="subject-attendance-card">

                <div class="subject-attendance-top">

                  <div class="subject-icon">
                    📚
                  </div>

                  <div>
                    <h3>${subject.subject}</h3>
                    <p>
                      ${subject.present}
                      present out of
                      ${subject.total}
                    </p>
                  </div>

                </div>


                <div class="subject-attendance-progress">

                  <div class="subject-progress-bar">

                    <span
                      class="${status}"
                      style="width: ${subject.percentage}%"
                    ></span>

                  </div>

                  <strong>
                    ${subject.percentage}%
                  </strong>

                </div>


                <div class="subject-attendance-footer">

                  <span>
                    Present:
                    <strong>${subject.present}</strong>
                  </span>

                  <span>
                    Absent:
                    <strong>${subject.absent}</strong>
                  </span>

                </div>

              </div>
            `;
          }).join("")}

        </div>

      </section>


      <!-- RECENT ATTENDANCE -->
      <section class="attendance-section">

        <div class="attendance-section-heading">

          <div>
            <h2>Recent Attendance</h2>
            <p>Latest attendance records</p>
          </div>

        </div>


        <div class="attendance-table-card">

          <div class="attendance-table-wrapper">

            <table class="parent-attendance-table">

              <thead>

                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Subject</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                ${data.recent.map(item => {

                  const statusClass =
                    item.status.toLowerCase();

                  let icon = "✓";

                  if (item.status === "Absent") {
                    icon = "✕";
                  }

                  if (item.status === "Late") {
                    icon = "⏱";
                  }

                  return `
                    <tr>

                      <td>
                        <strong>${item.date}</strong>
                      </td>

                      <td>
                        ${item.day}
                      </td>

                      <td>
                        ${item.subject}
                      </td>

                      <td>

                        <span
                          class="attendance-record-status ${statusClass}"
                        >
                          ${icon}
                          ${item.status}
                        </span>

                      </td>

                    </tr>
                  `;

                }).join("")}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      <!-- INFORMATION NOTE -->
      <div class="attendance-info-note">

        <div class="attendance-info-icon">
          🔒
        </div>

        <div>

          <h3>Attendance is managed by the school</h3>

          <p>
            Attendance records are updated by the
            class teacher/school administration.
            Parents can view the attendance but cannot
            edit or mark attendance.
          </p>

        </div>

      </div>


    </div>
  `;
}


/* =========================================
   ATTENDANCE NAVIGATION
   ========================================= */

export function setupParentAttendanceNavigation() {

  const page = document.querySelector(
    ".parent-attendance-page"
  );

  if (!page) return;


  page.addEventListener("click", (event) => {

    const actionElement =
      event.target.closest(
        "[data-attendance-action]"
      );

    if (!actionElement) return;

    const action =
      actionElement.dataset.attendanceAction;


    if (action === "back") {

      if (
        typeof window.navigateParentPage ===
        "function"
      ) {
        window.navigateParentPage("dashboard");
      }

    }

  });


  document.addEventListener(
    "keydown",
    handleAttendanceKeyboard
  );
}


/* =========================================
   KEYBOARD SUPPORT
   ========================================= */

function handleAttendanceKeyboard(event) {

  if (event.key !== "Escape") return;

  if (
    typeof window.navigateParentPage ===
    "function"
  ) {
    window.navigateParentPage("dashboard");
  }

}