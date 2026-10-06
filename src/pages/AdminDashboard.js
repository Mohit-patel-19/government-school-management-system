/* ========================================= 
   ADMIN DASHBOARD 
========================================= */ 
 
import "./AdminStudents.css"; 
 
 
/* ========================================= 
   ADMIN PANEL ROUTES 
========================================= */ 
 
const ADMIN_ROUTES = [ 
  { id: "dashboard", title: "Dashboard", icon: "📊" }, 
  { id: "students", title: "Students", icon: "👨‍🎓" }, 
  { id: "teachers", title: "Teachers", icon: "👨‍🏫" }, 
  { id: "parents", title: "Parents", icon: "👨‍👩‍👧" }, 
  { id: "classes", title: "Classes & Sections", icon: "🏫" }, 
  { id: "attendance", title: "Attendance", icon: "📅" }, 
  { id: "results", title: "Results", icon: "📝" }, 
  { id: "fees", title: "Fees", icon: "💰" }, 
  { id: "payroll", title: "Payroll & Salary", icon: "💳" }, 
  { id: "assignments", title: "Assignments", icon: "📚" }, 
  { id: "notices", title: "Notices", icon: "📢" }, 
  { id: "documents", title: "Documents", icon: "📄" }, 
  { id: "messages", title: "Messages", icon: "💬" }, 
  { id: "reports", title: "Reports", icon: "📈" }, 
  { id: "users", title: "Users & Permissions", icon: "👥" }, 
  { id: "audit", title: "Audit Logs", icon: "🔐" }, 
  { id: "objectives", title: "Objectives & Goals", icon: "🎯" }, 
  { id: "settings", title: "Settings", icon: "⚙️" } 
]; 
 
 
/* ========================================= 
   ADMIN DASHBOARD 
========================================= */ 
 
export function AdminDashboard( 
  adminName = "Administrator" 
) { 
 
  return ` 
    <div class="admin-panel"> 
 
      <aside class="admin-sidebar"> 
 
        <div class="admin-sidebar-logo"> 
 
          <div class="admin-sidebar-icon"> 
            🏫 
          </div> 
 
          <div> 
            <h2> 
              Government School 
            </h2> 
 
            <span> 
              Admin Panel 
            </span> 
          </div> 
 
        </div> 
 
        <nav class="admin-sidebar-nav"> 
 
          ${ADMIN_ROUTES.map((route) => ` 
            <button 
              type="button" 
              class="admin-nav-item ${ 
                route.id === "dashboard" 
                  ? "active" 
                  : "" 
              }" 
              data-admin-route="${route.id}" 
            > 
 
              <span class="admin-nav-icon"> 
                ${route.icon} 
              </span> 
 
              <span> 
                ${route.title} 
              </span> 
 
            </button> 
          `).join("")} 
 
        </nav> 
 
        <div class="admin-sidebar-bottom"> 
 
          <button 
            type="button" 
            class="admin-logout-btn" 
            data-admin-logout 
          > 
 
            <span>🚪</span> 
 
            <span>Logout</span> 
 
          </button> 
 
        </div> 
 
      </aside> 
 
      <main class="admin-main"> 
 
        <header class="admin-header"> 
 
          <div class="admin-header-title"> 
 
            <button 
              type="button" 
              class="admin-mobile-menu" 
              data-admin-mobile-menu 
              aria-label="Open menu" 
            > 
              ☰ 
            </button> 
 
            <div> 
 
              <h1 id="admin-page-title"> 
                Admin Dashboard 
              </h1> 
 
              <p id="admin-page-subtitle"> 
                Manage your school from one place 
              </p> 
 
            </div> 
 
          </div> 
 
          <div class="admin-header-actions"> 
 
            <button 
              type="button" 
              class="admin-notification-btn" 
              data-admin-notifications 
              aria-label="Notifications" 
            > 
              🔔 
              <span class="admin-notification-dot"></span> 
            </button> 
 
            <div class="admin-profile"> 
 
              <div class="admin-profile-avatar"> 
                ${getInitials(adminName)} 
              </div> 
 
              <div class="admin-profile-info"> 
 
                <strong> 
                  ${escapeHtml(adminName)} 
                </strong> 
 
                <span> 
                  Administrator 
                </span> 
 
              </div> 
 
            </div> 
 
          </div> 
 
        </header> 
 
        <section 
          class="admin-page-container" 
          id="admin-page-content" 
        > 
 
          ${getDashboardContent()} 
 
        </section> 
 
      </main> 
 
    </div> 
  `; 
 
} 
 
 
/* ========================================= 
   DASHBOARD CONTENT 
========================================= */ 
 
