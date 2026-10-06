/* =========================================
   ADMIN NOTICE MANAGEMENT
========================================= */


/* =========================================
   STORAGE
========================================= */

const NOTICE_STORAGE_KEY =
  "government_school_admin_notices_v1";


/* =========================================
   DEFAULT NOTICES
========================================= */

const DEFAULT_NOTICES = [

  {
    id: 1,
    title: "Independence Day Holiday",
    description:
      "School will remain closed on 15 August due to Independence Day.",
    audience: "All",
    className: "All Classes",
    section: "All Sections",
    priority: "High",
    status: "Published",
    publishDate: "2026-08-10",
    expiryDate: "2026-08-16",
    createdAt: "2026-08-10",
    createdBy: "Administrator"
  },

  {
    id: 2,
    title: "Parent Teacher Meeting",
    description:
      "Parent Teacher Meeting will be conducted for Class 10 students. All parents are requested to attend.",
    audience: "Parents",
    className: "Class 10",
    section: "All Sections",
    priority: "High",
    status: "Published",
    publishDate: "2026-08-20",
    expiryDate: "2026-09-10",
    createdAt: "2026-08-20",
    createdBy: "Administrator"
  },

  {
    id: 3,
    title: "Monthly Test Schedule",
    description:
      "Monthly tests for all classes will begin from the first week of September.",
    audience: "Students",
    className: "All Classes",
    section: "All Sections",
    priority: "Medium",
    status: "Published",
    publishDate: "2026-08-28",
    expiryDate: "2026-09-15",
    createdAt: "2026-08-28",
    createdBy: "Administrator"
  },

  {
    id: 4,
    title: "Staff Meeting",
    description:
      "All teachers are requested to attend the monthly staff meeting in the conference room.",
    audience: "Teachers",
    className: "All Classes",
    section: "All Sections",
    priority: "Medium",
    status: "Draft",
    publishDate: "2026-09-05",
    expiryDate: "2026-09-30",
    createdAt: "2026-09-05",
    createdBy: "Administrator"
  }

];


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


