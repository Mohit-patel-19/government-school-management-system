import "./AdminStudents.css";

/* =========================================
   CLASS & SECTION DATA
========================================= */

const classesData = [
  {
    id: 1,
    className: "Class 10",
    section: "A",
    classTeacher: "Rajesh Kumar",
    students: 40,
    room: "Room 101",
    status: "Active"
  },
  {
    id: 2,
    className: "Class 10",
    section: "B",
    classTeacher: "Sunita Sharma",
    students: 38,
    room: "Room 102",
    status: "Active"
  },
  {
    id: 3,
    className: "Class 9",
    section: "A",
    classTeacher: "Mahesh Singh",
    students: 42,
    room: "Room 201",
    status: "Active"
  },
  {
    id: 4,
    className: "Class 9",
    section: "B",
    classTeacher: "Kavita Meena",
    students: 36,
    room: "Room 202",
    status: "Active"
  },
  {
    id: 5,
    className: "Class 8",
    section: "A",
    classTeacher: "Anil Verma",
    students: 35,
    room: "Room 301",
    status: "Active"
  },
  {
    id: 6,
    className: "Class 8",
    section: "B",
    classTeacher: "Pooja Joshi",
    students: 33,
    room: "Room 302",
    status: "Active"
  },
  {
    id: 7,
    className: "Class 7",
    section: "A",
    classTeacher: "Ramesh Patel",
    students: 31,
    room: "Room 401",
    status: "Active"
  },
  {
    id: 8,
    className: "Class 6",
    section: "A",
    classTeacher: "Neha Sharma",
    students: 29,
    room: "Room 402",
    status: "Active"
  }
];

/* =========================================
   STATE
========================================= */

let classSearchText = "";
let classFilterValue = "All";
let sectionFilterValue = "All";
let editingClassId = null;

/* =========================================
   MAIN COMPONENT
========================================= */