function getDashboardContent() { 
 
  return ` 
 
    <div class="admin-welcome-card"> 
 
      <div> 
 
        <span class="admin-welcome-label"> 
          WELCOME BACK 
        </span> 
 
        <h2> 
          School Administration 👋 
        </h2> 
 
        <p> 
          Monitor school performance, manage users and keep 
          everything organized from your admin panel. 
        </p> 
 
      </div> 
 
      <div class="admin-welcome-icon"> 
        🏫 
      </div> 
 
    </div> 
 
    <div class="admin-stats-grid"> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon blue"> 
          👨‍🎓 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>Total Students</span> 
          <strong>1,248</strong> 
          <small>↑ 8.4% this session</small> 
        </div> 
 
      </div> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon green"> 
          👨‍🏫 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>Total Teachers</span> 
          <strong>64</strong> 
          <small>↑ 4 new this year</small> 
        </div> 
 
      </div> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon orange"> 
          👨‍👩‍👧 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>Total Parents</span> 
          <strong>1,036</strong> 
          <small>92% accounts active</small> 
        </div> 
 
      </div> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon purple"> 
          🏫 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>Classes</span> 
          <strong>32</strong> 
          <small>All sections active</small> 
        </div> 
 
      </div> 
 
    </div> 
 
    <div class="admin-stats-grid admin-secondary-stats"> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon green"> 
          📅 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>Today's Attendance</span> 
          <strong>94.6%</strong> 
          <small>Good attendance</small> 
        </div> 
 
      </div> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon orange"> 
          💰 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>Pending Fees</span> 
          <strong>₹2.84L</strong> 
          <small>Needs attention</small> 
        </div> 
 
      </div> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon blue"> 
          📝 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>Pending Results</span> 
          <strong>06</strong> 
          <small>Exams awaiting review</small> 
        </div> 
 
      </div> 
 
      <div class="admin-stat-card"> 
 
        <div class="admin-stat-icon purple"> 
          🎯 
        </div> 
 
        <div class="admin-stat-content"> 
          <span>School Goals</span> 
          <strong>78%</strong> 
          <small>Overall progress</small> 
        </div> 
 
      </div> 
 
    </div> 
 
    <div class="admin-dashboard-grid"> 
 
      <div class="admin-dashboard-card"> 
 
        <div class="admin-card-header"> 
 
          <div> 
            <h3>School Overview</h3> 
            <span>Current academic session</span> 
          </div> 
 
          <button 
            type="button" 
            class="admin-view-btn" 
            data-admin-route="reports" 
          > 
            View Reports 
          </button> 
 
        </div> 
 
        <div class="admin-info-list"> 
 
          <div class="admin-info-item"> 
 
            <div class="admin-info-icon">📚</div> 
 
            <div> 
              <span>Academic Session</span> 
              <strong>2026 - 2027</strong> 
            </div> 
 
          </div> 
 
          <div class="admin-info-item"> 
 
            <div class="admin-info-icon">🎓</div> 
 
            <div> 
              <span>School Level</span> 
              <strong>Secondary & Senior Secondary</strong> 
            </div> 
 
          </div> 
 
          <div class="admin-info-item"> 
 
            <div class="admin-info-icon">📍</div> 
 
            <div> 
              <span>School Status</span> 
              <strong class="admin-status active-status">Active</strong> 
            </div> 
 
          </div> 
 
          <div class="admin-info-item"> 
 
            <div class="admin-info-icon">📊</div> 
 
            <div> 
              <span>Overall Performance</span> 
              <strong>86.4%</strong> 
            </div> 
 
          </div> 
 
        </div> 
 
      </div> 
 
      <div class="admin-dashboard-card"> 
 
        <div class="admin-card-header"> 
 
          <div> 
            <h3>Today's Activity</h3> 
            <span>Latest school updates</span> 
          </div> 
 
          <button 
            type="button" 
            class="admin-view-btn" 
            data-admin-route="audit" 
          > 
            View All 
          </button> 
 
        </div> 
 
        <div class="admin-activity-list"> 
 
          <div class="admin-activity-item"> 
 
            <div class="admin-activity-icon">👨‍🎓</div> 
 
            <div> 
              <strong>12 students admitted</strong> 
              <span>Today, 10:30 AM</span> 
            </div> 
 
          </div> 
 
          <div class="admin-activity-item"> 
 
            <div class="admin-activity-icon">💰</div> 
 
            <div> 
              <strong>24 fee payments received</strong> 
              <span>Today, 11:15 AM</span> 
            </div> 
 
          </div> 
 
          <div class="admin-activity-item"> 
 
            <div class="admin-activity-icon">📢</div> 
 
            <div> 
              <strong>New school notice published</strong> 
              <span>Today, 12:05 PM</span> 
            </div> 
 
          </div> 
 
          <div class="admin-activity-item"> 
 
            <div class="admin-activity-icon">📝</div> 
 
            <div> 
              <strong>Class 10 results updated</strong> 
              <span>Today, 01:20 PM</span> 
            </div> 
 
          </div> 
 
        </div> 
 
      </div> 
 
    </div> 
 
    <div class="admin-dashboard-card admin-quick-card"> 
 
      <div class="admin-card-header"> 
 
        <div> 
          <h3>Quick Management</h3> 
          <span>Frequently used administration tools</span> 
        </div> 
 
      </div> 
 
      <div class="admin-quick-actions"> 
 
        <button type="button" class="admin-quick-action" data-admin-route="students"> 
          <span>👨‍🎓</span> 
          <strong>Students</strong> 
          <small>Manage students</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="teachers"> 
          <span>👨‍🏫</span> 
          <strong>Teachers</strong> 
          <small>Manage staff</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="parents"> 
          <span>👨‍👩‍👧</span> 
          <strong>Parents</strong> 
          <small>Manage parents</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="classes"> 
          <span>🏫</span> 
          <strong>Classes</strong> 
          <small>Manage classes</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="attendance"> 
          <span>📅</span> 
          <strong>Attendance</strong> 
          <small>Daily records</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="results"> 
          <span>📝</span> 
          <strong>Results</strong> 
          <small>Manage exams</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="fees"> 
          <span>💰</span> 
          <strong>Fees</strong> 
          <small>Fee management</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="payroll"> 
          <span>💳</span> 
          <strong>Payroll</strong> 
          <small>Salary management</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="assignments"> 
          <span>📚</span> 
          <strong>Assignments</strong> 
          <small>Manage assignments</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="notices"> 
          <span>📢</span> 
          <strong>Notices</strong> 
          <small>School notices</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="documents"> 
          <span>📄</span> 
          <strong>Documents</strong> 
          <small>Manage documents</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="messages"> 
          <span>💬</span> 
          <strong>Messages</strong> 
          <small>Manage messages</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="reports"> 
          <span>📈</span> 
          <strong>Reports</strong> 
          <small>Analytics</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="users"> 
          <span>👥</span> 
          <strong>Users & Permissions</strong> 
          <small>Access control</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="audit"> 
          <span>🔐</span> 
          <strong>Audit Logs</strong> 
          <small>Security & activity logs</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="objectives"> 
          <span>🎯</span> 
          <strong>Objectives & Goals</strong> 
          <small>School goals & progress</small> 
        </button> 
 
        <button type="button" class="admin-quick-action" data-admin-route="settings"> 
          <span>⚙️</span> 
          <strong>Settings</strong> 
          <small>School system settings</small> 
        </button> 
 
      </div> 
 
    </div> 
 
    <div class="admin-dashboard-card admin-objectives-card"> 
 
      <div class="admin-card-header"> 
 
        <div> 
          <h3>School Objectives & Goals</h3> 
          <span>Strategic progress for 2026 - 2027</span> 
        </div> 
 
        <button 
          type="button" 
          class="admin-view-btn" 
          data-admin-route="objectives" 
        > 
          Manage Goals 
        </button> 
 
      </div> 
 
      <div class="admin-goal-progress"> 
 
        <div class="admin-goal-row"> 
          <div> 
            <strong>Academic Performance</strong> 
            <span>Target: 90%</span> 
          </div> 
          <strong>82%</strong> 
        </div> 
 
        <div class="admin-progress-bar"> 
          <span style="width:82%;"></span> 
        </div> 
 
        <div class="admin-goal-row"> 
          <div> 
            <strong>Student Attendance</strong> 
            <span>Target: 95%</span> 
          </div> 
          <strong>94%</strong> 
        </div> 
 
        <div class="admin-progress-bar"> 
          <span style="width:94%;"></span> 
        </div> 
 
        <div class="admin-goal-row"> 
          <div> 
            <strong>Digital Education</strong> 
            <span>Target: 100%</span> 
          </div> 
          <strong>76%</strong> 
        </div> 
 
        <div class="admin-progress-bar"> 
          <span style="width:76%;"></span> 
        </div> 
 
        <div class="admin-goal-row"> 
          <div> 
            <strong>Infrastructure Development</strong> 
            <span>Target: 90%</span> 
          </div> 
          <strong>68%</strong> 
        </div> 
 
        <div class="admin-progress-bar"> 
          <span style="width:68%;"></span> 
        </div> 
 
      </div> 
 
    </div> 
 
    <div class="admin-dashboard-card admin-recent-card"> 
 
      <div class="admin-card-header"> 
 
        <div> 
          <h3>Recent Activities</h3> 
          <span>Latest administration actions</span> 
        </div> 
 
        <button 
          type="button" 
          class="admin-view-btn" 
          data-admin-route="audit" 
        > 
          Audit Logs 
        </button> 
 
      </div> 
 
      <div class="admin-activity-list"> 
 
        <div class="admin-activity-item"> 
 
          <div class="admin-activity-icon">➕</div> 
 
          <div> 
            <strong>New student record created</strong> 
            <span>Class 9-A • 20 minutes ago</span> 
          </div> 
 
          <span class="admin-status submitted"> 
            Completed 
          </span> 
 
        </div> 
 
        <div class="admin-activity-item"> 
 
          <div class="admin-activity-icon">💳</div> 
 
          <div> 
            <strong>Teacher salary processed</strong> 
            <span>Payroll • 45 minutes ago</span> 
          </div> 
 
          <span class="admin-status submitted"> 
            Paid 
          </span> 
 
        </div> 
 
        <div class="admin-activity-item"> 
 
          <div class="admin-activity-icon">📢</div> 
 
          <div> 
            <strong>Notice published</strong> 
            <span>All Parents • 1 hour ago</span> 
          </div> 
 
          <span class="admin-status submitted"> 
            Published 
          </span> 
 
        </div> 
 
      </div> 
 
    </div> 
 
  `; 
 
} 
 
 
/* ========================================= 
   SETUP ADMIN NAVIGATION 
========================================= */ 
 
