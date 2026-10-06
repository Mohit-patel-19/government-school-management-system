/* =========================================================
   ADMIN USERS & PERMISSIONS
   Enterprise Level User Access Management Module
========================================================= */

import "./AdminUsersPermissions.css";


/* =========================================================
   STORAGE KEYS
========================================================= */

const STORAGE_KEYS = {
  users: "school_admin_users",
  roles: "school_admin_roles",
  permissions: "school_admin_permissions",
  policies: "school_admin_access_policies",
  requests: "school_admin_access_requests",
  audit: "school_admin_access_audit"
};


/* =========================================================
   DEFAULT USERS
========================================================= */

const DEFAULT_USERS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    username: "rajesh.admin",
    email: "rajesh@school.edu",
    phone: "9876543210",
    role: "Super Admin",
    department: "Administration",
    employeeId: "ADM001",
    status: "Active",
    lastLogin: "Today, 10:42 AM",
    sessions: 2,
    mfa: true
  },

  {
    id: 2,
    name: "Suresh Sharma",
    username: "suresh.teacher",
    email: "suresh@school.edu",
    phone: "9876543211",
    role: "Teacher",
    department: "Mathematics",
    employeeId: "TCH101",
    status: "Active",
    lastLogin: "Today, 09:35 AM",
    sessions: 1,
    mfa: false
  },

  {
    id: 3,
    name: "Anita Verma",
    username: "anita.accounts",
    email: "anita@school.edu",
    phone: "9876543212",
    role: "Accountant",
    department: "Accounts",
    employeeId: "ACC201",
    status: "Active",
    lastLogin: "Today, 08:55 AM",
    sessions: 1,
    mfa: true
  },

  {
    id: 4,
    name: "Mohan Singh",
    username: "mohan.staff",
    email: "mohan@school.edu",
    phone: "9876543213",
    role: "Office Staff",
    department: "Administration",
    employeeId: "STF301",
    status: "Suspended",
    lastLogin: "05 Sep 2026, 04:15 PM",
    sessions: 0,
    mfa: false
  },

  {
    id: 5,
    name: "Priya Meena",
    username: "priya.principal",
    email: "priya@school.edu",
    phone: "9876543214",
    role: "Principal",
    department: "Administration",
    employeeId: "PRI001",
    status: "Active",
    lastLogin: "Today, 09:12 AM",
    sessions: 2,
    mfa: true
  },

  {
    id: 6,
    name: "Vikas Joshi",
    username: "vikas.exam",
    email: "vikas@school.edu",
    phone: "9876543215",
    role: "Exam Coordinator",
    department: "Examination",
    employeeId: "EXM401",
    status: "Active",
    lastLogin: "Yesterday, 06:20 PM",
    sessions: 1,
    mfa: true
  },

  {
    id: 7,
    name: "Neha Patel",
    username: "neha.librarian",
    email: "neha@school.edu",
    phone: "9876543216",
    role: "Librarian",
    department: "Library",
    employeeId: "LIB501",
    status: "Active",
    lastLogin: "Yesterday, 03:45 PM",
    sessions: 1,
    mfa: false
  },

  {
    id: 8,
    name: "Deepak Gurjar",
    username: "deepak.data",
    email: "deepak@school.edu",
    phone: "9876543217",
    role: "Data Entry Operator",
    department: "Data Management",
    employeeId: "DAT601",
    status: "Disabled",
    lastLogin: "01 Sep 2026, 11:30 AM",
    sessions: 0,
    mfa: false
  },

  {
    id: 9,
    name: "Kavita Sharma",
    username: "kavita.teacher",
    email: "kavita@school.edu",
    phone: "9876543218",
    role: "Teacher",
    department: "Science",
    employeeId: "TCH102",
    status: "Active",
    lastLogin: "Today, 08:40 AM",
    sessions: 1,
    mfa: false
  },

  {
    id: 10,
    name: "Rohit Meena",
    username: "rohit.hr",
    email: "rohit@school.edu",
    phone: "9876543219",
    role: "HR Manager",
    department: "Human Resources",
    employeeId: "HR701",
    status: "Pending",
    lastLogin: "Never",
    sessions: 0,
    mfa: false
  }
];


/* =========================================================
   DEFAULT ROLES
========================================================= */

const DEFAULT_ROLES = [
  {
    id: 1,
    name: "Super Admin",
    description: "Complete system access",
    users: 1,
    type: "System",
    status: "Active"
  },

  {
    id: 2,
    name: "Admin",
    description: "Administrative management access",
    users: 4,
    type: "System",
    status: "Active"
  },

  {
    id: 3,
    name: "Principal",
    description: "School-wide management access",
    users: 1,
    type: "System",
    status: "Active"
  },

  {
    id: 4,
    name: "Teacher",
    description: "Teaching and academic access",
    users: 28,
    type: "System",
    status: "Active"
  },

  {
    id: 5,
    name: "Accountant",
    description: "Fees and financial management",
    users: 3,
    type: "System",
    status: "Active"
  },

  {
    id: 6,
    name: "Exam Coordinator",
    description: "Examination and results management",
    users: 2,
    type: "Custom",
    status: "Active"
  },

  {
    id: 7,
    name: "Office Staff",
    description: "Office and document management",
    users: 5,
    type: "Custom",
    status: "Active"
  },

  {
    id: 8,
    name: "Data Entry Operator",
    description: "Limited data management access",
    users: 4,
    type: "Custom",
    status: "Active"
  }
];


/* =========================================================
   PERMISSION MODULES
========================================================= */

const PERMISSION_MODULES = [
  {
    name: "Dashboard",
    permissions: ["View"]
  },

  {
    name: "Students",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Import",
      "Export",
      "Print"
    ]
  },

  {
    name: "Teachers",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Export"
    ]
  },

  {
    name: "Parents",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Export"
    ]
  },

  {
    name: "Classes",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete"
    ]
  },

  {
    name: "Attendance",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Export",
      "Approve"
    ]
  },

  {
    name: "Results",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Export",
      "Print",
      "Approve",
      "Publish"
    ]
  },

  {
    name: "Fees",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Export",
      "Print",
      "Approve"
    ]
  },

  {
    name: "Payroll",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Export",
      "Approve"
    ]
  },

  {
    name: "Assignments",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Publish"
    ]
  },

  {
    name: "Notices",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Publish"
    ]
  },

  {
    name: "Documents",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Upload",
      "Download"
    ]
  },

  {
    name: "Messages",
    permissions: [
      "View",
      "Create",
      "Delete",
      "Broadcast"
    ]
  },

  {
    name: "Reports",
    permissions: [
      "View",
      "Create",
      "Export",
      "Print"
    ]
  },

  {
    name: "Users",
    permissions: [
      "View",
      "Create",
      "Edit",
      "Delete",
      "Manage Roles",
      "Manage Permissions"
    ]
  },

  {
    name: "Audit Logs",
    permissions: [
      "View",
      "Export"
    ]
  },

  {
    name: "Settings",
    permissions: [
      "View",
      "Edit"
    ]
  }
];


/* =========================================================
   DEFAULT ACCESS REQUESTS
========================================================= */

const DEFAULT_ACCESS_REQUESTS = [
  {
    id: 1,
    user: "Rohit Meena",
    role: "HR Manager",
    request: "HR Management Access",
    requestedBy: "Rohit Meena",
    date: "08 Sep 2026",
    status: "Pending"
  },

  {
    id: 2,
    user: "Vikas Joshi",
    role: "Exam Coordinator",
    request: "Results → Publish",
    requestedBy: "Vikas Joshi",
    date: "07 Sep 2026",
    status: "Pending"
  },

  {
    id: 3,
    user: "Suresh Sharma",
    role: "Teacher",
    request: "Attendance → Export",
    requestedBy: "Suresh Sharma",
    date: "06 Sep 2026",
    status: "Approved"
  },

  {
    id: 4,
    user: "Anita Verma",
    role: "Accountant",
    request: "Fees → Approve",
    requestedBy: "Anita Verma",
    date: "05 Sep 2026",
    status: "Rejected"
  }
];


/* =========================================================
   DEFAULT AUDIT LOGS
========================================================= */

const DEFAULT_AUDIT_LOGS = [
  {
    id: 1,
    user: "Rajesh Kumar",
    action: "Permission Changed",
    target: "Suresh Sharma",
    details: "Results → Edit permission granted",
    time: "10 minutes ago",
    type: "permission"
  },

  {
    id: 2,
    user: "Priya Meena",
    action: "Role Assigned",
    target: "Vikas Joshi",
    details: "Exam Coordinator role assigned",
    time: "35 minutes ago",
    type: "role"
  },

  {
    id: 3,
    user: "Rajesh Kumar",
    action: "User Suspended",
    target: "Mohan Singh",
    details: "Account suspended by administrator",
    time: "2 hours ago",
    type: "security"
  },

  {
    id: 4,
    user: "Anita Verma",
    action: "Password Changed",
    target: "Anita Verma",
    details: "Password successfully changed",
    time: "4 hours ago",
    type: "security"
  },

  {
    id: 5,
    user: "Rajesh Kumar",
    action: "Access Request Approved",
    target: "Suresh Sharma",
    details: "Attendance → Export approved",
    time: "Yesterday",
    type: "approval"
  }
];


/* =========================================================
   DEFAULT POLICIES
========================================================= */

const DEFAULT_POLICIES = {
  organizationAccess: true,
  locationRestrictions: false,
  loginHours: true,
  deviceRestrictions: false,
  temporaryAccess: true,
  ipRestrictions: false,

  minimumPasswordLength: 8,
  passwordExpiryDays: 90,
  maxLoginAttempts: 5,

  mfaRequired: false,
  sessionTimeout: 30,
  concurrentSessions: 3,

  permissionScope: "Entire School"
};


/* =========================================================
   LOCAL DATA
========================================================= */

let usersData = loadData(
  STORAGE_KEYS.users,
  DEFAULT_USERS
);

let rolesData = loadData(
  STORAGE_KEYS.roles,
  DEFAULT_ROLES
);

let permissionData = loadData(
  STORAGE_KEYS.permissions,
  {}
);

let accessRequests = loadData(
  STORAGE_KEYS.requests,
  DEFAULT_ACCESS_REQUESTS
);

let accessAuditLogs = loadData(
  STORAGE_KEYS.audit,
  DEFAULT_AUDIT_LOGS
);

let policiesData = loadData(
  STORAGE_KEYS.policies,
  DEFAULT_POLICIES
);


/* =========================================================
   CURRENT STATE
========================================================= */

let currentTab = "overview";

let currentSearch = "";

let currentRoleFilter = "all";

let currentStatusFilter = "all";

let selectedUserIds = new Set();


/* =========================================================
   STORAGE HELPERS
========================================================= */

function loadData(key, fallback) {

  try {

    const saved =
      localStorage.getItem(key);

    if (!saved) {
      return cloneData(fallback);
    }

    const parsed =
      JSON.parse(saved);

    return parsed;

  } catch (error) {

    console.warn(
      `Unable to load ${key}:`,
      error
    );

    return cloneData(fallback);

  }

}


function saveData(key, data) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(data)
    );

  } catch (error) {

    console.warn(
      `Unable to save ${key}:`,
      error
    );

  }

}


