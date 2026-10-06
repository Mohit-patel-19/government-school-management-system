/* =========================================================
   TEACHER STUDY MATERIAL
========================================================= */

const STORAGE_KEY = "teacher_study_material";

let studyMaterials = JSON.parse(
  localStorage.getItem(STORAGE_KEY) || "[]"
);

let editingMaterialId = null;

/* =========================================================
   HELPERS
========================================================= */

function saveMaterials() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(studyMaterials)
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

/* =========================================================
   MAIN PAGE
========================================================= */

export function TeacherStudyMaterial() {
  editingMaterialId = null;

  return `
    <div class="dashboard-main teacher-study-material-page">

      <div class="tsm-header">

        <div>
          <h1>📚 Study Material</h1>
          <p>Create and manage study material for students</p>
        </div>

        <div class="tsm-header-actions">

          <button
            class="tsm-back-btn"
            data-tsm-action="back-dashboard"
          >
            ← Back to Dashboard
          </button>

          <button
            class="tsm-primary-btn"
            data-tsm-action="show-form"
          >
            + Add Study Material
          </button>

        </div>

      </div>

      ${renderStats()}

      <div class="tsm-toolbar">

        <div class="tsm-search">
          🔎
          <input
            type="search"
            id="tsmSearch"
            placeholder="Search study material..."
          />
        </div>

        <select id="tsmClassFilter">
          <option value="">All Classes</option>
          <option value="Class 6">Class 6</option>
          <option value="Class 7">Class 7</option>
          <option value="Class 8">Class 8</option>
          <option value="Class 9">Class 9</option>
          <option value="Class 10">Class 10</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
        </select>

        <select id="tsmSubjectFilter">
          <option value="">All Subjects</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Social Science">Social Science</option>
          <option value="Computer">Computer</option>
        </select>

        <select id="tsmTypeFilter">
          <option value="">All Types</option>
          <option value="PDF">PDF</option>
          <option value="Notes">Notes</option>
          <option value="Video">Video</option>
          <option value="Link">Link</option>
        </select>

      </div>

      <div id="tsmContent">
        ${renderMaterials()}
      </div>

    </div>
  `;
}

/* =========================================================
   STATS
========================================================= */

function renderStats() {

  const total =
    studyMaterials.length;

  const pdf =
    studyMaterials.filter(
      item => item.type === "PDF"
    ).length;

  const notes =
    studyMaterials.filter(
      item => item.type === "Notes"
    ).length;

  const videos =
    studyMaterials.filter(
      item => item.type === "Video"
    ).length;

  return `
    <div class="tsm-stats">

      <div class="tsm-stat-card">
        <div class="tsm-stat-icon">📚</div>
        <div>
          <span>Total Materials</span>
          <strong>${total}</strong>
        </div>
      </div>

      <div class="tsm-stat-card">
        <div class="tsm-stat-icon">📄</div>
        <div>
          <span>PDF</span>
          <strong>${pdf}</strong>
        </div>
      </div>

      <div class="tsm-stat-card">
        <div class="tsm-stat-icon">📝</div>
        <div>
          <span>Notes</span>
          <strong>${notes}</strong>
        </div>
      </div>

      <div class="tsm-stat-card">
        <div class="tsm-stat-icon">🎥</div>
        <div>
          <span>Videos</span>
          <strong>${videos}</strong>
        </div>
      </div>

    </div>
  `;
}

/* =========================================================
   MATERIAL LIST
========================================================= */

function renderMaterials() {

  if (!studyMaterials.length) {

    return `
      <div class="tsm-empty">

        <div class="tsm-empty-icon">
          📚
        </div>

        <h3>No Study Material Added</h3>

        <p>
          Add notes, PDFs, videos or useful links
          for your students.
        </p>

        <button
          class="tsm-primary-btn"
          data-tsm-action="show-form"
        >
          + Add Study Material
        </button>

      </div>
    `;
  }

  return `
    <div class="tsm-grid">

      ${studyMaterials.map(material => {

        const typeIcon =
          material.type === "PDF"
            ? "📄"
            : material.type === "Video"
              ? "🎥"
              : material.type === "Notes"
                ? "📝"
                : "🔗";

        return `
          <div class="tsm-card">

            <div class="tsm-card-top">

              <div class="tsm-material-icon">
                ${typeIcon}
              </div>

              <div class="tsm-card-actions">

                <button
                  class="tsm-icon-btn"
                  title="Edit"
                  data-tsm-action="edit"
                  data-id="${material.id}"
                >
                  ✏️
                </button>

                <button
                  class="tsm-icon-btn danger"
                  title="Delete"
                  data-tsm-action="delete"
                  data-id="${material.id}"
                >
                  🗑️
                </button>

              </div>

            </div>

            <div class="tsm-card-body">

              <span class="tsm-type-badge">
                ${escapeHTML(material.type)}
              </span>

              <h3>
                ${escapeHTML(material.title)}
              </h3>

              <p class="tsm-description">
                ${escapeHTML(
                  material.description ||
                  "Study material for students"
                )}
              </p>

              <div class="tsm-meta">

                <span>
                  📖 ${escapeHTML(material.subject)}
                </span>

                <span>
                  🏫 ${escapeHTML(material.className)}
                  ${
                    material.section
                      ? ` - ${escapeHTML(material.section)}`
                      : ""
                  }
                </span>

              </div>

            </div>

            <div class="tsm-card-footer">

              <small>
                Added:
                ${escapeHTML(material.date || "")}
              </small>

              <button
                class="tsm-view-btn"
                data-tsm-action="open"
                data-id="${material.id}"
              >
                Open →
              </button>

            </div>

          </div>
        `;
      }).join("")}

    </div>
  `;
}