export function AdminClasses() {
  return `
    <div class="admin-classes">

      <!-- PAGE HEADER -->
      <div class="admin-classes-header">

        <div>
          <h1>Classes & Sections</h1>
          <p>Manage school classes, sections and class information.</p>
        </div>

        <div class="admin-classes-header-actions">
          <button
            type="button"
            class="admin-btn admin-btn-secondary"
            data-class-action="refresh"
          >
            🔄 Refresh
          </button>

          <button
            type="button"
            class="admin-btn admin-btn-primary"
            data-class-action="add"
          >
            ＋ Add Class
          </button>
        </div>

      </div>

      <!-- SUMMARY -->
      <div class="classes-summary-grid">

        <div class="class-summary-card">
          <div class="class-summary-icon">🏫</div>
          <div>
            <span>Total Classes</span>
            <strong id="total-classes-count">0</strong>
          </div>
        </div>

        <div class="class-summary-card">
          <div class="class-summary-icon">📚</div>
          <div>
            <span>Total Sections</span>
            <strong id="total-sections-count">0</strong>
          </div>
        </div>

        <div class="class-summary-card">
          <div class="class-summary-icon">👨‍🎓</div>
          <div>
            <span>Total Students</span>
            <strong id="total-class-students">0</strong>
          </div>
        </div>

        <div class="class-summary-card">
          <div class="class-summary-icon">👨‍🏫</div>
          <div>
            <span>Class Teachers</span>
            <strong id="total-class-teachers">0</strong>
          </div>
        </div>

      </div>

      <!-- TOOLBAR -->
      <div class="classes-toolbar">

        <div class="class-search-box">
          <span>🔍</span>

          <input
            type="text"
            id="class-search"
            placeholder="Search class, section or teacher..."
            autocomplete="off"
          />
        </div>

        <select id="class-filter">
          <option value="All">All Classes</option>
          ${getClassFilterOptions()}
        </select>

        <select id="section-filter">
          <option value="All">All Sections</option>
          ${getSectionFilterOptions()}
        </select>

      </div>

      <!-- TABLE -->
      <div class="classes-table-wrapper">

        <table class="classes-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Section</th>
              <th>Class Teacher</th>
              <th>Students</th>
              <th>Room</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody id="classes-table-body">
            ${renderClassesRows()}
          </tbody>

        </table>

      </div>

      <!-- ADD / EDIT MODAL -->
      <div
        class="class-modal"
        id="class-form-modal"
        style="display:none;"
      >

        <div class="class-modal-box">

          <div class="class-modal-header">

            <div>
              <h2 id="class-form-title">Add Class</h2>
              <p>Create or update class information.</p>
            </div>

            <button
              type="button"
              class="class-modal-close"
              data-class-action="close-form"
            >
              ×
            </button>

          </div>

          <form id="class-form">

            <div class="class-form-grid">

              <div class="class-form-group">
                <label for="class-name">Class *</label>

                <select id="class-name" required>
                  <option value="">Select Class</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                </select>
              </div>

              <div class="class-form-group">
                <label for="section-name">Section *</label>

                <select id="section-name" required>
                  <option value="">Select Section</option>
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                  <option value="C">Section C</option>
                  <option value="D">Section D</option>
                  <option value="E">Section E</option>
                </select>
              </div>

              <div class="class-form-group">
                <label for="class-teacher">Class Teacher</label>

                <input
                  type="text"
                  id="class-teacher"
                  placeholder="Enter class teacher name"
                />
              </div>

              <div class="class-form-group">
                <label for="class-students">Students</label>

                <input
                  type="number"
                  id="class-students"
                  min="0"
                  max="200"
                  value="0"
                  placeholder="Number of students"
                />
              </div>

              <div class="class-form-group">
                <label for="class-room">Room</label>

                <input
                  type="text"
                  id="class-room"
                  placeholder="Example: Room 101"
                />
              </div>

              <div class="class-form-group">
                <label for="class-status">Status</label>

                <select id="class-status">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

            </div>

            <div class="class-form-actions">

              <button
                type="button"
                class="admin-btn admin-btn-secondary"
                data-class-action="close-form"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="admin-btn admin-btn-primary"
              >
                Save Class
              </button>

            </div>

          </form>

        </div>

      </div>

      <!-- VIEW MODAL -->
      <div
        class="class-modal"
        id="class-view-modal"
        style="display:none;"
      >

        <div class="class-modal-box">

          <div class="class-modal-header">

            <div>
              <h2>Class Details</h2>
              <p>View complete class information.</p>
            </div>

            <button
              type="button"
              class="class-modal-close"
              data-class-action="close-view"
            >
              ×
            </button>

          </div>

          <div id="class-view-content"></div>

          <div class="class-form-actions">

            <button
              type="button"
              class="admin-btn admin-btn-secondary"
              data-class-action="close-view"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  `;
}

/* =========================================
   SETUP
========================================= */

export function setupAdminClasses() {
  classSearchText = "";
  classFilterValue = "All";
  sectionFilterValue = "All";
  editingClassId = null;

  updateClassSummary();

  const searchInput = document.querySelector("#class-search");
  const classFilter = document.querySelector("#class-filter");
  const sectionFilter = document.querySelector("#section-filter");

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      classSearchText = event.target.value.trim().toLowerCase();
      renderClasses();
    });
  }

  if (classFilter) {
    classFilter.addEventListener("change", (event) => {
      classFilterValue = event.target.value;
      renderClasses();
    });
  }

  if (sectionFilter) {
    sectionFilter.addEventListener("change", (event) => {
      sectionFilterValue = event.target.value;
      renderClasses();
    });
  }

  const page = document.querySelector(".admin-classes");

  if (!page) {
    return;
  }

  page.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-class-action]");

    if (!actionElement) {
      return;
    }

    const action = actionElement.dataset.classAction;
    const id = Number(actionElement.dataset.id);

    if (action === "add") {
      openAddClassModal();
    }

    if (action === "edit" && id) {
      openEditClassModal(id);
    }

    if (action === "view" && id) {
      openViewClassModal(id);
    }

    if (action === "delete" && id) {
      deleteClass(id);
    }

    if (action === "refresh") {
      refreshClasses();
    }

    if (action === "close-form") {
      closeClassFormModal();
    }

    if (action === "close-view") {
      closeClassViewModal();
    }
  });

  const form = document.querySelector("#class-form");

  if (form) {
    form.addEventListener("submit", handleClassFormSubmit);
  }

  document.addEventListener("keydown", handleClassEscapeKey);
}