function cloneData(data) {

  try {

    return JSON.parse(
      JSON.stringify(data)
    );

  } catch (error) {

    return data;

  }

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
   GENERATE ID
========================================================= */

function generateId() {

  return Date.now() +
    Math.floor(
      Math.random() * 1000
    );

}


/* =========================================================
   GET INITIALS
========================================================= */

function getInitials(name) {

  const words =
    String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

  if (!words.length) {
    return "US";
  }

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


/* =========================================================
   FORMAT DATE
========================================================= */

function getTodayLabel() {

  const now =
    new Date();

  return now.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );

}


/* =========================================================
   AUDIT LOGGER
========================================================= */

function addAuditLog(
  action,
  target,
  details,
  type = "general"
) {

  const log = {

    id: generateId(),

    user: "Administrator",

    action,

    target,

    details,

    time: "Just now",

    type

  };

  accessAuditLogs.unshift(log);

  saveData(
    STORAGE_KEYS.audit,
    accessAuditLogs
  );

}


/* =========================================================
   ROLE BADGE
========================================================= */

function getRoleBadge(role) {

  let roleClass =
    "default";

  if (role === "Super Admin") {
    roleClass = "super-admin";
  }

  else if (role === "Admin") {
    roleClass = "admin";
  }

  else if (role === "Principal") {
    roleClass = "principal";
  }

  else if (role === "Teacher") {
    roleClass = "teacher";
  }

  else if (role === "Accountant") {
    roleClass = "accountant";
  }

  else if (role === "Exam Coordinator") {
    roleClass = "exam";
  }

  return `
    <span
      class="
        admin-users-role-badge
        admin-users-role-${roleClass}
      "
    >
      ${escapeHTML(role)}
    </span>
  `;

}


/* =========================================================
   STATUS BADGE
========================================================= */

function getUserStatusBadge(status) {

  const statusClass =
    String(status)
      .toLowerCase()
      .replace(/\s+/g, "-");

  let icon = "●";

  if (status === "Pending") {
    icon = "◐";
  }

  return `
    <span
      class="
        admin-users-status-badge
        admin-users-status-${statusClass}
      "
    >
      <span>${icon}</span>
      ${escapeHTML(status)}
    </span>
  `;

}


/* =========================================================
   OVERVIEW STATS
========================================================= */

function getOverviewStats() {

  const totalUsers =
    usersData.length;

  const activeUsers =
    usersData.filter(
      user =>
        user.status === "Active"
    ).length;

  const pendingUsers =
    usersData.filter(
      user =>
        user.status === "Pending"
    ).length;

  const suspendedUsers =
    usersData.filter(
      user =>
        user.status === "Suspended"
    ).length;

  const disabledUsers =
    usersData.filter(
      user =>
        user.status === "Disabled"
    ).length;

  const activeSessions =
    usersData.reduce(
      (total, user) =>
        total +
        Number(
          user.sessions || 0
        ),
      0
    );

  const pendingRequests =
    accessRequests.filter(
      request =>
        request.status === "Pending"
    ).length;

  return {
    totalUsers,
    activeUsers,
    pendingUsers,
    suspendedUsers,
    disabledUsers,
    activeSessions,
    pendingRequests
  };

}


/* =========================================================
   FILTER USERS
========================================================= */

function getFilteredUsers() {

  const search =
    currentSearch
      .trim()
      .toLowerCase();

  return usersData.filter(
    user => {

      const matchesSearch =
        !search ||
        user.name
          .toLowerCase()
          .includes(search) ||
        user.username
          .toLowerCase()
          .includes(search) ||
        user.email
          .toLowerCase()
          .includes(search) ||
        user.employeeId
          .toLowerCase()
          .includes(search);

      const matchesRole =
        currentRoleFilter === "all" ||
        user.role ===
          currentRoleFilter;

      const matchesStatus =
        currentStatusFilter === "all" ||
        user.status ===
          currentStatusFilter;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );

    }
  );

}


/* =========================================================
   USER TABLE
========================================================= */

function renderUsersTable(
  users = getFilteredUsers()
) {

  if (!users.length) {

    return `
      <div class="admin-users-empty-state">

        <div class="admin-users-empty-icon">
          🔍
        </div>

        <h3>
          No Users Found
        </h3>

        <p>
          No users match your current search or filters.
        </p>

      </div>
    `;

  }


  return `
    <div class="admin-users-table-wrapper">

      <table class="admin-users-table">

        <thead>

          <tr>

            <th>
              <input
                type="checkbox"
                class="admin-users-select-all"
                ${
                  users.length &&
                  users.every(
                    user =>
                      selectedUserIds.has(
                        user.id
                      )
                  )
                    ? "checked"
                    : ""
                }
              >
            </th>

            <th>User</th>

            <th>Role</th>

            <th>Department</th>

            <th>Status</th>

            <th>Last Login</th>

            <th>Sessions</th>

            <th>Actions</th>

          </tr>

        </thead>


        <tbody>

          ${users.map(
            user => `

            <tr
              data-user-id="${user.id}"
            >

              <td>

                <input
                  type="checkbox"
                  class="admin-users-row-checkbox"
                  value="${user.id}"
                  ${
                    selectedUserIds.has(
                      user.id
                    )
                      ? "checked"
                      : ""
                  }
                >

              </td>


              <td>

                <div
                  class="admin-users-user-cell"
                >

                  <div
                    class="admin-users-avatar"
                  >
                    ${escapeHTML(
                      getInitials(
                        user.name
                      )
                    )}
                  </div>


                  <div
                    class="admin-users-user-info"
                  >

                    <strong>
                      ${escapeHTML(
                        user.name
                      )}
                    </strong>

                    <span>
                      @${escapeHTML(
                        user.username
                      )}
                    </span>

                    <small>
                      ${escapeHTML(
                        user.email
                      )}
                    </small>

                  </div>

                </div>

              </td>


              <td>
                ${getRoleBadge(
                  user.role
                )}
              </td>


              <td>

                <div
                  class="admin-users-department"
                >

                  <strong>
                    ${escapeHTML(
                      user.department
                    )}
                  </strong>

                  <span>
                    ${escapeHTML(
                      user.employeeId
                    )}
                  </span>

                </div>

              </td>


              <td>
                ${getUserStatusBadge(
                  user.status
                )}
              </td>


              <td>

                <span
                  class="admin-users-last-login"
                >
                  ${escapeHTML(
                    user.lastLogin
                  )}
                </span>

              </td>


              <td>

                <span
                  class="admin-users-session-count"
                >
                  ${Number(
                    user.sessions || 0
                  )}
                </span>

              </td>


              <td>

                <div
                  class="admin-users-action-wrapper"
                >

                  <button
                    type="button"
                    class="admin-users-action-btn"
                    data-user-action="view"
                    data-user-id="${user.id}"
                    title="View User"
                  >
                    👁
                  </button>


                  <button
                    type="button"
                    class="admin-users-action-btn"
                    data-user-action="edit"
                    data-user-id="${user.id}"
                    title="Edit User"
                  >
                    ✏
                  </button>


                  <button
                    type="button"
                    class="admin-users-action-btn"
                    data-user-action="access"
                    data-user-id="${user.id}"
                    title="Manage Access"
                  >
                    🔐
                  </button>


                  <button
                    type="button"
                    class="admin-users-action-btn"
                    data-user-action="more"
                    data-user-id="${user.id}"
                    title="More Actions"
                  >
                    ⋮
                  </button>

                </div>

              </td>

            </tr>

          `
          ).join("")}

        </tbody>

      </table>

    </div>
  `;

}


/* =========================================================
   USERS SECTION
========================================================= */

function renderUsersSection() {

  const stats =
    getOverviewStats();

  return `

    <div class="admin-users-section">

      <div class="admin-users-section-header">

        <div>

          <h2>
            User Management
          </h2>

          <p>
            Manage users, accounts, roles and access.
          </p>

        </div>


        <button
          type="button"
          class="admin-users-primary-btn"
          data-users-action="add-user"
        >
          <span>+</span>
          Add User
        </button>

      </div>


      <div class="admin-users-stat-grid">

        <div class="admin-users-stat-card">
          <div class="admin-users-stat-icon">
            👥
          </div>

          <div>
            <span>Total Users</span>
            <strong>
              ${stats.totalUsers}
            </strong>
          </div>
        </div>


        <div class="admin-users-stat-card">
          <div class="admin-users-stat-icon">
            🟢
          </div>

          <div>
            <span>Active Users</span>
            <strong>
              ${stats.activeUsers}
            </strong>
          </div>
        </div>


        <div class="admin-users-stat-card">
          <div class="admin-users-stat-icon">
            ⏳
          </div>

          <div>
            <span>Pending</span>
            <strong>
              ${stats.pendingUsers}
            </strong>
          </div>
        </div>


        <div class="admin-users-stat-card">
          <div class="admin-users-stat-icon">
            🔒
          </div>

          <div>
            <span>Suspended</span>
            <strong>
              ${stats.suspendedUsers}
            </strong>
          </div>
        </div>


        <div class="admin-users-stat-card">
          <div class="admin-users-stat-icon">
            💻
          </div>

          <div>
            <span>Active Sessions</span>
            <strong>
              ${stats.activeSessions}
            </strong>
          </div>
        </div>


        <div class="admin-users-stat-card">
          <div class="admin-users-stat-icon">
            🔔
          </div>

          <div>
            <span>Access Requests</span>
            <strong>
              ${stats.pendingRequests}
            </strong>
          </div>
        </div>

      </div>


      <div class="admin-users-filter-card">

        <div class="admin-users-search-box">

          <span>
            🔍
          </span>

          <input
            type="text"
            id="admin-users-search"
            placeholder="Search by name, username, email or employee ID..."
            value="${escapeHTML(
              currentSearch
            )}"
          >

        </div>


        <select
          id="admin-users-role-filter"
          class="admin-users-filter-select"
        >

          <option value="all">
            All Roles
          </option>

          ${rolesData.map(
            role => `
              <option
                value="${escapeHTML(
                  role.name
                )}"
                ${
                  currentRoleFilter ===
                  role.name
                    ? "selected"
                    : ""
                }
              >
                ${escapeHTML(
                  role.name
                )}
              </option>
            `
          ).join("")}

        </select>


        <select
          id="admin-users-status-filter"
          class="admin-users-filter-select"
        >

          <option value="all">
            All Status
          </option>

          ${[
            "Active",
            "Pending",
            "Suspended",
            "Disabled"
          ].map(
            status => `
              <option
                value="${status}"
                ${
                  currentStatusFilter ===
                  status
                    ? "selected"
                    : ""
                }
              >
                ${status}
              </option>
            `
          ).join("")}

        </select>


        <button
          type="button"
          class="admin-users-secondary-btn"
          data-users-action="filter"
        >
          Apply Filters
        </button>


        <button
          type="button"
          class="admin-users-text-btn"
          data-users-action="reset-filter"
        >
          Reset
        </button>

      </div>


      <div class="admin-users-bulk-toolbar">

        <div>

          <span id="admin-users-selected-count">
            ${selectedUserIds.size} selected
          </span>

        </div>


        <div class="admin-users-bulk-actions">

          <button
            type="button"
            data-bulk-action="activate"
          >
            Activate
          </button>

          <button
            type="button"
            data-bulk-action="disable"
          >
            Disable
          </button>

          <button
            type="button"
            data-bulk-action="role"
          >
            Change Role
          </button>

          <button
            type="button"
            data-bulk-action="export"
          >
            Export
          </button>

          <button
            type="button"
            data-bulk-action="delete"
          >
            Delete
          </button>

        </div>

      </div>


      <div id="admin-users-table-container">

        ${renderUsersTable()}

      </div>

    </div>

  `;

}


/* =========================================================
   ROLES SECTION
========================================================= */

