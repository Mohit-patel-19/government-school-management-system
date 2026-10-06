/* =========================================================
   TEACHER NOTICES
========================================================= */

const STORAGE_KEY = "teacher_notices";

let notices = JSON.parse(
  localStorage.getItem(STORAGE_KEY) || "[]"
);

let editingNoticeId = null;


/* =========================================================
   HELPERS
========================================================= */

function saveNotices() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notices)
  );
}


function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}


function escapeHTML(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function formatDate(dateValue) {

  if (!dateValue) {
    return "";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}


/* =========================================================
   MAIN PAGE
========================================================= */

export function TeacherNotices() {

  editingNoticeId = null;

  return `
    <div class="dashboard-main teacher-notices-page">

      <!-- HEADER -->
      <div class="tn-header">

        <div>

          <h1>
            📢 Notices
          </h1>

          <p>
            Create and manage notices for students
          </p>

        </div>


        <div class="tn-header-actions">

          <button
            type="button"
            class="tn-back-btn"
            data-tn-action="back-dashboard"
          >
            ← Back to Dashboard
          </button>


          <button
            type="button"
            class="tn-primary-btn"
            data-tn-action="show-form"
          >
            + Create Notice
          </button>

        </div>

      </div>


      <!-- STATS -->
      ${renderStats()}


      <!-- TOOLBAR -->
      <div class="tn-toolbar">

        <div class="tn-search">

          <span>
            🔎
          </span>

          <input
            type="search"
            id="tnSearch"
            placeholder="Search notices..."
          />

        </div>


        <select id="tnClassFilter">

          <option value="">
            All Classes
          </option>

          <option value="All Classes">
            All Classes
          </option>

          <option value="Class 6">
            Class 6
          </option>

          <option value="Class 7">
            Class 7
          </option>

          <option value="Class 8">
            Class 8
          </option>

          <option value="Class 9">
            Class 9
          </option>

          <option value="Class 10">
            Class 10
          </option>

          <option value="Class 11">
            Class 11
          </option>

          <option value="Class 12">
            Class 12
          </option>

        </select>


        <select id="tnCategoryFilter">

          <option value="">
            All Categories
          </option>

          <option value="Academic">
            Academic
          </option>

          <option value="Exam">
            Exam
          </option>

          <option value="Holiday">
            Holiday
          </option>

          <option value="Event">
            Event
          </option>

          <option value="General">
            General
          </option>

          <option value="Important">
            Important
          </option>

        </select>


        <select id="tnStatusFilter">

          <option value="">
            All Notices
          </option>

          <option value="important">
            Important
          </option>

          <option value="normal">
            Normal
          </option>

        </select>

      </div>


      <!-- NOTICE CONTENT -->
      <div id="tnContent">

        ${renderNotices()}

      </div>

    </div>
  `;
}


/* =========================================================
   STATS
========================================================= */

function renderStats() {

  const total =
    notices.length;


  const important =
    notices.filter(
      notice => notice.important
    ).length;


  const academic =
    notices.filter(
      notice =>
        notice.category === "Academic"
    ).length;


  const upcoming =
    notices.filter(notice => {

      if (!notice.noticeDate) {
        return false;
      }

      const noticeDate =
        new Date(notice.noticeDate);

      const today =
        new Date();

      today.setHours(
        0,
        0,
        0,
        0
      );

      return noticeDate >= today;

    }).length;


  return `
    <div class="tn-stats">


      <div class="tn-stat-card">

        <div class="tn-stat-icon">
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


      <div class="tn-stat-card">

        <div class="tn-stat-icon">
          ⭐
        </div>

        <div>

          <span>
            Important
          </span>

          <strong>
            ${important}
          </strong>

        </div>

      </div>


      <div class="tn-stat-card">

        <div class="tn-stat-icon">
          📚
        </div>

        <div>

          <span>
            Academic
          </span>

          <strong>
            ${academic}
          </strong>

        </div>

      </div>


      <div class="tn-stat-card">

        <div class="tn-stat-icon">
          📅
        </div>

        <div>

          <span>
            Upcoming
          </span>

          <strong>
            ${upcoming}
          </strong>

        </div>

      </div>


    </div>
  `;
}


/* =========================================================
   NOTICE LIST
========================================================= */

function renderNotices(list = notices) {

  if (!list.length) {

    return `
      <div class="tn-empty">

        <div class="tn-empty-icon">
          📢
        </div>

        <h3>
          No Notices Found
        </h3>

        <p>
          Create your first notice for students.
        </p>

        <button
          type="button"
          class="tn-primary-btn"
          data-tn-action="show-form"
        >
          + Create Notice
        </button>

      </div>
    `;
  }


  return `
    <div class="tn-list">

      ${list.map(notice => {

        const categoryIcon =
          getCategoryIcon(
            notice.category
          );


        return `
          <div class="tn-card">

            <div class="tn-card-left">

              <div class="tn-notice-icon">

                ${categoryIcon}

              </div>

            </div>


            <div class="tn-card-content">

              <div class="tn-card-title-row">

                <div>

                  <div class="tn-badges">

                    <span class="tn-category-badge">

                      ${escapeHTML(
                        notice.category
                      )}

                    </span>


                    ${
                      notice.important
                        ? `
                          <span class="tn-important-badge">
                            ⭐ Important
                          </span>
                        `
                        : ""
                    }

                  </div>


                  <h3>
                    ${escapeHTML(
                      notice.title
                    )}
                  </h3>

                </div>


                <div class="tn-card-actions">

                  <button
                    type="button"
                    class="tn-icon-btn"
                    title="View Notice"
                    data-tn-action="view"
                    data-id="${notice.id}"
                  >
                    👁️
                  </button>


                  <button
                    type="button"
                    class="tn-icon-btn"
                    title="Edit Notice"
                    data-tn-action="edit"
                    data-id="${notice.id}"
                  >
                    ✏️
                  </button>


                  <button
                    type="button"
                    class="tn-icon-btn danger"
                    title="Delete Notice"
                    data-tn-action="delete"
                    data-id="${notice.id}"
                  >
                    🗑️
                  </button>

                </div>

              </div>


              <p class="tn-description">

                ${escapeHTML(
                  notice.description ||
                  "No description added."
                )}

              </p>


              <div class="tn-meta">

                <span>
                  🏫
                  ${escapeHTML(
                    notice.className
                  )}
                </span>


                <span>
                  📅
                  ${formatDate(
                    notice.noticeDate
                  )}
                </span>


                <span>
                  👨‍🏫
                  ${escapeHTML(
                    notice.teacherName ||
                    "Teacher"
                  )}
                </span>

              </div>

            </div>


            <div class="tn-card-footer">

              <span>
                Created:
                ${formatDate(
                  notice.createdAt
                )}
              </span>


              <button
                type="button"
                class="tn-view-btn"
                data-tn-action="view"
                data-id="${notice.id}"
              >
                View Notice →
              </button>

            </div>

          </div>
        `;

      }).join("")}

    </div>
  `;
}


/* =========================================================
   CATEGORY ICON
========================================================= */

function getCategoryIcon(category) {

  switch (category) {

    case "Academic":
      return "📚";

    case "Exam":
      return "📝";

    case "Holiday":
      return "🏖️";

    case "Event":
      return "🎉";

    case "Important":
      return "⭐";

    default:
      return "📢";

  }
}


/* =========================================================
   FORM
========================================================= */

function renderForm(notice = null) {

  editingNoticeId =
    notice?.id || null;


  const root =
    document.querySelector(
      ".teacher-notices-page"
    );


  if (!root) {
    return;
  }


  root.innerHTML = `

    <div class="tn-form-page">


      <!-- FORM HEADER -->

      <div class="tn-form-header">

        <div>

          <h1>

            ${
              notice
                ? "✏️ Edit Notice"
                : "📢 Create New Notice"
            }

          </h1>

          <p>

            ${
              notice
                ? "Update notice details"
                : "Create a new notice for students"
            }

          </p>

        </div>


        <button
          type="button"
          class="tn-back-btn"
          data-tn-action="back-notices"
        >
          ← Back
        </button>

      </div>


      <!-- FORM -->

      <form id="teacherNoticeForm">


        <div class="tn-form-grid">


          <!-- TITLE -->

          <div class="tn-form-group full">

            <label>
              Notice Title *
            </label>

            <input
              type="text"
              name="title"
              placeholder="Example: Unit Test Examination Notice"
              value="${escapeHTML(
                notice?.title || ""
              )}"
              required
            />

          </div>


          <!-- CLASS -->

          <div class="tn-form-group">

            <label>
              Target Class *
            </label>

            <select
              name="className"
              required
            >

              <option value="">
                Select Class
              </option>

              <option
                value="All Classes"
                ${
                  notice?.className ===
                  "All Classes"
                    ? "selected"
                    : ""
                }
              >
                All Classes
              </option>

              ${[
                "Class 6",
                "Class 7",
                "Class 8",
                "Class 9",
                "Class 10",
                "Class 11",
                "Class 12"
              ].map(className => `

                <option
                  value="${className}"
                  ${
                    notice?.className ===
                    className
                      ? "selected"
                      : ""
                  }
                >
                  ${className}
                </option>

              `).join("")}

            </select>

          </div>


          <!-- SECTION -->

          <div class="tn-form-group">

            <label>
              Section
            </label>

            <select name="section">

              <option value="">
                All Sections
              </option>

              ${[
                "A",
                "B",
                "C",
                "D"
              ].map(section => `

                <option
                  value="${section}"
                  ${
                    notice?.section ===
                    section
                      ? "selected"
                      : ""
                  }
                >
                  Section ${section}
                </option>

              `).join("")}

            </select>

          </div>


          <!-- CATEGORY -->

          <div class="tn-form-group">

            <label>
              Category *
            </label>

            <select
              name="category"
              required
            >

              ${[
                "Academic",
                "Exam",
                "Holiday",
                "Event",
                "General",
                "Important"
              ].map(category => `

                <option
                  value="${category}"
                  ${
                    (notice?.category ||
                    "General") ===
                    category
                      ? "selected"
                      : ""
                  }
                >
                  ${category}
                </option>

              `).join("")}

            </select>

          </div>


          <!-- NOTICE DATE -->

          <div class="tn-form-group">

            <label>
              Notice Date *
            </label>

            <input
              type="date"
              name="noticeDate"
              value="${
                notice?.noticeDate ||
                new Date()
                  .toISOString()
                  .split("T")[0]
              }"
              required
            />

          </div>


          <!-- TEACHER NAME -->

          <div class="tn-form-group">

            <label>
              Published By
            </label>

            <input
              type="text"
              name="teacherName"
              placeholder="Teacher Name"
              value="${escapeHTML(
                notice?.teacherName ||
                "Teacher"
              )}"
            />

          </div>


          <!-- IMPORTANT -->

          <div class="tn-form-group">

            <label>
              Notice Priority
            </label>

            <label class="tn-checkbox-label">

              <input
                type="checkbox"
                name="important"
                ${
                  notice?.important
                    ? "checked"
                    : ""
                }
              />

              <span>
                Mark as Important Notice
              </span>

            </label>

          </div>


          <!-- DESCRIPTION -->

          <div class="tn-form-group full">

            <label>
              Notice Description *
            </label>

            <textarea
              name="description"
              rows="6"
              placeholder="Write complete notice details..."
              required
            >${escapeHTML(
              notice?.description ||
              ""
            )}</textarea>

          </div>


          <!-- OPTIONAL LINK -->

          <div class="tn-form-group full">

            <label>
              Related Link
            </label>

            <input
              type="url"
              name="link"
              placeholder="https://example.com"
              value="${escapeHTML(
                notice?.link || ""
              )}"
            />

            <small>
              Optional: Add a website, Google Drive,
              PDF or other useful link.
            </small>

          </div>


        </div>


        <!-- ACTIONS -->

        <div class="tn-form-actions">

          <button
            type="button"
            class="tn-back-btn"
            data-tn-action="back-notices"
          >
            Cancel
          </button>


          <button
            type="submit"
            class="tn-primary-btn"
          >

            ${
              notice
                ? "Update Notice"
                : "Publish Notice"
            }

          </button>

        </div>


      </form>

    </div>

  `;
}


/* =========================================================
   VIEW NOTICE
========================================================= */

function viewNotice(id) {

  const notice =
    notices.find(
      item =>
        String(item.id) ===
        String(id)
    );


  if (!notice) {
    return;
  }


  const root =
    document.querySelector(
      ".teacher-notices-page"
    );


  if (!root) {
    return;
  }


  root.innerHTML = `

    <div class="tn-detail-page">


      <div class="tn-detail-header">

        <button
          type="button"
          class="tn-back-btn"
          data-tn-action="back-notices"
        >
          ← Back to Notices
        </button>


        <div class="tn-detail-actions">

          <button
            type="button"
            class="tn-secondary-btn"
            data-tn-action="edit"
            data-id="${notice.id}"
          >
            ✏️ Edit
          </button>


          <button
            type="button"
            class="tn-danger-btn"
            data-tn-action="delete"
            data-id="${notice.id}"
          >
            🗑️ Delete
          </button>

        </div>

      </div>


      <div class="tn-detail-card">


        <div class="tn-detail-icon">
          ${getCategoryIcon(
            notice.category
          )}
        </div>


        <div class="tn-detail-badges">

          <span class="tn-category-badge">
            ${escapeHTML(
              notice.category
            )}
          </span>


          ${
            notice.important
              ? `
                <span class="tn-important-badge">
                  ⭐ Important Notice
                </span>
              `
              : ""
          }

        </div>


        <h1>
          ${escapeHTML(
            notice.title
          )}
        </h1>


        <div class="tn-detail-meta">

          <span>
            🏫
            ${escapeHTML(
              notice.className
            )}
            ${
              notice.section
                ? ` - Section ${escapeHTML(
                    notice.section
                  )}`
                : ""
            }
          </span>


          <span>
            📅
            ${formatDate(
              notice.noticeDate
            )}
          </span>


          <span>
            👨‍🏫
            ${escapeHTML(
              notice.teacherName ||
              "Teacher"
            )}
          </span>

        </div>


        <div class="tn-detail-description">

          ${escapeHTML(
            notice.description
          ).replace(
            /\n/g,
            "<br>"
          )}

        </div>


        ${
          notice.link
            ? `
              <div class="tn-detail-link">

                <strong>
                  🔗 Related Link
                </strong>

                <a
                  href="${escapeHTML(
                    notice.link
                  )}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Related Resource →
                </a>

              </div>
            `
            : ""
        }


        <div class="tn-detail-footer">

          Notice created on
          ${formatDate(
            notice.createdAt
          )}

        </div>


      </div>

    </div>

  `;
}


