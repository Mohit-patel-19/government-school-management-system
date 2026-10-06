/* =========================================================
   ADMIN AUDIT LOGS
   Government School Admin Panel
========================================================= */

import "./AdminAuditLogs.css";

/* =========================================================
   AUDIT LOG DATA
========================================================= */

let auditLogs = [
  {
    id: 1,
    date: "2026-09-08",
    time: "10:42:18 AM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Login",
    module: "Authentication",
    description: "Admin logged into the admin panel",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  },
  {
    id: 2,
    date: "2026-09-08",
    time: "10:35:44 AM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Create",
    module: "Users",
    description: "New teacher account created",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  },
  {
    id: 3,
    date: "2026-09-08",
    time: "10:28:12 AM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Update",
    module: "Students",
    description: "Student profile information updated",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  },
  {
    id: 4,
    date: "2026-09-08",
    time: "10:16:09 AM",
    user: "Principal",
    email: "principal@school.gov.in",
    role: "Principal",
    action: "Export",
    module: "Reports",
    description: "Student attendance report exported",
    ip: "192.168.1.25",
    device: "Edge / Windows",
    status: "Success"
  },
  {
    id: 5,
    date: "2026-09-08",
    time: "09:58:32 AM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Permission Change",
    module: "Users & Permissions",
    description: "Teacher permissions were updated",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  },
  {
    id: 6,
    date: "2026-09-08",
    time: "09:44:20 AM",
    user: "Teacher",
    email: "teacher@school.gov.in",
    role: "Teacher",
    action: "Login",
    module: "Authentication",
    description: "Teacher login attempt failed",
    ip: "192.168.1.44",
    device: "Chrome / Android",
    status: "Failed"
  },
  {
    id: 7,
    date: "2026-09-07",
    time: "04:32:15 PM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Delete",
    module: "Notices",
    description: "Old school notice deleted",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  },
  {
    id: 8,
    date: "2026-09-07",
    time: "03:18:44 PM",
    user: "Principal",
    email: "principal@school.gov.in",
    role: "Principal",
    action: "Create",
    module: "Notices",
    description: "New school notice published",
    ip: "192.168.1.25",
    device: "Edge / Windows",
    status: "Success"
  },
  {
    id: 9,
    date: "2026-09-07",
    time: "02:42:11 PM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Update",
    module: "Teachers",
    description: "Teacher profile updated",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  },
  {
    id: 10,
    date: "2026-09-07",
    time: "01:26:09 PM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Security Update",
    module: "Security",
    description: "Security policy settings updated",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  },
  {
    id: 11,
    date: "2026-09-06",
    time: "05:12:45 PM",
    user: "Teacher",
    email: "teacher2@school.gov.in",
    role: "Teacher",
    action: "Login",
    module: "Authentication",
    description: "Teacher logged into teacher portal",
    ip: "192.168.1.62",
    device: "Chrome / Android",
    status: "Success"
  },
  {
    id: 12,
    date: "2026-09-06",
    time: "04:48:22 PM",
    user: "Admin",
    email: "admin@school.gov.in",
    role: "Super Admin",
    action: "Export",
    module: "Audit Logs",
    description: "Audit logs exported to CSV",
    ip: "192.168.1.10",
    device: "Chrome / Windows",
    status: "Success"
  }
];

/* =========================================================
   STATE
========================================================= */

let auditSearch = "";
let auditActionFilter = "all";
let auditModuleFilter = "all";
let auditStatusFilter = "all";
let auditUserFilter = "all";
let auditDateFilter = "";

