import {
  TeacherClasses,
  setupTeacherClasses
} from "./TeacherClasses.js";

import {
  TeacherStudents,
  setupTeacherStudents
} from "./TeacherStudents.js";

import {
  TeacherAttendance,
  setupTeacherAttendance
} from "./TeacherAttendance.js";

import {
  TeacherAssignments,
  setupTeacherAssignments
} from "./TeacherAssignments.js";

import {
  TeacherResults,
  setupTeacherResults
} from "./TeacherResults.js";

import {
  TeacherStudyMaterial,
  setupTeacherStudyMaterial
} from "./TeacherStudyMaterial.js";

import {
  TeacherNotices,
  setupTeacherNotices
} from "./TeacherNotices.js";

import {
  TeacherMessages,
  setupTeacherMessages
} from "./TeacherMessages.js";


/* =====================================================
   TEACHER CSS
===================================================== */

function loadTeacherCSS() {

  if (document.getElementById("teacher-dashboard-css")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "teacher-dashboard-css";

  style.textContent = `

    /* =================================================
       GLOBAL
    ================================================= */

    html,
    body {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      margin: 0;
      padding: 0;
      overflow-x: hidden !important;
    }

    #app {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      margin: 0;
      padding: 0;
      overflow-x: hidden !important;
    }

    .teacher-dashboard,
    .teacher-dashboard * {
      box-sizing: border-box;
    }


    /* =================================================
       MAIN WRAPPER
    ================================================= */

    .teacher-dashboard {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;

      min-height: 100vh;
      min-height: 100dvh;

      display: flex;

      position: relative;

      margin: 0 !important;
      padding: 0 !important;

      background: #f5f7fb;

      overflow-x: hidden !important;
    }


    /* =================================================
       SIDEBAR
    ================================================= */

    .teacher-sidebar {
      width: 260px !important;
      min-width: 260px !important;
      max-width: 260px !important;

      height: 100vh;
      height: 100dvh;

      position: fixed;

      top: 0;
      left: 0;

      z-index: 10000;

      display: flex;
      flex-direction: column;

      background: #ffffff;

      border-right: 1px solid #e5e7eb;

      box-shadow: 4px 0 18px rgba(0, 0, 0, 0.05);

      overflow-x: hidden;
      overflow-y: auto;

      transition:
        transform 0.3s ease,
        visibility 0.3s ease;
    }


    /* =================================================
       SIDEBAR LOGO
    ================================================= */

    .teacher-sidebar-logo {
      width: 100%;
      min-height: 88px;

      padding: 18px 16px;

      display: flex;
      align-items: center;

      gap: 12px;

      border-bottom: 1px solid #eeeeee;

      flex-shrink: 0;
    }

    .teacher-sidebar-icon {
      width: 48px;
      height: 48px;

      min-width: 48px;

      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #eef4ff;

      font-size: 27px;

      flex-shrink: 0;
    }

    .teacher-sidebar-logo-text {
      min-width: 0;

      display: flex;
      flex-direction: column;
    }

    .teacher-sidebar-logo-text h2 {
      margin: 0;
      padding: 0;

      font-size: 17px;
      line-height: 22px;

      color: #111827;

      font-weight: 700;

      white-space: nowrap;
    }

    .teacher-sidebar-logo-text span {
      margin-top: 2px;

      font-size: 12px;
      line-height: 18px;

      color: #6b7280;

      white-space: nowrap;
    }


    /* =================================================
       SIDEBAR NAV
    ================================================= */

    .teacher-sidebar-nav {
      width: 100%;

      padding: 15px 12px 10px;

      display: flex;
      flex-direction: column;

      gap: 5px;

      flex: 1;

      min-height: 0;

      overflow-y: auto;
    }


    /* =================================================
       NAV ITEM
    ================================================= */

    .teacher-nav-item {
      width: 100%;

      min-height: 46px;

      padding: 10px 13px;

      border: 0;

      border-radius: 10px;

      background: transparent;

      display: flex;
      align-items: center;

      gap: 12px;

      text-align: left;

      cursor: pointer;

      color: #4b5563;

      font-family: inherit;

      font-size: 14px;

      font-weight: 500;

      line-height: 20px;

      white-space: nowrap;

      transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.15s ease;

      flex-shrink: 0;
    }

    .teacher-nav-item:active {
      transform: scale(0.98);
    }

    .teacher-nav-icon {
      width: 25px;
      min-width: 25px;

      display: inline-flex;

      align-items: center;
      justify-content: center;

      font-size: 19px;

      line-height: 1;

      flex-shrink: 0;
    }

    .teacher-nav-label {
      display: block;

      visibility: visible;

      opacity: 1;

      color: inherit;

      overflow: hidden;

      text-overflow: ellipsis;
    }

    .teacher-nav-item:hover {
      background: #f1f5ff;
      color: #2563eb;
    }

    .teacher-nav-item.active {
      background: #2563eb;
      color: #ffffff;

      font-weight: 600;
    }

    .teacher-nav-item.active .teacher-nav-label {
      color: #ffffff;
    }


    /* =================================================
       SIDEBAR BOTTOM
    ================================================= */

    .teacher-sidebar-bottom {
      width: 100%;

      padding: 12px;

      display: flex;
      flex-direction: column;

      gap: 7px;

      border-top: 1px solid #eeeeee;

      background: #ffffff;

      flex-shrink: 0;
    }

    .teacher-sidebar-bottom .teacher-nav-item {
      margin: 0;
    }

    .teacher-nav-item.logout {
      color: #dc2626;
    }

    .teacher-nav-item.logout:hover {
      background: #fef2f2;
      color: #dc2626;
    }


    /* =================================================
       MOBILE CLOSE BUTTON
    ================================================= */

    .teacher-mobile-close {
      display: none;

      width: 38px;
      height: 38px;

      min-width: 38px;

      border: 0;

      border-radius: 8px;

      background: #f3f4f6;

      color: #111827;

      font-size: 22px;

      cursor: pointer;

      align-items: center;
      justify-content: center;

      position: absolute;

      top: 18px;
      right: 14px;

      z-index: 20;
    }


    /* =================================================
       OVERLAY
    ================================================= */

    .teacher-sidebar-overlay {
      display: none;

      position: fixed;

      inset: 0;

      width: 100vw;
      height: 100vh;
      height: 100dvh;

      z-index: 9999;

      background: rgba(0, 0, 0, 0.45);

      opacity: 0;

      visibility: hidden;

      pointer-events: none;

      transition:
        opacity 0.3s ease,
        visibility 0.3s ease;
    }

    .teacher-sidebar-overlay.active {
      opacity: 1;

      visibility: visible;

      pointer-events: auto;
    }


    /* =================================================
       MAIN
    ================================================= */

    .teacher-dashboard-main {
      width: calc(100% - 260px) !important;

      max-width: calc(100% - 260px) !important;

      min-width: 0 !important;

      min-height: 100vh;

      margin-left: 260px !important;

      display: flex;
      flex-direction: column;

      overflow-x: hidden !important;
    }


    /* =================================================
       HEADER
    ================================================= */

    .teacher-dashboard-header {
      width: 100%;

      min-height: 88px;

      padding: 18px 28px;

      background: #ffffff;

      border-bottom: 1px solid #e5e7eb;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 20px;

      flex-shrink: 0;
    }

    .teacher-header-left {
      display: flex;

      align-items: center;

      gap: 15px;

      min-width: 0;

      flex: 1;
    }

    .teacher-mobile-menu {
      width: 42px;
      height: 42px;

      min-width: 42px;

      border: 0;

      border-radius: 9px;

      background: #f1f5f9;

      color: #111827;

      display: none;

      align-items: center;
      justify-content: center;

      font-size: 23px;

      cursor: pointer;

      flex-shrink: 0;
    }

    .teacher-header-title {
      min-width: 0;
    }

    .teacher-header-title h1 {
      margin: 0;

      font-size: 25px;

      line-height: 32px;

      color: #111827;

      word-break: break-word;
    }

    .teacher-header-title p {
      margin: 4px 0 0;

      font-size: 14px;

      color: #6b7280;
    }


    /* =================================================
       PROFILE
    ================================================= */

    .teacher-profile {
      display: flex;

      align-items: center;

      gap: 11px;

      flex-shrink: 0;
    }

    .teacher-profile-avatar {
      width: 44px;
      height: 44px;

      min-width: 44px;

      border-radius: 50%;

      background: #2563eb;

      color: #ffffff;

      display: flex;

      align-items: center;
      justify-content: center;

      font-size: 18px;

      font-weight: 700;
    }

    .teacher-profile-info {
      display: flex;

      flex-direction: column;

      min-width: 0;
    }

    .teacher-profile-info strong {
      color: #111827;

      font-size: 14px;

      white-space: nowrap;
    }

    .teacher-profile-info span {
      color: #6b7280;

      font-size: 12px;

      margin-top: 2px;

      white-space: nowrap;
    }


    /* =================================================
       CONTENT
    ================================================= */

    .teacher-dashboard-content {
      width: 100%;

      min-width: 0;

      padding: 28px;

      overflow-x: hidden;
    }


    /* =================================================
       STATS
    ================================================= */

    .teacher-stats-grid {
      width: 100%;

      min-width: 0;

      display: grid;

      grid-template-columns:
        repeat(4, minmax(0, 1fr));

      gap: 18px;

      margin-bottom: 22px;
    }

    .teacher-stat-card {
      background: #ffffff;

      border: 1px solid #e5e7eb;

      border-radius: 14px;

      padding: 20px;

      display: flex;

      align-items: center;

      gap: 15px;

      min-width: 0;

      overflow: hidden;

      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.03);
    }

    .teacher-stat-icon {
      width: 48px;
      height: 48px;

      min-width: 48px;

      border-radius: 12px;

      display: flex;

      align-items: center;
      justify-content: center;

      font-size: 23px;

      flex-shrink: 0;
    }

    .teacher-stat-icon.blue {
      background: #eff6ff;
    }

    .teacher-stat-icon.green {
      background: #ecfdf5;
    }

    .teacher-stat-icon.orange {
      background: #fff7ed;
    }

    .teacher-stat-icon.purple {
      background: #f5f3ff;
    }

    .teacher-stat-card > div:last-child {
      min-width: 0;
    }

    .teacher-stat-card span {
      display: block;

      color: #6b7280;

      font-size: 13px;

      white-space: nowrap;

      overflow: hidden;

      text-overflow: ellipsis;
    }

    .teacher-stat-card h2 {
      margin: 4px 0 0;

      color: #111827;

      font-size: 25px;

      line-height: 30px;
    }


    /* =================================================
       DASHBOARD GRID
    ================================================= */

    .teacher-dashboard-grid {
      width: 100%;

      min-width: 0;

      display: grid;

      grid-template-columns:
        minmax(0, 1.4fr)
        minmax(0, 1fr);

      gap: 20px;
    }

    .teacher-dashboard-card {
      background: #ffffff;

      border: 1px solid #e5e7eb;

      border-radius: 14px;

      padding: 22px;

      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.03);

      min-width: 0;

      max-width: 100%;

      overflow: hidden;
    }

    .teacher-card-header {
      display: flex;

      align-items: flex-start;

      justify-content: space-between;

      gap: 15px;

      margin-bottom: 18px;

      min-width: 0;
    }

    .teacher-card-header > div {
      min-width: 0;
    }

    .teacher-card-header h2 {
      margin: 0;

      font-size: 18px;

      color: #111827;
    }

    .teacher-card-header p {
      margin: 5px 0 0;

      color: #6b7280;

      font-size: 13px;

      word-break: break-word;
    }

    .teacher-view-btn {
      border: 0;

      background: #eff6ff;

      color: #2563eb;

      border-radius: 8px;

      padding: 8px 13px;

      font-size: 13px;

      font-weight: 600;

      cursor: pointer;

      white-space: nowrap;

      flex-shrink: 0;
    }


    /* =================================================
       CLASS LIST
    ================================================= */

    .teacher-class-list {
      display: flex;

      flex-direction: column;

      gap: 12px;

      width: 100%;
    }

    .teacher-class-item {
      display: flex;

      align-items: center;

      gap: 13px;

      padding: 13px;

      border: 1px solid #e5e7eb;

      border-radius: 10px;

      min-width: 0;

      width: 100%;
    }

    .teacher-subject-icon {
      width: 42px;
      height: 42px;

      min-width: 42px;

      border-radius: 10px;

      background: #eff6ff;

      display: flex;

      align-items: center;
      justify-content: center;

      font-size: 21px;

      flex-shrink: 0;
    }

    .teacher-class-info {
      flex: 1;

      min-width: 0;
    }

    .teacher-class-info strong {
      display: block;

      color: #111827;

      font-size: 14px;

      white-space: nowrap;

      overflow: hidden;

      text-overflow: ellipsis;
    }

    .teacher-class-info span {
      display: block;

      margin-top: 3px;

      color: #6b7280;

      font-size: 12px;

      white-space: nowrap;

      overflow: hidden;

      text-overflow: ellipsis;
    }

    .teacher-class-time {
      text-align: right;

      flex-shrink: 0;
    }

    .teacher-class-time strong {
      display: block;

      color: #111827;

      font-size: 13px;
    }

    .teacher-class-time span {
      display: block;

      color: #6b7280;

      font-size: 11px;

      margin-top: 3px;
    }


    /* =================================================
       QUICK ACTIONS
    ================================================= */

    .teacher-quick-actions {
      display: flex;

      flex-direction: column;

      gap: 10px;

      width: 100%;
    }

    .teacher-quick-actions button {
      width: 100%;

      min-height: 46px;

      border: 1px solid #e5e7eb;

      border-radius: 9px;

      background: #ffffff;

      text-align: left;

      padding: 11px 14px;

      cursor: pointer;

      color: #374151;

      font-size: 14px;

      transition: 0.2s ease;
    }

    .teacher-quick-actions button:hover {
      background: #f8fafc;

      border-color: #2563eb;

      color: #2563eb;
    }


    /* =================================================
       MODULE / SETTINGS
    ================================================= */

    .teacher-module-card {
      text-align: center;

      padding: 70px 30px;
    }

    .teacher-module-icon {
      font-size: 60px;

      margin-bottom: 10px;
    }

    .teacher-module-card h2 {
      margin: 0;

      color: #111827;
    }

    .teacher-module-card p {
      color: #6b7280;

      margin-top: 10px;
    }

    .teacher-back-btn {
      margin-top: 25px;

      min-width: 220px;

      max-width: 100%;

      padding: 12px 18px;

      border: 0;

      border-radius: 9px;

      background: #2563eb;

      color: #ffffff;

      cursor: pointer;

      font-size: 14px;
    }


    /* =================================================
       TABLET
    ================================================= */

    @media (max-width: 1100px) {

      .teacher-sidebar {
        width: 240px !important;
        min-width: 240px !important;
        max-width: 240px !important;
      }

      .teacher-dashboard-main {
        width: calc(100% - 240px) !important;
        max-width: calc(100% - 240px) !important;

        margin-left: 240px !important;
      }

      .teacher-stats-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

      .teacher-dashboard-grid {
        grid-template-columns:
          minmax(0, 1fr);
      }
    }


    /* =================================================
       MOBILE
    ================================================= */

    @media (max-width: 768px) {

      html,
      body {
        width: 100% !important;
        max-width: 100% !important;

        overflow-x: hidden !important;
      }

      #app {
        width: 100% !important;
        max-width: 100% !important;

        min-width: 0 !important;

        overflow-x: hidden !important;
      }

      .teacher-dashboard {
        width: 100% !important;
        max-width: 100% !important;

        min-width: 0 !important;

        display: block !important;

        overflow-x: hidden !important;
      }


      /* -----------------------------------------------
         SIDEBAR
      ----------------------------------------------- */

      .teacher-sidebar {
        position: fixed !important;

        top: 0 !important;
        left: 0 !important;

        width: 280px !important;
        min-width: 280px !important;
        max-width: 280px !important;

        height: 100vh !important;
        height: 100dvh !important;

        margin: 0 !important;
        padding: 0 !important;

        transform:
          translate3d(-110%, 0, 0) !important;

        visibility: hidden !important;

        z-index: 10000 !important;

        overflow-x: hidden !important;
        overflow-y: auto !important;

        box-shadow:
          6px 0 25px rgba(0, 0, 0, 0.12);
      }

      .teacher-sidebar.teacher-mobile-open {
        transform:
          translate3d(0, 0, 0) !important;

        visibility: visible !important;
      }


      /* -----------------------------------------------
         CLOSE BUTTON
      ----------------------------------------------- */

      .teacher-mobile-close {
        display: flex !important;
      }


      /* -----------------------------------------------
         SIDEBAR NAV MOBILE
      ----------------------------------------------- */

      .teacher-sidebar-nav {
        padding:
          14px 12px 12px !important;

        gap: 5px !important;

        overflow-y: auto !important;

        flex: 1 !important;
      }

      .teacher-sidebar-bottom {
        padding:
          12px !important;

        gap: 8px !important;

        flex-shrink: 0 !important;

        border-top:
          1px solid #eeeeee !important;
      }

      .teacher-sidebar-bottom .teacher-nav-item {
        min-height: 46px !important;
      }


      /* -----------------------------------------------
         OVERLAY
      ----------------------------------------------- */

      .teacher-sidebar-overlay {
        display: block !important;

        position: fixed !important;

        inset: 0 !important;

        width: 100vw !important;

        height: 100vh !important;
        height: 100dvh !important;

        z-index: 9999 !important;

        opacity: 0 !important;

        visibility: hidden !important;

        pointer-events: none !important;
      }

      .teacher-sidebar-overlay.active {
        opacity: 1 !important;

        visibility: visible !important;

        pointer-events: auto !important;
      }


      /* -----------------------------------------------
         MAIN
      ----------------------------------------------- */

      .teacher-dashboard-main {
        position: relative !important;

        left: 0 !important;
        right: 0 !important;

        width: 100% !important;

        max-width: 100% !important;

        min-width: 0 !important;

        margin-left: 0 !important;
        margin-right: 0 !important;

        padding: 0 !important;

        transform: none !important;

        overflow-x: hidden !important;
      }


      /* -----------------------------------------------
         HEADER
      ----------------------------------------------- */

      .teacher-dashboard-header {
        width: 100% !important;

        max-width: 100% !important;

        min-height: 74px;

        padding: 13px 15px;

        gap: 10px;

        overflow: hidden;
      }

      .teacher-header-left {
        min-width: 0;

        gap: 9px;

        flex: 1;
      }

      .teacher-mobile-menu {
        display: flex !important;

        width: 40px;

        height: 40px;

        min-width: 40px;

        flex-shrink: 0;
      }

      .teacher-header-title {
        min-width: 0;

        overflow: hidden;
      }

      .teacher-header-title h1 {
        font-size: 18px;

        line-height: 24px;

        white-space: nowrap;

        overflow: hidden;

        text-overflow: ellipsis;
      }

      .teacher-header-title p {
        font-size: 11px;

        line-height: 16px;

        white-space: nowrap;

        overflow: hidden;

        text-overflow: ellipsis;
      }

      .teacher-profile {
        flex-shrink: 0;
      }

      .teacher-profile-info {
        display: none;
      }

      .teacher-profile-avatar {
        width: 40px;

        height: 40px;

        min-width: 40px;

        font-size: 16px;
      }


      /* -----------------------------------------------
         CONTENT
      ----------------------------------------------- */

      .teacher-dashboard-content {
        width: 100% !important;

        max-width: 100% !important;

        min-width: 0 !important;

        margin: 0 !important;

        padding: 15px !important;

        overflow-x: hidden !important;
      }


      /* -----------------------------------------------
         STATS
      ----------------------------------------------- */

      .teacher-stats-grid {
        width: 100% !important;

        grid-template-columns:
          repeat(2, minmax(0, 1fr)) !important;

        gap: 10px !important;

        margin-bottom: 15px;
      }

      .teacher-stat-card {
        width: 100%;

        min-width: 0;

        padding: 13px;

        gap: 9px;

        border-radius: 11px;
      }

      .teacher-stat-icon {
        width: 39px;

        height: 39px;

        min-width: 39px;

        font-size: 18px;
      }

      .teacher-stat-card span {
        font-size: 10px;

        line-height: 14px;
      }

      .teacher-stat-card h2 {
        margin-top: 3px;

        font-size: 20px;

        line-height: 25px;
      }


      /* -----------------------------------------------
         DASHBOARD GRID
      ----------------------------------------------- */

      .teacher-dashboard-grid {
        width: 100% !important;

        max-width: 100% !important;

        min-width: 0 !important;

        grid-template-columns:
          minmax(0, 1fr) !important;

        gap: 14px !important;
      }

      .teacher-dashboard-card {
        width: 100% !important;

        max-width: 100% !important;

        min-width: 0 !important;

        padding: 15px !important;

        border-radius: 11px;
      }


      /* -----------------------------------------------
         CARD HEADER
      ----------------------------------------------- */

      .teacher-card-header {
        width: 100%;

        min-width: 0;

        gap: 9px;

        margin-bottom: 14px;
      }

      .teacher-card-header h2 {
        font-size: 16px;

        line-height: 22px;
      }

      .teacher-card-header p {
        font-size: 11px;

        line-height: 17px;
      }

      .teacher-view-btn {
        padding: 7px 10px;

        font-size: 11px;
      }


      /* -----------------------------------------------
         CLASS
      ----------------------------------------------- */

      .teacher-class-item {
        width: 100%;

        min-width: 0;

        padding: 11px;

        gap: 9px;
      }

      .teacher-subject-icon {
        width: 38px;

        height: 38px;

        min-width: 38px;

        font-size: 18px;
      }

      .teacher-class-info strong {
        font-size: 12px;
      }

      .teacher-class-info span {
        font-size: 10px;
      }

      .teacher-class-time strong {
        font-size: 11px;
      }

      .teacher-class-time span {
        font-size: 9px;
      }


      /* -----------------------------------------------
         QUICK ACTION
      ----------------------------------------------- */

      .teacher-quick-actions {
        width: 100%;
      }

      .teacher-quick-actions button {
        min-height: 43px;

        padding: 10px 12px;

        font-size: 12px;
      }


      /* -----------------------------------------------
         MODULE
      ----------------------------------------------- */

      .teacher-module-card {
        padding: 45px 18px;
      }

      .teacher-module-icon {
        font-size: 48px;
      }

      .teacher-module-card h2 {
        font-size: 20px;
      }

      .teacher-module-card p {
        font-size: 12px;

        line-height: 18px;
      }

      .teacher-back-btn {
        width: 100%;

        min-width: 0;
      }
    }


    /* =================================================
       SMALL MOBILE
    ================================================= */

    @media (max-width: 480px) {

      .teacher-sidebar {
        width: 280px !important;
        min-width: 280px !important;
        max-width: 280px !important;
      }

      .teacher-sidebar-logo {
        min-height: 82px;

        padding: 15px 14px;
      }

      .teacher-sidebar-icon {
        width: 43px;
        height: 43px;

        min-width: 43px;

        font-size: 23px;
      }

      .teacher-sidebar-logo-text h2 {
        font-size: 16px;
      }

      .teacher-sidebar-logo-text span {
        font-size: 11px;
      }

      .teacher-nav-item {
        min-height: 44px;

        padding: 9px 11px;

        font-size: 13px;

        gap: 10px;
      }

      .teacher-nav-icon {
        width: 24px;
        min-width: 24px;

        font-size: 18px;
      }

      .teacher-dashboard-header {
        padding: 11px 12px;

        min-height: 68px;
      }

      .teacher-mobile-menu {
        width: 37px;

        height: 37px;

        min-width: 37px;

        font-size: 20px;
      }

      .teacher-header-title h1 {
        font-size: 16px;

        line-height: 21px;
      }

      .teacher-header-title p {
        display: none;
      }

      .teacher-profile-avatar {
        width: 36px;

        height: 36px;

        min-width: 36px;

        font-size: 15px;
      }

      .teacher-dashboard-content {
        padding: 11px !important;
      }

      .teacher-stats-grid {
        grid-template-columns:
          minmax(0, 1fr) !important;

        gap: 8px !important;
      }

      .teacher-stat-card {
        min-height: 67px;

        padding: 11px;
      }

      .teacher-stat-icon {
        width: 36px;

        height: 36px;

        min-width: 36px;
      }

      .teacher-dashboard-card {
        padding: 13px !important;
      }

      .teacher-card-header {
        flex-direction: column;

        align-items: flex-start;
      }

      .teacher-view-btn {
        align-self: flex-start;
      }

      .teacher-class-item {
        align-items: flex-start;
      }

      .teacher-class-time {
        text-align: right;
      }

      .teacher-module-card {
        padding: 40px 14px;
      }
    }


    /* =================================================
       VERY SMALL
    ================================================= */

    @media (max-width: 360px) {

      .teacher-sidebar {
        width: 270px !important;

        min-width: 270px !important;

        max-width: 270px !important;
      }

      .teacher-stats-grid {
        grid-template-columns:
          minmax(0, 1fr) !important;
      }

      .teacher-class-item {
        gap: 7px;

        padding: 9px;
      }

      .teacher-class-time {
        display: none;
      }
    }

  `;

  document.head.appendChild(style);
}


/* =====================================================
   SIDEBAR HTML
===================================================== */

function teacherSidebar(activePage = "dashboard") {

  return `

    <aside
      class="teacher-sidebar"
      id="teacherSidebar"
    >

      <button
        type="button"
        class="teacher-mobile-close"
        id="teacherMobileClose"
        aria-label="Close menu"
      >
        ×
      </button>


      <div class="teacher-sidebar-logo">

        <div class="teacher-sidebar-icon">
          🏫
        </div>

        <div class="teacher-sidebar-logo-text">

          <h2>
            Govt. School
          </h2>

          <span>
            Teacher Portal
          </span>

        </div>

      </div>


      <nav class="teacher-sidebar-nav">

        <button
          type="button"
          class="teacher-nav-item ${activePage === "dashboard" ? "active" : ""}"
          data-page="dashboard"
        >
          <span class="teacher-nav-icon">📊</span>
          <span class="teacher-nav-label">Dashboard</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "classes" ? "active" : ""}"
          data-page="classes"
        >
          <span class="teacher-nav-icon">📚</span>
          <span class="teacher-nav-label">My Classes</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "students" ? "active" : ""}"
          data-page="students"
        >
          <span class="teacher-nav-icon">👨‍🎓</span>
          <span class="teacher-nav-label">Students</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "attendance" ? "active" : ""}"
          data-page="attendance"
        >
          <span class="teacher-nav-icon">📅</span>
          <span class="teacher-nav-label">Attendance</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "assignments" ? "active" : ""}"
          data-page="assignments"
        >
          <span class="teacher-nav-icon">📝</span>
          <span class="teacher-nav-label">Assignments</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "results" ? "active" : ""}"
          data-page="results"
        >
          <span class="teacher-nav-icon">🏆</span>
          <span class="teacher-nav-label">Exams & Results</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "material" ? "active" : ""}"
          data-page="material"
        >
          <span class="teacher-nav-icon">📖</span>
          <span class="teacher-nav-label">Study Material</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "notices" ? "active" : ""}"
          data-page="notices"
        >
          <span class="teacher-nav-icon">📢</span>
          <span class="teacher-nav-label">Notices</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item ${activePage === "messages" ? "active" : ""}"
          data-page="messages"
        >
          <span class="teacher-nav-icon">💬</span>
          <span class="teacher-nav-label">Messages</span>
        </button>

      </nav>


      <div class="teacher-sidebar-bottom">

        <button
          type="button"
          class="teacher-nav-item ${activePage === "settings" ? "active" : ""}"
          data-page="settings"
        >
          <span class="teacher-nav-icon">⚙️</span>
          <span class="teacher-nav-label">Settings</span>
        </button>


        <button
          type="button"
          class="teacher-nav-item logout"
          data-page="logout"
        >
          <span class="teacher-nav-icon">🚪</span>
          <span class="teacher-nav-label">Logout</span>
        </button>

      </div>

    </aside>


    <div
      class="teacher-sidebar-overlay"
      id="teacherSidebarOverlay"
    ></div>

  `;
}


/* =====================================================
   TEACHER DASHBOARD
===================================================== */

export function TeacherDashboard() {

  loadTeacherCSS();

  return `

    <div class="teacher-dashboard">

      ${teacherSidebar("dashboard")}


      <main class="teacher-dashboard-main">

        <header class="teacher-dashboard-header">

          <div class="teacher-header-left">

            <button
              type="button"
              class="teacher-mobile-menu"
              id="teacherMobileMenu"
              aria-label="Open menu"
            >
              ☰
            </button>


            <div class="teacher-header-title">

              <h1>
                Good Morning, Teacher 👋
              </h1>

              <p>
                Manage your classes and students
              </p>

            </div>

          </div>


          <div class="teacher-profile">

            <div class="teacher-profile-avatar">
              T
            </div>

            <div class="teacher-profile-info">

              <strong>
                Teacher Name
              </strong>

              <span>
                Mathematics Teacher
              </span>

            </div>

          </div>

        </header>


        <section class="teacher-dashboard-content">


          <div class="teacher-stats-grid">


            <div class="teacher-stat-card">

              <div class="teacher-stat-icon blue">
                👨‍🎓
              </div>

              <div>

                <span>
                  Total Students
                </span>

                <h2>
                  156
                </h2>

              </div>

            </div>


            <div class="teacher-stat-card">

              <div class="teacher-stat-icon green">
                📅
              </div>

              <div>

                <span>
                  Today's Attendance
                </span>

                <h2>
                  94%
                </h2>

              </div>

            </div>


            <div class="teacher-stat-card">

              <div class="teacher-stat-icon orange">
                📝
              </div>

              <div>

                <span>
                  Pending Assignments
                </span>

                <h2>
                  12
                </h2>

              </div>

            </div>


            <div class="teacher-stat-card">

              <div class="teacher-stat-icon purple">
                📚
              </div>

              <div>

                <span>
                  My Classes
                </span>

                <h2>
                  04
                </h2>

              </div>

            </div>


          </div>


          <div class="teacher-dashboard-grid">


            <div class="teacher-dashboard-card">

              <div class="teacher-card-header">

                <div>

                  <h2>
                    Today's Classes
                  </h2>

                  <p>
                    Your teaching schedule for today
                  </p>

                </div>


                <button
                  type="button"
                  class="teacher-view-btn"
                  data-page="classes"
                >
                  View All
                </button>

              </div>


              <div class="teacher-class-list">


                <div class="teacher-class-item">

                  <div class="teacher-subject-icon">
                    📐
                  </div>

                  <div class="teacher-class-info">

                    <strong>
                      Mathematics
                    </strong>

                    <span>
                      Class 10 • Section A
                    </span>

                  </div>

                  <div class="teacher-class-time">

                    <strong>
                      09:00 AM
                    </strong>

                    <span>
                      45 min
                    </span>

                  </div>

                </div>


                <div class="teacher-class-item">

                  <div class="teacher-subject-icon">
                    📐
                  </div>

                  <div class="teacher-class-info">

                    <strong>
                      Mathematics
                    </strong>

                    <span>
                      Class 9 • Section B
                    </span>

                  </div>

                  <div class="teacher-class-time">

                    <strong>
                      10:00 AM
                    </strong>

                    <span>
                      45 min
                    </span>

                  </div>

                </div>


              </div>

            </div>


            <div class="teacher-dashboard-card">

              <div class="teacher-card-header">

                <div>

                  <h2>
                    Quick Actions
                  </h2>

                  <p>
                    Frequently used teacher tools
                  </p>

                </div>

              </div>


              <div class="teacher-quick-actions">

                <button
                  type="button"
                  data-page="attendance"
                >
                  📅 Mark Attendance
                </button>


                <button
                  type="button"
                  data-page="assignments"
                >
                  📝 Create Assignment
                </button>


                <button
                  type="button"
                  data-page="results"
                >
                  📊 Enter Results
                </button>

              </div>

            </div>


          </div>


        </section>

      </main>

    </div>

  `;
}


/* =====================================================
   OPEN SIDEBAR
===================================================== */

function openTeacherSidebar() {

  const sidebar =
    document.getElementById("teacherSidebar");

  const overlay =
    document.getElementById("teacherSidebarOverlay");

  if (!sidebar || !overlay) {
    return;
  }

  sidebar.classList.add("teacher-mobile-open");

  overlay.classList.add("active");

  if (window.innerWidth <= 768) {
    document.body.style.overflow = "hidden";
  }
}


/* =====================================================
   CLOSE SIDEBAR
===================================================== */

function closeTeacherSidebar() {

  const sidebar =
    document.getElementById("teacherSidebar");

  const overlay =
    document.getElementById("teacherSidebarOverlay");

  if (sidebar) {
    sidebar.classList.remove("teacher-mobile-open");
  }

  if (overlay) {
    overlay.classList.remove("active");
  }

  document.body.style.overflow = "";
}


/* =====================================================
   MOBILE CONTROLS
===================================================== */

function setupTeacherMobileControls() {

  closeTeacherSidebar();


  const menu =
    document.getElementById("teacherMobileMenu");

  const close =
    document.getElementById("teacherMobileClose");

  const overlay =
    document.getElementById("teacherSidebarOverlay");


  if (menu) {

    menu.onclick = function(event) {

      event.preventDefault();
      event.stopPropagation();

      openTeacherSidebar();

    };

  }


  if (close) {

    close.onclick = function(event) {

      event.preventDefault();
      event.stopPropagation();

      closeTeacherSidebar();

    };

  }


  if (overlay) {

    overlay.onclick = function(event) {

      event.preventDefault();
      event.stopPropagation();

      closeTeacherSidebar();

    };

  }

}


/* =====================================================
   NAVIGATION SETUP
===================================================== */

export function setupTeacherNavigation() {

  loadTeacherCSS();


  window.navigateTeacherPage =
    navigateTeacherPage;


  /*
     IMPORTANT:
     Listener only ek baar attach hoga.
  */

  if (!window.teacherNavigationInitialized) {

    window.teacherNavigationInitialized = true;


    document.addEventListener(
      "click",
      function(event) {

        const target =
          event.target instanceof Element
            ? event.target
            : null;

        if (!target) {
          return;
        }


        const button =
          target.closest(
            "[data-page]"
          );


        if (!button) {
          return;
        }


        const app =
          document.querySelector("#app");


        if (!app || !app.contains(button)) {
          return;
        }


        const page =
          button.getAttribute("data-page");


        if (!page) {
          return;
        }


        /*
           Mobile menu aur overlay ko
           navigation mat samjho.
        */

        if (
          button.id === "teacherMobileMenu" ||
          button.id === "teacherMobileClose"
        ) {
          return;
        }


        event.preventDefault();
        event.stopPropagation();


        navigateTeacherPage(page);

      },
      false
    );

  }


  setupTeacherMobileControls();

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

export function navigateTeacherPage(page) {

  const app =
    document.querySelector("#app");


  if (!app) {

    console.error(
      "TeacherDashboard: #app not found"
    );

    return;

  }


  closeTeacherSidebar();


  /* ===================================================
     DASHBOARD
  =================================================== */

  if (page === "dashboard") {

    app.innerHTML =
      TeacherDashboard();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     CLASSES
  =================================================== */

  if (page === "classes") {

    app.innerHTML =
      TeacherClasses();

    setupTeacherClasses();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     STUDENTS
  =================================================== */

  if (page === "students") {

    app.innerHTML =
      TeacherStudents();

    setupTeacherStudents();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     ATTENDANCE
  =================================================== */

  if (page === "attendance") {

    app.innerHTML =
      TeacherAttendance();

    setupTeacherAttendance();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     ASSIGNMENTS
  =================================================== */

  if (page === "assignments") {

    app.innerHTML =
      TeacherAssignments();

    setupTeacherAssignments();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     RESULTS
  =================================================== */

  if (page === "results") {

    app.innerHTML =
      TeacherResults();

    setupTeacherResults();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     STUDY MATERIAL
  =================================================== */

  if (page === "material") {

    app.innerHTML =
      TeacherStudyMaterial();

    setupTeacherStudyMaterial();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     NOTICES
  =================================================== */

  if (page === "notices") {

    app.innerHTML =
      TeacherNotices();

    setupTeacherNotices();

    setupTeacherMobileControls();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* ===================================================
     MESSAGES
  =================================================== */

  if (page === "messages") {

    try {

      app.innerHTML =
        TeacherMessages();

      setupTeacherMessages();

      setupTeacherMobileControls();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    } catch (error) {

      console.error(
        "Teacher Messages loading error:",
        error
      );

      app.innerHTML = `

        <div class="teacher-dashboard">

          ${teacherSidebar("messages")}

          <main class="teacher-dashboard-main">

            <header class="teacher-dashboard-header">

              <div class="teacher-header-left">

                <button
                  type="button"
                  class="teacher-mobile-menu"
                  id="teacherMobileMenu"
                  aria-label="Open menu"
                >
                  ☰
                </button>

                <div class="teacher-header-title">

                  <h1>
                    💬 Messages
                  </h1>

                  <p>
                    Teacher Portal
                  </p>

                </div>

              </div>


              <div class="teacher-profile">

                <div class="teacher-profile-avatar">
                  T
                </div>

              </div>

            </header>


            <section class="teacher-dashboard-content">

              <div class="teacher-dashboard-card teacher-module-card">

                <div class="teacher-module-icon">
                  ⚠️
                </div>

                <h2>
                  Messages Module Error
                </h2>

                <p>
                  TeacherMessages.js mein error aa raha hai.
                  Browser Console mein exact error check karein.
                </p>

                <button
                  type="button"
                  class="teacher-back-btn"
                  data-page="dashboard"
                >
                  ← Back to Dashboard
                </button>

              </div>

            </section>

          </main>

        </div>

      `;

      setupTeacherMobileControls();

    }

    return;
  }


  /* ===================================================
     SETTINGS
  =================================================== */

  if (page === "settings") {

    showModule("settings");

    return;
  }


  /* ===================================================
     LOGOUT
  =================================================== */

  if (page === "logout") {

    const confirmLogout =
      window.confirm(
        "Are you sure you want to logout?"
      );


    if (!confirmLogout) {

      setupTeacherMobileControls();

      return;

    }


    closeTeacherSidebar();

    document.body.style.overflow = "";


    try {

      localStorage.removeItem("teacher");
      localStorage.removeItem("teacherToken");
      localStorage.removeItem("teacher_token");
      localStorage.removeItem("teacherData");
      localStorage.removeItem("teacherInfo");
      localStorage.removeItem("teacherLoggedIn");
      localStorage.removeItem("isTeacherLoggedIn");

      sessionStorage.removeItem("teacher");
      sessionStorage.removeItem("teacherToken");
      sessionStorage.removeItem("teacher_token");
      sessionStorage.removeItem("teacherData");
      sessionStorage.removeItem("teacherInfo");
      sessionStorage.removeItem("teacherLoggedIn");
      sessionStorage.removeItem("isTeacherLoggedIn");

    } catch (error) {

      console.error(
        "Teacher logout storage error:",
        error
      );

    }


    window.location.replace("/");

    return;
  }

}


/* =====================================================
   SETTINGS MODULE
===================================================== */

function showModule(page) {

  const data = {

    settings: {
      icon: "⚙️",
      title: "Settings"
    }

  };


  const module =
    data[page];


  if (!module) {
    return;
  }


  const app =
    document.querySelector("#app");


  if (!app) {
    return;
  }


  app.innerHTML = `

    <div class="teacher-dashboard">

      ${teacherSidebar(page)}


      <main class="teacher-dashboard-main">

        <header class="teacher-dashboard-header">

          <div class="teacher-header-left">

            <button
              type="button"
              class="teacher-mobile-menu"
              id="teacherMobileMenu"
              aria-label="Open menu"
            >
              ☰
            </button>


            <div class="teacher-header-title">

              <h1>
                ${module.icon}
                ${module.title}
              </h1>

              <p>
                Teacher Portal
              </p>

            </div>

          </div>


          <div class="teacher-profile">

            <div class="teacher-profile-avatar">
              T
            </div>

            <div class="teacher-profile-info">

              <strong>
                Teacher Name
              </strong>

              <span>
                Mathematics Teacher
              </span>

            </div>

          </div>

        </header>


        <section class="teacher-dashboard-content">

          <div class="teacher-dashboard-card teacher-module-card">

            <div class="teacher-module-icon">
              ${module.icon}
            </div>

            <h2>
              ${module.title}
            </h2>

            <p>
              This module will be added next.
            </p>

            <button
              type="button"
              class="teacher-back-btn"
              data-page="dashboard"
            >
              ← Back to Dashboard
            </button>

          </div>

        </section>

      </main>

    </div>

  `;


  setupTeacherMobileControls();

}