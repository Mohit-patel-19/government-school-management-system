/* =========================================
   TEACHER MESSAGES
   ========================================= */

const STORAGE_KEY = "teacher_messages";

let messages = [];
let currentMessageId = null;
let currentFolder = "inbox";


/* =========================================
   HELPERS
   ========================================= */

function loadMessages() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    messages = saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load teacher messages:", error);
    messages = [];
  }

  if (!Array.isArray(messages)) {
    messages = [];
  }
}

function saveMessages() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

function generateId() {
  return Date.now().toString() + Math.random().toString(36).slice(2, 8);
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
  if (!dateValue) return "";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return escapeHTML(dateValue);
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function formatDateTime(dateValue) {
  if (!dateValue) return "";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return escapeHTML(dateValue);
  }

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getCurrentUser() {
  return localStorage.getItem("teacherName") || "Teacher";
}


/* =========================================
   SAMPLE DATA
   ========================================= */

function createSampleMessages() {
  if (messages.length > 0) return;

  const now = Date.now();

  messages = [
    {
      id: generateId(),
      sender: "Principal",
      senderRole: "Admin",
      recipient: "Teacher",
      recipientRole: "Teacher",
      subject: "Staff Meeting",
      message:
        "All teachers are requested to attend the staff meeting tomorrow at 10:00 AM in the conference room.",
      date: new Date(now - 86400000).toISOString(),
      folder: "inbox",
      read: false,
      important: true
    },

    {
      id: generateId(),
      sender: "Parent - Rahul Sharma",
      senderRole: "Parent",
      recipient: "Teacher",
      recipientRole: "Teacher",
      subject: "Regarding Student Attendance",
      message:
        "I would like to discuss my child's recent attendance record. Please let me know a suitable time to talk.",
      date: new Date(now - 172800000).toISOString(),
      folder: "inbox",
      read: true,
      important: false
    },

    {
      id: generateId(),
      sender: "Teacher",
      senderRole: "Teacher",
      recipient: "Parent - Priya Singh",
      recipientRole: "Parent",
      subject: "Assignment Reminder",
      message:
        "Please remind your child to complete and submit the pending mathematics assignment.",
      date: new Date(now - 259200000).toISOString(),
      folder: "sent",
      read: true,
      important: false
    }
  ];

  saveMessages();
}


/* =========================================
   MAIN PAGE
   ========================================= */

export function TeacherMessages() {
  loadMessages();
  createSampleMessages();

  return `
    <div class="teacher-messages-page">

      <div class="tm-header">

        <div class="tm-header-left">

          <div class="tm-title-icon">
            💬
          </div>

          <div>
            <h1>Messages</h1>
            <p>
              Communicate with students, parents and school staff
            </p>
          </div>

        </div>


        <div class="tm-header-actions">

          <button
            class="tm-btn tm-btn-primary"
            data-tm-action="compose"
          >
            ✉️ Compose Message
          </button>

          <button
            class="tm-btn tm-btn-secondary"
            data-tm-action="back"
          >
            ← Back to Dashboard
          </button>

        </div>

      </div>


      <div class="tm-stats">

        <div class="tm-stat-card">

          <div class="tm-stat-icon">
            📥
          </div>

          <div>
            <span>Inbox</span>
            <strong>${getInboxCount()}</strong>
          </div>

        </div>


        <div class="tm-stat-card">

          <div class="tm-stat-icon">
            📤
          </div>

          <div>
            <span>Sent</span>
            <strong>${getSentCount()}</strong>
          </div>

        </div>


        <div class="tm-stat-card">

          <div class="tm-stat-icon">
            🔵
          </div>

          <div>
            <span>Unread</span>
            <strong>${getUnreadCount()}</strong>
          </div>

        </div>


        <div class="tm-stat-card">

          <div class="tm-stat-icon">
            ⭐
          </div>

          <div>
            <span>Important</span>
            <strong>${getImportantCount()}</strong>
          </div>

        </div>

      </div>


      <div class="tm-layout">


        <aside class="tm-sidebar">

          <button
            class="tm-folder-btn ${currentFolder === "inbox" ? "active" : ""}"
            data-tm-action="folder"
            data-folder="inbox"
          >
            <span>📥</span>
            <span>Inbox</span>
            <b>${getInboxCount()}</b>
          </button>


          <button
            class="tm-folder-btn ${currentFolder === "sent" ? "active" : ""}"
            data-tm-action="folder"
            data-folder="sent"
          >
            <span>📤</span>
            <span>Sent</span>
            <b>${getSentCount()}</b>
          </button>


          <button
            class="tm-folder-btn ${currentFolder === "important" ? "active" : ""}"
            data-tm-action="folder"
            data-folder="important"
          >
            <span>⭐</span>
            <span>Important</span>
            <b>${getImportantCount()}</b>
          </button>


          <div class="tm-sidebar-divider"></div>


          <button
            class="tm-compose-side"
            data-tm-action="compose"
          >
            ✉️ New Message
          </button>

        </aside>


        <main class="tm-main">

          <div class="tm-toolbar">

            <div class="tm-search">

              <span>🔎</span>

              <input
                type="text"
                id="tmSearchInput"
                placeholder="Search messages..."
              />

            </div>


            <select
              id="tmStatusFilter"
              class="tm-filter"
            >

              <option value="all">
                All Messages
              </option>

              <option value="unread">
                Unread
              </option>

              <option value="read">
                Read
              </option>

            </select>


            <select
              id="tmImportantFilter"
              class="tm-filter"
            >

              <option value="all">
                All
              </option>

              <option value="important">
                Important
              </option>

              <option value="normal">
                Normal
              </option>

            </select>

          </div>


          <div
            class="tm-list"
            id="tmMessageList"
          >
            ${renderMessageList()}
          </div>

        </main>

      </div>

    </div>
  `;
}


/* =========================================
   MESSAGE COUNTS
   ========================================= */

function getInboxCount() {
  return messages.filter(
    message => message.folder === "inbox"
  ).length;
}

function getSentCount() {
  return messages.filter(
    message => message.folder === "sent"
  ).length;
}

function getUnreadCount() {
  return messages.filter(
    message =>
      message.folder === "inbox" &&
      !message.read
  ).length;
}

function getImportantCount() {
  return messages.filter(
    message => message.important
  ).length;
}


/* =========================================
   RENDER MESSAGE LIST
   ========================================= */

function renderMessageList() {
  let filtered = [...messages];

  if (currentFolder === "inbox") {
    filtered = filtered.filter(
      message => message.folder === "inbox"
    );
  }

  if (currentFolder === "sent") {
    filtered = filtered.filter(
      message => message.folder === "sent"
    );
  }

  if (currentFolder === "important") {
    filtered = filtered.filter(
      message => message.important
    );
  }

  filtered.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  if (filtered.length === 0) {
    return `
      <div class="tm-empty">

        <div class="tm-empty-icon">
          📭
        </div>

        <h3>
          No messages found
        </h3>

        <p>
          There are no messages in this folder.
        </p>

        <button
          class="tm-btn tm-btn-primary"
          data-tm-action="compose"
        >
          ✉️ Compose Message
        </button>

      </div>
    `;
  }

  return filtered
    .map(message => renderMessageCard(message))
    .join("");
}


/* =========================================
   MESSAGE CARD
   ========================================= */

function renderMessageCard(message) {
  const isSent = message.folder === "sent";

  const person = isSent
    ? message.recipient
    : message.sender;

  const role = isSent
    ? message.recipientRole
    : message.senderRole;

  return `
    <div
      class="tm-message-card ${message.read ? "read" : "unread"}"
      data-message-id="${escapeHTML(message.id)}"
    >

      <div class="tm-message-check">

        <input
          type="checkbox"
          data-tm-select="${escapeHTML(message.id)}"
        />

      </div>


      <div class="tm-message-avatar">
        ${isSent ? "📤" : "👤"}
      </div>


      <div class="tm-message-content">

        <div class="tm-message-top">

          <div class="tm-message-person">

            <strong>
              ${escapeHTML(person)}
            </strong>

            <span>
              ${escapeHTML(role)}
            </span>

          </div>


          <div class="tm-message-date">
            ${formatDateTime(message.date)}
          </div>

        </div>


        <div class="tm-message-subject">

          ${
            message.important
              ? `<span class="tm-important">⭐</span>`
              : ""
          }

          ${
            !message.read && !isSent
              ? `<span class="tm-unread-dot"></span>`
              : ""
          }

          ${escapeHTML(message.subject)}

        </div>


        <p class="tm-message-preview">
          ${escapeHTML(message.message)}
        </p>


        <div class="tm-message-actions">

          <button
            class="tm-small-btn"
            data-tm-action="view"
            data-id="${escapeHTML(message.id)}"
          >
            👁️ View
          </button>


          ${
            !isSent
              ? `
                <button
                  class="tm-small-btn"
                  data-tm-action="reply"
                  data-id="${escapeHTML(message.id)}"
                >
                  ↩️ Reply
                </button>
              `
              : ""
          }


          <button
            class="tm-small-btn tm-danger-btn"
            data-tm-action="delete"
            data-id="${escapeHTML(message.id)}"
          >
            🗑️ Delete
          </button>

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   VIEW MESSAGE
   ========================================= */

function viewMessage(id) {
  const message = messages.find(
    item => item.id === id
  );

  if (!message) return;

  currentMessageId = id;

  if (
    message.folder === "inbox" &&
    !message.read
  ) {
    message.read = true;
    saveMessages();
  }

  const container = document.querySelector(
    ".teacher-messages-page"
  );

  if (!container) return;

  const isSent = message.folder === "sent";

  const person = isSent
    ? message.recipient
    : message.sender;

  const role = isSent
    ? message.recipientRole
    : message.senderRole;

  container.innerHTML = `
    <div class="tm-detail-page">

      <div class="tm-detail-header">

        <button
          class="tm-btn tm-btn-secondary"
          data-tm-action="close-view"
        >
          ← Back to Messages
        </button>


        <div class="tm-detail-actions">

          ${
            !isSent
              ? `
                <button
                  class="tm-btn tm-btn-primary"
                  data-tm-action="reply"
                  data-id="${escapeHTML(message.id)}"
                >
                  ↩️ Reply
                </button>
              `
              : ""
          }


          <button
            class="tm-btn tm-btn-danger"
            data-tm-action="delete"
            data-id="${escapeHTML(message.id)}"
          >
            🗑️ Delete
          </button>

        </div>

      </div>


      <div class="tm-detail-card">

        <div class="tm-detail-subject-row">

          <div>

            ${
              message.important
                ? `<span class="tm-detail-important">⭐ Important</span>`
                : ""
            }

            <h1>
              ${escapeHTML(message.subject)}
            </h1>

          </div>

        </div>


        <div class="tm-detail-person">

          <div class="tm-detail-avatar">
            ${isSent ? "📤" : "👤"}
          </div>


          <div>

            <strong>
              ${escapeHTML(person)}
            </strong>

            <span>
              ${escapeHTML(role)}
            </span>

            <small>
              ${formatDateTime(message.date)}
            </small>

          </div>

        </div>


        <div class="tm-detail-body">
          ${escapeHTML(message.message).replace(/\n/g, "<br>")}
        </div>


        <div class="tm-detail-footer">

          <span>
            ${isSent ? "📤 Sent message" : "📥 Received message"}
          </span>


          ${
            message.important
              ? `<span>⭐ Important</span>`
              : ""
          }

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   COMPOSE MESSAGE
   ========================================= */

function showComposeForm(replyMessage = null) {
  const container = document.querySelector(
    ".teacher-messages-page"
  );

  if (!container) return;

  let defaultRecipient = "";
  let defaultSubject = "";

  if (replyMessage) {

    defaultRecipient =
      replyMessage.sender || "";

    defaultSubject =
      replyMessage.subject
        ? `Re: ${replyMessage.subject}`
        : "";
  }

  container.innerHTML = `
    <div class="tm-compose-page">

      <div class="tm-compose-header">

        <div>

          <h1>
            ✉️ Compose Message
          </h1>

          <p>
            Send a message to a student, parent or staff member.
          </p>

        </div>


        <button
          class="tm-btn tm-btn-secondary"
          data-tm-action="close-compose"
        >
          ← Back to Messages
        </button>

      </div>


      <form
        id="tmComposeForm"
        class="tm-compose-card"
      >

        <div class="tm-form-row">


          <div class="tm-form-group">

            <label for="tmRecipient">
              Recipient *
            </label>


            <select
              id="tmRecipient"
              name="recipient"
              required
            >

              <option value="">
                Select Recipient
              </option>


              <optgroup label="Students">

                <option
                  value="Student - Rahul Sharma"
                  ${
                    defaultRecipient ===
                    "Student - Rahul Sharma"
                      ? "selected"
                      : ""
                  }
                >
                  Student - Rahul Sharma
                </option>


                <option
                  value="Student - Priya Singh"
                  ${
                    defaultRecipient ===
                    "Student - Priya Singh"
                      ? "selected"
                      : ""
                  }
                >
                  Student - Priya Singh
                </option>


                <option
                  value="Student - Aman Kumar"
                  ${
                    defaultRecipient ===
                    "Student - Aman Kumar"
                      ? "selected"
                      : ""
                  }
                >
                  Student - Aman Kumar
                </option>

              </optgroup>


              <optgroup label="Parents">

                <option
                  value="Parent - Rahul Sharma"
                  ${
                    defaultRecipient ===
                    "Parent - Rahul Sharma"
                      ? "selected"
                      : ""
                  }
                >
                  Parent - Rahul Sharma
                </option>


                <option
                  value="Parent - Priya Singh"
                  ${
                    defaultRecipient ===
                    "Parent - Priya Singh"
                      ? "selected"
                      : ""
                  }
                >
                  Parent - Priya Singh
                </option>


                <option
                  value="Parent - Aman Kumar"
                  ${
                    defaultRecipient ===
                    "Parent - Aman Kumar"
                      ? "selected"
                      : ""
                  }
                >
                  Parent - Aman Kumar
                </option>

              </optgroup>


              <optgroup label="School Staff">

                <option
                  value="Principal"
                  ${
                    defaultRecipient === "Principal"
                      ? "selected"
                      : ""
                  }
                >
                  Principal
                </option>


                <option
                  value="Vice Principal"
                  ${
                    defaultRecipient ===
                    "Vice Principal"
                      ? "selected"
                      : ""
                  }
                >
                  Vice Principal
                </option>


                <option
                  value="Class Teacher"
                  ${
                    defaultRecipient ===
                    "Class Teacher"
                      ? "selected"
                      : ""
                  }
                >
                  Class Teacher
                </option>

              </optgroup>

            </select>

          </div>


          <div class="tm-form-group">

            <label for="tmMessageCategory">
              Category
            </label>


            <select
              id="tmMessageCategory"
              name="category"
            >

              <option value="General">
                General
              </option>

              <option value="Academic">
                Academic
              </option>

              <option value="Attendance">
                Attendance
              </option>

              <option value="Assignment">
                Assignment
              </option>

              <option value="Exam">
                Exam
              </option>

              <option value="Important">
                Important
              </option>

            </select>

          </div>

        </div>


        <div class="tm-form-group">

          <label for="tmSubject">
            Subject *
          </label>


          <input
            type="text"
            id="tmSubject"
            name="subject"
            value="${escapeHTML(defaultSubject)}"
            placeholder="Enter message subject"
            maxlength="150"
            required
          />

        </div>


        <div class="tm-form-group">

          <label for="tmMessage">
            Message *
          </label>


          <textarea
            id="tmMessage"
            name="message"
            rows="9"
            placeholder="Write your message here..."
            required
          ></textarea>

        </div>


        <div class="tm-compose-options">

          <label class="tm-checkbox-label">

            <input
              type="checkbox"
              id="tmImportant"
              name="important"
            />

            <span>
              ⭐ Mark as important
            </span>

          </label>

        </div>


        <div class="tm-form-actions">

          <button
            type="button"
            class="tm-btn tm-btn-secondary"
            data-tm-action="close-compose"
          >
            Cancel
          </button>


          <button
            type="submit"
            class="tm-btn tm-btn-primary"
          >
            📤 Send Message
          </button>

        </div>

      </form>

    </div>
  `;


  const form =
    document.querySelector("#tmComposeForm");

  if (form) {
    form.addEventListener(
      "submit",
      handleComposeSubmit
    );
  }
}


/* =========================================
   SEND MESSAGE
   ========================================= */

function handleComposeSubmit(event) {
  event.preventDefault();

  const formData =
    new FormData(event.target);

  const recipient =
    String(
      formData.get("recipient") || ""
    ).trim();

  const subject =
    String(
      formData.get("subject") || ""
    ).trim();

  const messageText =
    String(
      formData.get("message") || ""
    ).trim();

  const important =
    formData.get("important") === "on";


  if (
    !recipient ||
    !subject ||
    !messageText
  ) {
    alert(
      "Please fill all required fields."
    );

    return;
  }


  let recipientRole = "User";


  if (recipient.startsWith("Student")) {

    recipientRole = "Student";

  } else if (
    recipient.startsWith("Parent")
  ) {

    recipientRole = "Parent";

  } else {

    recipientRole = "Staff";

  }


  const newMessage = {

    id: generateId(),

    sender: getCurrentUser(),

    senderRole: "Teacher",

    recipient,

    recipientRole,

    subject,

    message: messageText,

    date: new Date().toISOString(),

    folder: "sent",

    read: true,

    important

  };


  messages.unshift(newMessage);

  saveMessages();

  alert(
    "Message sent successfully."
  );


  currentFolder = "sent";


  const page =
    document.querySelector(
      ".teacher-messages-page"
    );


  if (page) {

    page.outerHTML =
      TeacherMessages();

    bindMessageEvents();

  }
}


/* =========================================
   DELETE MESSAGE
   ========================================= */

function deleteMessage(id) {

  const message =
    messages.find(
      item => item.id === id
    );


  if (!message) return;


  const confirmed =
    confirm(
      `Delete "${message.subject}"?`
    );


  if (!confirmed) return;


  messages =
    messages.filter(
      item => item.id !== id
    );


  saveMessages();

  currentMessageId = null;


  const page =
    document.querySelector(
      ".teacher-messages-page"
    );


  if (page) {

    page.outerHTML =
      TeacherMessages();

    bindMessageEvents();

  }
}


/* =========================================
   FOLDER
   ========================================= */

function changeFolder(folder) {

  currentFolder = folder;


  const page =
    document.querySelector(
      ".teacher-messages-page"
    );


  if (!page) return;


  page.outerHTML =
    TeacherMessages();

  bindMessageEvents();
}


/* =========================================
   SEARCH + FILTER
   ========================================= */

function applyFilters() {

  const searchInput =
    document.querySelector(
      "#tmSearchInput"
    );

  const statusFilter =
    document.querySelector(
      "#tmStatusFilter"
    );

  const importantFilter =
    document.querySelector(
      "#tmImportantFilter"
    );

  const list =
    document.querySelector(
      "#tmMessageList"
    );


  if (!list) return;


  let filtered =
    [...messages];


  if (currentFolder === "inbox") {

    filtered =
      filtered.filter(
        message =>
          message.folder === "inbox"
      );

  }


  if (currentFolder === "sent") {

    filtered =
      filtered.filter(
        message =>
          message.folder === "sent"
      );

  }


  if (currentFolder === "important") {

    filtered =
      filtered.filter(
        message =>
          message.important
      );

  }


  const search =
    searchInput?.value
      ?.toLowerCase()
      .trim() || "";


  if (search) {

    filtered =
      filtered.filter(
        message => {

          return (

            message.subject
              ?.toLowerCase()
              .includes(search) ||

            message.message
              ?.toLowerCase()
              .includes(search) ||

            message.sender
              ?.toLowerCase()
              .includes(search) ||

            message.recipient
              ?.toLowerCase()
              .includes(search)

          );

        }
      );

  }


  if (
    statusFilter?.value ===
    "unread"
  ) {

    filtered =
      filtered.filter(
        message =>
          message.folder === "inbox" &&
          !message.read
      );

  }


  if (
    statusFilter?.value ===
    "read"
  ) {

    filtered =
      filtered.filter(
        message =>
          message.read
      );

  }


  if (
    importantFilter?.value ===
    "important"
  ) {

    filtered =
      filtered.filter(
        message =>
          message.important
      );

  }


  if (
    importantFilter?.value ===
    "normal"
  ) {

    filtered =
      filtered.filter(
        message =>
          !message.important
      );

  }


  filtered.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );


  if (filtered.length === 0) {

    list.innerHTML = `

      <div class="tm-empty">

        <div class="tm-empty-icon">
          🔎
        </div>

        <h3>
          No matching messages
        </h3>

        <p>
          Try changing your search or filters.
        </p>

      </div>

    `;

    return;
  }


  list.innerHTML =
    filtered
      .map(
        message =>
          renderMessageCard(message)
      )
      .join("");
}


/* =========================================
   EVENT BINDING
   ========================================= */

function bindMessageEvents() {

  const page =
    document.querySelector(
      ".teacher-messages-page"
    );


  if (!page) return;


  page.addEventListener(
    "click",
    handleMessageClick
  );


  const searchInput =
    page.querySelector(
      "#tmSearchInput"
    );


  const statusFilter =
    page.querySelector(
      "#tmStatusFilter"
    );


  const importantFilter =
    page.querySelector(
      "#tmImportantFilter"
    );


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      applyFilters
    );

  }


  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      applyFilters
    );

  }


  if (importantFilter) {

    importantFilter.addEventListener(
      "change",
      applyFilters
    );

  }
}


