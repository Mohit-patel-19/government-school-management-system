import "./AdminStudents.css";

/* =========================================
   STUDENTS DATA
========================================= */

let studentsData = [
  {
    id: 1,
    admissionNo: "ADM001",
    name: "Aarav Sharma",
    fatherName: "Rajesh Sharma",
    motherName: "Sunita Sharma",
    className: "10",
    section: "A",
    rollNo: "1",
    gender: "Male",
    dob: "2010-05-12",
    mobile: "9876543210",
    address: "Udaipur, Rajasthan",
    status: "Active"
  },
  {
    id: 2,
    admissionNo: "ADM002",
    name: "Priya Patel",
    fatherName: "Mahesh Patel",
    motherName: "Kiran Patel",
    className: "10",
    section: "A",
    rollNo: "2",
    gender: "Female",
    dob: "2010-08-20",
    mobile: "9876543211",
    address: "Rishabhdev, Rajasthan",
    status: "Active"
  },
  {
    id: 3,
    admissionNo: "ADM003",
    name: "Rohan Singh",
    fatherName: "Mohan Singh",
    motherName: "Rekha Singh",
    className: "9",
    section: "B",
    rollNo: "15",
    gender: "Male",
    dob: "2011-03-18",
    mobile: "9876543212",
    address: "Udaipur, Rajasthan",
    status: "Active"
  },
  {
    id: 4,
    admissionNo: "ADM004",
    name: "Anjali Meena",
    fatherName: "Ramesh Meena",
    motherName: "Kamla Meena",
    className: "8",
    section: "A",
    rollNo: "8",
    gender: "Female",
    dob: "2012-01-25",
    mobile: "9876543213",
    address: "Kherwara, Rajasthan",
    status: "Active"
  },
  {
    id: 5,
    admissionNo: "ADM005",
    name: "Vikas Kumar",
    fatherName: "Suresh Kumar",
    motherName: "Poonam Kumar",
    className: "7",
    section: "B",
    rollNo: "12",
    gender: "Male",
    dob: "2013-06-10",
    mobile: "9876543214",
    address: "Salumber, Rajasthan",
    status: "Inactive"
  }
];


/* =========================================
   CURRENT STATE
========================================= */

let searchText = "";
let selectedClass = "All";
let selectedStatus = "All";
let editingStudentId = null;


/* =========================================
   ADMIN STUDENTS PAGE
========================================= */

