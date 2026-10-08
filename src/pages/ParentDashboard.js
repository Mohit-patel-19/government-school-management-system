/* =========================================================
   PARENT DASHBOARD
   Government School - Parent Portal
   ========================================================= */

let parentStylesLoaded = false;

/* =========================================================
   CSS
   ========================================================= */

function loadParentCSS() {
  if (parentStylesLoaded) return;

  parentStylesLoaded = true;

  const style = document.createElement("style");

  style.id = "parent-dashboard-styles";

  style.textContent = `
    /* =====================================================
       RESET
    ===================================================== */

    .parent-dashboard,
    .parent-dashboard * {
      box-sizing: border-box;
    }

    .parent-dashboard {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      min-height: 100vh;
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden !important;
      background: #f8fafc;
      color: #111827;
    }

    .parent-dashboard button {
      font-family: inherit;
    }


    /* =====================================================
       SIDEBAR
    ===================================================== */

    .parent-sidebar {
      position: fixed !important;

      top: 0 !important;
      left: 0 !important;

      width: 260px !important;
      min-width: 260px !important;
      max-width: 260px !important;

      height: 100vh !important;
      height: 100dvh !important;

      margin: 0 !important;
      padding: 0 !important;

      background: #ffffff !important;

      border-right: 1px solid #e5e7eb !important;

      display: flex !important;
      flex-direction: column !important;

      z-index: 10000 !important;

      overflow-x: hidden !important;
      overflow-y: auto !important;

      transform: translate3d(0, 0, 0) !important;

      box-shadow: 2px 0 12px rgba(0, 0, 0, 0.04);
    }


    /* =====================================================
       SIDEBAR HEADER
    ===================================================== */

    .parent-sidebar-header {
      width: 100% !important;
      min-height: 82px !important;

      padding: 14px !important;

      display: flex !important;
      align-items: center !important;

      position: relative !important;

      border-bottom: 1px solid #e5e7eb !important;

      flex-shrink: 0 !important;
    }

    .parent-sidebar-brand {
      width: 100% !important;
      min-width: 0 !important;

      display: flex !important;
      align-items: center !important;

      gap: 11px !important;

      padding-right: 42px !important;
    }

    .parent-brand-icon {
      width: 44px !important;
      height: 44px !important;

      min-width: 44px !important;

      border-radius: 10px !important;

      background: #eef2ff !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      font-size: 23px !important;

      flex-shrink: 0 !important;
    }

    .parent-brand-text {
      min-width: 0 !important;

      display: flex !important;
      flex-direction: column !important;

      overflow: hidden !important;
    }

    .parent-brand-text span {
      display: block !important;

      margin: 0 !important;

      color: #111827 !important;

      font-size: 14px !important;
      font-weight: 700 !important;

      line-height: 19px !important;

      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    .parent-brand-text small {
      display: block !important;

      margin: 3px 0 0 0 !important;

      color: #6b7280 !important;

      font-size: 11px !important;
      font-weight: 500 !important;

      line-height: 15px !important;

      white-space: nowrap !important;
    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    .parent-sidebar-close {
      display: none !important;

      position: absolute !important;

      top: 20px !important;
      right: 12px !important;

      width: 38px !important;
      height: 38px !important;

      min-width: 38px !important;
      max-width: 38px !important;

      margin: 0 !important;
      padding: 0 !important;

      border: 0 !important;
      border-radius: 8px !important;

      background: #f3f4f6 !important;

      color: #111827 !important;

      font-size: 28px !important;
      font-weight: 400 !important;

      line-height: 38px !important;
      text-align: center !important;

      align-items: center !important;
      justify-content: center !important;

      cursor: pointer !important;

      z-index: 10002 !important;
    }

    .parent-sidebar-close:hover {
      background: #e5e7eb !important;
    }


    /* =====================================================
       SIDEBAR NAV
    ===================================================== */

    .parent-sidebar-nav {
      width: 100% !important;

      padding: 12px !important;

      display: flex !important;
      flex-direction: column !important;

      gap: 5px !important;

      flex: 1 1 auto !important;

      min-height: 0 !important;
    }


    /* =====================================================
       NAV ITEM
    ===================================================== */

    .parent-nav-item {
      width: 100% !important;
      min-width: 0 !important;

      min-height: 46px !important;

      margin: 0 !important;
      padding: 10px 12px !important;

      border: 0 !important;
      border-radius: 9px !important;

      background: transparent !important;

      display: flex !important;
      flex-direction: row !important;

      align-items: center !important;

      justify-content: flex-start !important;

      gap: 12px !important;

      color: #374151 !important;

      text-align: left !important;

      cursor: pointer !important;

      white-space: nowrap !important;

      overflow: hidden !important;

      flex-shrink: 0 !important;
    }

    .parent-nav-item:hover {
      background: #f3f4f6 !important;
    }

    .parent-nav-item.active {
      background: #eef2ff !important;
      color: #4338ca !important;
    }


    /* =====================================================
       ICON
    ===================================================== */

    .parent-nav-icon {
      width: 26px !important;
      min-width: 26px !important;
      max-width: 26px !important;

      height: 26px !important;

      display: flex !important;

      align-items: center !important;
      justify-content: center !important;

      flex-shrink: 0 !important;

      font-size: 19px !important;

      line-height: 1 !important;

      text-align: center !important;
    }


    /* =====================================================
       LABEL
    ===================================================== */

    .parent-nav-label {
      display: block !important;

      width: auto !important;

      min-width: 0 !important;

      max-width: calc(100% - 38px) !important;

      flex: 1 1 auto !important;

      color: inherit !important;

      font-size: 14px !important;
      font-weight: 500 !important;

      line-height: 20px !important;

      visibility: visible !important;
      opacity: 1 !important;

      white-space: nowrap !important;

      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    .parent-nav-item.active .parent-nav-label {
      font-weight: 600 !important;
    }


    /* =====================================================
       LOGOUT
    ===================================================== */

    .parent-logout-item {
      margin-top: 6px !important;

      color: #dc2626 !important;
    }

    .parent-logout-item:hover {
      background: #fef2f2 !important;
      color: #dc2626 !important;
    }


    /* =====================================================
       MAIN AREA
    ===================================================== */

    .parent-main {
      width: calc(100% - 260px) !important;

      max-width: calc(100% - 260px) !important;

      min-width: 0 !important;
      min-height: 100vh;

      margin-left: 260px !important;

      display: flex !important;
      flex-direction: column !important;

      overflow-x: hidden !important;
    }


    /* =====================================================
       HEADER
    ===================================================== */

    .parent-header {
      width: 100% !important;
      max-width: 100% !important;

      min-height: 82px !important;

      padding: 16px 26px !important;

      background: #ffffff !important;

      border-bottom: 1px solid #e5e7eb !important;

      display: flex !important;

      align-items: center !important;

      justify-content: space-between !important;

      gap: 18px !important;

      flex-shrink: 0 !important;
    }

    .parent-header-left {
      min-width: 0 !important;

      display: flex !important;
      align-items: center !important;

      gap: 14px !important;

      flex: 1 !important;
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    .parent-mobile-menu {
      width: 42px !important;
      height: 42px !important;

      min-width: 42px !important;

      padding: 0 !important;

      border: 0 !important;
      border-radius: 9px !important;

      background: #f1f5f9 !important;

      color: #111827 !important;

      display: none !important;

      align-items: center !important;
      justify-content: center !important;

      font-size: 23px !important;

      line-height: 1 !important;

      cursor: pointer !important;

      flex-shrink: 0 !important;
    }


    /* =====================================================
       HEADER TITLE
    ===================================================== */

    .parent-header-title {
      min-width: 0 !important;
    }

    .parent-header-title h1 {
      margin: 0 !important;

      color: #111827 !important;

      font-size: 22px !important;
      font-weight: 700 !important;

      line-height: 29px !important;

      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    .parent-header-title p {
      margin: 3px 0 0 0 !important;

      color: #6b7280 !important;

      font-size: 13px !important;

      line-height: 18px !important;
    }


    /* =====================================================
       HEADER RIGHT
    ===================================================== */

    .parent-header-right {
      display: flex !important;
      align-items: center !important;

      gap: 12px !important;

      flex-shrink: 0 !important;
    }

    .parent-notification-btn {
      width: 42px !important;
      height: 42px !important;

      min-width: 42px !important;

      padding: 0 !important;

      border: 0 !important;
      border-radius: 9px !important;

      background: #f3f4f6 !important;

      font-size: 19px !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      cursor: pointer !important;
    }

    .parent-profile {
      display: flex !important;

      align-items: center !important;

      gap: 9px !important;
    }

    .parent-profile-avatar {
      width: 42px !important;
      height: 42px !important;

      min-width: 42px !important;

      border-radius: 50% !important;

      background: #4338ca !important;

      color: #ffffff !important;

      display: flex !important;

      align-items: center !important;
      justify-content: center !important;

      font-size: 16px !important;
      font-weight: 700 !important;
    }

    .parent-profile-info {
      display: flex !important;
      flex-direction: column !important;

      min-width: 0 !important;
    }

    .parent-profile-info strong {
      color: #111827 !important;

      font-size: 13px !important;
      font-weight: 600 !important;

      white-space: nowrap !important;
    }

    .parent-profile-info span {
      margin-top: 2px !important;

      color: #6b7280 !important;

      font-size: 11px !important;

      white-space: nowrap !important;
    }


    /* =====================================================
       CONTENT
    ===================================================== */

    .parent-content {
      width: 100% !important;

      max-width: 100% !important;

      min-width: 0 !important;

      padding: 24px !important;

      overflow-x: hidden !important;
    }


    /* =====================================================
       WELCOME
    ===================================================== */

    .parent-welcome-card {
      width: 100% !important;

      padding: 22px !important;

      border-radius: 14px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;

      margin-bottom: 20px !important;
    }

    .parent-welcome-card h2 {
      margin: 0 !important;

      color: #111827 !important;

      font-size: 22px !important;
      line-height: 29px !important;
    }

    .parent-welcome-card p {
      margin: 7px 0 0 0 !important;

      color: #6b7280 !important;

      font-size: 14px !important;

      line-height: 21px !important;
    }


    /* =====================================================
       STATS
    ===================================================== */

    .parent-stats-grid {
      width: 100% !important;

      display: grid !important;

      grid-template-columns:
        repeat(4, minmax(0, 1fr)) !important;

      gap: 16px !important;

      margin-bottom: 20px !important;
    }

    .parent-stat-card {
      min-width: 0 !important;

      padding: 18px !important;

      border-radius: 13px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;

      display: flex !important;

      align-items: center !important;

      gap: 12px !important;
    }

    .parent-stat-icon {
      width: 44px !important;
      height: 44px !important;

      min-width: 44px !important;

      border-radius: 10px !important;

      display: flex !important;

      align-items: center !important;
      justify-content: center !important;

      font-size: 21px !important;
    }

    .parent-stat-info {
      min-width: 0 !important;
    }

    .parent-stat-info strong {
      display: block !important;

      color: #111827 !important;

      font-size: 20px !important;

      line-height: 25px !important;
    }

    .parent-stat-info span {
      display: block !important;

      margin-top: 2px !important;

      color: #6b7280 !important;

      font-size: 12px !important;
    }


    /* =====================================================
       DASHBOARD GRID
    ===================================================== */

    .parent-dashboard-grid {
      width: 100% !important;

      display: grid !important;

      grid-template-columns:
        minmax(0, 1.5fr)
        minmax(0, 1fr) !important;

      gap: 18px !important;
    }

    .parent-card {
      min-width: 0 !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;

      border-radius: 13px !important;

      padding: 20px !important;
    }

    .parent-card-header {
      display: flex !important;

      align-items: center !important;

      justify-content: space-between !important;

      gap: 10px !important;

      margin-bottom: 16px !important;
    }

    .parent-card-header h3 {
      margin: 0 !important;

      color: #111827 !important;

      font-size: 16px !important;

      line-height: 22px !important;
    }

    .parent-card-header button {
      border: 0 !important;

      background: transparent !important;

      color: #4338ca !important;

      font-size: 12px !important;

      font-weight: 600 !important;

      cursor: pointer !important;
    }


    /* =====================================================
       CHILD INFO
    ===================================================== */

    .parent-child-info {
      display: flex !important;

      align-items: center !important;

      gap: 14px !important;
    }

    .parent-child-avatar {
      width: 58px !important;
      height: 58px !important;

      min-width: 58px !important;

      border-radius: 50% !important;

      background: #eef2ff !important;

      display: flex !important;

      align-items: center !important;
      justify-content: center !important;

      font-size: 25px !important;
    }

    .parent-child-details {
      min-width: 0 !important;
    }

    .parent-child-details h4 {
      margin: 0 !important;

      color: #111827 !important;

      font-size: 16px !important;

      line-height: 21px !important;
    }

    .parent-child-details p {
      margin: 3px 0 0 0 !important;

      color: #6b7280 !important;

      font-size: 12px !important;

      line-height: 18px !important;
    }


    /* =====================================================
       QUICK ACTIONS
    ===================================================== */

    .parent-quick-actions {
      display: grid !important;

      grid-template-columns:
        repeat(2, minmax(0, 1fr)) !important;

      gap: 10px !important;
    }

    .parent-quick-action {
      min-width: 0 !important;

      min-height: 72px !important;

      padding: 12px !important;

      border: 1px solid #e5e7eb !important;

      border-radius: 10px !important;

      background: #ffffff !important;

      display: flex !important;

      flex-direction: column !important;

      align-items: flex-start !important;

      justify-content: center !important;

      gap: 6px !important;

      color: #111827 !important;

      cursor: pointer !important;

      text-align: left !important;
    }

    .parent-quick-action:hover {
      background: #f8fafc !important;

      border-color: #c7d2fe !important;
    }

    .parent-quick-action-icon {
      font-size: 20px !important;
      line-height: 1 !important;
    }

    .parent-quick-action span:last-child {
      font-size: 12px !important;

      font-weight: 600 !important;
    }


    /* =====================================================
       MOBILE OVERLAY
    ===================================================== */

    .parent-sidebar-overlay {
      display: none !important;

      position: fixed !important;

      inset: 0 !important;

      width: 100vw !important;

      height: 100vh !important;
      height: 100dvh !important;

      background: rgba(0, 0, 0, 0.45) !important;

      z-index: 9999 !important;

      opacity: 0 !important;

      visibility: hidden !important;

      pointer-events: none !important;
    }


    /* =====================================================
       MODULE PAGE
    ===================================================== */

    .parent-module-card {
      width: 100% !important;

      min-height: 420px !important;

      padding: 50px 20px !important;

      border-radius: 14px !important;

      background: #ffffff !important;

      border: 1px solid #e5e7eb !important;

      display: flex !important;

      flex-direction: column !important;

      align-items: center !important;

      justify-content: center !important;

      text-align: center !important;
    }

    .parent-module-icon {
      font-size: 55px !important;

      line-height: 1 !important;

      margin-bottom: 15px !important;
    }

    .parent-module-card h2 {
      margin: 0 !important;

      color: #111827 !important;

      font-size: 23px !important;
    }

    .parent-module-card p {
      margin: 8px 0 20px 0 !important;

      color: #6b7280 !important;

      font-size: 14px !important;
    }

    .parent-back-btn {
      min-height: 42px !important;

      padding: 10px 18px !important;

      border: 0 !important;

      border-radius: 8px !important;

      background: #4338ca !important;

      color: #ffffff !important;

      font-size: 13px !important;

      font-weight: 600 !important;

      cursor: pointer !important;
    }


    /* =====================================================
       MOBILE
    ===================================================== */

    @media (max-width: 768px) {

      .parent-sidebar {
        width: 280px !important;
        min-width: 280px !important;
        max-width: 280px !important;

        transform: translate3d(-110%, 0, 0) !important;

        visibility: hidden !important;

        transition:
          transform 0.25s ease,
          visibility 0.25s ease !important;

        box-shadow: 7px 0 25px rgba(0, 0, 0, 0.14) !important;
      }

      .parent-sidebar.parent-mobile-open {
        transform: translate3d(0, 0, 0) !important;

        visibility: visible !important;
      }

      .parent-sidebar-close {
        display: flex !important;
      }

      .parent-sidebar-overlay {
        display: block !important;
      }

      .parent-sidebar-overlay.active {
        opacity: 1 !important;

        visibility: visible !important;

        pointer-events: auto !important;
      }

      .parent-main {
        width: 100% !important;

        max-width: 100% !important;

        margin-left: 0 !important;

        overflow-x: hidden !important;
      }

      .parent-header {
        min-height: 70px !important;

        padding: 11px 13px !important;

        gap: 10px !important;
      }

      .parent-header-left {
        gap: 9px !important;
      }

      .parent-mobile-menu {
        display: flex !important;
      }

      .parent-header-title h1 {
        font-size: 17px !important;

        line-height: 22px !important;
      }

      .parent-header-title p {
        font-size: 11px !important;

        line-height: 15px !important;
      }

      .parent-profile-info {
        display: none !important;
      }

      .parent-profile-avatar {
        width: 37px !important;
        height: 37px !important;

        min-width: 37px !important;

        font-size: 14px !important;
      }

      .parent-notification-btn {
        width: 37px !important;
        height: 37px !important;

        min-width: 37px !important;
      }

      .parent-content {
        padding: 13px !important;
      }

      .parent-welcome-card {
        padding: 16px !important;

        margin-bottom: 13px !important;
      }

      .parent-welcome-card h2 {
        font-size: 18px !important;

        line-height: 24px !important;
      }

      .parent-welcome-card p {
        font-size: 12px !important;

        line-height: 18px !important;
      }

      .parent-stats-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr)) !important;

        gap: 9px !important;

        margin-bottom: 13px !important;
      }

      .parent-stat-card {
        padding: 12px !important;

        gap: 9px !important;
      }

      .parent-stat-icon {
        width: 36px !important;
        height: 36px !important;

        min-width: 36px !important;

        font-size: 17px !important;
      }

      .parent-stat-info strong {
        font-size: 16px !important;

        line-height: 21px !important;
      }

      .parent-stat-info span {
        font-size: 10px !important;
      }

      .parent-dashboard-grid {
        grid-template-columns:
          minmax(0, 1fr) !important;

        gap: 13px !important;
      }

      .parent-card {
        padding: 14px !important;
      }

      .parent-quick-actions {
        grid-template-columns:
          repeat(2, minmax(0, 1fr)) !important;
      }

      .parent-quick-action {
        min-height: 65px !important;
      }
    }


    /* =====================================================
       SMALL MOBILE
    ===================================================== */

    @media (max-width: 480px) {

      .parent-sidebar {
        width: 280px !important;
        min-width: 280px !important;
        max-width: 280px !important;
      }

      .parent-sidebar-header {
        min-height: 76px !important;

        padding: 12px !important;
      }

      .parent-brand-icon {
        width: 40px !important;
        height: 40px !important;

        min-width: 40px !important;

        font-size: 21px !important;
      }

      .parent-brand-text span {
        font-size: 13px !important;
      }

      .parent-brand-text small {
        font-size: 10px !important;
      }

      .parent-sidebar-close {
        top: 18px !important;
        right: 10px !important;

        width: 36px !important;
        height: 36px !important;

        min-width: 36px !important;
        max-width: 36px !important;

        line-height: 36px !important;

        font-size: 26px !important;
      }

      .parent-sidebar-nav {
        padding: 11px 10px !important;

        gap: 4px !important;
      }

      .parent-nav-item {
        min-height: 45px !important;

        padding: 9px 11px !important;

        gap: 11px !important;
      }

      .parent-nav-icon {
        width: 25px !important;
        min-width: 25px !important;
        max-width: 25px !important;

        font-size: 18px !important;
      }

      .parent-nav-label {
        font-size: 13px !important;

        line-height: 19px !important;
      }

      .parent-header-title p {
        display: none !important;
      }

      .parent-content {
        padding: 11px !important;
      }

      .parent-stats-grid {
        grid-template-columns:
          minmax(0, 1fr) !important;
      }

      .parent-quick-actions {
        grid-template-columns:
          minmax(0, 1fr) !important;
      }

      .parent-child-info {
        align-items: flex-start !important;
      }
    }


    /* =====================================================
       VERY SMALL
    ===================================================== */

    @media (max-width: 360px) {

      .parent-sidebar {
        width: 270px !important;

        min-width: 270px !important;

        max-width: 270px !important;
      }

      .parent-header-title h1 {
        font-size: 15px !important;
      }

      .parent-mobile-menu {
        width: 37px !important;
        height: 37px !important;

        min-width: 37px !important;

        font-size: 20px !important;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function parentSidebar(activePage = "dashboard") {
  return `
    <aside
      class="parent-sidebar"
      id="parentSidebar"
    >

      <div class="parent-sidebar-header">

        <div class="parent-sidebar-brand">

          <div class="parent-brand-icon">
            🏫
          </div>

          <div class="parent-brand-text">
            <span>Government School</span>
            <small>Parent Portal</small>
          </div>

        </div>

        <button
          type="button"
          class="parent-sidebar-close"
          id="parentSidebarClose"
          aria-label="Close menu"
        >
          ×
        </button>

      </div>


      <nav class="parent-sidebar-nav">

        <button
          type="button"
          class="parent-nav-item ${activePage === "dashboard" ? "active" : ""}"
          data-page="dashboard"
        >
          <span class="parent-nav-icon">🏠</span>
          <span class="parent-nav-label">Dashboard</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "profile" ? "active" : ""}"
          data-page="profile"
        >
          <span class="parent-nav-icon">👤</span>
          <span class="parent-nav-label">My Child</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "attendance" ? "active" : ""}"
          data-page="attendance"
        >
          <span class="parent-nav-icon">📅</span>
          <span class="parent-nav-label">Attendance</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "classes" ? "active" : ""}"
          data-page="classes"
        >
          <span class="parent-nav-icon">📚</span>
          <span class="parent-nav-label">Classes</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "assignments" ? "active" : ""}"
          data-page="assignments"
        >
          <span class="parent-nav-icon">📝</span>
          <span class="parent-nav-label">Assignments</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "results" ? "active" : ""}"
          data-page="results"
        >
          <span class="parent-nav-icon">📊</span>
          <span class="parent-nav-label">Results</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "notices" ? "active" : ""}"
          data-page="notices"
        >
          <span class="parent-nav-icon">📢</span>
          <span class="parent-nav-label">School Notices</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "messages" ? "active" : ""}"
          data-page="messages"
        >
          <span class="parent-nav-icon">💬</span>
          <span class="parent-nav-label">Teacher Messages</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "fees" ? "active" : ""}"
          data-page="fees"
        >
          <span class="parent-nav-icon">💰</span>
          <span class="parent-nav-label">Fees</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "documents" ? "active" : ""}"
          data-page="documents"
        >
          <span class="parent-nav-icon">📄</span>
          <span class="parent-nav-label">Documents</span>
        </button>


        <button
          type="button"
          class="parent-nav-item ${activePage === "settings" ? "active" : ""}"
          data-page="settings"
        >
          <span class="parent-nav-icon">⚙️</span>
          <span class="parent-nav-label">Settings</span>
        </button>


        <button
          type="button"
          class="parent-nav-item parent-logout-item"
          data-page="logout"
        >
          <span class="parent-nav-icon">🚪</span>
          <span class="parent-nav-label">Logout</span>
        </button>

      </nav>

    </aside>


    <div
      class="parent-sidebar-overlay"
      id="parentSidebarOverlay"
    ></div>
  `;
}


/* =========================================================
   DASHBOARD
   ========================================================= */

export function ParentDashboard() {
  loadParentCSS();

  const parentName =
    localStorage.getItem("parentName") ||
    localStorage.getItem("parentNae") ||
    "Parent";

  const childName =
    localStorage.getItem("childName") ||
    "Student Name";

  return `
    <div class="parent-dashboard">

      ${parentSidebar("dashboard")}


      <main class="parent-main">

        <header class="parent-header">

          <div class="parent-header-left">

            <button
              type="button"
              class="parent-mobile-menu"
              id="parentMobileMenu"
              aria-label="Open menu"
            >
              ☰
            </button>

            <div class="parent-header-title">

              <h1>
                Parent Dashboard
              </h1>

              <p>
                Monitor your child's school progress
              </p>

            </div>

          </div>


          <div class="parent-header-right">

            <button
              type="button"
              class="parent-notification-btn"
              id="parentNotificationBtn"
              aria-label="Notifications"
            >
              🔔
            </button>


            <div class="parent-profile">

              <div class="parent-profile-avatar">
                ${String(parentName).charAt(0).toUpperCase()}
              </div>

              <div class="parent-profile-info">

                <strong>
                  ${escapeParentHTML(parentName)}
                </strong>

                <span>
                  Parent
                </span>

              </div>

            </div>

          </div>

        </header>


        <section class="parent-content">

          <div class="parent-welcome-card">

            <h2>
              Welcome, ${escapeParentHTML(parentName)} 👋
            </h2>

            <p>
              Here you can monitor your child's attendance,
              classes, assignments, results and school updates.
            </p>

          </div>


          <div class="parent-stats-grid">

            <div class="parent-stat-card">

              <div
                class="parent-stat-icon"
                style="background:#eef2ff;"
              >
                📅
              </div>

              <div class="parent-stat-info">
                <strong>92%</strong>
                <span>Attendance</span>
              </div>

            </div>


            <div class="parent-stat-card">

              <div
                class="parent-stat-icon"
                style="background:#ecfdf5;"
              >
                📊
              </div>

              <div class="parent-stat-info">
                <strong>84%</strong>
                <span>Average Result</span>
              </div>

            </div>


            <div class="parent-stat-card">

              <div
                class="parent-stat-icon"
                style="background:#fff7ed;"
              >
                📝
              </div>

              <div class="parent-stat-info">
                <strong>03</strong>
                <span>Pending Assignments</span>
              </div>

            </div>


            <div class="parent-stat-card">

              <div
                class="parent-stat-icon"
                style="background:#f0fdf4;"
              >
                💰
              </div>

              <div class="parent-stat-info">
                <strong>Paid</strong>
                <span>School Fees</span>
              </div>

            </div>

          </div>


          <div class="parent-dashboard-grid">

            <div class="parent-card">

              <div class="parent-card-header">

                <h3>
                  My Child
                </h3>

                <button
                  type="button"
                  data-page="profile"
                >
                  View Profile
                </button>

              </div>


              <div class="parent-child-info">

                <div class="parent-child-avatar">
                  👨‍🎓
                </div>

                <div class="parent-child-details">

                  <h4>
                    ${escapeParentHTML(childName)}
                  </h4>

                  <p>
                    Class 10 - A
                  </p>

                  <p>
                    Academic Session 2026-27
                  </p>

                </div>

              </div>

            </div>


            <div class="parent-card">

              <div class="parent-card-header">

                <h3>
                  Quick Actions
                </h3>

              </div>


              <div class="parent-quick-actions">

                <button
                  type="button"
                  class="parent-quick-action"
                  data-page="attendance"
                >
                  <span class="parent-quick-action-icon">
                    📅
                  </span>

                  <span>
                    Attendance
                  </span>
                </button>


                <button
                  type="button"
                  class="parent-quick-action"
                  data-page="assignments"
                >
                  <span class="parent-quick-action-icon">
                    📝
                  </span>

                  <span>
                    Assignments
                  </span>
                </button>


                <button
                  type="button"
                  class="parent-quick-action"
                  data-page="results"
                >
                  <span class="parent-quick-action-icon">
                    📊
                  </span>

                  <span>
                    Results
                  </span>
                </button>


                <button
                  type="button"
                  class="parent-quick-action"
                  data-page="notices"
                >
                  <span class="parent-quick-action-icon">
                    📢
                  </span>

                  <span>
                    Notices
                  </span>
                </button>

              </div>

            </div>


            <div class="parent-card">

              <div class="parent-card-header">

                <h3>
                  Recent Updates
                </h3>

                <button
                  type="button"
                  data-page="notices"
                >
                  View All
                </button>

              </div>

              <p
                style="
                  margin:0;
                  color:#6b7280;
                  font-size:13px;
                  line-height:20px;
                "
              >
                School notices, announcements and important
                updates will appear here.
              </p>

            </div>


            <div class="parent-card">

              <div class="parent-card-header">

                <h3>
                  Teacher Messages
                </h3>

                <button
                  type="button"
                  data-page="messages"
                >
                  Open
                </button>

              </div>

              <p
                style="
                  margin:0;
                  color:#6b7280;
                  font-size:13px;
                  line-height:20px;
                "
              >
                Check messages and communication from your
                child's teachers.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  `;
}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeParentHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   OPEN SIDEBAR
   ========================================================= */