/* =========================================
   RENDER
========================================= */

function renderClasses() {
  const tbody = document.querySelector("#classes-table-body");

  if (!tbody) {
    return;
  }

  tbody.innerHTML = renderClassesRows();
}

/* =========================================
   RENDER TABLE ROWS
========================================= */

function renderClassesRows() {
  const filteredData = getFilteredClasses();

  if (filteredData.length === 0) {
    return `
      <tr>
        <td colspan="8">
          <div class="classes-empty-state">
            <div class="classes-empty-icon">🏫</div>
            <h3>No Classes Found</h3>
            <p>Try changing your search or filter.</p>
          </div>
        </td>
      </tr>
    `;
  }

  return filteredData
    .map((item, index) => {
      return `
        <tr>

          <td>${index + 1}</td>

          <td>
            <strong>${escapeHtml(item.className)}</strong>
          </td>

          <td>
            <span class="section-badge">
              ${escapeHtml(item.section)}
            </span>
          </td>

          <td>
            ${escapeHtml(item.classTeacher || "Not Assigned")}
          </td>

          <td>
            <strong>${Number(item.students) || 0}</strong>
          </td>

          <td>
            ${escapeHtml(item.room || "Not Assigned")}
          </td>

          <td>
            <span class="class-status ${getStatusClass(item.status)}">
              ${escapeHtml(item.status)}
            </span>
          </td>

          <td>

            <div class="class-action-buttons">

              <button
                type="button"
                class="class-action-btn view"
                data-class-action="view"
                data-id="${item.id}"
                title="View"
              >
                👁
              </button>

              <button
                type="button"
                class="class-action-btn edit"
                data-class-action="edit"
                data-id="${item.id}"
                title="Edit"
              >
                ✏️
              </button>

              <button
                type="button"
                class="class-action-btn delete"
                data-class-action="delete"
                data-id="${item.id}"
                title="Delete"
              >
                🗑
              </button>

            </div>

          </td>

        </tr>
      `;
    })
    .join("");
}

/* =========================================
   FILTER DATA
========================================= */

function getFilteredClasses() {
  return classesData.filter((item) => {
    const searchMatch =
      !classSearchText ||
      item.className.toLowerCase().includes(classSearchText) ||
      item.section.toLowerCase().includes(classSearchText) ||
      item.classTeacher.toLowerCase().includes(classSearchText) ||
      item.room.toLowerCase().includes(classSearchText);

    const classMatch =
      classFilterValue === "All" ||
      item.className === classFilterValue;

    const sectionMatch =
      sectionFilterValue === "All" ||
      item.section === sectionFilterValue;

    return searchMatch && classMatch && sectionMatch;
  });
}

/* =========================================
   SUMMARY
========================================= */

function updateClassSummary() {
  const totalClasses = new Set(
    classesData.map((item) => item.className)
  ).size;

  const totalSections = classesData.length;

  const totalStudents = classesData.reduce(
    (total, item) => total + (Number(item.students) || 0),
    0
  );

  const totalTeachers = new Set(
    classesData
      .map((item) => item.classTeacher)
      .filter(Boolean)
  ).size;

  const totalClassesElement =
    document.querySelector("#total-classes-count");

  const totalSectionsElement =
    document.querySelector("#total-sections-count");

  const totalStudentsElement =
    document.querySelector("#total-class-students");

  const totalTeachersElement =
    document.querySelector("#total-class-teachers");

  if (totalClassesElement) {
    totalClassesElement.textContent = totalClasses;
  }

  if (totalSectionsElement) {
    totalSectionsElement.textContent = totalSections;
  }

  if (totalStudentsElement) {
    totalStudentsElement.textContent = totalStudents;
  }

  if (totalTeachersElement) {
    totalTeachersElement.textContent = totalTeachers;
  }
}

/* =========================================
   FILTER OPTIONS
========================================= */

