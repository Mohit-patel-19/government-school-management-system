/* =========================================
   ADMIN DOCUMENTS
========================================= */

/*
  Frontend demo document storage.

  Important:
  Browser refresh ke baad selected local files
  permanently available nahi rahenge.

  Permanent file storage ke liye later backend
  / database / cloud storage connect kiya ja sakta hai.
*/

const documentsData = [
  {
    id: 1,
    title: "School Academic Calendar 2026-27",
    category: "Academic",
    description: "Academic calendar for session 2026-27.",
    type: "PDF",
    size: "2.4 MB",
    audience: "All",
    className: "All Classes",
    uploadedBy: "Administrator",
    date: "2026-06-10",
    status: "Published",
    fileName: "",
    fileUrl: ""
  },

  {
    id: 2,
    title: "Class 10 Mathematics Syllabus",
    category: "Academic",
    description: "Complete Mathematics syllabus for Class 10.",
    type: "PDF",
    size: "1.8 MB",
    audience: "Students",
    className: "Class 10",
    uploadedBy: "Administrator",
    date: "2026-06-15",
    status: "Published",
    fileName: "",
    fileUrl: ""
  },

  {
    id: 3,
    title: "Teacher Attendance Guidelines",
    category: "Teacher",
    description: "Attendance rules and guidelines for teaching staff.",
    type: "PDF",
    size: "1.2 MB",
    audience: "Teachers",
    className: "All Classes",
    uploadedBy: "Administrator",
    date: "2026-06-20",
    status: "Published",
    fileName: "",
    fileUrl: ""
  },

  {
    id: 4,
    title: "Student Admission Form",
    category: "Forms",
    description: "Student admission form for new admissions.",
    type: "DOCX",
    size: "850 KB",
    audience: "Students",
    className: "All Classes",
    uploadedBy: "Administrator",
    date: "2026-06-25",
    status: "Draft",
    fileName: "",
    fileUrl: ""
  },

  {
    id: 5,
    title: "Fee Structure 2026-27",
    category: "Finance",
    description: "School fee structure for academic session 2026-27.",
    type: "PDF",
    size: "950 KB",
    audience: "Parents",
    className: "All Classes",
    uploadedBy: "Administrator",
    date: "2026-07-01",
    status: "Published",
    fileName: "",
    fileUrl: ""
  }
]


/* =========================================
   CURRENT DOCUMENTS
========================================= */

let currentDocuments = [...documentsData]


/* =========================================
   MAIN DOCUMENTS PAGE
========================================= */

export function AdminDocuments() {

  currentDocuments = [...documentsData]

  return `
    <div class="admin-documents">

      <!-- =====================================
           HEADER
      ====================================== -->

      <div class="admin-documents-header">

        <div>
          <h1>Documents</h1>

          <p>
            Manage school documents, forms, circulars and academic files.
          </p>
        </div>

        <button
          type="button"
          class="admin-documents-primary-btn"
          id="addDocumentBtn"
        >
          <span>＋</span>
          Upload Document
        </button>

      </div>


      <!-- =====================================
           SUMMARY
      ====================================== -->

      <div class="admin-documents-summary">

        <!-- TOTAL -->

        <div class="admin-document-summary-card">

          <div class="admin-document-summary-icon">
            📁
          </div>

          <div>
            <span>Total Documents</span>

            <strong id="documentsTotalCount">
              ${documentsData.length}
            </strong>
          </div>

        </div>


        <!-- PUBLISHED -->

        <div class="admin-document-summary-card">

          <div class="admin-document-summary-icon">
            📢
          </div>

          <div>
            <span>Published</span>

            <strong id="documentsPublishedCount">
              ${getPublishedCount()}
            </strong>
          </div>

        </div>


        <!-- DRAFT -->

        <div class="admin-document-summary-card">

          <div class="admin-document-summary-icon">
            📝
          </div>

          <div>
            <span>Drafts</span>

            <strong id="documentsDraftCount">
              ${getDraftCount()}
            </strong>
          </div>

        </div>


        <!-- CATEGORIES -->

        <div class="admin-document-summary-card">

          <div class="admin-document-summary-icon">
            👥
          </div>

          <div>
            <span>Categories</span>

            <strong id="documentsCategoryCount">
              ${getCategoryCount()}
            </strong>
          </div>

        </div>

      </div>


      <!-- =====================================
           TOOLBAR
      ====================================== -->

      <div class="admin-documents-toolbar">

        <!-- SEARCH -->

        <div class="admin-documents-search">

          <span>⌕</span>

          <input
            type="text"
            id="documentSearch"
            placeholder="Search documents..."
            autocomplete="off"
          />

        </div>


        <!-- CATEGORY -->

        <select id="documentCategoryFilter">

          <option value="All">
            All Categories
          </option>

          <option value="Academic">
            Academic
          </option>

          <option value="School">
            School
          </option>

          <option value="Student">
            Student
          </option>

          <option value="Teacher">
            Teacher
          </option>

          <option value="Parent">
            Parent
          </option>

          <option value="Finance">
            Finance
          </option>

          <option value="Government">
            Government
          </option>

          <option value="Circulars">
            Circulars
          </option>

          <option value="Forms">
            Forms
          </option>

        </select>


        <!-- AUDIENCE -->

        <select id="documentAudienceFilter">

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

          <option value="Admin">
            Admin
          </option>

        </select>


        <!-- STATUS -->

        <select id="documentStatusFilter">

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

      </div>


      <!-- =====================================
           DOCUMENT TABLE CARD
      ====================================== -->

      <div class="admin-documents-card">

        <div class="admin-documents-card-header">

          <div>

            <h2>
              All Documents
            </h2>

            <p id="documentResultText">
              ${currentDocuments.length} documents found
            </p>

          </div>

        </div>


        <!-- TABLE -->

        <div class="admin-documents-table-wrapper">

          <table class="admin-documents-table">

            <thead>

              <tr>

                <th>
                  Document
                </th>

                <th>
                  Category
                </th>

                <th>
                  Audience
                </th>

                <th>
                  Uploaded By
                </th>

                <th>
                  Date
                </th>

                <th>
                  Status
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>


            <tbody id="documentsTableBody">

              ${renderDocuments(currentDocuments)}

            </tbody>

          </table>

        </div>

      </div>


      <!-- =====================================
           MODAL
      ====================================== -->

      <div id="documentModalContainer"></div>

    </div>
  `
}


