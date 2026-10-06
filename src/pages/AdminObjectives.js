/* =========================================
   ADMIN OBJECTIVES & GOALS
========================================= */

/* =========================================
   DEFAULT OBJECTIVES DATA
========================================= */
import "./AdminObjectives.css";

const defaultObjectives = [
  {
    id: 1,
    title: "Academic Performance",
    description: "Improve overall academic performance of students.",
    category: "Academic",
    target: 90,
    progress: 82,
    priority: "High",
    status: "In Progress",
    startDate: "2026-07-01",
    targetDate: "2027-03-31"
  },
  {
    id: 2,
    title: "Student Attendance",
    description: "Maintain and improve student attendance throughout the academic year.",
    category: "Attendance",
    target: 95,
    progress: 94,
    priority: "High",
    status: "In Progress",
    startDate: "2026-07-01",
    targetDate: "2027-03-31"
  },
  {
    id: 3,
    title: "Digital Education",
    description: "Increase the use of digital learning resources in classrooms.",
    category: "Technology",
    target: 100,
    progress: 76,
    priority: "Medium",
    status: "In Progress",
    startDate: "2026-07-01",
    targetDate: "2027-02-28"
  },
  {
    id: 4,
    title: "Infrastructure Development",
    description: "Improve school infrastructure, classrooms and facilities.",
    category: "Infrastructure",
    target: 90,
    progress: 68,
    priority: "Medium",
    status: "In Progress",
    startDate: "2026-07-01",
    targetDate: "2027-03-31"
  }
];


/* =========================================
   STORAGE KEY
========================================= */

const OBJECTIVES_STORAGE_KEY = "government_school_admin_objectives";


/* =========================================
   GET OBJECTIVES
========================================= */

function getObjectives() {
  try {
    const savedData = localStorage.getItem(
      OBJECTIVES_STORAGE_KEY
    );

    if (!savedData) {
      localStorage.setItem(
        OBJECTIVES_STORAGE_KEY,
        JSON.stringify(defaultObjectives)
      );

      return [...defaultObjectives];
    }

    const parsedData = JSON.parse(savedData);

    if (!Array.isArray(parsedData)) {
      return [...defaultObjectives];
    }

    return parsedData;
  } catch (error) {
    console.error(
      "Unable to load objectives:",
      error
    );

    return [...defaultObjectives];
  }
}


/* =========================================
   SAVE OBJECTIVES
========================================= */

function saveObjectives(objectives) {
  try {
    localStorage.setItem(
      OBJECTIVES_STORAGE_KEY,
      JSON.stringify(objectives)
    );

    return true;
  } catch (error) {
    console.error(
      "Unable to save objectives:",
      error
    );

    return false;
  }
}


/* =========================================
   ADMIN OBJECTIVES
========================================= */

