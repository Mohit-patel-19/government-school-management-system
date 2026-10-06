/* =========================================
   PARENT DOCUMENTS
========================================= */

const documentsData = [
  {
    id: 1,
    title: "Student ID Card",
    type: "Identity",
    category: "ID Card",
    fileName: "Student_ID_Card.pdf",
    issueDate: "01 April 2026",
    status: "Available",
    icon: "🪪",
    description:
      "Official student identity card for the academic session 2026-27."
  },
  {
    id: 2,
    title: "Bonafide Certificate",
    type: "Certificate",
    category: "Certificate",
    fileName: "Bonafide_Certificate.pdf",
    issueDate: "10 April 2026",
    status: "Available",
    icon: "📜",
    description:
      "Bonafide certificate issued by the school."
  },
  {
    id: 3,
    title: "Character Certificate",
    type: "Certificate",
    category: "Certificate",
    fileName: "Character_Certificate.pdf",
    issueDate: "15 April 2026",
    status: "Available",
    icon: "📄",
    description:
      "Character certificate issued by the school."
  },
  {
    id: 4,
    title: "Transfer Certificate",
    type: "Academic",
    category: "TC",
    fileName: "Transfer_Certificate.pdf",
    issueDate: "20 April 2026",
    status: "Pending",
    icon: "📋",
    description:
      "Transfer certificate is currently under processing."
  },
  {
    id: 5,
    title: "Half Yearly Marksheet",
    type: "Academic",
    category: "Marksheet",
    fileName: "Half_Yearly_Marksheet.pdf",
    issueDate: "20 August 2026",
    status: "Available",
    icon: "📊",
    description:
      "Student half yearly examination marksheet."
  },
  {
    id: 6,
    title: "Admission Form",
    type: "Admission",
    category: "Admission",
    fileName: "Admission_Form.pdf",
    issueDate: "01 April 2026",
    status: "Available",
    icon: "📝",
    description:
      "Student admission and enrollment document."
  }
];

/* =========================================
   PARENT DOCUMENTS PAGE
========================================= */