/* =========================================
   RENDER DOCUMENTS
========================================= */

function renderDocuments(documents) {

  if (!Array.isArray(documents) || documents.length === 0) {

    return `
      <tr>

        <td
          colspan="7"
          class="admin-documents-empty"
        >

          <div class="admin-documents-empty-content">

            <div class="admin-documents-empty-icon">
              📂
            </div>

            <h3>
              No Documents Found
            </h3>

            <p>
              No documents match your current filters.
            </p>

          </div>

        </td>

      </tr>
    `
  }


  return documents.map(doc => {

    const statusClass =
      doc.status === "Published"
        ? "published"
        : "draft"


    return `
      <tr>

        <!-- DOCUMENT -->

        <td>

          <div class="admin-document-title-cell">

            <div class="admin-document-file-icon">
              ${getFileIcon(doc.type)}
            </div>

            <div>

              <strong>
                ${escapeHTML(doc.title)}
              </strong>

              <span>

                ${escapeHTML(doc.type)}

                •

                ${escapeHTML(doc.size)}

              </span>

            </div>

          </div>

        </td>


        <!-- CATEGORY -->

        <td>

          <span class="admin-document-category">
            ${escapeHTML(doc.category)}
          </span>

        </td>


        <!-- AUDIENCE -->

        <td>
          ${escapeHTML(getAudienceLabel(doc.audience))}
        </td>


        <!-- UPLOADED BY -->

        <td>
          ${escapeHTML(doc.uploadedBy)}
        </td>


        <!-- DATE -->

        <td>
          ${formatDocumentDate(doc.date)}
        </td>


        <!-- STATUS -->

        <td>

          <span
            class="admin-document-status ${statusClass}"
          >
            ${escapeHTML(doc.status)}
          </span>

        </td>


        <!-- ACTIONS -->

        <td>

          <div class="admin-document-actions">

            <!-- VIEW -->

            <button
              type="button"
              class="admin-document-action view"
              data-document-action="view"
              data-id="${doc.id}"
              title="View"
              aria-label="View document"
            >
              👁
            </button>


            <!-- EDIT -->

            <button
              type="button"
              class="admin-document-action edit"
              data-document-action="edit"
              data-id="${doc.id}"
              title="Edit"
              aria-label="Edit document"
            >
              ✏
            </button>


            <!-- DOWNLOAD -->

            <button
              type="button"
              class="admin-document-action download"
              data-document-action="download"
              data-id="${doc.id}"
              title="Download"
              aria-label="Download document"
            >
              ↓
            </button>


            <!-- PUBLISH / UNPUBLISH -->

            <button
              type="button"
              class="admin-document-action publish"
              data-document-action="toggle-status"
              data-id="${doc.id}"
              title="${
                doc.status === "Published"
                  ? "Move to Draft"
                  : "Publish"
              }"
              aria-label="${
                doc.status === "Published"
                  ? "Move to Draft"
                  : "Publish"
              }"
            >
              ${
                doc.status === "Published"
                  ? "◉"
                  : "○"
              }
            </button>


            <!-- DELETE -->

            <button
              type="button"
              class="admin-document-action delete"
              data-document-action="delete"
              data-id="${doc.id}"
              title="Delete"
              aria-label="Delete document"
            >
              🗑
            </button>

          </div>

        </td>

      </tr>
    `
  }).join("")
}


/* =========================================
   FILE ICON
========================================= */

function getFileIcon(type) {

  const fileType =
    String(type || "")
      .toUpperCase()
      .trim()


  const icons = {

    PDF: "📕",

    DOCX: "📘",

    DOC: "📘",

    XLSX: "📗",

    XLS: "📗",

    PPTX: "📙",

    PPT: "📙",

    JPG: "🖼️",

    JPEG: "🖼️",

    PNG: "🖼️",

    GIF: "🖼️",

    WEBP: "🖼️",

    TXT: "📄"

  }


  return icons[fileType] || "📄"
}


/* =========================================
   AUDIENCE LABEL
========================================= */

function getAudienceLabel(audience) {

  if (audience === "All") {
    return "Everyone"
  }

  return audience || "-"
}


/* =========================================
   SETUP NAVIGATION
========================================= */

