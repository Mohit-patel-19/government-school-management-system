/* =========================================
   ADMIN FEES MANAGEMENT
========================================= */

const FEES_STORAGE_KEY = "government_school_fees_data";

/* =========================================
   DUMMY FEES DATA
========================================= */

const defaultFeesData = [
  {
    id: 1,
    studentName: "Aarav Sharma",
    admissionNo: "GS001",
    className: "10",
    section: "A",
    feeType: "Annual Fee",
    totalFee: 12000,
    paidAmount: 12000,
    dueDate: "2026-07-15",
    paymentDate: "2026-07-10",
    paymentMode: "UPI",
    receiptNo: "REC001",
    remarks: "Full payment received"
  },
  {
    id: 2,
    studentName: "Priya Verma",
    admissionNo: "GS002",
    className: "10",
    section: "A",
    feeType: "Annual Fee",
    totalFee: 12000,
    paidAmount: 7000,
    dueDate: "2026-08-15",
    paymentDate: "2026-08-05",
    paymentMode: "Cash",
    receiptNo: "REC002",
    remarks: "First installment"
  },
  {
    id: 3,
    studentName: "Rahul Meena",
    admissionNo: "GS003",
    className: "9",
    section: "B",
    feeType: "Annual Fee",
    totalFee: 10000,
    paidAmount: 4000,
    dueDate: "2026-08-10",
    paymentDate: "2026-07-28",
    paymentMode: "Bank",
    receiptNo: "REC003",
    remarks: "Partial payment"
  },
  {
    id: 4,
    studentName: "Sneha Patel",
    admissionNo: "GS004",
    className: "8",
    section: "A",
    feeType: "Annual Fee",
    totalFee: 9000,
    paidAmount: 0,
    dueDate: "2026-08-20",
    paymentDate: "",
    paymentMode: "",
    receiptNo: "",
    remarks: ""
  },
  {
    id: 5,
    studentName: "Vikas Joshi",
    admissionNo: "GS005",
    className: "7",
    section: "B",
    feeType: "Annual Fee",
    totalFee: 8000,
    paidAmount: 8000,
    dueDate: "2026-07-20",
    paymentDate: "2026-07-18",
    paymentMode: "UPI",
    receiptNo: "REC004",
    remarks: "Full payment received"
  },
  {
    id: 6,
    studentName: "Neha Kumari",
    admissionNo: "GS006",
    className: "6",
    section: "A",
    feeType: "Annual Fee",
    totalFee: 7500,
    paidAmount: 3000,
    dueDate: "2026-08-01",
    paymentDate: "2026-07-25",
    paymentMode: "Cash",
    receiptNo: "REC005",
    remarks: "First payment"
  }
];

/* =========================================
   STATE
========================================= */

let feesData = [];
let feeSearchText = "";
let feeClassFilter = "all";
let feeStatusFilter = "all";
let feeTypeFilter = "all";
let editingFeeId = null;

/* =========================================
   LOAD / SAVE DATA
========================================= */

function loadFeesData() {
  try {
    const savedData = localStorage.getItem(FEES_STORAGE_KEY);

    if (!savedData) {
      feesData = [...defaultFeesData];
      saveFeesData();
      return;
    }

    const parsedData = JSON.parse(savedData);

    if (Array.isArray(parsedData)) {
      feesData = parsedData;
    } else {
      feesData = [...defaultFeesData];
      saveFeesData();
    }
  } catch (error) {
    console.error("Fees data loading error:", error);
    feesData = [...defaultFeesData];
  }
}

function saveFeesData() {
  try {
    localStorage.setItem(
      FEES_STORAGE_KEY,
      JSON.stringify(feesData)
    );
  } catch (error) {
    console.error("Fees data saving error:", error);
  }
}

/* =========================================
   HELPER FUNCTIONS
========================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatCurrency(value) {
  const amount = Number(value) || 0;

  return `₹${amount.toLocaleString("en-IN")}`;
}

function getPendingAmount(fee) {
  const total = Number(fee.totalFee) || 0;
  const paid = Number(fee.paidAmount) || 0;

  return Math.max(total - paid, 0);
}

function getFeeStatus(fee) {
  const total = Number(fee.totalFee) || 0;
  const paid = Number(fee.paidAmount) || 0;

  if (paid >= total && total > 0) {
    return "Paid";
  }

  if (paid > 0 && paid < total) {
    if (
      fee.dueDate &&
      new Date(fee.dueDate) < new Date()
    ) {
      return "Overdue";
    }

    return "Partial";
  }

  if (
    fee.dueDate &&
    new Date(fee.dueDate) < new Date()
  ) {
    return "Overdue";
  }

  return "Pending";
}

function formatDate(dateValue) {
  if (!dateValue) {
    return "-";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function generateReceiptNumber() {
  const numbers = feesData
    .map((fee) => {
      const match = String(fee.receiptNo || "").match(
        /REC(\d+)/
      );

      return match ? Number(match[1]) : 0;
    })
    .filter((number) => number > 0);

  const nextNumber =
    numbers.length > 0
      ? Math.max(...numbers) + 1
      : 1;

  return `REC${String(nextNumber).padStart(3, "0")}`;
}

/* =========================================
   FILTER DATA
========================================= */