export function AdminStudents() {

  return `
    <div class="admin-students" id="admin-students-page">

      <!-- PAGE HEADER -->
      <div class="admin-students-header">

        <div>
          <h1>Students</h1>
          <p>Manage all school students</p>
        </div>

        <button
          type="button"
          class="admin-btn admin-btn-primary"
          id="add-student-btn"
        >
          + Add Student
        </button>

      </div>


      <!-- SUMMARY CARDS -->
      <div class="students-summary-grid">

        <div class="student-summary-card">
          <div>
            <span>Total Students</span>
            <strong id="total-students-count">0</strong>
          </div>
          <div class="summary-icon">👨‍🎓</div>
        </div>

        <div class="student-summary-card">
          <div>
            <span>Active Students</span>
            <strong id="active-students-count">0</strong>
          </div>
          <div class="summary-icon">✅</div>
        </div>

        <div class="student-summary-card">
          <div>
            <span>Inactive Students</span>
            <strong id="inactive-students-count">0</strong>
          </div>
          <div class="summary-icon">⏸️</div>
        </div>

        <div class="student-summary-card">
          <div>
            <span>Classes</span>
            <strong id="classes-count">0</strong>
          </div>
          <div class="summary-icon">🏫</div>
        </div>

      </div>


      <!-- TOOLBAR -->
      <div class="students-toolbar">

        <div class="student-search-box">
          <input
            type="text"
            id="student-search-input"
            placeholder="Search by name, admission no or mobile..."
            autocomplete="off"
          />
        </div>

        <select id="student-class-filter">
          <option value="All">All Classes</option>
        </select>

        <select id="student-status-filter">
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="button"
          class="admin-btn admin-btn-secondary"
          id="refresh-students-btn"
        >
          ↻ Refresh
        </button>

      </div>


      <!-- TABLE -->
      <div class="students-table-wrapper">

        <table class="students-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Admission No.</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Roll No.</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody id="students-table-body"></tbody>

        </table>

        <div
          id="students-empty-state"
          class="students-empty-state"
          style="display:none;"
        >
          <div>📚</div>
          <h3>No students found</h3>
          <p>Try changing your search or filters.</p>
        </div>

      </div>


      <!-- ADD / EDIT MODAL -->
      <div
        id="student-form-modal"
        class="student-modal"
        style="display:none;"
      >

        <div class="student-modal-box">

          <div class="student-modal-header">

            <div>
              <h2 id="student-form-title">Add Student</h2>
              <p>Enter student information</p>
            </div>

            <button
              type="button"
              class="student-modal-close"
              id="close-student-form"
            >
              ×
            </button>

          </div>


          <form id="student-form">

            <input
              type="hidden"
              id="student-edit-id"
            />


            <div class="student-form-grid">

              <div class="student-form-group">
                <label>Student Name *</label>
                <input
                  type="text"
                  id="student-name"
                  required
                  maxlength="100"
                  placeholder="Enter student name"
                />
              </div>


              <div class="student-form-group">
                <label>Admission No. *</label>
                <input
                  type="text"
                  id="student-admission"
                  required
                  maxlength="30"
                  placeholder="Enter admission number"
                />
              </div>


              <div class="student-form-group">
                <label>Father Name *</label>
                <input
                  type="text"
                  id="student-father"
                  required
                  maxlength="100"
                  placeholder="Enter father name"
                />
              </div>


              <div class="student-form-group">
                <label>Mother Name</label>
                <input
                  type="text"
                  id="student-mother"
                  maxlength="100"
                  placeholder="Enter mother name"
                />
              </div>


              <div class="student-form-group">
                <label>Class *</label>
                <select id="student-class" required>
                  <option value="">Select Class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>


              <div class="student-form-group">
                <label>Section *</label>
                <select id="student-section" required>
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>


              <div class="student-form-group">
                <label>Roll No. *</label>
                <input
                  type="text"
                  id="student-roll"
                  required
                  maxlength="10"
                  placeholder="Enter roll number"
                />
              </div>


              <div class="student-form-group">
                <label>Gender *</label>
                <select id="student-gender" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>


              <div class="student-form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  id="student-dob"
                />
              </div>


              <div class="student-form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  id="student-mobile"
                  required
                  maxlength="10"
                  inputmode="numeric"
                  placeholder="10 digit mobile number"
                />
              </div>


              <div class="student-form-group">
                <label>Status *</label>
                <select id="student-status" required>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>


              <div class="student-form-group student-full-width">
                <label>Address</label>
                <textarea
                  id="student-address"
                  rows="3"
                  maxlength="300"
                  placeholder="Enter address"
                ></textarea>
              </div>

            </div>


            <div class="student-form-actions">

              <button
                type="button"
                class="admin-btn admin-btn-secondary"
                id="cancel-student-form"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="admin-btn admin-btn-primary"
                id="save-student-btn"
              >
                Save Student
              </button>

            </div>

          </form>

        </div>

      </div>


      <!-- VIEW MODAL -->
      <div
        id="student-view-modal"
        class="student-modal"
        style="display:none;"
      >

        <div class="student-modal-box">

          <div class="student-modal-header">

            <div>
              <h2>Student Details</h2>
              <p>Complete student information</p>
            </div>

            <button
              type="button"
              class="student-modal-close"
              id="close-student-view"
            >
              ×
            </button>

          </div>

          <div id="student-view-content"></div>

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   SETUP
========================================= */

export function setupAdminStudents() {

  const root = document.getElementById("admin-students-page");

  if (!root) {
    console.error("AdminStudents: root element not found.");
    return;
  }

  populateClassFilter(root);
  renderStudents(root);

  /* -----------------------------------------
     Add Student
  ----------------------------------------- */

  const addButton = root.querySelector("#add-student-btn");

  if (addButton) {
    addButton.addEventListener("click", () => {
      openAddModal(root);
    });
  }


  /* -----------------------------------------
     Search
  ----------------------------------------- */

  const searchInput = root.querySelector("#student-search-input");

  if (searchInput) {

    searchInput.addEventListener("input", (event) => {

      searchText = event.target.value.trim().toLowerCase();

      renderStudents(root);

    });

  }


  /* -----------------------------------------
     Class Filter
  ----------------------------------------- */

  const classFilter = root.querySelector("#student-class-filter");

  if (classFilter) {

    classFilter.addEventListener("change", (event) => {

      selectedClass = event.target.value;

      renderStudents(root);

    });

  }


  /* -----------------------------------------
     Status Filter
  ----------------------------------------- */

  const statusFilter = root.querySelector("#student-status-filter");

  if (statusFilter) {

    statusFilter.addEventListener("change", (event) => {

      selectedStatus = event.target.value;

      renderStudents(root);

    });

  }


  /* -----------------------------------------
     Refresh
  ----------------------------------------- */

  const refreshButton = root.querySelector("#refresh-students-btn");

  if (refreshButton) {

    refreshButton.addEventListener("click", () => {

      searchText = "";
      selectedClass = "All";
      selectedStatus = "All";

      if (searchInput) {
        searchInput.value = "";
      }

      if (classFilter) {
        classFilter.value = "All";
      }

      if (statusFilter) {
        statusFilter.value = "All";
      }

      renderStudents(root);

    });

  }


  /* -----------------------------------------
     Student Table Actions
  ----------------------------------------- */

  const tableBody = root.querySelector("#students-table-body");

  if (tableBody) {

    tableBody.addEventListener("click", (event) => {

      const button = event.target.closest("[data-student-action]");

      if (!button) {
        return;
      }

      const action = button.dataset.studentAction;
      const studentId = Number(button.dataset.studentId);

      if (!studentId) {
        return;
      }


      if (action === "view") {
        openViewModal(root, studentId);
      }


      if (action === "edit") {
        openEditModal(root, studentId);
      }


      if (action === "delete") {
        deleteStudent(root, studentId);
      }

    });

  }


  /* -----------------------------------------
     Add/Edit Form
  ----------------------------------------- */

  const form = root.querySelector("#student-form");

  if (form) {

    form.addEventListener("submit", (event) => {

      event.preventDefault();

      saveStudent(root);

    });

  }


  /* -----------------------------------------
     Close Form Modal
  ----------------------------------------- */

  const closeForm = root.querySelector("#close-student-form");

  if (closeForm) {

    closeForm.addEventListener("click", () => {
      closeFormModal(root);
    });

  }


  const cancelForm = root.querySelector("#cancel-student-form");

  if (cancelForm) {

    cancelForm.addEventListener("click", () => {
      closeFormModal(root);
    });

  }


  /* -----------------------------------------
     Close View Modal
  ----------------------------------------- */

  const closeView = root.querySelector("#close-student-view");

  if (closeView) {

    closeView.addEventListener("click", () => {
      closeViewModal(root);
    });

  }


  /* -----------------------------------------
     Close Modal On Background Click
  ----------------------------------------- */

  const formModal = root.querySelector("#student-form-modal");

  if (formModal) {

    formModal.addEventListener("click", (event) => {

      if (event.target === formModal) {
        closeFormModal(root);
      }

    });

  }


  const viewModal = root.querySelector("#student-view-modal");

  if (viewModal) {

    viewModal.addEventListener("click", (event) => {

      if (event.target === viewModal) {
        closeViewModal(root);
      }

    });

  }


  /* -----------------------------------------
     Escape Key
  ----------------------------------------- */

  root._adminStudentsKeyHandler = (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeFormModal(root);
    closeViewModal(root);

  };

  document.addEventListener(
    "keydown",
    root._adminStudentsKeyHandler
  );

}


/* =========================================
   POPULATE CLASS FILTER
========================================= */

function populateClassFilter(root) {

  const filter = root.querySelector("#student-class-filter");

  if (!filter) {
    return;
  }

  const classes = [
    ...new Set(
      studentsData.map((student) => student.className)
    )
  ].sort((a, b) => Number(a) - Number(b));


  filter.innerHTML = `
    <option value="All">All Classes</option>

    ${classes
      .map(
        (className) =>
          `<option value="${escapeHtml(className)}">
            Class ${escapeHtml(className)}
          </option>`
      )
      .join("")}
  `;

  filter.value = selectedClass;

}


/* =========================================
   RENDER STUDENTS
========================================= */

function renderStudents(root) {

  updateSummary(root);

  const tbody = root.querySelector("#students-table-body");
  const emptyState = root.querySelector("#students-empty-state");

  if (!tbody) {
    return;
  }


  const filteredStudents = studentsData.filter((student) => {

    const searchMatch =
      !searchText ||
      student.name.toLowerCase().includes(searchText) ||
      student.admissionNo.toLowerCase().includes(searchText) ||
      student.mobile.includes(searchText) ||
      student.className.includes(searchText);


    const classMatch =
      selectedClass === "All" ||
      student.className === selectedClass;


    const statusMatch =
      selectedStatus === "All" ||
      student.status === selectedStatus;


    return searchMatch && classMatch && statusMatch;

  });


  if (filteredStudents.length === 0) {

    tbody.innerHTML = "";

    if (emptyState) {
      emptyState.style.display = "block";
    }

    return;

  }


  if (emptyState) {
    emptyState.style.display = "none";
  }


  tbody.innerHTML = filteredStudents
    .map((student, index) => {

      const statusClass =
        student.status === "Active"
          ? "student-status-active"
          : "student-status-inactive";


      return `
        <tr>

          <td>${index + 1}</td>

          <td>
            <strong>
              ${escapeHtml(student.admissionNo)}
            </strong>
          </td>

          <td>
            <div class="student-name-cell">
              <div class="student-avatar">
                ${escapeHtml(
                  student.name.charAt(0).toUpperCase()
                )}
              </div>

              <div>
                <strong>
                  ${escapeHtml(student.name)}
                </strong>

                <small>
                  ${escapeHtml(student.gender)}
                </small>
              </div>
            </div>
          </td>

          <td>
            Class ${escapeHtml(student.className)}
          </td>

          <td>
            ${escapeHtml(student.section)}
          </td>

          <td>
            ${escapeHtml(student.rollNo)}
          </td>

          <td>
            ${escapeHtml(student.mobile)}
          </td>

          <td>
            <span class="student-status ${statusClass}">
              ${escapeHtml(student.status)}
            </span>
          </td>

          <td>

            <div class="student-action-buttons">

              <button
                type="button"
                class="student-action-btn view"
                title="View Student"
                data-student-action="view"
                data-student-id="${student.id}"
              >
                👁
              </button>

              <button
                type="button"
                class="student-action-btn edit"
                title="Edit Student"
                data-student-action="edit"
                data-student-id="${student.id}"
              >
                ✏️
              </button>

              <button
                type="button"
                class="student-action-btn delete"
                title="Delete Student"
                data-student-action="delete"
                data-student-id="${student.id}"
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
   UPDATE SUMMARY
========================================= */

function updateSummary(root) {

  const total = studentsData.length;

  const active = studentsData.filter(
    (student) => student.status === "Active"
  ).length;

  const inactive = studentsData.filter(
    (student) => student.status === "Inactive"
  ).length;

  const classes = new Set(
    studentsData.map((student) => student.className)
  ).size;


  const totalElement =
    root.querySelector("#total-students-count");

  const activeElement =
    root.querySelector("#active-students-count");

  const inactiveElement =
    root.querySelector("#inactive-students-count");

  const classesElement =
    root.querySelector("#classes-count");


  if (totalElement) {
    totalElement.textContent = total;
  }

  if (activeElement) {
    activeElement.textContent = active;
  }

  if (inactiveElement) {
    inactiveElement.textContent = inactive;
  }

  if (classesElement) {
    classesElement.textContent = classes;
  }

}


/* =========================================
   OPEN ADD MODAL
========================================= */

function openAddModal(root) {

  editingStudentId = null;

  const modal =
    root.querySelector("#student-form-modal");

  const form =
    root.querySelector("#student-form");

  const title =
    root.querySelector("#student-form-title");

  const saveButton =
    root.querySelector("#save-student-btn");


  if (!modal || !form) {
    return;
  }


  form.reset();


  const hiddenId =
    root.querySelector("#student-edit-id");

  if (hiddenId) {
    hiddenId.value = "";
  }


  if (title) {
    title.textContent = "Add Student";
  }


  if (saveButton) {
    saveButton.textContent = "Save Student";
  }


  const status =
    root.querySelector("#student-status");

  if (status) {
    status.value = "Active";
  }


  modal.style.display = "flex";

  setTimeout(() => {

    const nameInput =
      root.querySelector("#student-name");

    if (nameInput) {
      nameInput.focus();
    }

  }, 50);

}


/* =========================================
   OPEN EDIT MODAL
========================================= */

function openEditModal(root, studentId) {

  const student = studentsData.find(
    (item) => item.id === studentId
  );


  if (!student) {
    alert("Student not found.");
    return;
  }


  editingStudentId = studentId;


  const modal =
    root.querySelector("#student-form-modal");


  if (!modal) {
    return;
  }


  setValue(root, "#student-edit-id", student.id);
  setValue(root, "#student-name", student.name);
  setValue(root, "#student-admission", student.admissionNo);
  setValue(root, "#student-father", student.fatherName);
  setValue(root, "#student-mother", student.motherName);
  setValue(root, "#student-class", student.className);
  setValue(root, "#student-section", student.section);
  setValue(root, "#student-roll", student.rollNo);
  setValue(root, "#student-gender", student.gender);
  setValue(root, "#student-dob", student.dob);
  setValue(root, "#student-mobile", student.mobile);
  setValue(root, "#student-status", student.status);
  setValue(root, "#student-address", student.address);


  const title =
    root.querySelector("#student-form-title");

  if (title) {
    title.textContent = "Edit Student";
  }


  const saveButton =
    root.querySelector("#save-student-btn");

  if (saveButton) {
    saveButton.textContent = "Update Student";
  }


  modal.style.display = "flex";


  setTimeout(() => {

    const nameInput =
      root.querySelector("#student-name");

    if (nameInput) {
      nameInput.focus();
    }

  }, 50);

}


/* =========================================
   SAVE STUDENT
========================================= */

function saveStudent(root) {

  const name =
    getValue(root, "#student-name");

  const admissionNo =
    getValue(root, "#student-admission");

  const fatherName =
    getValue(root, "#student-father");

  const motherName =
    getValue(root, "#student-mother");

  const className =
    getValue(root, "#student-class");

  const section =
    getValue(root, "#student-section");

  const rollNo =
    getValue(root, "#student-roll");

  const gender =
    getValue(root, "#student-gender");

  const dob =
    getValue(root, "#student-dob");

  const mobile =
    getValue(root, "#student-mobile");

  const status =
    getValue(root, "#student-status");

  const address =
    getValue(root, "#student-address");


  /* -----------------------------------------
     Validation
  ----------------------------------------- */

  if (!name) {
    alert("Please enter student name.");
    return;
  }

  if (!admissionNo) {
    alert("Please enter admission number.");
    return;
  }

  if (!fatherName) {
    alert("Please enter father name.");
    return;
  }

  if (!className) {
    alert("Please select class.");
    return;
  }

  if (!section) {
    alert("Please select section.");
    return;
  }

  if (!rollNo) {
    alert("Please enter roll number.");
    return;
  }

  if (!gender) {
    alert("Please select gender.");
    return;
  }

  if (!mobile) {
    alert("Please enter mobile number.");
    return;
  }


  if (!/^[6-9]\d{9}$/.test(mobile)) {

    alert(
      "Please enter a valid 10-digit Indian mobile number."
    );

    return;
  }


  /* -----------------------------------------
     Duplicate Admission Number
  ----------------------------------------- */

  const duplicate = studentsData.find(
    (student) =>
      student.admissionNo.toLowerCase() ===
        admissionNo.toLowerCase() &&
      student.id !== editingStudentId
  );


  if (duplicate) {

    alert(
      "This admission number already exists."
    );

    return;
  }


  /* -----------------------------------------
     Student Object
  ----------------------------------------- */

  const studentObject = {

    id:
      editingStudentId !== null
        ? editingStudentId
        : createStudentId(),

    admissionNo,
    name,
    fatherName,
    motherName,
    className,
    section,
    rollNo,
    gender,
    dob,
    mobile,
    address,
    status

  };


  /* -----------------------------------------
     EDIT
  ----------------------------------------- */

  if (editingStudentId !== null) {

    const index = studentsData.findIndex(
      (student) =>
        student.id === editingStudentId
    );


    if (index !== -1) {

      studentsData[index] =
        studentObject;

      alert("Student updated successfully.");

    }

  }


  /* -----------------------------------------
     ADD
  ----------------------------------------- */

  else {

    studentsData.push(studentObject);

    alert("Student added successfully.");

  }


  /* -----------------------------------------
     Reset State
  ----------------------------------------- */

  editingStudentId = null;


  closeFormModal(root);

  populateClassFilter(root);

  renderStudents(root);

}


/* =========================================
   DELETE STUDENT
========================================= */

function deleteStudent(root, studentId) {

  const student = studentsData.find(
    (item) => item.id === studentId
  );


  if (!student) {
    alert("Student not found.");
    return;
  }


  const confirmed = confirm(
    `Are you sure you want to delete "${student.name}"?`
  );


  if (!confirmed) {
    return;
  }


  studentsData = studentsData.filter(
    (item) => item.id !== studentId
  );


  populateClassFilter(root);

  renderStudents(root);


  alert("Student deleted successfully.");

}


/* =========================================
   VIEW STUDENT
========================================= */

function openViewModal(root, studentId) {

  const student = studentsData.find(
    (item) => item.id === studentId
  );


  if (!student) {
    alert("Student not found.");
    return;
  }


  const modal =
    root.querySelector("#student-view-modal");

  const content =
    root.querySelector("#student-view-content");


  if (!modal || !content) {
    return;
  }


  content.innerHTML = `

    <div class="student-details-grid">

      <div class="student-detail-item">
        <span>Student Name</span>
        <strong>
          ${escapeHtml(student.name)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Admission Number</span>
        <strong>
          ${escapeHtml(student.admissionNo)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Father Name</span>
        <strong>
          ${escapeHtml(student.fatherName)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Mother Name</span>
        <strong>
          ${escapeHtml(student.motherName || "-")}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Class</span>
        <strong>
          Class ${escapeHtml(student.className)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Section</span>
        <strong>
          ${escapeHtml(student.section)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Roll Number</span>
        <strong>
          ${escapeHtml(student.rollNo)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Gender</span>
        <strong>
          ${escapeHtml(student.gender)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Date of Birth</span>
        <strong>
          ${escapeHtml(student.dob || "-")}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Mobile</span>
        <strong>
          ${escapeHtml(student.mobile)}
        </strong>
      </div>

      <div class="student-detail-item">
        <span>Status</span>
        <strong>
          ${escapeHtml(student.status)}
        </strong>
      </div>

      <div class="student-detail-item student-detail-full">
        <span>Address</span>
        <strong>
          ${escapeHtml(student.address || "-")}
        </strong>
      </div>

    </div>

    <div class="student-view-actions">

      <button
        type="button"
        class="admin-btn admin-btn-secondary"
        id="view-close-btn"
      >
        Close
      </button>

      <button
        type="button"
        class="admin-btn admin-btn-primary"
        id="view-edit-btn"
      >
        Edit Student
      </button>

    </div>

  `;


  const closeButton =
    content.querySelector("#view-close-btn");

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      () => {
        closeViewModal(root);
      }
    );

  }


  const editButton =
    content.querySelector("#view-edit-btn");

  if (editButton) {

    editButton.addEventListener(
      "click",
      () => {

        closeViewModal(root);

        openEditModal(
          root,
          studentId
        );

      }
    );

  }


  modal.style.display = "flex";

}


/* =========================================
   CLOSE FORM MODAL
========================================= */

function closeFormModal(root) {

  const modal =
    root.querySelector("#student-form-modal");

  if (modal) {
    modal.style.display = "none";
  }

  editingStudentId = null;

}


/* =========================================
   CLOSE VIEW MODAL
========================================= */

function closeViewModal(root) {

  const modal =
    root.querySelector("#student-view-modal");

  if (modal) {
    modal.style.display = "none";
  }

}


/* =========================================
   GET INPUT VALUE
========================================= */

function getValue(root, selector) {

  const element =
    root.querySelector(selector);

  if (!element) {
    return "";
  }

  return element.value.trim();

}


/* =========================================
   SET INPUT VALUE
========================================= */

function setValue(root, selector, value) {

  const element =
    root.querySelector(selector);

  if (!element) {
    return;
  }

  element.value =
    value === null ||
    value === undefined
      ? ""
      : String(value);

}


/* =========================================
   CREATE UNIQUE ID
========================================= */

function createStudentId() {

  let id =
    Date.now() +
    Math.floor(Math.random() * 1000);


  while (
    studentsData.some(
      (student) => student.id === id
    )
  ) {

    id++;

  }


  return id;

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHtml(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}