export function setupAdminDocumentsNavigation() {

  const app =
    document.querySelector("#app")


  if (!app) {
    return
  }


  const searchInput =
    document.querySelector("#documentSearch")


  const categoryFilter =
    document.querySelector("#documentCategoryFilter")


  const audienceFilter =
    document.querySelector("#documentAudienceFilter")


  const statusFilter =
    document.querySelector("#documentStatusFilter")


  const addButton =
    document.querySelector("#addDocumentBtn")


  /*
    Avoid duplicate listeners if the Admin Documents
    page is opened multiple times.
  */

  if (app.dataset.documentsEventsReady === "true") {
    return
  }


  app.dataset.documentsEventsReady = "true"


  /* =========================================
     APPLY FILTERS
  ========================================= */

  function applyFilters() {

    const search =
      searchInput?.value
        ?.trim()
        .toLowerCase() || ""


    const category =
      categoryFilter?.value || "All"


    const audience =
      audienceFilter?.value || "All"


    const status =
      statusFilter?.value || "All"


    currentDocuments =
      documentsData.filter(doc => {

        const title =
          String(doc.title || "")
            .toLowerCase()


        const description =
          String(doc.description || "")
            .toLowerCase()


        const categoryValue =
          String(doc.category || "")


        const audienceValue =
          String(doc.audience || "")


        const statusValue =
          String(doc.status || "")


        const matchesSearch =
          !search ||
          title.includes(search) ||
          description.includes(search)


        const matchesCategory =
          category === "All" ||
          categoryValue === category


        const matchesAudience =
          audience === "All" ||
          audienceValue === audience ||
          audienceValue === "All"


        const matchesStatus =
          status === "All" ||
          statusValue === status


        return (
          matchesSearch &&
          matchesCategory &&
          matchesAudience &&
          matchesStatus
        )

      })


    refreshDocumentTable()
  }


  /* =========================================
     SEARCH
  ========================================= */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      applyFilters
    )

  }


  /* =========================================
     CATEGORY
  ========================================= */

  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      applyFilters
    )

  }


  /* =========================================
     AUDIENCE
  ========================================= */

  if (audienceFilter) {

    audienceFilter.addEventListener(
      "change",
      applyFilters
    )

  }


  /* =========================================
     STATUS
  ========================================= */

  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      applyFilters
    )

  }


  /* =========================================
     ADD DOCUMENT
  ========================================= */

  if (addButton) {

    addButton.addEventListener(
      "click",
      () => {

        openDocumentForm()

      }
    )

  }


  /* =========================================
     TABLE ACTIONS
  ========================================= */

  app.addEventListener(
    "click",
    handleDocumentAction
  )


  function handleDocumentAction(event) {

    const button =
      event.target.closest(
        "[data-document-action]"
      )


    if (!button) {
      return
    }


    const action =
      button.dataset.documentAction


    const id =
      Number(button.dataset.id)


    if (!Number.isFinite(id)) {
      return
    }


    const documentItem =
      documentsData.find(
        doc => doc.id === id
      )


    if (!documentItem) {
      return
    }


    switch (action) {

      case "view":

        openDocumentView(
          documentItem
        )

        break


      case "edit":

        openDocumentForm(
          documentItem
        )

        break


      case "download":

        downloadDocument(
          documentItem
        )

        break


      case "toggle-status":

        toggleDocumentStatus(
          documentItem
        )

        break


      case "delete":

        deleteDocument(
          documentItem
        )

        break


      default:

        break

    }

  }


  /* =========================================
     FORM SUBMIT
  ========================================= */

  app.addEventListener(
    "submit",
    handleDocumentFormSubmit
  )


  function handleDocumentFormSubmit(event) {

    if (
      !event.target.matches(
        "#adminDocumentForm"
      )
    ) {
      return
    }


    event.preventDefault()


    const form =
      event.target


    const formData =
      new FormData(form)


    const id =
      Number(
        formData.get("id")
      )


    const title =
      String(
        formData.get("title") || ""
      ).trim()


    const category =
      String(
        formData.get("category") || "Academic"
      ).trim()


    const description =
      String(
        formData.get("description") || ""
      ).trim()


    const type =
      String(
        formData.get("type") || "PDF"
      ).toUpperCase()


    const size =
      String(
        formData.get("size") || ""
      ).trim()


    const audience =
      String(
        formData.get("audience") || "All"
      )


    const className =
      String(
        formData.get("className") || "All Classes"
      )


    const status =
      String(
        formData.get("status") || "Draft"
      )


    const fileInput =
      form.querySelector(
        "#documentFile"
      )


    const selectedFile =
      fileInput?.files?.[0] || null


    /* =====================================
       VALIDATION
    ====================================== */

    if (!title) {

      alert(
        "Please enter document title."
      )

      return
    }


    if (title.length > 150) {

      alert(
        "Document title cannot exceed 150 characters."
      )

      return
    }


    if (
      !category ||
      !audience ||
      !status
    ) {

      alert(
        "Please fill all required fields."
      )

      return
    }


    /* =====================================
       FILE VALIDATION
    ====================================== */

    if (!id && !selectedFile) {

      alert(
        "Please select a document file."
      )

      return
    }


    if (selectedFile) {

      const validation =
        validateDocumentFile(
          selectedFile
        )


      if (!validation.valid) {

        alert(
          validation.message
        )

        return
      }

    }


    /* =====================================
       EDIT DOCUMENT
    ====================================== */

    if (id) {

      const index =
        documentsData.findIndex(
          doc => doc.id === id
        )


      if (index === -1) {

        alert(
          "Document not found."
        )

        return
      }


      const oldDocument =
        documentsData[index]


      let updatedFileUrl =
        oldDocument.fileUrl || ""


      let updatedFileName =
        oldDocument.fileName || ""


      let updatedType =
        type


      let updatedSize =
        size || oldDocument.size || "Unknown"


      /*
        If user selected a new file,
        replace the old file information.
      */

      if (selectedFile) {

        if (oldDocument.fileUrl) {

          revokeDocumentUrl(
            oldDocument.fileUrl
          )

        }


        updatedFileUrl =
          URL.createObjectURL(
            selectedFile
          )


        updatedFileName =
          selectedFile.name


        updatedType =
          getFileExtension(
            selectedFile.name
          )


        updatedSize =
          formatFileSize(
            selectedFile.size
          )

      }


      documentsData[index] = {

        ...oldDocument,

        title,

        category,

        description,

        type: updatedType,

        size: updatedSize,

        audience,

        className,

        status,

        fileName: updatedFileName,

        fileUrl: updatedFileUrl

      }

    }


    /* =====================================
       ADD NEW DOCUMENT
    ====================================== */

    else {

      let fileUrl = ""

      let fileName = ""

      let finalType = type

      let finalSize =
        size || "Unknown"


      if (selectedFile) {

        fileUrl =
          URL.createObjectURL(
            selectedFile
          )


        fileName =
          selectedFile.name


        finalType =
          getFileExtension(
            selectedFile.name
          )


        finalSize =
          formatFileSize(
            selectedFile.size
          )

      }


      documentsData.unshift({

        id: createDocumentId(),

        title,

        category,

        description,

        type: finalType,

        size: finalSize,

        audience,

        className,

        uploadedBy:
          "Administrator",

        date:
          getTodayDate(),

        status,

        fileName,

        fileUrl

      })

    }


    /*
      Keep currently selected filters.
    */

    applyCurrentDocumentFilters()


    closeDocumentModal()


    updateDocumentSummary()


    refreshDocumentTable()

  }

}


