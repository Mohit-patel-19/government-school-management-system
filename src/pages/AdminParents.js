/* =========================================
   ADMIN PARENTS
========================================= */

import "./AdminStudents.css";


/* =========================================
   PARENT DATA
========================================= */

let parentsData = [
  {
    id: 1,
    parentId: "PAR-1001",
    name: "Ramesh Patel",
    fatherName: "Mohan Patel",
    mobile: "9876543210",
    email: "ramesh@example.com",
    studentName: "Rahul Patel",
    className: "10",
    section: "A",
    relation: "Father",
    status: "Active"
  },
  {
    id: 2,
    parentId: "PAR-1002",
    name: "Sunita Sharma",
    fatherName: "Rajesh Sharma",
    mobile: "9876543211",
    email: "sunita@example.com",
    studentName: "Priya Sharma",
    className: "9",
    section: "B",
    relation: "Mother",
    status: "Active"
  },
  {
    id: 3,
    parentId: "PAR-1003",
    name: "Mahesh Singh",
    fatherName: "Ratan Singh",
    mobile: "9876543212",
    email: "mahesh@example.com",
    studentName: "Amit Singh",
    className: "8",
    section: "A",
    relation: "Father",
    status: "Inactive"
  },
  {
    id: 4,
    parentId: "PAR-1004",
    name: "Kavita Meena",
    fatherName: "Gopal Meena",
    mobile: "9876543213",
    email: "kavita@example.com",
    studentName: "Neha Meena",
    className: "7",
    section: "C",
    relation: "Mother",
    status: "Active"
  },
  {
    id: 5,
    parentId: "PAR-1005",
    name: "Dinesh Kumawat",
    fatherName: "Babulal Kumawat",
    mobile: "9876543214",
    email: "dinesh@example.com",
    studentName: "Rohit Kumawat",
    className: "6",
    section: "A",
    relation: "Father",
    status: "Active"
  }
];


/* =========================================
   STATE
========================================= */

let parentSearchText = "";
let parentClassFilter = "All";
let parentStatusFilter = "All";
let editingParentId = null;


/* =========================================
   MAIN PARENT PAGE
========================================= */