function renderRolesSection() {

  updateRoleUserCounts();

  return `

    <div class="admin-users-section">

      <div class="admin-users-section-header">

        <div>

          <h2>
            Roles & Role Hierarchy
          </h2>

          <p>
            Create and manage system and custom roles.
          </p>

        </div>


        <button
          type="button"
          class="admin-users-primary-btn"
          data-users-action="add-role"
        >
          <span>+</span>
          Create Role
        </button>

      </div>


      <div class="admin-users-role-grid">

        ${rolesData.map(
          role => `

          <div
            class="admin-users-role-card"
            data-role-id="${role.id}"
          >

            <div
              class="admin-users-role-card-top"
            >

              <div
                class="admin-users-role-icon"
              >
                🛡️
              </div>

              <span
                class="
                  admin-users-role-type
                  admin-users-role-type-${role.type.toLowerCase()}
                "
              >
                ${escapeHTML(
                  role.type
                )}
              </span>

            </div>


            <h3>
              ${escapeHTML(
                role.name
              )}
            </h3>


            <p>
              ${escapeHTML(
                role.description
              )}
            </p>


            <div
              class="admin-users-role-meta"
            >

              <span>
                👥 ${role.users} Users
              </span>

              <span>
                ● ${escapeHTML(
                  role.status
                )}
              </span>

            </div>


            <div
              class="admin-users-role-actions"
            >

              <button
                type="button"
                data-role-action="permissions"
                data-role-id="${role.id}"
              >
                Permissions
              </button>

              <button
                type="button"
                data-role-action="edit"
                data-role-id="${role.id}"
              >
                Edit
              </button>

              <button
                type="button"
                data-role-action="delete"
                data-role-id="${role.id}"
              >
                Delete
              </button>

            </div>

          </div>

        `
        ).join("")}

      </div>


      <div
        class="admin-users-role-hierarchy"
      >

        <div
          class="admin-users-subsection-heading"
        >

          <div>

            <h3>
              Role Hierarchy
            </h3>

            <p>
              Higher-level roles can inherit permissions
              from lower-level roles.
            </p>

          </div>

        </div>


        <div class="admin-users-hierarchy">

          <div
            class="
              admin-users-hierarchy-node
              level-one
            "
          >
            <span>01</span>
            <strong>Super Admin</strong>
            <small>Full System Access</small>
          </div>


          <div
            class="admin-users-hierarchy-line"
          ></div>


          <div
            class="
              admin-users-hierarchy-node
              level-two
            "
          >
            <span>02</span>
            <strong>Admin</strong>
            <small>Administrative Access</small>
          </div>


          <div
            class="admin-users-hierarchy-line"
          ></div>


          <div
            class="
              admin-users-hierarchy-node
              level-three
            "
          >
            <span>03</span>
            <strong>Principal</strong>
            <small>School-wide Access</small>
          </div>


          <div
            class="admin-users-hierarchy-line"
          ></div>


          <div
            class="
              admin-users-hierarchy-node
              level-four
            "
          >
            <span>04</span>
            <strong>Teacher</strong>
            <small>Academic Access</small>
          </div>

        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   PERMISSION SECTION
========================================================= */

function renderPermissionsSection() {

  const selectedRole =
    getSelectedPermissionRole();

  return `

    <div class="admin-users-section">

      <div
        class="admin-users-section-header"
      >

        <div>

          <h2>
            Permission Management
          </h2>

          <p>
            Manage granular module-level permissions.
          </p>

        </div>


        <div
          class="admin-users-permission-header-actions"
        >

          <select
            id="admin-users-permission-role"
            class="admin-users-filter-select"
          >

            ${rolesData.map(
              role => `
                <option
                  value="${escapeHTML(
                    role.name
                  )}"
                  ${
                    role.name ===
                    selectedRole
                      ? "selected"
                      : ""
                  }
                >
                  ${escapeHTML(
                    role.name
                  )}
                </option>
              `
            ).join("")}

          </select>


          <button
            type="button"
            class="admin-users-secondary-btn"
            data-permission-action="save"
          >
            Save Permissions
          </button>

        </div>

      </div>


      <div
        class="admin-users-permission-toolbar"
      >

        <div>

          <strong>
            Permission Matrix
          </strong>

          <span>
            Configure access for the selected role.
          </span>

        </div>


        <div
          class="admin-users-permission-presets"
        >

          <button
            type="button"
            data-permission-action="full-access"
          >
            Full Access
          </button>

          <button
            type="button"
            data-permission-action="read-only"
          >
            Read Only
          </button>

          <button
            type="button"
            data-permission-action="clear"
          >
            Clear All
          </button>

        </div>

      </div>


      <div
        class="admin-users-permission-table-wrapper"
      >

        <table
          class="admin-users-permission-table"
        >

          <thead>

            <tr>

              <th>
                Module
              </th>

              <th>
                View
              </th>

              <th>
                Create
              </th>

              <th>
                Edit
              </th>

              <th>
                Delete
              </th>

              <th>
                Export
              </th>

              <th>
                Approve
              </th>

              <th>
                Special
              </th>

            </tr>

          </thead>


          <tbody>

            ${PERMISSION_MODULES.map(
              module => `

              <tr>

                <td>

                  <div
                    class="admin-users-permission-module"
                  >

                    <strong>
                      ${escapeHTML(
                        module.name
                      )}
                    </strong>

                    <span>
                      Module Access
                    </span>

                  </div>

                </td>


                ${[
                  "View",
                  "Create",
                  "Edit",
                  "Delete",
                  "Export",
                  "Approve"
                ].map(
                  permission => `
                    <td>
                      ${renderPermissionCheckbox(
                        selectedRole,
                        module.name,
                        permission
                      )}
                    </td>
                  `
                ).join("")}


                <td>

                  <button
                    type="button"
                    class="admin-users-special-permission-btn"
                    data-special-module="${escapeHTML(
                      module.name
                    )}"
                  >
                    Configure
                  </button>

                </td>

              </tr>

            `
            ).join("")}

          </tbody>

        </table>

      </div>

    </div>

  `;

}


/* =========================================================
   PERMISSION CHECKBOX
========================================================= */

function renderPermissionCheckbox(
  roleName,
  moduleName,
  permission
) {

  const module =
    PERMISSION_MODULES.find(
      item =>
        item.name ===
        moduleName
    );

  if (
    !module ||
    !module.permissions.includes(
      permission
    )
  ) {

    return `
      <span
        class="admin-users-permission-disabled"
      >
        —
      </span>
    `;

  }


  const rolePermissions =
    getRolePermissions(
      roleName
    );

  const checked =
    rolePermissions
      .some(
        item =>
          item.module ===
            moduleName &&
          item.permission ===
            permission
      );


  return `
    <label
      class="admin-users-permission-checkbox"
    >

      <input
        type="checkbox"
        data-module="${escapeHTML(
          moduleName
        )}"
        data-permission="${escapeHTML(
          permission
        )}"
        ${checked ? "checked" : ""}
      >

      <span></span>

    </label>
  `;

}


/* =========================================================
   GET ROLE PERMISSIONS
========================================================= */

function getRolePermissions(
  roleName
) {

  if (
    Array.isArray(
      permissionData[roleName]
    )
  ) {

    return permissionData[
      roleName
    ];

  }


  if (
    roleName === "Super Admin"
  ) {

    const permissions = [];

    PERMISSION_MODULES.forEach(
      module => {

        module.permissions.forEach(
          permission => {

            permissions.push({
              module:
                module.name,
              permission
            });

          }
        );

      }
    );

    return permissions;

  }


  if (
    roleName === "Teacher"
  ) {

    const teacherModules = [
      "Dashboard",
      "Students",
      "Attendance",
      "Results",
      "Assignments",
      "Notices",
      "Documents",
      "Messages",
      "Reports"
    ];

    const permissions = [];

    PERMISSION_MODULES.forEach(
      module => {

        if (
          teacherModules.includes(
            module.name
          )
        ) {

          const allowed =
            module.permissions.filter(
              permission =>
                [
                  "View",
                  "Create",
                  "Edit",
                  "Export",
                  "Print"
                ].includes(
                  permission
                )
            );

          allowed.forEach(
            permission => {

              permissions.push({
                module:
                  module.name,
                permission
              });

            }
          );

        }

      }
    );

    return permissions;

  }


  return [];

}


/* =========================================================
   ACCESS POLICIES
========================================================= */

function renderAccessPoliciesSection() {

  return `

    <div class="admin-users-section">

      <div
        class="admin-users-section-header"
      >

        <div>

          <h2>
            Access Policies
          </h2>

          <p>
            Control where, when and how users can access
            the system.
          </p>

        </div>


        <button
          type="button"
          class="admin-users-primary-btn"
          data-users-action="add-policy"
        >
          <span>+</span>
          Create Policy
        </button>

      </div>


      <div
        class="admin-users-policy-grid"
      >

        ${renderPolicyCard(
          "🏫",
          "Organization Access",
          "Restrict users to selected schools, branches or organizations.",
          "organizationAccess"
        )}


        ${renderPolicyCard(
          "📍",
          "Location Restrictions",
          "Allow access only from approved locations.",
          "locationRestrictions"
        )}


        ${renderPolicyCard(
          "⏰",
          "Login Hours",
          "Restrict access outside approved working hours.",
          "loginHours"
        )}


        ${renderPolicyCard(
          "📱",
          "Device Restrictions",
          "Control access from registered devices.",
          "deviceRestrictions"
        )}


        ${renderPolicyCard(
          "⏳",
          "Temporary Access",
          "Automatically expire permissions after a defined period.",
          "temporaryAccess"
        )}


        ${renderPolicyCard(
          "🚫",
          "IP Restrictions",
          "Allow or deny access based on IP address.",
          "ipRestrictions"
        )}

      </div>


      <div
        class="admin-users-scope-card"
      >

        <div
          class="admin-users-subsection-heading"
        >

          <div>

            <h3>
              Permission Scope
            </h3>

            <p>
              Define the data scope available to each role.
            </p>

          </div>

        </div>


        <div
          class="admin-users-scope-grid"
        >

          ${[
            [
              "Entire School",
              "Access all school data"
            ],
            [
              "Department",
              "Only assigned department"
            ],
            [
              "Assigned Classes",
              "Only assigned classes"
            ],
            [
              "Assigned Students",
              "Only assigned students"
            ]
          ].map(
            item => `

              <label>

                <input
                  type="radio"
                  name="permission-scope"
                  value="${escapeHTML(
                    item[0]
                  )}"
                  ${
                    policiesData.permissionScope ===
                    item[0]
                      ? "checked"
                      : ""
                  }
                >

                <span>

                  <strong>
                    ${escapeHTML(
                      item[0]
                    )}
                  </strong>

                  <small>
                    ${escapeHTML(
                      item[1]
                    )}
                  </small>

                </span>

              </label>

            `
          ).join("")}

        </div>

      </div>


      <div
        class="admin-users-policy-actions"
      >

        <button
          type="button"
          class="admin-users-secondary-btn"
          data-policy-action="save"
        >
          Save Access Policies
        </button>

        <button
          type="button"
          class="admin-users-text-btn"
          data-policy-action="reset"
        >
          Reset Policies
        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   POLICY CARD
========================================================= */

function renderPolicyCard(
  icon,
  title,
  description,
  key
) {

  return `

    <div
      class="admin-users-policy-card"
    >

      <div
        class="admin-users-policy-icon"
      >
        ${icon}
      </div>


      <div>

        <h3>
          ${escapeHTML(title)}
        </h3>

        <p>
          ${escapeHTML(
            description
          )}
        </p>

      </div>


      <label
        class="admin-users-switch"
      >

        <input
          type="checkbox"
          data-policy-key="${key}"
          ${
            policiesData[key]
              ? "checked"
              : ""
          }
        >

        <span></span>

      </label>

    </div>

  `;

}


/* =========================================================
   SECURITY SECTION
========================================================= */

