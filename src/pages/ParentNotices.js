/* =========================================
   PARENT NOTICES DATA
========================================= */

const noticesData = [
  {
    id: 1,
    title: "Half Yearly Examination Schedule",
    category: "Examination",
    date: "05 September 2026",
    priority: "Important",
    isNew: true,
    description:
      "The Half Yearly Examination schedule has been released. Parents are requested to check the examination dates and ensure that their child is prepared accordingly.",
    details:
      "The Half Yearly Examination will be conducted according to the official school schedule. Students must reach school on time and carry all required examination materials."
  },

  {
    id: 2,
    title: "Parent Teacher Meeting",
    category: "Meeting",
    date: "02 September 2026",
    priority: "Important",
    isNew: true,
    description:
      "A Parent Teacher Meeting will be organized to discuss student academic performance, attendance and overall progress.",
    details:
      "Parents are requested to attend the Parent Teacher Meeting and discuss their child's academic progress, attendance and areas that require improvement."
  },

  {
    id: 3,
    title: "School Timing Update",
    category: "General",
    date: "28 August 2026",
    priority: "General",
    isNew: false,
    description:
      "School timings have been updated for the current academic session.",
    details:
      "Students are requested to follow the updated school timings and reach the school before the morning assembly."
  },

  {
    id: 4,
    title: "Submission of Assignment",
    category: "Academic",
    date: "25 August 2026",
    priority: "General",
    isNew: false,
    description:
      "Students are required to submit their pending assignments before the specified deadline.",
    details:
      "Parents are requested to ensure that their child completes and submits all pending assignments within the given deadline."
  },

  {
    id: 5,
    title: "Independence Day Holiday",
    category: "Holiday",
    date: "14 August 2026",
    priority: "General",
    isNew: false,
    description:
      "The school will remain closed on account of Independence Day.",
    details:
      "The school will remain closed on the scheduled holiday. Regular classes will resume from the next working day."
  }
];


/* =========================================
   PARENT NOTICES PAGE
========================================= */

export function ParentNotices(studentName = "Student") {

  return `
    <div class="parent-notices-page">

      <!-- =====================================
           HEADER
      ====================================== -->

      <header class="parent-notices-header">

        <div class="parent-notices-title">

          <h1>School Notices</h1>

          <p>
            Stay updated with school announcements
          </p>

        </div>


        <div class="parent-notices-header-actions">

          <button
            type="button"
            id="parentNoticesBackBtn"
            class="parent-notices-back-btn"
          >
            <span>←</span>
            <span>Back to Dashboard</span>
          </button>

        </div>

      </header>


      <!-- =====================================
           MAIN CONTENT
      ====================================== -->

      <main class="parent-notices-content">


        <!-- =====================================
             STUDENT INFO
        ====================================== -->

        <section class="parent-notices-card notice-student-card">

          <div class="notice-student-info">

            <div class="notice-student-avatar">
              ${
                studentName
                  ? studentName.charAt(0).toUpperCase()
                  : "S"
              }
            </div>


            <div>

              <h2>${studentName}</h2>

              <p>
                Class 10
                <span>•</span>
                Section A
                <span>•</span>
                Roll No. 24
              </p>

            </div>

          </div>

        </section>


        <!-- =====================================
             NOTICE CONTROLS
        ====================================== -->

        <section class="parent-notices-card notice-controls">

          <div class="notice-search-box">

            <span class="notice-search-icon">
              🔍
            </span>

            <input
              type="text"
              id="parentNoticeSearch"
              placeholder="Search notices..."
              autocomplete="off"
            />

          </div>


          <div class="notice-filter-box">

            <select id="parentNoticeCategory">

              <option value="All">
                All Notices
              </option>

              <option value="Important">
                Important
              </option>

              <option value="Academic">
                Academic
              </option>

              <option value="Examination">
                Examination
              </option>

              <option value="Meeting">
                Meeting
              </option>

              <option value="Holiday">
                Holiday
              </option>

              <option value="General">
                General
              </option>

            </select>

          </div>

        </section>


        <!-- =====================================
             NOTICE LIST
        ====================================== -->

        <section
          id="parentNoticeList"
          class="parent-notice-list"
        ></section>


      </main>


      <!-- =====================================
           NOTICE MODAL
      ====================================== -->

      <div
        id="parentNoticeModal"
        class="parent-notice-modal"
      >

        <div class="parent-notice-modal-overlay"></div>


        <div
          class="parent-notice-modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="parentNoticeModalTitle"
        >

          <div class="parent-notice-modal-header">

            <h2 id="parentNoticeModalTitle">
              Notice
            </h2>

            <button
              type="button"
              id="parentNoticeModalClose"
              class="parent-notice-modal-close"
            >
              ×
            </button>

          </div>


          <div
            id="parentNoticeModalBody"
            class="parent-notice-modal-body"
          ></div>


        </div>

      </div>

    </div>
  `;
}


/* =========================================
   SETUP PARENT NOTICES
========================================= */