export function AdminParents() {

  return `
    <div class="admin-parents">

      <!-- HEADER -->
      <div class="admin-parents-header">

        <div>
          <h1>Parent Management</h1>
          <p>
            Manage school parents and their student information.
          </p>
        </div>

        <button
          type="button"
          class="admin-btn admin-btn-primary"
          data-parent-action="add"
        >
          ➕ Add Parent
        </button>

      </div>


      <!-- SUMMARY -->
      <div class="parents-summary-grid">

        <div class="parent-summary-card">
          <div>
            <span>Total Parents</span>
            <strong data-parent-summary="total">0</strong>
          </div>

          <div class="parent-summary-icon">
            👨‍👩‍👧
          </div>
        </div>


        <div class="parent-summary-card">
          <div>
            <span>Active Parents</span>
            <strong data-parent-summary="active">0</strong>
          </div>

          <div class="parent-summary-icon">
            ✅
          </div>
        </div>


        <div class="parent-summary-card">
          <div>
            <span>Inactive Parents</span>
            <strong data-parent-summary="inactive">0</strong>
          </div>

          <div class="parent-summary-icon">
            ⛔
          </div>
        </div>


        <div class="parent-summary-card">
          <div>
            <span>Students Linked</span>
            <strong data-parent-summary="students">0</strong>
          </div>

          <div class="parent-summary-icon">
            🎓
          </div>
        </div>

      </div>


      <!-- TOOLBAR -->
      <div class="parents-toolbar">

        <div class="parent-search-box">

          <input
            type="text"
            id="parent-search"
            placeholder="🔍 Search parent, student, mobile..."
            autocomplete="off"
          />

        </div>


        <select id="parent-class-filter">
          <option value="All">All Classes</option>
          ${getClassOptions()}
        </select>


        <select id="parent-status-filter">

          <option value="All">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>


        <button
          type="button"
          class="admin-btn admin-btn-secondary parent-refresh-btn"
          data-parent-action="refresh"
        >
          🔄 Refresh
        </button>

      </div>


      <!-- TABLE -->
      <div class="parents-table-wrapper">

        <table class="parents-table">

          <thead>

            <tr>
              <th>Parent ID</th>
              <th>Parent</th>
              <th>Student</th>
              <th>Class</th>
              <th>Relation</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>


          <tbody id="parents-table-body"></tbody>

        </table>

      </div>


      <!-- ADD / EDIT MODAL -->
      <div
        class="parent-modal"
        id="parent-form-modal"
        hidden
      >

        <div class="parent-modal-box">

          <div class="parent-modal-header">

            <div>
              <h2 id="parent-form-title">
                Add Parent
              </h2>

              <p>
                Enter parent and student details.
              </p>
            </div>


            <button
              type="button"
              class="parent-modal-close"
              data-parent-close="form"
            >
              ×
            </button>

          </div>


          <form id="parent-form">

            <div class="parent-form-grid">


              <!-- NAME -->
              <div class="parent-form-group">

                <label for="parent-name">
                  Parent Name *
                </label>

                <input
                  type="text"
                  id="parent-name"
                  placeholder="Enter parent name"
                  required
                />

              </div>


              <!-- PARENT ID -->
              <div class="parent-form-group">

                <label for="parent-id">
                  Parent ID *
                </label>

                <input
                  type="text"
                  id="parent-id"
                  placeholder="Example: PAR-1006"
                  required
                />

              </div>


              <!-- FATHER NAME -->
              <div class="parent-form-group">

                <label for="parent-father-name">
                  Father's Name
                </label>

                <input
                  type="text"
                  id="parent-father-name"
                  placeholder="Enter father's name"
                />

              </div>


              <!-- RELATION -->
              <div class="parent-form-group">

                <label for="parent-relation">
                  Relation *
                </label>

                <select
                  id="parent-relation"
                  required
                >

                  <option value="">
                    Select Relation
                  </option>

                  <option value="Father">
                    Father
                  </option>

                  <option value="Mother">
                    Mother
                  </option>

                  <option value="Guardian">
                    Guardian
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <!-- MOBILE -->
              <div class="parent-form-group">

                <label for="parent-mobile">
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  id="parent-mobile"
                  maxlength="10"
                  inputmode="numeric"
                  placeholder="10 digit mobile number"
                  required
                />

              </div>


              <!-- EMAIL -->
              <div class="parent-form-group">

                <label for="parent-email">
                  Email
                </label>

                <input
                  type="email"
                  id="parent-email"
                  placeholder="parent@example.com"
                />

              </div>


              <!-- STUDENT -->
              <div class="parent-form-group">

                <label for="parent-student">
                  Student Name *
                </label>

                <input
                  type="text"
                  id="parent-student"
                  placeholder="Enter student name"
                  required
                />

              </div>


              <!-- CLASS -->
              <div class="parent-form-group">

                <label for="parent-class">
                  Class *
                </label>

                <select
                  id="parent-class"
                  required
                >

                  <option value="">
                    Select Class
                  </option>

                  <option value="6">
                    Class 6
                  </option>

                  <option value="7">
                    Class 7
                  </option>

                  <option value="8">
                    Class 8
                  </option>

                  <option value="9">
                    Class 9
                  </option>

                  <option value="10">
                    Class 10
                  </option>

                  <option value="11">
                    Class 11
                  </option>

                  <option value="12">
                    Class 12
                  </option>

                </select>

              </div>


              <!-- SECTION -->
              <div class="parent-form-group">

                <label for="parent-section">
                  Section *
                </label>

                <select
                  id="parent-section"
                  required
                >

                  <option value="">
                    Select Section
                  </option>

                  <option value="A">
                    Section A
                  </option>

                  <option value="B">
                    Section B
                  </option>

                  <option value="C">
                    Section C
                  </option>

                  <option value="D">
                    Section D
                  </option>

                </select>

              </div>


              <!-- STATUS -->
              <div class="parent-form-group">

                <label for="parent-status">
                  Status *
                </label>

                <select
                  id="parent-status"
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


            <!-- FORM ACTIONS -->
            <div class="parent-form-actions">

              <button
                type="button"
                class="admin-btn admin-btn-secondary"
                data-parent-close="form"
              >
                Cancel
              </button>


              <button
                type="submit"
                class="admin-btn admin-btn-primary"
              >
                💾 Save Parent
              </button>

            </div>

          </form>

        </div>

      </div>


      <!-- VIEW MODAL -->
      <div
        class="parent-modal"
        id="parent-view-modal"
        hidden
      >

        <div class="parent-modal-box">

          <div class="parent-modal-header">

            <div>
              <h2>Parent Details</h2>

              <p>
                Complete parent information.
              </p>
            </div>


            <button
              type="button"
              class="parent-modal-close"
              data-parent-close="view"
            >
              ×
            </button>

          </div>


          <div
            class="parent-details-grid"
            id="parent-view-content"
          ></div>


          <div class="parent-view-actions">

            <button
              type="button"
              class="admin-btn admin-btn-secondary"
              data-parent-close="view"
            >
              Close
            </button>


            <button
              type="button"
              class="admin-btn admin-btn-primary"
              id="parent-view-edit"
            >
              ✏️ Edit Parent
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

export function setupAdminParents() {

  const root =
    document.querySelector(".admin-parents");

  if (!root) {
    console.error(
      "AdminParents: root element not found."
    );
    return;
  }


  /* Reset temporary state */

  parentSearchText = "";
  parentClassFilter = "All";
  parentStatusFilter = "All";
  editingParentId = null;


  renderParents(root);
  updateParentSummary(root);


  /* =========================================
     SEARCH
  ========================================= */

  const searchInput =
    root.querySelector("#parent-search");

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      function (event) {

        parentSearchText =
          event.target.value
            .trim()
            .toLowerCase();

        renderParents(root);

      }
    );

  }


  /* =========================================
     CLASS FILTER
  ========================================= */

  const classFilter =
    root.querySelector("#parent-class-filter");

  if (classFilter) {

    classFilter.addEventListener(
      "change",
      function (event) {

        parentClassFilter =
          event.target.value;

        renderParents(root);

      }
    );

  }


  /* =========================================
     STATUS FILTER
  ========================================= */

  const statusFilter =
    root.querySelector("#parent-status-filter");

  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      function (event) {

        parentStatusFilter =
          event.target.value;

        renderParents(root);

      }
    );

  }


  /* =========================================
     CLICK EVENTS
  ========================================= */

  root.addEventListener(
    "click",
    function (event) {

      const actionElement =
        event.target.closest(
          "[data-parent-action]"
        );


      if (actionElement) {

        const action =
          actionElement.getAttribute(
            "data-parent-action"
          );

        const parentId =
          Number(
            actionElement.getAttribute(
              "data-parent-id"
            )
          );


        if (action === "add") {
          openAddParentModal(root);
          return;
        }


        if (action === "refresh") {
          refreshParents(root);
          return;
        }


        if (action === "view") {
          openViewParentModal(
            root,
            parentId
          );
          return;
        }


        if (action === "edit") {
          openEditParentModal(
            root,
            parentId
          );
          return;
        }


        if (action === "delete") {
          deleteParent(
            root,
            parentId
          );
          return;
        }

      }


      /* =========================================
         CLOSE MODALS
      ========================================= */

      const closeElement =
        event.target.closest(
          "[data-parent-close]"
        );


      if (closeElement) {

        const type =
          closeElement.getAttribute(
            "data-parent-close"
          );


        if (type === "form") {
          closeParentFormModal(root);
        }


        if (type === "view") {
          closeParentViewModal(root);
        }

      }


      /* =========================================
         BACKGROUND MODAL CLICK
      ========================================= */

      if (
        event.target.classList.contains(
          "parent-modal"
        )
      ) {

        if (
          event.target.id ===
          "parent-form-modal"
        ) {
          closeParentFormModal(root);
        }


        if (
          event.target.id ===
          "parent-view-modal"
        ) {
          closeParentViewModal(root);
        }

      }

    }
  );


  /* =========================================
     FORM SUBMIT
  ========================================= */

  const form =
    root.querySelector("#parent-form");


  if (form) {

    form.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        saveParent(root);

      }
    );

  }


  /* =========================================
     VIEW -> EDIT
  ========================================= */

  const viewEditButton =
    root.querySelector("#parent-view-edit");


  if (viewEditButton) {

    viewEditButton.addEventListener(
      "click",
      function () {

        const parentId =
          Number(
            viewEditButton.dataset.parentId
          );


        if (!parentId) {
          return;
        }


        closeParentViewModal(root);

        openEditParentModal(
          root,
          parentId
        );

      }
    );

  }


  /* =========================================
     ESCAPE KEY
  ========================================= */

  if (!window.__adminParentsEscapeHandler) {

    window.__adminParentsEscapeHandler =
      function (event) {

        if (event.key !== "Escape") {
          return;
        }


        const activeRoot =
          document.querySelector(
            ".admin-parents"
          );


        if (!activeRoot) {
          return;
        }


        closeParentFormModal(
          activeRoot
        );

        closeParentViewModal(
          activeRoot
        );

      };


    document.addEventListener(
      "keydown",
      window.__adminParentsEscapeHandler
    );

  }

}


/* =========================================
   RENDER PARENTS
========================================= */

function renderParents(root) {

  const tbody =
    root.querySelector(
      "#parents-table-body"
    );


  if (!tbody) {
    return;
  }


  const filteredParents =
    parentsData.filter(
      function (parent) {

        const searchMatch =
          !parentSearchText ||
          parent.name
            .toLowerCase()
            .includes(parentSearchText) ||
          parent.parentId
            .toLowerCase()
            .includes(parentSearchText) ||
          parent.mobile
            .includes(parentSearchText) ||
          parent.studentName
            .toLowerCase()
            .includes(parentSearchText);


        const classMatch =
          parentClassFilter === "All" ||
          parent.className ===
            parentClassFilter;


        const statusMatch =
          parentStatusFilter === "All" ||
          parent.status ===
            parentStatusFilter;


        return (
          searchMatch &&
          classMatch &&
          statusMatch
        );

      }
    );


  /* =========================================
     EMPTY STATE
  ========================================= */

  if (filteredParents.length === 0) {

    tbody.innerHTML = `
      <tr>

        <td colspan="8">

          <div class="parents-empty-state">

            <div>👨‍👩‍👧</div>

            <h3>
              No Parents Found
            </h3>

            <p>
              No parent records match your
              search or filters.
            </p>

          </div>

        </td>

      </tr>
    `;

    return;
  }


  /* =========================================
     TABLE DATA
  ========================================= */

  tbody.innerHTML =
    filteredParents
      .map(
        function (parent) {

          return `
            <tr>

              <td>
                <strong>
                  ${escapeHtml(
                    parent.parentId
                  )}
                </strong>
              </td>


              <td>

                <div class="parent-name-cell">

                  <div class="parent-avatar">
                    ${escapeHtml(
                      getInitials(
                        parent.name
                      )
                    )}
                  </div>


                  <div>

                    <strong>
                      ${escapeHtml(
                        parent.name
                      )}
                    </strong>

                    <small>
                      ${escapeHtml(
                        parent.email ||
                        "No email"
                      )}
                    </small>

                  </div>

                </div>

              </td>


              <td>
                <strong>
                  ${escapeHtml(
                    parent.studentName
                  )}
                </strong>
              </td>


              <td>
                ${escapeHtml(
                  parent.className
                )}
                -
                ${escapeHtml(
                  parent.section
                )}
              </td>


              <td>
                ${escapeHtml(
                  parent.relation
                )}
              </td>


              <td>
                ${escapeHtml(
                  parent.mobile
                )}
              </td>


              <td>

                <span
                  class="parent-status ${
                    parent.status === "Active"
                      ? "parent-status-active"
                      : "parent-status-inactive"
                  }"
                >
                  ${escapeHtml(
                    parent.status
                  )}
                </span>

              </td>


              <td>

                <div class="parent-action-buttons">

                  <button
                    type="button"
                    class="parent-action-btn view"
                    title="View Parent"
                    data-parent-action="view"
                    data-parent-id="${parent.id}"
                  >
                    👁️
                  </button>


                  <button
                    type="button"
                    class="parent-action-btn edit"
                    title="Edit Parent"
                    data-parent-action="edit"
                    data-parent-id="${parent.id}"
                  >
                    ✏️
                  </button>


                  <button
                    type="button"
                    class="parent-action-btn delete"
                    title="Delete Parent"
                    data-parent-action="delete"
                    data-parent-id="${parent.id}"
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