export function AdminObjectives() {
  return `
    <div class="admin-objectives-module">

      <!-- PAGE HEADER -->
      <div class="admin-objectives-header">

        <div class="admin-objectives-header-content">

          <div class="admin-objectives-icon">
            🎯
          </div>

          <div>
            <span class="admin-objectives-label">
              SCHOOL MANAGEMENT
            </span>

            <h2>
              Objectives & Goals
            </h2>

            <p>
              Set, monitor and manage school objectives
              and strategic goals for the academic session.
            </p>
          </div>

        </div>

        <div class="admin-objectives-header-actions">

          <button
            type="button"
            class="admin-objectives-secondary-btn"
            data-objectives-refresh
          >
            🔄 Refresh
          </button>

          <button
            type="button"
            class="admin-objectives-primary-btn"
            data-objectives-add
          >
            ➕ Add Goal
          </button>

        </div>

      </div>


      <!-- STATISTICS -->
      <div class="admin-objectives-stats">

        <div class="admin-objective-stat-card">

          <div class="admin-objective-stat-icon">
            🎯
          </div>

          <div>
            <span>Total Goals</span>
            <strong id="objectives-total-count">
              0
            </strong>
          </div>

        </div>


        <div class="admin-objective-stat-card">

          <div class="admin-objective-stat-icon">
            🚀
          </div>

          <div>
            <span>In Progress</span>
            <strong id="objectives-progress-count">
              0
            </strong>
          </div>

        </div>


        <div class="admin-objective-stat-card">

          <div class="admin-objective-stat-icon">
            ✅
          </div>

          <div>
            <span>Completed</span>
            <strong id="objectives-completed-count">
              0
            </strong>
          </div>

        </div>


        <div class="admin-objective-stat-card">

          <div class="admin-objective-stat-icon">
            📊
          </div>

          <div>
            <span>Average Progress</span>
            <strong id="objectives-average-progress">
              0%
            </strong>
          </div>

        </div>

      </div>


      <!-- FILTER CARD -->
      <div class="admin-objectives-filter-card">

        <div class="admin-objectives-filter-header">

          <div>
            <h3>
              Goals & Objectives
            </h3>

            <span>
              Search, filter and manage school goals.
            </span>
          </div>

          <button
            type="button"
            class="admin-objectives-reset-btn"
            data-objectives-reset
          >
            Reset Filters
          </button>

        </div>


        <div class="admin-objectives-filters">

          <!-- SEARCH -->
          <div class="admin-objectives-field">

            <label for="objective-search">
              Search
            </label>

            <div class="admin-objectives-search-box">

              <span>
                🔍
              </span>

              <input
                type="text"
                id="objective-search"
                placeholder="Search goals..."
                data-objectives-search
              />

            </div>

          </div>


          <!-- CATEGORY -->
          <div class="admin-objectives-field">

            <label for="objective-category-filter">
              Category
            </label>

            <select
              id="objective-category-filter"
              data-objectives-category
            >
              <option value="All">
                All Categories
              </option>

              <option value="Academic">
                Academic
              </option>

              <option value="Attendance">
                Attendance
              </option>

              <option value="Technology">
                Technology
              </option>

              <option value="Infrastructure">
                Infrastructure
              </option>

              <option value="Student Development">
                Student Development
              </option>

              <option value="Staff Development">
                Staff Development
              </option>

              <option value="Other">
                Other
              </option>
            </select>

          </div>


          <!-- STATUS -->
          <div class="admin-objectives-field">

            <label for="objective-status-filter">
              Status
            </label>

            <select
              id="objective-status-filter"
              data-objectives-status
            >
              <option value="All">
                All Status
              </option>

              <option value="Not Started">
                Not Started
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>

              <option value="On Hold">
                On Hold
              </option>
            </select>

          </div>


          <!-- PRIORITY -->
          <div class="admin-objectives-field">

            <label for="objective-priority-filter">
              Priority
            </label>

            <select
              id="objective-priority-filter"
              data-objectives-priority
            >
              <option value="All">
                All Priorities
              </option>

              <option value="High">
                High
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="Low">
                Low
              </option>
            </select>

          </div>

        </div>

      </div>


      <!-- GOALS LIST -->
      <div
        class="admin-objectives-list"
        data-objectives-list
      >
      </div>


      <!-- MODAL -->
      <div
        class="admin-objectives-modal"
        data-objectives-modal
        aria-hidden="true"
      >

        <div
          class="admin-objectives-modal-overlay"
          data-objectives-close
        ></div>

        <div class="admin-objectives-modal-box">

          <div class="admin-objectives-modal-header">

            <div>
              <span class="admin-objectives-label">
                GOAL MANAGEMENT
              </span>

              <h3 data-objectives-modal-title>
                Add New Goal
              </h3>
            </div>

            <button
              type="button"
              class="admin-objectives-modal-close"
              data-objectives-close
              aria-label="Close"
            >
              ✕
            </button>

          </div>


          <!-- FORM -->
          <form
            data-objectives-form
            novalidate
          >

            <input
              type="hidden"
              data-objectives-id
            />


            <!-- TITLE -->
            <div class="admin-objectives-form-group">

              <label>
                Goal Title
                <span>*</span>
              </label>

              <input
                type="text"
                data-objectives-title
                placeholder="Enter goal title"
                maxlength="100"
                required
              />

            </div>


            <!-- DESCRIPTION -->
            <div class="admin-objectives-form-group">

              <label>
                Description
              </label>

              <textarea
                data-objectives-description
                placeholder="Enter goal description"
                rows="4"
                maxlength="500"
              ></textarea>

            </div>


            <!-- ROW -->
            <div class="admin-objectives-form-row">

              <!-- CATEGORY -->
              <div class="admin-objectives-form-group">

                <label>
                  Category
                  <span>*</span>
                </label>

                <select
                  data-objectives-form-category
                  required
                >
                  <option value="Academic">
                    Academic
                  </option>

                  <option value="Attendance">
                    Attendance
                  </option>

                  <option value="Technology">
                    Technology
                  </option>

                  <option value="Infrastructure">
                    Infrastructure
                  </option>

                  <option value="Student Development">
                    Student Development
                  </option>

                  <option value="Staff Development">
                    Staff Development
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>


              <!-- PRIORITY -->
              <div class="admin-objectives-form-group">

                <label>
                  Priority
                  <span>*</span>
                </label>

                <select
                  data-objectives-form-priority
                  required
                >
                  <option value="High">
                    High
                  </option>

                  <option value="Medium" selected>
                    Medium
                  </option>

                  <option value="Low">
                    Low
                  </option>
                </select>

              </div>

            </div>


            <!-- PROGRESS + TARGET -->
            <div class="admin-objectives-form-row">

              <div class="admin-objectives-form-group">

                <label>
                  Current Progress (%)
                  <span>*</span>
                </label>

                <input
                  type="number"
                  data-objectives-progress
                  min="0"
                  max="100"
                  value="0"
                  required
                />

              </div>


              <div class="admin-objectives-form-group">

                <label>
                  Target (%)
                  <span>*</span>
                </label>

                <input
                  type="number"
                  data-objectives-target
                  min="1"
                  max="100"
                  value="100"
                  required
                />

              </div>

            </div>


            <!-- DATES -->
            <div class="admin-objectives-form-row">

              <div class="admin-objectives-form-group">

                <label>
                  Start Date
                  <span>*</span>
                </label>

                <input
                  type="date"
                  data-objectives-start-date
                  required
                />

              </div>


              <div class="admin-objectives-form-group">

                <label>
                  Target Date
                  <span>*</span>
                </label>

                <input
                  type="date"
                  data-objectives-target-date
                  required
                />

              </div>

            </div>


            <!-- STATUS -->
            <div class="admin-objectives-form-group">

              <label>
                Status
                <span>*</span>
              </label>

              <select
                data-objectives-form-status
                required
              >
                <option value="Not Started">
                  Not Started
                </option>

                <option value="In Progress" selected>
                  In Progress
                </option>

                <option value="Completed">
                  Completed
                </option>

                <option value="On Hold">
                  On Hold
                </option>
              </select>

            </div>


            <!-- FORM ACTIONS -->
            <div class="admin-objectives-form-actions">

              <button
                type="button"
                class="admin-objectives-cancel-btn"
                data-objectives-close
              >
                Cancel
              </button>

              <button
                type="submit"
                class="admin-objectives-save-btn"
              >
                💾 Save Goal
              </button>

            </div>

          </form>

        </div>

      </div>


      <!-- PROGRESS UPDATE MODAL -->
      <div
        class="admin-objectives-progress-modal"
        data-objectives-progress-modal
        aria-hidden="true"
      >

        <div
          class="admin-objectives-modal-overlay"
          data-progress-close
        ></div>

        <div class="admin-objectives-progress-box">

          <div class="admin-objectives-modal-header">

            <div>
              <span class="admin-objectives-label">
                UPDATE PROGRESS
              </span>

              <h3>
                Update Goal Progress
              </h3>
            </div>

            <button
              type="button"
              class="admin-objectives-modal-close"
              data-progress-close
            >
              ✕
            </button>

          </div>


          <form data-progress-form>

            <input
              type="hidden"
              data-progress-id
            />


            <div class="admin-objectives-progress-preview">

              <span>
                Goal
              </span>

              <strong data-progress-goal-name>
                Goal
              </strong>

            </div>


            <div class="admin-objectives-form-group">

              <label>
                Progress (%)
                <span>*</span>
              </label>

              <input
                type="number"
                data-progress-value
                min="0"
                max="100"
                value="0"
                required
              />

            </div>


            <div class="admin-objectives-form-actions">

              <button
                type="button"
                class="admin-objectives-cancel-btn"
                data-progress-close
              >
                Cancel
              </button>

              <button
                type="submit"
                class="admin-objectives-save-btn"
              >
                Update Progress
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   SETUP NAVIGATION
========================================= */

export function setupAdminObjectivesNavigation() {
  const module = document.querySelector(
    ".admin-objectives-module"
  );

  if (!module) {
    return;
  }

  if (module.dataset.objectivesReady === "true") {
    renderObjectives(module);
    return;
  }

  module.dataset.objectivesReady = "true";

  renderObjectives(module);


  /* =========================================
     CLICK EVENTS
  ========================================== */

  module.addEventListener("click", (event) => {

    const addButton = event.target.closest(
      "[data-objectives-add]"
    );

    if (addButton) {
      event.preventDefault();

      openObjectiveModal(
        module,
        null
      );

      return;
    }


    const editButton = event.target.closest(
      "[data-objectives-edit]"
    );

    if (editButton) {
      event.preventDefault();

      const id = Number(
        editButton.dataset.objectivesEdit
      );

      openObjectiveModal(
        module,
        id
      );

      return;
    }


    const deleteButton = event.target.closest(
      "[data-objectives-delete]"
    );

    if (deleteButton) {
      event.preventDefault();

      const id = Number(
        deleteButton.dataset.objectivesDelete
      );

      deleteObjective(
        module,
        id
      );

      return;
    }


    const progressButton = event.target.closest(
      "[data-objectives-update-progress]"
    );

    if (progressButton) {
      event.preventDefault();

      const id = Number(
        progressButton.dataset.objectivesUpdateProgress
      );

      openProgressModal(
        module,
        id
      );

      return;
    }


    const refreshButton = event.target.closest(
      "[data-objectives-refresh]"
    );

    if (refreshButton) {
      event.preventDefault();

      renderObjectives(module);

      return;
    }


    const resetButton = event.target.closest(
      "[data-objectives-reset]"
    );

    if (resetButton) {
      event.preventDefault();

      resetObjectiveFilters(module);

      return;
    }


    const closeButton = event.target.closest(
      "[data-objectives-close]"
    );

    if (closeButton) {
      event.preventDefault();

      closeObjectiveModal(module);

      return;
    }


    const progressCloseButton = event.target.closest(
      "[data-progress-close]"
    );

    if (progressCloseButton) {
      event.preventDefault();

      closeProgressModal(module);

      return;
    }

  });


  /* =========================================
     SEARCH
  ========================================== */

  const searchInput = module.querySelector(
    "[data-objectives-search]"
  );

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      () => {
        renderObjectives(module);
      }
    );
  }


  /* =========================================
     FILTERS
  ========================================== */

  const categoryFilter = module.querySelector(
    "[data-objectives-category]"
  );

  if (categoryFilter) {
    categoryFilter.addEventListener(
      "change",
      () => {
        renderObjectives(module);
      }
    );
  }


  const statusFilter = module.querySelector(
    "[data-objectives-status]"
  );

  if (statusFilter) {
    statusFilter.addEventListener(
      "change",
      () => {
        renderObjectives(module);
      }
    );
  }


  const priorityFilter = module.querySelector(
    "[data-objectives-priority]"
  );

  if (priorityFilter) {
    priorityFilter.addEventListener(
      "change",
      () => {
        renderObjectives(module);
      }
    );
  }


  /* =========================================
     OBJECTIVE FORM
  ========================================== */

  const form = module.querySelector(
    "[data-objectives-form]"
  );

  if (form) {
    form.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        saveObjectiveFromForm(
          module
        );

      }
    );
  }


  /* =========================================
     PROGRESS FORM
  ========================================== */

  const progressForm = module.querySelector(
    "[data-progress-form]"
  );

  if (progressForm) {
    progressForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        updateObjectiveProgress(
          module
        );

      }
    );
  }


  /* =========================================
     ESCAPE KEY
  ========================================== */

  if (module.dataset.keyboardReady !== "true") {

    module.dataset.keyboardReady = "true";

    document.addEventListener(
      "keydown",
      (event) => {

        if (event.key !== "Escape") {
          return;
        }

        closeObjectiveModal(module);
        closeProgressModal(module);

      }
    );

  }
}


/* =========================================
   RENDER OBJECTIVES
========================================= */

function renderObjectives(module) {

  const list = module.querySelector(
    "[data-objectives-list]"
  );

  if (!list) {
    return;
  }

  const objectives = getObjectives();

  updateObjectiveStatistics(
    module,
    objectives
  );


  const searchInput = module.querySelector(
    "[data-objectives-search]"
  );

  const categoryFilter = module.querySelector(
    "[data-objectives-category]"
  );

  const statusFilter = module.querySelector(
    "[data-objectives-status]"
  );

  const priorityFilter = module.querySelector(
    "[data-objectives-priority]"
  );


  const searchValue = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const categoryValue = categoryFilter
    ? categoryFilter.value
    : "All";

  const statusValue = statusFilter
    ? statusFilter.value
    : "All";

  const priorityValue = priorityFilter
    ? priorityFilter.value
    : "All";


  const filteredObjectives = objectives.filter(
    (objective) => {

      const matchesSearch =
        !searchValue ||
        objective.title
          .toLowerCase()
          .includes(searchValue) ||
        objective.description
          .toLowerCase()
          .includes(searchValue) ||
        objective.category
          .toLowerCase()
          .includes(searchValue);


      const matchesCategory =
        categoryValue === "All" ||
        objective.category === categoryValue;


      const matchesStatus =
        statusValue === "All" ||
        objective.status === statusValue;


      const matchesPriority =
        priorityValue === "All" ||
        objective.priority === priorityValue;


      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesPriority
      );

    }
  );


  if (filteredObjectives.length === 0) {

    list.innerHTML = `
      <div class="admin-objectives-empty">

        <div class="admin-objectives-empty-icon">
          🎯
        </div>

        <h3>
          No Goals Found
        </h3>

        <p>
          No objectives match your current search
          or filter selection.
        </p>

        <button
          type="button"
          class="admin-objectives-primary-btn"
          data-objectives-reset
        >
          Reset Filters
        </button>

      </div>
    `;

    return;
  }


  list.innerHTML = filteredObjectives
    .map(
      (objective) =>
        createObjectiveCard(objective)
    )
    .join("");
}


/* =========================================
   CREATE OBJECTIVE CARD
========================================= */

function createObjectiveCard(objective) {

  const progress = clampNumber(
    objective.progress,
    0,
    100
  );

  const target = clampNumber(
    objective.target,
    1,
    100
  );


  let progressStatus = "Behind Target";

  if (progress >= target) {
    progressStatus = "Target Achieved";
  } else if (progress >= target * 0.75) {
    progressStatus = "Near Target";
  }


  const statusClass = getStatusClass(
    objective.status
  );

  const priorityClass = getPriorityClass(
    objective.priority
  );


  return `
    <article
      class="admin-objective-card"
      data-objective-card="${objective.id}"
    >

      <!-- CARD TOP -->
      <div class="admin-objective-card-top">

        <div class="admin-objective-card-title">

          <div class="admin-objective-card-icon">
            ${getCategoryIcon(objective.category)}
          </div>

          <div>

            <div class="admin-objective-badges">

              <span class="admin-objective-category">
                ${escapeHtml(objective.category)}
              </span>

              <span
                class="admin-objective-priority ${priorityClass}"
              >
                ${escapeHtml(objective.priority)}
              </span>

            </div>

            <h3>
              ${escapeHtml(objective.title)}
            </h3>

          </div>

        </div>


        <!-- ACTIONS -->
        <div class="admin-objective-actions">

          <button
            type="button"
            class="admin-objective-action-btn"
            data-objectives-update-progress="${objective.id}"
            title="Update progress"
          >
            📊
          </button>

          <button
            type="button"
            class="admin-objective-action-btn"
            data-objectives-edit="${objective.id}"
            title="Edit goal"
          >
            ✏️
          </button>

          <button
            type="button"
            class="admin-objective-action-btn danger"
            data-objectives-delete="${objective.id}"
            title="Delete goal"
          >
            🗑️
          </button>

        </div>

      </div>


      <!-- DESCRIPTION -->
      <p class="admin-objective-description">
        ${escapeHtml(objective.description || "No description available.")}
      </p>


      <!-- PROGRESS -->
      <div class="admin-objective-progress-section">

        <div class="admin-objective-progress-header">

          <div>

            <span>
              Current Progress
            </span>

            <strong>
              ${progress}%
            </strong>

          </div>

          <div class="admin-objective-target">

            <span>
              Target
            </span>

            <strong>
              ${target}%
            </strong>

          </div>

        </div>


        <div class="admin-objective-progress-bar">

          <span
            style="width: ${progress}%;"
          ></span>

        </div>


        <div class="admin-objective-progress-footer">

          <span>
            ${escapeHtml(progressStatus)}
          </span>

          <span>
            ${progress}% / ${target}%
          </span>

        </div>

      </div>


      <!-- CARD BOTTOM -->
      <div class="admin-objective-card-bottom">

        <div class="admin-objective-meta">

          <div>
            <span>
              📅 Start Date
            </span>

            <strong>
              ${formatDate(objective.startDate)}
            </strong>
          </div>


          <div>
            <span>
              🎯 Target Date
            </span>

            <strong>
              ${formatDate(objective.targetDate)}
            </strong>
          </div>

        </div>


        <span
          class="admin-objective-status ${statusClass}"
        >
          ${getStatusIcon(objective.status)}
          ${escapeHtml(objective.status)}
        </span>

      </div>

    </article>
  `;
}


/* =========================================
   UPDATE STATISTICS
========================================= */

function updateObjectiveStatistics(
  module,
  objectives
) {

  const totalElement = module.querySelector(
    "#objectives-total-count"
  );

  const progressElement = module.querySelector(
    "#objectives-progress-count"
  );

  const completedElement = module.querySelector(
    "#objectives-completed-count"
  );

  const averageElement = module.querySelector(
    "#objectives-average-progress"
  );


  const total = objectives.length;


  const inProgress = objectives.filter(
    (objective) =>
      objective.status === "In Progress"
  ).length;


  const completed = objectives.filter(
    (objective) =>
      objective.status === "Completed"
  ).length;


  const average =
    total > 0
      ? Math.round(
          objectives.reduce(
            (sum, objective) =>
              sum +
              Number(objective.progress || 0),
            0
          ) / total
        )
      : 0;


  if (totalElement) {
    totalElement.textContent = total;
  }

  if (progressElement) {
    progressElement.textContent = inProgress;
  }

  if (completedElement) {
    completedElement.textContent = completed;
  }

  if (averageElement) {
    averageElement.textContent =
      `${average}%`;
  }
}


/* =========================================
   OPEN OBJECTIVE MODAL
========================================= */

function openObjectiveModal(
  module,
  objectiveId
) {

  const modal = module.querySelector(
    "[data-objectives-modal]"
  );

  const form = module.querySelector(
    "[data-objectives-form]"
  );

  if (!modal || !form) {
    return;
  }


  form.reset();


  const hiddenId = module.querySelector(
    "[data-objectives-id]"
  );

  const titleInput = module.querySelector(
    "[data-objectives-title]"
  );

  const descriptionInput = module.querySelector(
    "[data-objectives-description]"
  );

  const categoryInput = module.querySelector(
    "[data-objectives-form-category]"
  );

  const priorityInput = module.querySelector(
    "[data-objectives-form-priority]"
  );

  const progressInput = module.querySelector(
    "[data-objectives-progress]"
  );

  const targetInput = module.querySelector(
    "[data-objectives-target]"
  );

  const startDateInput = module.querySelector(
    "[data-objectives-start-date]"
  );

  const targetDateInput = module.querySelector(
    "[data-objectives-target-date]"
  );

  const statusInput = module.querySelector(
    "[data-objectives-form-status]"
  );

  const modalTitle = module.querySelector(
    "[data-objectives-modal-title]"
  );


  if (objectiveId === null) {

    if (hiddenId) {
      hiddenId.value = "";
    }

    if (progressInput) {
      progressInput.value = "0";
    }

    if (targetInput) {
      targetInput.value = "100";
    }

    if (categoryInput) {
      categoryInput.value = "Academic";
    }

    if (priorityInput) {
      priorityInput.value = "Medium";
    }

    if (statusInput) {
      statusInput.value = "In Progress";
    }

    if (startDateInput) {
      startDateInput.value =
        getTodayDate();
    }

    if (targetDateInput) {
      targetDateInput.value =
        getDefaultTargetDate();
    }

    if (modalTitle) {
      modalTitle.textContent =
        "Add New Goal";
    }

  } else {

    const objectives = getObjectives();

    const objective = objectives.find(
      (item) =>
        Number(item.id) ===
        Number(objectiveId)
    );


    if (!objective) {
      return;
    }


    if (hiddenId) {
      hiddenId.value = objective.id;
    }

    if (titleInput) {
      titleInput.value =
        objective.title || "";
    }

    if (descriptionInput) {
      descriptionInput.value =
        objective.description || "";
    }

    if (categoryInput) {
      categoryInput.value =
        objective.category || "Other";
    }

    if (priorityInput) {
      priorityInput.value =
        objective.priority || "Medium";
    }

    if (progressInput) {
      progressInput.value =
        objective.progress ?? 0;
    }

    if (targetInput) {
      targetInput.value =
        objective.target ?? 100;
    }

    if (startDateInput) {
      startDateInput.value =
        objective.startDate || "";
    }

    if (targetDateInput) {
      targetDateInput.value =
        objective.targetDate || "";
    }

    if (statusInput) {
      statusInput.value =
        objective.status || "In Progress";
    }

    if (modalTitle) {
      modalTitle.textContent =
        "Edit Goal";
    }

  }


  modal.classList.add("open");
  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  setTimeout(() => {

    if (titleInput) {
      titleInput.focus();
    }

  }, 100);
}


/* =========================================
   CLOSE OBJECTIVE MODAL
========================================= */

function closeObjectiveModal(module) {

  const modal = module.querySelector(
    "[data-objectives-modal]"
  );

  if (!modal) {
    return;
  }

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );
}


/* =========================================
   SAVE OBJECTIVE FROM FORM
========================================= */

function saveObjectiveFromForm(module) {

  const hiddenId = module.querySelector(
    "[data-objectives-id]"
  );

  const titleInput = module.querySelector(
    "[data-objectives-title]"
  );

  const descriptionInput = module.querySelector(
    "[data-objectives-description]"
  );

  const categoryInput = module.querySelector(
    "[data-objectives-form-category]"
  );

  const priorityInput = module.querySelector(
    "[data-objectives-form-priority]"
  );

  const progressInput = module.querySelector(
    "[data-objectives-progress]"
  );

  const targetInput = module.querySelector(
    "[data-objectives-target]"
  );

  const startDateInput = module.querySelector(
    "[data-objectives-start-date]"
  );

  const targetDateInput = module.querySelector(
    "[data-objectives-target-date]"
  );

  const statusInput = module.querySelector(
    "[data-objectives-form-status]"
  );


  if (
    !titleInput ||
    !categoryInput ||
    !priorityInput ||
    !progressInput ||
    !targetInput ||
    !startDateInput ||
    !targetDateInput ||
    !statusInput
  ) {
    return;
  }


  const title =
    titleInput.value.trim();

  const description =
    descriptionInput
      ? descriptionInput.value.trim()
      : "";


  if (!title) {
    alert("Please enter a goal title.");
    titleInput.focus();
    return;
  }


  const progress =
    Number(progressInput.value);

  const target =
    Number(targetInput.value);


  if (
    Number.isNaN(progress) ||
    progress < 0 ||
    progress > 100
  ) {
    alert(
      "Progress must be between 0 and 100."
    );

    progressInput.focus();
    return;
  }


  if (
    Number.isNaN(target) ||
    target < 1 ||
    target > 100
  ) {
    alert(
      "Target must be between 1 and 100."
    );

    targetInput.focus();
    return;
  }


  if (!startDateInput.value) {
    alert("Please select a start date.");
    startDateInput.focus();
    return;
  }


  if (!targetDateInput.value) {
    alert("Please select a target date.");
    targetDateInput.focus();
    return;
  }


  if (
    targetDateInput.value <
    startDateInput.value
  ) {
    alert(
      "Target date cannot be before start date."
    );

    targetDateInput.focus();
    return;
  }


  let status =
    statusInput.value;


  if (progress >= 100) {
    status = "Completed";
  } else if (
    status === "Completed"
  ) {
    status = "In Progress";
  }


  const objectives =
    getObjectives();


  const idValue =
    hiddenId
      ? hiddenId.value
      : "";


  if (idValue) {

    const index =
      objectives.findIndex(
        (objective) =>
          Number(objective.id) ===
          Number(idValue)
      );


    if (index === -1) {
      alert(
        "Goal could not be found."
      );

      return;
    }


    objectives[index] = {
      ...objectives[index],
      title,
      description,
      category:
        categoryInput.value,
      priority:
        priorityInput.value,
      progress,
      target,
      status,
      startDate:
        startDateInput.value,
      targetDate:
        targetDateInput.value
    };


    if (!saveObjectives(objectives)) {
      alert(
        "Unable to update goal."
      );

      return;
    }


    closeObjectiveModal(module);

    renderObjectives(module);

    alert(
      "Goal updated successfully."
    );

  } else {

    const newObjective = {
      id: Date.now(),
      title,
      description,
      category:
        categoryInput.value,
      priority:
        priorityInput.value,
      progress,
      target,
      status,
      startDate:
        startDateInput.value,
      targetDate:
        targetDateInput.value
    };


    objectives.unshift(
      newObjective
    );


    if (!saveObjectives(objectives)) {
      alert(
        "Unable to save goal."
      );

      return;
    }


    closeObjectiveModal(module);

    renderObjectives(module);

    alert(
      "Goal added successfully."
    );
  }
}


/* =========================================
   DELETE OBJECTIVE
========================================= */

function deleteObjective(
  module,
  objectiveId
) {

  const objectives =
    getObjectives();


  const objective =
    objectives.find(
      (item) =>
        Number(item.id) ===
        Number(objectiveId)
    );


  if (!objective) {
    alert(
      "Goal could not be found."
    );

    return;
  }


  const confirmed =
    window.confirm(
      `Are you sure you want to delete "${objective.title}"?`
    );


  if (!confirmed) {
    return;
  }


  const updatedObjectives =
    objectives.filter(
      (item) =>
        Number(item.id) !==
        Number(objectiveId)
    );


  if (!saveObjectives(updatedObjectives)) {
    alert(
      "Unable to delete goal."
    );

    return;
  }


  renderObjectives(module);

  alert(
    "Goal deleted successfully."
  );
}


/* =========================================
   OPEN PROGRESS MODAL
========================================= */

function openProgressModal(
  module,
  objectiveId
) {

  const modal = module.querySelector(
    "[data-objectives-progress-modal]"
  );

  const idInput = module.querySelector(
    "[data-progress-id]"
  );

  const valueInput = module.querySelector(
    "[data-progress-value]"
  );

  const goalName = module.querySelector(
    "[data-progress-goal-name]"
  );


  if (
    !modal ||
    !idInput ||
    !valueInput ||
    !goalName
  ) {
    return;
  }


  const objectives =
    getObjectives();


  const objective =
    objectives.find(
      (item) =>
        Number(item.id) ===
        Number(objectiveId)
    );


  if (!objective) {
    return;
  }


  idInput.value =
    objective.id;

  valueInput.value =
    objective.progress ?? 0;

  goalName.textContent =
    objective.title;


  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  setTimeout(() => {

    valueInput.focus();

    valueInput.select();

  }, 100);
}


/* =========================================
   CLOSE PROGRESS MODAL
========================================= */

function closeProgressModal(module) {

  const modal = module.querySelector(
    "[data-objectives-progress-modal]"
  );

  if (!modal) {
    return;
  }

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );
}


/* =========================================
   UPDATE OBJECTIVE PROGRESS
========================================= */

function updateObjectiveProgress(
  module
) {

  const idInput = module.querySelector(
    "[data-progress-id]"
  );

  const valueInput = module.querySelector(
    "[data-progress-value]"
  );


  if (
    !idInput ||
    !valueInput
  ) {
    return;
  }


  const objectiveId =
    Number(idInput.value);

  const progress =
    Number(valueInput.value);


  if (
    Number.isNaN(progress) ||
    progress < 0 ||
    progress > 100
  ) {
    alert(
      "Progress must be between 0 and 100."
    );

    valueInput.focus();
    return;
  }


  const objectives =
    getObjectives();


  const index =
    objectives.findIndex(
      (objective) =>
        Number(objective.id) ===
        objectiveId
    );


  if (index === -1) {
    alert(
      "Goal could not be found."
    );

    return;
  }


  objectives[index].progress =
    progress;


  if (progress >= 100) {

    objectives[index].status =
      "Completed";

  } else if (
    objectives[index].status ===
    "Completed"
  ) {

    objectives[index].status =
      "In Progress";

  }


  if (!saveObjectives(objectives)) {
    alert(
      "Unable to update progress."
    );

    return;
  }


  closeProgressModal(module);

  renderObjectives(module);

  alert(
    "Goal progress updated successfully."
  );
}


/* =========================================
   RESET FILTERS
========================================= */

function resetObjectiveFilters(
  module
) {

  const searchInput = module.querySelector(
    "[data-objectives-search]"
  );

  const categoryFilter = module.querySelector(
    "[data-objectives-category]"
  );

  const statusFilter = module.querySelector(
    "[data-objectives-status]"
  );

  const priorityFilter = module.querySelector(
    "[data-objectives-priority]"
  );


  if (searchInput) {
    searchInput.value = "";
  }

  if (categoryFilter) {
    categoryFilter.value = "All";
  }

  if (statusFilter) {
    statusFilter.value = "All";
  }

  if (priorityFilter) {
    priorityFilter.value = "All";
  }


  renderObjectives(module);
}


/* =========================================
   CATEGORY ICON
========================================= */

function getCategoryIcon(
  category
) {

  const icons = {
    Academic: "📚",
    Attendance: "📅",
    Technology: "💻",
    Infrastructure: "🏫",
    "Student Development": "🎓",
    "Staff Development": "👨‍🏫",
    Other: "🎯"
  };


  return (
    icons[category] ||
    "🎯"
  );
}


/* =========================================
   STATUS ICON
========================================= */

function getStatusIcon(
  status
) {

  if (status === "Completed") {
    return "✅";
  }

  if (status === "In Progress") {
    return "🚀";
  }

  if (status === "On Hold") {
    return "⏸️";
  }

  return "⏳";
}


/* =========================================
   STATUS CLASS
========================================= */

function getStatusClass(
  status
) {

  if (status === "Completed") {
    return "completed";
  }

  if (status === "In Progress") {
    return "in-progress";
  }

  if (status === "On Hold") {
    return "on-hold";
  }

  return "not-started";
}


/* =========================================
   PRIORITY CLASS
========================================= */

function getPriorityClass(
  priority
) {

  if (priority === "High") {
    return "high";
  }

  if (priority === "Low") {
    return "low";
  }

  return "medium";
}


/* =========================================
   DATE FORMAT
========================================= */

function formatDate(
  dateString
) {

  if (!dateString) {
    return "Not set";
  }


  const date =
    new Date(
      `${dateString}T00:00:00`
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return dateString;
  }


  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );
}


/* =========================================
   TODAY DATE
========================================= */

function getTodayDate() {

  const date =
    new Date();


  const year =
    date.getFullYear();


  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");


  const day =
    String(
      date.getDate()
    ).padStart(2, "0");


  return `${year}-${month}-${day}`;
}


/* =========================================
   DEFAULT TARGET DATE
========================================= */

function getDefaultTargetDate() {

  const date =
    new Date();


  date.setMonth(
    date.getMonth() + 6
  );


  const year =
    date.getFullYear();


  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");


  const day =
    String(
      date.getDate()
    ).padStart(2, "0");


  return `${year}-${month}-${day}`;
}


/* =========================================
   CLAMP NUMBER
========================================= */

function clampNumber(
  value,
  min,
  max
) {

  const number =
    Number(value);


  if (Number.isNaN(number)) {
    return min;
  }


  return Math.min(
    Math.max(
      number,
      min
    ),
    max
  );
}


/* =========================================
   HTML ESCAPE
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