function getFilteredFees() {
  return feesData.filter((fee) => {
    const search = feeSearchText
      .trim()
      .toLowerCase();

    const matchesSearch =
      !search ||
      String(fee.studentName || "")
        .toLowerCase()
        .includes(search) ||
      String(fee.admissionNo || "")
        .toLowerCase()
        .includes(search);

    const matchesClass =
      feeClassFilter === "all" ||
      String(fee.className) === feeClassFilter;

    const matchesType =
      feeTypeFilter === "all" ||
      String(fee.feeType) === feeTypeFilter;

    const matchesStatus =
      feeStatusFilter === "all" ||
      getFeeStatus(fee) === feeStatusFilter;

    return (
      matchesSearch &&
      matchesClass &&
      matchesType &&
      matchesStatus
    );
  });
}

/* =========================================
   SUMMARY
========================================= */

function getFeesSummary() {
  const totalFee = feesData.reduce(
    (sum, fee) =>
      sum + (Number(fee.totalFee) || 0),
    0
  );

  const collectedFee = feesData.reduce(
    (sum, fee) =>
      sum + (Number(fee.paidAmount) || 0),
    0
  );

  const pendingFee = feesData.reduce(
    (sum, fee) =>
      sum + getPendingAmount(fee),
    0
  );

  const overdueFee = feesData
    .filter(
      (fee) => getFeeStatus(fee) === "Overdue"
    )
    .reduce(
      (sum, fee) =>
        sum + getPendingAmount(fee),
      0
    );

  const paidStudents = feesData.filter(
    (fee) => getFeeStatus(fee) === "Paid"
  ).length;

  const pendingStudents = feesData.filter(
    (fee) =>
      getFeeStatus(fee) === "Pending" ||
      getFeeStatus(fee) === "Partial" ||
      getFeeStatus(fee) === "Overdue"
  ).length;

  return {
    totalFee,
    collectedFee,
    pendingFee,
    overdueFee,
    paidStudents,
    pendingStudents
  };
}

/* =========================================
   STATUS HTML
========================================= */

function getStatusHTML(status) {
  const statusClass = status
    .toLowerCase()
    .replace(/\s+/g, "-");

  return `
    <span class="fee-status fee-status-${escapeHTML(
      statusClass
    )}">
      ${escapeHTML(status)}
    </span>
  `;
}

/* =========================================
   FEES PAGE
========================================= */