function updateParentSummary(root) {

  const total =
    parentsData.length;


  const active =
    parentsData.filter(
      parent =>
        parent.status === "Active"
    ).length;


  const inactive =
    parentsData.filter(
      parent =>
        parent.status === "Inactive"
    ).length;


  const students =
    new Set(
      parentsData.map(
        parent =>
          parent.studentName
      )
    ).size;


  const totalElement =
    root.querySelector(
      '[data-parent-summary="total"]'
    );


  const activeElement =
    root.querySelector(
      '[data-parent-summary="active"]'
    );


  const inactiveElement =
    root.querySelector(
      '[data-parent-summary="inactive"]'
    );


  const studentsElement =
    root.querySelector(
      '[data-parent-summary="students"]'
    );


  if (totalElement) {
    totalElement.textContent = total;
  }


  if (activeElement) {
    activeElement.textContent = active;
  }


  if (inactiveElement) {
    inactiveElement.textContent =
      inactive;
  }


  if (studentsElement) {
    studentsElement.textContent =
      students;
  }

}


/* =========================================
   CLASS OPTIONS
========================================= */

function getClassOptions() {

  const classes = [
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];


  return classes
    .map(
      function (className) {

        return `
          <option value="${className}">
            Class ${className}
          </option>
        `;

      }
    )
    .join("");

}


