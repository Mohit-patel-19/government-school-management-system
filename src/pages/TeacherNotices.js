/* =========================================================
   TEACHER NOTICES
========================================================= */

const STORAGE_KEY = "teacher_notices";

let notices = JSON.parse(
  localStorage.getItem(STORAGE_KEY) || "[]"
);

let editingNoticeId = null;


/* =========================================================
   RESPONSIVE CSS
========================================================= */

function loadTeacherNoticesCSS() {
  if (document.getElementById("teacher-notices-css")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "teacher-notices-css";

  style.textContent = `

    /* ================================
       PAGE
    ================================= */

    .teacher-notices-page {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      margin: 0 !important;
      padding: 24px !important;
      overflow-x: hidden !important;
      overflow-y: auto !important;
    }

    .teacher-notices-page,
    .teacher-notices-page *,
    .teacher-notices-page *::before,
    .teacher-notices-page *::after {
      box-sizing: border-box !important;
    }

    .teacher-notices-page img,
    .teacher-notices-page input,
    .teacher-notices-page select,
    .teacher-notices-page textarea,
    .teacher-notices-page button {
      max-width: 100%;
    }


    /* ================================
       HEADER
    ================================= */

    .tn-header {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      display: flex !important;
      align-items: flex-start !important;
      justify-content: space-between !important;

      gap: 16px !important;
      margin: 0 0 22px 0 !important;
    }

    .tn-header > div:first-child {
      flex: 1 1 auto !important;
      min-width: 0 !important;
      max-width: 100% !important;
    }

    .tn-header h1 {
      margin: 0 !important;
      padding: 0 !important;

      font-size: clamp(22px, 3vw, 30px) !important;
      line-height: 1.25 !important;

      color: #111827 !important;

      word-break: break-word !important;
      overflow-wrap: anywhere !important;
    }

    .tn-header p {
      margin: 6px 0 0 0 !important;

      font-size: 14px !important;
      line-height: 20px !important;

      color: #6b7280 !important;

      word-break: break-word !important;
    }

    .tn-header-actions {
      flex: 0 1 auto !important;
      min-width: 0 !important;
      max-width: 100% !important;

      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;

      gap: 8px !important;
      flex-wrap: wrap !important;
    }


    /* ================================
       BUTTONS
    ================================= */

    .teacher-notices-page .tn-back-btn,
    .teacher-notices-page .tn-primary-btn,
    .teacher-notices-page .tn-secondary-btn,
    .teacher-notices-page .tn-danger-btn {
      max-width: 100% !important;

      font-family: inherit !important;

      cursor: pointer !important;

      white-space: nowrap !important;

      overflow: hidden !important;
      text-overflow: ellipsis !important;

      flex-shrink: 1 !important;
    }

    .tn-back-btn {
      min-height: 40px !important;

      padding: 9px 13px !important;

      border: 1px solid #d1d5db !important;
      border-radius: 8px !important;

      background: #ffffff !important;
      color: #374151 !important;

      font-size: 13px !important;
    }

    .tn-primary-btn {
      min-height: 40px !important;

      padding: 9px 14px !important;

      border: 0 !important;
      border-radius: 8px !important;

      background: #2563eb !important;
      color: #ffffff !important;

      font-size: 13px !important;
      font-weight: 600 !important;
    }

    .tn-secondary-btn {
      min-height: 38px !important;

      padding: 8px 12px !important;

      border: 1px solid #dbeafe !important;
      border-radius: 8px !important;

      background: #eff6ff !important;
      color: #2563eb !important;

      font-size: 13px !important;
      font-weight: 600 !important;
    }

    .tn-danger-btn {
      min-height: 38px !important;

      padding: 8px 12px !important;

      border: 1px solid #fecaca !important;
      border-radius: 8px !important;

      background: #fef2f2 !important;
      color: #dc2626 !important;

      font-size: 13px !important;
      font-weight: 600 !important;
    }


    /* ================================
       STATS
    ================================= */

    .tn-stats {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      display: grid !important;

      grid-template-columns:
        repeat(4, minmax(0, 1fr)) !important;

      gap: 12px !important;

      margin-bottom: 18px !important;
    }

    .tn-stat-card {
      min-width: 0 !important;
      max-width: 100% !important;

      display: flex !important;
      align-items: center !important;

      gap: 10px !important;

      padding: 15px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;
      border-radius: 12px !important;

      box-shadow: 0 2px 7px rgba(0,0,0,0.03) !important;
    }

    .tn-stat-icon {
      width: 42px !important;
      height: 42px !important;

      min-width: 42px !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      border-radius: 10px !important;

      background: #eff6ff !important;

      font-size: 20px !important;
    }

    .tn-stat-card > div:last-child {
      min-width: 0 !important;
    }

    .tn-stat-card span {
      display: block !important;

      font-size: 11px !important;
      line-height: 17px !important;

      color: #6b7280 !important;

      white-space: nowrap !important;
    }

    .tn-stat-card strong {
      display: block !important;

      margin-top: 1px !important;

      font-size: 22px !important;
      line-height: 27px !important;

      color: #111827 !important;
    }


    /* ================================
       TOOLBAR
    ================================= */

    .tn-toolbar {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      display: grid !important;

      grid-template-columns:
        minmax(0, 1.5fr)
        repeat(3, minmax(0, 0.7fr)) !important;

      gap: 9px !important;

      padding: 12px !important;
      margin-bottom: 18px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;
      border-radius: 11px !important;
    }

    .tn-search {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;

      height: 42px !important;

      display: flex !important;
      align-items: center !important;

      gap: 7px !important;

      padding: 0 10px !important;

      border: 1px solid #d1d5db !important;
      border-radius: 8px !important;

      background: #ffffff !important;
    }

    .tn-search span {
      flex: 0 0 auto !important;
      font-size: 15px !important;
    }

    .tn-search input {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;

      border: 0 !important;
      outline: 0 !important;

      font-family: inherit !important;
      font-size: 13px !important;

      background: transparent !important;
    }

    .tn-toolbar select {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;

      height: 42px !important;

      padding: 0 9px !important;

      border: 1px solid #d1d5db !important;
      border-radius: 8px !important;

      background: #ffffff !important;

      color: #374151 !important;

      font-family: inherit !important;
      font-size: 12px !important;

      outline: 0 !important;
    }


    /* ================================
       CONTENT
    ================================= */

    #tnContent {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      overflow: hidden !important;
    }

    .tn-list {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      display: flex !important;
      flex-direction: column !important;

      gap: 12px !important;
    }

    .tn-card {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      display: grid !important;

      grid-template-columns:
        48px minmax(0, 1fr) auto !important;

      gap: 12px !important;

      padding: 14px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;
      border-radius: 12px !important;
    }

    .tn-card-left {
      min-width: 0 !important;
    }

    .tn-notice-icon {
      width: 44px !important;
      height: 44px !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      border-radius: 10px !important;

      background: #eff6ff !important;

      font-size: 20px !important;
    }

    .tn-card-content {
      min-width: 0 !important;
      max-width: 100% !important;
    }

    .tn-card-title-row {
      width: 100% !important;
      min-width: 0 !important;

      display: flex !important;
      align-items: flex-start !important;

      justify-content: space-between !important;

      gap: 10px !important;
    }

    .tn-card-title-row > div:first-child {
      min-width: 0 !important;
      flex: 1 1 auto !important;
    }

    .tn-badges {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 5px !important;

      margin-bottom: 5px !important;
    }

    .tn-category-badge,
    .tn-important-badge {
      max-width: 100% !important;

      padding: 3px 7px !important;

      border-radius: 15px !important;

      font-size: 10px !important;
      line-height: 14px !important;

      white-space: nowrap !important;
    }

    .tn-card h3 {
      margin: 0 !important;

      font-size: 16px !important;
      line-height: 21px !important;

      color: #111827 !important;

      word-break: break-word !important;
      overflow-wrap: anywhere !important;
    }

    .tn-description {
      margin: 8px 0 9px !important;

      font-size: 12px !important;
      line-height: 18px !important;

      color: #6b7280 !important;

      word-break: break-word !important;
      overflow-wrap: anywhere !important;
    }

    .tn-meta {
      display: flex !important;
      flex-wrap: wrap !important;

      gap: 7px 12px !important;

      font-size: 11px !important;
      line-height: 16px !important;

      color: #6b7280 !important;
    }

    .tn-card-actions {
      display: flex !important;

      align-items: center !important;

      gap: 4px !important;

      flex-shrink: 0 !important;
    }

    .tn-icon-btn {
      width: 32px !important;
      height: 32px !important;

      min-width: 32px !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      padding: 0 !important;

      border: 1px solid #e5e7eb !important;
      border-radius: 7px !important;

      background: #ffffff !important;

      font-size: 14px !important;

      cursor: pointer !important;
    }

    .tn-card-footer {
      min-width: 100px !important;

      display: flex !important;
      flex-direction: column !important;

      align-items: flex-end !important;
      justify-content: space-between !important;

      gap: 8px !important;

      color: #9ca3af !important;

      font-size: 10px !important;
      line-height: 15px !important;

      text-align: right !important;
    }

    .tn-view-btn {
      border: 0 !important;
      background: transparent !important;

      color: #2563eb !important;

      font-size: 11px !important;
      font-weight: 600 !important;

      padding: 3px 0 !important;

      white-space: nowrap !important;

      cursor: pointer !important;
    }


    /* ================================
       EMPTY
    ================================= */

    .tn-empty {
      width: 100% !important;
      max-width: 100% !important;

      padding: 50px 15px !important;

      text-align: center !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;
      border-radius: 12px !important;
    }

    .tn-empty-icon {
      margin-bottom: 10px !important;

      font-size: 46px !important;
    }

    .tn-empty h3 {
      margin: 0 !important;

      font-size: 18px !important;
      line-height: 24px !important;

      color: #111827 !important;
    }

    .tn-empty p {
      margin: 6px 0 18px !important;

      font-size: 12px !important;
      line-height: 18px !important;

      color: #6b7280 !important;
    }


    /* ================================
       FORM
    ================================= */

    .tn-form-page,
    .tn-detail-page {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
    }

    .tn-form-header {
      width: 100% !important;
      min-width: 0 !important;

      display: flex !important;
      align-items: flex-start !important;
      justify-content: space-between !important;

      gap: 14px !important;

      margin-bottom: 18px !important;
    }

    .tn-form-header > div:first-child {
      min-width: 0 !important;
    }

    .tn-form-header h1 {
      margin: 0 !important;

      font-size: clamp(21px, 3vw, 28px) !important;
      line-height: 1.25 !important;

      color: #111827 !important;

      word-break: break-word !important;
    }

    .tn-form-header p {
      margin: 5px 0 0 !important;

      font-size: 13px !important;

      color: #6b7280 !important;
    }

    #teacherNoticeForm {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      padding: 20px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;
      border-radius: 12px !important;
    }

    .tn-form-grid {
      width: 100% !important;
      max-width: 100% !important;

      display: grid !important;

      grid-template-columns:
        repeat(2, minmax(0, 1fr)) !important;

      gap: 16px !important;
    }

    .tn-form-group {
      min-width: 0 !important;
      max-width: 100% !important;
    }

    .tn-form-group.full {
      grid-column: 1 / -1 !important;
    }

    .tn-form-group label {
      display: block !important;

      margin-bottom: 6px !important;

      font-size: 12px !important;
      font-weight: 600 !important;

      color: #374151 !important;
    }

    .tn-form-group input,
    .tn-form-group select,
    .tn-form-group textarea {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      font-family: inherit !important;
      font-size: 13px !important;

      border: 1px solid #d1d5db !important;
      border-radius: 8px !important;

      outline: 0 !important;
    }

    .tn-form-group input[type="text"],
    .tn-form-group input[type="date"],
    .tn-form-group input[type="url"],
    .tn-form-group select {
      height: 42px !important;

      padding: 0 10px !important;
    }

    .tn-form-group textarea {
      min-height: 120px !important;

      padding: 10px !important;

      resize: vertical !important;

      line-height: 19px !important;
    }

    .tn-form-group small {
      display: block !important;

      margin-top: 5px !important;

      font-size: 10px !important;
      line-height: 15px !important;

      color: #9ca3af !important;
    }

    .tn-checkbox-label {
      width: 100% !important;
      max-width: 100% !important;

      min-height: 42px !important;

      display: flex !important;
      align-items: center !important;

      gap: 8px !important;

      padding: 9px 10px !important;

      border: 1px solid #d1d5db !important;
      border-radius: 8px !important;

      font-size: 12px !important;
    }

    .tn-checkbox-label input {
      width: 16px !important;
      height: 16px !important;

      min-width: 16px !important;

      flex-shrink: 0 !important;
    }

    .tn-form-actions {
      width: 100% !important;
      max-width: 100% !important;

      display: flex !important;

      align-items: center !important;
      justify-content: flex-end !important;

      gap: 9px !important;

      margin-top: 20px !important;
      padding-top: 17px !important;

      border-top: 1px solid #eeeeee !important;
    }


    /* ================================
       DETAIL
    ================================= */

    .tn-detail-header {
      width: 100% !important;
      min-width: 0 !important;

      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;

      gap: 10px !important;

      margin-bottom: 18px !important;
    }

    .tn-detail-actions {
      display: flex !important;
      align-items: center !important;

      gap: 7px !important;

      flex-wrap: wrap !important;
    }

    .tn-detail-card {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      padding: 30px 20px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;
      border-radius: 12px !important;

      text-align: center !important;

      overflow: hidden !important;
    }

    .tn-detail-icon {
      margin-bottom: 10px !important;

      font-size: 50px !important;
    }

    .tn-detail-badges {
      display: flex !important;

      justify-content: center !important;
      align-items: center !important;

      flex-wrap: wrap !important;

      gap: 6px !important;

      margin-bottom: 10px !important;
    }

    .tn-detail-card h1 {
      max-width: 100% !important;

      margin: 0 auto !important;

      font-size: clamp(20px, 3vw, 28px) !important;
      line-height: 1.3 !important;

      color: #111827 !important;

      word-break: break-word !important;
      overflow-wrap: anywhere !important;
    }

    .tn-detail-meta {
      max-width: 100% !important;

      margin: 15px auto 0 !important;

      display: flex !important;
      justify-content: center !important;

      flex-wrap: wrap !important;

      gap: 8px 18px !important;

      font-size: 11px !important;
      line-height: 17px !important;

      color: #6b7280 !important;
    }

    .tn-detail-description {
      width: 100% !important;
      max-width: 100% !important;

      margin: 20px auto 0 !important;

      padding: 16px !important;

      border-radius: 9px !important;

      background: #f8fafc !important;

      color: #374151 !important;

      font-size: 13px !important;
      line-height: 21px !important;

      text-align: left !important;

      word-break: break-word !important;
      overflow-wrap: anywhere !important;
    }

    .tn-detail-link {
      width: 100% !important;
      max-width: 100% !important;

      margin: 15px auto 0 !important;

      padding: 13px !important;

      display: flex !important;
      flex-direction: column !important;

      align-items: flex-start !important;

      gap: 5px !important;

      text-align: left !important;

      border: 1px solid #dbeafe !important;
      border-radius: 8px !important;

      background: #eff6ff !important;
    }

    .tn-detail-link a {
      max-width: 100% !important;

      word-break: break-all !important;

      font-size: 12px !important;
    }


    /* ================================
       TABLET
    ================================= */

    @media (max-width: 1050px) {

      .teacher-notices-page {
        padding: 20px !important;
      }

      .tn-stats {
        grid-template-columns:
          repeat(2, minmax(0, 1fr)) !important;
      }

      .tn-toolbar {
        grid-template-columns:
          repeat(2, minmax(0, 1fr)) !important;
      }

      .tn-search {
        grid-column: 1 / -1 !important;
      }

      .tn-card {
        grid-template-columns:
          48px minmax(0, 1fr) !important;
      }

      .tn-card-footer {
        grid-column: 2 !important;

        min-width: 0 !important;

        flex-direction: row !important;

        align-items: center !important;
        justify-content: space-between !important;

        padding-top: 9px !important;

        border-top: 1px solid #eeeeee !important;

        text-align: left !important;
      }

    }


    /* ================================
       MOBILE
    ================================= */

    @media (max-width: 700px) {

      .teacher-notices-page {
        width: 100% !important;
        max-width: 100vw !important;

        padding: 14px !important;

        margin: 0 !important;

        overflow-x: hidden !important;
      }

      .tn-header {
        display: block !important;

        width: 100% !important;

        margin-bottom: 16px !important;
      }

      .tn-header-actions {
        width: 100% !important;
        max-width: 100% !important;

        display: grid !important;

        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr) !important;

        gap: 8px !important;

        margin-top: 12px !important;
      }

      .tn-header-actions button {
        width: 100% !important;
        min-width: 0 !important;

        padding-left: 7px !important;
        padding-right: 7px !important;
      }

      .tn-header h1 {
        font-size: 23px !important;
        line-height: 29px !important;
      }

      .tn-header p {
        font-size: 12px !important;
        line-height: 18px !important;
      }


      .tn-stats {
        grid-template-columns:
          repeat(2, minmax(0, 1fr)) !important;

        gap: 8px !important;

        margin-bottom: 12px !important;
      }

      .tn-stat-card {
        padding: 11px !important;

        gap: 8px !important;

        border-radius: 9px !important;
      }

      .tn-stat-icon {
        width: 34px !important;
        height: 34px !important;

        min-width: 34px !important;

        font-size: 16px !important;
      }

      .tn-stat-card span {
        font-size: 9px !important;
        line-height: 14px !important;
      }

      .tn-stat-card strong {
        font-size: 19px !important;
        line-height: 23px !important;
      }


      .tn-toolbar {
        grid-template-columns:
          minmax(0, 1fr) !important;

        gap: 8px !important;

        padding: 9px !important;

        margin-bottom: 12px !important;
      }

      .tn-search {
        grid-column: auto !important;

        height: 40px !important;
      }

      .tn-toolbar select {
        height: 40px !important;

        font-size: 12px !important;
      }


      .tn-card {
        width: 100% !important;

        grid-template-columns:
          40px minmax(0, 1fr) !important;

        gap: 9px !important;

        padding: 11px !important;
      }

      .tn-notice-icon {
        width: 38px !important;
        height: 38px !important;

        font-size: 17px !important;
      }

      .tn-card-title-row {
        display: block !important;
      }

      .tn-card-actions {
        width: 100% !important;

        display: flex !important;

        justify-content: flex-start !important;

        margin-top: 8px !important;
      }

      .tn-icon-btn {
        width: 31px !important;
        height: 31px !important;

        min-width: 31px !important;
      }

      .tn-card h3 {
        font-size: 14px !important;
        line-height: 20px !important;
      }

      .tn-description {
        font-size: 11px !important;
        line-height: 17px !important;
      }

      .tn-meta {
        flex-direction: column !important;

        gap: 3px !important;

        font-size: 10px !important;
      }

      .tn-card-footer {
        grid-column: 1 / -1 !important;

        min-width: 0 !important;

        flex-direction: row !important;

        align-items: center !important;
        justify-content: space-between !important;

        gap: 8px !important;

        padding-top: 8px !important;

        border-top: 1px solid #eeeeee !important;

        text-align: left !important;
      }


      /* FORM */

      .tn-form-header {
        display: block !important;

        width: 100% !important;

        margin-bottom: 14px !important;
      }

      .tn-form-header .tn-back-btn {
        width: 100% !important;

        margin-top: 10px !important;
      }

      .tn-form-header h1 {
        font-size: 22px !important;
        line-height: 28px !important;
      }

      #teacherNoticeForm {
        padding: 13px !important;

        border-radius: 10px !important;
      }

      .tn-form-grid {
        grid-template-columns:
          minmax(0, 1fr) !important;

        gap: 13px !important;
      }

      .tn-form-group.full {
        grid-column: auto !important;
      }

      .tn-form-actions {
        flex-direction: column-reverse !important;

        align-items: stretch !important;

        gap: 8px !important;
      }

      .tn-form-actions button {
        width: 100% !important;

        min-width: 0 !important;
      }


      /* DETAIL */

      .tn-detail-header {
        display: block !important;

        width: 100% !important;
      }

      .tn-detail-header > .tn-back-btn {
        width: 100% !important;

        margin-bottom: 9px !important;
      }

      .tn-detail-actions {
        width: 100% !important;

        display: grid !important;

        grid-template-columns:
          minmax(0, 1fr)
          minmax(0, 1fr) !important;

        gap: 8px !important;
      }

      .tn-detail-actions button {
        width: 100% !important;

        min-width: 0 !important;
      }

      .tn-detail-card {
        padding: 23px 13px !important;
      }

      .tn-detail-icon {
        font-size: 43px !important;
      }

      .tn-detail-card h1 {
        font-size: 20px !important;
        line-height: 27px !important;
      }

      .tn-detail-meta {
        flex-direction: column !important;

        gap: 5px !important;
      }

    }


    /* ================================
       SMALL MOBILE
    ================================= */

    @media (max-width: 430px) {

      .teacher-notices-page {
        padding: 10px !important;
      }

      .tn-header-actions {
        grid-template-columns:
          minmax(0, 1fr) !important;
      }

      .tn-header-actions button {
        width: 100% !important;
      }

      .tn-stats {
        grid-template-columns:
          minmax(0, 1fr) !important;
      }

      .tn-card {
        grid-template-columns:
          36px minmax(0, 1fr) !important;

        padding: 10px !important;
      }

      .tn-notice-icon {
        width: 34px !important;
        height: 34px !important;

        font-size: 16px !important;
      }

      .tn-card-footer {
        flex-direction: column !important;

        align-items: flex-start !important;
      }

      .tn-detail-actions {
        grid-template-columns:
          minmax(0, 1fr) !important;
      }

    }

  `;

  document.head.appendChild(style);
}


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
  return (
    Date.now() +
    Math.floor(Math.random() * 1000)
  );
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

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export function TeacherNotices() {

  loadTeacherNoticesCSS();

  editingNoticeId = null;

  return `

    <div class="dashboard-main teacher-notices-page">

      <div class="tn-header">

        <div>

          <h1>📢 Notices</h1>

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

          <span>🔎</span>

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

          <option value="All Classes">
            All Classes
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

    </div>

  `;
}


/* =========================================================
   STATS
========================================================= */

function renderStats() {

  const total = notices.length;

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

      const today = new Date();

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

                ${
                  notice.section
                    ? `
                      <span>
                        Section
                        ${escapeHTML(
                          notice.section
                        )}
                      </span>
                    `
                    : ""
                }

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

      <form id="teacherNoticeForm">

        <div class="tn-form-grid">

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
                    (
                      notice?.category ||
                      "General"
                    ) === category
                      ? "selected"
                      : ""
                  }
                >
                  ${category}
                </option>

              `).join("")}

            </select>

          </div>

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

  if (classFilter) {

    filtered =
      filtered.filter(
        notice =>
          notice.className ===
          classFilter
      );

  }

  if (categoryFilter) {

    filtered =
      filtered.filter(
        notice =>
          notice.category ===
          categoryFilter
      );

  }

  if (
    statusFilter ===
    "important"
  ) {

    filtered =
      filtered.filter(
        notice =>
          notice.important === true
      );

  }

  if (
    statusFilter ===
    "normal"
  ) {

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
   DELETE
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

        <option value="All Classes">
          All Classes
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

  loadTeacherNoticesCSS();

  if (
    window.teacherNoticesInitialized
  ) {
    return;
  }

  window.teacherNoticesInitialized =
    true;


  /* ================================
     CLICK
  ================================= */

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

      if (
        !document.querySelector(
          ".teacher-notices-page"
        )
      ) {
        return;
      }

      const action =
        button.dataset.tnAction;

      const id =
        button.dataset.id;


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


      if (
        action ===
        "show-form"
      ) {

        renderForm();

        return;
      }


      if (
        action ===
        "back-notices"
      ) {

        editingNoticeId =
          null;

        renderTeacherNoticesPage();

        return;
      }


      if (
        action ===
        "view"
      ) {

        viewNotice(id);

        return;
      }


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


      if (
        action ===
        "delete"
      ) {

        deleteNotice(id);

        return;
      }

    }
  );


  /* ================================
     FORM SUBMIT
  ================================= */

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


      /* EDIT */

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


      /* CREATE */

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


  /* ================================
     SEARCH
  ================================= */

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


  /* ================================
     FILTER
  ================================= */

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