function getClassFilterOptions() {
  const classNames = [
    ...new Set(classesData.map((item) => item.className))
  ];

  return classNames
    .sort((a, b) => {
      const numberA = Number(a.replace("Class ", ""));
      const numberB = Number(b.replace("Class ", ""));
      return numberA - numberB;
    })
    .map(
      (className) =>
        `<option value="${escapeHtml(className)}">${escapeHtml(className)}</option>`
    )
    .join("");
}

function getSectionFilterOptions() {
  const sections = [
    ...new Set(classesData.map((item) => item.section))
  ];

  return sections
    .sort()
    .map(
      (section) =>
        `<option value="${escapeHtml(section)}">Section ${escapeHtml(section)}</option>`
    )
    .join("");
}

/* =========================================
   ADD CLASS
========================================= */

function openAddClassModal() {
  editingClassId = null;

  const modal = document.querySelector("#class-form-modal");
  const title = document.querySelector("#class-form-title");
  const form = document.querySelector("#class-form");

  if (!modal || !form) {
    return;
  }

  if (title) {
    title.textContent = "Add Class";
  }

  form.reset();

  const studentsInput = document.querySelector("#class-students");

  if (studentsInput) {
    studentsInput.value = "0";
  }

  modal.style.display = "flex";

  setTimeout(() => {
    document.querySelector("#class-name")?.focus();
  }, 50);
}

/* =========================================
   EDIT CLASS
========================================= */

function openEditClassModal(id) {
  const item = classesData.find((classItem) => classItem.id === id);

  if (!item) {
    return;
  }

  editingClassId = id;

  const modal = document.querySelector("#class-form-modal");
  const title = document.querySelector("#class-form-title");

  if (!modal) {
    return;
  }

  if (title) {
    title.textContent = "Edit Class";
  }

  setFieldValue("#class-name", item.className);
  setFieldValue("#section-name", item.section);
  setFieldValue("#class-teacher", item.classTeacher);
  setFieldValue("#class-students", item.students);
  setFieldValue("#class-room", item.room);
  setFieldValue("#class-status", item.status);

  modal.style.display = "flex";
}

/* =========================================
   FORM SUBMIT
========================================= */

function handleClassFormSubmit(event) {
  event.preventDefault();

  const className = getFieldValue("#class-name");
  const section = getFieldValue("#section-name");
  const classTeacher = getFieldValue("#class-teacher");
  const students = Number(getFieldValue("#class-students")) || 0;
  const room = getFieldValue("#class-room");
  const status = getFieldValue("#class-status");

  if (!className || !section) {
    alert("Please select class and section.");
    return;
  }

  if (students < 0) {
    alert("Students count cannot be negative.");
    return;
  }

  const duplicate = classesData.find((item) => {
    return (
      item.className === className &&
      item.section === section &&
      item.id !== editingClassId
    );
  });

  if (duplicate) {
    alert(
      `${className} - Section ${section} already exists.`
    );
    return;
  }

  if (editingClassId) {
    const item = classesData.find(
      (classItem) => classItem.id === editingClassId
    );

    if (!item) {
      alert("Class record not found.");
      return;
    }

    item.className = className;
    item.section = section;
    item.classTeacher = classTeacher;
    item.students = students;
    item.room = room;
    item.status = status;

    alert("Class updated successfully.");
  } else {
    const newId =
      classesData.length > 0
        ? Math.max(...classesData.map((item) => item.id)) + 1
        : 1;

    classesData.push({
      id: newId,
      className,
      section,
      classTeacher,
      students,
      room,
      status
    });

    alert("Class added successfully.");
  }

  closeClassFormModal();

  updateClassSummary();
  updateFilterDropdowns();
  renderClasses();
}

/* =========================================
   DELETE CLASS
========================================= */

function deleteClass(id) {
  const item = classesData.find(
    (classItem) => classItem.id === id
  );

  if (!item) {
    return;
  }

  const confirmed = window.confirm(
    `Are you sure you want to delete ${item.className} - Section ${item.section}?`
  );

  if (!confirmed) {
    return;
  }

  const index = classesData.findIndex(
    (classItem) => classItem.id === id
  );

  if (index === -1) {
    return;
  }

  classesData.splice(index, 1);

  updateClassSummary();
  updateFilterDropdowns();
  renderClasses();

  alert("Class deleted successfully.");
}

