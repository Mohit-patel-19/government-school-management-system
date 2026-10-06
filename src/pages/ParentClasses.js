/* =========================================
   PARENT CLASSES PAGE
   View-only class and timetable information
========================================= */

const classData = {
  studentName: "Student Name",
  className: "10",
  section: "A",
  rollNo: "24",
  academicSession: "2026-27",

  classTeacher: {
    name: "Class Teacher",
    subject: "Mathematics",
    contact: "9876543210"
  },

  room: "Room 10-A",

  timetable: [
    {
      day: "Monday",
      periods: [
        { time: "09:00 - 09:45", subject: "Mathematics", teacher: "Class Teacher", room: "10-A" },
        { time: "09:45 - 10:30", subject: "Science", teacher: "Science Teacher", room: "10-A" },
        { time: "10:45 - 11:30", subject: "English", teacher: "English Teacher", room: "10-A" },
        { time: "11:30 - 12:15", subject: "Hindi", teacher: "Hindi Teacher", room: "10-A" },
        { time: "01:00 - 01:45", subject: "Social Science", teacher: "SST Teacher", room: "10-A" }
      ]
    },

    {
      day: "Tuesday",
      periods: [
        { time: "09:00 - 09:45", subject: "Science", teacher: "Science Teacher", room: "10-A" },
        { time: "09:45 - 10:30", subject: "Mathematics", teacher: "Class Teacher", room: "10-A" },
        { time: "10:45 - 11:30", subject: "Hindi", teacher: "Hindi Teacher", room: "10-A" },
        { time: "11:30 - 12:15", subject: "English", teacher: "English Teacher", room: "10-A" },
        { time: "01:00 - 01:45", subject: "Computer", teacher: "Computer Teacher", room: "Computer Lab" }
      ]
    },

    {
      day: "Wednesday",
      periods: [
        { time: "09:00 - 09:45", subject: "English", teacher: "English Teacher", room: "10-A" },
        { time: "09:45 - 10:30", subject: "Social Science", teacher: "SST Teacher", room: "10-A" },
        { time: "10:45 - 11:30", subject: "Mathematics", teacher: "Class Teacher", room: "10-A" },
        { time: "11:30 - 12:15", subject: "Science", teacher: "Science Teacher", room: "Science Lab" },
        { time: "01:00 - 01:45", subject: "Hindi", teacher: "Hindi Teacher", room: "10-A" }
      ]
    },

    {
      day: "Thursday",
      periods: [
        { time: "09:00 - 09:45", subject: "Hindi", teacher: "Hindi Teacher", room: "10-A" },
        { time: "09:45 - 10:30", subject: "English", teacher: "English Teacher", room: "10-A" },
        { time: "10:45 - 11:30", subject: "Science", teacher: "Science Teacher", room: "10-A" },
        { time: "11:30 - 12:15", subject: "Mathematics", teacher: "Class Teacher", room: "10-A" },
        { time: "01:00 - 01:45", subject: "Social Science", teacher: "SST Teacher", room: "10-A" }
      ]
    },

    {
      day: "Friday",
      periods: [
        { time: "09:00 - 09:45", subject: "Social Science", teacher: "SST Teacher", room: "10-A" },
        { time: "09:45 - 10:30", subject: "Mathematics", teacher: "Class Teacher", room: "10-A" },
        { time: "10:45 - 11:30", subject: "English", teacher: "English Teacher", room: "10-A" },
        { time: "11:30 - 12:15", subject: "Computer", teacher: "Computer Teacher", room: "Computer Lab" },
        { time: "01:00 - 01:45", subject: "Science", teacher: "Science Teacher", room: "10-A" }
      ]
    },

    {
      day: "Saturday",
      periods: [
        { time: "09:00 - 09:45", subject: "Mathematics", teacher: "Class Teacher", room: "10-A" },
        { time: "09:45 - 10:30", subject: "Science", teacher: "Science Teacher", room: "10-A" },
        { time: "10:45 - 11:30", subject: "Computer", teacher: "Computer Teacher", room: "Computer Lab" },
        { time: "11:30 - 12:15", subject: "Library", teacher: "Library Teacher", room: "Library" }
      ]
    }
  ]
};


/* =========================================
   SUBJECT ICON
========================================= */

function getSubjectIcon(subject) {
  const icons = {
    Mathematics: "📐",
    Science: "🔬",
    English: "📖",
    Hindi: "📝",
    "Social Science": "🌍",
    Computer: "💻",
    Library: "📚"
  };

  return icons[subject] || "📘";
}


/* =========================================
   PARENT CLASSES PAGE
========================================= */