/* =========================================
   OPEN DOCUMENT FORM
========================================= */

function openDocumentForm(
  documentItem = null
) {

  const isEdit =
    Boolean(documentItem)


  const data =
    documentItem || {

      id: "",

      title: "",

      category: "Academic",

      description: "",

      type: "PDF",

      size: "1 MB",

      audience: "All",

      className: "All Classes",

      status: "Draft",

      fileName: ""

    }


  const modalContainer =
    document.querySelector(
      "#documentModalContainer"
    )


  if (!modalContainer) {
    return
  }


  modalContainer.innerHTML = `

    <div
      class="admin-document-modal-overlay"
      id="documentModalOverlay"
    >

      <div
        class="admin-document-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="documentModalTitle"
      >

        <!-- HEADER -->

        <div class="admin-document-modal-header">

          <div>

            <h2 id="documentModalTitle">

              ${
                isEdit
                  ? "Edit Document"
                  : "Upload Document"
              }

            </h2>

            <p>

              ${
                isEdit
                  ? "Update document information."
                  : "Add a new document to the school portal."
              }

            </p>

          </div>


          <button
            type="button"
            class="admin-document-modal-close"
            id="closeDocumentModalBtn"
            aria-label="Close modal"
          >
            ×
          </button>

        </div>


        <!-- FORM -->

        <form
          id="adminDocumentForm"
          class="admin-document-form"
        >

          <input
            type="hidden"
            name="id"
            value="${escapeAttribute(data.id)}"
          />


          <div class="admin-document-form-grid">


            <!-- =================================
                 TITLE
            ================================== -->

            <div class="admin-document-form-group full">

              <label for="documentTitle">

                Document Title

                <span>*</span>

              </label>


              <input
                type="text"
                id="documentTitle"
                name="title"
                value="${escapeAttribute(data.title)}"
                placeholder="Enter document title"
                maxlength="150"
                required
              />

            </div>


            <!-- =================================
                 CATEGORY
            ================================== -->

            <div class="admin-document-form-group">

              <label for="documentCategory">

                Category

                <span>*</span>

              </label>


              <select
                id="documentCategory"
                name="category"
                required
              >

                ${documentOption(
                  "Academic",
                  data.category
                )}

                ${documentOption(
                  "School",
                  data.category
                )}

                ${documentOption(
                  "Student",
                  data.category
                )}

                ${documentOption(
                  "Teacher",
                  data.category
                )}

                ${documentOption(
                  "Parent",
                  data.category
                )}

                ${documentOption(
                  "Finance",
                  data.category
                )}

                ${documentOption(
                  "Government",
                  data.category
                )}

                ${documentOption(
                  "Circulars",
                  data.category
                )}

                ${documentOption(
                  "Forms",
                  data.category
                )}

              </select>

            </div>


            <!-- =================================
                 FILE TYPE
            ================================== -->

            <div class="admin-document-form-group">

              <label for="documentType">

                File Type

                <span>*</span>

              </label>


              <select
                id="documentType"
                name="type"
                required
              >

                ${documentOption(
                  "PDF",
                  data.type
                )}

                ${documentOption(
                  "DOCX",
                  data.type
                )}

                ${documentOption(
                  "XLSX",
                  data.type
                )}

                ${documentOption(
                  "PPTX",
                  data.type
                )}

                ${documentOption(
                  "JPG",
                  data.type
                )}

                ${documentOption(
                  "PNG",
                  data.type
                )}

                ${documentOption(
                  "TXT",
                  data.type
                )}

              </select>

            </div>


            <!-- =================================
                 DESCRIPTION
            ================================== -->

            <div class="admin-document-form-group full">

              <label for="documentDescription">

                Description

              </label>


              <textarea
                id="documentDescription"
                name="description"
                rows="4"
                maxlength="500"
                placeholder="Enter document description"
              >${escapeHTML(data.description)}</textarea>

            </div>


            <!-- =================================
                 AUDIENCE
            ================================== -->

            <div class="admin-document-form-group">

              <label for="documentAudience">

                Audience

                <span>*</span>

              </label>


              <select
                id="documentAudience"
                name="audience"
                required
              >

                ${documentOption(
                  "All",
                  data.audience,
                  "Everyone"
                )}

                ${documentOption(
                  "Students",
                  data.audience
                )}

                ${documentOption(
                  "Teachers",
                  data.audience
                )}

                ${documentOption(
                  "Parents",
                  data.audience
                )}

                ${documentOption(
                  "Admin",
                  data.audience
                )}

              </select>

            </div>


            <!-- =================================
                 CLASS
            ================================== -->

            <div class="admin-document-form-group">

              <label for="documentClass">

                Class / Section

              </label>


              <select
                id="documentClass"
                name="className"
              >

                ${documentOption(
                  "All Classes",
                  data.className
                )}

                ${documentOption(
                  "Class 10",
                  data.className
                )}

                ${documentOption(
                  "Class 10 A",
                  data.className
                )}

                ${documentOption(
                  "Class 10 B",
                  data.className
                )}

                ${documentOption(
                  "Class 9",
                  data.className
                )}

                ${documentOption(
                  "Class 9 A",
                  data.className
                )}

                ${documentOption(
                  "Class 9 B",
                  data.className
                )}

              </select>

            </div>


            <!-- =================================
                 FILE
            ================================== -->

            <div class="admin-document-form-group full">

              <label for="documentFile">

                Select File

                ${
                  isEdit
                    ? ""
                    : "<span>*</span>"
                }

              </label>


              <div class="admin-document-file-upload">

                <input
                  type="file"
                  id="documentFile"
                  name="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.webp,.txt"
                  ${
                    isEdit
                      ? ""
                      : "required"
                  }
                />


                <label
                  for="documentFile"
                  class="admin-document-file-label"
                >

                  <span>
                    📎
                  </span>

                  <span id="documentFileLabelText">

                    ${
                      data.fileName
                        ? escapeHTML(
                            data.fileName
                          )
                        : "Choose document file"
                    }

                  </span>

                </label>

              </div>


              ${
                isEdit && data.fileName
                  ? `
                    <small class="admin-document-current-file">
                      Current file: ${escapeHTML(data.fileName)}
                    </small>
                  `
                  : ""
              }

              <small class="admin-document-file-help">

                Supported:
                PDF, DOC, DOCX, XLS, XLSX,
                PPT, PPTX, JPG, PNG, GIF, WEBP, TXT

              </small>

            </div>


            <!-- =================================
                 SIZE
            ================================== -->

            <div class="admin-document-form-group">

              <label for="documentSize">

                File Size

              </label>


              <input
                type="text"
                id="documentSize"
                name="size"
                value="${escapeAttribute(data.size)}"
                placeholder="Example: 2 MB"
              />

            </div>


            <!-- =================================
                 STATUS
            ================================== -->

            <div class="admin-document-form-group">

              <label for="documentStatus">

                Status

                <span>*</span>

              </label>


              <select
                id="documentStatus"
                name="status"
                required
              >

                ${documentOption(
                  "Draft",
                  data.status
                )}

                ${documentOption(
                  "Published",
                  data.status
                )}

              </select>

            </div>

          </div>


          <!-- =================================
               FOOTER
          ================================== -->

          <div class="admin-document-form-footer">

            <button
              type="button"
              class="admin-document-secondary-btn"
              id="cancelDocumentBtn"
            >
              Cancel
            </button>


            <button
              type="submit"
              class="admin-documents-primary-btn"
            >

              ${
                isEdit
                  ? "Update Document"
                  : "Upload Document"
              }

            </button>

          </div>

        </form>

      </div>

    </div>
  `


  /* =========================================
     CLOSE BUTTON
  ========================================= */

  document
    .querySelector(
      "#closeDocumentModalBtn"
    )
    ?.addEventListener(
      "click",
      closeDocumentModal
    )


  /* =========================================
     CANCEL BUTTON
  ========================================= */

  document
    .querySelector(
      "#cancelDocumentBtn"
    )
    ?.addEventListener(
      "click",
      closeDocumentModal
    )


  /* =========================================
     OVERLAY
  ========================================= */

  document
    .querySelector(
      "#documentModalOverlay"
    )
    ?.addEventListener(
      "click",
      event => {

        if (
          event.target.id ===
          "documentModalOverlay"
        ) {

          closeDocumentModal()

        }

      }
    )


  /* =========================================
     FILE NAME UPDATE
  ========================================= */

  document
    .querySelector(
      "#documentFile"
    )
    ?.addEventListener(
      "change",
      event => {

        const file =
          event.target.files?.[0]


        const label =
          document.querySelector(
            "#documentFileLabelText"
          )


        if (!label) {
          return
        }


        if (file) {

          label.textContent =
            `${file.name} (${formatFileSize(file.size)})`

        } else {

          label.textContent =
            data.fileName ||
            "Choose document file"

        }

      }
    )


  /* =========================================
     AUTO SIZE
  ========================================= */

  document
    .querySelector(
      "#documentFile"
    )
    ?.addEventListener(
      "change",
      event => {

        const file =
          event.target.files?.[0]


        const sizeInput =
          document.querySelector(
            "#documentSize"
          )


        if (
          file &&
          sizeInput
        ) {

          sizeInput.value =
            formatFileSize(
              file.size
            )

        }

      }
    )


  /* =========================================
     ESCAPE KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    handleDocumentEscape
  )

}


/* =========================================
   VIEW DOCUMENT
========================================= */

function openDocumentView(
  documentItem
) {

  const modalContainer =
    document.querySelector(
      "#documentModalContainer"
    )


  if (!modalContainer) {
    return
  }


  const fileAvailable =
    Boolean(
      documentItem.fileUrl
    )


  modalContainer.innerHTML = `

    <div
      class="admin-document-modal-overlay"
      id="documentViewModalOverlay"
    >

      <div
        class="admin-document-modal admin-document-view-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="documentViewTitle"
      >

        <!-- HEADER -->

        <div class="admin-document-modal-header">

          <div>

            <h2>
              Document Details
            </h2>

            <p>
              View document information.
            </p>

          </div>


          <button
            type="button"
            class="admin-document-modal-close"
            id="closeDocumentViewBtn"
            aria-label="Close"
          >
            ×
          </button>

        </div>


        <!-- CONTENT -->

        <div class="admin-document-view-content">

          <div class="admin-document-view-icon">

            ${getFileIcon(documentItem.type)}

          </div>


          <h3 id="documentViewTitle">

            ${escapeHTML(documentItem.title)}

          </h3>


          <p class="admin-document-view-description">

            ${
              escapeHTML(
                documentItem.description ||
                "No description available."
              )
            }

          </p>


          ${
            documentItem.fileName
              ? `
                <div class="admin-document-view-filename">

                  <span>
                    📎
                  </span>

                  <strong>
                    ${escapeHTML(documentItem.fileName)}
                  </strong>

                </div>
              `
              : ""
          }


          <!-- DETAILS -->

          <div class="admin-document-details-grid">

            <div>

              <span>
                Category
              </span>

              <strong>
                ${escapeHTML(documentItem.category)}
              </strong>

            </div>


            <div>

              <span>
                File Type
              </span>

              <strong>
                ${escapeHTML(documentItem.type)}
              </strong>

            </div>


            <div>

              <span>
                File Size
              </span>

              <strong>
                ${escapeHTML(documentItem.size)}
              </strong>

            </div>


            <div>

              <span>
                Audience
              </span>

              <strong>
                ${escapeHTML(
                  getAudienceLabel(
                    documentItem.audience
                  )
                )}
              </strong>

            </div>


            <div>

              <span>
                Class / Section
              </span>

              <strong>
                ${escapeHTML(
                  documentItem.className
                )}
              </strong>

            </div>


            <div>

              <span>
                Status
              </span>

              <strong>
                ${escapeHTML(
                  documentItem.status
                )}
              </strong>

            </div>


            <div>

              <span>
                Uploaded By
              </span>

              <strong>
                ${escapeHTML(
                  documentItem.uploadedBy
                )}
              </strong>

            </div>


            <div>

              <span>
                Upload Date
              </span>

              <strong>
                ${formatDocumentDate(
                  documentItem.date
                )}
              </strong>

            </div>

          </div>


          <!-- ACTIONS -->

          <div class="admin-document-view-actions">

            <button
              type="button"
              class="admin-document-secondary-btn"
              id="closeDocumentViewSecondaryBtn"
            >
              Close
            </button>


            <button
              type="button"
              class="admin-documents-primary-btn"
              id="viewDownloadDocumentBtn"
            >

              ↓ Download

            </button>

          </div>


          ${
            !fileAvailable
              ? `
                <p class="admin-document-no-file-message">
                  Original file is not attached to this demo document.
                  Download will create a text information file.
                </p>
              `
              : ""
          }

        </div>

      </div>

    </div>
  `


  /* =========================================
     CLOSE
  ========================================= */

  document
    .querySelector(
      "#closeDocumentViewBtn"
    )
    ?.addEventListener(
      "click",
      closeDocumentModal
    )


  document
    .querySelector(
      "#closeDocumentViewSecondaryBtn"
    )
    ?.addEventListener(
      "click",
      closeDocumentModal
    )


  /* =========================================
     OVERLAY
  ========================================= */

  document
    .querySelector(
      "#documentViewModalOverlay"
    )
    ?.addEventListener(
      "click",
      event => {

        if (
          event.target.id ===
          "documentViewModalOverlay"
        ) {

          closeDocumentModal()

        }

      }
    )


  /* =========================================
     DOWNLOAD
  ========================================= */

  document
    .querySelector(
      "#viewDownloadDocumentBtn"
    )
    ?.addEventListener(
      "click",
      () => {

        downloadDocument(
          documentItem
        )

      }
    )


  /* =========================================
     ESCAPE
  ========================================= */

  document.addEventListener(
    "keydown",
    handleDocumentEscape
  )

}


/* =========================================
   DOWNLOAD DOCUMENT
========================================= */

function downloadDocument(
  documentItem
) {

  if (!documentItem) {
    return
  }


  /*
    If an actual selected file exists,
    download that file.
  */

  if (documentItem.fileUrl) {

    const link =
      document.createElement("a")


    link.href =
      documentItem.fileUrl


    link.download =
      documentItem.fileName ||
      `${documentItem.title}.${String(
        documentItem.type || "txt"
      ).toLowerCase()}`


    document.body.appendChild(link)

    link.click()

    link.remove()

    return
  }


  /*
    Fallback download for demo documents.
  */

  const content = `
Government School

Document: ${documentItem.title}

Category: ${documentItem.category}

Audience: ${getAudienceLabel(
    documentItem.audience
  )}

Class: ${documentItem.className}

File Type: ${documentItem.type}

File Size: ${documentItem.size}

Status: ${documentItem.status}

Uploaded By: ${documentItem.uploadedBy}

Upload Date: ${formatDocumentDate(
    documentItem.date
  )}

Description:

${documentItem.description || "No description available."}
  `.trim()


  const blob =
    new Blob(
      [content],
      {
        type: "text/plain;charset=utf-8"
      }
    )


  const url =
    URL.createObjectURL(
      blob
    )


  const link =
    document.createElement("a")


  link.href =
    url


  link.download =
    `${sanitizeFileName(
      documentItem.title
    )}.txt`


  document.body.appendChild(link)

  link.click()

  link.remove()


  setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      )

    },
    100
  )

}


