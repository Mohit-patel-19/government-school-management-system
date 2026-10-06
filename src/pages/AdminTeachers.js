/* =========================================
   ADMIN TEACHERS
========================================= */

let teachersData = [
  {
    id: 1,
    employeeId: "TCH001",
    name: "Rajesh Sharma",
    fatherName: "Mohan Sharma",
    subject: "Mathematics",
    qualification: "M.Sc, B.Ed",
    mobile: "9876543210",
    email: "rajesh.sharma@school.com",
    gender: "Male",
    joiningDate: "2021-07-01",
    classes: "9, 10",
    status: "Active"
  },
  {
    id: 2,
    employeeId: "TCH002",
    name: "Sunita Patel",
    fatherName: "Ramesh Patel",
    subject: "Science",
    qualification: "M.Sc, B.Ed",
    mobile: "9876543211",
    email: "sunita.patel@school.com",
    gender: "Female",
    joiningDate: "2022-07-15",
    classes: "8, 9",
    status: "Active"
  },
  {
    id: 3,
    employeeId: "TCH003",
    name: "Amit Singh",
    fatherName: "Kamal Singh",
    subject: "English",
    qualification: "M.A, B.Ed",
    mobile: "9876543212",
    email: "amit.singh@school.com",
    gender: "Male",
    joiningDate: "2020-08-10",
    classes: "6, 7",
    status: "Active"
  },
  {
    id: 4,
    employeeId: "TCH004",
    name: "Priya Meena",
    fatherName: "Suresh Meena",
    subject: "Hindi",
    qualification: "M.A, B.Ed",
    mobile: "9876543213",
    email: "priya.meena@school.com",
    gender: "Female",
    joiningDate: "2023-01-10",
    classes: "6, 8",
    status: "Active"
  },
  {
    id: 5,
    employeeId: "TCH005",
    name: "Vikas Kumar",
    fatherName: "Rakesh Kumar",
    subject: "Computer Science",
    qualification: "MCA, B.Ed",
    mobile: "9876543214",
    email: "vikas.kumar@school.com",
    gender: "Male",
    joiningDate: "2024-07-01",
    classes: "9, 10, 11, 12",
    status: "Inactive"
  }
];


/* =========================================
   STATE
========================================= */

let teacherSearchText = "";
let teacherSubjectFilter = "All";
let teacherStatusFilter = "All";
let editingTeacherId = null;


/* =========================================
   ADMIN TEACHERS PAGE
========================================= */