export function AdminFees() {
  loadFeesData();

  const summary = getFeesSummary();

  return `
    <section class="admin-fees">

      <!-- PAGE HEADER -->
      <div class="fees-page-header">

        <div>
          <span class="fees-page-kicker">
            FINANCE MANAGEMENT
          </span>

          <h1>
            Fees Management
          </h1>

          <p>
            Manage student fees, payments and pending dues.
          </p>
        </div>

        <div class="fees-header-actions">
          <button
            type="button"
            class="admin-btn admin-btn-secondary"
            data-fee-action="refresh"
          >
            🔄 Refresh
          </button>

          <button
            type="button"
            class="admin-btn admin-btn-primary"
            data-fee-action="add"
          >
            ➕ Add Fee Record
          </button>
        </div>

      </div>

      <!-- SUMMARY -->
      <div class="fees-summary-grid">

        <div class="fees-summary-card">
          <div class="fees-summary-icon">
            💰
          </div>

          <div>
            <span>Total Fee</span>
            <strong>
              ${formatCurrency(summary.totalFee)}
            </strong>
          </div>
        </div>

        <div class="fees-summary-card">
          <div class="fees-summary-icon">
            ✅
          </div>

          <div>
            <span>Collected</span>
            <strong>
              ${formatCurrency(summary.collectedFee)}
            </strong>
          </div>
        </div>

        <div class="fees-summary-card">
          <div class="fees-summary-icon">
            ⏳
          </div>

          <div>
            <span>Pending</span>
            <strong>
              ${formatCurrency(summary.pendingFee)}
            </strong>
          </div>
        </div>

        <div class="fees-summary-card">
          <div class="fees-summary-icon">
            ⚠️
          </div>

          <div>
            <span>Overdue</span>
            <strong>
              ${formatCurrency(summary.overdueFee)}
            </strong>
          </div>
        </div>

      </div>

      <!-- EXTRA SUMMARY -->
      <div class="fees-mini-summary">

        <div>
          <span>Students with full payment</span>
          <strong>${summary.paidStudents}</strong>
        </div>

        <div>
          <span>Students with pending fees</span>
          <strong>${summary.pendingStudents}</strong>
        </div>

        <div>
          <span>Total Records</span>
          <strong>${feesData.length}</strong>
        </div>

      </div>

      <!-- FILTERS -->
      <div class="fees-toolbar">

        <div class="fees-search-box">
          <span>🔎</span>

          <input
            type="text"
            id="admin-fee-search"
            placeholder="Search student or admission number..."
            value="${escapeHTML(feeSearchText)}"
            autocomplete="off"
          />
        </div>

        <select id="admin-fee-class-filter">

          <option value="all">
            All Classes
          </option>

          <option value="6" ${
            feeClassFilter === "6"
              ? "selected"
              : ""
          }>
            Class 6
          </option>

          <option value="7" ${
            feeClassFilter === "7"
              ? "selected"
              : ""
          }>
            Class 7
          </option>

          <option value="8" ${
            feeClassFilter === "8"
              ? "selected"
              : ""
          }>
            Class 8
          </option>

          <option value="9" ${
            feeClassFilter === "9"
              ? "selected"
              : ""
          }>
            Class 9
          </option>

          <option value="10" ${
            feeClassFilter === "10"
              ? "selected"
              : ""
          }>
            Class 10
          </option>

        </select>

        <select id="admin-fee-type-filter">

          <option value="all">
            All Fee Types
          </option>

          <option value="Annual Fee" ${
            feeTypeFilter === "Annual Fee"
              ? "selected"
              : ""
          }>
            Annual Fee
          </option>

          <option value="Tuition Fee" ${
            feeTypeFilter === "Tuition Fee"
              ? "selected"
              : ""
          }>
            Tuition Fee
          </option>

          <option value="Exam Fee" ${
            feeTypeFilter === "Exam Fee"
              ? "selected"
              : ""
          }>
            Exam Fee
          </option>

        </select>

        <select id="admin-fee-status-filter">

          <option value="all">
            All Status
          </option>

          <option value="Paid" ${
            feeStatusFilter === "Paid"
              ? "selected"
              : ""
          }>
            Paid
          </option>

          <option value="Partial" ${
            feeStatusFilter === "Partial"
              ? "selected"
              : ""
          }>
            Partial
          </option>

          <option value="Pending" ${
            feeStatusFilter === "Pending"
              ? "selected"
              : ""
          }>
            Pending
          </option>

          <option value="Overdue" ${
            feeStatusFilter === "Overdue"
              ? "selected"
              : ""
          }>
            Overdue
          </option>

        </select>

      </div>

      <!-- TABLE -->
      <div class="fees-table-card">

        <div class="fees-table-header">

          <div>
            <h2>
              Student Fee Records
            </h2>

            <p>
              ${getFilteredFees().length}
              record(s) found
            </p>
          </div>

        </div>

        <div class="fees-table-wrapper">

          <table class="fees-table">

            <thead>
              <tr>
                <th>Student</th>
                <th>Class</th>
                <th>Fee Type</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Pending</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody id="admin-fees-table-body">
              ${renderFeesRows()}
            </tbody>

          </table>

        </div>

      </div>

    </section>
  `;
}

/* =========================================
   TABLE ROWS
========================================= */