/* =========================================================
   FILTER
========================================================= */

function filterNotices() {

  const search =
    document
      .getElementById("tnSearch")
      ?.value
      .toLowerCase()
      .trim() || "";


  const classFilter =
    document
      .getElementById("tnClassFilter")
      ?.value || "";


  const categoryFilter =
    document
      .getElementById("tnCategoryFilter")
      ?.value || "";


  const statusFilter =
    document
      .getElementById("tnStatusFilter")
      ?.value || "";


  let filtered =
    [...notices];


  /* SEARCH */

  if (search) {

    filtered =
      filtered.filter(notice =>

        notice.title
          ?.toLowerCase()
          .includes(search) ||

        notice.description
          ?.toLowerCase()
          .includes(search) ||

        notice.category
          ?.toLowerCase()
          .includes(search) ||

        notice.className
          ?.toLowerCase()
          .includes(search)

      );

  }


  /* CLASS */

  if (classFilter) {

    filtered =
      filtered.filter(
        notice =>
          notice.className ===
          classFilter
      );

  }


  /* CATEGORY */

  if (categoryFilter) {

    filtered =
      filtered.filter(
        notice =>
          notice.category ===
          categoryFilter
      );

  }


  /* STATUS */

  if (statusFilter === "important") {

    filtered =
      filtered.filter(
        notice =>
          notice.important === true
      );

  }


  if (statusFilter === "normal") {

    filtered =
      filtered.filter(
        notice =>
          !notice.important
      );

  }


  const content =
    document.getElementById(
      "tnContent"
    );


  if (!content) {
    return;
  }


  content.innerHTML =
    renderNotices(filtered);

}