let currentAuditPage = 1;
const auditRowsPerPage = 8;

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function AdminAuditLogs() {
  return `
    <div class="admin-audit-page">

      <!-- PAGE HEADER -->
      <div class="admin-audit-page-header">

        <div class="admin-audit-heading">
          <div class="admin-audit-heading-icon">
            🛡️
          </div>

          <div>
            <h1>Audit Logs</h1>
            <p>
              Monitor and track all important activities performed in the admin panel.
            </p>
          </div>
        </div>

        <div class="admin-audit-header-actions">
          <button
            type="button"
            class="admin-audit-btn admin-audit-btn-secondary"
            id="admin-audit-refresh-btn"
          >
            🔄 Refresh
          </button>

          <button
            type="button"
            class="admin-audit-btn admin-audit-btn-primary"
            id="admin-audit-export-btn"
          >
            📥 Export CSV
          </button>
        </div>

      </div>

      <!-- STATISTICS -->
      <div
        class="admin-audit-stats"
        id="admin-audit-stats"
      ></div>

      <!-- FILTER SECTION -->
      <div class="admin-audit-filter-card">

        <div class="admin-audit-filter-header">

          <div>
            <h2>Activity Logs</h2>
            <p>Search and filter administrator activities.</p>
          </div>

          <button
            type="button"
            class="admin-audit-clear-filter"
            id="admin-audit-reset-filter"
          >
            Reset Filters
          </button>

        </div>

        <div class="admin-audit-filter-grid">

          <!-- SEARCH -->
          <div class="admin-audit-field admin-audit-search-field">

            <label for="admin-audit-search">
              Search
            </label>

            <div class="admin-audit-search-box">

              <span class="admin-audit-search-icon">
                🔍
              </span>

              <input
                type="text"
                id="admin-audit-search"
                placeholder="Search user, email, action..."
                value=""
              />

            </div>

          </div>

          <!-- USER -->
          <div class="admin-audit-field">

            <label for="admin-audit-user-filter">
              User
            </label>

            <select id="admin-audit-user-filter">

              <option value="all">
                All Users
              </option>

            </select>

          </div>

          <!-- ACTION -->
          <div class="admin-audit-field">

            <label for="admin-audit-action-filter">
              Action
            </label>

            <select id="admin-audit-action-filter">

              <option value="all">
                All Actions
              </option>

              <option value="Login">
                Login
              </option>

              <option value="Create">
                Create
              </option>

              <option value="Update">
                Update
              </option>

              <option value="Delete">
                Delete
              </option>

              <option value="Export">
                Export
              </option>

              <option value="Permission Change">
                Permission Change
              </option>

              <option value="Security Update">
                Security Update
              </option>

            </select>

          </div>

          <!-- MODULE -->
          <div class="admin-audit-field">

            <label for="admin-audit-module-filter">
              Module
            </label>

            <select id="admin-audit-module-filter">

              <option value="all">
                All Modules
              </option>

              <option value="Authentication">
                Authentication
              </option>

              <option value="Users">
                Users
              </option>

              <option value="Users & Permissions">
                Users & Permissions
              </option>

              <option value="Students">
                Students
              </option>

              <option value="Teachers">
                Teachers
              </option>

              <option value="Notices">
                Notices
              </option>

              <option value="Reports">
                Reports
              </option>

              <option value="Security">
                Security
              </option>

              <option value="Audit Logs">
                Audit Logs
              </option>

            </select>

          </div>

          <!-- STATUS -->
          <div class="admin-audit-field">

            <label for="admin-audit-status-filter">
              Status
            </label>

            <select id="admin-audit-status-filter">

              <option value="all">
                All Status
              </option>

              <option value="Success">
                Success
              </option>

              <option value="Failed">
                Failed
              </option>

            </select>

          </div>

          <!-- DATE -->
          <div class="admin-audit-field">

            <label for="admin-audit-date-filter">
              Date
            </label>

            <input
              type="date"
              id="admin-audit-date-filter"
            />

          </div>

        </div>

      </div>

      <!-- TABLE -->
      <div class="admin-audit-table-card">

        <div class="admin-audit-table-wrapper">

          <table class="admin-audit-table">

            <thead>
              <tr>

                <th>
                  Date & Time
                </th>

                <th>
                  User
                </th>

                <th>
                  Action
                </th>

                <th>
                  Module
                </th>

                <th>
                  Description
                </th>

                <th>
                  IP Address
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>

              </tr>
            </thead>

            <tbody id="admin-audit-table-body"></tbody>

          </table>

        </div>

        <!-- PAGINATION -->
        <div
          class="admin-audit-pagination"
          id="admin-audit-pagination"
        ></div>

      </div>

    </div>

    <!-- MODAL CONTAINER -->
    <div
      id="admin-audit-modal-container"
    ></div>

    <!-- TOAST -->
    <div
      id="admin-audit-toast"
      class="admin-audit-toast"
    ></div>
  `;
}