function renderFeesRows() {
  const filteredFees = getFilteredFees();

  if (filteredFees.length === 0) {
    return `
      <tr>
        <td
          colspan="9"
          class="fees-empty-cell"
        >
          <div class="fees-empty-state">
            <div>💰</div>
            <h3>No fee records found</h3>
            <p>
              Try changing your search or filters.
            </p>
          </div>
        </td>
      </tr>
    `;
  }

  return filteredFees
    .map((fee) => {
      const pending = getPendingAmount(fee);
      const status = getFeeStatus(fee);

      return `
        <tr>

          <td>
            <div class="fee-student">

              <div class="fee-student-avatar">
                ${escapeHTML(
                  String(
                    fee.studentName || "S"
                  )
                    .charAt(0)
                    .toUpperCase()
                )}
              </div>

              <div>
                <strong>
                  ${escapeHTML(
                    fee.studentName
                  )}
                </strong>

                <span>
                  ${escapeHTML(
                    fee.admissionNo
                  )}
                </span>
              </div>

            </div>
          </td>

          <td>
            <strong>
              ${escapeHTML(
                fee.className
              )}
            </strong>
            -
            ${escapeHTML(fee.section)}
          </td>

          <td>
            ${escapeHTML(fee.feeType)}
          </td>

          <td class="fee-amount">
            ${formatCurrency(
              fee.totalFee
            )}
          </td>

          <td class="fee-paid">
            ${formatCurrency(
              fee.paidAmount
            )}
          </td>

          <td class="fee-pending">
            ${formatCurrency(pending)}
          </td>

          <td>
            ${formatDate(fee.dueDate)}
          </td>

          <td>
            ${getStatusHTML(status)}
          </td>

          <td>

            <div class="fee-action-buttons">

              <button
                type="button"
                class="fee-icon-btn"
                title="View"
                data-fee-action="view"
                data-fee-id="${fee.id}"
              >
                👁️
              </button>

              <button
                type="button"
                class="fee-icon-btn"
                title="Edit"
                data-fee-action="edit"
                data-fee-id="${fee.id}"
              >
                ✏️
              </button>

              ${
                status !== "Paid"
                  ? `
                    <button
                      type="button"
                      class="fee-icon-btn fee-pay-btn"
                      title="Add Payment"
                      data-fee-action="payment"
                      data-fee-id="${fee.id}"
                    >
                      💳
                    </button>
                  `
                  : ""
              }

              <button
                type="button"
                class="fee-icon-btn fee-delete-btn"
                title="Delete"
                data-fee-action="delete"
                data-fee-id="${fee.id}"
              >
                🗑️
              </button>

            </div>

          </td>

        </tr>
      `;
    })
    .join("");
}

/* =========================================
   SETUP
========================================= */

export function setupAdminFees() {
  loadFeesData();

  feeSearchText = "";
  feeClassFilter = "all";
  feeStatusFilter = "all";
  feeTypeFilter = "all";
  editingFeeId = null;

  const root = document.querySelector(
    ".admin-fees"
  );

  if (!root) {
    console.error(
      "AdminFees root element not found."
    );
    return;
  }

  if (root.dataset.feesInitialized === "true") {
    return;
  }

  root.dataset.feesInitialized = "true";

  root.addEventListener("click", (event) => {
    const button = event.target.closest(
      "[data-fee-action]"
    );

    if (!button || !root.contains(button)) {
      return;
    }

    const action =
      button.dataset.feeAction;

    const id = Number(
      button.dataset.feeId
    );

    if (action === "add") {
      openFeeModal();
      return;
    }

    if (action === "refresh") {
      loadFeesData();
      renderFeesPage(root);
      return;
    }

    if (action === "view") {
      openViewFeeModal(id);
      return;
    }

    if (action === "edit") {
      openFeeModal(id);
      return;
    }

    if (action === "payment") {
      openPaymentModal(id);
      return;
    }

    if (action === "delete") {
      deleteFeeRecord(id, root);
    }
  });

  const searchInput = root.querySelector(
    "#admin-fee-search"
  );

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      () => {
        feeSearchText =
          searchInput.value || "";

        updateFeesTable(root);
      }
    );
  }

  const classFilter = root.querySelector(
    "#admin-fee-class-filter"
  );

  if (classFilter) {
    classFilter.addEventListener(
      "change",
      () => {
        feeClassFilter =
          classFilter.value;

        updateFeesTable(root);
      }
    );
  }

  const typeFilter = root.querySelector(
    "#admin-fee-type-filter"
  );

  if (typeFilter) {
    typeFilter.addEventListener(
      "change",
      () => {
        feeTypeFilter =
          typeFilter.value;

        updateFeesTable(root);
      }
    );
  }

  const statusFilter = root.querySelector(
    "#admin-fee-status-filter"
  );

  if (statusFilter) {
    statusFilter.addEventListener(
      "change",
      () => {
        feeStatusFilter =
          statusFilter.value;

        updateFeesTable(root);
      }
    );
  }
}

/* =========================================
   UPDATE TABLE
========================================= */

function updateFeesTable(root) {
  const tableBody = root.querySelector(
    "#admin-fees-table-body"
  );

  if (!tableBody) {
    return;
  }

  tableBody.innerHTML =
    renderFeesRows();
}

/* =========================================
   RENDER FULL PAGE
========================================= */

function renderFeesPage(root) {
  const parent =
    root.parentElement;

  if (!parent) {
    return;
  }

  parent.innerHTML =
    AdminFees();

  setupAdminFees();
}

/* =========================================
   ADD / EDIT MODAL
========================================= */