function openParentSidebar() {
  const sidebar =
    document.getElementById("parentSidebar");

  const overlay =
    document.getElementById("parentSidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.classList.add("parent-mobile-open");

  overlay.classList.add("active");

  if (window.innerWidth <= 768) {
    document.body.style.overflow = "hidden";
  }
}


/* =========================================================
   CLOSE SIDEBAR
   ========================================================= */

function closeParentSidebar() {
  const sidebar =
    document.getElementById("parentSidebar");

  const overlay =
    document.getElementById("parentSidebarOverlay");

  if (sidebar) {
    sidebar.classList.remove("parent-mobile-open");
  }

  if (overlay) {
    overlay.classList.remove("active");
  }

  document.body.style.overflow = "";
}


/* =========================================================
   MOBILE CONTROLS
   ========================================================= */

function setupParentMobileControls() {
  const menu =
    document.getElementById("parentMobileMenu");

  const close =
    document.getElementById("parentSidebarClose");

  const overlay =
    document.getElementById("parentSidebarOverlay");


  /* ALWAYS CLOSED AFTER PAGE RENDER */

  closeParentSidebar();


  if (menu) {
    menu.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      openParentSidebar();
    };
  }


  if (close) {
    close.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      closeParentSidebar();
    };
  }


  if (overlay) {
    overlay.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      closeParentSidebar();
    };
  }
}