/* =========================================
   REFRESH
========================================= */

function refreshParents(root) {

  parentSearchText = "";
  parentClassFilter = "All";
  parentStatusFilter = "All";


  const search =
    root.querySelector(
      "#parent-search"
    );


  const classFilter =
    root.querySelector(
      "#parent-class-filter"
    );


  const statusFilter =
    root.querySelector(
      "#parent-status-filter"
    );


  if (search) {
    search.value = "";
  }


  if (classFilter) {
    classFilter.value = "All";
  }


  if (statusFilter) {
    statusFilter.value = "All";
  }


  renderParents(root);

  updateParentSummary(root);

}


/* =========================================
   ADD PARENT
========================================= */

function openAddParentModal(root) {

  editingParentId = null;


  const modal =
    root.querySelector(
      "#parent-form-modal"
    );


  const form =
    root.querySelector(
      "#parent-form"
    );


  const title =
    root.querySelector(
      "#parent-form-title"
    );


  if (!modal || !form) {
    return;
  }


  form.reset();


  if (title) {
    title.textContent =
      "Add Parent";
  }


  const parentId =
    root.querySelector(
      "#parent-id"
    );


  const status =
    root.querySelector(
      "#parent-status"
    );


  if (parentId) {
    parentId.value =
      generateParentId();
  }


  if (status) {
    status.value =
      "Active";
  }


  modal.hidden = false;


  setTimeout(
    function () {

      const name =
        root.querySelector(
          "#parent-name"
        );


      if (name) {
        name.focus();
      }

    },
    50
  );

}


