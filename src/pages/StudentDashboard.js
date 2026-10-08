import '../StudentDashboard.css'

import { StudentProfile } from './StudentProfile.js'
import { StudentClasses } from './StudentClasses.js'

import {
  Assignments,
  setupAssignmentNavigation
} from './Assignments.js'

import {
  StudentAttendance,
  setupStudentAttendanceNavigation
} from './StudentAttendance.js'

import {
  StudentResults,
  setupStudentResultsNavigation
} from './StudentResults.js'

import {
  StudentNotices,
  setupStudentNoticesNavigation
} from './StudentNotices.js'

import {
  StudentStudyMaterial,
  setupStudentStudyMaterialNavigation
} from './StudentStudyMaterial.js'

import {
  StudentMessages,
  setupStudentMessagesNavigation
} from './StudentMessages.js'


function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}


function getStudentInitial(studentName = 'Student') {
  const name = String(studentName).trim()
  return name ? name.charAt(0).toUpperCase() : 'S'
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


function getStudentHeader(studentName) {
  const safeName = escapeHTML(studentName)
  const initial = getStudentInitial(studentName)

  return `
    <header class="dashboard-header">

      <button
        type="button"
        class="mobile-menu-btn"
        id="studentMobileMenuBtn"
        aria-label="Open menu"
        aria-expanded="false"
      >
        ☰
      </button>

      <div class="dashboard-header-title">
        <h1>Student Portal</h1>
        <p>Welcome back, ${safeName}</p>
      </div>

      <div class="header-actions">

        <button
          type="button"
          class="notification-btn"
          id="studentNotificationBtn"
          aria-label="Notifications"
        >
          🔔
          <span class="notification-dot"></span>
        </button>

        <div class="profile">

          <div class="profile-avatar">
            ${initial}
          </div>

          <div class="profile-info">
            <strong>${safeName}</strong>
            <span>Class 10 - A</span>
          </div>

        </div>

      </div>

    </header>
  `
}


function getStudentSidebar() {
  return `
    <div
      class="sidebar-overlay"
      id="studentSidebarOverlay"
    ></div>

    <aside
      class="sidebar"
      id="studentSidebar"
    >

      <div class="sidebar-logo">

        <div class="sidebar-icon">
          🏫
        </div>

        <div class="sidebar-logo-text">
          <h2>Government School</h2>
          <span>Student Portal</span>
        </div>

        <button
          type="button"
          class="mobile-sidebar-close"
          id="studentSidebarClose"
          aria-label="Close menu"
        >
          ✕
        </button>

      </div>

      <nav class="sidebar-nav">

        <button
          type="button"
          class="nav-item"
          data-page="dashboard"
        >
          <span>🏠</span>
          <strong>Dashboard</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="profile"
        >
          <span>👨‍🎓</span>
          <strong>My Profile</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="classes"
        >
          <span>📚</span>
          <strong>My Classes</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="assignments"
        >
          <span>📝</span>
          <strong>Assignments</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="attendance"
        >
          <span>📅</span>
          <strong>Attendance</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="results"
        >
          <span>📊</span>
          <strong>Results</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="notices"
        >
          <span>📢</span>
          <strong>Notices</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="study-material"
        >
          <span>📖</span>
          <strong>Study Material</strong>
        </button>

        <button
          type="button"
          class="nav-item"
          data-page="messages"
        >
          <span>💬</span>
          <strong>Messages</strong>
        </button>

      </nav>

      <div class="sidebar-bottom">

        <button
          type="button"
          class="nav-item logout"
          id="logoutBtn"
        >
          <span>🚪</span>
          <strong>Logout</strong>
        </button>

      </div>

    </aside>
  `
}


export function StudentDashboard(studentName = 'Student') {
  return `
    <div class="dashboard student-dashboard">

      ${getStudentSidebar()}

      <main class="dashboard-main">

        ${getStudentHeader(studentName)}

        <section class="dashboard-content">

          <div class="stats-grid">

            <div class="stat-card">
              <div class="stat-icon blue">📅</div>
              <div>
                <span>Attendance</span>
                <h2>92%</h2>
              </div>
              <small class="positive">Good</small>
            </div>

            <div class="stat-card">
              <div class="stat-icon green">📚</div>
              <div>
                <span>Assignments</span>
                <h2>18</h2>
              </div>
              <small>Completed</small>
            </div>

            <div class="stat-card">
              <div class="stat-icon orange">📝</div>
              <div>
                <span>Pending Work</span>
                <h2>4</h2>
              </div>
              <small>Need attention</small>
            </div>

            <div class="stat-card">
              <div class="stat-icon purple">🏆</div>
              <div>
                <span>Overall Result</span>
                <h2>86%</h2>
              </div>
              <small class="positive">Excellent</small>
            </div>

          </div>

          <div class="dashboard-grid">

            <div class="dashboard-card">

              <div class="card-header">

                <div>
                  <h2>Today's Classes</h2>
                  <p>Your class schedule for today</p>
                </div>

                <button
                  type="button"
                  class="view-btn"
                  data-page="classes"
                >
                  View All
                </button>

              </div>

              <div class="class-list">

                <div class="class-item">
                  <div class="subject-icon">📐</div>

                  <div class="class-info">
                    <strong>Mathematics</strong>
                    <span>Mr. Sharma</span>
                  </div>

                  <div class="class-time">
                    <strong>09:00 AM</strong>
                    <span>Room 101</span>
                  </div>
                </div>

                <div class="class-item">
                  <div class="subject-icon">🔬</div>

                  <div class="class-info">
                    <strong>Science</strong>
                    <span>Mrs. Verma</span>
                  </div>

                  <div class="class-time">
                    <strong>10:00 AM</strong>
                    <span>Lab 1</span>
                  </div>
                </div>

                <div class="class-item">
                  <div class="subject-icon">💻</div>

                  <div class="class-info">
                    <strong>Computer Science</strong>
                    <span>Mr. Patel</span>
                  </div>

                  <div class="class-time">
                    <strong>11:00 AM</strong>
                    <span>Computer Lab</span>
                  </div>
                </div>

                <div class="class-item">
                  <div class="subject-icon">📖</div>

                  <div class="class-info">
                    <strong>English</strong>
                    <span>Mrs. Singh</span>
                  </div>

                  <div class="class-time">
                    <strong>01:00 PM</strong>
                    <span>Room 104</span>
                  </div>
                </div>

              </div>

            </div>

            <div class="dashboard-card">

              <div class="card-header">

                <div>
                  <h2>Latest Notices</h2>
                  <p>School announcements</p>
                </div>

                <button
                  type="button"
                  class="view-btn"
                  data-page="notices"
                >
                  View All
                </button>

              </div>

              <div class="notice-list">

                <div class="notice-item">
                  <div class="notice-icon">📢</div>
                  <div>
                    <strong>Annual Sports Day</strong>
                    <p>Sports day will be held next week.</p>
                    <span>2 hours ago</span>
                  </div>
                </div>

                <div class="notice-item">
                  <div class="notice-icon">📚</div>
                  <div>
                    <strong>Exam Schedule Released</strong>
                    <p>Check the examination timetable.</p>
                    <span>Yesterday</span>
                  </div>
                </div>

                <div class="notice-item">
                  <div class="notice-icon">🏫</div>
                  <div>
                    <strong>School Holiday</strong>
                    <p>School will remain closed tomorrow.</p>
                    <span>2 days ago</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div class="dashboard-grid">

            <div class="dashboard-card">

              <div class="card-header">

                <div>
                  <h2>Recent Assignments</h2>
                  <p>Track your assignments</p>
                </div>

                <button
                  type="button"
                  class="view-btn"
                  data-page="assignments"
                >
                  View All
                </button>

              </div>

              <div class="assignment-list">

                <div class="assignment-item">
                  <div>
                    <strong>Mathematics Chapter 5</strong>
                    <span>Due: 28 Aug 2026</span>
                  </div>
                  <span class="status pending">Pending</span>
                </div>

                <div class="assignment-item">
                  <div>
                    <strong>Science Project</strong>
                    <span>Due: 30 Aug 2026</span>
                  </div>
                  <span class="status submitted">Submitted</span>
                </div>

                <div class="assignment-item">
                  <div>
                    <strong>English Essay</strong>
                    <span>Due: 02 Sep 2026</span>
                  </div>
                  <span class="status pending">Pending</span>
                </div>

              </div>

            </div>

            <div class="dashboard-card">

              <div class="card-header">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Frequently used options</p>
                </div>
              </div>

              <div class="quick-actions">

                <button
                  type="button"
                  data-page="attendance"
                >
                  <span>📅</span>
                  Attendance
                </button>

                <button
                  type="button"
                  data-page="results"
                >
                  <span>📊</span>
                  Results
                </button>

                <button
                  type="button"
                  data-page="study-material"
                >
                  <span>📚</span>
                  Study Material
                </button>

                <button
                  type="button"
                  data-page="notices"
                >
                  <span>📢</span>
                  Notices
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  `
}


function openStudentMobileMenu() {
  const sidebar =
    document.getElementById(
      'studentSidebar'
    )

  const overlay =
    document.getElementById(
      'studentSidebarOverlay'
    )

  const button =
    document.getElementById(
      'studentMobileMenuBtn'
    )

  if (sidebar) {
    sidebar.classList.add(
      'mobile-open'
    )
  }

  if (overlay) {
    overlay.classList.add(
      'active'
    )
  }

  if (button) {
    button.setAttribute(
      'aria-expanded',
      'true'
    )
  }

  document.body.classList.add(
    'student-menu-open'
  )
}


function closeStudentMobileMenu() {
  const sidebar =
    document.getElementById(
      'studentSidebar'
    )

  const overlay =
    document.getElementById(
      'studentSidebarOverlay'
    )

  const button =
    document.getElementById(
      'studentMobileMenuBtn'
    )

  if (sidebar) {
    sidebar.classList.remove(
      'mobile-open'
    )
  }

  if (overlay) {
    overlay.classList.remove(
      'active'
    )
  }

  if (button) {
    button.setAttribute(
      'aria-expanded',
      'false'
    )
  }

  document.body.classList.remove(
    'student-menu-open'
  )
}


function setActiveStudentNav(page) {
  document
    .querySelectorAll(
      '.student-dashboard .nav-item[data-page]'
    )
    .forEach((item) => {

      item.classList.toggle(
        'active',
        item.dataset.page === page
      )

    })
}


async function loadStudentPage(
  page,
  studentName = 'Student'
) {
  const app =
    document.getElementById('app')

  if (!app) {
    return
  }

  closeStudentMobileMenu()

  switch (page) {

    case 'dashboard':

      app.innerHTML =
        StudentDashboard(
          studentName
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'dashboard'
      )

      break


    case 'profile':

      app.innerHTML =
        StudentPage(
          studentName,
          'My Profile'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'profile'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        StudentProfile(
          studentName
        )

      setupBackToDashboard(
        studentName
      )

      break


    case 'classes':

      app.innerHTML =
        StudentPage(
          studentName,
          'My Classes'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'classes'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        StudentClasses(
          studentName
        )

      setupBackToDashboard(
        studentName
      )

      break


    case 'assignments':

      app.innerHTML =
        StudentPage(
          studentName,
          'Assignments'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'assignments'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        Assignments(
          studentName
        )

      setupAssignmentNavigation(
        studentName
      )

      setupBackToDashboard(
        studentName
      )

      break


    case 'attendance':

      app.innerHTML =
        StudentPage(
          studentName,
          'Attendance'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'attendance'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        StudentAttendance(
          studentName
        )

      setupStudentAttendanceNavigation(
        studentName
      )

      setupBackToDashboard(
        studentName
      )

      break


    case 'results':

      app.innerHTML =
        StudentPage(
          studentName,
          'Results'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'results'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        StudentResults(
          studentName
        )

      setupStudentResultsNavigation(
        studentName
      )

      setupBackToDashboard(
        studentName
      )

      break


    case 'notices':

      app.innerHTML =
        StudentPage(
          studentName,
          'Notices'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'notices'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        StudentNotices(
          studentName
        )

      setupStudentNoticesNavigation(
        studentName
      )

      setupBackToDashboard(
        studentName
      )

      break


    case 'study-material':

      app.innerHTML =
        StudentPage(
          studentName,
          'Study Material'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'study-material'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        StudentStudyMaterial(
          studentName
        )

      setupStudentStudyMaterialNavigation(
        studentName
      )

      setupBackToDashboard(
        studentName
      )

      break


    case 'messages':

      app.innerHTML =
        StudentPage(
          studentName,
          'Messages'
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'messages'
      )

      app.querySelector(
        '.student-page-content'
      ).innerHTML =
        StudentMessages(
          studentName
        )

      setupStudentMessagesNavigation(
        studentName
      )

      setupBackToDashboard(
        studentName
      )

      break


    default:

      app.innerHTML =
        StudentDashboard(
          studentName
        )

      setupStudentNavigation(
        studentName
      )

      setActiveStudentNav(
        'dashboard'
      )
  }

  closeStudentMobileMenu()

  scrollToTop()
}


function StudentPage(
  studentName,
  title
) {
  return `
    <div class="dashboard student-dashboard">

      ${getStudentSidebar()}

      <main class="dashboard-main">

        ${getStudentHeader(studentName)}

        <section class="dashboard-content">

          <div class="student-page-content">

          </div>

        </section>

      </main>

    </div>
  `
}


function setupPageNavigation(studentName) {
  const buttons =
    document.querySelectorAll(
      '.student-dashboard [data-page]'
    )

  buttons.forEach((button) => {

    button.onclick = async (event) => {

      event.preventDefault()
      event.stopPropagation()

      const page =
        button.dataset.page

      if (!page) {
        return
      }

      closeStudentMobileMenu()

      await loadStudentPage(
        page,
        studentName
      )

      closeStudentMobileMenu()
    }
  })
}


function setupBackToDashboard(studentName) {
  const backButton =
    document.getElementById(
      'backToDashboard'
    )

  if (!backButton) {
    return
  }

  backButton.onclick = async (event) => {

    event.preventDefault()
    event.stopPropagation()

    await loadStudentPage(
      'dashboard',
      studentName
    )
  }
}


export function setupStudentNavigation(
  studentName = 'Student'
) {

  const menuButton =
    document.getElementById(
      'studentMobileMenuBtn'
    )

  if (menuButton) {

    menuButton.onclick = (event) => {

      event.preventDefault()
      event.stopPropagation()

      const sidebar =
        document.getElementById(
          'studentSidebar'
        )

      if (
        sidebar &&
        sidebar.classList.contains(
          'mobile-open'
        )
      ) {
        closeStudentMobileMenu()
      } else {
        openStudentMobileMenu()
      }
    }
  }


  const closeButton =
    document.getElementById(
      'studentSidebarClose'
    )

  if (closeButton) {

    closeButton.onclick = (event) => {

      event.preventDefault()
      event.stopPropagation()

      closeStudentMobileMenu()
    }
  }


  const overlay =
    document.getElementById(
      'studentSidebarOverlay'
    )

  if (overlay) {

    overlay.onclick = (event) => {

      event.preventDefault()
      event.stopPropagation()

      closeStudentMobileMenu()
    }
  }


  setupPageNavigation(
    studentName
  )


  const logoutButton =
    document.getElementById(
      'logoutBtn'
    )

  if (logoutButton) {

    logoutButton.onclick = (event) => {

      event.preventDefault()
      event.stopPropagation()

      closeStudentMobileMenu()

      const confirmed =
        window.confirm(
          'Are you sure you want to logout?'
        )

      if (!confirmed) {
        return
      }

      const keys = [
        'studentToken',
        'studentUser',
        'studentData',
        'studentInfo',
        'studentName'
      ]

      keys.forEach((key) => {
        localStorage.removeItem(key)
        sessionStorage.removeItem(key)
      })

      window.location.reload()
    }
  }


  document.onkeydown = (event) => {

    if (event.key === 'Escape') {
      closeStudentMobileMenu()
    }
  }


  closeStudentMobileMenu()
}