function getTodayDate() {

  const date = new Date();

  const year =
    date.getFullYear();

  const month =
    String(date.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(date.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;

}


function formatDate(dateString) {

  if (!dateString) {
    return "-";
  }

  const date =
    new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
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


function createNoticeId() {

  return Date.now() +
    Math.floor(
      Math.random() * 1000
    );

}


/* =========================================
   LOAD NOTICES
========================================= */

function loadNotices() {

  try {

    const saved =
      localStorage.getItem(
        NOTICE_STORAGE_KEY
      );

    if (!saved) {

      localStorage.setItem(
        NOTICE_STORAGE_KEY,
        JSON.stringify(
          DEFAULT_NOTICES
        )
      );

      return [...DEFAULT_NOTICES];
    }


    const parsed =
      JSON.parse(saved);


    if (!Array.isArray(parsed)) {

      localStorage.setItem(
        NOTICE_STORAGE_KEY,
        JSON.stringify(
          DEFAULT_NOTICES
        )
      );

      return [...DEFAULT_NOTICES];
    }


    return parsed;

  } catch (error) {

    console.error(
      "Notice storage loading error:",
      error
    );

    return [...DEFAULT_NOTICES];

  }

}


/* =========================================
   SAVE NOTICES
========================================= */

function saveNotices(notices) {

  try {

    localStorage.setItem(
      NOTICE_STORAGE_KEY,
      JSON.stringify(notices)
    );

    return true;

  } catch (error) {

    console.error(
      "Notice storage saving error:",
      error
    );

    return false;

  }

}


/* =========================================
   ADMIN NOTICES UI
========================================= */

export function AdminNotices() {

  return `

    <div class="admin-notices">

      <!-- PAGE HEADER -->
      <div class="admin-notices-header">

        <div class="admin-notices-heading">

          <span class="admin-notices-kicker">
            COMMUNICATION
          </span>

          <h2>
            Notice Management
          </h2>

          <p>
            Create, publish and manage school notices
            for students, teachers and parents.
          </p>

        </div>


        <div class="admin-notices-header-actions">

          <button
            type="button"
            class="admin-notices-secondary-btn"
            data-notice-refresh
          >
            ↻ Refresh
          </button>


          <button
            type="button"
            class="admin-notices-primary-btn"
            data-notice-create
          >
            + Create Notice
          </button>

        </div>

      </div>


      <!-- SUMMARY -->
      <div
        class="admin-notices-summary"
        data-notice-summary
      >
        ${renderNoticeSummary()}
      </div>


      <!-- TOOLBAR -->
      <div class="admin-notices-toolbar">

        <div class="admin-notices-search">

          <span>
            🔍
          </span>

          <input
            type="search"
            placeholder="Search notices..."
            data-notice-search
            autocomplete="off"
          />

        </div>


        <select
          class="admin-notices-filter"
          data-notice-status-filter
        >

          <option value="All">
            All Status
          </option>

          <option value="Published">
            Published
          </option>

          <option value="Draft">
            Draft
          </option>

        </select>


        <select
          class="admin-notices-filter"
          data-notice-audience-filter
        >

          <option value="All">
            All Audience
          </option>

          <option value="Students">
            Students
          </option>

          <option value="Teachers">
            Teachers
          </option>

          <option value="Parents">
            Parents
          </option>

          <option value="All">
            Everyone
          </option>

        </select>


        <select
          class="admin-notices-filter"
          data-notice-priority-filter
        >

          <option value="All">
            All Priority
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


      <!-- NOTICE LIST -->
      <div
        class="admin-notices-list"
        data-notice-list
      >
        ${renderNoticeList()}
      </div>


      <!-- MODAL HOST -->
      <div
        class="admin-notice-modal-host"
        data-notice-modal-host
      ></div>

    </div>

  `;

}


/* =========================================
   SUMMARY
========================================= */

function renderNoticeSummary() {

  const notices =
    loadNotices();

  const total =
    notices.length;

  const published =
    notices.filter(
      notice =>
        notice.status === "Published"
    ).length;

  const drafts =
    notices.filter(
      notice =>
        notice.status === "Draft"
    ).length;

  const highPriority =
    notices.filter(
      notice =>
        notice.priority === "High"
    ).length;


  return `

    <div class="admin-notice-summary-card">

      <div class="admin-notice-summary-icon blue">
        📢
      </div>

      <div>

        <span>
          Total Notices
        </span>

        <strong>
          ${total}
        </strong>

      </div>

    </div>


    <div class="admin-notice-summary-card">

      <div class="admin-notice-summary-icon green">
        ✓
      </div>

      <div>

        <span>
          Published
        </span>

        <strong>
          ${published}
        </strong>

      </div>

    </div>


    <div class="admin-notice-summary-card">

      <div class="admin-notice-summary-icon orange">
        📝
      </div>

      <div>

        <span>
          Drafts
        </span>

        <strong>
          ${drafts}
        </strong>

      </div>

    </div>


    <div class="admin-notice-summary-card">

      <div class="admin-notice-summary-icon red">
        ⚠
      </div>

      <div>

        <span>
          High Priority
        </span>

        <strong>
          ${highPriority}
        </strong>

      </div>

    </div>

  `;

}


/* =========================================
   FILTERED NOTICE LIST
========================================= */

function renderNoticeList() {

  const notices =
    loadNotices();


  const searchInput =
    document.querySelector(
      "[data-notice-search]"
    );

  const statusFilter =
    document.querySelector(
      "[data-notice-status-filter]"
    );

  const audienceFilter =
    document.querySelector(
      "[data-notice-audience-filter]"
    );

  const priorityFilter =
    document.querySelector(
      "[data-notice-priority-filter]"
    );


  const search =
    searchInput?.value
      ?.trim()
      .toLowerCase() || "";


  const status =
    statusFilter?.value || "All";


  const audience =
    audienceFilter?.value || "All";


  const priority =
    priorityFilter?.value || "All";


  const filtered =
    notices.filter(
      notice => {

        const matchesSearch =
          !search ||
          notice.title
            .toLowerCase()
            .includes(search) ||
          notice.description
            .toLowerCase()
            .includes(search) ||
          notice.className
            .toLowerCase()
            .includes(search);


        const matchesStatus =
          status === "All" ||
          notice.status === status;


        const matchesAudience =
          audience === "All" ||
          notice.audience === audience;


        const matchesPriority =
          priority === "All" ||
          notice.priority === priority;


        return (
          matchesSearch &&
          matchesStatus &&
          matchesAudience &&
          matchesPriority
        );

      }
    );


  if (!filtered.length) {

    return `

      <div class="admin-notice-empty">

        <div class="admin-notice-empty-icon">
          📢
        </div>

        <h3>
          No notices found
        </h3>

        <p>
          Try changing your search or filter,
          or create a new notice.
        </p>

        <button
          type="button"
          class="admin-notices-primary-btn"
          data-notice-create
        >
          + Create Notice
        </button>

      </div>

    `;

  }


  return filtered
    .map(
      notice =>
        renderNoticeCard(notice)
    )
    .join("");

}


/* =========================================
   NOTICE CARD
========================================= */

function renderNoticeCard(notice) {

  const statusClass =
    notice.status
      .toLowerCase();


  const priorityClass =
    notice.priority
      .toLowerCase();


  const audienceIcon =
    notice.audience === "Students"
      ? "🎓"
      : notice.audience === "Teachers"
        ? "👨‍🏫"
        : notice.audience === "Parents"
          ? "👨‍👩‍👧"
          : "👥";


  return `

    <article
      class="admin-notice-card"
      data-notice-id="${notice.id}"
    >

      <!-- TOP -->
      <div class="admin-notice-card-top">

        <div class="admin-notice-card-icon">
          📢
        </div>


        <div class="admin-notice-card-content">

          <div class="admin-notice-card-title-row">

            <h3>
              ${escapeHtml(notice.title)}
            </h3>


            <span
              class="admin-notice-priority ${priorityClass}"
            >
              ${escapeHtml(notice.priority)}
            </span>

          </div>


          <p>
            ${escapeHtml(notice.description)}
          </p>

        </div>

      </div>


      <!-- META -->
      <div class="admin-notice-meta">

        <div class="admin-notice-meta-item">

          <span>
            👥
          </span>

          <div>

            <small>
              Audience
            </small>

            <strong>
              ${escapeHtml(notice.audience)}
            </strong>

          </div>

        </div>


        <div class="admin-notice-meta-item">

          <span>
            🏫
          </span>

          <div>

            <small>
              Class
            </small>

            <strong>
              ${escapeHtml(notice.className)}
            </strong>

          </div>

        </div>


        <div class="admin-notice-meta-item">

          <span>
            📅
          </span>

          <div>

            <small>
              Publish Date
            </small>

            <strong>
              ${formatDate(
                notice.publishDate
              )}
            </strong>

          </div>

        </div>


        <div class="admin-notice-meta-item">

          <span>
            ⏳
          </span>

          <div>

            <small>
              Expiry
            </small>

            <strong>
              ${formatDate(
                notice.expiryDate
              )}
            </strong>

          </div>

        </div>

      </div>


      <!-- FOOTER -->
      <div class="admin-notice-card-footer">

        <div>

          <span
            class="admin-notice-status ${statusClass}"
          >
            ${notice.status === "Published"
              ? "● Published"
              : "● Draft"}
          </span>

          <span class="admin-notice-audience">
            ${audienceIcon}
            ${escapeHtml(notice.audience)}
          </span>

        </div>


        <div class="admin-notice-actions">

          <button
            type="button"
            class="admin-notice-icon-btn"
            title="View Notice"
            data-notice-action="view"
            data-notice-id="${notice.id}"
          >
            👁️
          </button>


          <button
            type="button"
            class="admin-notice-icon-btn"
            title="Edit Notice"
            data-notice-action="edit"
            data-notice-id="${notice.id}"
          >
            ✏️
          </button>


          <button
            type="button"
            class="admin-notice-publish-btn"
            data-notice-action="toggle-status"
            data-notice-id="${notice.id}"
          >
            ${
              notice.status === "Published"
                ? "Unpublish"
                : "Publish"
            }
          </button>


          <button
            type="button"
            class="admin-notice-delete-btn"
            title="Delete Notice"
            data-notice-action="delete"
            data-notice-id="${notice.id}"
          >
            🗑️
          </button>

        </div>

      </div>

    </article>

  `;

}


/* =========================================
   CREATE / EDIT MODAL
========================================= */

function renderNoticeForm(notice = null) {

  const isEdit =
    Boolean(notice);


  const today =
    getTodayDate();


  const data =
    notice || {

      title: "",
      description: "",
      audience: "All",
      className: "All Classes",
      section: "All Sections",
      priority: "Medium",
      status: "Draft",
      publishDate: today,
      expiryDate: ""

    };


  return `

    <div
      class="admin-notice-modal-overlay"
      data-notice-close-overlay
    >

      <div
        class="admin-notice-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-modal-title"
      >

        <!-- MODAL HEADER -->
        <div class="admin-notice-modal-header">

          <div>

            <span>
              ${isEdit
                ? "EDIT NOTICE"
                : "NEW NOTICE"}
            </span>

            <h3 id="notice-modal-title">
              ${isEdit
                ? "Edit Notice"
                : "Create New Notice"}
            </h3>

          </div>


          <button
            type="button"
            class="admin-notice-modal-close"
            data-notice-close
            aria-label="Close"
          >
            ×
          </button>

        </div>


        <!-- FORM -->
        <form
          class="admin-notice-form"
          data-notice-form
          data-notice-edit-id="${
            isEdit
              ? notice.id
              : ""
          }"
        >

          <div class="admin-notice-form-group full">

            <label>
              Notice Title
              <span>*</span>
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter notice title"
              value="${escapeHtml(data.title)}"
              required
              maxlength="120"
            />

          </div>


          <div class="admin-notice-form-group full">

            <label>
              Notice Description
              <span>*</span>
            </label>

            <textarea
              name="description"
              placeholder="Write notice details..."
              rows="5"
              maxlength="1000"
              required
            >${escapeHtml(
              data.description
            )}</textarea>

            <small>
              Maximum 1000 characters
            </small>

          </div>


          <div class="admin-notice-form-grid">

            <div class="admin-notice-form-group">

              <label>
                Audience
                <span>*</span>
              </label>

              <select
                name="audience"
                required
              >

                <option
                  value="All"
                  ${data.audience === "All"
                    ? "selected"
                    : ""}
                >
                  Everyone
                </option>

                <option
                  value="Students"
                  ${data.audience === "Students"
                    ? "selected"
                    : ""}
                >
                  Students
                </option>

                <option
                  value="Teachers"
                  ${data.audience === "Teachers"
                    ? "selected"
                    : ""}
                >
                  Teachers
                </option>

                <option
                  value="Parents"
                  ${data.audience === "Parents"
                    ? "selected"
                    : ""}
                >
                  Parents
                </option>

              </select>

            </div>


            <div class="admin-notice-form-group">

              <label>
                Priority
                <span>*</span>
              </label>

              <select
                name="priority"
                required
              >

                <option
                  value="High"
                  ${data.priority === "High"
                    ? "selected"
                    : ""}
                >
                  High
                </option>

                <option
                  value="Medium"
                  ${data.priority === "Medium"
                    ? "selected"
                    : ""}
                >
                  Medium
                </option>

                <option
                  value="Low"
                  ${data.priority === "Low"
                    ? "selected"
                    : ""}
                >
                  Low
                </option>

              </select>

            </div>


            <div class="admin-notice-form-group">

              <label>
                Class
              </label>

              <select name="className">

                <option
                  value="All Classes"
                  ${data.className === "All Classes"
                    ? "selected"
                    : ""}
                >
                  All Classes
                </option>

                <option
                  value="Class 6"
                  ${data.className === "Class 6"
                    ? "selected"
                    : ""}
                >
                  Class 6
                </option>

                <option
                  value="Class 7"
                  ${data.className === "Class 7"
                    ? "selected"
                    : ""}
                >
                  Class 7
                </option>

                <option
                  value="Class 8"
                  ${data.className === "Class 8"
                    ? "selected"
                    : ""}
                >
                  Class 8
                </option>

                <option
                  value="Class 9"
                  ${data.className === "Class 9"
                    ? "selected"
                    : ""}
                >
                  Class 9
                </option>

                <option
                  value="Class 10"
                  ${data.className === "Class 10"
                    ? "selected"
                    : ""}
                >
                  Class 10
                </option>

                <option
                  value="Class 11"
                  ${data.className === "Class 11"
                    ? "selected"
                    : ""}
                >
                  Class 11
                </option>

                <option
                  value="Class 12"
                  ${data.className === "Class 12"
                    ? "selected"
                    : ""}
                >
                  Class 12
                </option>

              </select>

            </div>


            <div class="admin-notice-form-group">

              <label>
                Section
              </label>

              <select name="section">

                <option
                  value="All Sections"
                  ${data.section === "All Sections"
                    ? "selected"
                    : ""}
                >
                  All Sections
                </option>

                <option
                  value="A"
                  ${data.section === "A"
                    ? "selected"
                    : ""}
                >
                  Section A
                </option>

                <option
                  value="B"
                  ${data.section === "B"
                    ? "selected"
                    : ""}
                >
                  Section B
                </option>

                <option
                  value="C"
                  ${data.section === "C"
                    ? "selected"
                    : ""}
                >
                  Section C
                </option>

              </select>

            </div>


            <div class="admin-notice-form-group">

              <label>
                Publish Date
                <span>*</span>
              </label>

              <input
                type="date"
                name="publishDate"
                value="${escapeHtml(
                  data.publishDate
                )}"
                required
              />

            </div>


            <div class="admin-notice-form-group">

              <label>
                Expiry Date
              </label>

              <input
                type="date"
                name="expiryDate"
                value="${escapeHtml(
                  data.expiryDate
                )}"
              />

            </div>

          </div>


          <div class="admin-notice-form-group full">

            <label>
              Notice Status
            </label>

            <div class="admin-notice-status-options">

              <label class="admin-notice-radio">

                <input
                  type="radio"
                  name="status"
                  value="Draft"
                  ${
                    data.status === "Draft"
                      ? "checked"
                      : ""
                  }
                />

                <span>
                  Save as Draft
                </span>

              </label>


              <label class="admin-notice-radio">

                <input
                  type="radio"
                  name="status"
                  value="Published"
                  ${
                    data.status === "Published"
                      ? "checked"
                      : ""
                  }
                />

                <span>
                  Publish Now
                </span>

              </label>

            </div>

          </div>


          <!-- ACTIONS -->
          <div class="admin-notice-form-actions">

            <button
              type="button"
              class="admin-notice-cancel-btn"
              data-notice-close
            >
              Cancel
            </button>


            <button
              type="submit"
              class="admin-notices-primary-btn"
            >
              ${
                isEdit
                  ? "Save Changes"
                  : "Create Notice"
              }
            </button>

          </div>

        </form>

      </div>

    </div>

  `;

}


/* =========================================
   VIEW MODAL
========================================= */

function renderNoticeView(notice) {

  return `

    <div
      class="admin-notice-modal-overlay"
      data-notice-close-overlay
    >

      <div
        class="admin-notice-modal admin-notice-view-modal"
        role="dialog"
        aria-modal="true"
      >

        <div class="admin-notice-modal-header">

          <div>

            <span>
              NOTICE DETAILS
            </span>

            <h3>
              View Notice
            </h3>

          </div>


          <button
            type="button"
            class="admin-notice-modal-close"
            data-notice-close
          >
            ×
          </button>

        </div>


        <div class="admin-notice-view-body">

          <div class="admin-notice-view-title">

            <div class="admin-notice-view-icon">
              📢
            </div>

            <div>

              <h2>
                ${escapeHtml(notice.title)}
              </h2>

              <div>

                <span
                  class="admin-notice-status ${
                    notice.status.toLowerCase()
                  }"
                >
                  ${
                    notice.status === "Published"
                      ? "● Published"
                      : "● Draft"
                  }
                </span>


                <span
                  class="admin-notice-priority ${
                    notice.priority.toLowerCase()
                  }"
                >
                  ${escapeHtml(
                    notice.priority
                  )}
                </span>

              </div>

            </div>

          </div>


          <div class="admin-notice-description-box">

            ${escapeHtml(
              notice.description
            )}

          </div>


          <div class="admin-notice-view-grid">

            <div>

              <span>
                Audience
              </span>

              <strong>
                ${escapeHtml(
                  notice.audience
                )}
              </strong>

            </div>


            <div>

              <span>
                Class
              </span>

              <strong>
                ${escapeHtml(
                  notice.className
                )}
              </strong>

            </div>


            <div>

              <span>
                Section
              </span>

              <strong>
                ${escapeHtml(
                  notice.section
                )}
              </strong>

            </div>


            <div>

              <span>
                Publish Date
              </span>

              <strong>
                ${formatDate(
                  notice.publishDate
                )}
              </strong>

            </div>


            <div>

              <span>
                Expiry Date
              </span>

              <strong>
                ${
                  notice.expiryDate
                    ? formatDate(
                        notice.expiryDate
                      )
                    : "-"
                }
              </strong>

            </div>


            <div>

              <span>
                Created By
              </span>

              <strong>
                ${escapeHtml(
                  notice.createdBy
                )}
              </strong>

            </div>

          </div>


          <div class="admin-notice-view-actions">

            <button
              type="button"
              class="admin-notice-cancel-btn"
              data-notice-close
            >
              Close
            </button>


            <button
              type="button"
              class="admin-notices-primary-btn"
              data-notice-action="edit"
              data-notice-id="${notice.id}"
            >
              ✏️ Edit Notice
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

export function setupAdminNotices() {

  const container =
    document.querySelector(
      ".admin-notices"
    );


  if (!container) {
    return;
  }


  if (
    container.dataset.ready === "true"
  ) {
    return;
  }


  container.dataset.ready = "true";


  /* =========================================
     SEARCH
  ========================================= */

  const search =
    container.querySelector(
      "[data-notice-search]"
    );


  if (search) {

    search.addEventListener(
      "input",
      () => {

        refreshNoticeList(
          container
        );

      }
    );

  }


  /* =========================================
     STATUS FILTER
  ========================================= */

  const statusFilter =
    container.querySelector(
      "[data-notice-status-filter]"
    );


  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      () => {

        refreshNoticeList(
          container
        );

      }
    );

  }


  /* =========================================
     AUDIENCE FILTER
  ========================================= */

  const audienceFilter =
    container.querySelector(
      "[data-notice-audience-filter]"
    );


  if (audienceFilter) {

    audienceFilter.addEventListener(
      "change",
      () => {

        refreshNoticeList(
          container
        );

      }
    );

  }


  /* =========================================
     PRIORITY FILTER
  ========================================= */

  const priorityFilter =
    container.querySelector(
      "[data-notice-priority-filter]"
    );


  if (priorityFilter) {

    priorityFilter.addEventListener(
      "change",
      () => {

        refreshNoticeList(
          container
        );

      }
    );

  }


  /* =========================================
     CLICK EVENTS
  ========================================= */

  container.addEventListener(
    "click",
    (event) => {

      const createButton =
        event.target.closest(
          "[data-notice-create]"
        );


      if (createButton) {

        event.preventDefault();

        openCreateNoticeModal(
          container
        );

        return;
      }


      const refreshButton =
        event.target.closest(
          "[data-notice-refresh]"
        );


      if (refreshButton) {

        event.preventDefault();

        refreshNoticeModule(
          container
        );

        return;
      }


      const closeButton =
        event.target.closest(
          "[data-notice-close]"
        );


      if (closeButton) {

        event.preventDefault();

        closeNoticeModal(
          container
        );

        return;
      }


      const overlay =
        event.target.closest(
          "[data-notice-close-overlay]"
        );


      if (
        overlay &&
        event.target === overlay
      ) {

        closeNoticeModal(
          container
        );

        return;
      }


      const actionButton =
        event.target.closest(
          "[data-notice-action]"
        );


      if (!actionButton) {
        return;
      }


      event.preventDefault();


      const action =
        actionButton.dataset.noticeAction;


      const id =
        Number(
          actionButton.dataset.noticeId
        );


      if (!id) {
        return;
      }


      handleNoticeAction(
        container,
        action,
        id
      );

    }
  );


  /* =========================================
     FORM SUBMIT
  ========================================= */

  container.addEventListener(
    "submit",
    (event) => {

      const form =
        event.target.closest(
          "[data-notice-form]"
        );


      if (!form) {
        return;
      }


      event.preventDefault();


      handleNoticeSubmit(
        container,
        form
      );

    }
  );


  /* =========================================
     ESC KEY
  ========================================= */

  container.__noticeKeydown =
    (event) => {

      if (
        event.key === "Escape"
      ) {

        closeNoticeModal(
          container
        );

      }

    };


  document.addEventListener(
    "keydown",
    container.__noticeKeydown
  );

}


/* =========================================
   REFRESH LIST
========================================= */

function refreshNoticeList(container) {

  const list =
    container.querySelector(
      "[data-notice-list]"
    );


  const summary =
    container.querySelector(
      "[data-notice-summary]"
    );


  if (list) {

    list.innerHTML =
      renderNoticeList();

  }


  if (summary) {

    summary.innerHTML =
      renderNoticeSummary();

  }

}


/* =========================================
   REFRESH MODULE
========================================= */

function refreshNoticeModule(container) {

  refreshNoticeList(
    container
  );

}


/* =========================================
   OPEN CREATE MODAL
========================================= */

function openCreateNoticeModal(container) {

  const host =
    container.querySelector(
      "[data-notice-modal-host]"
    );


  if (!host) {
    return;
  }


  host.innerHTML =
    renderNoticeForm();


  document.body.classList.add(
    "admin-notice-modal-open"
  );


  const firstInput =
    host.querySelector(
      'input[name="title"]'
    );


  if (firstInput) {

    setTimeout(
      () => firstInput.focus(),
      50
    );

  }

}


/* =========================================
   OPEN EDIT MODAL
========================================= */

function openEditNoticeModal(
  container,
  noticeId
) {

  const notices =
    loadNotices();


  const notice =
    notices.find(
      item =>
        Number(item.id) ===
        Number(noticeId)
    );


  if (!notice) {

    alert(
      "Notice not found."
    );

    return;
  }


  const host =
    container.querySelector(
      "[data-notice-modal-host]"
    );


  if (!host) {
    return;
  }


  host.innerHTML =
    renderNoticeForm(
      notice
    );


  document.body.classList.add(
    "admin-notice-modal-open"
  );

}


/* =========================================
   OPEN VIEW MODAL
========================================= */

function openViewNoticeModal(
  container,
  noticeId
) {

  const notices =
    loadNotices();


  const notice =
    notices.find(
      item =>
        Number(item.id) ===
        Number(noticeId)
    );


  if (!notice) {

    alert(
      "Notice not found."
    );

    return;
  }


  const host =
    container.querySelector(
      "[data-notice-modal-host]"
    );


  if (!host) {
    return;
  }


  host.innerHTML =
    renderNoticeView(
      notice
    );


  document.body.classList.add(
    "admin-notice-modal-open"
  );

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeNoticeModal(container) {

  const host =
    container.querySelector(
      "[data-notice-modal-host]"
    );


  if (host) {

    host.innerHTML = "";

  }


  document.body.classList.remove(
    "admin-notice-modal-open"
  );

}


/* =========================================
   HANDLE ACTION
========================================= */

function handleNoticeAction(
  container,
  action,
  id
) {

  if (action === "view") {

    openViewNoticeModal(
      container,
      id
    );

    return;
  }


  if (action === "edit") {

    openEditNoticeModal(
      container,
      id
    );

    return;
  }


  if (action === "toggle-status") {

    toggleNoticeStatus(
      container,
      id
    );

    return;
  }


  if (action === "delete") {

    deleteNotice(
      container,
      id
    );

  }

}


/* =========================================
   TOGGLE STATUS
========================================= */

function toggleNoticeStatus(
  container,
  id
) {

  const notices =
    loadNotices();


  const notice =
    notices.find(
      item =>
        Number(item.id) ===
        Number(id)
    );


  if (!notice) {

    alert(
      "Notice not found."
    );

    return;
  }


  if (
    notice.status ===
    "Published"
  ) {

    const confirmed =
      window.confirm(
        "Do you want to unpublish this notice?"
      );


    if (!confirmed) {
      return;
    }


    notice.status =
      "Draft";

  } else {

    const confirmed =
      window.confirm(
        "Do you want to publish this notice?"
      );


    if (!confirmed) {
      return;
    }


    notice.status =
      "Published";

  }


  notice.updatedAt =
    new Date().toISOString();


  saveNotices(
    notices
  );


  refreshNoticeList(
    container
  );

}


/* =========================================
   DELETE NOTICE
========================================= */

function deleteNotice(
  container,
  id
) {

  const notices =
    loadNotices();


  const notice =
    notices.find(
      item =>
        Number(item.id) ===
        Number(id)
    );


  if (!notice) {

    alert(
      "Notice not found."
    );

    return;
  }


  const confirmed =
    window.confirm(
      `Delete "${notice.title}"?`
    );


  if (!confirmed) {
    return;
  }


  const updated =
    notices.filter(
      item =>
        Number(item.id) !==
        Number(id)
    );


  saveNotices(
    updated
  );


  refreshNoticeList(
    container
  );

}


/* =========================================
   FORM SUBMIT
========================================= */

function handleNoticeSubmit(
  container,
  form
) {

  const formData =
    new FormData(
      form
    );


  const title =
    String(
      formData.get("title") || ""
    ).trim();


  const description =
    String(
      formData.get("description") || ""
    ).trim();


  const audience =
    String(
      formData.get("audience") || "All"
    );


  const className =
    String(
      formData.get("className") ||
      "All Classes"
    );


  const section =
    String(
      formData.get("section") ||
      "All Sections"
    );


  const priority =
    String(
      formData.get("priority") ||
      "Medium"
    );


  const status =
    String(
      formData.get("status") ||
      "Draft"
    );


  const publishDate =
    String(
      formData.get("publishDate") ||
      ""
    );


  const expiryDate =
    String(
      formData.get("expiryDate") ||
      ""
    );


  /* =========================================
     VALIDATION
  ========================================= */

  if (!title) {

    alert(
      "Please enter notice title."
    );

    return;
  }


  if (!description) {

    alert(
      "Please enter notice description."
    );

    return;
  }


  if (!publishDate) {

    alert(
      "Please select publish date."
    );

    return;
  }


  if (
    expiryDate &&
    expiryDate < publishDate
  ) {

    alert(
      "Expiry date cannot be before publish date."
    );

    return;
  }


  const notices =
    loadNotices();


  const editId =
    form.dataset.noticeEditId;


  /* =========================================
     EDIT
  ========================================= */

  if (editId) {

    const index =
      notices.findIndex(
        item =>
          Number(item.id) ===
          Number(editId)
      );


    if (index === -1) {

      alert(
        "Notice not found."
      );

      return;
    }


    notices[index] = {

      ...notices[index],

      title,
      description,
      audience,
      className,
      section,
      priority,
      status,
      publishDate,
      expiryDate,

      updatedAt:
        new Date().toISOString()

    };


    saveNotices(
      notices
    );


    closeNoticeModal(
      container
    );


    refreshNoticeList(
      container
    );


    showNoticeMessage(
      "Notice updated successfully."
    );


    return;
  }


  /* =========================================
     CREATE
  ========================================= */

  const newNotice = {

    id:
      createNoticeId(),

    title,

    description,

    audience,

    className,

    section,

    priority,

    status,

    publishDate,

    expiryDate,

    createdAt:
      getTodayDate(),

    createdBy:
      "Administrator"

  };


  notices.unshift(
    newNotice
  );


  saveNotices(
    notices
  );


  closeNoticeModal(
    container
  );


  refreshNoticeList(
    container
  );


  showNoticeMessage(
    "Notice created successfully."
  );

}


/* =========================================
   SUCCESS MESSAGE
========================================= */

function showNoticeMessage(message) {

  const existing =
    document.querySelector(
      ".admin-notice-toast"
    );


  if (existing) {
    existing.remove();
  }


  const toast =
    document.createElement(
      "div"
    );


  toast.className =
    "admin-notice-toast";


  toast.innerHTML = `

    <span>
      ✓
    </span>

    <div>

      <strong>
        Success
      </strong>

      <p>
        ${escapeHtml(message)}
      </p>

    </div>

  `;


  document.body.appendChild(
    toast
  );


  setTimeout(
    () => {

      toast.classList.add(
        "hide"
      );


      setTimeout(
        () => {

          toast.remove();

        },
        250
      );

    },
    2500
  );

}