export function setupAdminNavigation() { 
 
  const adminPanel = 
    document.querySelector(".admin-panel"); 
 
  if (!adminPanel) { 
    return; 
  } 
 
  if ( 
    adminPanel.dataset.navigationReady === "true" 
  ) { 
    return; 
  } 
 
  adminPanel.dataset.navigationReady = "true"; 
 
  adminPanel.addEventListener( 
    "click", 
    (event) => { 
 
      const routeButton = 
        event.target.closest("[data-admin-route]"); 
 
      if ( 
        routeButton && 
        adminPanel.contains(routeButton) 
      ) { 
 
        event.preventDefault(); 
 
        const route = 
          routeButton.dataset.adminRoute; 
 
        if (!route) { 
          return; 
        } 
 
        navigateAdmin(route); 
        return; 
      } 
 
      const logoutButton = 
        event.target.closest("[data-admin-logout]"); 
 
      if (logoutButton) { 
 
        event.preventDefault(); 
        handleAdminLogout(); 
        return; 
      } 
 
      const mobileButton = 
        event.target.closest("[data-admin-mobile-menu]"); 
 
      if (mobileButton) { 
 
        event.preventDefault(); 
 
        adminPanel.classList.toggle( 
          "mobile-menu-open" 
        ); 
 
        return; 
      } 
 
      const notificationButton = 
        event.target.closest("[data-admin-notifications]"); 
 
      if (notificationButton) { 
 
        event.preventDefault(); 
 
        alert( 
          "Notifications feature will be available here." 
        ); 
 
      } 
 
    } 
  ); 
 
  if ( 
    window.__adminHistoryListenerAttached !== true 
  ) { 
 
    window.__adminHistoryListenerAttached = true; 
 
    window.addEventListener( 
      "popstate", 
      () => { 
 
        const route = getRouteFromUrl(); 
 
        navigateAdmin(route, false); 
 
      } 
    ); 
 
  } 
 
  const initialRoute = getRouteFromUrl(); 
 
  if (initialRoute !== "dashboard") { 
    navigateAdmin(initialRoute, false); 
  } 
 
} 
 
 
/* ========================================= 
   ADMIN NAVIGATION 
========================================= */ 
 
