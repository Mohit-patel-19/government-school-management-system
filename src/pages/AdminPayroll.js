import "./AdminStudents.css";

/* =========================================
   ADMIN PAYROLL & SALARY
========================================= */

const PAYROLL_STORAGE_KEY =
  "government_school_admin_payroll_v2";

const PAYMENT_METHODS = [
  "Paytm",
  "PhonePe",
  "Google Pay",
  "UPI",
  "Bank Transfer",
  "Cash",
  "Cheque"
];

const DESIGNATIONS = [
  "Principal",
  "Senior Teacher",
  "Teacher",
  "Clerk",
  "Librarian",
  "Lab Assistant",
  "Peon",
  "Other Staff"
];

let payrollData = [];
let payrollSearch = "";
let payrollMonthFilter = "all";
let payrollStatusFilter = "all";
let payrollTypeFilter = "all";
let editingPayrollId = null;


/* =========================================
   DEFAULT DATA
========================================= */

const defaultPayrollData = [
  {
    id: 1,
    employeeId: "TCH001",
    employeeName: "Rajesh Kumar",
    designation: "Senior Teacher",
    department: "Mathematics",
    month: "2026-09",
    basicSalary: 42000,
    allowances: 6500,
    deductions: 2500,
    status: "Paid",
    paymentDate: "2026-09-01",
    paymentMode: "Bank Transfer",
    upiId: "",
    notes: "September salary"
  },

  {
    id: 2,
    employeeId: "TCH002",
    employeeName: "Sunita Sharma",
    designation: "Teacher",
    department: "Science",
    month: "2026-09",
    basicSalary: 38000,
    allowances: 5500,
    deductions: 2200,
    status: "Pending",
    paymentDate: "",
    paymentMode: "",
    upiId: "sunita@upi",
    notes: ""
  },

  {
    id: 3,
    employeeId: "TCH003",
    employeeName: "Amit Singh",
    designation: "Teacher",
    department: "English",
    month: "2026-09",
    basicSalary: 39000,
    allowances: 6000,
    deductions: 2300,
    status: "Pending",
    paymentDate: "",
    paymentMode: "",
    upiId: "amit@upi",
    notes: ""
  },

  {
    id: 4,
    employeeId: "CLK001",
    employeeName: "Priya Verma",
    designation: "Clerk",
    department: "Administration",
    month: "2026-09",
    basicSalary: 30000,
    allowances: 4000,
    deductions: 1800,
    status: "Paid",
    paymentDate: "2026-09-02",
    paymentMode: "Bank Transfer",
    upiId: "",
    notes: ""
  },

  {
    id: 5,
    employeeId: "LIB001",
    employeeName: "Neha Joshi",
    designation: "Librarian",
    department: "Library",
    month: "2026-09",
    basicSalary: 28000,
    allowances: 3500,
    deductions: 1500,
    status: "Pending",
    paymentDate: "",
    paymentMode: "",
    upiId: "neha@upi",
    notes: ""
  },

  {
    id: 6,
    employeeId: "LAB001",
    employeeName: "Vikas Meena",
    designation: "Lab Assistant",
    department: "Science Lab",
    month: "2026-09",
    basicSalary: 25000,
    allowances: 3000,
    deductions: 1200,
    status: "Paid",
    paymentDate: "2026-09-03",
    paymentMode: "UPI",
    upiId: "vikas@upi",
    notes: ""
  }
];


/* =========================================
   STORAGE
========================================= */

function loadPayrollData() {
  try {
    const saved = localStorage.getItem(
      PAYROLL_STORAGE_KEY
    );

    if (!saved) {
      payrollData = [...defaultPayrollData];
      savePayrollData();
      return;
    }

    const parsed = JSON.parse(saved);

    if (Array.isArray(parsed)) {
      payrollData = parsed;
    } else {
      payrollData = [...defaultPayrollData];
      savePayrollData();
    }
  } catch (error) {
    console.error("Payroll storage error:", error);
    payrollData = [...defaultPayrollData];
  }
}


function savePayrollData() {
  try {
    localStorage.setItem(
      PAYROLL_STORAGE_KEY,
      JSON.stringify(payrollData)
    );
  } catch (error) {
    console.error(
      "Unable to save payroll:",
      error
    );
  }
}


/* =========================================
   HELPERS
========================================= */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function getNetSalary(record) {
  const basic =
    Number(record.basicSalary) || 0;

  const allowances =
    Number(record.allowances) || 0;

  const deductions =
    Number(record.deductions) || 0;

  return Math.max(
    0,
    basic + allowances - deductions
  );
}


function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(amount) || 0);
}


function formatMonth(month) {
  if (!month) return "-";

  const date = new Date(`${month}-01`);

  if (Number.isNaN(date.getTime())) {
    return month;
  }

  return date.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric"
  });
}


function formatDate(value) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}


function getToday() {
  const date = new Date();

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}