function openFeeModal(id = null) {
  editingFeeId = id;

  const fee = id
    ? feesData.find(
        (item) => item.id === id
      )
    : null;

  if (id && !fee) {
    alert(
      "Fee record could not be found."
    );
    return;
  }

  const isEdit = Boolean(fee);

  const modal = document.createElement(
    "div"
  );

  modal.className =
    "admin-modal fee-modal";

  modal.id =
    "admin-fee-modal";

  modal.innerHTML = `
    <div
      class="admin-modal-overlay"
      data-fee-modal-close="true"
    ></div>

    <div class="admin-modal-card">

      <div class="admin-modal-header">

        <div>
          <span class="fee-modal-kicker">
            FEE MANAGEMENT
          </span>

          <h2>
            ${
              isEdit
                ? "Edit Fee Record"
                : "Add Fee Record"
            }
          </h2>
        </div>

        <button
          type="button"
          class="admin-modal-close"
          data-fee-modal-close="true"
        >
          ×
        </button>

      </div>

      <form id="admin-fee-form">

        <div class="fee-form-grid">

          <div class="fee-form-group">

            <label>
              Student Name *
            </label>

            <input
              type="text"
              id="fee-student-name"
              value="${escapeHTML(
                fee?.studentName || ""
              )}"
              placeholder="Enter student name"
              required
            />

          </div>

          <div class="fee-form-group">

            <label>
              Admission Number *
            </label>

            <input
              type="text"
              id="fee-admission-no"
              value="${escapeHTML(
                fee?.admissionNo || ""
              )}"
              placeholder="e.g. GS007"
              required
            />

          </div>

          <div class="fee-form-group">

            <label>
              Class *
            </label>

            <select
              id="fee-class"
              required
            >

              <option value="">
                Select Class
              </option>

              ${[6, 7, 8, 9, 10]
                .map(
                  (classNumber) => `
                    <option
                      value="${classNumber}"
                      ${
                        String(
                          fee?.className || ""
                        ) ===
                        String(
                          classNumber
                        )
                          ? "selected"
                          : ""
                      }
                    >
                      Class ${classNumber}
                    </option>
                  `
                )
                .join("")}

            </select>

          </div>

          <div class="fee-form-group">

            <label>
              Section *
            </label>

            <select
              id="fee-section"
              required
            >

              <option value="">
                Select Section
              </option>

              <option
                value="A"
                ${
                  fee?.section === "A"
                    ? "selected"
                    : ""
                }
              >
                A
              </option>

              <option
                value="B"
                ${
                  fee?.section === "B"
                    ? "selected"
                    : ""
                }
              >
                B
              </option>

            </select>

          </div>

          <div class="fee-form-group">

            <label>
              Fee Type *
            </label>

            <select
              id="fee-type"
              required
            >

              <option value="">
                Select Fee Type
              </option>

              <option
                value="Annual Fee"
                ${
                  fee?.feeType ===
                  "Annual Fee"
                    ? "selected"
                    : ""
                }
              >
                Annual Fee
              </option>

              <option
                value="Tuition Fee"
                ${
                  fee?.feeType ===
                  "Tuition Fee"
                    ? "selected"
                    : ""
                }
              >
                Tuition Fee
              </option>

              <option
                value="Exam Fee"
                ${
                  fee?.feeType ===
                  "Exam Fee"
                    ? "selected"
                    : ""
                }
              >
                Exam Fee
              </option>

            </select>

          </div>

          <div class="fee-form-group">

            <label>
              Total Fee *
            </label>

            <input
              type="number"
              id="fee-total"
              min="0"
              step="1"
              value="${
                fee?.totalFee ?? ""
              }"
              placeholder="Enter total fee"
              required
            />

          </div>

          <div class="fee-form-group">

            <label>
              Paid Amount
            </label>

            <input
              type="number"
              id="fee-paid"
              min="0"
              step="1"
              value="${
                fee?.paidAmount ?? 0
              }"
              placeholder="Enter paid amount"
            />

          </div>

          <div class="fee-form-group">

            <label>
              Due Date *
            </label>

            <input
              type="date"
              id="fee-due-date"
              value="${
                fee?.dueDate || ""
              }"
              required
            />

          </div>

          <div class="fee-form-group">

            <label>
              Payment Mode
            </label>

            <select id="fee-payment-mode">

              <option value="">
                Select Payment Mode
              </option>

              <option
                value="Cash"
                ${
                  fee?.paymentMode ===
                  "Cash"
                    ? "selected"
                    : ""
                }
              >
                Cash
              </option>

              <option
                value="UPI"
                ${
                  fee?.paymentMode ===
                  "UPI"
                    ? "selected"
                    : ""
                }
              >
                UPI
              </option>

              <option
                value="Bank"
                ${
                  fee?.paymentMode ===
                  "Bank"
                    ? "selected"
                    : ""
                }
              >
                Bank
              </option>

              <option
                value="Other"
                ${
                  fee?.paymentMode ===
                  "Other"
                    ? "selected"
                    : ""
                }
              >
                Other
              </option>

            </select>

          </div>

          <div class="fee-form-group">

            <label>
              Payment Date
            </label>

            <input
              type="date"
              id="fee-payment-date"
              value="${
                fee?.paymentDate || ""
              }"
            />

          </div>

          <div class="fee-form-group fee-form-full">

            <label>
              Remarks
            </label>

            <textarea
              id="fee-remarks"
              rows="3"
              placeholder="Optional remarks"
            >${escapeHTML(
              fee?.remarks || ""
            )}</textarea>

          </div>

        </div>

        <div class="admin-modal-footer">

          <button
            type="button"
            class="admin-btn admin-btn-secondary"
            data-fee-modal-close="true"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="admin-btn admin-btn-primary"
          >
            ${
              isEdit
                ? "💾 Update Fee"
                : "➕ Add Fee"
            }
          </button>

        </div>

      </form>

    </div>
  `;

  document.body.appendChild(modal);

  requestAnimationFrame(() => {
    modal.classList.add("show");
  });

  const form = modal.querySelector(
    "#admin-fee-form"
  );

  if (form) {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        saveFeeRecord(modal, id);
      }
    );
  }

  modal.addEventListener(
    "click",
    (event) => {
      if (
        event.target.closest(
          "[data-fee-modal-close]"
        )
      ) {
        closeFeeModal(modal);
      }
    }
  );
}