export function setupParentNotices() {

  const searchInput =
    document.getElementById("parentNoticeSearch");

  const categorySelect =
    document.getElementById("parentNoticeCategory");

  const noticeList =
    document.getElementById("parentNoticeList");

  const backButton =
    document.getElementById("parentNoticesBackBtn");

  const modal =
    document.getElementById("parentNoticeModal");

  const modalClose =
    document.getElementById("parentNoticeModalClose");

  const modalOverlay =
    document.querySelector(
      ".parent-notice-modal-overlay"
    );


  /* =========================================
     BACK TO DASHBOARD
  ========================================= */

  if (backButton) {

    backButton.addEventListener("click", () => {

      if (
        typeof window.navigateParentPage ===
        "function"
      ) {

        window.navigateParentPage("dashboard");

      }

    });

  }


  if (!noticeList) {
    return;
  }


  /* =========================================
     OPEN NOTICE
  ========================================= */

  function openNotice(notice) {

    const modalTitle =
      document.getElementById(
        "parentNoticeModalTitle"
      );

    const modalBody =
      document.getElementById(
        "parentNoticeModalBody"
      );


    if (!modal || !modalTitle || !modalBody) {
      return;
    }


    modalTitle.textContent = notice.title;


    modalBody.innerHTML = `

      <div class="modal-notice-meta">

        <span class="modal-notice-category">
          ${notice.category}
        </span>

        <span class="modal-notice-date">
          ${notice.date}
        </span>

      </div>


      <div class="modal-notice-description">

        ${notice.details}

      </div>


      <div class="modal-notice-footer">

        <span>
          Priority:
        </span>

        <strong class="${
          notice.priority.toLowerCase()
        }">

          ${notice.priority}

        </strong>

      </div>

    `;


    modal.classList.add("active");

    document.body.classList.add(
      "parent-notice-modal-open"
    );

  }


  /* =========================================
     CLOSE NOTICE
  ========================================= */

  function closeNotice() {

    if (!modal) {
      return;
    }


    modal.classList.remove("active");

    document.body.classList.remove(
      "parent-notice-modal-open"
    );

  }


  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeNotice
    );

  }


  if (modalOverlay) {

    modalOverlay.addEventListener(
      "click",
      closeNotice
    );

  }


  /* =========================================
     ESC KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("active")
      ) {

        closeNotice();

      }

    }
  );


  /* =========================================
     RENDER NOTICES
  ========================================= */

  function renderNotices() {

    const searchText =
      searchInput
        ? searchInput.value
            .trim()
            .toLowerCase()
        : "";


    const selectedCategory =
      categorySelect
        ? categorySelect.value
        : "All";


    const filteredNotices =
      noticesData.filter((notice) => {

        const matchesSearch =
          notice.title
            .toLowerCase()
            .includes(searchText) ||
          notice.description
            .toLowerCase()
            .includes(searchText) ||
          notice.category
            .toLowerCase()
            .includes(searchText);


        const matchesCategory =
          selectedCategory === "All" ||
          notice.category === selectedCategory ||
          (
            selectedCategory === "Important" &&
            notice.priority === "Important"
          );


        return (
          matchesSearch &&
          matchesCategory
        );

      });


    /* =====================================
       NO RESULTS
    ====================================== */

    if (filteredNotices.length === 0) {

      noticeList.innerHTML = `

        <div class="parent-results-empty">

          <div class="empty-icon">
            🔔
          </div>

          <h3>
            No Notices Found
          </h3>

          <p>
            No notices match your search or filter.
          </p>

        </div>

      `;

      return;
    }


    /* =====================================
       NOTICE CARDS
    ====================================== */

    noticeList.innerHTML =
      filteredNotices
        .map(
          (notice) => `

            <article
              class="parent-notice-item ${
                notice.priority === "Important"
                  ? "important"
                  : ""
              }"
            >

              <div class="notice-item-icon">

                ${
                  notice.priority === "Important"
                    ? "⚠️"
                    : "📢"
                }

              </div>


              <div class="notice-item-content">

                <div class="notice-item-top">

                  <div class="notice-item-title-row">

                    <h3>
                      ${notice.title}
                    </h3>

                    ${
                      notice.isNew
                        ? `
                          <span class="notice-new-badge">
                            New
                          </span>
                        `
                        : ""
                    }

                  </div>


                  <span class="notice-item-date">
                    ${notice.date}
                  </span>

                </div>


                <div class="notice-item-meta">

                  <span class="notice-category">
                    ${notice.category}
                  </span>

                  <span
                    class="notice-priority ${
                      notice.priority.toLowerCase()
                    }"
                  >
                    ${notice.priority}
                  </span>

                </div>


                <p class="notice-item-description">

                  ${notice.description}

                </p>


                <button
                  type="button"
                  class="notice-view-btn"
                  data-notice-id="${notice.id}"
                >
                  View Notice →
                </button>

              </div>

            </article>

          `
        )
        .join("");


    /* =====================================
       VIEW NOTICE BUTTONS
    ====================================== */

    const viewButtons =
      noticeList.querySelectorAll(
        ".notice-view-btn"
      );


    viewButtons.forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const noticeId =
            Number(
              button.dataset.noticeId
            );


          const notice =
            noticesData.find(
              (item) =>
                item.id === noticeId
            );


          if (notice) {

            openNotice(notice);

          }

        }
      );

    });

  }


  /* =========================================
     SEARCH
  ========================================= */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      renderNotices
    );

  }


  /* =========================================
     FILTER
  ========================================= */

  if (categorySelect) {

    categorySelect.addEventListener(
      "change",
      renderNotices
    );

  }


  /* =========================================
     INITIAL RENDER
  ========================================= */

  renderNotices();

}