/* =========================================================
   TEACHER STUDY MATERIAL
========================================================= */

const STORAGE_KEY = "teacher_study_material";

let studyMaterials = JSON.parse(
  localStorage.getItem(STORAGE_KEY) || "[]"
);

let editingMaterialId = null;

/* =========================================================
   CSS
========================================================= */

function loadTeacherStudyMaterialCSS() {
  if (document.getElementById("teacher-study-material-css")) {
    return;
  }

  const style = document.createElement("style");
  style.id = "teacher-study-material-css";

  style.textContent = `
    html,
    body,
    #app {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      margin: 0;
      padding: 0;
      overflow-x: hidden !important;
    }

    .teacher-study-material-page,
    .teacher-study-material-page * {
      box-sizing: border-box;
    }

    .teacher-study-material-page {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      overflow-x: hidden;
    }

    .teacher-study-material-main {
      width: calc(100% - 260px);
      max-width: calc(100% - 260px);
      min-width: 0;
      margin-left: 260px;
      padding: 28px;
      overflow-x: hidden;
    }

    .tsm-container {
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }

    .tsm-header {
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 24px;
    }

    .tsm-header > div:first-child {
      min-width: 0;
      flex: 1 1 auto;
    }

    .tsm-header h1 {
      margin: 0 0 6px;
      font-size: 28px;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }

    .tsm-header p {
      margin: 0;
      color: #64748b;
      font-size: 14px;
      line-height: 1.5;
      overflow-wrap: anywhere;
    }

    .tsm-header-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 10px;
      min-width: 0;
      flex-shrink: 1;
    }

    .tsm-primary-btn,
    .tsm-back-btn,
    .tsm-view-btn,
    .tsm-icon-btn {
      font-family: inherit;
      cursor: pointer;
    }

    .tsm-primary-btn {
      border: 0;
      border-radius: 8px;
      padding: 11px 16px;
      background: #2563eb;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      white-space: nowrap;
      max-width: 100%;
    }

    .tsm-primary-btn:hover {
      background: #1d4ed8;
    }

    .tsm-back-btn {
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 10px 15px;
      background: #fff;
      color: #334155;
      font-weight: 600;
      font-size: 14px;
      white-space: nowrap;
      max-width: 100%;
    }

    .tsm-back-btn:hover {
      background: #f8fafc;
    }

    /* =========================
       STATS
    ========================= */

    .tsm-stats {
      width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
      margin-bottom: 22px;
    }

    .tsm-stat-card {
      min-width: 0;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
    }

    .tsm-stat-card > div:last-child {
      min-width: 0;
    }

    .tsm-stat-icon {
      width: 46px;
      height: 46px;
      flex: 0 0 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #eff6ff;
      font-size: 22px;
    }

    .tsm-stat-card span {
      display: block;
      color: #64748b;
      font-size: 13px;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .tsm-stat-card strong {
      display: block;
      margin-top: 3px;
      color: #0f172a;
      font-size: 24px;
      line-height: 1.2;
    }

    /* =========================
       TOOLBAR
    ========================= */

    .tsm-toolbar {
      width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: minmax(220px, 1fr) repeat(3, minmax(150px, 190px));
      gap: 12px;
      padding: 16px;
      margin-bottom: 22px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #fff;
    }

    .tsm-search {
      min-width: 0;
      width: 100%;
      height: 42px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #fff;
    }

    .tsm-search input {
      width: 100%;
      min-width: 0;
      border: 0;
      outline: 0;
      font-size: 14px;
      background: transparent;
    }

    .tsm-toolbar select,
    .tsm-form-group input,
    .tsm-form-group select,
    .tsm-form-group textarea {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      font-family: inherit;
    }

    .tsm-toolbar select {
      height: 42px;
      padding: 0 10px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #fff;
      outline: none;
      font-size: 14px;
    }

    /* =========================
       MATERIAL GRID
    ========================= */

    .tsm-grid {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .tsm-card {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
    }

    .tsm-card-top {
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 16px 16px 0;
    }

    .tsm-material-icon {
      width: 46px;
      height: 46px;
      flex: 0 0 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #eff6ff;
      font-size: 22px;
    }

    .tsm-card-actions {
      min-width: 0;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .tsm-icon-btn {
      width: 36px;
      height: 36px;
      flex: 0 0 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e5e7eb;
      border-radius: 7px;
      background: #fff;
      font-size: 15px;
    }

    .tsm-icon-btn:hover {
      background: #f8fafc;
    }

    .tsm-icon-btn.danger:hover {
      background: #fef2f2;
    }

    .tsm-card-body {
      min-width: 0;
      flex: 1;
      padding: 16px;
    }

    .tsm-type-badge {
      display: inline-flex;
      max-width: 100%;
      padding: 4px 8px;
      border-radius: 999px;
      background: #eff6ff;
      color: #2563eb;
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
    }

    .tsm-card-body h3 {
      margin: 10px 0 8px;
      color: #111827;
      font-size: 17px;
      line-height: 1.35;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .tsm-description {
      margin: 0 0 14px;
      color: #64748b;
      font-size: 13px;
      line-height: 1.55;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .tsm-meta {
      width: 100%;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .tsm-meta span {
      min-width: 0;
      color: #475569;
      font-size: 12px;
      line-height: 1.4;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .tsm-card-footer {
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      padding: 13px 16px;
      border-top: 1px solid #eef2f7;
    }

    .tsm-card-footer small {
      min-width: 0;
      color: #64748b;
      font-size: 11px;
      overflow-wrap: anywhere;
    }

    .tsm-view-btn {
      border: 0;
      border-radius: 7px;
      padding: 8px 12px;
      background: #eff6ff;
      color: #2563eb;
      font-weight: 700;
      font-size: 12px;
      white-space: nowrap;
    }

    /* =========================
       EMPTY
    ========================= */

    .tsm-empty {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      padding: 55px 20px;
      text-align: center;
      border: 1px dashed #cbd5e1;
      border-radius: 12px;
      background: #fff;
    }

    .tsm-empty-icon {
      font-size: 45px;
      margin-bottom: 12px;
    }

    .tsm-empty h3 {
      margin: 0 0 7px;
      color: #111827;
      font-size: 19px;
    }

    .tsm-empty p {
      max-width: 500px;
      margin: 0 auto 18px;
      color: #64748b;
      font-size: 14px;
      line-height: 1.5;
      overflow-wrap: anywhere;
    }

    /* =========================
       FORM
    ========================= */

    .tsm-form-page {
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }

    .tsm-form-header {
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 22px;
    }

    .tsm-form-header > div {
      min-width: 0;
      flex: 1;
    }

    .tsm-form-header h1 {
      margin: 0 0 6px;
      font-size: 26px;
      line-height: 1.3;
      overflow-wrap: anywhere;
    }

    .tsm-form-header p {
      margin: 0;
      color: #64748b;
      font-size: 14px;
      line-height: 1.5;
      overflow-wrap: anywhere;
    }

    #teacherStudyMaterialForm {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      padding: 22px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
    }

    .tsm-form-grid {
      width: 100%;
      min-width: 0;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .tsm-form-group {
      width: 100%;
      min-width: 0;
    }

    .tsm-form-group.full {
      grid-column: 1 / -1;
    }

    .tsm-form-group label {
      display: block;
      margin-bottom: 7px;
      color: #334155;
      font-size: 13px;
      font-weight: 700;
    }

    .tsm-form-group input,
    .tsm-form-group select {
      height: 42px;
      padding: 0 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      outline: none;
      background: #fff;
      color: #111827;
      font-size: 14px;
    }

    .tsm-form-group textarea {
      display: block;
      padding: 11px 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      outline: none;
      resize: vertical;
      color: #111827;
      font-size: 14px;
      line-height: 1.5;
    }

    .tsm-form-group input:focus,
    .tsm-form-group select:focus,
    .tsm-form-group textarea:focus {
      border-color: #2563eb;
    }

    .tsm-form-group small {
      display: block;
      margin-top: 6px;
      color: #64748b;
      font-size: 11px;
      line-height: 1.5;
      overflow-wrap: anywhere;
    }

    .tsm-form-actions {
      width: 100%;
      min-width: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #eef2f7;
    }

    /* =========================
       TABLET
    ========================= */

    @media (max-width: 1200px) {
      .teacher-study-material-main {
        padding: 24px;
      }

      .tsm-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .tsm-toolbar {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .tsm-search {
        grid-column: 1 / -1;
      }
    }

    /* =========================
       MOBILE
    ========================= */

    @media (max-width: 900px) {
      .teacher-study-material-main {
        width: 100%;
        max-width: 100%;
        margin-left: 0;
        padding: 20px 16px 30px;
      }

      .tsm-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .tsm-header-actions {
        width: 100%;
        justify-content: flex-start;
      }

      .tsm-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .tsm-form-grid {
        grid-template-columns: 1fr;
      }

      .tsm-form-group.full {
        grid-column: auto;
      }
    }

    @media (max-width: 700px) {
      .teacher-study-material-main {
        padding: 16px 12px 28px;
      }

      .tsm-header h1 {
        font-size: 24px;
      }

      .tsm-grid {
        grid-template-columns: 1fr;
      }

      .tsm-toolbar {
        grid-template-columns: 1fr;
        padding: 12px;
      }

      .tsm-search {
        grid-column: auto;
      }

      #teacherStudyMaterialForm {
        padding: 16px;
      }

      .tsm-form-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .tsm-form-header h1 {
        font-size: 23px;
      }

      .tsm-form-actions {
        flex-direction: column-reverse;
        align-items: stretch;
      }

      .tsm-form-actions button {
        width: 100%;
      }
    }

    @media (max-width: 520px) {
      .tsm-stats {
        grid-template-columns: 1fr;
      }

      .tsm-header-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .tsm-header-actions button {
        width: 100%;
      }

      .tsm-card-footer {
        align-items: stretch;
        flex-direction: column;
      }

      .tsm-view-btn {
        width: 100%;
      }

      .tsm-card-top {
        align-items: flex-start;
      }

      .tsm-card-actions {
        flex-shrink: 0;
      }

      .tsm-empty {
        padding: 40px 15px;
      }
    }

    @media (max-width: 380px) {
      .teacher-study-material-main {
        padding-left: 9px;
        padding-right: 9px;
      }

      .tsm-stat-card {
        padding: 14px;
      }

      .tsm-stat-icon {
        width: 40px;
        height: 40px;
        flex-basis: 40px;
      }

      .tsm-primary-btn,
      .tsm-back-btn {
        font-size: 13px;
      }
    }
  `;

  document.head.appendChild(style);
}

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
  loadTeacherStudyMaterialCSS();

  editingMaterialId = null;

  return `
    <div class="teacher-study-material-page">

      <main class="teacher-study-material-main">

        <div class="tsm-container">

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

          ${renderToolbar()}

          <div id="tsmContent">
            ${renderMaterials()}
          </div>

        </div>

      </main>

    </div>
  `;
}