/* =========================================================
   DELETE NOTICE
========================================================= */

function deleteNotice(id) {

  const notice =
    notices.find(
      item =>
        String(item.id) ===
        String(id)
    );


  if (!notice) {
    return;
  }


  const confirmed =
    window.confirm(
      `Delete "${notice.title}"?`
    );


  if (!confirmed) {
    return;
  }


  notices =
    notices.filter(
      item =>
        String(item.id) !==
        String(id)
    );


  saveNotices();


  renderTeacherNoticesPage();

}


/* =========================================================
   REFRESH PAGE
========================================================= */

function renderTeacherNoticesPage() {

  const root =
    document.querySelector(
      ".teacher-notices-page"
    );


  if (!root) {
    return;
  }


  root.innerHTML = `

    <div class="tn-header">

      <div>

        <h1>
          📢 Notices
        </h1>

        <p>
          Create and manage notices for students
        </p>

      </div>


      <div class="tn-header-actions">

        <button
          type="button"
          class="tn-back-btn"
          data-tn-action="back-dashboard"
        >
          ← Back to Dashboard
        </button>


        <button
          type="button"
          class="tn-primary-btn"
          data-tn-action="show-form"
        >
          + Create Notice
        </button>

      </div>

    </div>


    ${renderStats()}


    <div class="tn-toolbar">

      <div class="tn-search">

        <span>
          🔎
        </span>

        <input
          type="search"
          id="tnSearch"
          placeholder="Search notices..."
        />

      </div>


      <select id="tnClassFilter">

        <option value="">
          All Classes
        </option>

        <option value="All Classes">
          All Classes
        </option>

        <option value="Class 6">
          Class 6
        </option>

        <option value="Class 7">
          Class 7
        </option>

        <option value="Class 8">
          Class 8
        </option>

        <option value="Class 9">
          Class 9
        </option>

        <option value="Class 10">
          Class 10
        </option>

        <option value="Class 11">
          Class 11
        </option>

        <option value="Class 12">
          Class 12
        </option>

      </select>


      <select id="tnCategoryFilter">

        <option value="">
          All Categories
        </option>

        <option value="Academic">
          Academic
        </option>

        <option value="Exam">
          Exam
        </option>

        <option value="Holiday">
          Holiday
        </option>

        <option value="Event">
          Event
        </option>

        <option value="General">
          General
        </option>

        <option value="Important">
          Important
        </option>

      </select>


      <select id="tnStatusFilter">

        <option value="">
          All Notices
        </option>

        <option value="important">
          Important
        </option>

        <option value="normal">
          Normal
        </option>

      </select>

    </div>


    <div id="tnContent">

      ${renderNotices()}

    </div>

  `;
}