/* =========================================================
   INITIALIZE
========================================================= */

export function setupAdminAuditLogs() {
  renderAuditStats();
  populateAuditUsers();
  renderAuditTable();
  setupAuditEvents();
}

/* =========================================================
   STATISTICS
========================================================= */

function renderAuditStats() {
  const container = document.getElementById("admin-audit-stats");

  if (!container) {
    return;
  }

  const total = auditLogs.length;

  const successful = auditLogs.filter(
    log => log.status === "Success"
  ).length;

  const failed = auditLogs.filter(
    log => log.status === "Failed"
  ).length;

  const today = new Date().toISOString().split("T")[0];

  const todayLogs = auditLogs.filter(
    log => log.date === today
  ).length;

  container.innerHTML = `
    <div class="admin-audit-stat-card">

      <div class="admin-audit-stat-icon">
        📋
      </div>

      <div class="admin-audit-stat-content">
        <span>Total Activities</span>
        <strong>${total}</strong>
      </div>

    </div>

    <div class="admin-audit-stat-card">

      <div class="admin-audit-stat-icon">
        📅
      </div>

      <div class="admin-audit-stat-content">
        <span>Today's Activities</span>
        <strong>${todayLogs}</strong>
      </div>

    </div>

    <div class="admin-audit-stat-card">

      <div class="admin-audit-stat-icon">
        ✅
      </div>

      <div class="admin-audit-stat-content">
        <span>Successful</span>
        <strong>${successful}</strong>
      </div>

    </div>

    <div class="admin-audit-stat-card">

      <div class="admin-audit-stat-icon">
        ⚠️
      </div>

      <div class="admin-audit-stat-content">
        <span>Failed</span>
        <strong>${failed}</strong>
      </div>

    </div>
  `;
}

/* =========================================================
   POPULATE USERS
========================================================= */

function populateAuditUsers() {
  const select = document.getElementById(
    "admin-audit-user-filter"
  );

  if (!select) {
    return;
  }

  const users = [
    ...new Set(
      auditLogs.map(log => log.user)
    )
  ];

  select.innerHTML = `
    <option value="all">
      All Users
    </option>

    ${users.map(user => `
      <option value="${escapeHTML(user)}">
        ${escapeHTML(user)}
      </option>
    `).join("")}
  `;

  select.value = auditUserFilter;
}

/* =========================================================
   FILTER LOGS
========================================================= */

function getFilteredAuditLogs() {
  return auditLogs.filter(log => {

    const searchText =
      auditSearch.toLowerCase().trim();

    const matchesSearch =
      !searchText ||
      log.user.toLowerCase().includes(searchText) ||
      log.email.toLowerCase().includes(searchText) ||
      log.action.toLowerCase().includes(searchText) ||
      log.module.toLowerCase().includes(searchText) ||
      log.description.toLowerCase().includes(searchText) ||
      log.ip.toLowerCase().includes(searchText);

    const matchesAction =
      auditActionFilter === "all" ||
      log.action === auditActionFilter;

    const matchesModule =
      auditModuleFilter === "all" ||
      log.module === auditModuleFilter;

    const matchesStatus =
      auditStatusFilter === "all" ||
      log.status === auditStatusFilter;

    const matchesUser =
      auditUserFilter === "all" ||
      log.user === auditUserFilter;

    const matchesDate =
      !auditDateFilter ||
      log.date === auditDateFilter;

    return (
      matchesSearch &&
      matchesAction &&
      matchesModule &&
      matchesStatus &&
      matchesUser &&
      matchesDate
    );
  });
}

/* =========================================================
   RENDER TABLE
========================================================= */