/* =========================================
   EDIT PARENT
========================================= */

function openEditParentModal(
  root,
  id
) {

  const parent =
    parentsData.find(
      item =>
        item.id === id
    );


  if (!parent) {

    alert(
      "Parent record not found."
    );

    return;
  }


  editingParentId = id;


  setValue(
    root,
    "#parent-name",
    parent.name
  );


  setValue(
    root,
    "#parent-id",
    parent.parentId
  );


  setValue(
    root,
    "#parent-father-name",
    parent.fatherName
  );


  setValue(
    root,
    "#parent-relation",
    parent.relation
  );


  setValue(
    root,
    "#parent-mobile",
    parent.mobile
  );


  setValue(
    root,
    "#parent-email",
    parent.email
  );


  setValue(
    root,
    "#parent-student",
    parent.studentName
  );


  setValue(
    root,
    "#parent-class",
    parent.className
  );


  setValue(
    root,
    "#parent-section",
    parent.section
  );


  setValue(
    root,
    "#parent-status",
    parent.status
  );


  const title =
    root.querySelector(
      "#parent-form-title"
    );


  const modal =
    root.querySelector(
      "#parent-form-modal"
    );


  if (title) {
    title.textContent =
      "Edit Parent";
  }


  if (modal) {
    modal.hidden = false;
  }

}