/* =========================================================
   DASHBOARD RELOAD
   ========================================================= */

function showParentDashboard() {
  const app =
    document.querySelector("#app");

  if (!app) return;

  app.innerHTML =
    ParentDashboard();

  setupParentMobileControls();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   MODULE PLACEHOLDER
   ========================================================= */

function showParentPage(page) {
  const app =
    document.querySelector("#app");

  if (!app) return;

  const modules = {

    settings: {
      icon: "⚙️",
      title: "Settings",
      description:
        "Manage your Parent Portal settings."
    }

  };

  const module =
    modules[page];

  if (!module) return;

  app.innerHTML = `
    <div class="parent-dashboard">

      ${parentSidebar(page)}

      <main class="parent-main">

        <header class="parent-header">

          <div class="parent-header-left">

            <button
              type="button"
              class="parent-mobile-menu"
              id="parentMobileMenu"
              aria-label="Open menu"
            >
              ☰
            </button>

            <div class="parent-header-title">

              <h1>
                ${module.icon}
                ${module.title}
              </h1>

              <p>
                Parent Portal
              </p>

            </div>

          </div>


          <div class="parent-header-right">

            <div class="parent-profile">

              <div class="parent-profile-avatar">
                P
              </div>

              <div class="parent-profile-info">

                <strong>
                  Parent
                </strong>

                <span>
                  Parent Portal
                </span>

              </div>

            </div>

          </div>

        </header>


        <section class="parent-content">

          <div class="parent-module-card">

            <div class="parent-module-icon">
              ${module.icon}
            </div>

            <h2>
              ${module.title}
            </h2>

            <p>
              ${module.description}
            </p>

            <button
              type="button"
              class="parent-back-btn"
              data-page="dashboard"
            >
              ← Back to Dashboard
            </button>

          </div>

        </section>

      </main>

    </div>
  `;

  setupParentMobileControls();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   LOGOUT
   ========================================================= */

function handleParentLogout() {
  const confirmed =
    window.confirm(
      "Are you sure you want to logout?"
    );

  if (!confirmed) {
    return;
  }

  closeParentSidebar();

  try {

    localStorage.removeItem("parentLoggedIn");
    localStorage.removeItem("parentName");
    localStorage.removeItem("parentNae");
    localStorage.removeItem("childName");

    sessionStorage.removeItem("parentLoggedIn");
    sessionStorage.removeItem("parentName");
    sessionStorage.removeItem("parentNae");
    sessionStorage.removeItem("childName");

  } catch (error) {

    console.error(
      "Parent logout storage error:",
      error
    );

  }

  window.location.replace("/");
}


/* =========================================================
   NAVIGATION
   ========================================================= */

export async function navigateParentPage(page) {

  const app =
    document.querySelector("#app");

  if (!app) {
    console.error(
      "ParentDashboard: #app not found"
    );

    return;
  }


  closeParentSidebar();


  /* =====================================================
     DASHBOARD
  ===================================================== */

  if (page === "dashboard") {

    showParentDashboard();

    return;
  }


  /* =====================================================
     PROFILE
  ===================================================== */

  if (page === "profile") {

    try {

      const module =
        await import("./ParentProfile.js");

      if (
        typeof module.ParentProfile ===
        "function"
      ) {

        app.innerHTML =
          module.ParentProfile();

        if (
          typeof module.setupParentProfileNavigation ===
          "function"
        ) {
          module.setupParentProfileNavigation();
        }

      } else {

        showParentPage("profile");

      }

    } catch (error) {

      console.error(
        "Parent Profile loading error:",
        error
      );

      showParentPage("profile");
    }

    return;
  }


  /* =====================================================
     ATTENDANCE
  ===================================================== */

  if (page === "attendance") {

    try {

      const module =
        await import("./ParentAttendance.js");

      if (
        typeof module.ParentAttendance ===
        "function"
      ) {

        app.innerHTML =
          module.ParentAttendance();

        if (
          typeof module.setupParentAttendanceNavigation ===
          "function"
        ) {
          module.setupParentAttendanceNavigation();
        }

      } else {

        showParentPage("attendance");

      }

    } catch (error) {

      console.error(
        "Parent Attendance loading error:",
        error
      );

      showParentPage("attendance");
    }

    return;
  }


  /* =====================================================
     CLASSES
  ===================================================== */

  if (page === "classes") {

    try {

      const module =
        await import("./ParentClasses.js");

      if (
        typeof module.ParentClasses ===
        "function"
      ) {

        app.innerHTML =
          module.ParentClasses();

        if (
          typeof module.setupParentClassesNavigation ===
          "function"
        ) {
          module.setupParentClassesNavigation();
        }

      } else {

        showParentPage("classes");

      }

    } catch (error) {

      console.error(
        "Parent Classes loading error:",
        error
      );

      showParentPage("classes");
    }

    return;
  }


  /* =====================================================
     ASSIGNMENTS
  ===================================================== */

  if (page === "assignments") {

    try {

      const module =
        await import("./ParentAssignments.js");

      if (
        typeof module.ParentAssignments ===
        "function"
      ) {

        app.innerHTML =
          module.ParentAssignments();

        if (
          typeof module.setupParentAssignmentsNavigation ===
          "function"
        ) {
          module.setupParentAssignmentsNavigation();
        }

      } else {

        showParentPage("assignments");

      }

    } catch (error) {

      console.error(
        "Parent Assignments loading error:",
        error
      );

      showParentPage("assignments");
    }

    return;
  }


  /* =====================================================
     RESULTS
  ===================================================== */

  if (page === "results") {

    try {

      const module =
        await import("./ParentResults.js");

      const childName =
        localStorage.getItem("childName") ||
        "Student Name";

      if (
        typeof module.ParentResults ===
        "function"
      ) {

        app.innerHTML =
          module.ParentResults(childName);

        if (
          typeof module.setupParentResults ===
          "function"
        ) {
          module.setupParentResults();
        }

      } else {

        showParentPage("results");

      }

    } catch (error) {

      console.error(
        "Parent Results loading error:",
        error
      );

      showParentPage("results");
    }

    return;
  }


  /* =====================================================
     NOTICES
  ===================================================== */

  if (page === "notices") {

    try {

      const module =
        await import("./ParentNotices.js");

      const childName =
        localStorage.getItem("childName") ||
        "Student Name";

      if (
        typeof module.ParentNotices ===
        "function"
      ) {

        app.innerHTML =
          module.ParentNotices(childName);

        if (
          typeof module.setupParentNotices ===
          "function"
        ) {
          module.setupParentNotices();
        }

      } else {

        showParentPage("notices");

      }

    } catch (error) {

      console.error(
        "Parent Notices loading error:",
        error
      );

      showParentPage("notices");
    }

    return;
  }


  /* =====================================================
     MESSAGES
  ===================================================== */

  if (page === "messages") {

    try {

      const module =
        await import("./ParentMessages.js");

      const childName =
        localStorage.getItem("childName") ||
        "Student Name";

      if (
        typeof module.ParentMessages ===
        "function"
      ) {

        app.innerHTML =
          module.ParentMessages(childName);

        if (
          typeof module.setupParentMessages ===
          "function"
        ) {
          module.setupParentMessages();
        }

      } else {

        showParentPage("messages");

      }

    } catch (error) {

      console.error(
        "Parent Messages loading error:",
        error
      );

      showParentPage("messages");
    }

    return;
  }


  /* =====================================================
     FEES
  ===================================================== */

  if (page === "fees") {

    try {

      const module =
        await import("./ParentFees.js");

      const childName =
        localStorage.getItem("childName") ||
        "Student Name";

      if (
        typeof module.ParentFees ===
        "function"
      ) {

        app.innerHTML =
          module.ParentFees(childName);

        if (
          typeof module.setupParentFees ===
          "function"
        ) {
          module.setupParentFees();
        }

      } else {

        showParentPage("fees");

      }

    } catch (error) {

      console.error(
        "Parent Fees loading error:",
        error
      );

      showParentPage("fees");
    }

    return;
  }


  /* =====================================================
     DOCUMENTS
  ===================================================== */

  if (page === "documents") {

    try {

      const module =
        await import("./ParentDocuments.js");

      const childName =
        localStorage.getItem("childName") ||
        "Student Name";

      if (
        typeof module.ParentDocuments ===
        "function"
      ) {

        app.innerHTML =
          module.ParentDocuments(childName);

        if (
          typeof module.setupParentDocuments ===
          "function"
        ) {
          module.setupParentDocuments();
        }

      } else {

        showParentPage("documents");

      }

    } catch (error) {

      console.error(
        "Parent Documents loading error:",
        error
      );

      showParentPage("documents");
    }

    return;
  }


  /* =====================================================
     SETTINGS
  ===================================================== */

  if (page === "settings") {

    showParentPage("settings");

    return;
  }


  /* =====================================================
     LOGOUT
  ===================================================== */

  if (page === "logout") {

    handleParentLogout();

    return;
  }
}


/* =========================================================
   NAVIGATION SETUP
   ========================================================= */

export function setupParentNavigation() {

  loadParentCSS();

  window.navigateParentPage =
    navigateParentPage;


  setupParentMobileControls();


  const dashboard =
    document.querySelector(".parent-dashboard");

  if (!dashboard) {
    return;
  }


  /*
    Event delegation:
    Ek hi listener use hoga.
    Page change ke baad bhi navigation kaam karegi.
  */

  if (
    !window.parentNavigationInitialized
  ) {

    window.parentNavigationInitialized = true;


    document.addEventListener(
      "click",
      function (event) {

        const target =
          event.target instanceof Element
            ? event.target
            : null;

        if (!target) {
          return;
        }


        const button =
          target.closest("[data-page]");

        if (!button) {
          return;
        }


        const app =
          document.querySelector("#app");

        if (
          !app ||
          !app.contains(button)
        ) {
          return;
        }


        /*
          Mobile menu ko navigation
          nahi samjhenge.
        */

        if (
          button.id ===
            "parentMobileMenu" ||

          button.id ===
            "parentSidebarClose"
        ) {
          return;
        }


        const page =
          button.getAttribute("data-page");

        if (!page) {
          return;
        }


        event.preventDefault();

        event.stopPropagation();


        navigateParentPage(page);

      },
      false
    );

  }


  /*
    Notification
  */

  const notification =
    document.getElementById(
      "parentNotificationBtn"
    );

  if (notification) {

    notification.onclick =
      function (event) {

        event.preventDefault();
        event.stopPropagation();

        alert(
          "No new notifications."
        );
      };
  }
}