/* =========================================
   VIEW CLASS
========================================= */

function openViewClassModal(id) {
  const item = classesData.find(
    (classItem) => classItem.id === id
  );

  if (!item) {
    return;
  }

  const modal = document.querySelector("#class-view-modal");
  const content = document.querySelector("#class-view-content");

  if (!modal || !content) {
    return;
  }

  content.innerHTML = `
    <div class="class-details-grid">

      <div class="class-detail-item">
        <span>Class</span>
        <strong>${escapeHtml(item.className)}</strong>
      </div>

      <div class="class-detail-item">
        <span>Section</span>
        <strong>Section ${escapeHtml(item.section)}</strong>
      </div>

      <div class="class-detail-item">
        <span>Class Teacher</span>
        <strong>
          ${escapeHtml(item.classTeacher || "Not Assigned")}
        </strong>
      </div>

      <div class="class-detail-item">
        <span>Total Students</span>
        <strong>${Number(item.students) || 0}</strong>
      </div>

      <div class="class-detail-item">
        <span>Room</span>
        <strong>
          ${escapeHtml(item.room || "Not Assigned")}
        </strong>
      </div>

      <div class="class-detail-item">
        <span>Status</span>
        <strong>
          ${escapeHtml(item.status)}
        </strong>
      </div>

    </div>
  `;

  modal.style.display = "flex";
}

/* =========================================
   REFRESH
========================================= */

function refreshClasses() {
  classSearchText = "";
  classFilterValue = "All";
  sectionFilterValue = "All";

  const searchInput = document.querySelector("#class-search");
  const classFilter = document.querySelector("#class-filter");
  const sectionFilter = document.querySelector("#section-filter");

  if (searchInput) {
    searchInput.value = "";
  }

  if (classFilter) {
    classFilter.value = "All";
  }

  if (sectionFilter) {
    sectionFilter.value = "All";
  }

  updateClassSummary();
  renderClasses();

  alert("Classes data refreshed.");
}

/* =========================================
   UPDATE FILTER DROPDOWNS
========================================= */

function updateFilterDropdowns() {
  const classFilter = document.querySelector("#class-filter");
  const sectionFilter = document.querySelector("#section-filter");

  if (classFilter) {
    const currentValue = classFilterValue;

    classFilter.innerHTML = `
      <option value="All">All Classes</option>
      ${getClassFilterOptions()}
    `;

    classFilter.value =
      [...classFilter.options].some(
        (option) => option.value === currentValue
      )
        ? currentValue
        : "All";

    classFilterValue = classFilter.value;
  }

  if (sectionFilter) {
    const currentValue = sectionFilterValue;

    sectionFilter.innerHTML = `
      <option value="All">All Sections</option>
      ${getSectionFilterOptions()}
    `;

    sectionFilter.value =
      [...sectionFilter.options].some(
        (option) => option.value === currentValue
      )
        ? currentValue
        : "All";

    sectionFilterValue = sectionFilter.value;
  }
}

/* =========================================
   CLOSE MODALS
========================================= */

function closeClassFormModal() {
  const modal = document.querySelector("#class-form-modal");

  if (modal) {
    modal.style.display = "none";
  }

  editingClassId = null;
}

function closeClassViewModal() {
  const modal = document.querySelector("#class-view-modal");

  if (modal) {
    modal.style.display = "none";
  }
}

/* =========================================
   ESCAPE KEY
========================================= */

function handleClassEscapeKey(event) {
  if (event.key !== "Escape") {
    return;
  }

  closeClassFormModal();
  closeClassViewModal();
}

/* =========================================
   HELPERS
========================================= */

function getFieldValue(selector) {
  const element = document.querySelector(selector);

  return element ? element.value.trim() : "";
}

function setFieldValue(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.value = value ?? "";
  }
}

function getStatusClass(status) {
  return status === "Active"
    ? "class-status-active"
    : "class-status-inactive";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}