/* =========================================
   SAVE PARENT
========================================= */

function saveParent(root) {

  const name =
    getValue(
      root,
      "#parent-name"
    );


  const parentId =
    getValue(
      root,
      "#parent-id"
    ).toUpperCase();


  const fatherName =
    getValue(
      root,
      "#parent-father-name"
    );


  const relation =
    getValue(
      root,
      "#parent-relation"
    );


  const mobile =
    getValue(
      root,
      "#parent-mobile"
    );


  const email =
    getValue(
      root,
      "#parent-email"
    );


  const studentName =
    getValue(
      root,
      "#parent-student"
    );


  const className =
    getValue(
      root,
      "#parent-class"
    );


  const section =
    getValue(
      root,
      "#parent-section"
    );


  const status =
    getValue(
      root,
      "#parent-status"
    );


  /* =========================================
     VALIDATION
  ========================================= */

  if (!name) {
    alert(
      "Please enter parent name."
    );
    return;
  }


  if (!parentId) {
    alert(
      "Please enter Parent ID."
    );
    return;
  }


  if (!relation) {
    alert(
      "Please select relation."
    );
    return;
  }


  if (
    !/^[6-9]\d{9}$/.test(
      mobile
    )
  ) {

    alert(
      "Please enter a valid 10-digit Indian mobile number."
    );

    return;
  }


  if (
    email &&
    !isValidEmail(email)
  ) {

    alert(
      "Please enter a valid email address."
    );

    return;
  }


  if (!studentName) {
    alert(
      "Please enter student name."
    );
    return;
  }


  if (!className) {
    alert(
      "Please select class."
    );
    return;
  }


  if (!section) {
    alert(
      "Please select section."
    );
    return;
  }


  /* =========================================
     DUPLICATE PARENT ID
  ========================================= */

  const duplicate =
    parentsData.find(
      function (parent) {

        return (
          parent.parentId
            .toLowerCase() ===
          parentId.toLowerCase() &&
          parent.id !==
            editingParentId
        );

      }
    );


  if (duplicate) {

    alert(
      "This Parent ID already exists."
    );

    return;
  }


  /* =========================================
     EDIT
  ========================================= */

  if (
    editingParentId !== null
  ) {

    const index =
      parentsData.findIndex(
        parent =>
          parent.id ===
          editingParentId
      );


    if (index === -1) {

      alert(
        "Parent record not found."
      );

      return;
    }


    parentsData[index] = {
      ...parentsData[index],
      parentId,
      name,
      fatherName,
      mobile,
      email,
      studentName,
      className,
      section,
      relation,
      status
    };


    alert(
      "Parent updated successfully."
    );

  }


  /* =========================================
     ADD
  ========================================= */

  else {

    parentsData.push({

      id: getNextParentId(),

      parentId,

      name,

      fatherName,

      mobile,

      email,

      studentName,

      className,

      section,

      relation,

      status

    });


    alert(
      "Parent added successfully."
    );

  }


  closeParentFormModal(root);

  renderParents(root);

  updateParentSummary(root);

}