/* =========================================================
   EVENT SETUP
========================================================= */

export function setupTeacherNotices() {

  if (
    window.teacherNoticesInitialized
  ) {
    return;
  }


  window.teacherNoticesInitialized =
    true;


  /* =====================================================
     CLICK EVENTS
  ===================================================== */

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-tn-action]"
        );


      if (!button) {
        return;
      }


      const action =
        button.dataset.tnAction;


      const id =
        button.dataset.id;


      /* -----------------------------------------------
         BACK TO DASHBOARD
      ----------------------------------------------- */

      if (
        action ===
        "back-dashboard"
      ) {

        if (
          typeof window
            .navigateTeacherPage ===
          "function"
        ) {

          window.navigateTeacherPage(
            "dashboard"
          );

        }

        return;
      }


      /* -----------------------------------------------
         SHOW FORM
      ----------------------------------------------- */

      if (
        action ===
        "show-form"
      ) {

        renderForm();

        return;
      }


      /* -----------------------------------------------
         BACK TO NOTICES
      ----------------------------------------------- */

      if (
        action ===
        "back-notices"
      ) {

        editingNoticeId =
          null;

        renderTeacherNoticesPage();

        return;
      }


      /* -----------------------------------------------
         VIEW
      ----------------------------------------------- */

      if (
        action ===
        "view"
      ) {

        viewNotice(id);

        return;
      }


      /* -----------------------------------------------
         EDIT
      ----------------------------------------------- */

      if (
        action ===
        "edit"
      ) {

        const notice =
          notices.find(
            item =>
              String(item.id) ===
              String(id)
          );


        if (notice) {
          renderForm(notice);
        }

        return;
      }


      /* -----------------------------------------------
         DELETE
      ----------------------------------------------- */

      if (
        action ===
        "delete"
      ) {

        deleteNotice(id);

        return;
      }

    }
  );


  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  document.addEventListener(
    "submit",
    event => {

      if (
        event.target.id !==
        "teacherNoticeForm"
      ) {
        return;
      }


      event.preventDefault();


      const form =
        event.target;


      const formData =
        new FormData(form);


      const title =
        String(
          formData.get("title") ||
          ""
        ).trim();


      const className =
        String(
          formData.get("className") ||
          ""
        ).trim();


      const section =
        String(
          formData.get("section") ||
          ""
        ).trim();


      const category =
        String(
          formData.get("category") ||
          ""
        ).trim();


      const noticeDate =
        String(
          formData.get("noticeDate") ||
          ""
        ).trim();


      const teacherName =
        String(
          formData.get("teacherName") ||
          ""
        ).trim();


      const description =
        String(
          formData.get("description") ||
          ""
        ).trim();


      const link =
        String(
          formData.get("link") ||
          ""
        ).trim();


      const important =
        formData.get("important") ===
        "on";


      /* VALIDATION */

      if (
        !title ||
        !className ||
        !category ||
        !noticeDate ||
        !description
      ) {

        alert(
          "Please fill all required fields."
        );

        return;
      }


      /* =================================================
         EDIT EXISTING NOTICE
      ================================================= */

      if (editingNoticeId) {

        const notice =
          notices.find(
            item =>
              String(item.id) ===
              String(editingNoticeId)
          );


        if (notice) {

          notice.title =
            title;

          notice.className =
            className;

          notice.section =
            section;

          notice.category =
            category;

          notice.noticeDate =
            noticeDate;

          notice.teacherName =
            teacherName ||
            "Teacher";

          notice.description =
            description;

          notice.link =
            link;

          notice.important =
            important;

        }

      }


      /* =================================================
         CREATE NEW NOTICE
      ================================================= */

      else {

        notices.unshift({

          id:
            generateId(),

          title,

          className,

          section,

          category,

          noticeDate,

          teacherName:
            teacherName ||
            "Teacher",

          description,

          link,

          important,

          createdAt:
            new Date()
              .toISOString()
              .split("T")[0]

        });

      }


      saveNotices();


      editingNoticeId =
        null;


      renderTeacherNoticesPage();

    }
  );


  /* =====================================================
     SEARCH
  ===================================================== */

  document.addEventListener(
    "input",
    event => {

      if (
        event.target.id ===
        "tnSearch"
      ) {

        filterNotices();

      }

    }
  );


  /* =====================================================
     FILTERS
  ===================================================== */

  document.addEventListener(
    "change",
    event => {

      if (
        [
          "tnClassFilter",
          "tnCategoryFilter",
          "tnStatusFilter"
        ].includes(
          event.target.id
        )
      ) {

        filterNotices();

      }

    }
  );

}