export function AdminTeachers() {

  return `
    <div class="admin-teachers" id="admin-teachers-page">

      <!-- HEADER -->
      <div class="admin-teachers-header">

        <div>
          <h1>Teachers</h1>
          <p>Manage all school teachers</p>
        </div>

        <button
          type="button"
          class="admin-btn admin-btn-primary"
          id="add-teacher-btn"
        >
          + Add Teacher
        </button>

      </div>


      <!-- SUMMARY -->
      <div class="teachers-summary-grid">

        <div class="teacher-summary-card">
          <div>
            <span>Total Teachers</span>
            <strong id="total-teachers-count">0</strong>
          </div>
          <div class="teacher-summary-icon">👨‍🏫</div>
        </div>

        <div class="teacher-summary-card">
          <div>
            <span>Active Teachers</span>
            <strong id="active-teachers-count">0</strong>
          </div>
          <div class="teacher-summary-icon">✅</div>
        </div>

        <div class="teacher-summary-card">
          <div>
            <span>Inactive Teachers</span>
            <strong id="inactive-teachers-count">0</strong>
          </div>
          <div class="teacher-summary-icon">⏸️</div>
        </div>

        <div class="teacher-summary-card">
          <div>
            <span>Subjects</span>
            <strong id="teacher-subjects-count">0</strong>
          </div>
          <div class="teacher-summary-icon">📚</div>
        </div>

      </div>


      <!-- TOOLBAR -->
      <div class="teachers-toolbar">

        <div class="teacher-search-box">
          <input
            type="text"
            id="teacher-search-input"
            placeholder="Search by name, employee ID, subject or mobile..."
            autocomplete="off"
          />
        </div>

        <select id="teacher-subject-filter">
          <option value="All">All Subjects</option>
        </select>

        <select id="teacher-status-filter">
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="button"
          class="admin-btn admin-btn-secondary"
          id="refresh-teachers-btn"
        >
          ↻ Refresh
        </button>

      </div>


      <!-- TABLE -->
      <div class="teachers-table-wrapper">

        <table class="teachers-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Employee ID</th>
              <th>Teacher Name</th>
              <th>Subject</th>
              <th>Qualification</th>
              <th>Mobile</th>
              <th>Classes</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody id="teachers-table-body"></tbody>

        </table>


        <div
          id="teachers-empty-state"
          class="teachers-empty-state"
          style="display:none;"
        >
          <div>👨‍🏫</div>
          <h3>No teachers found</h3>
          <p>Try changing your search or filters.</p>
        </div>

      </div>


      <!-- ADD / EDIT MODAL -->
      <div
        id="teacher-form-modal"
        class="teacher-modal"
        style="display:none;"
      >

        <div class="teacher-modal-box">

          <div class="teacher-modal-header">

            <div>
              <h2 id="teacher-form-title">Add Teacher</h2>
              <p>Enter teacher information</p>
            </div>

            <button
              type="button"
              class="teacher-modal-close"
              id="close-teacher-form"
            >
              ×
            </button>

          </div>


          <form id="teacher-form">

            <input
              type="hidden"
              id="teacher-edit-id"
            />


            <div class="teacher-form-grid">

              <div class="teacher-form-group">
                <label>Teacher Name *</label>
                <input
                  type="text"
                  id="teacher-name"
                  required
                  maxlength="100"
                  placeholder="Enter teacher name"
                />
              </div>


              <div class="teacher-form-group">
                <label>Employee ID *</label>
                <input
                  type="text"
                  id="teacher-employee-id"
                  required
                  maxlength="30"
                  placeholder="Enter employee ID"
                />
              </div>


              <div class="teacher-form-group">
                <label>Father Name</label>
                <input
                  type="text"
                  id="teacher-father-name"
                  maxlength="100"
                  placeholder="Enter father name"
                />
              </div>


              <div class="teacher-form-group">
                <label>Subject *</label>
                <select id="teacher-subject" required>

                  <option value="">
                    Select Subject
                  </option>

                  <option value="Mathematics">
                    Mathematics
                  </option>

                  <option value="Science">
                    Science
                  </option>

                  <option value="English">
                    English
                  </option>

                  <option value="Hindi">
                    Hindi
                  </option>

                  <option value="Social Science">
                    Social Science
                  </option>

                  <option value="Computer Science">
                    Computer Science
                  </option>

                  <option value="Sanskrit">
                    Sanskrit
                  </option>

                  <option value="Physical Education">
                    Physical Education
                  </option>

                  <option value="Art">
                    Art
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>
              </div>


              <div class="teacher-form-group">
                <label>Qualification *</label>
                <input
                  type="text"
                  id="teacher-qualification"
                  required
                  maxlength="100"
                  placeholder="e.g. M.Sc, B.Ed"
                />
              </div>


              <div class="teacher-form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  id="teacher-mobile"
                  required
                  maxlength="10"
                  inputmode="numeric"
                  placeholder="10 digit mobile number"
                />
              </div>


              <div class="teacher-form-group">
                <label>Email</label>
                <input
                  type="email"
                  id="teacher-email"
                  maxlength="120"
                  placeholder="teacher@example.com"
                />
              </div>


              <div class="teacher-form-group">
                <label>Gender *</label>
                <select id="teacher-gender" required>

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>
              </div>


              <div class="teacher-form-group">
                <label>Joining Date</label>
                <input
                  type="date"
                  id="teacher-joining-date"
                />
              </div>


              <div class="teacher-form-group">
                <label>Classes</label>
                <input
                  type="text"
                  id="teacher-classes"
                  maxlength="100"
                  placeholder="e.g. 9, 10, 11"
                />
              </div>


              <div class="teacher-form-group">
                <label>Status *</label>

                <select
                  id="teacher-status"
                  required
                >

                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>

                </select>

              </div>

            </div>


            <!-- FORM BUTTONS -->
            <div class="teacher-form-actions">

              <button
                type="button"
                class="admin-btn admin-btn-secondary"
                id="cancel-teacher-form"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="admin-btn admin-btn-primary"
                id="save-teacher-btn"
              >
                Save Teacher
              </button>

            </div>

          </form>

        </div>

      </div>


      <!-- VIEW MODAL -->
      <div
        id="teacher-view-modal"
        class="teacher-modal"
        style="display:none;"
      >

        <div class="teacher-modal-box">

          <div class="teacher-modal-header">

            <div>
              <h2>Teacher Details</h2>
              <p>Complete teacher information</p>
            </div>

            <button
              type="button"
              class="teacher-modal-close"
              id="close-teacher-view"
            >
              ×
            </button>

          </div>


          <div id="teacher-view-content"></div>

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   SETUP
========================================= */

export function setupAdminTeachers() {

  const root =
    document.getElementById(
      "admin-teachers-page"
    );

  if (!root) {
    console.error(
      "AdminTeachers: root element not found."
    );
    return;
  }


  populateSubjectFilter(root);
  renderTeachers(root);


  /* -----------------------------------------
     ADD
  ----------------------------------------- */

  const addButton =
    root.querySelector(
      "#add-teacher-btn"
    );

  if (addButton) {

    addButton.addEventListener(
      "click",
      () => {
        openAddTeacherModal(root);
      }
    );

  }


  /* -----------------------------------------
     SEARCH
  ----------------------------------------- */

  const searchInput =
    root.querySelector(
      "#teacher-search-input"
    );

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      (event) => {

        teacherSearchText =
          event.target.value
            .trim()
            .toLowerCase();

        renderTeachers(root);

      }
    );

  }


  /* -----------------------------------------
     SUBJECT FILTER
  ----------------------------------------- */

  const subjectFilter =
    root.querySelector(
      "#teacher-subject-filter"
    );

  if (subjectFilter) {

    subjectFilter.addEventListener(
      "change",
      (event) => {

        teacherSubjectFilter =
          event.target.value;

        renderTeachers(root);

      }
    );

  }


  /* -----------------------------------------
     STATUS FILTER
  ----------------------------------------- */

  const statusFilter =
    root.querySelector(
      "#teacher-status-filter"
    );

  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      (event) => {

        teacherStatusFilter =
          event.target.value;

        renderTeachers(root);

      }
    );

  }


  /* -----------------------------------------
     REFRESH
  ----------------------------------------- */

  const refreshButton =
    root.querySelector(
      "#refresh-teachers-btn"
    );

  if (refreshButton) {

    refreshButton.addEventListener(
      "click",
      () => {

        teacherSearchText = "";
        teacherSubjectFilter = "All";
        teacherStatusFilter = "All";

        if (searchInput) {
          searchInput.value = "";
        }

        if (subjectFilter) {
          subjectFilter.value = "All";
        }

        if (statusFilter) {
          statusFilter.value = "All";
        }

        renderTeachers(root);

      }
    );

  }


  /* -----------------------------------------
     TABLE ACTIONS
  ----------------------------------------- */

  const tableBody =
    root.querySelector(
      "#teachers-table-body"
    );

  if (tableBody) {

    tableBody.addEventListener(
      "click",
      (event) => {

        const button =
          event.target.closest(
            "[data-teacher-action]"
          );

        if (!button) {
          return;
        }


        const action =
          button.dataset.teacherAction;

        const teacherId =
          Number(
            button.dataset.teacherId
          );


        if (!teacherId) {
          return;
        }


        if (action === "view") {

          openViewTeacherModal(
            root,
            teacherId
          );

        }


        if (action === "edit") {

          openEditTeacherModal(
            root,
            teacherId
          );

        }


        if (action === "delete") {

          deleteTeacher(
            root,
            teacherId
          );

        }

      }
    );

  }


  /* -----------------------------------------
     FORM SUBMIT
  ----------------------------------------- */

  const form =
    root.querySelector(
      "#teacher-form"
    );

  if (form) {

    form.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        saveTeacher(root);

      }
    );

  }


  /* -----------------------------------------
     CLOSE FORM
  ----------------------------------------- */

  const closeForm =
    root.querySelector(
      "#close-teacher-form"
    );

  if (closeForm) {

    closeForm.addEventListener(
      "click",
      () => {
        closeTeacherFormModal(root);
      }
    );

  }


  const cancelForm =
    root.querySelector(
      "#cancel-teacher-form"
    );

  if (cancelForm) {

    cancelForm.addEventListener(
      "click",
      () => {
        closeTeacherFormModal(root);
      }
    );

  }


  /* -----------------------------------------
     CLOSE VIEW
  ----------------------------------------- */

  const closeView =
    root.querySelector(
      "#close-teacher-view"
    );

  if (closeView) {

    closeView.addEventListener(
      "click",
      () => {
        closeTeacherViewModal(root);
      }
    );

  }


  /* -----------------------------------------
     BACKGROUND CLICK
  ----------------------------------------- */

  const formModal =
    root.querySelector(
      "#teacher-form-modal"
    );

  if (formModal) {

    formModal.addEventListener(
      "click",
      (event) => {

        if (event.target === formModal) {
          closeTeacherFormModal(root);
        }

      }
    );

  }


  const viewModal =
    root.querySelector(
      "#teacher-view-modal"
    );

  if (viewModal) {

    viewModal.addEventListener(
      "click",
      (event) => {

        if (event.target === viewModal) {
          closeTeacherViewModal(root);
        }

      }
    );

  }


  /* -----------------------------------------
     ESCAPE KEY
  ----------------------------------------- */

  const keyHandler = (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeTeacherFormModal(root);
    closeTeacherViewModal(root);

  };


  root._teacherKeyHandler = keyHandler;

  document.addEventListener(
    "keydown",
    keyHandler
  );

}


/* =========================================
   SUBJECT FILTER
========================================= */

function populateSubjectFilter(root) {

  const filter =
    root.querySelector(
      "#teacher-subject-filter"
    );

  if (!filter) {
    return;
  }


  const subjects = [
    ...new Set(
      teachersData.map(
        (teacher) => teacher.subject
      )
    )
  ].sort();


  filter.innerHTML = `
    <option value="All">
      All Subjects
    </option>

    ${subjects
      .map(
        (subject) => `
          <option value="${escapeHtml(subject)}">
            ${escapeHtml(subject)}
          </option>
        `
      )
      .join("")}
  `;


  filter.value =
    teacherSubjectFilter;

}


/* =========================================
   RENDER TEACHERS
========================================= */

function renderTeachers(root) {

  updateTeacherSummary(root);


  const tbody =
    root.querySelector(
      "#teachers-table-body"
    );

  const emptyState =
    root.querySelector(
      "#teachers-empty-state"
    );


  if (!tbody) {
    return;
  }


  const filteredTeachers =
    teachersData.filter(
      (teacher) => {

        const searchMatch =
          !teacherSearchText ||
          teacher.name
            .toLowerCase()
            .includes(teacherSearchText) ||
          teacher.employeeId
            .toLowerCase()
            .includes(teacherSearchText) ||
          teacher.subject
            .toLowerCase()
            .includes(teacherSearchText) ||
          teacher.mobile.includes(
            teacherSearchText
          );


        const subjectMatch =
          teacherSubjectFilter === "All" ||
          teacher.subject ===
            teacherSubjectFilter;


        const statusMatch =
          teacherStatusFilter === "All" ||
          teacher.status ===
            teacherStatusFilter;


        return (
          searchMatch &&
          subjectMatch &&
          statusMatch
        );

      }
    );


  if (filteredTeachers.length === 0) {

    tbody.innerHTML = "";

    if (emptyState) {
      emptyState.style.display = "block";
    }

    return;

  }


  if (emptyState) {
    emptyState.style.display = "none";
  }


  tbody.innerHTML =
    filteredTeachers
      .map(
        (teacher, index) => {

          const statusClass =
            teacher.status === "Active"
              ? "teacher-status-active"
              : "teacher-status-inactive";


          return `
            <tr>

              <td>
                ${index + 1}
              </td>

              <td>
                <strong>
                  ${escapeHtml(
                    teacher.employeeId
                  )}
                </strong>
              </td>

              <td>

                <div class="teacher-name-cell">

                  <div class="teacher-avatar">
                    ${escapeHtml(
                      teacher.name
                        .charAt(0)
                        .toUpperCase()
                    )}
                  </div>

                  <div>

                    <strong>
                      ${escapeHtml(
                        teacher.name
                      )}
                    </strong>

                    <small>
                      ${escapeHtml(
                        teacher.gender
                      )}
                    </small>

                  </div>

                </div>

              </td>

              <td>
                ${escapeHtml(
                  teacher.subject
                )}
              </td>

              <td>
                ${escapeHtml(
                  teacher.qualification
                )}
              </td>

              <td>
                ${escapeHtml(
                  teacher.mobile
                )}
              </td>

              <td>
                ${escapeHtml(
                  teacher.classes || "-"
                )}
              </td>

              <td>

                <span
                  class="teacher-status ${statusClass}"
                >
                  ${escapeHtml(
                    teacher.status
                  )}
                </span>

              </td>

              <td>

                <div class="teacher-action-buttons">

                  <button
                    type="button"
                    class="teacher-action-btn view"
                    title="View Teacher"
                    data-teacher-action="view"
                    data-teacher-id="${teacher.id}"
                  >
                    👁
                  </button>

                  <button
                    type="button"
                    class="teacher-action-btn edit"
                    title="Edit Teacher"
                    data-teacher-action="edit"
                    data-teacher-id="${teacher.id}"
                  >
                    ✏️
                  </button>

                  <button
                    type="button"
                    class="teacher-action-btn delete"
                    title="Delete Teacher"
                    data-teacher-action="delete"
                    data-teacher-id="${teacher.id}"
                  >
                    🗑️
                  </button>

                </div>

              </td>

            </tr>
          `;

        }
      )
      .join("");

}


/* =========================================
   SUMMARY
========================================= */

function updateTeacherSummary(root) {

  const total =
    teachersData.length;


  const active =
    teachersData.filter(
      (teacher) =>
        teacher.status === "Active"
    ).length;


  const inactive =
    teachersData.filter(
      (teacher) =>
        teacher.status === "Inactive"
    ).length;


  const subjects =
    new Set(
      teachersData.map(
        (teacher) => teacher.subject
      )
    ).size;


  const totalElement =
    root.querySelector(
      "#total-teachers-count"
    );

  const activeElement =
    root.querySelector(
      "#active-teachers-count"
    );

  const inactiveElement =
    root.querySelector(
      "#inactive-teachers-count"
    );

  const subjectsElement =
    root.querySelector(
      "#teacher-subjects-count"
    );


  if (totalElement) {
    totalElement.textContent = total;
  }

  if (activeElement) {
    activeElement.textContent = active;
  }

  if (inactiveElement) {
    inactiveElement.textContent = inactive;
  }

  if (subjectsElement) {
    subjectsElement.textContent =
      subjects;
  }

}


/* =========================================
   ADD TEACHER
========================================= */

function openAddTeacherModal(root) {

  editingTeacherId = null;


  const modal =
    root.querySelector(
      "#teacher-form-modal"
    );

  const form =
    root.querySelector(
      "#teacher-form"
    );


  if (!modal || !form) {
    return;
  }


  form.reset();


  setValue(
    root,
    "#teacher-edit-id",
    ""
  );


  const title =
    root.querySelector(
      "#teacher-form-title"
    );

  if (title) {
    title.textContent =
      "Add Teacher";
  }


  const saveButton =
    root.querySelector(
      "#save-teacher-btn"
    );

  if (saveButton) {
    saveButton.textContent =
      "Save Teacher";
  }


  const status =
    root.querySelector(
      "#teacher-status"
    );

  if (status) {
    status.value = "Active";
  }


  modal.style.display = "flex";


  setTimeout(() => {

    const nameInput =
      root.querySelector(
        "#teacher-name"
      );

    if (nameInput) {
      nameInput.focus();
    }

  }, 50);

}


/* =========================================
   EDIT TEACHER
========================================= */

function openEditTeacherModal(
  root,
  teacherId
) {

  const teacher =
    teachersData.find(
      (item) =>
        item.id === teacherId
    );


  if (!teacher) {
    alert("Teacher not found.");
    return;
  }


  editingTeacherId =
    teacherId;


  setValue(
    root,
    "#teacher-edit-id",
    teacher.id
  );

  setValue(
    root,
    "#teacher-name",
    teacher.name
  );

  setValue(
    root,
    "#teacher-employee-id",
    teacher.employeeId
  );

  setValue(
    root,
    "#teacher-father-name",
    teacher.fatherName
  );

  setValue(
    root,
    "#teacher-subject",
    teacher.subject
  );

  setValue(
    root,
    "#teacher-qualification",
    teacher.qualification
  );

  setValue(
    root,
    "#teacher-mobile",
    teacher.mobile
  );

  setValue(
    root,
    "#teacher-email",
    teacher.email
  );

  setValue(
    root,
    "#teacher-gender",
    teacher.gender
  );

  setValue(
    root,
    "#teacher-joining-date",
    teacher.joiningDate
  );

  setValue(
    root,
    "#teacher-classes",
    teacher.classes
  );

  setValue(
    root,
    "#teacher-status",
    teacher.status
  );


  const title =
    root.querySelector(
      "#teacher-form-title"
    );

  if (title) {
    title.textContent =
      "Edit Teacher";
  }


  const saveButton =
    root.querySelector(
      "#save-teacher-btn"
    );

  if (saveButton) {
    saveButton.textContent =
      "Update Teacher";
  }


  const modal =
    root.querySelector(
      "#teacher-form-modal"
    );

  if (modal) {
    modal.style.display = "flex";
  }


  setTimeout(() => {

    const nameInput =
      root.querySelector(
        "#teacher-name"
      );

    if (nameInput) {
      nameInput.focus();
    }

  }, 50);

}


/* =========================================
   SAVE TEACHER
========================================= */

function saveTeacher(root) {

  const name =
    getValue(
      root,
      "#teacher-name"
    );

  const employeeId =
    getValue(
      root,
      "#teacher-employee-id"
    );

  const fatherName =
    getValue(
      root,
      "#teacher-father-name"
    );

  const subject =
    getValue(
      root,
      "#teacher-subject"
    );

  const qualification =
    getValue(
      root,
      "#teacher-qualification"
    );

  const mobile =
    getValue(
      root,
      "#teacher-mobile"
    );

  const email =
    getValue(
      root,
      "#teacher-email"
    );

  const gender =
    getValue(
      root,
      "#teacher-gender"
    );

  const joiningDate =
    getValue(
      root,
      "#teacher-joining-date"
    );

  const classes =
    getValue(
      root,
      "#teacher-classes"
    );

  const status =
    getValue(
      root,
      "#teacher-status"
    );


  /* -----------------------------------------
     VALIDATION
  ----------------------------------------- */

  if (!name) {
    alert(
      "Please enter teacher name."
    );
    return;
  }


  if (!employeeId) {
    alert(
      "Please enter employee ID."
    );
    return;
  }


  if (!subject) {
    alert(
      "Please select subject."
    );
    return;
  }


  if (!qualification) {
    alert(
      "Please enter qualification."
    );
    return;
  }


  if (!mobile) {
    alert(
      "Please enter mobile number."
    );
    return;
  }


  if (!/^[6-9]\d{9}$/.test(mobile)) {

    alert(
      "Please enter a valid 10-digit Indian mobile number."
    );

    return;
  }


  if (
    email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    )
  ) {

    alert(
      "Please enter a valid email address."
    );

    return;
  }


  if (!gender) {
    alert(
      "Please select gender."
    );
    return;
  }


  /* -----------------------------------------
     DUPLICATE EMPLOYEE ID
  ----------------------------------------- */

  const duplicate =
    teachersData.find(
      (teacher) =>
        teacher.employeeId
          .toLowerCase() ===
          employeeId.toLowerCase() &&
        teacher.id !==
          editingTeacherId
    );


  if (duplicate) {

    alert(
      "This employee ID already exists."
    );

    return;
  }


  /* -----------------------------------------
     TEACHER OBJECT
  ----------------------------------------- */

  const teacherObject = {

    id:
      editingTeacherId !== null
        ? editingTeacherId
        : createTeacherId(),

    employeeId,
    name,
    fatherName,
    subject,
    qualification,
    mobile,
    email,
    gender,
    joiningDate,
    classes,
    status

  };


  /* -----------------------------------------
     UPDATE
  ----------------------------------------- */

  if (editingTeacherId !== null) {

    const index =
      teachersData.findIndex(
        (teacher) =>
          teacher.id ===
          editingTeacherId
      );


    if (index !== -1) {

      teachersData[index] =
        teacherObject;

      alert(
        "Teacher updated successfully."
      );

    }

  }


  /* -----------------------------------------
     ADD
  ----------------------------------------- */

  else {

    teachersData.push(
      teacherObject
    );

    alert(
      "Teacher added successfully."
    );

  }


  editingTeacherId = null;


  closeTeacherFormModal(root);

  populateSubjectFilter(root);

  renderTeachers(root);

}


/* =========================================
   DELETE
========================================= */

function deleteTeacher(
  root,
  teacherId
) {

  const teacher =
    teachersData.find(
      (item) =>
        item.id === teacherId
    );


  if (!teacher) {
    alert("Teacher not found.");
    return;
  }


  const confirmed =
    confirm(
      `Are you sure you want to delete "${teacher.name}"?`
    );


  if (!confirmed) {
    return;
  }


  teachersData =
    teachersData.filter(
      (item) =>
        item.id !== teacherId
    );


  populateSubjectFilter(root);

  renderTeachers(root);


  alert(
    "Teacher deleted successfully."
  );

}


/* =========================================
   VIEW TEACHER
========================================= */

function openViewTeacherModal(
  root,
  teacherId
) {

  const teacher =
    teachersData.find(
      (item) =>
        item.id === teacherId
    );


  if (!teacher) {
    alert("Teacher not found.");
    return;
  }


  const modal =
    root.querySelector(
      "#teacher-view-modal"
    );

  const content =
    root.querySelector(
      "#teacher-view-content"
    );


  if (!modal || !content) {
    return;
  }


  content.innerHTML = `

    <div class="teacher-details-grid">

      <div class="teacher-detail-item">
        <span>Teacher Name</span>
        <strong>
          ${escapeHtml(
            teacher.name
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Employee ID</span>
        <strong>
          ${escapeHtml(
            teacher.employeeId
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Father Name</span>
        <strong>
          ${escapeHtml(
            teacher.fatherName || "-"
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Subject</span>
        <strong>
          ${escapeHtml(
            teacher.subject
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Qualification</span>
        <strong>
          ${escapeHtml(
            teacher.qualification
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Mobile</span>
        <strong>
          ${escapeHtml(
            teacher.mobile
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Email</span>
        <strong>
          ${escapeHtml(
            teacher.email || "-"
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Gender</span>
        <strong>
          ${escapeHtml(
            teacher.gender
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Joining Date</span>
        <strong>
          ${escapeHtml(
            teacher.joiningDate || "-"
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Classes</span>
        <strong>
          ${escapeHtml(
            teacher.classes || "-"
          )}
        </strong>
      </div>


      <div class="teacher-detail-item">
        <span>Status</span>
        <strong>
          ${escapeHtml(
            teacher.status
          )}
        </strong>
      </div>

    </div>


    <div class="teacher-view-actions">

      <button
        type="button"
        class="admin-btn admin-btn-secondary"
        id="teacher-view-close-btn"
      >
        Close
      </button>

      <button
        type="button"
        class="admin-btn admin-btn-primary"
        id="teacher-view-edit-btn"
      >
        Edit Teacher
      </button>

    </div>

  `;


  const closeButton =
    content.querySelector(
      "#teacher-view-close-btn"
    );

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      () => {
        closeTeacherViewModal(root);
      }
    );

  }


  const editButton =
    content.querySelector(
      "#teacher-view-edit-btn"
    );

  if (editButton) {

    editButton.addEventListener(
      "click",
      () => {

        closeTeacherViewModal(root);

        openEditTeacherModal(
          root,
          teacherId
        );

      }
    );

  }


  modal.style.display = "flex";

}


/* =========================================
   CLOSE FORM
========================================= */

function closeTeacherFormModal(root) {

  const modal =
    root.querySelector(
      "#teacher-form-modal"
    );

  if (modal) {
    modal.style.display = "none";
  }

  editingTeacherId = null;

}


/* =========================================
   CLOSE VIEW
========================================= */

function closeTeacherViewModal(root) {

  const modal =
    root.querySelector(
      "#teacher-view-modal"
    );

  if (modal) {
    modal.style.display = "none";
  }

}


/* =========================================
   GET VALUE
========================================= */

function getValue(
  root,
  selector
) {

  const element =
    root.querySelector(
      selector
    );

  if (!element) {
    return "";
  }

  return element.value.trim();

}


/* =========================================
   SET VALUE
========================================= */

function setValue(
  root,
  selector,
  value
) {

  const element =
    root.querySelector(
      selector
    );

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
   CREATE ID
========================================= */

function createTeacherId() {

  let id =
    Date.now() +
    Math.floor(
      Math.random() * 1000
    );


  while (
    teachersData.some(
      (teacher) =>
        teacher.id === id
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

  return String(
    value ?? ""
  )
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}