/* =========================================
   DELETE PARENT
========================================= */

function deleteParent(
  root,
  id
) {

  const parent =
    parentsData.find(
      item =>
        item.id === id
    );


  if (!parent) {

    alert(
      "Parent record not found."
    );

    return;
  }


  const confirmed =
    confirm(
      `Are you sure you want to delete ${parent.name}?`
    );


  if (!confirmed) {
    return;
  }


  parentsData =
    parentsData.filter(
      item =>
        item.id !== id
    );


  renderParents(root);

  updateParentSummary(root);


  alert(
    "Parent deleted successfully."
  );

}


/* =========================================
   VIEW PARENT
========================================= */

function openViewParentModal(
  root,
  id
) {

  const parent =
    parentsData.find(
      item =>
        item.id === id
    );


  if (!parent) {

    alert(
      "Parent record not found."
    );

    return;
  }


  const modal =
    root.querySelector(
      "#parent-view-modal"
    );


  const content =
    root.querySelector(
      "#parent-view-content"
    );


  const editButton =
    root.querySelector(
      "#parent-view-edit"
    );


  if (!modal || !content) {
    return;
  }


  content.innerHTML = `

    <div class="parent-detail-item">
      <span>Parent ID</span>
      <strong>
        ${escapeHtml(
          parent.parentId
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Parent Name</span>
      <strong>
        ${escapeHtml(
          parent.name
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Father's Name</span>
      <strong>
        ${escapeHtml(
          parent.fatherName || "-"
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Relation</span>
      <strong>
        ${escapeHtml(
          parent.relation
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Mobile Number</span>
      <strong>
        ${escapeHtml(
          parent.mobile
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Email</span>
      <strong>
        ${escapeHtml(
          parent.email || "-"
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Student Name</span>
      <strong>
        ${escapeHtml(
          parent.studentName
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Class & Section</span>
      <strong>
        Class
        ${escapeHtml(
          parent.className
        )}
        -
        ${escapeHtml(
          parent.section
        )}
      </strong>
    </div>


    <div class="parent-detail-item">
      <span>Status</span>
      <strong>
        ${escapeHtml(
          parent.status
        )}
      </strong>
    </div>

  `;


  if (editButton) {

    editButton.dataset.parentId =
      String(id);

  }


  modal.hidden = false;

}


/* =========================================
   CLOSE FORM MODAL
========================================= */

function closeParentFormModal(
  root
) {

  const modal =
    root.querySelector(
      "#parent-form-modal"
    );


  if (modal) {
    modal.hidden = true;
  }


  editingParentId = null;

}


/* =========================================
   CLOSE VIEW MODAL
========================================= */

function closeParentViewModal(
  root
) {

  const modal =
    root.querySelector(
      "#parent-view-modal"
    );


  if (modal) {
    modal.hidden = true;
  }

}


/* =========================================
   GENERATE PARENT ID
========================================= */

function generateParentId() {

  let number = 1001;


  while (
    parentsData.some(
      parent =>
        parent.parentId ===
        `PAR-${number}`
    )
  ) {

    number++;

  }


  return `PAR-${number}`;

}


/* =========================================
   NEXT INTERNAL ID
========================================= */

function getNextParentId() {

  if (
    parentsData.length === 0
  ) {
    return 1;
  }


  return (
    Math.max(
      ...parentsData.map(
        parent =>
          Number(parent.id)
      )
    ) + 1
  );

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


  return element
    ? element.value.trim()
    : "";

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


  if (element) {
    element.value =
      value || "";
  }

}


/* =========================================
   EMAIL VALIDATION
========================================= */

function isValidEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );

}


/* =========================================
   INITIALS
========================================= */

function getInitials(name) {

  if (!name) {
    return "P";
  }


  const parts =
    name
      .trim()
      .split(/\s+/)
      .filter(Boolean);


  if (
    parts.length === 1
  ) {

    return parts[0]
      .substring(0, 2)
      .toUpperCase();

  }


  return (
    parts[0][0] +
    parts[parts.length - 1][0]
  ).toUpperCase();

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