/* =========================================
   SAVE FEE
========================================= */

function saveFeeRecord(modal, id) {
  const studentName =
    modal.querySelector(
      "#fee-student-name"
    )?.value.trim();

  const admissionNo =
    modal.querySelector(
      "#fee-admission-no"
    )?.value.trim();

  const className =
    modal.querySelector(
      "#fee-class"
    )?.value;

  const section =
    modal.querySelector(
      "#fee-section"
    )?.value;

  const feeType =
    modal.querySelector(
      "#fee-type"
    )?.value;

  const totalFee = Number(
    modal.querySelector(
      "#fee-total"
    )?.value
  );

  const paidAmount = Number(
    modal.querySelector(
      "#fee-paid"
    )?.value || 0
  );

  const dueDate =
    modal.querySelector(
      "#fee-due-date"
    )?.value;

  const paymentMode =
    modal.querySelector(
      "#fee-payment-mode"
    )?.value || "";

  const paymentDate =
    modal.querySelector(
      "#fee-payment-date"
    )?.value || "";

  const remarks =
    modal.querySelector(
      "#fee-remarks"
    )?.value.trim() || "";

  if (
    !studentName ||
    !admissionNo ||
    !className ||
    !section ||
    !feeType ||
    !dueDate
  ) {
    alert(
      "Please fill all required fields."
    );
    return;
  }

  if (
    !Number.isFinite(totalFee) ||
    totalFee <= 0
  ) {
    alert(
      "Please enter a valid total fee."
    );
    return;
  }

  if (
    !Number.isFinite(paidAmount) ||
    paidAmount < 0
  ) {
    alert(
      "Please enter a valid paid amount."
    );
    return;
  }

  if (paidAmount > totalFee) {
    alert(
      "Paid amount cannot be greater than total fee."
    );
    return;
  }

  const duplicate = feesData.find(
    (fee) =>
      fee.admissionNo.toLowerCase() ===
        admissionNo.toLowerCase() &&
      fee.feeType === feeType &&
      fee.id !== id
  );

  if (duplicate) {
    alert(
      "A fee record for this student and fee type already exists."
    );
    return;
  }

  const updatedRecord = {
    id: id || Date.now(),
    studentName,
    admissionNo,
    className,
    section,
    feeType,
    totalFee,
    paidAmount,
    dueDate,
    paymentDate:
      paidAmount > 0
        ? paymentDate ||
          new Date()
            .toISOString()
            .split("T")[0]
        : "",
    paymentMode:
      paidAmount > 0
        ? paymentMode
        : "",
    receiptNo:
      paidAmount > 0
        ? generateReceiptNumber()
        : "",
    remarks
  };

  if (id) {
    const index =
      feesData.findIndex(
        (fee) => fee.id === id
      );

    if (index !== -1) {
      const oldRecord =
        feesData[index];

      updatedRecord.receiptNo =
        oldRecord.receiptNo ||
        updatedRecord.receiptNo;

      feesData[index] =
        updatedRecord;
    }
  } else {
    feesData.push(
      updatedRecord
    );
  }

  saveFeesData();

  closeFeeModal(modal);

  const root = document.querySelector(
    ".admin-fees"
  );

  if (root) {
    renderFeesPage(root);
  }
}