function renderAuditTable() {
  const tbody = document.getElementById(
    "admin-audit-table-body"
  );

  const pagination = document.getElementById(
    "admin-audit-pagination"
  );

  if (!tbody) {
    return;
  }

  const filteredLogs =
    getFilteredAuditLogs();

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredLogs.length /
        auditRowsPerPage
      )
    );

  if (currentAuditPage > totalPages) {
    currentAuditPage = totalPages;
  }

  const startIndex =
    (currentAuditPage - 1) *
    auditRowsPerPage;

  const endIndex =
    startIndex + auditRowsPerPage;

  const pageLogs =
    filteredLogs.slice(
      startIndex,
      endIndex
    );

  if (pageLogs.length === 0) {

    tbody.innerHTML = `
      <tr>

        <td
          colspan="8"
          class="admin-audit-empty-cell"
        >

          <div class="admin-audit-empty-state">

            <div class="admin-audit-empty-icon">
              🔍
            </div>

            <h3>
              No audit logs found
            </h3>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        </td>

      </tr>
    `;

  } else {

    tbody.innerHTML = pageLogs
      .map(log => createAuditRow(log))
      .join("");
  }

  renderAuditPagination(
    filteredLogs.length,
    totalPages
  );
}

/* =========================================================
   CREATE TABLE ROW
========================================================= */

function createAuditRow(log) {

  const statusClass =
    log.status === "Success"
      ? "success"
      : "failed";

  const actionClass =
    getActionClass(log.action);

  return `
    <tr>

      <td>

        <div class="admin-audit-date-time">

          <strong>
            ${escapeHTML(log.date)}
          </strong>

          <span>
            ${escapeHTML(log.time)}
          </span>

        </div>

      </td>

      <td>

        <div class="admin-audit-user">

          <div class="admin-audit-user-avatar">
            ${getUserInitial(log.user)}
          </div>

          <div class="admin-audit-user-info">

            <strong>
              ${escapeHTML(log.user)}
            </strong>

            <span>
              ${escapeHTML(log.email)}
            </span>

          </div>

        </div>

      </td>

      <td>

        <span
          class="admin-audit-action-badge ${actionClass}"
        >
          ${escapeHTML(log.action)}
        </span>

      </td>

      <td>

        <span class="admin-audit-module-badge">
          ${escapeHTML(log.module)}
        </span>

      </td>

      <td>

        <div class="admin-audit-description">
          ${escapeHTML(log.description)}
        </div>

      </td>

      <td>

        <span class="admin-audit-ip">
          ${escapeHTML(log.ip)}
        </span>

      </td>

      <td>

        <span
          class="admin-audit-status ${statusClass}"
        >
          ${log.status === "Success" ? "✓" : "!"}
          ${escapeHTML(log.status)}
        </span>

      </td>

      <td>

        <button
          type="button"
          class="admin-audit-view-btn"
          data-audit-view="${log.id}"
        >
          View
        </button>

      </td>

    </tr>
  `;
}

/* =========================================================
   ACTION CLASS
========================================================= */

function getActionClass(action) {

  switch (action) {

    case "Login":
      return "login";

    case "Create":
      return "create";

    case "Update":
      return "update";

    case "Delete":
      return "delete";

    case "Export":
      return "export";

    case "Permission Change":
      return "permission";

    case "Security Update":
      return "security";

    default:
      return "default";
  }
}

/* =========================================================
   PAGINATION
========================================================= */

function renderAuditPagination(
  totalItems,
  totalPages
) {
  const container = document.getElementById(
    "admin-audit-pagination"
  );

  if (!container) {
    return;
  }

  if (totalItems === 0) {
    container.innerHTML = "";
    return;
  }

  let pagesHTML = "";

  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {

    pagesHTML += `
      <button
        type="button"
        class="admin-audit-page-btn ${
          page === currentAuditPage
            ? "active"
            : ""
        }"
        data-audit-page="${page}"
      >
        ${page}
      </button>
    `;
  }

  container.innerHTML = `

    <div class="admin-audit-pagination-info">

      Showing
      <strong>
        ${Math.min(
          (currentAuditPage - 1) *
            auditRowsPerPage + 1,
          totalItems
        )}
      </strong>

      to

      <strong>
        ${Math.min(
          currentAuditPage *
            auditRowsPerPage,
          totalItems
        )}
      </strong>

      of

      <strong>
        ${totalItems}
      </strong>

      logs

    </div>

    <div class="admin-audit-pagination-controls">

      <button
        type="button"
        class="admin-audit-page-btn"
        data-audit-page="prev"
        ${
          currentAuditPage === 1
            ? "disabled"
            : ""
        }
      >
        ‹
      </button>

      ${pagesHTML}

      <button
        type="button"
        class="admin-audit-page-btn"
        data-audit-page="next"
        ${
          currentAuditPage === totalPages
            ? "disabled"
            : ""
        }
      >
        ›
      </button>

    </div>
  `;
}