function getCurrentMonth() {
  const date = new Date();

  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}`;
}


function getInitials(name) {
  return String(name || "E")
    .trim()
    .split(/\s+/)
    .map(item => item.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}


function getUniqueMonths() {
  const months = [
    ...new Set(
      payrollData
        .map(item => item.month)
        .filter(Boolean)
    )
  ];

  const current = getCurrentMonth();

  if (!months.includes(current)) {
    months.push(current);
  }

  return months.sort().reverse();
}


function getUniqueDesignations() {
  return [
    ...new Set(
      payrollData
        .map(item => item.designation)
        .filter(Boolean)
    )
  ].sort();
}


/* =========================================
   FILTER
========================================= */

function getFilteredPayroll() {
  const search =
    payrollSearch.trim().toLowerCase();

  return payrollData.filter(record => {
    const matchesSearch =
      !search ||
      String(record.employeeName)
        .toLowerCase()
        .includes(search) ||
      String(record.employeeId)
        .toLowerCase()
        .includes(search) ||
      String(record.designation)
        .toLowerCase()
        .includes(search) ||
      String(record.department)
        .toLowerCase()
        .includes(search);

    const matchesMonth =
      payrollMonthFilter === "all" ||
      record.month === payrollMonthFilter;

    const matchesStatus =
      payrollStatusFilter === "all" ||
      record.status === payrollStatusFilter;

    const matchesType =
      payrollTypeFilter === "all" ||
      record.designation === payrollTypeFilter;

    return (
      matchesSearch &&
      matchesMonth &&
      matchesStatus &&
      matchesType
    );
  });
}


/* =========================================
   SUMMARY
========================================= */

function getSummary(records) {
  let total = 0;
  let paid = 0;
  let pending = 0;
  let deductions = 0;

  records.forEach(record => {
    const net = getNetSalary(record);

    total += net;
    deductions +=
      Number(record.deductions) || 0;

    if (record.status === "Paid") {
      paid += net;
    }

    if (record.status === "Pending") {
      pending += net;
    }
  });

  return {
    total,
    paid,
    pending,
    deductions,
    staff: records.length
  };
}


/* =========================================
   PAYMENT METHOD SUMMARY
========================================= */

function getPaymentMethodSummary(records) {
  const result = {};

  PAYMENT_METHODS.forEach(method => {
    result[method] = {
      count: 0,
      amount: 0
    };
  });

  records.forEach(record => {
    if (
      record.status !== "Paid" ||
      !record.paymentMode
    ) {
      return;
    }

    const method =
      result[record.paymentMode]
        ? record.paymentMode
        : "UPI";

    result[method].count += 1;
    result[method].amount +=
      getNetSalary(record);
  });

  return result;
}


/* =========================================
   MAIN PAGE
========================================= */

export function AdminPayroll() {
  loadPayrollData();

  return `
    <div class="admin-payroll">

      <div class="payroll-page-header">

        <div>
          <div class="payroll-page-kicker">
            ADMINISTRATION
          </div>

          <h1 class="payroll-page-title">
            Payroll & Salary
          </h1>

          <p class="payroll-page-subtitle">
            Manage staff salaries, payments and payroll records.
          </p>
        </div>

        <div class="payroll-header-actions">

          <button
            type="button"
            class="payroll-secondary-btn"
            data-payroll-action="refresh"
          >
            ↻ Refresh
          </button>

          <button
            type="button"
            class="payroll-primary-btn"
            data-payroll-action="add"
          >
            + Add Salary
          </button>

        </div>

      </div>


      <!-- FILTERS -->

      <div class="payroll-toolbar">

        <div class="payroll-search-box">

          <span class="payroll-search-icon">
            🔍
          </span>

          <input
            type="text"
            id="payrollSearch"
            placeholder="Search employee, ID, designation..."
            value="${escapeHtml(payrollSearch)}"
          />

        </div>


        <select
          id="payrollMonthFilter"
          class="payroll-filter"
        >
          <option value="all">
            All Months
          </option>

          ${getUniqueMonths()
            .map(month => `
              <option
                value="${escapeHtml(month)}"
                ${
                  payrollMonthFilter === month
                    ? "selected"
                    : ""
                }
              >
                ${escapeHtml(formatMonth(month))}
              </option>
            `)
            .join("")}

        </select>


        <select
          id="payrollTypeFilter"
          class="payroll-filter"
        >
          <option value="all">
            All Designations
          </option>

          ${getUniqueDesignations()
            .map(item => `
              <option
                value="${escapeHtml(item)}"
                ${
                  payrollTypeFilter === item
                    ? "selected"
                    : ""
                }
              >
                ${escapeHtml(item)}
              </option>
            `)
            .join("")}

        </select>


        <select
          id="payrollStatusFilter"
          class="payroll-filter"
        >
          <option value="all">
            All Status
          </option>

          <option
            value="Paid"
            ${
              payrollStatusFilter === "Paid"
                ? "selected"
                : ""
            }
          >
            Paid
          </option>

          <option
            value="Pending"
            ${
              payrollStatusFilter === "Pending"
                ? "selected"
                : ""
            }
          >
            Pending
          </option>
        </select>

      </div>


      <div class="payroll-dynamic"></div>

      <div class="payroll-modal-host"></div>

    </div>
  `;
}


/* =========================================
   DASHBOARD RENDER
========================================= */

function renderPayroll(root) {
  const area =
    root.querySelector(".payroll-dynamic");

  if (!area) return;

  const records =
    getFilteredPayroll();

  const summary =
    getSummary(records);

  const methods =
    getPaymentMethodSummary(records);

  const paidPercent =
    summary.total > 0
      ? Math.round(
          (summary.paid /
            summary.total) *
            100
        )
      : 0;

  const pendingPercent =
    summary.total > 0
      ? Math.round(
          (summary.pending /
            summary.total) *
            100
        )
      : 0;


  area.innerHTML = `

    <!-- SUMMARY -->

    <div class="payroll-summary-grid">

      <div class="payroll-summary-card">
        <div class="payroll-summary-icon">
          💰
        </div>

        <div class="payroll-summary-content">
          <span>Total Payroll</span>
          <strong>
            ${formatCurrency(summary.total)}
          </strong>
        </div>
      </div>


      <div class="payroll-summary-card">
        <div class="payroll-summary-icon">
          ✅
        </div>

        <div class="payroll-summary-content">
          <span>Paid Salary</span>
          <strong>
            ${formatCurrency(summary.paid)}
          </strong>
        </div>
      </div>


      <div class="payroll-summary-card">
        <div class="payroll-summary-icon">
          ⏳
        </div>

        <div class="payroll-summary-content">
          <span>Pending Salary</span>
          <strong>
            ${formatCurrency(summary.pending)}
          </strong>
        </div>
      </div>


      <div class="payroll-summary-card">
        <div class="payroll-summary-icon">
          👥
        </div>

        <div class="payroll-summary-content">
          <span>Staff Records</span>
          <strong>
            ${summary.staff}
          </strong>
        </div>
      </div>


      <div class="payroll-summary-card">
        <div class="payroll-summary-icon">
          ➖
        </div>

        <div class="payroll-summary-content">
          <span>Total Deductions</span>
          <strong>
            ${formatCurrency(summary.deductions)}
          </strong>
        </div>
      </div>

    </div>


    <!-- DASHBOARD GRID -->

    <div class="payroll-dashboard-grid">


      <!-- SALARY OVERVIEW -->

      <div class="payroll-dashboard-card">

        <div class="payroll-dashboard-card-header">

          <div>
            <h2>
              Salary Overview
            </h2>

            <p>
              Current filtered payroll
            </p>
          </div>

          <span class="payroll-dashboard-icon">
            📊
          </span>

        </div>


        <div class="payroll-overview-item">

          <div class="payroll-overview-label">
            <span>Paid</span>
            <strong>
              ${paidPercent}%
            </strong>
          </div>

          <div class="payroll-progress">
            <span
              style="width:${paidPercent}%"
            ></span>
          </div>

          <small>
            ${formatCurrency(summary.paid)}
          </small>

        </div>


        <div class="payroll-overview-item">

          <div class="payroll-overview-label">
            <span>Pending</span>
            <strong>
              ${pendingPercent}%
            </strong>
          </div>

          <div class="payroll-progress pending">
            <span
              style="width:${pendingPercent}%"
            ></span>
          </div>

          <small>
            ${formatCurrency(summary.pending)}
          </small>

        </div>

      </div>


      <!-- PAYMENT METHODS -->

      <div class="payroll-dashboard-card">

        <div class="payroll-dashboard-card-header">

          <div>
            <h2>
              Payment Methods
            </h2>

            <p>
              Completed payments
            </p>
          </div>

          <span class="payroll-dashboard-icon">
            💳
          </span>

        </div>


        <div class="payroll-method-list">

          ${PAYMENT_METHODS
            .map(method => {
              const data =
                methods[method];

              return `
                <div class="payroll-method-item">

                  <div class="payroll-method-name">

                    <span>
                      ${getPaymentIcon(method)}
                    </span>

                    <strong>
                      ${escapeHtml(method)}
                    </strong>

                  </div>

                  <div>
                    <strong>
                      ${data.count}
                    </strong>

                    <small>
                      ${formatCurrency(data.amount)}
                    </small>
                  </div>

                </div>
              `;
            })
            .join("")}

        </div>

      </div>

    </div>


    <!-- PENDING SALARY -->

    <div class="payroll-dashboard-card payroll-pending-card">

      <div class="payroll-dashboard-card-header">

        <div>
          <h2>
            Pending Salary
          </h2>

          <p>
            Salaries waiting for admin payment
          </p>
        </div>

        <span class="payroll-dashboard-icon">
          ⏳
        </span>

      </div>


      ${renderPendingSalaries(records)}

    </div>


    <!-- ALL RECORDS -->

    <div class="payroll-table-card">

      <div class="payroll-table-header">

        <div>
          <h2>
            Salary Records
          </h2>

          <p>
            ${records.length}
            record${records.length === 1 ? "" : "s"}
            found
          </p>
        </div>

      </div>


      ${
        records.length === 0
          ? `
            <div class="payroll-empty-state">

              <div class="payroll-empty-icon">
                💳
              </div>

              <h3>
                No salary records found
              </h3>

              <p>
                Try changing filters or add a salary record.
              </p>

              <button
                type="button"
                class="payroll-primary-btn"
                data-payroll-action="add"
              >
                + Add Salary
              </button>

            </div>
          `
          : `
            <div class="payroll-table-wrapper">

              <table class="payroll-table">

                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Designation</th>
                    <th>Month</th>
                    <th>Basic</th>
                    <th>Allowance</th>
                    <th>Deduction</th>
                    <th>Net Salary</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  ${records
                    .map(renderPayrollRow)
                    .join("")}

                </tbody>

              </table>

            </div>
          `
      }

    </div>
  `;
}


/* =========================================
   PAYMENT ICON
========================================= */

function getPaymentIcon(method) {
  const icons = {
    "Paytm": "💙",
    "PhonePe": "🟣",
    "Google Pay": "🔵",
    "UPI": "📱",
    "Bank Transfer": "🏦",
    "Cash": "💵",
    "Cheque": "🧾"
  };

  return icons[method] || "💳";
}


/* =========================================
   PENDING SALARIES
========================================= */

function renderPendingSalaries(records) {
  const pending =
    records.filter(
      item => item.status === "Pending"
    );

  if (!pending.length) {
    return `
      <div class="payroll-no-pending">
        <span>✓</span>
        <div>
          <strong>
            All salaries are paid
          </strong>
          <p>
            There are no pending salary records.
          </p>
        </div>
      </div>
    `;
  }

  return `
    <div class="payroll-pending-list">

      ${pending
        .map(record => `
          <div class="payroll-pending-item">

            <div class="payroll-pending-employee">

              <div class="payroll-employee-avatar">
                ${escapeHtml(
                  getInitials(
                    record.employeeName
                  )
                )}
              </div>

              <div>
                <strong>
                  ${escapeHtml(
                    record.employeeName
                  )}
                </strong>

                <span>
                  ${escapeHtml(
                    record.employeeId
                  )}
                  •
                  ${escapeHtml(
                    record.designation
                  )}
                </span>
              </div>

            </div>


            <div class="payroll-pending-amount">

              <span>
                Net Salary
              </span>

              <strong>
                ${formatCurrency(
                  getNetSalary(record)
                )}
              </strong>

            </div>


            <button
              type="button"
              class="payroll-transfer-btn"
              data-payroll-action="transfer"
              data-id="${record.id}"
            >
              💳 Pay Now
            </button>

          </div>
        `)
        .join("")}

    </div>
  `;
}


/* =========================================
   TABLE ROW
========================================= */

function renderPayrollRow(record) {
  const net =
    getNetSalary(record);

  return `
    <tr>

      <td>

        <div class="payroll-employee">

          <div class="payroll-employee-avatar">
            ${escapeHtml(
              getInitials(
                record.employeeName
              )
            )}
          </div>

          <div>

            <strong>
              ${escapeHtml(
                record.employeeName
              )}
            </strong>

            <span>
              ${escapeHtml(
                record.employeeId
              )}
            </span>

          </div>

        </div>

      </td>


      <td>
        ${escapeHtml(
          record.designation
        )}
      </td>


      <td>
        ${escapeHtml(
          formatMonth(record.month)
        )}
      </td>


      <td>
        ${formatCurrency(
          record.basicSalary
        )}
      </td>


      <td>
        <span class="payroll-allowance">
          +${formatCurrency(
            record.allowances
          )}
        </span>
      </td>


      <td>
        <span class="payroll-deduction">
          -${formatCurrency(
            record.deductions
          )}
        </span>
      </td>


      <td>
        <strong class="payroll-net">
          ${formatCurrency(net)}
        </strong>
      </td>


      <td>

        <span
          class="payroll-status ${
            record.status === "Paid"
              ? "paid"
              : "pending"
          }"
        >
          ${
            record.status === "Paid"
              ? "✓ Paid"
              : "⏳ Pending"
          }
        </span>

      </td>


      <td>

        <div class="payroll-action-buttons">

          <button
            type="button"
            class="payroll-icon-btn"
            title="View"
            data-payroll-action="view"
            data-id="${record.id}"
          >
            👁️
          </button>


          <button
            type="button"
            class="payroll-icon-btn"
            title="Edit"
            data-payroll-action="edit"
            data-id="${record.id}"
          >
            ✏️
          </button>


          ${
            record.status !== "Paid"
              ? `
                <button
                  type="button"
                  class="payroll-icon-btn payroll-pay-btn"
                  title="Transfer Salary"
                  data-payroll-action="transfer"
                  data-id="${record.id}"
                >
                  💳
                </button>
              `
              : ""
          }


          <button
            type="button"
            class="payroll-icon-btn payroll-delete-btn"
            title="Delete"
            data-payroll-action="delete"
            data-id="${record.id}"
          >
            🗑️
          </button>

        </div>

      </td>

    </tr>
  `;
}


/* =========================================
   ADD / EDIT SALARY
========================================= */

function openSalaryModal(root, record = null) {
  editingPayrollId =
    record ? record.id : null;

  const host =
    root.querySelector(
      ".payroll-modal-host"
    );

  if (!host) return;

  const isEdit =
    Boolean(record);

  const currentMonth =
    record?.month ||
    getCurrentMonth();

  host.innerHTML = `

    <div class="payroll-modal-overlay">

      <div
        class="payroll-modal"
        role="dialog"
        aria-modal="true"
      >

        <div class="payroll-modal-header">

          <div>

            <span class="payroll-modal-kicker">
              ${isEdit ? "EDIT RECORD" : "NEW RECORD"}
            </span>

            <h2>
              ${isEdit ? "Edit Salary" : "Add Salary"}
            </h2>

          </div>

          <button
            type="button"
            class="payroll-modal-close"
            data-payroll-action="close-modal"
          >
            ×
          </button>

        </div>


        <form
          id="payrollForm"
          class="payroll-form"
        >

          <div class="payroll-form-grid">

            <div class="payroll-form-group">

              <label>
                Employee ID
              </label>

              <input
                type="text"
                name="employeeId"
                placeholder="e.g. TCH001"
                value="${escapeHtml(
                  record?.employeeId || ""
                )}"
                required
              />

            </div>


            <div class="payroll-form-group">

              <label>
                Employee Name
              </label>

              <input
                type="text"
                name="employeeName"
                placeholder="Enter employee name"
                value="${escapeHtml(
                  record?.employeeName || ""
                )}"
                required
              />

            </div>


            <div class="payroll-form-group">

              <label>
                Designation
              </label>

              <select
                name="designation"
                required
              >

                <option value="">
                  Select designation
                </option>

                ${DESIGNATIONS
                  .map(item => `
                    <option
                      value="${escapeHtml(item)}"
                      ${
                        record?.designation === item
                          ? "selected"
                          : ""
                      }
                    >
                      ${escapeHtml(item)}
                    </option>
                  `)
                  .join("")}

              </select>

            </div>


            <div class="payroll-form-group">

              <label>
                Department
              </label>

              <input
                type="text"
                name="department"
                placeholder="e.g. Mathematics"
                value="${escapeHtml(
                  record?.department || ""
                )}"
              />

            </div>


            <div class="payroll-form-group">

              <label>
                Salary Month
              </label>

              <input
                type="month"
                name="month"
                value="${escapeHtml(
                  currentMonth
                )}"
                required
              />

            </div>


            <div class="payroll-form-group">

              <label>
                Status
              </label>

              <select
                name="status"
                required
              >

                <option
                  value="Pending"
                  ${
                    !record ||
                    record.status === "Pending"
                      ? "selected"
                      : ""
                  }
                >
                  Pending
                </option>

                <option
                  value="Paid"
                  ${
                    record?.status === "Paid"
                      ? "selected"
                      : ""
                  }
                >
                  Paid
                </option>

              </select>

            </div>


            <div class="payroll-form-group">

              <label>
                Basic Salary (₹)
              </label>

              <input
                type="number"
                name="basicSalary"
                min="0"
                step="1"
                value="${escapeHtml(
                  record?.basicSalary ?? ""
                )}"
                required
              />

            </div>


            <div class="payroll-form-group">

              <label>
                Allowances (₹)
              </label>

              <input
                type="number"
                name="allowances"
                min="0"
                step="1"
                value="${escapeHtml(
                  record?.allowances ?? 0
                )}"
              />

            </div>


            <div class="payroll-form-group">

              <label>
                Deductions (₹)
              </label>

              <input
                type="number"
                name="deductions"
                min="0"
                step="1"
                value="${escapeHtml(
                  record?.deductions ?? 0
                )}"
              />

            </div>


            <div class="payroll-form-group">

              <label>
                Payment Mode
              </label>

              <select
                name="paymentMode"
              >

                <option value="">
                  Select payment mode
                </option>

                ${PAYMENT_METHODS
                  .map(method => `
                    <option
                      value="${escapeHtml(method)}"
                      ${
                        record?.paymentMode === method
                          ? "selected"
                          : ""
                      }
                    >
                      ${getPaymentIcon(method)}
                      ${escapeHtml(method)}
                    </option>
                  `)
                  .join("")}

              </select>

            </div>


            <div class="payroll-form-group">

              <label>
                Employee UPI ID
              </label>

              <input
                type="text"
                name="upiId"
                placeholder="example@upi"
                value="${escapeHtml(
                  record?.upiId || ""
                )}"
              />

              <small>
                Required for UPI payment.
              </small>

            </div>


            <div class="payroll-form-group">

              <label>
                Payment Date
              </label>

              <input
                type="date"
                name="paymentDate"
                value="${escapeHtml(
                  record?.paymentDate || ""
                )}"
              />

            </div>


            <div class="payroll-form-group payroll-full-width">

              <label>
                Notes
              </label>

              <textarea
                name="notes"
                rows="3"
                placeholder="Optional notes..."
              >${escapeHtml(
                record?.notes || ""
              )}</textarea>

            </div>

          </div>


          <div class="payroll-live-total">

            <div>
              <span>
                Net Salary
              </span>

              <small>
                Basic + Allowances − Deductions
              </small>
            </div>

            <strong id="payrollLiveNet">
              ${formatCurrency(
                record
                  ? getNetSalary(record)
                  : 0
              )}
            </strong>

          </div>


          <div class="payroll-form-actions">

            <button
              type="button"
              class="payroll-secondary-btn"
              data-payroll-action="close-modal"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="payroll-primary-btn"
            >
              ${isEdit
                ? "Save Changes"
                : "Add Salary"}
            </button>

          </div>

        </form>

      </div>

    </div>
  `;

  setupLiveSalaryCalculation(root);
}


/* =========================================
   LIVE CALCULATION
========================================= */

function setupLiveSalaryCalculation(root) {
  const form =
    root.querySelector(
      "#payrollForm"
    );

  if (!form) return;

  const basic =
    form.querySelector(
      '[name="basicSalary"]'
    );

  const allowance =
    form.querySelector(
      '[name="allowances"]'
    );

  const deduction =
    form.querySelector(
      '[name="deductions"]'
    );

  const output =
    form.querySelector(
      "#payrollLiveNet"
    );

  const calculate = () => {
    const net = Math.max(
      0,
      (Number(basic?.value) || 0) +
      (Number(allowance?.value) || 0) -
      (Number(deduction?.value) || 0)
    );

    if (output) {
      output.textContent =
        formatCurrency(net);
    }
  };

  [basic, allowance, deduction]
    .forEach(input => {
      if (input) {
        input.addEventListener(
          "input",
          calculate
        );
      }
    });
}


/* =========================================
   VIEW SALARY
========================================= */

function openViewModal(root, record) {
  const host =
    root.querySelector(
      ".payroll-modal-host"
    );

  if (!host) return;

  host.innerHTML = `

    <div class="payroll-modal-overlay">

      <div
        class="payroll-modal payroll-view-modal"
        role="dialog"
        aria-modal="true"
      >

        <div class="payroll-modal-header">

          <div>

            <span class="payroll-modal-kicker">
              SALARY DETAILS
            </span>

            <h2>
              ${escapeHtml(
                record.employeeName
              )}
            </h2>

          </div>

          <button
            type="button"
            class="payroll-modal-close"
            data-payroll-action="close-modal"
          >
            ×
          </button>

        </div>


        <div class="payroll-view-body">

          <div class="payroll-view-status-row">

            <span>
              ${escapeHtml(
                record.employeeId
              )}
            </span>

            <span
              class="payroll-status ${
                record.status === "Paid"
                  ? "paid"
                  : "pending"
              }"
            >
              ${
                record.status === "Paid"
                  ? "✓ Paid"
                  : "⏳ Pending"
              }
            </span>

          </div>


          <div class="payroll-details-grid">

            ${renderDetail(
              "Designation",
              record.designation
            )}

            ${renderDetail(
              "Department",
              record.department || "-"
            )}

            ${renderDetail(
              "Salary Month",
              formatMonth(record.month)
            )}

            ${renderDetail(
              "Basic Salary",
              formatCurrency(
                record.basicSalary
              )
            )}

            ${renderDetail(
              "Allowances",
              `+${formatCurrency(
                record.allowances
              )}`
            )}

            ${renderDetail(
              "Deductions",
              `-${formatCurrency(
                record.deductions
              )}`
            )}

            ${renderDetail(
              "Net Salary",
              formatCurrency(
                getNetSalary(record)
              ),
              true
            )}

            ${renderDetail(
              "Payment Date",
              formatDate(
                record.paymentDate
              )
            )}

            ${renderDetail(
              "Payment Mode",
              record.paymentMode || "-"
            )}

            ${renderDetail(
              "UPI ID",
              record.upiId || "-"
            )}

          </div>


          ${
            record.notes
              ? `
                <div class="payroll-notes-box">

                  <span>
                    Notes
                  </span>

                  <p>
                    ${escapeHtml(
                      record.notes
                    )}
                  </p>

                </div>
              `
              : ""
          }

        </div>


        <div class="payroll-form-actions">

          <button
            type="button"
            class="payroll-secondary-btn"
            data-payroll-action="close-modal"
          >
            Close
          </button>

          <button
            type="button"
            class="payroll-primary-btn"
            data-payroll-action="edit"
            data-id="${record.id}"
          >
            ✏️ Edit
          </button>

          ${
            record.status !== "Paid"
              ? `
                <button
                  type="button"
                  class="payroll-transfer-btn"
                  data-payroll-action="transfer"
                  data-id="${record.id}"
                >
                  💳 Pay Salary
                </button>
              `
              : ""
          }

        </div>

      </div>

    </div>
  `;
}


function renderDetail(
  label,
  value,
  highlight = false
) {
  return `
    <div
      class="payroll-detail-item ${
        highlight
          ? "payroll-detail-highlight"
          : ""
      }"
    >
      <span>
        ${escapeHtml(label)}
      </span>

      <strong>
        ${escapeHtml(value)}
      </strong>
    </div>
  `;
}


/* =========================================
   TRANSFER MODAL
========================================= */

function openTransferModal(root, record) {
  const host =
    root.querySelector(
      ".payroll-modal-host"
    );

  if (!host) return;

  const amount =
    getNetSalary(record);

  host.innerHTML = `

    <div class="payroll-modal-overlay">

      <div
        class="payroll-modal payroll-transfer-modal"
        role="dialog"
        aria-modal="true"
      >

        <div class="payroll-modal-header">

          <div>

            <span class="payroll-modal-kicker">
              ADMIN PAYMENT
            </span>

            <h2>
              Transfer Salary
            </h2>

          </div>

          <button
            type="button"
            class="payroll-modal-close"
            data-payroll-action="close-modal"
          >
            ×
          </button>

        </div>


        <div class="payroll-payment-summary">

          <div>
            <span>
              Employee
            </span>

            <strong>
              ${escapeHtml(
                record.employeeName
              )}
            </strong>
          </div>

          <div>
            <span>
              Salary Month
            </span>

            <strong>
              ${escapeHtml(
                formatMonth(record.month)
              )}
            </strong>
          </div>

          <div class="payroll-payment-amount">

            <span>
              Net Salary
            </span>

            <strong>
              ${formatCurrency(amount)}
            </strong>

          </div>

        </div>


        <form
          id="payrollTransferForm"
          class="payroll-form"
        >

          <div class="payroll-form-group">

            <label>
              Employee UPI ID
            </label>

            <input
              type="text"
              name="transferUpiId"
              placeholder="example@upi"
              value="${escapeHtml(
                record.upiId || ""
              )}"
              required
            />

            <small>
              Enter the employee's verified UPI ID.
            </small>

          </div>


          <div class="payroll-form-group">

            <label>
              Select Payment App
            </label>

            <div class="payroll-payment-options">

              ${[
                "Paytm",
                "PhonePe",
                "Google Pay",
                "UPI"
              ]
                .map(
                  (method, index) => `
                    <label
                      class="payroll-payment-option"
                    >

                      <input
                        type="radio"
                        name="transferMethod"
                        value="${method}"
                        ${
                          (
                            record.paymentMode ===
                              method ||
                            (!record.paymentMode &&
                              index === 0)
                          )
                            ? "checked"
                            : ""
                        }
                      />

                      <span>
                        ${getPaymentIcon(
                          method
                        )}
                      </span>

                      <strong>
                        ${method}
                      </strong>

                    </label>
                  `
                )
                .join("")}

            </div>

          </div>


          <div class="payroll-transfer-warning">

            <span>
              ⚠️
            </span>

            <div>

              <strong>
                Payment verification
              </strong>

              <p>
                Opening a UPI app does not automatically
                confirm payment. Mark the salary as Paid
                only after the payment is successfully verified.
              </p>

            </div>

          </div>


          <div class="payroll-form-actions">

            <button
              type="button"
              class="payroll-secondary-btn"
              data-payroll-action="close-modal"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="payroll-transfer-btn"
            >
              💳 Pay ${formatCurrency(amount)}
            </button>

          </div>

        </form>

      </div>

    </div>
  `;
}


/* =========================================
   UPI PAYMENT INTENT
========================================= */

function startUPIPayment(
  root,
  record,
  upiId,
  method
) {
  const amount =
    getNetSalary(record);

  const transactionNote =
    `Salary ${formatMonth(record.month)} - ${record.employeeName}`;

  const upiUrl =
    `upi://pay?pa=${encodeURIComponent(
      upiId
    )}&pn=${encodeURIComponent(
      record.employeeName
    )}&am=${encodeURIComponent(
      amount.toFixed(2)
    )}&cu=INR&tn=${encodeURIComponent(
      transactionNote
    )}`;

  /*
    UPI intent opens the available UPI app.
    Actual payment confirmation requires
    a payment gateway/backend verification.
  */

  try {
    window.location.href = upiUrl;

    setTimeout(() => {
      const confirmed =
        window.confirm(
          `Did you successfully complete the ₹${amount} payment to ${record.employeeName} using ${method}?`
        );

      if (!confirmed) {
        return;
      }

      markSalaryPaid(
        root,
        record.id,
        method,
        upiId
      );
    }, 1800);

  } catch (error) {
    console.error(
      "UPI payment error:",
      error
    );

    alert(
      "Unable to open UPI payment app."
    );
  }
}


/* =========================================
   MARK PAID
========================================= */

function markSalaryPaid(
  root,
  id,
  paymentMode,
  upiId
) {
  const record =
    payrollData.find(
      item =>
        Number(item.id) ===
        Number(id)
    );

  if (!record) {
    alert(
      "Salary record not found."
    );
    return;
  }

  record.status = "Paid";
  record.paymentDate = getToday();
  record.paymentMode =
    paymentMode || "UPI";
  record.upiId =
    upiId || record.upiId || "";

  savePayrollData();

  closeModal(root);

  renderPayroll(root);

  alert(
    `Salary marked as Paid.\n\nEmployee: ${record.employeeName}\nAmount: ${formatCurrency(
      getNetSalary(record)
    )}`
  );
}


/* =========================================
   TRANSFER SALARY
========================================= */

function transferSalary(root, id) {
  const record =
    payrollData.find(
      item =>
        Number(item.id) ===
        Number(id)
    );

  if (!record) {
    alert(
      "Salary record not found."
    );
    return;
  }

  if (record.status === "Paid") {
    alert(
      "This salary has already been paid."
    );
    return;
  }

  openTransferModal(
    root,
    record
  );
}


/* =========================================
   SAVE SALARY
========================================= */

function saveSalaryForm(root, form) {
  const data =
    new FormData(form);

  const employeeId =
    String(
      data.get("employeeId") || ""
    ).trim();

  const employeeName =
    String(
      data.get("employeeName") || ""
    ).trim();

  const designation =
    String(
      data.get("designation") || ""
    ).trim();

  const department =
    String(
      data.get("department") || ""
    ).trim();

  const month =
    String(
      data.get("month") || ""
    ).trim();

  const basicSalary =
    Number(
      data.get("basicSalary")
    ) || 0;

  const allowances =
    Number(
      data.get("allowances")
    ) || 0;

  const deductions =
    Number(
      data.get("deductions")
    ) || 0;

  const status =
    String(
      data.get("status") ||
      "Pending"
    );

  const paymentMode =
    String(
      data.get("paymentMode") ||
      ""
    );

  const paymentDate =
    String(
      data.get("paymentDate") ||
      ""
    );

  const upiId =
    String(
      data.get("upiId") ||
      ""
    ).trim();

  const notes =
    String(
      data.get("notes") ||
      ""
    ).trim();


  if (!employeeId) {
    alert(
      "Please enter Employee ID."
    );
    return;
  }

  if (!employeeName) {
    alert(
      "Please enter Employee Name."
    );
    return;
  }

  if (!designation) {
    alert(
      "Please select Designation."
    );
    return;
  }

  if (!month) {
    alert(
      "Please select Salary Month."
    );
    return;
  }

  if (basicSalary <= 0) {
    alert(
      "Basic Salary must be greater than 0."
    );
    return;
  }

  if (
    allowances < 0 ||
    deductions < 0
  ) {
    alert(
      "Allowances and deductions cannot be negative."
    );
    return;
  }


  const existing =
    editingPayrollId !== null
      ? payrollData.find(
          item =>
            Number(item.id) ===
            Number(editingPayrollId)
        )
      : null;


  const updatedRecord = {

    id:
      existing?.id ??
      Date.now(),

    employeeId,

    employeeName,

    designation,

    department,

    month,

    basicSalary,

    allowances,

    deductions,

    status,

    paymentDate:
      status === "Paid"
        ? paymentDate || getToday()
        : "",

    paymentMode:
      status === "Paid"
        ? paymentMode ||
          "Bank Transfer"
        : "",

    upiId,

    notes
  };


  if (existing) {

    const index =
      payrollData.findIndex(
        item =>
          Number(item.id) ===
          Number(editingPayrollId)
      );

    if (index !== -1) {
      payrollData[index] =
        updatedRecord;
    }

  } else {

    payrollData.unshift(
      updatedRecord
    );

  }


  savePayrollData();

  closeModal(root);

  editingPayrollId = null;

  renderPayroll(root);
}


/* =========================================
   DELETE
========================================= */

function deletePayroll(root, id) {
  const record =
    payrollData.find(
      item =>
        Number(item.id) ===
        Number(id)
    );

  if (!record) {
    alert(
      "Salary record not found."
    );
    return;
  }

  const confirmed =
    window.confirm(
      `Delete salary record for ${record.employeeName}?`
    );

  if (!confirmed) return;

  payrollData =
    payrollData.filter(
      item =>
        Number(item.id) !==
        Number(id)
    );

  savePayrollData();

  renderPayroll(root);
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal(root) {
  const host =
    root.querySelector(
      ".payroll-modal-host"
    );

  if (host) {
    host.innerHTML = "";
  }

  editingPayrollId = null;
}


/* =========================================
   SETUP
========================================= */

export function setupAdminPayroll() {
  const root =
    document.querySelector(
      ".admin-payroll"
    );

  if (!root) {
    console.error(
      "AdminPayroll root element not found."
    );
    return;
  }

  loadPayrollData();

  if (
    root.dataset.payrollInitialized ===
    "true"
  ) {
    renderPayroll(root);
    return;
  }

  root.dataset.payrollInitialized =
    "true";

  renderPayroll(root);


  /* =====================================
     CLICK EVENTS
  ===================================== */

  root.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-payroll-action]"
        );

      if (!button) return;

      const action =
        button.dataset.payrollAction;

      const id =
        button.dataset.id;


      if (action === "add") {
        openSalaryModal(root);
        return;
      }


      if (action === "view") {

        const record =
          payrollData.find(
            item =>
              Number(item.id) ===
              Number(id)
          );

        if (record) {
          openViewModal(
            root,
            record
          );
        }

        return;
      }


      if (action === "edit") {

        const record =
          payrollData.find(
            item =>
              Number(item.id) ===
              Number(id)
          );

        if (record) {
          openSalaryModal(
            root,
            record
          );
        }

        return;
      }


      if (action === "transfer") {
        transferSalary(
          root,
          id
        );
        return;
      }


      if (action === "delete") {
        deletePayroll(
          root,
          id
        );
        return;
      }


      if (
        action ===
        "close-modal"
      ) {
        closeModal(root);
        return;
      }


      if (
        action === "refresh"
      ) {
        loadPayrollData();
        renderPayroll(root);
        return;
      }

    }
  );


  /* =====================================
     SALARY FORM
  ===================================== */

  root.addEventListener(
    "submit",
    event => {

      if (
        event.target.id ===
        "payrollForm"
      ) {

        event.preventDefault();

        saveSalaryForm(
          root,
          event.target
        );

        return;
      }


      if (
        event.target.id ===
        "payrollTransferForm"
      ) {

        event.preventDefault();

        const form =
          event.target;

        const data =
          new FormData(form);

        const upiId =
          String(
            data.get(
              "transferUpiId"
            ) || ""
          ).trim();

        const method =
          String(
            data.get(
              "transferMethod"
            ) || "UPI"
          );

        if (!upiId) {
          alert(
            "Please enter employee UPI ID."
          );
          return;
        }

        if (
          !upiId.includes("@")
        ) {
          alert(
            "Please enter a valid UPI ID, for example employee@upi."
          );
          return;
        }

        const recordId =
          findTransferRecordId(
            root
          );

        if (!recordId) {
          alert(
            "Salary record not found."
          );
          return;
        }

        const record =
          payrollData.find(
            item =>
              Number(item.id) ===
              Number(recordId)
          );

        if (!record) {
          alert(
            "Salary record not found."
          );
          return;
        }

        startUPIPayment(
          root,
          record,
          upiId,
          method
        );
      }

    }
  );


  /* =====================================
     SEARCH
  ===================================== */

  const search =
    root.querySelector(
      "#payrollSearch"
    );

  if (search) {
    search.addEventListener(
      "input",
      event => {

        payrollSearch =
          event.target.value;

        renderPayroll(root);

      }
    );
  }


  /* =====================================
     MONTH
  ===================================== */

  const month =
    root.querySelector(
      "#payrollMonthFilter"
    );

  if (month) {
    month.addEventListener(
      "change",
      event => {

        payrollMonthFilter =
          event.target.value;

        renderPayroll(root);

      }
    );
  }


  /* =====================================
     DESIGNATION
  ===================================== */

  const type =
    root.querySelector(
      "#payrollTypeFilter"
    );

  if (type) {
    type.addEventListener(
      "change",
      event => {

        payrollTypeFilter =
          event.target.value;

        renderPayroll(root);

      }
    );
  }


  /* =====================================
     STATUS
  ===================================== */

  const status =
    root.querySelector(
      "#payrollStatusFilter"
    );

  if (status) {
    status.addEventListener(
      "change",
      event => {

        payrollStatusFilter =
          event.target.value;

        renderPayroll(root);

      }
    );
  }


  /* =====================================
     OVERLAY CLOSE
  ===================================== */

  root.addEventListener(
    "click",
    event => {

      if (
        event.target.classList.contains(
          "payroll-modal-overlay"
        )
      ) {
        closeModal(root);
      }

    }
  );


  /* =====================================
     ESC
  ===================================== */

  root.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Escape"
      ) {
        closeModal(root);
      }

    }
  );
}


/* =========================================
   FIND ACTIVE TRANSFER RECORD
========================================= */

function findTransferRecordId(root) {
  const form =
    root.querySelector(
      "#payrollTransferForm"
    );

  if (!form) return null;

  /*
    The transfer form belongs to the currently
    opened pending salary. We identify it by
    matching the displayed employee name.
  */

  const nameElement =
    root.querySelector(
      ".payroll-payment-summary div:first-child strong"
    );

  const employeeName =
    nameElement?.textContent?.trim();

  if (!employeeName) {
    return null;
  }

  const record =
    payrollData.find(
      item =>
        String(
          item.employeeName
        ).trim() === employeeName
    );

  return record?.id ?? null;
}


/* =========================================
   AUTO INITIALIZATION
========================================= */

if (
  typeof document !==
  "undefined"
) {
  setTimeout(() => {

    const root =
      document.querySelector(
        ".admin-payroll"
      );

    if (
      root &&
      root.dataset
        .payrollInitialized !==
        "true"
    ) {
      setupAdminPayroll();
    }

  }, 0);
}