/* =========================================
   PAYMENT MODAL
========================================= */

function openPaymentModal(id) {
  const fee = feesData.find(
    (item) => item.id === id
  );

  if (!fee) {
    alert(
      "Fee record could not be found."
    );
    return;
  }

  const pending =
    getPendingAmount(fee);

  if (pending <= 0) {
    alert(
      "This fee is already fully paid."
    );
    return;
  }

  const modal = document.createElement(
    "div"
  );

  modal.className =
    "admin-modal fee-modal";

  modal.innerHTML = `
    <div
      class="admin-modal-overlay"
      data-fee-modal-close="true"
    ></div>

    <div class="admin-modal-card">

      <div class="admin-modal-header">

        <div>
          <span class="fee-modal-kicker">
            PAYMENT
          </span>

          <h2>
            Add Payment
          </h2>

          <p>
            ${escapeHTML(
              fee.studentName
            )}
            • Pending:
            <strong>
              ${formatCurrency(pending)}
            </strong>
          </p>
        </div>

        <button
          type="button"
          class="admin-modal-close"
          data-fee-modal-close="true"
        >
          ×
        </button>

      </div>

      <form id="admin-payment-form">

        <div class="fee-form-grid">

          <div class="fee-form-group">

            <label>
              Payment Amount *
            </label>

            <input
              type="number"
              id="payment-amount"
              min="1"
              max="${pending}"
              step="1"
              placeholder="Enter amount"
              required
            />

          </div>

          <div class="fee-form-group">

            <label>
              Payment Mode *
            </label>

            <select
              id="payment-mode"
              required
            >

              <option value="">
                Select Payment Mode
              </option>

              <option value="Cash">
                Cash
              </option>

              <option value="UPI">
                UPI
              </option>

              <option value="Bank">
                Bank
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>

          <div class="fee-form-group">

            <label>
              Payment Date *
            </label>

            <input
              type="date"
              id="payment-date"
              value="${
                new Date()
                  .toISOString()
                  .split("T")[0]
              }"
              required
            />

          </div>

          <div class="fee-form-group">

            <label>
              Transaction / Receipt No.
            </label>

            <input
              type="text"
              id="payment-receipt"
              value="${escapeHTML(
                generateReceiptNumber()
              )}"
              placeholder="Receipt number"
            />

          </div>

          <div class="fee-form-group fee-form-full">

            <label>
              Remarks
            </label>

            <textarea
              id="payment-remarks"
              rows="3"
              placeholder="Optional remarks"
            ></textarea>

          </div>

        </div>

        <div class="admin-modal-footer">

          <button
            type="button"
            class="admin-btn admin-btn-secondary"
            data-fee-modal-close="true"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="admin-btn admin-btn-primary"
          >
            💳 Save Payment
          </button>

        </div>

      </form>

    </div>
  `;

  document.body.appendChild(modal);

  requestAnimationFrame(() => {
    modal.classList.add("show");
  });

  const form = modal.querySelector(
    "#admin-payment-form"
  );

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const amount = Number(
        modal.querySelector(
          "#payment-amount"
        )?.value
      );

      const mode =
        modal.querySelector(
          "#payment-mode"
        )?.value;

      const date =
        modal.querySelector(
          "#payment-date"
        )?.value;

      const receipt =
        modal.querySelector(
          "#payment-receipt"
        )?.value.trim();

      const remarks =
        modal.querySelector(
          "#payment-remarks"
        )?.value.trim();

      if (
        !Number.isFinite(amount) ||
        amount <= 0
      ) {
        alert(
          "Please enter a valid payment amount."
        );
        return;
      }

      if (amount > pending) {
        alert(
          "Payment cannot be greater than pending amount."
        );
        return;
      }

      if (!mode || !date) {
        alert(
          "Please select payment mode and date."
        );
        return;
      }

      fee.paidAmount =
        (Number(fee.paidAmount) || 0) +
        amount;

      fee.paymentDate = date;
      fee.paymentMode = mode;
      fee.receiptNo =
        receipt ||
        generateReceiptNumber();

      if (remarks) {
        fee.remarks = remarks;
      }

      saveFeesData();

      closeFeeModal(modal);

      const root =
        document.querySelector(
          ".admin-fees"
        );

      if (root) {
        renderFeesPage(root);
      }
    }
  );

  modal.addEventListener(
    "click",
    (event) => {
      if (
        event.target.closest(
          "[data-fee-modal-close]"
        )
      ) {
        closeFeeModal(modal);
      }
    }
  );
}