/* =========================================================
   FORM
========================================================= */

function renderForm(material = null) {

  editingMaterialId =
    material?.id || null;

  const root =
    document.querySelector(
      ".teacher-study-material-page"
    );

  if (!root) return;

  root.innerHTML = `
    <div class="tsm-form-page">

      <div class="tsm-form-header">

        <div>
          <h1>
            ${
              material
                ? "✏️ Edit Study Material"
                : "📚 Add Study Material"
            }
          </h1>

          <p>
            ${
              material
                ? "Update study material details"
                : "Add learning resources for students"
            }
          </p>
        </div>

        <button
          class="tsm-back-btn"
          data-tsm-action="back-material"
        >
          ← Back
        </button>

      </div>

      <form id="teacherStudyMaterialForm">

        <div class="tsm-form-grid">

          <div class="tsm-form-group full">

            <label>Material Title *</label>

            <input
              type="text"
              name="title"
              placeholder="Example: Chapter 1 Mathematics Notes"
              value="${escapeHTML(material?.title || "")}"
              required
            />

          </div>

          <div class="tsm-form-group">

            <label>Class *</label>

            <select name="className" required>

              <option value="">
                Select Class
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
                    material?.className === className
                      ? "selected"
                      : ""
                  }
                >
                  ${className}
                </option>
              `).join("")}

            </select>

          </div>

          <div class="tsm-form-group">

            <label>Section</label>

            <select name="section">

              <option value="">
                All Sections
              </option>

              ${["A", "B", "C", "D"]
                .map(section => `
                  <option
                    value="${section}"
                    ${
                      material?.section === section
                        ? "selected"
                        : ""
                    }
                  >
                    Section ${section}
                  </option>
                `)
                .join("")}

            </select>

          </div>

          <div class="tsm-form-group">

            <label>Subject *</label>

            <select name="subject" required>

              <option value="">
                Select Subject
              </option>

              ${[
                "English",
                "Hindi",
                "Mathematics",
                "Science",
                "Social Science",
                "Computer"
              ].map(subject => `
                <option
                  value="${subject}"
                  ${
                    material?.subject === subject
                      ? "selected"
                      : ""
                  }
                >
                  ${subject}
                </option>
              `).join("")}

            </select>

          </div>

          <div class="tsm-form-group">

            <label>Material Type *</label>

            <select name="type" required>

              ${[
                "PDF",
                "Notes",
                "Video",
                "Link"
              ].map(type => `
                <option
                  value="${type}"
                  ${
                    (material?.type || "PDF") === type
                      ? "selected"
                      : ""
                  }
                >
                  ${type}
                </option>
              `).join("")}

            </select>

          </div>

          <div class="tsm-form-group full">

            <label>File / URL *</label>

            <input
              type="url"
              name="url"
              placeholder="https://example.com/material.pdf"
              value="${escapeHTML(material?.url || "")}"
              required
            />

            <small>
              Enter a public PDF, video, Google Drive,
              YouTube or other resource link.
            </small>

          </div>

          <div class="tsm-form-group full">

            <label>Description</label>

            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description..."
            >${escapeHTML(
              material?.description || ""
            )}</textarea>

          </div>

        </div>

        <div class="tsm-form-actions">

          <button
            type="button"
            class="tsm-back-btn"
            data-tsm-action="back-material"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="tsm-primary-btn"
          >
            ${
              material
                ? "Update Material"
                : "Save Material"
            }
          </button>

        </div>

      </form>

    </div>
  `;
}

/* =========================================================
   FILTER MATERIALS
========================================================= */

function filterMaterials() {

  const search =
    document
      .getElementById("tsmSearch")
      ?.value
      .toLowerCase()
      .trim() || "";

  const classFilter =
    document.getElementById(
      "tsmClassFilter"
    )?.value || "";

  const subjectFilter =
    document.getElementById(
      "tsmSubjectFilter"
    )?.value || "";

  const typeFilter =
    document.getElementById(
      "tsmTypeFilter"
    )?.value || "";

  let filtered =
    [...studyMaterials];

  if (search) {

    filtered =
      filtered.filter(material =>
        material.title
          ?.toLowerCase()
          .includes(search) ||

        material.description
          ?.toLowerCase()
          .includes(search) ||

        material.subject
          ?.toLowerCase()
          .includes(search)
      );
  }

  if (classFilter) {

    filtered =
      filtered.filter(
        material =>
          material.className ===
          classFilter
      );
  }

  if (subjectFilter) {

    filtered =
      filtered.filter(
        material =>
          material.subject ===
          subjectFilter
      );
  }

  if (typeFilter) {

    filtered =
      filtered.filter(
        material =>
          material.type ===
          typeFilter
      );
  }

  renderFilteredMaterials(filtered);
}

/* =========================================================
   FILTERED LIST
========================================================= */

function renderFilteredMaterials(materials) {

  const container =
    document.getElementById(
      "tsmContent"
    );

  if (!container) return;

  if (!materials.length) {

    container.innerHTML = `
      <div class="tsm-empty">

        <div class="tsm-empty-icon">
          🔎
        </div>

        <h3>No Material Found</h3>

        <p>
          Try changing your search or filters.
        </p>

      </div>
    `;

    return;
  }

  container.innerHTML = `
    <div class="tsm-grid">

      ${materials.map(material => {

        const typeIcon =
          material.type === "PDF"
            ? "📄"
            : material.type === "Video"
              ? "🎥"
              : material.type === "Notes"
                ? "📝"
                : "🔗";

        return `
          <div class="tsm-card">

            <div class="tsm-card-top">

              <div class="tsm-material-icon">
                ${typeIcon}
              </div>

              <div class="tsm-card-actions">

                <button
                  class="tsm-icon-btn"
                  data-tsm-action="edit"
                  data-id="${material.id}"
                >
                  ✏️
                </button>

                <button
                  class="tsm-icon-btn danger"
                  data-tsm-action="delete"
                  data-id="${material.id}"
                >
                  🗑️
                </button>

              </div>

            </div>

            <div class="tsm-card-body">

              <span class="tsm-type-badge">
                ${escapeHTML(material.type)}
              </span>

              <h3>
                ${escapeHTML(material.title)}
              </h3>

              <p class="tsm-description">
                ${escapeHTML(
                  material.description || ""
                )}
              </p>

              <div class="tsm-meta">

                <span>
                  📖 ${escapeHTML(material.subject)}
                </span>

                <span>
                  🏫 ${escapeHTML(material.className)}
                </span>

              </div>

            </div>

            <div class="tsm-card-footer">

              <small>
                ${escapeHTML(material.date || "")}
              </small>

              <button
                class="tsm-view-btn"
                data-tsm-action="open"
                data-id="${material.id}"
              >
                Open →
              </button>

            </div>

          </div>
        `;
      }).join("")}

    </div>
  `;
}

/* =========================================================
   OPEN MATERIAL
========================================================= */

function openMaterial(id) {

  const material =
    studyMaterials.find(
      item =>
        String(item.id) ===
        String(id)
    );

  if (!material) return;

  if (!material.url) {

    alert(
      "No URL has been added for this material."
    );

    return;
  }

  window.open(
    material.url,
    "_blank",
    "noopener,noreferrer"
  );
}

/* =========================================================
   DELETE
========================================================= */

function deleteMaterial(id) {

  const material =
    studyMaterials.find(
      item =>
        String(item.id) ===
        String(id)
    );

  if (!material) return;

  const confirmed =
    confirm(
      `Delete "${material.title}"?`
    );

  if (!confirmed) return;

  studyMaterials =
    studyMaterials.filter(
      item =>
        String(item.id) !==
        String(id)
    );

  saveMaterials();

  renderTeacherStudyMaterialPage();
}

/* =========================================================
   REFRESH PAGE
========================================================= */

function renderTeacherStudyMaterialPage() {

  const root =
    document.querySelector(
      ".teacher-study-material-page"
    );

  if (!root) return;

  root.innerHTML = `
    <div class="tsm-header">

      <div>
        <h1>📚 Study Material</h1>
        <p>Create and manage study material for students</p>
      </div>

      <div class="tsm-header-actions">

        <button
          class="tsm-back-btn"
          data-tsm-action="back-dashboard"
        >
          ← Back to Dashboard
        </button>

        <button
          class="tsm-primary-btn"
          data-tsm-action="show-form"
        >
          + Add Study Material
        </button>

      </div>

    </div>

    ${renderStats()}

    <div class="tsm-toolbar">

      <div class="tsm-search">
        🔎
        <input
          type="search"
          id="tsmSearch"
          placeholder="Search study material..."
        />
      </div>

      <select id="tsmClassFilter">
        <option value="">All Classes</option>
        <option value="Class 6">Class 6</option>
        <option value="Class 7">Class 7</option>
        <option value="Class 8">Class 8</option>
        <option value="Class 9">Class 9</option>
        <option value="Class 10">Class 10</option>
        <option value="Class 11">Class 11</option>
        <option value="Class 12">Class 12</option>
      </select>

      <select id="tsmSubjectFilter">
        <option value="">All Subjects</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Science">Science</option>
        <option value="Social Science">Social Science</option>
        <option value="Computer">Computer</option>
      </select>

      <select id="tsmTypeFilter">
        <option value="">All Types</option>
        <option value="PDF">PDF</option>
        <option value="Notes">Notes</option>
        <option value="Video">Video</option>
        <option value="Link">Link</option>
      </select>

    </div>

    <div id="tsmContent">
      ${renderMaterials()}
    </div>
  `;
}

/* =========================================================
   EVENT SETUP
========================================================= */

export function setupTeacherStudyMaterial() {

  if (window.teacherStudyMaterialInitialized) {
    return;
  }

  window.teacherStudyMaterialInitialized = true;

  document.addEventListener("click", event => {

    const button =
      event.target.closest(
        "[data-tsm-action]"
      );

    if (!button) return;

    const action =
      button.dataset.tsmAction;

    const id =
      button.dataset.id;

    /* -----------------------------------------
       BACK TO DASHBOARD
    ----------------------------------------- */

    if (action === "back-dashboard") {

      if (
        typeof window.navigateTeacherPage ===
        "function"
      ) {
        window.navigateTeacherPage(
          "dashboard"
        );
      }

      return;
    }

    /* -----------------------------------------
       SHOW FORM
    ----------------------------------------- */

    if (action === "show-form") {

      renderForm();

      return;
    }

    /* -----------------------------------------
       BACK
    ----------------------------------------- */

    if (action === "back-material") {

      editingMaterialId = null;

      renderTeacherStudyMaterialPage();

      return;
    }

    /* -----------------------------------------
       EDIT
    ----------------------------------------- */

    if (action === "edit") {

      const material =
        studyMaterials.find(
          item =>
            String(item.id) ===
            String(id)
        );

      if (material) {
        renderForm(material);
      }

      return;
    }

    /* -----------------------------------------
       DELETE
    ----------------------------------------- */

    if (action === "delete") {

      deleteMaterial(id);

      return;
    }

    /* -----------------------------------------
       OPEN
    ----------------------------------------- */

    if (action === "open") {

      openMaterial(id);

      return;
    }

  });

  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  document.addEventListener(
    "submit",
    event => {

      if (
        event.target.id !==
        "teacherStudyMaterialForm"
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
          formData.get("title") || ""
        ).trim();

      const className =
        String(
          formData.get("className") || ""
        ).trim();

      const section =
        String(
          formData.get("section") || ""
        ).trim();

      const subject =
        String(
          formData.get("subject") || ""
        ).trim();

      const type =
        String(
          formData.get("type") || ""
        ).trim();

      const url =
        String(
          formData.get("url") || ""
        ).trim();

      const description =
        String(
          formData.get("description") || ""
        ).trim();

      if (
        !title ||
        !className ||
        !subject ||
        !type ||
        !url
      ) {

        alert(
          "Please fill all required fields."
        );

        return;
      }

      if (editingMaterialId) {

        const material =
          studyMaterials.find(
            item =>
              String(item.id) ===
              String(editingMaterialId)
          );

        if (material) {

          material.title =
            title;

          material.className =
            className;

          material.section =
            section;

          material.subject =
            subject;

          material.type =
            type;

          material.url =
            url;

          material.description =
            description;

        }

      } else {

        studyMaterials.unshift({

          id: generateId(),

          title,

          className,

          section,

          subject,

          type,

          url,

          description,

          date:
            new Date().toLocaleDateString(
              "en-IN"
            )

        });

      }

      saveMaterials();

      editingMaterialId = null;

      renderTeacherStudyMaterialPage();

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
        "tsmSearch"
      ) {
        filterMaterials();
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
          "tsmClassFilter",
          "tsmSubjectFilter",
          "tsmTypeFilter"
        ].includes(event.target.id)
      ) {
        filterMaterials();
      }

    }
  );
}