/* =========================================================
   TOOLBAR
========================================================= */

function renderToolbar() {
  return `
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
  `;
}

/* =========================================================
   STATS
========================================================= */

function renderStats() {
  const total = studyMaterials.length;

  const pdf = studyMaterials.filter(
    item => item.type === "PDF"
  ).length;

  const notes = studyMaterials.filter(
    item => item.type === "Notes"
  ).length;

  const videos = studyMaterials.filter(
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

function getTypeIcon(type) {
  if (type === "PDF") return "📄";
  if (type === "Video") return "🎥";
  if (type === "Notes") return "📝";
  return "🔗";
}

function renderMaterialCard(material) {
  const typeIcon = getTypeIcon(material.type);

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
            data-id="${escapeHTML(material.id)}"
          >
            ✏️
          </button>

          <button
            class="tsm-icon-btn danger"
            title="Delete"
            data-tsm-action="delete"
            data-id="${escapeHTML(material.id)}"
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
          data-id="${escapeHTML(material.id)}"
        >
          Open →
        </button>

      </div>

    </div>
  `;
}

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
      ${studyMaterials.map(renderMaterialCard).join("")}
    </div>
  `;
}

/* =========================================================
   FORM
========================================================= */

function renderForm(material = null) {
  editingMaterialId = material?.id || null;

  const root = document.querySelector(
    ".teacher-study-material-page"
  );

  if (!root) return;

  root.innerHTML = `
    <main class="teacher-study-material-main">

      <div class="tsm-container">

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
                      value="${escapeHTML(className)}"
                      ${
                        material?.className === className
                          ? "selected"
                          : ""
                      }
                    >
                      ${escapeHTML(className)}
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
                      value="${escapeHTML(subject)}"
                      ${
                        material?.subject === subject
                          ? "selected"
                          : ""
                      }
                    >
                      ${escapeHTML(subject)}
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

      </div>

    </main>
  `;
}

/* =========================================================
   FILTER
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

  let filtered = [...studyMaterials];

  if (search) {
    filtered = filtered.filter(material =>
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
    filtered = filtered.filter(
      material =>
        material.className === classFilter
    );
  }

  if (subjectFilter) {
    filtered = filtered.filter(
      material =>
        material.subject === subjectFilter
    );
  }

  if (typeFilter) {
    filtered = filtered.filter(
      material =>
        material.type === typeFilter
    );
  }

  renderFilteredMaterials(filtered);
}

/* =========================================================
   FILTERED MATERIALS
========================================================= */

function renderFilteredMaterials(materials) {
  const container =
    document.getElementById("tsmContent");

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
      ${materials.map(renderMaterialCard).join("")}
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
        String(item.id) === String(id)
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
        String(item.id) === String(id)
    );

  if (!material) return;

  const confirmed = confirm(
    `Delete "${material.title}"?`
  );

  if (!confirmed) return;

  studyMaterials =
    studyMaterials.filter(
      item =>
        String(item.id) !== String(id)
    );

  saveMaterials();

  renderTeacherStudyMaterialPage();
}

/* =========================================================
   REFRESH PAGE
========================================================= */

function renderTeacherStudyMaterialPage() {
  const root = document.querySelector(
    ".teacher-study-material-page"
  );

  if (!root) return;

  root.innerHTML = `
    <main class="teacher-study-material-main">

      <div class="tsm-container">

        <div class="tsm-header">

          <div>
            <h1>📚 Study Material</h1>
            <p>
              Create and manage study material for students
            </p>
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

        ${renderToolbar()}

        <div id="tsmContent">
          ${renderMaterials()}
        </div>

      </div>

    </main>
  `;
}

/* =========================================================
   EVENT SETUP
========================================================= */

export function setupTeacherStudyMaterial() {
  loadTeacherStudyMaterialCSS();

  if (window.teacherStudyMaterialInitialized) {
    return;
  }

  window.teacherStudyMaterialInitialized = true;

  /* =====================================================
     CLICK
  ===================================================== */

  window.teacherStudyMaterialClickHandler = event => {
    const button =
      event.target.closest(
        "[data-tsm-action]"
      );

    if (!button) return;

    const action =
      button.dataset.tsmAction;

    const id =
      button.dataset.id;

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

    if (action === "show-form") {
      renderForm();
      return;
    }

    if (action === "back-material") {
      editingMaterialId = null;
      renderTeacherStudyMaterialPage();
      return;
    }

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

    if (action === "delete") {
      deleteMaterial(id);
      return;
    }

    if (action === "open") {
      openMaterial(id);
    }
  };

  document.addEventListener(
    "click",
    window.teacherStudyMaterialClickHandler
  );

  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  window.teacherStudyMaterialSubmitHandler =
    event => {
      if (
        event.target.id !==
        "teacherStudyMaterialForm"
      ) {
        return;
      }

      event.preventDefault();

      const form = event.target;

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
          material.title = title;
          material.className = className;
          material.section = section;
          material.subject = subject;
          material.type = type;
          material.url = url;
          material.description = description;
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
    };

  document.addEventListener(
    "submit",
    window.teacherStudyMaterialSubmitHandler
  );

  /* =====================================================
     SEARCH
  ===================================================== */

  window.teacherStudyMaterialInputHandler =
    event => {
      if (
        event.target.id ===
        "tsmSearch"
      ) {
        filterMaterials();
      }
    };

  document.addEventListener(
    "input",
    window.teacherStudyMaterialInputHandler
  );

  /* =====================================================
     FILTERS
  ===================================================== */

  window.teacherStudyMaterialChangeHandler =
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
    };

  document.addEventListener(
    "change",
    window.teacherStudyMaterialChangeHandler
  );
}