/* =========================================
   VIEW FEE
========================================= */

function openViewFeeModal(id) {
  const fee = feesData.find(
    (item) => item.id === id
  );

  if (!fee) {
    alert(
      "Fee record could not be found."
    );
    return;
  }

  const status =
    getFeeStatus(fee);

  const pending =
    getPendingAmount(fee);

  const modal = document.createElement(
    "div"
  );

  modal.className =
    "admin-modal fee-modal";

  modal.innerHTML = `
    <div
      class="admin-modal-overlay"
      data-fee-modal-close="true"
    ></div>

    <div class="admin-modal-card">

      <div class="admin-modal-header">

        <div>
          <span class="fee-modal-kicker">
            FEE DETAILS
          </span>

          <h2>
            ${escapeHTML(
              fee.studentName
            )}
          </h2>
        </div>

        <button
          type="button"
          class="admin-modal-close"
          data-fee-modal-close="true"
        >
          ×
        </button>

      </div>

      <div class="fee-details-grid">

        <div>
          <span>Admission No.</span>
          <strong>
            ${escapeHTML(
              fee.admissionNo
            )}
          </strong>
        </div>

        <div>
          <span>Class & Section</span>
          <strong>
            Class ${escapeHTML(
              fee.className
            )}
            -
            ${escapeHTML(
              fee.section
            )}
          </strong>
        </div>

        <div>
          <span>Fee Type</span>
          <strong>
            ${escapeHTML(
              fee.feeType
            )}
          </strong>
        </div>

        <div>
          <span>Status</span>
          <strong>
            ${getStatusHTML(status)}
          </strong>
        </div>

        <div>
          <span>Total Fee</span>
          <strong>
            ${formatCurrency(
              fee.totalFee
            )}
          </strong>
        </div>

        <div>
          <span>Paid Amount</span>
          <strong>
            ${formatCurrency(
              fee.paidAmount
            )}
          </strong>
        </div>

        <div>
          <span>Pending Amount</span>
          <strong>
            ${formatCurrency(
              pending
            )}
          </strong>
        </div>

        <div>
          <span>Due Date</span>
          <strong>
            ${formatDate(
              fee.dueDate
            )}
          </strong>
        </div>

        <div>
          <span>Payment Date</span>
          <strong>
            ${formatDate(
              fee.paymentDate
            )}
          </strong>
        </div>

        <div>
          <span>Payment Mode</span>
          <strong>
            ${escapeHTML(
              fee.paymentMode ||
                "-"
            )}
          </strong>
        </div>

        <div>
          <span>Receipt No.</span>
          <strong>
            ${escapeHTML(
              fee.receiptNo ||
                "-"
            )}
          </strong>
        </div>

        <div>
          <span>Remarks</span>
          <strong>
            ${escapeHTML(
              fee.remarks || "-"
            )}
          </strong>
        </div>

      </div>

      <div class="admin-modal-footer">

        <button
          type="button"
          class="admin-btn admin-btn-secondary"
          data-fee-modal-close="true"
        >
          Close
        </button>

        ${
          pending > 0
            ? `
              <button
                type="button"
                class="admin-btn admin-btn-primary"
                data-view-payment="${fee.id}"
              >
                💳 Add Payment
              </button>
            `
            : ""
        }

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  requestAnimationFrame(() => {
    modal.classList.add("show");
  });

  modal.addEventListener(
    "click",
    (event) => {
      if (
        event.target.closest(
          "[data-fee-modal-close]"
        )
      ) {
        closeFeeModal(modal);
        return;
      }

      const paymentButton =
        event.target.closest(
          "[data-view-payment]"
        );

      if (paymentButton) {
        const paymentId = Number(
          paymentButton.dataset
            .viewPayment
        );

        closeFeeModal(modal);

        setTimeout(() => {
          openPaymentModal(
            paymentId
          );
        }, 100);
      }
    }
  );
}

/* =========================================
   DELETE
========================================= */

function deleteFeeRecord(id, root) {
  const fee = feesData.find(
    (item) => item.id === id
  );

  if (!fee) {
    return;
  }

  const confirmed = window.confirm(
    `Delete fee record for ${fee.studentName}?`
  );

  if (!confirmed) {
    return;
  }

  feesData = feesData.filter(
    (item) => item.id !== id
  );

  saveFeesData();

  renderFeesPage(root);
}

/* =========================================
   CLOSE MODAL
========================================= */

function closeFeeModal(modal) {
  if (!modal) {
    return;
  }

  modal.classList.remove("show");

  setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(
        modal
      );
    }
  }, 200);
}