/* =========================================================
   EVENT SETUP
========================================================= */

function setupAuditEvents() {

  const searchInput =
    document.getElementById(
      "admin-audit-search"
    );

  const userFilter =
    document.getElementById(
      "admin-audit-user-filter"
    );

  const actionFilter =
    document.getElementById(
      "admin-audit-action-filter"
    );

  const moduleFilter =
    document.getElementById(
      "admin-audit-module-filter"
    );

  const statusFilter =
    document.getElementById(
      "admin-audit-status-filter"
    );

  const dateFilter =
    document.getElementById(
      "admin-audit-date-filter"
    );

  const resetButton =
    document.getElementById(
      "admin-audit-reset-filter"
    );

  const refreshButton =
    document.getElementById(
      "admin-audit-refresh-btn"
    );

  const exportButton =
    document.getElementById(
      "admin-audit-export-btn"
    );

  /* SEARCH */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      event => {

        auditSearch =
          event.target.value;

        currentAuditPage = 1;

        renderAuditTable();
      }
    );
  }

  /* USER FILTER */

  if (userFilter) {

    userFilter.addEventListener(
      "change",
      event => {

        auditUserFilter =
          event.target.value;

        currentAuditPage = 1;

        renderAuditTable();
      }
    );
  }

  /* ACTION FILTER */

  if (actionFilter) {

    actionFilter.addEventListener(
      "change",
      event => {

        auditActionFilter =
          event.target.value;

        currentAuditPage = 1;

        renderAuditTable();
      }
    );
  }

  /* MODULE FILTER */

  if (moduleFilter) {

    moduleFilter.addEventListener(
      "change",
      event => {

        auditModuleFilter =
          event.target.value;

        currentAuditPage = 1;

        renderAuditTable();
      }
    );
  }

  /* STATUS FILTER */

  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      event => {

        auditStatusFilter =
          event.target.value;

        currentAuditPage = 1;

        renderAuditTable();
      }
    );
  }

  /* DATE FILTER */

  if (dateFilter) {

    dateFilter.addEventListener(
      "change",
      event => {

        auditDateFilter =
          event.target.value;

        currentAuditPage = 1;

        renderAuditTable();
      }
    );
  }

  /* RESET */

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      resetAuditFilters
    );
  }

  /* REFRESH */

  if (refreshButton) {

    refreshButton.addEventListener(
      "click",
      refreshAuditLogs
    );
  }

  /* EXPORT */

  if (exportButton) {

    exportButton.addEventListener(
      "click",
      exportAuditLogsCSV
    );
  }

  /* TABLE ACTIONS */

  document.addEventListener(
    "click",
    handleAuditDocumentClick
  );
}

/* =========================================================
   DOCUMENT CLICK HANDLER
========================================================= */

function handleAuditDocumentClick(event) {

  const viewButton =
    event.target.closest(
      "[data-audit-view]"
    );

  if (viewButton) {

    const id =
      Number(
        viewButton.dataset.auditView
      );

    viewAuditLog(id);

    return;
  }

  const pageButton =
    event.target.closest(
      "[data-audit-page]"
    );

  if (pageButton) {

    const page =
      pageButton.dataset.auditPage;

    const filteredLogs =
      getFilteredAuditLogs();

    const totalPages =
      Math.max(
        1,
        Math.ceil(
          filteredLogs.length /
          auditRowsPerPage
        )
      );

    if (page === "prev") {

      if (currentAuditPage > 1) {
        currentAuditPage--;
      }

    } else if (page === "next") {

      if (
        currentAuditPage <
        totalPages
      ) {
        currentAuditPage++;
      }

    } else {

      currentAuditPage =
        Number(page);
    }

    renderAuditTable();

    return;
  }

  const closeButton =
    event.target.closest(
      "[data-audit-close-modal]"
    );

  if (closeButton) {
    closeAuditModal();
  }

  if (
    event.target.classList.contains(
      "admin-audit-modal-overlay"
    )
  ) {
    closeAuditModal();
  }
}