/* =========================================
   TOGGLE STATUS
========================================= */

function toggleDocumentStatus(
  documentItem
) {

  if (!documentItem) {
    return
  }


  const oldStatus =
    documentItem.status


  const newStatus =
    oldStatus === "Published"
      ? "Draft"
      : "Published"


  documentItem.status =
    newStatus


  /*
    Keep existing filters.
  */

  applyCurrentDocumentFilters()


  updateDocumentSummary()


  refreshDocumentTable()

}


/* =========================================
   DELETE DOCUMENT
========================================= */

function deleteDocument(
  documentItem
) {

  if (!documentItem) {
    return
  }


  const confirmed =
    window.confirm(
      `Are you sure you want to delete "${documentItem.title}"?`
    )


  if (!confirmed) {
    return
  }


  const index =
    documentsData.findIndex(
      doc => doc.id === documentItem.id
    )


  if (index === -1) {

    alert(
      "Document not found."
    )

    return
  }


  /*
    Release local object URL
    before deleting document.
  */

  if (documentsData[index].fileUrl) {

    revokeDocumentUrl(
      documentsData[index].fileUrl
    )

  }


  documentsData.splice(
    index,
    1
  )


  applyCurrentDocumentFilters()


  updateDocumentSummary()


  refreshDocumentTable()

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeDocumentModal() {

  const modalContainer =
    document.querySelector(
      "#documentModalContainer"
    )


  if (modalContainer) {

    modalContainer.innerHTML =
      ""

  }


  document.removeEventListener(
    "keydown",
    handleDocumentEscape
  )

}


/* =========================================
   ESCAPE HANDLER
========================================= */

function handleDocumentEscape(
  event
) {

  if (
    event.key === "Escape"
  ) {

    closeDocumentModal()

  }

}


/* =========================================
   REFRESH TABLE
========================================= */

function refreshDocumentTable() {

  const tableBody =
    document.querySelector(
      "#documentsTableBody"
    )


  if (!tableBody) {
    return
  }


  tableBody.innerHTML =
    renderDocuments(
      currentDocuments
    )


  const resultText =
    document.querySelector(
      "#documentResultText"
    )


  if (resultText) {

    const count =
      currentDocuments.length


    resultText.textContent =
      `${count} ${
        count === 1
          ? "document"
          : "documents"
      } found`

  }

}


/* =========================================
   APPLY CURRENT FILTERS
========================================= */

function applyCurrentDocumentFilters() {

  const searchInput =
    document.querySelector(
      "#documentSearch"
    )


  const categoryFilter =
    document.querySelector(
      "#documentCategoryFilter"
    )


  const audienceFilter =
    document.querySelector(
      "#documentAudienceFilter"
    )


  const statusFilter =
    document.querySelector(
      "#documentStatusFilter"
    )


  const search =
    searchInput?.value
      ?.trim()
      .toLowerCase() || ""


  const category =
    categoryFilter?.value || "All"


  const audience =
    audienceFilter?.value || "All"


  const status =
    statusFilter?.value || "All"


  currentDocuments =
    documentsData.filter(
      doc => {

        const title =
          String(
            doc.title || ""
          ).toLowerCase()


        const description =
          String(
            doc.description || ""
          ).toLowerCase()


        const matchesSearch =
          !search ||
          title.includes(search) ||
          description.includes(search)


        const matchesCategory =
          category === "All" ||
          doc.category === category


        const matchesAudience =
          audience === "All" ||
          doc.audience === audience ||
          doc.audience === "All"


        const matchesStatus =
          status === "All" ||
          doc.status === status


        return (
          matchesSearch &&
          matchesCategory &&
          matchesAudience &&
          matchesStatus
        )

      }
    )

}


/* =========================================
   UPDATE SUMMARY
========================================= */

function updateDocumentSummary() {

  const total =
    document.querySelector(
      "#documentsTotalCount"
    )


  const published =
    document.querySelector(
      "#documentsPublishedCount"
    )


  const drafts =
    document.querySelector(
      "#documentsDraftCount"
    )


  const categories =
    document.querySelector(
      "#documentsCategoryCount"
    )


  if (total) {

    total.textContent =
      documentsData.length

  }


  if (published) {

    published.textContent =
      getPublishedCount()

  }


  if (drafts) {

    drafts.textContent =
      getDraftCount()

  }


  if (categories) {

    categories.textContent =
      getCategoryCount()

  }

}


/* =========================================
   SUMMARY HELPERS
========================================= */

function getPublishedCount() {

  return documentsData.filter(
    doc =>
      doc.status === "Published"
  ).length

}


function getDraftCount() {

  return documentsData.filter(
    doc =>
      doc.status === "Draft"
  ).length

}


function getCategoryCount() {

  return new Set(
    documentsData.map(
      doc => doc.category
    )
  ).size

}


/* =========================================
   SELECT OPTION HELPER
========================================= */

function documentOption(
  value,
  selectedValue,
  label = value
) {

  return `
    <option
      value="${escapeAttribute(value)}"
      ${
        String(value) ===
        String(selectedValue)
          ? "selected"
          : ""
      }
    >
      ${escapeHTML(label)}
    </option>
  `
}


/* =========================================
   FILE VALIDATION
========================================= */

function validateDocumentFile(
  file
) {

  if (!file) {

    return {
      valid: false,
      message: "Please select a file."
    }

  }


  const allowedExtensions = [
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "txt"
  ]


  const extension =
    getFileExtension(
      file.name
    ).toLowerCase()


  if (
    !allowedExtensions.includes(
      extension
    )
  ) {

    return {
      valid: false,
      message:
        "Unsupported file type. Please select a supported document or image file."
    }

  }


  /*
    Maximum frontend demo file size:
    20 MB
  */

  const maxSize =
    20 * 1024 * 1024


  if (
    file.size > maxSize
  ) {

    return {
      valid: false,
      message:
        "File size cannot exceed 20 MB."
    }

  }


  return {
    valid: true,
    message: ""
  }

}


/* =========================================
   GET FILE EXTENSION
========================================= */

function getFileExtension(
  fileName
) {

  const name =
    String(
      fileName || ""
    )


  const parts =
    name.split(".")


  if (
    parts.length < 2
  ) {

    return "FILE"

  }


  return parts
    .pop()
    .toUpperCase()

}


/* =========================================
   FORMAT FILE SIZE
========================================= */

function formatFileSize(
  bytes
) {

  const size =
    Number(bytes)


  if (
    !Number.isFinite(size) ||
    size <= 0
  ) {

    return "0 KB"

  }


  const units = [
    "Bytes",
    "KB",
    "MB",
    "GB"
  ]


  let index = 0

  let value = size


  while (
    value >= 1024 &&
    index <
      units.length - 1
  ) {

    value =
      value / 1024

    index++

  }


  if (index === 0) {

    return `${Math.round(value)} ${units[index]}`

  }


  return `${value.toFixed(1)} ${units[index]}`

}


/* =========================================
   CREATE DOCUMENT ID
========================================= */

function createDocumentId() {

  const ids =
    documentsData
      .map(
        doc => Number(doc.id)
      )
      .filter(
        id => Number.isFinite(id)
      )


  const highestId =
    ids.length
      ? Math.max(...ids)
      : 0


  return Math.max(
    highestId + 1,
    Date.now()
  )

}


/* =========================================
   TODAY DATE
========================================= */

function getTodayDate() {

  const date =
    new Date()


  const year =
    date.getFullYear()


  const month =
    String(
      date.getMonth() + 1
    ).padStart(
      2,
      "0"
    )


  const day =
    String(
      date.getDate()
    ).padStart(
      2,
      "0"
    )


  return `${year}-${month}-${day}`

}


/* =========================================
   DATE FORMAT
========================================= */

function formatDocumentDate(
  date
) {

  if (!date) {
    return "-"
  }


  const parsedDate =
    new Date(
      `${date}T00:00:00`
    )


  if (
    Number.isNaN(
      parsedDate.getTime()
    )
  ) {

    return escapeHTML(
      date
    )

  }


  return parsedDate.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  )

}


/* =========================================
   REVOKE OBJECT URL
========================================= */

function revokeDocumentUrl(
  url
) {

  if (
    typeof url !== "string" ||
    !url.startsWith("blob:")
  ) {
    return
  }


  try {

    URL.revokeObjectURL(
      url
    )

  } catch (error) {

    /*
      Ignore object URL cleanup errors.
    */

  }

}


/* =========================================
   SANITIZE FILE NAME
========================================= */

function sanitizeFileName(
  value
) {

  return String(
    value || "document"
  )
    .replace(
      /[<>:"/\\|?*]+/g,
      "_"
    )
    .trim()

}


/* =========================================
   HTML SECURITY HELPER
========================================= */

function escapeHTML(
  value
) {

  return String(
    value ?? ""
  )
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    )

}


/* =========================================
   ATTRIBUTE SECURITY HELPER
========================================= */

function escapeAttribute(
  value
) {

  return escapeHTML(
    value
  )

}