export function ParentClasses() {
  return `
    <div class="parent-classes-page">

      <!-- Header -->
      <div class="parent-classes-header">

        <div class="parent-classes-header-left">

          <button
            type="button"
            class="parent-classes-back-btn"
            data-action="back"
            aria-label="Back to dashboard"
          >
            ←
          </button>

          <div>
            <h1>My Child's Classes</h1>
            <p>Class, teacher and timetable information</p>
          </div>

        </div>

        <div class="parent-class-session">
          <span>Academic Session</span>
          <strong>${classData.academicSession}</strong>
        </div>

      </div>


      <!-- Student Class Summary -->
      <section class="parent-class-summary">

        <div class="parent-class-avatar">
          🎓
        </div>

        <div class="parent-class-student-info">

          <h2>${classData.studentName}</h2>

          <div class="parent-class-student-meta">

            <span>
              <strong>Class:</strong>
              ${classData.className}
            </span>

            <span>
              <strong>Section:</strong>
              ${classData.section}
            </span>

            <span>
              <strong>Roll No:</strong>
              ${classData.rollNo}
            </span>

          </div>

        </div>

        <div class="parent-class-status">
          <span class="parent-class-status-dot"></span>
          Active Student
        </div>

      </section>


      <!-- Class Information -->
      <section class="parent-class-info-section">

        <div class="parent-class-section-title">

          <div>
            <h2>Class Information</h2>
            <p>Current class details of your child</p>
          </div>

          <span class="parent-view-only-badge">
            View Only
          </span>

        </div>


        <div class="parent-class-info-grid">

          <div class="parent-class-info-card">
            <div class="parent-class-info-icon">🏫</div>
            <div>
              <span>Class</span>
              <strong>Class ${classData.className}-${classData.section}</strong>
            </div>
          </div>

          <div class="parent-class-info-card">
            <div class="parent-class-info-icon">🔢</div>
            <div>
              <span>Roll Number</span>
              <strong>${classData.rollNo}</strong>
            </div>
          </div>

          <div class="parent-class-info-card">
            <div class="parent-class-info-icon">🚪</div>
            <div>
              <span>Class Room</span>
              <strong>${classData.room}</strong>
            </div>
          </div>

          <div class="parent-class-info-card">
            <div class="parent-class-info-icon">📅</div>
            <div>
              <span>Academic Session</span>
              <strong>${classData.academicSession}</strong>
            </div>
          </div>

        </div>

      </section>


      <!-- Class Teacher -->
      <section class="parent-class-teacher-section">

        <div class="parent-class-section-title">

          <div>
            <h2>Class Teacher</h2>
            <p>Teacher assigned to your child's class</p>
          </div>

        </div>


        <div class="parent-class-teacher-card">

          <div class="parent-class-teacher-avatar">
            👨‍🏫
          </div>

          <div class="parent-class-teacher-details">

            <h3>${classData.classTeacher.name}</h3>

            <p>
              ${classData.classTeacher.subject} Teacher
            </p>

            <div class="parent-class-teacher-contact">
              📞 ${classData.classTeacher.contact}
            </div>

          </div>

          <button
            type="button"
            class="parent-contact-teacher-btn"
            data-action="contact-teacher"
          >
            Contact Teacher
          </button>

        </div>

      </section>


      <!-- Weekly Timetable -->
      <section class="parent-timetable-section">

        <div class="parent-class-section-title">

          <div>
            <h2>Weekly Timetable</h2>
            <p>Daily class schedule of your child</p>
          </div>

        </div>


        <div class="parent-timetable-container">

          ${classData.timetable.map(day => `
            <div class="parent-day-card">

              <div class="parent-day-header">
                <div class="parent-day-icon">📅</div>
                <div>
                  <h3>${day.day}</h3>
                  <span>${day.periods.length} Periods</span>
                </div>
              </div>


              <div class="parent-period-list">

                ${day.periods.map((period, index) => `
                  <div class="parent-period-item">

                    <div class="parent-period-number">
                      ${index + 1}
                    </div>

                    <div class="parent-period-time">
                      ${period.time}
                    </div>

                    <div class="parent-period-subject">

                      <span class="parent-subject-icon">
                        ${getSubjectIcon(period.subject)}
                      </span>

                      <div>
                        <strong>${period.subject}</strong>
                        <span>${period.teacher}</span>
                      </div>

                    </div>

                    <div class="parent-period-room">
                      🚪 ${period.room}
                    </div>

                  </div>
                `).join("")}

              </div>

            </div>
          `).join("")}

        </div>

      </section>


      <!-- Information Note -->
      <section class="parent-class-info-note">

        <div class="parent-class-note-icon">
          ℹ️
        </div>

        <div>
          <h3>Class Information</h3>
          <p>
            Class, section, timetable, teacher and room information
            is managed by the school. Parents can view these details
            but cannot modify them.
          </p>
        </div>

      </section>

    </div>
  `;
}


/* =========================================
   NAVIGATION
========================================= */

export function setupParentClassesNavigation() {

  const page = document.querySelector(".parent-classes-page");

  if (!page) return;


  page.addEventListener("click", (event) => {

    const actionElement = event.target.closest("[data-action]");

    if (!actionElement) return;


    const action = actionElement.dataset.action;


    if (action === "back") {

      if (typeof window.navigateParentPage === "function") {
        window.navigateParentPage("dashboard");
      }

      return;
    }


    if (action === "contact-teacher") {

      if (typeof window.navigateParentPage === "function") {
        window.navigateParentPage("messages");
      } else {
        alert("Teacher Messages page is not available.");
      }

    }

  });

}