/* =========================================================
   VIEW AUDIT LOG
========================================================= */

function viewAuditLog(id) {

  const log =
    auditLogs.find(
      item => item.id === id
    );

  if (!log) {

    showAuditToast(
      "Audit log not found.",
      "error"
    );

    return;
  }

  const container =
    document.getElementById(
      "admin-audit-modal-container"
    );

  if (!container) {
    return;
  }

  container.innerHTML = `

    <div class="admin-audit-modal-overlay">

      <div class="admin-audit-modal">

        <div class="admin-audit-modal-header">

          <div>

            <span class="admin-audit-modal-label">
              Audit Log Details
            </span>

            <h2>
              Activity #${log.id}
            </h2>

          </div>

          <button
            type="button"
            class="admin-audit-modal-close"
            data-audit-close-modal
            aria-label="Close"
          >
            ×
          </button>

        </div>

        <div class="admin-audit-modal-body">

          <div class="admin-audit-detail-status">

            <span>
              Status
            </span>

            <strong
              class="${
                log.status === "Success"
                  ? "success"
                  : "failed"
              }"
            >
              ${
                log.status === "Success"
                  ? "✓ Success"
                  : "! Failed"
              }
            </strong>

          </div>

          <div class="admin-audit-detail-grid">

            <div class="admin-audit-detail-item">

              <span>
                Date
              </span>

              <strong>
                ${escapeHTML(log.date)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                Time
              </span>

              <strong>
                ${escapeHTML(log.time)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                User
              </span>

              <strong>
                ${escapeHTML(log.user)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                Role
              </span>

              <strong>
                ${escapeHTML(log.role)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                Email
              </span>

              <strong>
                ${escapeHTML(log.email)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                Action
              </span>

              <strong>
                ${escapeHTML(log.action)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                Module
              </span>

              <strong>
                ${escapeHTML(log.module)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                IP Address
              </span>

              <strong>
                ${escapeHTML(log.ip)}
              </strong>

            </div>

            <div class="admin-audit-detail-item">

              <span>
                Device
              </span>

              <strong>
                ${escapeHTML(log.device)}
              </strong>

            </div>

          </div>

          <div class="admin-audit-detail-description">

            <span>
              Description
            </span>

            <p>
              ${escapeHTML(log.description)}
            </p>

          </div>

        </div>

        <div class="admin-audit-modal-footer">

          <button
            type="button"
            class="admin-audit-btn admin-audit-btn-secondary"
            data-audit-close-modal
          >
            Close
          </button>

        </div>

      </div>

    </div>
  `;
}

/* =========================================================
   CLOSE MODAL
========================================================= */

function closeAuditModal() {

  const container =
    document.getElementById(
      "admin-audit-modal-container"
    );

  if (container) {
    container.innerHTML = "";
  }
}

/* =========================================================
   RESET FILTERS
========================================================= */

function resetAuditFilters() {

  auditSearch = "";
  auditActionFilter = "all";
  auditModuleFilter = "all";
  auditStatusFilter = "all";
  auditUserFilter = "all";
  auditDateFilter = "";

  currentAuditPage = 1;

  const searchInput =
    document.getElementById(
      "admin-audit-search"
    );

  const userFilter =
    document.getElementById(
      "admin-audit-user-filter"
    );

  const actionFilter =
    document.getElementById(
      "admin-audit-action-filter"
    );

  const moduleFilter =
    document.getElementById(
      "admin-audit-module-filter"
    );

  const statusFilter =
    document.getElementById(
      "admin-audit-status-filter"
    );

  const dateFilter =
    document.getElementById(
      "admin-audit-date-filter"
    );

  if (searchInput) {
    searchInput.value = "";
  }

  if (userFilter) {
    userFilter.value = "all";
  }

  if (actionFilter) {
    actionFilter.value = "all";
  }

  if (moduleFilter) {
    moduleFilter.value = "all";
  }

  if (statusFilter) {
    statusFilter.value = "all";
  }

  if (dateFilter) {
    dateFilter.value = "";
  }

  renderAuditTable();

  showAuditToast(
    "Filters have been reset.",
    "success"
  );
}