export function ParentDocuments(studentName = "Student") {

  return `
    <div class="parent-documents-page">

      <!-- Header -->
      <div class="documents-page-header">

        <div class="documents-page-title">

          <div class="documents-page-title-icon">
            📄
          </div>

          <div>
            <h1>Documents</h1>
            <p>View and manage student documents</p>
          </div>

        </div>

        <button
          type="button"
          class="documents-back-btn"
          id="parentDocumentsBackBtn"
        >
          ← Back to Dashboard
        </button>

      </div>


      <!-- Student Information -->
      <div class="documents-student-card">

        <div class="documents-student-icon">
          👨‍🎓
        </div>

        <div class="documents-student-info">

          <h2>${escapeHtml(studentName)}</h2>

          <div class="documents-student-meta">

            <span>Class: 10</span>
            <span>Section: A</span>
            <span>Roll No: 24</span>
            <span>Session: 2026-27</span>

          </div>

        </div>

      </div>


      <!-- Statistics -->
      <div class="documents-stats">

        <div class="document-stat-card">

          <div class="document-stat-icon blue">
            📄
          </div>

          <div>
            <h3 id="documentsTotalCount">
              ${documentsData.length}
            </h3>
            <p>Total Documents</p>
          </div>

        </div>


        <div class="document-stat-card">

          <div class="document-stat-icon green">
            ✅
          </div>

          <div>
            <h3 id="documentsAvailableCount">
              ${getAvailableDocumentsCount()}
            </h3>
            <p>Available</p>
          </div>

        </div>


        <div class="document-stat-card">

          <div class="document-stat-icon orange">
            ⏳
          </div>

          <div>
            <h3 id="documentsPendingCount">
              ${getPendingDocumentsCount()}
            </h3>
            <p>Pending</p>
          </div>

        </div>

      </div>


      <!-- Documents Section -->
      <div class="documents-section">

        <div class="documents-section-header">

          <h2>Student Documents</h2>

          <div class="documents-controls">

            <input
              type="search"
              id="parentDocumentsSearch"
              class="documents-search"
              placeholder="Search documents..."
              autocomplete="off"
            />

            <select
              id="parentDocumentsFilter"
            >
              <option value="all">All Documents</option>
              <option value="Available">Available</option>
              <option value="Pending">Pending</option>
              <option value="Academic">Academic</option>
              <option value="Certificate">Certificate</option>
              <option value="Identity">Identity</option>
              <option value="Admission">Admission</option>
            </select>

          </div>

        </div>


        <!-- Documents Grid -->
        <div
          class="documents-grid"
          id="parentDocumentsGrid"
        ></div>


        <!-- Information -->
        <div class="documents-info-box">
          ℹ️ Documents shown here are provided by the school.
          Available documents can be viewed, downloaded and printed.
          Pending documents are still under processing.
        </div>

      </div>


      <!-- Document View Modal -->
      <div
        class="documents-modal"
        id="documentViewModal"
      >

        <div
          class="documents-modal-overlay"
          data-close-modal="true"
        ></div>

        <div class="documents-modal-content">

          <button
            type="button"
            class="documents-modal-close"
            id="documentModalClose"
            aria-label="Close"
          >
            ×
          </button>

          <div id="documentModalBody"></div>

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   SETUP DOCUMENT PAGE
========================================= */

export function setupParentDocuments() {

  const grid =
    document.querySelector("#parentDocumentsGrid");

  const searchInput =
    document.querySelector("#parentDocumentsSearch");

  const filterSelect =
    document.querySelector("#parentDocumentsFilter");

  const backButton =
    document.querySelector("#parentDocumentsBackBtn");

  const modal =
    document.querySelector("#documentViewModal");

  const modalClose =
    document.querySelector("#documentModalClose");


  /* =========================================
     Initial Render
  ========================================= */

  renderDocuments(documentsData);


  /* =========================================
     Back Button
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


  /* =========================================
     Search
  ========================================= */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      applyDocumentFilters
    );

  }


  /* =========================================
     Filter
  ========================================= */

  if (filterSelect) {

    filterSelect.addEventListener(
      "change",
      applyDocumentFilters
    );

  }


  /* =========================================
     Document Actions
  ========================================= */

  if (grid) {

    grid.addEventListener("click", (event) => {

      const button =
        event.target.closest(
          "[data-document-action]"
        );

      if (!button) {
        return;
      }

      const documentId =
        Number(button.dataset.documentId);

      const action =
        button.dataset.documentAction;

      const selectedDocument =
        documentsData.find(
          (item) => item.id === documentId
        );

      if (!selectedDocument) {
        return;
      }


      if (selectedDocument.status !== "Available") {
        return;
      }


      if (action === "view") {

        openDocumentModal(selectedDocument);

      }


      if (action === "download") {

        downloadDocument(selectedDocument);

      }


      if (action === "print") {

        printDocument(selectedDocument);

      }

    });

  }


  /* =========================================
     Modal Close
  ========================================= */

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeDocumentModal
    );

  }


  if (modal) {

    modal.addEventListener("click", (event) => {

      if (
        event.target.dataset.closeModal ===
        "true"
      ) {

        closeDocumentModal();

      }

    });

  }


  /* =========================================
     Escape Key
  ========================================= */

  document.addEventListener(
    "keydown",
    handleDocumentEscape
  );

}


/* =========================================
   RENDER DOCUMENTS
========================================= */

function renderDocuments(documents) {

  const grid =
    document.querySelector("#parentDocumentsGrid");

  if (!grid) {
    return;
  }


  if (!documents.length) {

    grid.innerHTML = `
      <div class="documents-empty-state">

        <div class="documents-empty-state-icon">
          📄
        </div>

        <h3>No Documents Found</h3>

        <p>
          No documents match your search or filter.
        </p>

      </div>
    `;

    return;
  }


  grid.innerHTML = documents
    .map((item) => {

      const isAvailable =
        item.status === "Available";


      return `
        <div
          class="document-card"
          data-document-id="${item.id}"
        >

          <div class="document-card-top">

            <div class="document-file-icon">
              ${item.icon}
            </div>

            <span
              class="document-status ${
                isAvailable
                  ? "document-status-available"
                  : "document-status-pending"
              }"
            >
              ${item.status}
            </span>

          </div>


          <div class="document-card-body">

            <h3>
              ${escapeHtml(item.title)}
            </h3>

            <span class="document-category">
              ${escapeHtml(item.category)}
            </span>


            <div class="document-details">

              <p>
                <strong>File:</strong>
                ${escapeHtml(item.fileName)}
              </p>

              <p>
                <strong>Issued:</strong>
                ${escapeHtml(item.issueDate)}
              </p>

              <p>
                ${escapeHtml(item.description)}
              </p>

            </div>

          </div>


          <div class="document-card-actions">

            ${
              isAvailable
                ? `
                  <button
                    type="button"
                    class="document-action-btn view"
                    data-document-action="view"
                    data-document-id="${item.id}"
                  >
                    👁 View
                  </button>

                  <button
                    type="button"
                    class="document-action-btn download"
                    data-document-action="download"
                    data-document-id="${item.id}"
                  >
                    ⬇ Download
                  </button>

                  <button
                    type="button"
                    class="document-action-btn print"
                    data-document-action="print"
                    data-document-id="${item.id}"
                  >
                    🖨 Print
                  </button>
                `
                : `
                  <button
                    type="button"
                    class="document-action-btn pending"
                    disabled
                  >
                    ⏳ Processing
                  </button>
                `
            }

          </div>

        </div>
      `;

    })
    .join("");

}


/* =========================================
   SEARCH + FILTER
========================================= */

function applyDocumentFilters() {

  const searchInput =
    document.querySelector(
      "#parentDocumentsSearch"
    );

  const filterSelect =
    document.querySelector(
      "#parentDocumentsFilter"
    );


  const searchText =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : "";


  const selectedFilter =
    filterSelect
      ? filterSelect.value
      : "all";


  const filteredDocuments =
    documentsData.filter((item) => {

      const searchableText = `
        ${item.title}
        ${item.type}
        ${item.category}
        ${item.fileName}
        ${item.description}
      `.toLowerCase();


      const matchesSearch =
        searchableText.includes(searchText);


      let matchesFilter = true;


      if (selectedFilter !== "all") {

        if (
          selectedFilter === "Available" ||
          selectedFilter === "Pending"
        ) {

          matchesFilter =
            item.status === selectedFilter;

        } else {

          matchesFilter =
            item.type === selectedFilter ||
            item.category === selectedFilter;

        }

      }


      return (
        matchesSearch &&
        matchesFilter
      );

    });


  renderDocuments(filteredDocuments);

}


/* =========================================
   OPEN DOCUMENT MODAL
========================================= */

function openDocumentModal(documentItem) {

  const modal =
    document.querySelector("#documentViewModal");

  const modalBody =
    document.querySelector("#documentModalBody");


  if (!modal || !modalBody) {
    return;
  }


  modalBody.innerHTML = `
    <div class="document-preview">

      <div class="document-preview-header">

        <div class="document-preview-icon">
          ${documentItem.icon}
        </div>

        <div>

          <h2>
            ${escapeHtml(documentItem.title)}
          </h2>

          <p>
            ${escapeHtml(documentItem.fileName)}
          </p>

        </div>

      </div>


      <div class="document-preview-paper">

        <div class="school-document-header">

          <div class="school-document-logo">
            🏫
          </div>

          <h2>
            GOVERNMENT SCHOOL
          </h2>

          <p>
            Department of Education
          </p>

          <p>
            Academic Session 2026-27
          </p>

        </div>


        <div class="school-document-line"></div>


        <h3 class="preview-document-title">
          ${escapeHtml(documentItem.title)}
        </h3>


        <div class="preview-student-details">

          <div>
            <strong>Student Name:</strong>
            Student Name
          </div>

          <div>
            <strong>Class:</strong>
            10
          </div>

          <div>
            <strong>Section:</strong>
            A
          </div>

          <div>
            <strong>Roll Number:</strong>
            24
          </div>

          <div>
            <strong>Academic Session:</strong>
            2026-27
          </div>

          <div>
            <strong>Issue Date:</strong>
            ${escapeHtml(documentItem.issueDate)}
          </div>

        </div>


        <div class="preview-document-description">

          <p>
            ${escapeHtml(documentItem.description)}
          </p>

          <p>
            This document is issued by the Government School
            for official academic and administrative purposes.
          </p>

        </div>


        <div class="school-document-footer">

          <div>
            <strong>School Authority</strong>
            <br />
            Principal
          </div>

          <div>
            <strong>Official Seal</strong>
            <br />
            🏫
          </div>

        </div>

      </div>


      <div class="document-preview-actions">

        <button
          type="button"
          class="document-preview-download"
          id="modalDownloadDocument"
        >
          ⬇ Download
        </button>

        <button
          type="button"
          class="document-preview-print"
          id="modalPrintDocument"
        >
          🖨 Print
        </button>

      </div>

    </div>
  `;


  const downloadButton =
    document.querySelector(
      "#modalDownloadDocument"
    );

  const printButton =
    document.querySelector(
      "#modalPrintDocument"
    );


  if (downloadButton) {

    downloadButton.addEventListener(
      "click",
      () => {

        downloadDocument(documentItem);

      }
    );

  }


  if (printButton) {

    printButton.addEventListener(
      "click",
      () => {

        printDocument(documentItem);

      }
    );

  }


  modal.classList.add("active");

  document.body.classList.add(
    "documents-modal-open"
  );

}


/* =========================================
   CLOSE DOCUMENT MODAL
========================================= */

function closeDocumentModal() {

  const modal =
    document.querySelector("#documentViewModal");

  if (!modal) {
    return;
  }


  modal.classList.remove("active");

  document.body.classList.remove(
    "documents-modal-open"
  );

}


/* =========================================
   ESCAPE KEY
========================================= */

function handleDocumentEscape(event) {

  if (event.key === "Escape") {

    const modal =
      document.querySelector(
        "#documentViewModal"
      );

    if (
      modal &&
      modal.classList.contains("active")
    ) {

      closeDocumentModal();

    }

  }

}


/* =========================================
   DOWNLOAD DOCUMENT
========================================= */

function downloadDocument(documentItem) {

  const html =
    generateDocumentHTML(documentItem);


  const blob =
    new Blob(
      [html],
      {
        type: "text/html"
      }
    );


  const url =
    URL.createObjectURL(blob);


  const link =
    document.createElement("a");


  link.href = url;

  link.download =
    documentItem.fileName.replace(
      ".pdf",
      ".html"
    );


  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);


  setTimeout(() => {

    URL.revokeObjectURL(url);

  }, 1000);

}


/* =========================================
   PRINT DOCUMENT
========================================= */

function printDocument(documentItem) {

  const printWindow =
    window.open(
      "",
      "_blank",
      "width=900,height=700"
    );


  if (!printWindow) {

    alert(
      "Please allow pop-ups to print the document."
    );

    return;

  }


  printWindow.document.open();

  printWindow.document.write(
    generateDocumentHTML(documentItem)
  );

  printWindow.document.close();


  printWindow.onload = () => {

    printWindow.focus();

    printWindow.print();

  };

}


/* =========================================
   GENERATE DOCUMENT HTML
========================================= */

function generateDocumentHTML(documentItem) {

  return `
    <!DOCTYPE html>

    <html>

    <head>

      <meta charset="UTF-8" />

      <title>
        ${escapeHtml(documentItem.title)}
      </title>

      <style>

        body {
          margin: 0;
          padding: 40px;
          font-family: Arial, sans-serif;
          background: #ffffff;
          color: #111827;
        }

        .document {
          max-width: 800px;
          margin: auto;
          border: 1px solid #cccccc;
          padding: 40px;
          box-sizing: border-box;
        }

        .header {
          text-align: center;
        }

        .logo {
          font-size: 42px;
        }

        .header h1 {
          margin: 8px 0;
          font-size: 25px;
        }

        .header p {
          margin: 5px 0;
          color: #555555;
        }

        .line {
          height: 1px;
          background: #cccccc;
          margin: 25px 0;
        }

        .title {
          text-align: center;
          font-size: 22px;
          margin-bottom: 30px;
          text-transform: uppercase;
        }

        .details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .details div {
          border-bottom: 1px solid #dddddd;
          padding: 10px 0;
        }

        .description {
          margin-top: 30px;
          line-height: 1.7;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          margin-top: 80px;
          text-align: center;
        }

        @media print {

          body {
            padding: 0;
          }

          .document {
            border: none;
          }

        }

      </style>

    </head>

    <body>

      <div class="document">

        <div class="header">

          <div class="logo">
            🏫
          </div>

          <h1>
            GOVERNMENT SCHOOL
          </h1>

          <p>
            Department of Education
          </p>

          <p>
            Academic Session 2026-27
          </p>

        </div>


        <div class="line"></div>


        <h2 class="title">
          ${escapeHtml(documentItem.title)}
        </h2>


        <div class="details">

          <div>
            <strong>Student Name:</strong>
            Student Name
          </div>

          <div>
            <strong>Class:</strong>
            10
          </div>

          <div>
            <strong>Section:</strong>
            A
          </div>

          <div>
            <strong>Roll Number:</strong>
            24
          </div>

          <div>
            <strong>Academic Session:</strong>
            2026-27
          </div>

          <div>
            <strong>Issue Date:</strong>
            ${escapeHtml(documentItem.issueDate)}
          </div>

        </div>


        <div class="description">

          <p>
            ${escapeHtml(documentItem.description)}
          </p>

          <p>
            This document is issued by the Government School
            for official academic and administrative purposes.
          </p>

        </div>


        <div class="footer">

          <div>
            <strong>School Authority</strong>
            <br />
            Principal
          </div>

          <div>
            <strong>Official Seal</strong>
            <br />
            🏫
          </div>

        </div>

      </div>

    </body>

    </html>
  `;

}


/* =========================================
   HELPERS
========================================= */

function getAvailableDocumentsCount() {

  return documentsData.filter(
    (item) =>
      item.status === "Available"
  ).length;

}


function getPendingDocumentsCount() {

  return documentsData.filter(
    (item) =>
      item.status === "Pending"
  ).length;

}


function escapeHtml(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}