function renderSecuritySection() {

  return `

    <div class="admin-users-section">

      <div
        class="admin-users-section-header"
      >

        <div>

          <h2>
            Security & Authentication
          </h2>

          <p>
            Configure enterprise security policies.
          </p>

        </div>


        <button
          type="button"
          class="admin-users-secondary-btn"
          data-security-action="save"
        >
          Save Security Settings
        </button>

      </div>


      <div
        class="admin-users-security-grid"
      >

        <div
          class="admin-users-security-card"
        >

          <div
            class="admin-users-security-card-header"
          >

            <div
              class="admin-users-security-icon"
            >
              🔑
            </div>

            <div>

              <h3>
                Password Policy
              </h3>

              <p>
                Configure password requirements.
              </p>

            </div>

          </div>


          <div
            class="admin-users-security-settings"
          >

            <label>

              <span>
                Minimum Password Length
              </span>

              <input
                type="number"
                id="security-password-length"
                min="6"
                max="32"
                value="${Number(
                  policiesData.minimumPasswordLength
                )}"
              >

            </label>


            <label>

              <span>
                Password Expiry Days
              </span>

              <input
                type="number"
                id="security-password-expiry"
                min="0"
                max="365"
                value="${Number(
                  policiesData.passwordExpiryDays
                )}"
              >

            </label>


            <label>

              <span>
                Maximum Login Attempts
              </span>

              <input
                type="number"
                id="security-login-attempts"
                min="1"
                max="20"
                value="${Number(
                  policiesData.maxLoginAttempts
                )}"
              >

            </label>

          </div>

        </div>


        <div
          class="admin-users-security-card"
        >

          <div
            class="admin-users-security-card-header"
          >

            <div
              class="admin-users-security-icon"
            >
              🛡️
            </div>

            <div>

              <h3>
                Authentication
              </h3>

              <p>
                Protect administrator accounts.
              </p>

            </div>

          </div>


          <div
            class="admin-users-security-settings"
          >

            <div
              class="admin-users-security-row"
            >

              <div>

                <strong>
                  Require MFA
                </strong>

                <small>
                  Require multi-factor authentication.
                </small>

              </div>


              <label
                class="admin-users-switch"
              >

                <input
                  type="checkbox"
                  id="security-mfa"
                  ${
                    policiesData.mfaRequired
                      ? "checked"
                      : ""
                  }
                >

                <span></span>

              </label>

            </div>


            <div
              class="admin-users-security-row"
            >

              <div>

                <strong>
                  Strong Session Protection
                </strong>

                <small>
                  Protect active administrator sessions.
                </small>

              </div>


              <label
                class="admin-users-switch"
              >

                <input
                  type="checkbox"
                  id="security-session-protection"
                  ${
                    policiesData.sessionProtection
                      ? "checked"
                      : ""
                  }
                >

                <span></span>

              </label>

            </div>


            <label>

              <span>
                Session Timeout (minutes)
              </span>

              <input
                type="number"
                id="security-session-timeout"
                min="5"
                max="480"
                value="${Number(
                  policiesData.sessionTimeout
                )}"
              >

            </label>


            <label>

              <span>
                Concurrent Sessions
              </span>

              <input
                type="number"
                id="security-concurrent-sessions"
                min="1"
                max="20"
                value="${Number(
                  policiesData.concurrentSessions
                )}"
              >

            </label>

          </div>

        </div>

      </div>


      <div
        class="admin-users-security-summary"
      >

        <div>
          <strong>
            Security Status
          </strong>

          <span>
            ${
              policiesData.mfaRequired
                ? "MFA is required"
                : "MFA is optional"
            }
          </span>
        </div>


        <div>
          <strong>
            Password Length
          </strong>

          <span>
            Minimum ${
              Number(
                policiesData.minimumPasswordLength
              )
            } characters
          </span>
        </div>


        <div>
          <strong>
            Session Timeout
          </strong>

          <span>
            ${
              Number(
                policiesData.sessionTimeout
              )
            } minutes
          </span>
        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   ACCESS REQUESTS SECTION
========================================================= */

function renderRequestsSection() {

  return `

    <div class="admin-users-section">

      <div
        class="admin-users-section-header"
      >

        <div>

          <h2>
            Access Requests
          </h2>

          <p>
            Review and approve user access requests.
          </p>

        </div>

      </div>


      <div
        class="admin-users-table-wrapper"
      >

        <table
          class="admin-users-table"
        >

          <thead>

            <tr>

              <th>
                User
              </th>

              <th>
                Role
              </th>

              <th>
                Request
              </th>

              <th>
                Requested By
              </th>

              <th>
                Date
              </th>

              <th>
                Status
              </th>

              <th>
                Actions
              </th>

            </tr>

          </thead>


          <tbody>

            ${accessRequests.map(
              request => `

              <tr>

                <td>
                  ${escapeHTML(
                    request.user
                  )}
                </td>

                <td>
                  ${getRoleBadge(
                    request.role
                  )}
                </td>

                <td>
                  ${escapeHTML(
                    request.request
                  )}
                </td>

                <td>
                  ${escapeHTML(
                    request.requestedBy
                  )}
                </td>

                <td>
                  ${escapeHTML(
                    request.date
                  )}
                </td>

                <td>
                  ${renderRequestStatus(
                    request.status
                  )}
                </td>

                <td>

                  ${
                    request.status ===
                    "Pending"
                      ? `
                        <div
                          class="admin-users-action-wrapper"
                        >

                          <button
                            type="button"
                            class="admin-users-secondary-btn"
                            data-request-action="approve"
                            data-request-id="${request.id}"
                          >
                            Approve
                          </button>

                          <button
                            type="button"
                            class="admin-users-text-btn"
                            data-request-action="reject"
                            data-request-id="${request.id}"
                          >
                            Reject
                          </button>

                        </div>
                      `
                      : `
                        <span>
                          Completed
                        </span>
                      `
                  }

                </td>

              </tr>

            `
            ).join("")}

          </tbody>

        </table>

      </div>

    </div>

  `;

}


/* =========================================================
   REQUEST STATUS
========================================================= */

function renderRequestStatus(
  status
) {

  const cls =
    status
      .toLowerCase();

  return `
    <span
      class="
        admin-users-status-badge
        admin-users-status-${cls}
      "
    >
      ${escapeHTML(status)}
    </span>
  `;

}


/* =========================================================
   AUDIT SECTION
========================================================= */

function renderAuditSection() {

  return `

    <div class="admin-users-section">

      <div
        class="admin-users-section-header"
      >

        <div>

          <h2>
            Access Audit Logs
          </h2>

          <p>
            Track every important user and permission action.
          </p>

        </div>


        <div
          class="admin-users-header-actions"
        >

          <button
            type="button"
            class="admin-users-secondary-btn"
            data-audit-action="export"
          >
            Export Audit
          </button>


          <button
            type="button"
            class="admin-users-text-btn"
            data-audit-action="clear"
          >
            Clear Logs
          </button>

        </div>

      </div>


      <div
        class="admin-users-table-wrapper"
      >

        <table
          class="admin-users-table"
        >

          <thead>

            <tr>

              <th>
                Admin
              </th>

              <th>
                Action
              </th>

              <th>
                Target
              </th>

              <th>
                Details
              </th>

              <th>
                Time
              </th>

            </tr>

          </thead>


          <tbody>

            ${accessAuditLogs.map(
              log => `

              <tr>

                <td>

                  <div
                    class="admin-users-audit-user"
                  >

                    <div
                      class="admin-users-mini-avatar"
                    >
                      ${escapeHTML(
                        getInitials(
                          log.user
                        )
                      )}
                    </div>

                    <strong>
                      ${escapeHTML(
                        log.user
                      )}
                    </strong>

                  </div>

                </td>


                <td>

                  <span
                    class="admin-users-audit-action"
                  >
                    ${escapeHTML(
                      log.action
                    )}
                  </span>

                </td>


                <td>
                  ${escapeHTML(
                    log.target
                  )}
                </td>


                <td>
                  ${escapeHTML(
                    log.details
                  )}
                </td>


                <td>

                  <span
                    class="admin-users-audit-time"
                  >
                    ${escapeHTML(
                      log.time
                    )}
                  </span>

                </td>

              </tr>

            `
            ).join("")}

          </tbody>

        </table>

      </div>

    </div>

  `;

}


/* =========================================================
   MAIN PAGE
========================================================= */

export function AdminUsersPermissions() {

  return `

    <div
      class="admin-users-page"
      data-admin-users-page="true"
    >


      <!-- =================================================
           PAGE HEADER
      ================================================== -->

      <div
        class="admin-users-page-header"
      >

        <div
          class="admin-users-page-heading"
        >

          <div
            class="admin-users-page-icon"
          >
            🔐
          </div>


          <div>

            <div
              class="admin-users-breadcrumb"
            >
              Admin Panel
              <span>/</span>
              Users & Permissions
            </div>


            <h1>
              Users & Permissions
            </h1>


            <p>
              Enterprise identity, access and security management.
            </p>

          </div>

        </div>


        <div
          class="admin-users-header-actions"
        >

          <button
            type="button"
            class="admin-users-header-btn"
            data-users-action="security"
          >
            🛡 Security
          </button>


          <button
            type="button"
            class="admin-users-primary-btn"
            data-users-action="add-user"
          >
            + Add User
          </button>

        </div>

      </div>


      <!-- =================================================
           TOP NAVIGATION
      ================================================== -->

      <div
        class="admin-users-tabs"
      >

        <button
          type="button"
          class="admin-users-tab active"
          data-users-tab="overview"
        >
          👥 Users
        </button>


        <button
          type="button"
          class="admin-users-tab"
          data-users-tab="roles"
        >
          🛡 Roles
        </button>


        <button
          type="button"
          class="admin-users-tab"
          data-users-tab="permissions"
        >
          🔑 Permissions
        </button>


        <button
          type="button"
          class="admin-users-tab"
          data-users-tab="policies"
        >
          ⚙ Access Policies
        </button>


        <button
          type="button"
          class="admin-users-tab"
          data-users-tab="security"
        >
          🛡 Security
        </button>


        <button
          type="button"
          class="admin-users-tab"
          data-users-tab="requests"
        >
          🔔 Requests
        </button>


        <button
          type="button"
          class="admin-users-tab"
          data-users-tab="audit"
        >
          📋 Audit
        </button>

      </div>


      <!-- =================================================
           CONTENT
      ================================================== -->

      <div
        id="admin-users-content"
      >

        ${renderCurrentTab()}

      </div>


      <!-- =================================================
           MODAL CONTAINER
      ================================================== -->

      <div
        id="admin-users-modal-container"
      ></div>


      <!-- =================================================
           TOAST
      ================================================== -->

      <div
        id="admin-users-toast"
        class="admin-users-toast"
      ></div>

    </div>

  `;

}


/* =========================================================
   CURRENT TAB RENDER
========================================================= */

function renderCurrentTab() {

  if (
    currentTab === "overview"
  ) {
    return renderUsersSection();
  }

  if (
    currentTab === "roles"
  ) {
    return renderRolesSection();
  }

  if (
    currentTab === "permissions"
  ) {
    return renderPermissionsSection();
  }

  if (
    currentTab === "policies"
  ) {
    return renderAccessPoliciesSection();
  }

  if (
    currentTab === "security"
  ) {
    return renderSecuritySection();
  }

  if (
    currentTab === "requests"
  ) {
    return renderRequestsSection();
  }

  if (
    currentTab === "audit"
  ) {
    return renderAuditSection();
  }

  return renderUsersSection();

}


/* =========================================================
   RERENDER CONTENT
========================================================= */

function rerenderContent() {

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const content =
    page.querySelector(
      "#admin-users-content"
    );

  if (!content) {
    return;
  }

  content.innerHTML =
    renderCurrentTab();

  updateTabUI(page);

}


/* =========================================================
   UPDATE TAB UI
========================================================= */

function updateTabUI(page) {

  page
    .querySelectorAll(
      "[data-users-tab]"
    )
    .forEach(
      button => {

        const tab =
          button.dataset.usersTab;

        if (
          tab === currentTab
        ) {

          button.classList.add(
            "active"
          );

        } else {

          button.classList.remove(
            "active"
          );

        }

      }
    );

}


/* =========================================================
   SETUP NAVIGATION
========================================================= */

export function setupAdminUsersPermissionsNavigation() {

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }


  if (
    page.dataset.usersPermissionsReady ===
    "true"
  ) {
    return;
  }


  page.dataset.usersPermissionsReady =
    "true";


  /* =======================================================
     EVENT DELEGATION
  ======================================================= */

  page.addEventListener(
    "click",
    event => {

      /* =================================================
         TABS
      ================================================= */

      const tabButton =
        event.target.closest(
          "[data-users-tab]"
        );

      if (
        tabButton &&
        page.contains(tabButton)
      ) {

        currentTab =
          tabButton.dataset.usersTab ||
          "overview";

        rerenderContent();

        return;

      }


      /* =================================================
         GENERAL USER ACTION
      ================================================= */

      const usersAction =
        event.target.closest(
          "[data-users-action]"
        );

      if (
        usersAction &&
        page.contains(usersAction)
      ) {

        handleUsersAction(
          usersAction.dataset.usersAction
        );

        return;

      }


      /* =================================================
         USER TABLE ACTION
      ================================================= */

      const userAction =
        event.target.closest(
          "[data-user-action]"
        );

      if (
        userAction &&
        page.contains(userAction)
      ) {

        handleUserAction(
          userAction.dataset.userAction,
          Number(
            userAction.dataset.userId
          )
        );

        return;

      }


      /* =================================================
         BULK ACTION
      ================================================= */

      const bulkAction =
        event.target.closest(
          "[data-bulk-action]"
        );

      if (
        bulkAction &&
        page.contains(bulkAction)
      ) {

        handleBulkAction(
          bulkAction.dataset.bulkAction
        );

        return;

      }


      /* =================================================
         ROLE ACTION
      ================================================= */

      const roleAction =
        event.target.closest(
          "[data-role-action]"
        );

      if (
        roleAction &&
        page.contains(roleAction)
      ) {

        handleRoleAction(
          roleAction.dataset.roleAction,
          Number(
            roleAction.dataset.roleId
          )
        );

        return;

      }


      /* =================================================
         PERMISSION ACTION
      ================================================= */

      const permissionAction =
        event.target.closest(
          "[data-permission-action]"
        );

      if (
        permissionAction &&
        page.contains(permissionAction)
      ) {

        handlePermissionAction(
          permissionAction.dataset.permissionAction
        );

        return;

      }


      /* =================================================
         SPECIAL PERMISSION
      ================================================= */

      const specialButton =
        event.target.closest(
          "[data-special-module]"
        );

      if (
        specialButton &&
        page.contains(specialButton)
      ) {

        openSpecialPermissionModal(
          specialButton.dataset.specialModule
        );

        return;

      }


      /* =================================================
         POLICY ACTION
      ================================================= */

      const policyAction =
        event.target.closest(
          "[data-policy-action]"
        );

      if (
        policyAction &&
        page.contains(policyAction)
      ) {

        handlePolicyAction(
          policyAction.dataset.policyAction
        );

        return;

      }


      /* =================================================
         SECURITY ACTION
      ================================================= */

      const securityAction =
        event.target.closest(
          "[data-security-action]"
        );

      if (
        securityAction &&
        page.contains(securityAction)
      ) {

        handleSecurityAction(
          securityAction.dataset.securityAction
        );

        return;

      }


      /* =================================================
         REQUEST ACTION
      ================================================= */

      const requestAction =
        event.target.closest(
          "[data-request-action]"
        );

      if (
        requestAction &&
        page.contains(requestAction)
      ) {

        handleRequestAction(
          requestAction.dataset.requestAction,
          Number(
            requestAction.dataset.requestId
          )
        );

        return;

      }


      /* =================================================
         AUDIT ACTION
      ================================================= */

      const auditAction =
        event.target.closest(
          "[data-audit-action]"
        );

      if (
        auditAction &&
        page.contains(auditAction)
      ) {

        handleAuditAction(
          auditAction.dataset.auditAction
        );

        return;

      }

    }
  );


  /* =======================================================
     CHANGE EVENTS
  ======================================================= */

  page.addEventListener(
    "change",
    event => {

      const target =
        event.target;


      /* =================================================
         SELECT ALL
      ================================================= */

      if (
        target.classList.contains(
          "admin-users-select-all"
        )
      ) {

        const checked =
          target.checked;

        const users =
          getFilteredUsers();

        users.forEach(
          user => {

            if (checked) {

              selectedUserIds.add(
                user.id
              );

            } else {

              selectedUserIds.delete(
                user.id
              );

            }

          }
        );

        rerenderContent();

        return;

      }


      /* =================================================
         ROW CHECKBOX
      ================================================= */

      if (
        target.classList.contains(
          "admin-users-row-checkbox"
        )
      ) {

        const id =
          Number(
            target.value
          );

        if (
          target.checked
        ) {

          selectedUserIds.add(
            id
          );

        } else {

          selectedUserIds.delete(
            id
          );

        }

        updateSelectedCount(
          page
        );

        return;

      }


      /* =================================================
         PERMISSION CHECKBOX
      ================================================= */

      if (
        target.matches(
          "[data-module][data-permission]"
        )
      ) {

        return;

      }


      /* =================================================
         PERMISSION ROLE
      ================================================= */

      if (
        target.id ===
        "admin-users-permission-role"
      ) {

        rerenderContent();

        return;

      }


      /* =================================================
         POLICY TOGGLE
      ================================================= */

      if (
        target.matches(
          "[data-policy-key]"
        )
      ) {

        policiesData[
          target.dataset.policyKey
        ] =
          target.checked;

        return;

      }


      /* =================================================
         PERMISSION SCOPE
      ================================================= */

      if (
        target.name ===
        "permission-scope"
      ) {

        policiesData.permissionScope =
          target.value;

        return;

      }

    }
  );


  /* =======================================================
     SEARCH ENTER
  ======================================================= */

  page.addEventListener(
    "keydown",
    event => {

      if (
        event.key !== "Enter"
      ) {
        return;
      }

      if (
        event.target.id ===
        "admin-users-search"
      ) {

        currentSearch =
          event.target.value
            .trim();

        rerenderContent();

      }

    }
  );

}


/* =========================================================
   UPDATE SELECTED COUNT
========================================================= */

function updateSelectedCount(
  page
) {

  const element =
    page.querySelector(
      "#admin-users-selected-count"
    );

  if (!element) {
    return;
  }

  element.textContent =
    `${selectedUserIds.size} selected`;

}


/* =========================================================
   GENERAL ACTIONS
========================================================= */

function handleUsersAction(
  action
) {

  if (
    action === "add-user"
  ) {

    openUserModal();

    return;

  }


  if (
    action === "security"
  ) {

    currentTab =
      "security";

    rerenderContent();

    return;

  }


  if (
    action === "add-role"
  ) {

    openRoleModal();

    return;

  }


  if (
    action === "add-policy"
  ) {

    showToast(
      "Access policy editor is ready. Configure the policy switches below.",
      "success"
    );

    currentTab =
      "policies";

    rerenderContent();

    return;

  }


  if (
    action === "filter"
  ) {

    const search =
      document.querySelector(
        "#admin-users-search"
      );

    const role =
      document.querySelector(
        "#admin-users-role-filter"
      );

    const status =
      document.querySelector(
        "#admin-users-status-filter"
      );

    currentSearch =
      search
        ? search.value.trim()
        : "";

    currentRoleFilter =
      role
        ? role.value
        : "all";

    currentStatusFilter =
      status
        ? status.value
        : "all";

    rerenderContent();

    return;

  }


  if (
    action === "reset-filter"
  ) {

    currentSearch = "";

    currentRoleFilter = "all";

    currentStatusFilter = "all";

    selectedUserIds.clear();

    rerenderContent();

    return;

  }

}


/* =========================================================
   USER ACTIONS
========================================================= */

function handleUserAction(
  action,
  userId
) {

  const user =
    usersData.find(
      item =>
        item.id === userId
    );

  if (!user) {

    showToast(
      "User not found.",
      "error"
    );

    return;

  }


  if (
    action === "view"
  ) {

    openUserViewModal(
      user
    );

    return;

  }


  if (
    action === "edit"
  ) {

    openUserModal(
      user
    );

    return;

  }


  if (
    action === "access"
  ) {

    openUserAccessModal(
      user
    );

    return;

  }


  if (
    action === "more"
  ) {

    openUserMoreModal(
      user
    );

    return;

  }

}


/* =========================================================
   BULK ACTIONS
========================================================= */

function handleBulkAction(
  action
) {

  if (
    !selectedUserIds.size
  ) {

    showToast(
      "Please select at least one user.",
      "error"
    );

    return;

  }


  const selected =
    usersData.filter(
      user =>
        selectedUserIds.has(
          user.id
        )
    );


  if (
    action === "activate"
  ) {

    selected.forEach(
      user => {

        user.status =
          "Active";

      }
    );

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    addAuditLog(
      "Bulk Activation",
      `${selected.length} users`,
      "Selected users activated",
      "security"
    );

    selectedUserIds.clear();

    rerenderContent();

    showToast(
      "Selected users activated successfully.",
      "success"
    );

    return;

  }


  if (
    action === "disable"
  ) {

    selected.forEach(
      user => {

        user.status =
          "Disabled";

        user.sessions =
          0;

      }
    );

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    addAuditLog(
      "Bulk Disable",
      `${selected.length} users`,
      "Selected users disabled",
      "security"
    );

    selectedUserIds.clear();

    rerenderContent();

    showToast(
      "Selected users disabled successfully.",
      "success"
    );

    return;

  }


  if (
    action === "role"
  ) {

    openBulkRoleModal(
      selected
    );

    return;

  }


  if (
    action === "export"
  ) {

    exportUsersCSV(
      selected
    );

    return;

  }


  if (
    action === "delete"
  ) {

    const confirmed =
      window.confirm(
        `Delete ${selected.length} selected user(s)?`
      );

    if (!confirmed) {
      return;
    }

    usersData =
      usersData.filter(
        user =>
          !selectedUserIds.has(
            user.id
          )
      );

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    addAuditLog(
      "Bulk User Delete",
      `${selected.length} users`,
      "Selected users deleted",
      "security"
    );

    selectedUserIds.clear();

    rerenderContent();

    showToast(
      "Selected users deleted successfully.",
      "success"
    );

  }

}


/* =========================================================
   ROLE ACTIONS
========================================================= */

function handleRoleAction(
  action,
  roleId
) {

  const role =
    rolesData.find(
      item =>
        item.id === roleId
    );

  if (!role) {
    return;
  }


  if (
    action === "permissions"
  ) {

    currentTab =
      "permissions";

    rerenderContent();

    setTimeout(
      () => {

        const select =
          document.querySelector(
            "#admin-users-permission-role"
          );

        if (select) {

          select.value =
            role.name;

        }

        rerenderContent();

      },
      0
    );

    return;

  }


  if (
    action === "edit"
  ) {

    openRoleModal(
      role
    );

    return;

  }


  if (
    action === "delete"
  ) {

    if (
      role.type ===
      "System"
    ) {

      showToast(
        "System roles cannot be deleted.",
        "error"
      );

      return;

    }

    const assignedUsers =
      usersData.filter(
        user =>
          user.role ===
          role.name
      );

    if (
      assignedUsers.length
    ) {

      showToast(
        "This role is assigned to users. Reassign users before deleting.",
        "error"
      );

      return;

    }

    const confirmed =
      window.confirm(
        `Delete role "${role.name}"?`
      );

    if (!confirmed) {
      return;
    }

    rolesData =
      rolesData.filter(
        item =>
          item.id !== role.id
      );

    delete permissionData[
      role.name
    ];

    saveData(
      STORAGE_KEYS.roles,
      rolesData
    );

    saveData(
      STORAGE_KEYS.permissions,
      permissionData
    );

    addAuditLog(
      "Role Deleted",
      role.name,
      "Custom role deleted",
      "role"
    );

    rerenderContent();

    showToast(
      "Role deleted successfully.",
      "success"
    );

  }

}


/* =========================================================
   PERMISSION ACTIONS
========================================================= */

function handlePermissionAction(
  action
) {

  const roleName =
    getSelectedPermissionRole();


  if (
    action === "full-access"
  ) {

    permissionData[
      roleName
    ] = [];

    PERMISSION_MODULES.forEach(
      module => {

        module.permissions.forEach(
          permission => {

            permissionData[
              roleName
            ].push({
              module:
                module.name,
              permission
            });

          }
        );

      }
    );

    saveData(
      STORAGE_KEYS.permissions,
      permissionData
    );

    rerenderContent();

    showToast(
      `${roleName} now has full access.`,
      "success"
    );

    return;

  }


  if (
    action === "read-only"
  ) {

    permissionData[
      roleName
    ] = [];

    PERMISSION_MODULES.forEach(
      module => {

        if (
          module.permissions.includes(
            "View"
          )
        ) {

          permissionData[
            roleName
          ].push({
            module:
              module.name,
            permission:
              "View"
          });

        }

      }
    );

    saveData(
      STORAGE_KEYS.permissions,
      permissionData
    );

    rerenderContent();

    showToast(
      `${roleName} changed to read-only access.`,
      "success"
    );

    return;

  }


  if (
    action === "clear"
  ) {

    permissionData[
      roleName
    ] = [];

    saveData(
      STORAGE_KEYS.permissions,
      permissionData
    );

    rerenderContent();

    showToast(
      `All permissions cleared for ${roleName}.`,
      "success"
    );

    return;

  }


  if (
    action === "save"
  ) {

    const permissions = [];

    document
      .querySelectorAll(
        "[data-module][data-permission]"
      )
      .forEach(
        checkbox => {

          if (
            checkbox.checked
          ) {

            permissions.push({
              module:
                checkbox.dataset.module,
              permission:
                checkbox.dataset.permission
            });

          }

        }
      );

    permissionData[
      roleName
    ] = permissions;

    saveData(
      STORAGE_KEYS.permissions,
      permissionData
    );

    addAuditLog(
      "Permissions Saved",
      roleName,
      `${permissions.length} permissions configured`,
      "permission"
    );

    showToast(
      `Permissions saved for ${roleName}.`,
      "success"
    );

    return;

  }

}


/* =========================================================
   GET SELECTED ROLE
========================================================= */

function getSelectedPermissionRole() {

  const select =
    document.querySelector(
      "#admin-users-permission-role"
    );

  if (
    select &&
    select.value
  ) {

    return select.value;

  }

  if (
    rolesData.length
  ) {

    return rolesData[0].name;

  }

  return "Super Admin";

}


/* =========================================================
   POLICY ACTIONS
========================================================= */

function handlePolicyAction(
  action
) {

  if (
    action === "save"
  ) {

    document
      .querySelectorAll(
        "[data-policy-key]"
      )
      .forEach(
        checkbox => {

          policiesData[
            checkbox.dataset.policyKey
          ] =
            checkbox.checked;

        }
      );


    const scope =
      document.querySelector(
        'input[name="permission-scope"]:checked'
      );

    if (scope) {

      policiesData.permissionScope =
        scope.value;

    }


    saveData(
      STORAGE_KEYS.policies,
      policiesData
    );

    addAuditLog(
      "Access Policies Updated",
      "Global Policies",
      "Access policy configuration updated",
      "security"
    );

    showToast(
      "Access policies saved successfully.",
      "success"
    );

    return;

  }


  if (
    action === "reset"
  ) {

    const confirmed =
      window.confirm(
        "Reset all access policies to default values?"
      );

    if (!confirmed) {
      return;
    }

    policiesData =
      cloneData(
        DEFAULT_POLICIES
      );

    saveData(
      STORAGE_KEYS.policies,
      policiesData
    );

    rerenderContent();

    showToast(
      "Access policies reset successfully.",
      "success"
    );

  }

}


/* =========================================================
   SECURITY ACTIONS
========================================================= */

function handleSecurityAction(
  action
) {

  if (
    action !== "save"
  ) {
    return;
  }


  const passwordLength =
    document.querySelector(
      "#security-password-length"
    );

  const passwordExpiry =
    document.querySelector(
      "#security-password-expiry"
    );

  const loginAttempts =
    document.querySelector(
      "#security-login-attempts"
    );

  const mfa =
    document.querySelector(
      "#security-mfa"
    );

  const sessionProtection =
    document.querySelector(
      "#security-session-protection"
    );

  const sessionTimeout =
    document.querySelector(
      "#security-session-timeout"
    );

  const concurrentSessions =
    document.querySelector(
      "#security-concurrent-sessions"
    );


  policiesData.minimumPasswordLength =
    clampNumber(
      passwordLength
        ? passwordLength.value
        : 8,
      6,
      32
    );


  policiesData.passwordExpiryDays =
    clampNumber(
      passwordExpiry
        ? passwordExpiry.value
        : 90,
      0,
      365
    );


  policiesData.maxLoginAttempts =
    clampNumber(
      loginAttempts
        ? loginAttempts.value
        : 5,
      1,
      20
    );


  policiesData.mfaRequired =
    Boolean(
      mfa &&
      mfa.checked
    );


  policiesData.sessionProtection =
    Boolean(
      sessionProtection &&
      sessionProtection.checked
    );


  policiesData.sessionTimeout =
    clampNumber(
      sessionTimeout
        ? sessionTimeout.value
        : 30,
      5,
      480
    );


  policiesData.concurrentSessions =
    clampNumber(
      concurrentSessions
        ? concurrentSessions.value
        : 3,
      1,
      20
    );


  saveData(
    STORAGE_KEYS.policies,
    policiesData
  );

  addAuditLog(
    "Security Settings Updated",
    "Security Policy",
    "Password, MFA and session security settings updated",
    "security"
  );

  showToast(
    "Security settings saved successfully.",
    "success"
  );

}


/* =========================================================
   CLAMP NUMBER
========================================================= */

function clampNumber(
  value,
  min,
  max
) {

  const number =
    Number(value);

  if (
    Number.isNaN(number)
  ) {

    return min;

  }

  return Math.min(
    max,
    Math.max(
      min,
      number
    )
  );

}


/* =========================================================
   REQUEST ACTION
========================================================= */

function handleRequestAction(
  action,
  requestId
) {

  const request =
    accessRequests.find(
      item =>
        item.id ===
        requestId
    );

  if (!request) {
    return;
  }


  if (
    request.status !==
    "Pending"
  ) {

    showToast(
      "This request has already been processed.",
      "error"
    );

    return;

  }


  if (
    action === "approve"
  ) {

    request.status =
      "Approved";

    saveData(
      STORAGE_KEYS.requests,
      accessRequests
    );

    addAuditLog(
      "Access Request Approved",
      request.user,
      request.request,
      "approval"
    );

    rerenderContent();

    showToast(
      "Access request approved.",
      "success"
    );

    return;

  }


  if (
    action === "reject"
  ) {

    request.status =
      "Rejected";

    saveData(
      STORAGE_KEYS.requests,
      accessRequests
    );

    addAuditLog(
      "Access Request Rejected",
      request.user,
      request.request,
      "approval"
    );

    rerenderContent();

    showToast(
      "Access request rejected.",
      "success"
    );

  }

}


/* =========================================================
   AUDIT ACTION
========================================================= */

function handleAuditAction(
  action
) {

  if (
    action === "export"
  ) {

    exportAuditCSV();

    return;

  }


  if (
    action === "clear"
  ) {

    const confirmed =
      window.confirm(
        "Clear all audit logs?"
      );

    if (!confirmed) {
      return;
    }

    accessAuditLogs = [];

    saveData(
      STORAGE_KEYS.audit,
      accessAuditLogs
    );

    rerenderContent();

    showToast(
      "Audit logs cleared.",
      "success"
    );

  }

}


/* =========================================================
   USER MODAL
========================================================= */

function openUserModal(
  user = null
) {

  const isEdit =
    Boolean(user);

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const modalContainer =
    page.querySelector(
      "#admin-users-modal-container"
    );

  if (!modalContainer) {
    return;
  }


  modalContainer.innerHTML = `

    <div
      class="admin-users-modal-overlay"
      data-modal-overlay
    >

      <div
        class="admin-users-modal"
      >

        <div
          class="admin-users-modal-header"
        >

          <div>

            <h2>
              ${
                isEdit
                  ? "Edit User"
                  : "Add New User"
              }
            </h2>

            <p>
              ${
                isEdit
                  ? "Update user account and access details."
                  : "Create a new school administration account."
              }
            </p>

          </div>


          <button
            type="button"
            class="admin-users-modal-close"
            data-modal-close
          >
            ×
          </button>

        </div>


        <form
          id="admin-user-form"
          class="admin-users-modal-form"
        >

          <input
            type="hidden"
            name="id"
            value="${
              isEdit
                ? user.id
                : ""
            }"
          >


          <div
            class="admin-users-form-grid"
          >

            <label>

              <span>
                Full Name *
              </span>

              <input
                type="text"
                name="name"
                required
                value="${
                  isEdit
                    ? escapeHTML(
                        user.name
                      )
                    : ""
                }"
                placeholder="Enter full name"
              >

            </label>


            <label>

              <span>
                Username *
              </span>

              <input
                type="text"
                name="username"
                required
                value="${
                  isEdit
                    ? escapeHTML(
                        user.username
                      )
                    : ""
                }"
                placeholder="e.g. amit.teacher"
              >

            </label>


            <label>

              <span>
                Email *
              </span>

              <input
                type="email"
                name="email"
                required
                value="${
                  isEdit
                    ? escapeHTML(
                        user.email
                      )
                    : ""
                }"
                placeholder="user@school.edu"
              >

            </label>


            <label>

              <span>
                Phone
              </span>

              <input
                type="tel"
                name="phone"
                maxlength="10"
                value="${
                  isEdit
                    ? escapeHTML(
                        user.phone
                      )
                    : ""
                }"
                placeholder="10 digit mobile number"
              >

            </label>


            <label>

              <span>
                Employee ID *
              </span>

              <input
                type="text"
                name="employeeId"
                required
                value="${
                  isEdit
                    ? escapeHTML(
                        user.employeeId
                      )
                    : ""
                }"
                placeholder="Employee ID"
              >

            </label>


            <label>

              <span>
                Department *
              </span>

              <input
                type="text"
                name="department"
                required
                value="${
                  isEdit
                    ? escapeHTML(
                        user.department
                      )
                    : ""
                }"
                placeholder="Department"
              >

            </label>


            <label>

              <span>
                Role *
              </span>

              <select
                name="role"
                required
              >

                ${rolesData.map(
                  role => `
                    <option
                      value="${escapeHTML(
                        role.name
                      )}"
                      ${
                        isEdit &&
                        role.name ===
                          user.role
                          ? "selected"
                          : ""
                      }
                    >
                      ${escapeHTML(
                        role.name
                      )}
                    </option>
                  `
                ).join("")}

              </select>

            </label>


            <label>

              <span>
                Status *
              </span>

              <select
                name="status"
                required
              >

                ${[
                  "Active",
                  "Pending",
                  "Suspended",
                  "Disabled"
                ].map(
                  status => `
                    <option
                      value="${status}"
                      ${
                        isEdit &&
                        status ===
                          user.status
                          ? "selected"
                          : ""
                      }
                    >
                      ${status}
                    </option>
                  `
                ).join("")}

              </select>

            </label>

          </div>


          ${
            !isEdit
              ? `
                <div
                  class="admin-users-password-box"
                >

                  <h3>
                    Initial Password
                  </h3>

                  <p>
                    The user can change this password after first login.
                  </p>


                  <label>

                    <span>
                      Password *
                    </span>

                    <input
                      type="password"
                      name="password"
                      minlength="${Number(
                        policiesData.minimumPasswordLength
                      )}"
                      required
                      placeholder="Create initial password"
                    >

                  </label>


                  <label>

                    <span>
                      Confirm Password *
                    </span>

                    <input
                      type="password"
                      name="confirmPassword"
                      minlength="${Number(
                        policiesData.minimumPasswordLength
                      )}"
                      required
                      placeholder="Confirm password"
                    >

                  </label>

                </div>
              `
              : ""
          }


          <div
            class="admin-users-form-footer"
          >

            <button
              type="button"
              class="admin-users-secondary-btn"
              data-modal-close
            >
              Cancel
            </button>


            <button
              type="submit"
              class="admin-users-primary-btn"
            >
              ${
                isEdit
                  ? "Save Changes"
                  : "Create User"
              }
            </button>

          </div>

        </form>

      </div>

    </div>

  `;


  const form =
    modalContainer.querySelector(
      "#admin-user-form"
    );

  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      saveUserFromForm(
        form,
        user
      );

    }
  );

}


/* =========================================================
   SAVE USER
========================================================= */

function saveUserFromForm(
  form,
  existingUser
) {

  const formData =
    new FormData(form);

  const name =
    String(
      formData.get("name") || ""
    ).trim();

  const username =
    String(
      formData.get("username") || ""
    ).trim();

  const email =
    String(
      formData.get("email") || ""
    ).trim();

  const phone =
    String(
      formData.get("phone") || ""
    ).trim();

  const employeeId =
    String(
      formData.get("employeeId") || ""
    ).trim();

  const department =
    String(
      formData.get("department") || ""
    ).trim();

  const role =
    String(
      formData.get("role") || ""
    ).trim();

  const status =
    String(
      formData.get("status") || ""
    ).trim();


  if (
    !name ||
    !username ||
    !email ||
    !employeeId ||
    !department ||
    !role ||
    !status
  ) {

    showToast(
      "Please fill all required fields.",
      "error"
    );

    return;

  }


  const duplicateUsername =
    usersData.some(
      user =>
        user.username
          .toLowerCase() ===
          username.toLowerCase() &&
        (
          !existingUser ||
          user.id !==
            existingUser.id
        )
    );


  if (
    duplicateUsername
  ) {

    showToast(
      "Username already exists.",
      "error"
    );

    return;

  }


  const duplicateEmail =
    usersData.some(
      user =>
        user.email
          .toLowerCase() ===
          email.toLowerCase() &&
        (
          !existingUser ||
          user.id !==
            existingUser.id
        )
    );


  if (
    duplicateEmail
  ) {

    showToast(
      "Email already exists.",
      "error"
    );

    return;

  }


  const duplicateEmployeeId =
    usersData.some(
      user =>
        user.employeeId
          .toLowerCase() ===
          employeeId.toLowerCase() &&
        (
          !existingUser ||
          user.id !==
            existingUser.id
        )
    );


  if (
    duplicateEmployeeId
  ) {

    showToast(
      "Employee ID already exists.",
      "error"
    );

    return;

  }


  if (!existingUser) {

    const password =
      String(
        formData.get("password") ||
        ""
      );

    const confirmPassword =
      String(
        formData.get(
          "confirmPassword"
        ) || ""
      );


    if (
      password.length <
      Number(
        policiesData.minimumPasswordLength
      )
    ) {

      showToast(
        `Password must contain at least ${policiesData.minimumPasswordLength} characters.`,
        "error"
      );

      return;

    }


    if (
      password !==
      confirmPassword
    ) {

      showToast(
        "Passwords do not match.",
        "error"
      );

      return;

    }


    const newUser = {

      id:
        generateId(),

      name,

      username,

      email,

      phone,

      role,

      department,

      employeeId,

      status,

      lastLogin:
        "Never",

      sessions:
        0,

      mfa:
        policiesData.mfaRequired

    };


    usersData.unshift(
      newUser
    );


    saveData(
      STORAGE_KEYS.users,
      usersData
    );


    addAuditLog(
      "User Created",
      name,
      `${role} account created`,
      "user"
    );


    closeModal();

    selectedUserIds.clear();

    rerenderContent();

    showToast(
      "User created successfully.",
      "success"
    );

    return;

  }


  const index =
    usersData.findIndex(
      user =>
        user.id ===
        existingUser.id
    );


  if (
    index === -1
  ) {

    showToast(
      "User could not be found.",
      "error"
    );

    return;

  }


  const oldRole =
    usersData[index].role;


  usersData[index] = {

    ...usersData[index],

    name,

    username,

    email,

    phone,

    employeeId,

    department,

    role,

    status,

    sessions:
      status === "Active"
        ? usersData[index].sessions
        : 0

  };


  saveData(
    STORAGE_KEYS.users,
    usersData
  );


  addAuditLog(
    "User Updated",
    name,
    `User details updated${oldRole !== role
      ? ` and role changed from ${oldRole} to ${role}`
      : ""
    }`,
    "user"
  );


  closeModal();

  rerenderContent();

  showToast(
    "User updated successfully.",
    "success"
  );

}


/* =========================================================
   VIEW USER MODAL
========================================================= */

function openUserViewModal(
  user
) {

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const container =
    page.querySelector(
      "#admin-users-modal-container"
    );

  if (!container) {
    return;
  }


  container.innerHTML = `

    <div
      class="admin-users-modal-overlay"
    >

      <div
        class="admin-users-modal"
      >

        <div
          class="admin-users-modal-header"
        >

          <div>

            <h2>
              User Details
            </h2>

            <p>
              Complete account information.
            </p>

          </div>


          <button
            type="button"
            class="admin-users-modal-close"
            data-modal-close
          >
            ×
          </button>

        </div>


        <div
          class="admin-users-profile-modal"
        >

          <div
            class="admin-users-avatar admin-users-large-avatar"
          >
            ${escapeHTML(
              getInitials(
                user.name
              )
            )}
          </div>


          <div>

            <h2>
              ${escapeHTML(
                user.name
              )}
            </h2>

            <p>
              @${escapeHTML(
                user.username
              )}
            </p>

            ${getRoleBadge(
              user.role
            )}

          </div>

        </div>


        <div
          class="admin-users-details-grid"
        >

          ${renderDetail(
            "Email",
            user.email
          )}

          ${renderDetail(
            "Phone",
            user.phone || "Not provided"
          )}

          ${renderDetail(
            "Employee ID",
            user.employeeId
          )}

          ${renderDetail(
            "Department",
            user.department
          )}

          ${renderDetail(
            "Status",
            user.status
          )}

          ${renderDetail(
            "Last Login",
            user.lastLogin
          )}

          ${renderDetail(
            "Active Sessions",
            String(
              user.sessions || 0
            )
          )}

          ${renderDetail(
            "MFA",
            user.mfa
              ? "Enabled"
              : "Disabled"
          )}

        </div>


        <div
          class="admin-users-form-footer"
        >

          <button
            type="button"
            class="admin-users-secondary-btn"
            data-modal-close
          >
            Close
          </button>


          <button
            type="button"
            class="admin-users-primary-btn"
            data-modal-edit-user="${user.id}"
          >
            Edit User
          </button>

        </div>

      </div>

    </div>

  `;


  const editButton =
    container.querySelector(
      "[data-modal-edit-user]"
    );

  if (editButton) {

    editButton.addEventListener(
      "click",
      () => {

        closeModal();

        openUserModal(
          user
        );

      }
    );

  }

}


/* =========================================================
   DETAIL ITEM
========================================================= */

function renderDetail(
  label,
  value
) {

  return `

    <div
      class="admin-users-detail-item"
    >

      <span>
        ${escapeHTML(label)}
      </span>

      <strong>
        ${escapeHTML(value)}
      </strong>

    </div>

  `;

}


/* =========================================================
   USER ACCESS MODAL
========================================================= */

function openUserAccessModal(
  user
) {

  const rolePermissions =
    getRolePermissions(
      user.role
    );


  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const container =
    page.querySelector(
      "#admin-users-modal-container"
    );

  if (!container) {
    return;
  }


  container.innerHTML = `

    <div
      class="admin-users-modal-overlay"
    >

      <div
        class="admin-users-modal"
      >

        <div
          class="admin-users-modal-header"
        >

          <div>

            <h2>
              Manage User Access
            </h2>

            <p>
              ${escapeHTML(
                user.name
              )} • ${escapeHTML(
                user.role
              )}
            </p>

          </div>


          <button
            type="button"
            class="admin-users-modal-close"
            data-modal-close
          >
            ×
          </button>

        </div>


        <div
          class="admin-users-access-summary"
        >

          <div>

            <strong>
              Current Role
            </strong>

            <span>
              ${escapeHTML(
                user.role
              )}
            </span>

          </div>


          <div>

            <strong>
              Permissions
            </strong>

            <span>
              ${rolePermissions.length}
            </span>

          </div>


          <div>

            <strong>
              Scope
            </strong>

            <span>
              ${escapeHTML(
                policiesData.permissionScope
              )}
            </span>

          </div>

        </div>


        <div
          class="admin-users-form-grid"
        >

          <label>

            <span>
              Assign Role
            </span>

            <select
              id="access-role-select"
            >

              ${rolesData.map(
                role => `
                  <option
                    value="${escapeHTML(
                      role.name
                    )}"
                    ${
                      role.name ===
                      user.role
                        ? "selected"
                        : ""
                    }
                  >
                    ${escapeHTML(
                      role.name
                    )}
                  </option>
                `
              ).join("")}

            </select>

          </label>


          <label>

            <span>
              Account Status
            </span>

            <select
              id="access-status-select"
            >

              ${[
                "Active",
                "Pending",
                "Suspended",
                "Disabled"
              ].map(
                status => `
                  <option
                    value="${status}"
                    ${
                      status ===
                      user.status
                        ? "selected"
                        : ""
                    }
                  >
                    ${status}
                  </option>
                `
              ).join("")}

            </select>

          </label>

        </div>


        <div
          class="admin-users-access-permission-list"
        >

          <h3>
            Current Permissions
          </h3>

          ${rolePermissions
            .slice(0, 20)
            .map(
              permission => `
                <div
                  class="admin-users-access-permission-item"
                >
                  <span>
                    ${escapeHTML(
                      permission.module
                    )}
                  </span>

                  <strong>
                    ${escapeHTML(
                      permission.permission
                    )}
                  </strong>
                </div>
              `
            )
            .join("")}

          ${
            rolePermissions.length > 20
              ? `
                <p>
                  + ${
                    rolePermissions.length -
                    20
                  } more permissions
                </p>
              `
              : ""
          }

        </div>


        <div
          class="admin-users-form-footer"
        >

          <button
            type="button"
            class="admin-users-secondary-btn"
            data-modal-close
          >
            Cancel
          </button>


          <button
            type="button"
            class="admin-users-primary-btn"
            data-save-user-access="${user.id}"
          >
            Save Access
          </button>

        </div>

      </div>

    </div>

  `;


  const saveButton =
    container.querySelector(
      "[data-save-user-access]"
    );


  if (saveButton) {

    saveButton.addEventListener(
      "click",
      () => {

        const roleSelect =
          container.querySelector(
            "#access-role-select"
          );

        const statusSelect =
          container.querySelector(
            "#access-status-select"
          );


        const newRole =
          roleSelect.value;

        const newStatus =
          statusSelect.value;


        const index =
          usersData.findIndex(
            item =>
              item.id ===
              user.id
          );


        if (
          index === -1
        ) {
          return;
        }


        const oldRole =
          usersData[index].role;


        usersData[index].role =
          newRole;

        usersData[index].status =
          newStatus;


        if (
          newStatus !==
          "Active"
        ) {

          usersData[index].sessions =
            0;

        }


        saveData(
          STORAGE_KEYS.users,
          usersData
        );


        addAuditLog(
          "User Access Updated",
          user.name,
          `Role: ${oldRole} → ${newRole}; Status: ${newStatus}`,
          "permission"
        );


        closeModal();

        rerenderContent();

        showToast(
          "User access updated successfully.",
          "success"
        );

      }
    );

  }

}


/* =========================================================
   MORE USER ACTIONS
========================================================= */

function openUserMoreModal(
  user
) {

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const container =
    page.querySelector(
      "#admin-users-modal-container"
    );

  if (!container) {
    return;
  }


  container.innerHTML = `

    <div
      class="admin-users-modal-overlay"
    >

      <div
        class="admin-users-modal"
      >

        <div
          class="admin-users-modal-header"
        >

          <div>

            <h2>
              User Actions
            </h2>

            <p>
              ${escapeHTML(
                user.name
              )}
            </p>

          </div>


          <button
            type="button"
            class="admin-users-modal-close"
            data-modal-close
          >
            ×
          </button>

        </div>


        <div
          class="admin-users-action-menu"
        >

          <button
            type="button"
            data-more-user-action="activate"
          >
            🟢 Activate Account
          </button>


          <button
            type="button"
            data-more-user-action="suspend"
          >
            🔒 Suspend Account
          </button>


          <button
            type="button"
            data-more-user-action="disable"
          >
            🚫 Disable Account
          </button>


          <button
            type="button"
            data-more-user-action="reset-password"
          >
            🔑 Reset Password
          </button>


          <button
            type="button"
            data-more-user-action="logout"
          >
            💻 Force Logout All Sessions
          </button>


          <button
            type="button"
            class="danger"
            data-more-user-action="delete"
          >
            🗑 Delete User
          </button>

        </div>


        <div
          class="admin-users-form-footer"
        >

          <button
            type="button"
            class="admin-users-secondary-btn"
            data-modal-close
          >
            Close
          </button>

        </div>

      </div>

    </div>

  `;


  container
    .querySelectorAll(
      "[data-more-user-action]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            handleMoreUserAction(
              button.dataset.moreUserAction,
              user
            );

          }
        );

      }
    );

}


/* =========================================================
   MORE USER ACTION HANDLER
========================================================= */

function handleMoreUserAction(
  action,
  user
) {

  if (
    action === "activate"
  ) {

    user.status =
      "Active";

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    addAuditLog(
      "User Activated",
      user.name,
      "Account activated",
      "security"
    );

    closeModal();

    rerenderContent();

    showToast(
      "User activated.",
      "success"
    );

    return;

  }


  if (
    action === "suspend"
  ) {

    user.status =
      "Suspended";

    user.sessions =
      0;

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    addAuditLog(
      "User Suspended",
      user.name,
      "Account suspended",
      "security"
    );

    closeModal();

    rerenderContent();

    showToast(
      "User suspended.",
      "success"
    );

    return;

  }


  if (
    action === "disable"
  ) {

    user.status =
      "Disabled";

    user.sessions =
      0;

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    addAuditLog(
      "User Disabled",
      user.name,
      "Account disabled",
      "security"
    );

    closeModal();

    rerenderContent();

    showToast(
      "User disabled.",
      "success"
    );

    return;

  }


  if (
    action === "reset-password"
  ) {

    const newPassword =
      window.prompt(
        `Enter new password for ${user.name}:`
      );

    if (
      newPassword ===
      null
    ) {
      return;
    }

    if (
      newPassword.length <
      Number(
        policiesData.minimumPasswordLength
      )
    ) {

      showToast(
        `Password must contain at least ${policiesData.minimumPasswordLength} characters.`,
        "error"
      );

      return;

    }

    addAuditLog(
      "Password Reset",
      user.name,
      "Administrator reset user password",
      "security"
    );

    showToast(
      "Password reset successfully.",
      "success"
    );

    closeModal();

    return;

  }


  if (
    action === "logout"
  ) {

    user.sessions =
      0;

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    addAuditLog(
      "Force Logout",
      user.name,
      "All active sessions terminated",
      "security"
    );

    closeModal();

    rerenderContent();

    showToast(
      "All user sessions have been terminated.",
      "success"
    );

    return;

  }


  if (
    action === "delete"
  ) {

    const confirmed =
      window.confirm(
        `Delete user "${user.name}" permanently?`
      );

    if (!confirmed) {
      return;
    }

    usersData =
      usersData.filter(
        item =>
          item.id !==
          user.id
      );

    saveData(
      STORAGE_KEYS.users,
      usersData
    );

    selectedUserIds.delete(
      user.id
    );

    addAuditLog(
      "User Deleted",
      user.name,
      "User account permanently deleted",
      "security"
    );

    closeModal();

    rerenderContent();

    showToast(
      "User deleted successfully.",
      "success"
    );

  }

}


/* =========================================================
   ROLE MODAL
========================================================= */

function openRoleModal(
  role = null
) {

  const isEdit =
    Boolean(role);

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const container =
    page.querySelector(
      "#admin-users-modal-container"
    );

  if (!container) {
    return;
  }


  container.innerHTML = `

    <div
      class="admin-users-modal-overlay"
    >

      <div
        class="admin-users-modal"
      >

        <div
          class="admin-users-modal-header"
        >

          <div>

            <h2>
              ${
                isEdit
                  ? "Edit Role"
                  : "Create Role"
              }
            </h2>

            <p>
              Configure role information.
            </p>

          </div>


          <button
            type="button"
            class="admin-users-modal-close"
            data-modal-close
          >
            ×
          </button>

        </div>


        <form
          id="admin-role-form"
        >

          <div
            class="admin-users-form-grid"
          >

            <label>

              <span>
                Role Name *
              </span>

              <input
                type="text"
                name="name"
                required
                value="${
                  isEdit
                    ? escapeHTML(
                        role.name
                      )
                    : ""
                }"
                ${
                  isEdit &&
                  role.type ===
                    "System"
                    ? "readonly"
                    : ""
                }
                placeholder="e.g. HR Manager"
              >

            </label>


            <label>

              <span>
                Role Type
              </span>

              <select
                name="type"
              >

                <option
                  value="Custom"
                >
                  Custom
                </option>

                <option
                  value="System"
                  ${
                    isEdit &&
                    role.type ===
                      "System"
                      ? "selected"
                      : ""
                  }
                >
                  System
                </option>

              </select>

            </label>


            <label
              style="grid-column: 1 / -1;"
            >

              <span>
                Description *
              </span>

              <textarea
                name="description"
                rows="4"
                required
                placeholder="Describe this role..."
              >${
                isEdit
                  ? escapeHTML(
                      role.description
                    )
                  : ""
              }</textarea>

            </label>

          </div>


          <div
            class="admin-users-form-footer"
          >

            <button
              type="button"
              class="admin-users-secondary-btn"
              data-modal-close
            >
              Cancel
            </button>


            <button
              type="submit"
              class="admin-users-primary-btn"
            >
              ${
                isEdit
                  ? "Save Role"
                  : "Create Role"
              }
            </button>

          </div>

        </form>

      </div>

    </div>

  `;


  const form =
    container.querySelector(
      "#admin-role-form"
    );

  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const formData =
        new FormData(form);

      const name =
        String(
          formData.get("name") ||
          ""
        ).trim();

      const description =
        String(
          formData.get(
            "description"
          ) || ""
        ).trim();

      const type =
        String(
          formData.get("type") ||
          "Custom"
        );


      if (
        !name ||
        !description
      ) {

        showToast(
          "Please fill all role fields.",
          "error"
        );

        return;

      }


      if (!isEdit) {

        const exists =
          rolesData.some(
            item =>
              item.name
                .toLowerCase() ===
              name.toLowerCase()
          );

        if (exists) {

          showToast(
            "Role already exists.",
            "error"
          );

          return;

        }


        const newRole = {

          id:
            generateId(),

          name,

          description,

          users:
            0,

          type,

          status:
            "Active"

        };


        rolesData.push(
          newRole
        );


        permissionData[
          name
        ] = [];


        saveData(
          STORAGE_KEYS.roles,
          rolesData
        );

        saveData(
          STORAGE_KEYS.permissions,
          permissionData
        );


        addAuditLog(
          "Role Created",
          name,
          "New custom role created",
          "role"
        );


        closeModal();

        rerenderContent();

        showToast(
          "Role created successfully.",
          "success"
        );

        return;

      }


      const index =
        rolesData.findIndex(
          item =>
            item.id ===
            role.id
        );

      if (
        index === -1
      ) {
        return;
      }


      rolesData[index].description =
        description;


      if (
        role.type !==
        "System"
      ) {

        rolesData[index].type =
          type;

      }


      saveData(
        STORAGE_KEYS.roles,
        rolesData
      );


      addAuditLog(
        "Role Updated",
        role.name,
        "Role configuration updated",
        "role"
      );


      closeModal();

      rerenderContent();

      showToast(
        "Role updated successfully.",
        "success"
      );

    }
  );

}


/* =========================================================
   BULK ROLE MODAL
========================================================= */

function openBulkRoleModal(
  users
) {

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const container =
    page.querySelector(
      "#admin-users-modal-container"
    );

  if (!container) {
    return;
  }


  container.innerHTML = `

    <div
      class="admin-users-modal-overlay"
    >

      <div
        class="admin-users-modal"
      >

        <div
          class="admin-users-modal-header"
        >

          <div>

            <h2>
              Change Role
            </h2>

            <p>
              ${users.length} user(s) selected.
            </p>

          </div>


          <button
            type="button"
            class="admin-users-modal-close"
            data-modal-close
          >
            ×
          </button>

        </div>


        <label>

          <span>
            New Role
          </span>

          <select
            id="bulk-role-select"
          >

            ${rolesData.map(
              role => `
                <option
                  value="${escapeHTML(
                    role.name
                  )}"
                >
                  ${escapeHTML(
                    role.name
                  )}
                </option>
              `
            ).join("")}

          </select>

        </label>


        <div
          class="admin-users-form-footer"
        >

          <button
            type="button"
            class="admin-users-secondary-btn"
            data-modal-close
          >
            Cancel
          </button>


          <button
            type="button"
            class="admin-users-primary-btn"
            id="bulk-role-save"
          >
            Change Role
          </button>

        </div>

      </div>

    </div>

  `;


  const saveButton =
    container.querySelector(
      "#bulk-role-save"
    );


  if (saveButton) {

    saveButton.addEventListener(
      "click",
      () => {

        const roleSelect =
          container.querySelector(
            "#bulk-role-select"
          );

        const newRole =
          roleSelect.value;


        users.forEach(
          user => {

            user.role =
              newRole;

          }
        );


        saveData(
          STORAGE_KEYS.users,
          usersData
        );


        addAuditLog(
          "Bulk Role Change",
          `${users.length} users`,
          `Role changed to ${newRole}`,
          "role"
        );


        selectedUserIds.clear();

        closeModal();

        rerenderContent();

        showToast(
          "Role changed successfully.",
          "success"
        );

      }
    );

  }

}


/* =========================================================
   SPECIAL PERMISSION MODAL
========================================================= */

function openSpecialPermissionModal(
  moduleName
) {

  const page =
    document.querySelector(
      ".admin-users-page"
    );

  if (!page) {
    return;
  }

  const container =
    page.querySelector(
      "#admin-users-modal-container"
    );

  if (!container) {
    return;
  }


  container.innerHTML = `

    <div
      class="admin-users-modal-overlay"
    >

      <div
        class="admin-users-modal"
      >

        <div
          class="admin-users-modal-header"
        >

          <div>

            <h2>
              Special Permissions
            </h2>

            <p>
              Configure advanced access for ${escapeHTML(
                moduleName
              )}.
            </p>

          </div>


          <button
            type="button"
            class="admin-users-modal-close"
            data-modal-close
          >
            ×
          </button>

        </div>


        <div
          class="admin-users-form-grid"
        >

          <label>

            <span>
              Approval Level
            </span>

            <select
              id="special-approval-level"
            >

              <option>
                None
              </option>

              <option>
                Manager Approval
              </option>

              <option>
                Principal Approval
              </option>

              <option>
                Super Admin Approval
              </option>

            </select>

          </label>


          <label>

            <span>
              Data Scope
            </span>

            <select
              id="special-data-scope"
            >

              <option>
                Entire School
              </option>

              <option>
                Department
              </option>

              <option>
                Assigned Classes
              </option>

              <option>
                Assigned Students
              </option>

            </select>

          </label>


          <label
            style="grid-column:1 / -1;"
          >

            <span>
              Special Access Reason
            </span>

            <textarea
              id="special-access-reason"
              rows="4"
              placeholder="Enter reason or policy note..."
            ></textarea>

          </label>

        </div>


        <div
          class="admin-users-form-footer"
        >

          <button
            type="button"
            class="admin-users-secondary-btn"
            data-modal-close
          >
            Cancel
          </button>


          <button
            type="button"
            class="admin-users-primary-btn"
            id="save-special-permission"
          >
            Save Configuration
          </button>

        </div>

      </div>

    </div>

  `;


  const saveButton =
    container.querySelector(
      "#save-special-permission"
    );


  if (saveButton) {

    saveButton.addEventListener(
      "click",
      () => {

        const approval =
          container.querySelector(
            "#special-approval-level"
          ).value;

        const scope =
          container.querySelector(
            "#special-data-scope"
          ).value;

        const reason =
          container.querySelector(
            "#special-access-reason"
          ).value.trim();


        addAuditLog(
          "Special Permission Updated",
          moduleName,
          `Approval: ${approval}; Scope: ${scope}; Reason: ${reason || "Not specified"}`,
          "permission"
        );


        closeModal();

        showToast(
          `${moduleName} special permission configured.`,
          "success"
        );

      }
    );

  }

}


/* =========================================================
   UPDATE ROLE USER COUNTS
========================================================= */

function updateRoleUserCounts() {

  rolesData.forEach(
    role => {

      role.users =
        usersData.filter(
          user =>
            user.role ===
            role.name
        ).length;

    }
  );


  saveData(
    STORAGE_KEYS.roles,
    rolesData
  );

}


/* =========================================================
   EXPORT USERS CSV
========================================================= */

function exportUsersCSV(
  users
) {

  if (
    !users.length
  ) {

    showToast(
      "No users available for export.",
      "error"
    );

    return;

  }


  const headers = [
    "ID",
    "Name",
    "Username",
    "Email",
    "Phone",
    "Role",
    "Department",
    "Employee ID",
    "Status",
    "Last Login",
    "Sessions",
    "MFA"
  ];


  const rows =
    users.map(
      user => [

        user.id,

        user.name,

        user.username,

        user.email,

        user.phone || "",

        user.role,

        user.department,

        user.employeeId,

        user.status,

        user.lastLogin,

        user.sessions || 0,

        user.mfa
          ? "Enabled"
          : "Disabled"

      ]
    );


  downloadCSV(
    headers,
    rows,
    "school-users.csv"
  );


  addAuditLog(
    "Users Exported",
    `${users.length} users`,
    "User data exported as CSV",
    "export"
  );


  showToast(
    "Users exported successfully.",
    "success"
  );

}


/* =========================================================
   EXPORT AUDIT CSV
========================================================= */

function exportAuditCSV() {

  if (
    !accessAuditLogs.length
  ) {

    showToast(
      "No audit logs available.",
      "error"
    );

    return;

  }


  const headers = [
    "ID",
    "Admin",
    "Action",
    "Target",
    "Details",
    "Time",
    "Type"
  ];


  const rows =
    accessAuditLogs.map(
      log => [

        log.id,

        log.user,

        log.action,

        log.target,

        log.details,

        log.time,

        log.type

      ]
    );


  downloadCSV(
    headers,
    rows,
    "school-access-audit.csv"
  );


  showToast(
    "Audit log exported successfully.",
    "success"
  );

}


/* =========================================================
   DOWNLOAD CSV
========================================================= */

function downloadCSV(
  headers,
  rows,
  fileName
) {

  const escapeCSV =
    value => {

      const text =
        String(
          value ?? ""
        );

      return `"${text.replace(
        /"/g,
        '""'
      )}"`;

    };


  const csv = [
    headers.map(
      escapeCSV
    ).join(","),
    ...rows.map(
      row =>
        row.map(
          escapeCSV
        ).join(",")
    )
  ].join("\n");


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
    fileName;

  document.body.appendChild(
    link
  );

  link.click();

  link.remove();

  URL.revokeObjectURL(
    url
  );

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

  const container =
    document.querySelector(
      "#admin-users-modal-container"
    );

  if (container) {

    container.innerHTML =
      "";

  }

}


/* =========================================================
   MODAL CLOSE HANDLER
========================================================= */

document.addEventListener(
  "click",
  event => {

    const closeButton =
      event.target.closest(
        "[data-modal-close]"
      );

    if (!closeButton) {
      return;
    }

    const overlay =
      closeButton.closest(
        ".admin-users-modal-overlay"
      );

    if (overlay) {

      overlay.remove();

    } else {

      closeModal();

    }

  }
);


/* =========================================================
   TOAST
========================================================= */

function showToast(
  message,
  type = "success"
) {

  const toast =
    document.querySelector(
      "#admin-users-toast"
    );

  if (!toast) {
    return;
  }


  toast.textContent =
    message;


  toast.className =
    "admin-users-toast";


  toast.classList.add(
    `admin-users-toast-${type}`
  );


  toast.classList.add(
    "show"
  );


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      3000
    );

}