/* =========================================================
   REFRESH
========================================================= */

function refreshAuditLogs() {

  currentAuditPage = 1;

  renderAuditStats();
  populateAuditUsers();
  renderAuditTable();

  showAuditToast(
    "Audit logs refreshed successfully.",
    "success"
  );
}

/* =========================================================
   ADD AUDIT LOG
   Can be used from other admin modules
========================================================= */

export function addAuditLog({
  user = "Admin",
  email = "admin@school.gov.in",
  role = "Super Admin",
  action = "Activity",
  module = "Admin Panel",
  description = "Admin activity performed",
  ip = "Local",
  device = "Browser",
  status = "Success"
} = {}) {

  const now =
    new Date();

  const newLog = {

    id:
      auditLogs.length > 0
        ? Math.max(
            ...auditLogs.map(
              log => log.id
            )
          ) + 1
        : 1,

    date:
      now.toISOString().split("T")[0],

    time:
      now.toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }
      ),

    user,
    email,
    role,
    action,
    module,
    description,
    ip,
    device,
    status
  };

  auditLogs.unshift(newLog);

  return newLog;
}

/* =========================================================
   EXPORT CSV
========================================================= */

function exportAuditLogsCSV() {

  const logs =
    getFilteredAuditLogs();

  if (logs.length === 0) {

    showAuditToast(
      "No logs available to export.",
      "error"
    );

    return;
  }

  const headers = [
    "ID",
    "Date",
    "Time",
    "User",
    "Email",
    "Role",
    "Action",
    "Module",
    "Description",
    "IP Address",
    "Device",
    "Status"
  ];

  const rows = logs.map(log => [

    log.id,
    log.date,
    log.time,
    log.user,
    log.email,
    log.role,
    log.action,
    log.module,
    log.description,
    log.ip,
    log.device,
    log.status

  ]);

  const csvContent = [
    headers,
    ...rows
  ]
    .map(row =>
      row
        .map(value =>
          `"${String(value)
            .replace(/"/g, '""')}"`
        )
        .join(",")
    )
    .join("\n");

  downloadCSV(
    csvContent,
    `audit-logs-${getTodayDate()}.csv`
  );

  showAuditToast(
    "Audit logs exported successfully.",
    "success"
  );
}

/* =========================================================
   DOWNLOAD CSV
========================================================= */

function downloadCSV(
  content,
  filename
) {

  const blob =
    new Blob(
      [content],
      {
        type:
          "text/csv;charset=utf-8;"
      }
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

/* =========================================================
   DELETE / CLEAR ALL LOGS
========================================================= */

export function clearAuditLogs() {

  const confirmed =
    window.confirm(
      "Are you sure you want to clear all audit logs?"
    );

  if (!confirmed) {
    return;
  }

  auditLogs = [];

  currentAuditPage = 1;

  renderAuditStats();
  renderAuditTable();

  showAuditToast(
    "All audit logs have been cleared.",
    "success"
  );
}

/* =========================================================
   GET AUDIT LOGS
========================================================= */

export function getAuditLogs() {
  return [...auditLogs];
}

/* =========================================================
   GET TODAY DATE
========================================================= */

function getTodayDate() {

  return new Date()
    .toISOString()
    .split("T")[0];
}

/* =========================================================
   USER INITIAL
========================================================= */

function getUserInitial(user) {

  if (!user) {
    return "U";
  }

  return user
    .trim()
    .charAt(0)
    .toUpperCase();
}

/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================================
   TOAST
========================================================= */

function showAuditToast(
  message,
  type = "success"
) {

  const toast =
    document.getElementById(
      "admin-audit-toast"
    );

  if (!toast) {
    return;
  }

  toast.className =
    `admin-audit-toast ${type}`;

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(
    showAuditToast.timer
  );

  showAuditToast.timer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 3000);
}

/* =========================================================
   KEYBOARD ESCAPE
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeAuditModal();
    }

  }
);