/* =========================================
   CLICK HANDLER
   ========================================= */

function handleMessageClick(event) {

  const actionElement =
    event.target.closest(
      "[data-tm-action]"
    );


  if (!actionElement) return;


  const action =
    actionElement.dataset.tmAction;


  const id =
    actionElement.dataset.id;


  switch (action) {


    case "compose":

      showComposeForm();

      break;


    case "view":

      viewMessage(id);

      break;


    case "delete":

      deleteMessage(id);

      break;


    case "reply": {

      const message =
        messages.find(
          item => item.id === id
        );


      if (message) {
        showComposeForm(message);
      }


      break;
    }


    case "folder":

      changeFolder(
        actionElement.dataset.folder
      );

      break;


    case "close-view": {

      const page =
        document.querySelector(
          ".teacher-messages-page"
        );


      if (page) {

        page.outerHTML =
          TeacherMessages();

        bindMessageEvents();

      }


      break;
    }


    case "close-compose": {

      const page =
        document.querySelector(
          ".teacher-messages-page"
        );


      if (page) {

        page.outerHTML =
          TeacherMessages();

        bindMessageEvents();

      }


      break;
    }


    /* =====================================
       FIXED BACK TO DASHBOARD
       ===================================== */

    case "back":

      if (
        typeof window.navigateTeacherPage ===
        "function"
      ) {

        window.navigateTeacherPage(
          "dashboard"
        );

      }

      break;


    default:

      break;
  }
}


/* =========================================
   SETUP
   ========================================= */

export function setupTeacherMessages() {

  loadMessages();

  createSampleMessages();

  bindMessageEvents();
}