async function navigateAdmin( 
  route, 
  addHistory = true 
) { 
 
  const validRoute = 
    ADMIN_ROUTES.some( 
      (item) => item.id === route 
    ) 
      ? route 
      : "dashboard"; 
 
  if (addHistory) { 
 
    const url = 
      new URL(window.location.href); 
 
    url.searchParams.set( 
      "admin", 
      validRoute 
    ); 
 
    window.history.pushState( 
      { adminRoute: validRoute }, 
      "", 
      url 
    ); 
 
  } 
 
  const adminPanel = 
    document.querySelector(".admin-panel"); 
 
  if (adminPanel) { 
 
    adminPanel 
      .querySelectorAll("[data-admin-route]") 
      .forEach((item) => { 
 
        const itemRoute = 
          item.dataset.adminRoute; 
 
        if (itemRoute === validRoute) { 
          item.classList.add("active"); 
        } else { 
          item.classList.remove("active"); 
        } 
 
      }); 
 
  } 
 
  const content = 
    document.querySelector("#admin-page-content"); 
 
  const title = 
    document.querySelector("#admin-page-title"); 
 
  const subtitle = 
    document.querySelector("#admin-page-subtitle"); 
 
  if (!content) { 
    return; 
  } 
 
  const routeInfo = 
    ADMIN_ROUTES.find( 
      (item) => item.id === validRoute 
    ); 
 
  if (!routeInfo) { 
    return; 
  } 
 
  if (title) { 
 
    title.textContent = 
      validRoute === "dashboard" 
        ? "Admin Dashboard" 
        : routeInfo.title; 
 
  } 
 
  if (subtitle) { 
 
    subtitle.textContent = 
      validRoute === "dashboard" 
        ? "Manage your school from one place" 
        : `Manage ${routeInfo.title.toLowerCase()} from admin panel`; 
 
  } 
 
  /* ========================================= 
     DASHBOARD 
  ========================================== */ 
 
  if (validRoute === "dashboard") { 
 
    content.innerHTML = 
      getDashboardContent(); 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     STUDENTS 
  ========================================== */ 
 
  if (validRoute === "students") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Student Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminStudents.js"); 
 
      if ( 
        typeof module.AdminStudents !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminStudents function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminStudents(); 
 
      if ( 
        typeof module.setupAdminStudents === 
        "function" 
      ) { 
 
        module.setupAdminStudents(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminStudents loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "👨‍🎓", 
          "Student Management", 
          "Unable to load Student Management module.", 
          "AdminStudents.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     TEACHERS 
  ========================================== */ 
 
  if (validRoute === "teachers") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Teacher Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminTeachers.js"); 
 
      if ( 
        typeof module.AdminTeachers !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminTeachers function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminTeachers(); 
 
      if ( 
        typeof module.setupAdminTeachers === 
        "function" 
      ) { 
 
        module.setupAdminTeachers(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminTeachers loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "👨‍🏫", 
          "Teacher Management", 
          "Unable to load Teacher Management module.", 
          "AdminTeachers.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     PARENTS 
  ========================================== */ 
 
  if (validRoute === "parents") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Parent Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminParents.js"); 
 
      if ( 
        typeof module.AdminParents !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminParents function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminParents(); 
 
      if ( 
        typeof module.setupAdminParents === 
        "function" 
      ) { 
 
        module.setupAdminParents(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminParents loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "👨‍👩‍👧", 
          "Parent Management", 
          "Unable to load Parent Management module.", 
          "AdminParents.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     CLASSES 
  ========================================== */ 
 
  if (validRoute === "classes") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Classes & Sections... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminClasses.js"); 
 
      if ( 
        typeof module.AdminClasses !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminClasses function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminClasses(); 
 
      if ( 
        typeof module.setupAdminClasses === 
        "function" 
      ) { 
 
        module.setupAdminClasses(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminClasses loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "🏫", 
          "Classes & Sections", 
          "Unable to load Classes & Sections module.", 
          "AdminClasses.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     ATTENDANCE 
  ========================================== */ 
 
  if (validRoute === "attendance") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Attendance Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminAttendance.js"); 
 
      if ( 
        typeof module.AdminAttendance !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminAttendance function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminAttendance(); 
 
      if ( 
        typeof module.setupAdminAttendance === 
        "function" 
      ) { 
 
        module.setupAdminAttendance(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminAttendance loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "📅", 
          "Attendance Management", 
          "Unable to load Attendance Management module.", 
          "AdminAttendance.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     RESULTS 
  ========================================== */ 
 
  if (validRoute === "results") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Results Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminResults.js"); 
 
      if ( 
        typeof module.AdminResults !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminResults function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminResults(); 
 
      if ( 
        typeof module.setupAdminResults === 
        "function" 
      ) { 
 
        module.setupAdminResults(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminResults loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "📝", 
          "Results Management", 
          "Unable to load Results Management module.", 
          "AdminResults.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     FEES 
  ========================================== */ 
 
  if (validRoute === "fees") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Fees Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminFees.js"); 
 
      if ( 
        typeof module.AdminFees !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminFees function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminFees(); 
 
      if ( 
        typeof module.setupAdminFees === 
        "function" 
      ) { 
 
        module.setupAdminFees(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminFees loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "💰", 
          "Fees Management", 
          "Unable to load Fees Management module.", 
          "AdminFees.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     PAYROLL 
  ========================================== */ 
 
  if (validRoute === "payroll") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Payroll & Salary... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminPayroll.js"); 
 
      if ( 
        typeof module.AdminPayroll !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminPayroll function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminPayroll(); 
 
      if ( 
        typeof module.setupAdminPayroll === 
        "function" 
      ) { 
 
        module.setupAdminPayroll(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminPayroll loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "💳", 
          "Payroll & Salary", 
          "Unable to load Payroll & Salary module.", 
          "AdminPayroll.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     ASSIGNMENTS 
  ========================================== */ 
 
  if (validRoute === "assignments") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Assignment Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminAssignments.js"); 
 
      if ( 
        typeof module.AdminAssignments !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminAssignments function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminAssignments(); 
 
      if ( 
        typeof module.setupAdminAssignments === 
        "function" 
      ) { 
 
        module.setupAdminAssignments(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminAssignments loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "📚", 
          "Assignment Management", 
          "Unable to load Assignment Management module.", 
          "AdminAssignments.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     NOTICES 
  ========================================== */ 
 
  if (validRoute === "notices") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Notice Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminNotices.js"); 
 
      if ( 
        typeof module.AdminNotices !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminNotices function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminNotices(); 
 
      if ( 
        typeof module.setupAdminNotices === 
        "function" 
      ) { 
 
        module.setupAdminNotices(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminNotices loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "📢", 
          "Notice Management", 
          "Unable to load Notice Management module.", 
          "AdminNotices.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     DOCUMENTS 
  ========================================== */ 
 
  if (validRoute === "documents") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Document Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminDocuments.js"); 
 
      if ( 
        typeof module.AdminDocuments !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminDocuments function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminDocuments(); 
 
      if ( 
        typeof module.setupAdminDocumentsNavigation === 
        "function" 
      ) { 
 
        module.setupAdminDocumentsNavigation(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminDocuments loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "📄", 
          "Document Management", 
          "Unable to load Document Management module.", 
          "AdminDocuments.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     MESSAGES 
  ========================================== */ 
 
  if (validRoute === "messages") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Message Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminMessages.js"); 
 
      if ( 
        typeof module.AdminMessages !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminMessages function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminMessages(); 
 
      if ( 
        typeof module.setupAdminMessagesNavigation === 
        "function" 
      ) { 
 
        module.setupAdminMessagesNavigation(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminMessages loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "💬", 
          "Message Management", 
          "Unable to load Message Management module.", 
          "AdminMessages.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     REPORTS 
  ========================================== */ 
 
  if (validRoute === "reports") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Reports Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminReports.js"); 
 
      if ( 
        typeof module.AdminReports !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminReports function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminReports(); 
 
      if ( 
        typeof module.setupAdminReportsNavigation === 
        "function" 
      ) { 
 
        module.setupAdminReportsNavigation(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminReports loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "📈", 
          "Reports Management", 
          "Unable to load Reports Management module.", 
          "AdminReports.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     USERS & PERMISSIONS 
  ========================================== */ 
 
  if (validRoute === "users") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Users & Permissions Management... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminUsersPermissions.js"); 
 
      if ( 
        typeof module.AdminUsersPermissions !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminUsersPermissions function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminUsersPermissions(); 
 
      if ( 
        typeof module.setupAdminUsersPermissionsNavigation === 
        "function" 
      ) { 
 
        module.setupAdminUsersPermissionsNavigation(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminUsersPermissions loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "👥", 
          "Users & Permissions", 
          "Unable to load Users & Permissions module.", 
          "AdminUsersPermissions.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     AUDIT LOGS 
  ========================================== */ 
 
  if (validRoute === "audit") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Audit Logs... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminAuditLogs.js"); 
 
      if ( 
        typeof module.AdminAuditLogs !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminAuditLogs function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminAuditLogs(); 
 
      if ( 
        typeof module.setupAdminAuditLogsNavigation === 
        "function" 
      ) { 
 
        module.setupAdminAuditLogsNavigation(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminAuditLogs loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "🔐", 
          "Audit Logs", 
          "Unable to load Audit Logs module.", 
          "AdminAuditLogs.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     OBJECTIVES & GOALS 
  ========================================== */ 
 
  if (validRoute === "objectives") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Objectives & Goals... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminObjectives.js"); 
 
      if ( 
        typeof module.AdminObjectives !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminObjectives function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminObjectives(); 
 
      if ( 
        typeof module.setupAdminObjectivesNavigation === 
        "function" 
      ) { 
 
        module.setupAdminObjectivesNavigation(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminObjectives loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "🎯", 
          "Objectives & Goals", 
          "Unable to load Objectives & Goals module.", 
          "AdminObjectives.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     SETTINGS MODULE
  ========================================== */ 
 
  if (validRoute === "settings") { 
 
    content.innerHTML = ` 
      <div class="admin-module-loading"> 
        Loading Settings... 
      </div> 
    `; 
 
    try { 
 
      const module = 
        await import("./AdminSettings.js"); 
 
      if ( 
        typeof module.AdminSettings !== 
        "function" 
      ) { 
 
        throw new Error( 
          "AdminSettings function not found." 
        ); 
 
      } 
 
      content.innerHTML = 
        module.AdminSettings(); 
 
      if ( 
        typeof module.setupAdminSettingsNavigation === 
        "function" 
      ) { 
 
        module.setupAdminSettingsNavigation(); 
 
      } 
 
    } catch (error) { 
 
      console.error( 
        "AdminSettings loading error:", 
        error 
      ); 
 
      content.innerHTML = 
        getModuleError( 
          "⚙️", 
          "Settings", 
          "Unable to load Settings module.", 
          "AdminSettings.js" 
        ); 
 
    } 
 
    closeMobileMenu(); 
    return; 
 
  } 
 
  /* ========================================= 
     OTHER MODULES 
  ========================================== */ 
 
  content.innerHTML = 
    getModulePlaceholder(routeInfo); 
 
  closeMobileMenu(); 
 
} 
 
 
/* ========================================= 
   MODULE ERROR 
========================================= */ 
 
function getModuleError( 
  icon, 
  title, 
  message, 
  fileName 
) { 
 
  return ` 
 
    <div class="admin-module-error"> 
 
      <div class="admin-error-icon"> 
        ${icon} 
      </div> 
 
      <h2> 
        ${escapeHtml(title)} 
      </h2> 
 
      <p> 
        ${escapeHtml(message)} 
      </p> 
 
      <div class="admin-error-details"> 
 
        Please check that 
 
        <strong> 
          ${escapeHtml(fileName)} 
        </strong> 
 
        exists inside the 
 
        <strong> 
          src/pages 
        </strong> 
 
        folder. 
 
      </div> 
 
      <div class="admin-error-actions"> 
 
        <button 
          type="button" 
          class="admin-primary-btn" 
          data-admin-route="dashboard" 
        > 
          ← Back to Dashboard 
        </button> 
 
      </div> 
 
    </div> 
 
  `; 
 
} 
 
 
/* ========================================= 
   MODULE PLACEHOLDER 
========================================= */ 
 
function getModulePlaceholder( 
  route 
) { 
 
  return ` 
 
    <div class="admin-module-error"> 
 
      <div class="admin-error-icon"> 
        ${route.icon} 
      </div> 
 
      <h2> 
        ${escapeHtml(route.title)} 
      </h2> 
 
      <p> 
 
        This module is ready for integration. 
        We will build the complete 
        ${escapeHtml(route.title)} 
        management system next. 
 
      </p> 
 
      <div class="admin-error-actions"> 
 
        <button 
          type="button" 
          class="admin-primary-btn" 
          data-admin-route="dashboard" 
        > 
          ← Back to Dashboard 
        </button> 
 
      </div> 
 
    </div> 
 
  `; 
 
} 
 
 
/* ========================================= 
   GET ROUTE FROM URL 
========================================= */ 
 
function getRouteFromUrl() { 
 
  try { 
 
    const params = 
      new URLSearchParams( 
        window.location.search 
      ); 
 
    const route = 
      params.get("admin"); 
 
    if (!route) { 
      return "dashboard"; 
    } 
 
    const exists = 
      ADMIN_ROUTES.some( 
        (item) => item.id === route 
      ); 
 
    return exists 
      ? route 
      : "dashboard"; 
 
  } catch (error) { 
 
    console.error( 
      "Admin URL error:", 
      error 
    ); 
 
    return "dashboard"; 
 
  } 
 
} 
 
 
/* ========================================= 
   LOGOUT 
========================================= */ 
 
function handleAdminLogout() { 
 
  const confirmed = 
    window.confirm( 
      "Are you sure you want to logout?" 
    ); 
 
  if (!confirmed) { 
    return; 
  } 
 
  try { 
 
    sessionStorage.removeItem( 
      "adminUser" 
    ); 
 
  } catch (error) { 
 
    console.warn( 
      "Unable to clear admin session:", 
      error 
    ); 
 
  } 
 
  window.location.reload(); 
 
} 
 
 
/* ========================================= 
   CLOSE MOBILE MENU 
========================================= */ 
 
function closeMobileMenu() { 
 
  const panel = 
    document.querySelector( 
      ".admin-panel" 
    ); 
 
  if (!panel) { 
    return; 
  } 
 
  panel.classList.remove( 
    "mobile-menu-open" 
  ); 
 
} 
 
 
/* ========================================= 
   INITIALS 
========================================= */ 
 
function getInitials(name) { 
 
  if (!name) { 
    return "AD"; 
  } 
 
  const words = 
    String(name) 
      .trim() 
      .split(/\s+/) 
      .filter(Boolean); 
 
  if (words.length === 1) { 
 
    return words[0] 
      .substring(0, 2) 
      .toUpperCase(); 
 
  } 
 
  return ( 
    words[0][0] + 
    words[words.length - 1][0] 
  ).toUpperCase(); 
 
} 
 
 
/* ========================================= 
   HTML ESCAPE 
========================================= */ 
 
function escapeHtml(value) { 
 
  return String(value ?? "") 
    .replace(/&/g, "&amp;") 
    .replace(/</g, "&lt;") 
    .replace(/>/g, "&gt;") 
    .replace(/"/g, "&quot;") 
    .replace(/'/g, "&#039;"); 
 
} 