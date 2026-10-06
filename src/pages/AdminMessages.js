/* =========================================
   ADMIN MESSAGES MODULE
========================================= */

import "./AdminMessages.css";

/* =========================================
   DATABASE CONFIGURATION
========================================= */

const DB_NAME = "GovernmentSchoolAdminMessagesDB";
const DB_VERSION = 1;
const STORE_NAME = "messages";

let currentFolder = "inbox";
let currentSearch = "";
let currentFilter = "all";
let selectedMessageId = null;

/* =========================================
   SAMPLE MESSAGES
========================================= */

const DEFAULT_MESSAGES = [
  {
    id: 1,
    sender: "Rajesh Kumar",
    senderRole: "Teacher",
    receiver: "Administrator",
    receiverRole: "Admin",
    subject: "Class 10 A Attendance",
    message:
      "Class 10 A attendance has been updated for today. Please review the attendance report.",
    date: "2026-09-08T09:30:00",
    read: false,
    important: true,
    folder: "inbox",
    attachment: null,
    replyTo: null
  },
  {
    id: 2,
    sender: "Sunita Sharma",
    senderRole: "Parent",
    receiver: "Administrator",
    receiverRole: "Admin",
    subject: "Student Meeting Request",
    message:
      "I would like to discuss my child's academic progress. Please let me know a suitable time for a meeting.",
    date: "2026-09-08T08:15:00",
    read: false,
    important: false,
    folder: "inbox",
    attachment: null,
    replyTo: null
  },
  {
    id: 3,
    sender: "Administrator",
    senderRole: "Admin",
    receiver: "All Teachers",
    receiverRole: "Teacher",
    subject: "Staff Meeting",
    message:
      "A staff meeting will be conducted tomorrow at 11:00 AM in the school meeting room.",
    date: "2026-09-07T16:00:00",
    read: true,
    important: true,
    folder: "sent",
    attachment: null,
    replyTo: null
  },
  {
    id: 4,
    sender: "Administrator",
    senderRole: "Admin",
    receiver: "Class 10 A Parents",
    receiverRole: "Parent",
    subject: "Parent Teacher Meeting",
    message:
      "The Parent Teacher Meeting will be held this Saturday. All parents are requested to attend.",
    date: "2026-09-06T12:00:00",
    read: true,
    important: false,
    folder: "sent",
    attachment: null,
    replyTo: null
  }
];

/* =========================================
   INDEXED DB
========================================= */

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("IndexedDB is not supported by this browser."));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true
        });

        store.createIndex("folder", "folder", {
          unique: false
        });

        store.createIndex("date", "date", {
          unique: false
        });

        store.createIndex("important", "important", {
          unique: false
        });
      }
    };

    request.onsuccess = function () {
      resolve(request.result);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

/* =========================================
   GET ALL MESSAGES
========================================= */

async function getAllMessages() {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      STORE_NAME,
      "readonly"
    );

    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = function () {
      resolve(request.result || []);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

/* =========================================
   ADD MESSAGE
========================================= */

async function addMessage(message) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      STORE_NAME,
      "readwrite"
    );

    const store = transaction.objectStore(STORE_NAME);

    const request = store.add(message);

    request.onsuccess = function () {
      resolve(request.result);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

/* =========================================
   UPDATE MESSAGE
========================================= */

async function updateMessage(message) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      STORE_NAME,
      "readwrite"
    );

    const store = transaction.objectStore(STORE_NAME);

    const request = store.put(message);

    request.onsuccess = function () {
      resolve(true);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

/* =========================================
   DELETE MESSAGE
========================================= */

async function deleteMessage(messageId) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      STORE_NAME,
      "readwrite"
    );

    const store = transaction.objectStore(STORE_NAME);

    const request = store.delete(Number(messageId));

    request.onsuccess = function () {
      resolve(true);
    };

    request.onerror = function () {
      reject(request.error);
    };
  });
}

/* =========================================
   INITIALIZE DEFAULT DATA
========================================= */

async function initializeMessages() {
  const messages = await getAllMessages();

  if (messages.length > 0) {
    return;
  }

  for (const message of DEFAULT_MESSAGES) {
    await addMessage({
      ...message,
      id: undefined
    });
  }
}

/* =========================================
   FORMAT DATE
========================================= */

function formatMessageDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

/* =========================================
   ESCAPE HTML
========================================= */

function escapeHtml(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================
   GET INITIALS
========================================= */

function getInitials(name) {
  if (!name) {
    return "A";
  }

  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }

  return (
    parts[0].charAt(0) +
    parts[parts.length - 1].charAt(0)
  ).toUpperCase();
}

/* =========================================
   GET ROLE CLASS
========================================= */

function getRoleClass(role) {
  const value = String(role || "").toLowerCase();

  if (value.includes("teacher")) {
    return "teacher";
  }

  if (value.includes("parent")) {
    return "parent";
  }

  if (value.includes("student")) {
    return "student";
  }

  return "admin";
}

/* =========================================
   GET FILTERED MESSAGES
========================================= */

async function getFilteredMessages() {
  const messages = await getAllMessages();

  let filtered = [...messages];

  if (currentFolder === "important") {
    filtered = filtered.filter(
      (message) => message.important === true
    );
  } else if (currentFolder === "trash") {
    filtered = filtered.filter(
      (message) => message.folder === "trash"
    );
  } else {
    filtered = filtered.filter(
      (message) => message.folder === currentFolder
    );
  }

  if (currentFilter !== "all") {
    if (currentFilter === "unread") {
      filtered = filtered.filter(
        (message) => message.read === false
      );
    }

    if (currentFilter === "read") {
      filtered = filtered.filter(
        (message) => message.read === true
      );
    }

    if (
      currentFilter === "student" ||
      currentFilter === "teacher" ||
      currentFilter === "parent"
    ) {
      filtered = filtered.filter((message) => {
        const role = String(
          currentFolder === "sent"
            ? message.receiverRole
            : message.senderRole
        ).toLowerCase();

        return role.includes(currentFilter);
      });
    }
  }

  if (currentSearch.trim()) {
    const search = currentSearch
      .trim()
      .toLowerCase();

    filtered = filtered.filter((message) => {
      return (
        String(message.sender || "")
          .toLowerCase()
          .includes(search) ||
        String(message.receiver || "")
          .toLowerCase()
          .includes(search) ||
        String(message.subject || "")
          .toLowerCase()
          .includes(search) ||
        String(message.message || "")
          .toLowerCase()
          .includes(search)
      );
    });
  }

  filtered.sort((a, b) => {
    return (
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
    );
  });

  return filtered;
}

/* =========================================
   GET COUNTS
========================================= */

async function getMessageCounts() {
  const messages = await getAllMessages();

  return {
    inbox: messages.filter(
      (message) => message.folder === "inbox"
    ).length,

    sent: messages.filter(
      (message) => message.folder === "sent"
    ).length,

    unread: messages.filter(
      (message) =>
        message.folder === "inbox" &&
        message.read === false
    ).length,

    important: messages.filter(
      (message) => message.important === true
    ).length,

    trash: messages.filter(
      (message) => message.folder === "trash"
    ).length
  };
}

/* =========================================
   MESSAGE ROW
========================================= */

function createMessageRow(message) {
  const role =
    currentFolder === "sent"
      ? message.receiverRole
      : message.senderRole;

  const person =
    currentFolder === "sent"
      ? message.receiver
      : message.sender;

  const isUnread =
    message.read === false &&
    currentFolder === "inbox";

  const roleClass = getRoleClass(role);

  return `
    <div
      class="admin-message-row ${
        isUnread ? "message-unread" : ""
      }"
      data-message-id="${message.id}"
    >

      <div class="message-row-check">
        <input
          type="checkbox"
          class="message-select-checkbox"
          data-message-id="${message.id}"
        />
      </div>

      <button
        type="button"
        class="message-star-button ${
          message.important ? "active" : ""
        }"
        data-action="toggle-important"
        data-message-id="${message.id}"
        title="Important"
      >
        ${message.important ? "★" : "☆"}
      </button>

      <button
        type="button"
        class="message-person"
        data-action="open-message"
        data-message-id="${message.id}"
      >

        <span class="message-avatar ${roleClass}">
          ${escapeHtml(getInitials(person))}
        </span>

        <span class="message-person-info">
          <strong>
            ${escapeHtml(person)}
          </strong>

          <small>
            ${escapeHtml(role)}
          </small>
        </span>

      </button>

      <button
        type="button"
        class="message-content"
        data-action="open-message"
        data-message-id="${message.id}"
      >

        <strong>
          ${escapeHtml(message.subject)}
        </strong>

        <span>
          ${escapeHtml(message.message)}
        </span>

        ${
          message.attachment
            ? `
              <small class="message-attachment-label">
                📎 ${escapeHtml(
                  message.attachment.name
                )}
              </small>
            `
            : ""
        }

      </button>

      <div class="message-date">
        ${escapeHtml(
          formatMessageDate(message.date)
        )}
      </div>

      <button
        type="button"
        class="message-delete-button"
        data-action="delete-message"
        data-message-id="${message.id}"
        title="Delete"
      >
        🗑️
      </button>

    </div>
  `;
}

/* =========================================
   MESSAGE EMPTY STATE
========================================= */

function createEmptyState() {
  let title = "No messages found";
  let text = "There are no messages in this section.";

  if (currentFolder === "inbox") {
    title = "Inbox is empty";
    text = "You do not have any received messages.";
  }

  if (currentFolder === "sent") {
    title = "No sent messages";
    text = "Messages you send will appear here.";
  }

  if (currentFolder === "important") {
    title = "No important messages";
    text = "Important messages will appear here.";
  }

  if (currentFolder === "trash") {
    title = "Trash is empty";
    text = "Deleted messages will appear here.";
  }

  return `
    <div class="messages-empty-state">

      <div class="messages-empty-icon">
        💬
      </div>

      <h3>
        ${escapeHtml(title)}
      </h3>

      <p>
        ${escapeHtml(text)}
      </p>

    </div>
  `;
}

/* =========================================
   RENDER MESSAGE LIST
========================================= */

async function renderMessageList() {
  const list = document.querySelector(
    "#admin-message-list"
  );

  if (!list) {
    return;
  }

  try {
    const messages =
      await getFilteredMessages();

    if (messages.length === 0) {
      list.innerHTML = createEmptyState();
    } else {
      list.innerHTML = messages
        .map(createMessageRow)
        .join("");
    }

    await updateMessageCounts();
  } catch (error) {
    console.error(
      "Message list rendering error:",
      error
    );

    list.innerHTML = `
      <div class="messages-error-state">
        Unable to load messages.
      </div>
    `;
  }
}

/* =========================================
   UPDATE SIDEBAR COUNTS
========================================= */

async function updateMessageCounts() {
  const counts = await getMessageCounts();

  const inboxCount =
    document.querySelector(
      "#message-inbox-count"
    );

  const sentCount =
    document.querySelector(
      "#message-sent-count"
    );

  const importantCount =
    document.querySelector(
      "#message-important-count"
    );

  const trashCount =
    document.querySelector(
      "#message-trash-count"
    );

  const unreadCount =
    document.querySelector(
      "#message-unread-count"
    );

  if (inboxCount) {
    inboxCount.textContent = counts.inbox;
  }

  if (sentCount) {
    sentCount.textContent = counts.sent;
  }

  if (importantCount) {
    importantCount.textContent =
      counts.important;
  }

  if (trashCount) {
    trashCount.textContent = counts.trash;
  }

  if (unreadCount) {
    unreadCount.textContent = counts.unread;

    unreadCount.style.display =
      counts.unread > 0
        ? "inline-flex"
        : "none";
  }
}

/* =========================================
   UPDATE ACTIVE FOLDER
========================================= */

function updateActiveFolder() {
  const buttons = document.querySelectorAll(
    "[data-message-folder]"
  );

  buttons.forEach((button) => {
    const folder =
      button.dataset.messageFolder;

    button.classList.toggle(
      "active",
      folder === currentFolder
    );
  });
}

/* =========================================
   OPEN MESSAGE
========================================= */

async function openMessage(messageId) {
  const messages = await getAllMessages();

  const message = messages.find(
    (item) =>
      Number(item.id) === Number(messageId)
  );

  if (!message) {
    return;
  }

  selectedMessageId = message.id;

  if (
    message.folder === "inbox" &&
    message.read === false
  ) {
    message.read = true;

    await updateMessage(message);
  }

  const modal =
    document.querySelector(
      "#admin-message-modal"
    );

  const modalBody =
    document.querySelector(
      "#admin-message-modal-body"
    );

  if (!modal || !modalBody) {
    return;
  }

  const senderRoleClass =
    getRoleClass(message.senderRole);

  const attachmentHtml =
    message.attachment
      ? `
        <div class="message-detail-attachment">

          <div class="attachment-info">
            <span class="attachment-icon">
              📎
            </span>

            <div>
              <strong>
                ${escapeHtml(
                  message.attachment.name
                )}
              </strong>

              <small>
                ${escapeHtml(
                  message.attachment.type ||
                    "File"
                )}
              </small>
            </div>
          </div>

          <button
            type="button"
            class="message-attachment-download"
            data-action="download-attachment"
            data-message-id="${message.id}"
          >
            Download
          </button>

        </div>
      `
      : "";

  modalBody.innerHTML = `
    <div class="message-detail">

      <div class="message-detail-header">

        <div class="message-detail-person">

          <span class="message-detail-avatar ${senderRoleClass}">
            ${escapeHtml(
              getInitials(message.sender)
            )}
          </span>

          <div>
            <h3>
              ${escapeHtml(
                message.sender
              )}
            </h3>

            <span>
              ${escapeHtml(
                message.senderRole
              )}
            </span>
          </div>

        </div>

        <div class="message-detail-date">
          ${escapeHtml(
            formatMessageDate(
              message.date
            )
          )}
        </div>

      </div>

      <div class="message-detail-meta">

        <div>
          <span>To</span>
          <strong>
            ${escapeHtml(
              message.receiver
            )}
          </strong>
        </div>

        <div>
          <span>Subject</span>
          <strong>
            ${escapeHtml(
              message.subject
            )}
          </strong>
        </div>

      </div>

      <div class="message-detail-content">
        ${escapeHtml(
          message.message
        ).replace(/\n/g, "<br />")}
      </div>

      ${attachmentHtml}

      <div class="message-detail-actions">

        ${
          message.folder === "inbox"
            ? `
              <button
                type="button"
                class="admin-message-action primary"
                data-action="reply-message"
                data-message-id="${message.id}"
              >
                ↩️ Reply
              </button>
            `
            : ""
        }

        <button
          type="button"
          class="admin-message-action"
          data-action="toggle-important"
          data-message-id="${message.id}"
        >
          ${
            message.important
              ? "★ Remove Important"
              : "☆ Mark Important"
          }
        </button>

        <button
          type="button"
          class="admin-message-action danger"
          data-action="delete-message"
          data-message-id="${message.id}"
        >
          🗑️ Delete
        </button>

      </div>

    </div>
  `;

  modal.classList.add("open");

  await renderMessageList();
}

/* =========================================
   CLOSE MESSAGE MODAL
========================================= */

function closeMessageModal() {
  const modal =
    document.querySelector(
      "#admin-message-modal"
    );

  if (modal) {
    modal.classList.remove("open");
  }

  selectedMessageId = null;
}

/* =========================================
   TOGGLE IMPORTANT
========================================= */

async function toggleImportant(messageId) {
  const messages = await getAllMessages();

  const message = messages.find(
    (item) =>
      Number(item.id) === Number(messageId)
  );

  if (!message) {
    return;
  }

  message.important =
    !message.important;

  await updateMessage(message);

  await renderMessageList();
  await updateMessageCounts();
}

/* =========================================
   DELETE MESSAGE
========================================= */

async function moveMessageToTrash(
  messageId
) {
  const messages = await getAllMessages();

  const message = messages.find(
    (item) =>
      Number(item.id) === Number(messageId)
  );

  if (!message) {
    return;
  }

  if (message.folder === "trash") {
    await deleteMessage(messageId);
  } else {
    message.folder = "trash";
    await updateMessage(message);
  }

  closeMessageModal();

  await renderMessageList();
  await updateMessageCounts();
}

/* =========================================
   DOWNLOAD ATTACHMENT
========================================= */

async function downloadAttachment(
  messageId
) {
  const messages = await getAllMessages();

  const message = messages.find(
    (item) =>
      Number(item.id) === Number(messageId)
  );

  if (
    !message ||
    !message.attachment ||
    !message.attachment.blob
  ) {
    alert("Attachment is not available.");
    return;
  }

  const blob =
    message.attachment.blob;

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    message.attachment.name ||
    "attachment";

  document.body.appendChild(link);

  link.click();

  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}

/* =========================================
   COMPOSE MODAL
========================================= */

function openComposeModal(
  replyMessage = null
) {
  const modal =
    document.querySelector(
      "#admin-compose-modal"
    );

  if (!modal) {
    return;
  }

  const form =
    document.querySelector(
      "#admin-compose-form"
    );

  if (!form) {
    return;
  }

  form.reset();

  const recipientType =
    document.querySelector(
      "#message-recipient-type"
    );

  const recipient =
    document.querySelector(
      "#message-recipient"
    );

  const subject =
    document.querySelector(
      "#message-subject"
    );

  const body =
    document.querySelector(
      "#message-body"
    );

  if (replyMessage) {
    if (recipientType) {
      recipientType.value =
        replyMessage.senderRole
          ? String(
              replyMessage.senderRole
            ).toLowerCase()
          : "parent";
    }

    if (recipient) {
      recipient.value =
        replyMessage.sender || "";
    }

    if (subject) {
      const oldSubject =
        replyMessage.subject || "";

      subject.value =
        oldSubject.startsWith("Re:")
          ? oldSubject
          : `Re: ${oldSubject}`;
    }

    if (body) {
      body.value =
        `\n\n--- Original Message ---\n${replyMessage.message || ""}`;
    }
  }

  modal.classList.add("open");

  setTimeout(() => {
    if (recipient) {
      recipient.focus();
    }
  }, 100);
}

/* =========================================
   CLOSE COMPOSE MODAL
========================================= */

function closeComposeModal() {
  const modal =
    document.querySelector(
      "#admin-compose-modal"
    );

  if (modal) {
    modal.classList.remove("open");
  }
}

/* =========================================
   SEND MESSAGE
========================================= */

async function sendMessage(event) {
  event.preventDefault();

  const form = event.currentTarget;

  const recipientType =
    document.querySelector(
      "#message-recipient-type"
    );

  const recipient =
    document.querySelector(
      "#message-recipient"
    );

  const subject =
    document.querySelector(
      "#message-subject"
    );

  const body =
    document.querySelector(
      "#message-body"
    );

  const attachmentInput =
    document.querySelector(
      "#message-attachment"
    );

  if (
    !recipientType ||
    !recipient ||
    !subject ||
    !body
  ) {
    return;
  }

  const recipientValue =
    recipient.value.trim();

  const subjectValue =
    subject.value.trim();

  const bodyValue =
    body.value.trim();

  if (!recipientValue) {
    alert("Please enter recipient name.");
    recipient.focus();
    return;
  }

  if (!subjectValue) {
    alert("Please enter message subject.");
    subject.focus();
    return;
  }

  if (!bodyValue) {
    alert("Please enter your message.");
    body.focus();
    return;
  }

  let attachment = null;

  if (
    attachmentInput &&
    attachmentInput.files &&
    attachmentInput.files.length > 0
  ) {
    const file =
      attachmentInput.files[0];

    const maxSize =
      10 * 1024 * 1024;

    if (file.size > maxSize) {
      alert(
        "Attachment size must be 10 MB or less."
      );
      return;
    }

    attachment = {
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      blob: file
    };
  }

  const newMessage = {
    sender: "Administrator",
    senderRole: "Admin",
    receiver: recipientValue,
    receiverRole:
      recipientType.value,
    subject: subjectValue,
    message: bodyValue,
    date: new Date().toISOString(),
    read: true,
    important: false,
    folder: "sent",
    attachment,
    replyTo: null
  };

  try {
    await addMessage(newMessage);

    form.reset();

    closeComposeModal();

    currentFolder = "sent";
    currentSearch = "";
    currentFilter = "all";

    const searchInput =
      document.querySelector(
        "#message-search"
      );

    if (searchInput) {
      searchInput.value = "";
    }

    const filterSelect =
      document.querySelector(
        "#message-filter"
      );

    if (filterSelect) {
      filterSelect.value = "all";
    }

    updateActiveFolder();

    await renderMessageList();

    alert("Message sent successfully.");
  } catch (error) {
    console.error(
      "Message sending error:",
      error
    );

    alert(
      "Unable to send message. Please try again."
    );
  }
}

/* =========================================
   SELECT ALL
========================================= */

function toggleSelectAll() {
  const selectAll =
    document.querySelector(
      "#message-select-all"
    );

  const checkboxes =
    document.querySelectorAll(
      ".message-select-checkbox"
    );

  if (!selectAll) {
    return;
  }

  checkboxes.forEach((checkbox) => {
    checkbox.checked =
      selectAll.checked;
  });

  updateBulkActionState();
}

/* =========================================
   BULK ACTION STATE
========================================= */

function updateBulkActionState() {
  const selected =
    document.querySelectorAll(
      ".message-select-checkbox:checked"
    );

  const bulkDelete =
    document.querySelector(
      "#bulk-delete-messages"
    );

  if (bulkDelete) {
    bulkDelete.disabled =
      selected.length === 0;
  }
}

/* =========================================
   BULK DELETE
========================================= */

async function bulkDeleteMessages() {
  const selected =
    document.querySelectorAll(
      ".message-select-checkbox:checked"
    );

  if (selected.length === 0) {
    return;
  }

  const shouldDelete = confirm(
    `Move ${selected.length} selected message(s) to trash?`
  );

  if (!shouldDelete) {
    return;
  }

  for (const checkbox of selected) {
    await moveMessageToTrash(
      checkbox.dataset.messageId
    );
  }

  const selectAll =
    document.querySelector(
      "#message-select-all"
    );

  if (selectAll) {
    selectAll.checked = false;
  }

  await renderMessageList();
}

/* =========================================
   CHANGE RECIPIENT TYPE
========================================= */

function handleRecipientTypeChange() {
  const typeSelect =
    document.querySelector(
      "#message-recipient-type"
    );

  const recipientInput =
    document.querySelector(
      "#message-recipient"
    );

  if (!typeSelect || !recipientInput) {
    return;
  }

  const type =
    typeSelect.value;

  if (type === "student") {
    recipientInput.placeholder =
      "Enter student name";
  } else if (type === "teacher") {
    recipientInput.placeholder =
      "Enter teacher name";
  } else if (type === "parent") {
    recipientInput.placeholder =
      "Enter parent name";
  } else {
    recipientInput.placeholder =
      "Enter recipient name";
  }
}

/* =========================================
   ADMIN MESSAGES HTML
========================================= */

export function AdminMessages() {
  return `
    <div class="admin-messages">

      <!-- HEADER -->

      <div class="admin-messages-header">

        <div>
          <span class="admin-messages-kicker">
            COMMUNICATION CENTER
          </span>

          <h1>
            Messages
          </h1>

          <p>
            Manage communication with students,
            teachers and parents.
          </p>
        </div>

        <button
          type="button"
          class="admin-compose-button"
          id="open-compose-message"
        >
          <span>✏️</span>
          Compose Message
        </button>

      </div>


      <!-- MESSAGE LAYOUT -->

      <div class="admin-messages-layout">


        <!-- MESSAGE SIDEBAR -->

        <aside class="admin-messages-sidebar">

          <button
            type="button"
            class="message-folder-button active"
            data-message-folder="inbox"
          >
            <span class="message-folder-left">
              <span class="folder-icon">
                📥
              </span>

              <span>
                Inbox
              </span>
            </span>

            <span
              class="message-folder-count"
              id="message-inbox-count"
            >
              0
            </span>
          </button>


          <button
            type="button"
            class="message-folder-button"
            data-message-folder="sent"
          >
            <span class="message-folder-left">
              <span class="folder-icon">
                📤
              </span>

              <span>
                Sent
              </span>
            </span>

            <span
              class="message-folder-count"
              id="message-sent-count"
            >
              0
            </span>
          </button>


          <button
            type="button"
            class="message-folder-button"
            data-message-folder="important"
          >
            <span class="message-folder-left">
              <span class="folder-icon">
                ⭐
              </span>

              <span>
                Important
              </span>
            </span>

            <span
              class="message-folder-count"
              id="message-important-count"
            >
              0
            </span>
          </button>


          <button
            type="button"
            class="message-folder-button"
            data-message-folder="trash"
          >
            <span class="message-folder-left">
              <span class="folder-icon">
                🗑️
              </span>

              <span>
                Trash
              </span>
            </span>

            <span
              class="message-folder-count"
              id="message-trash-count"
            >
              0
            </span>
          </button>


          <div class="message-sidebar-divider"></div>


          <div class="message-unread-summary">

            <span>
              Unread Messages
            </span>

            <strong id="message-unread-count">
              0
            </strong>

          </div>

        </aside>


        <!-- MESSAGE CONTENT -->

        <section class="admin-messages-content">


          <!-- TOOLBAR -->

          <div class="admin-messages-toolbar">

            <div class="message-toolbar-left">

              <label class="message-select-all-wrapper">

                <input
                  type="checkbox"
                  id="message-select-all"
                />

                <span>
                  Select all
                </span>

              </label>

              <button
                type="button"
                class="message-toolbar-button"
                id="bulk-delete-messages"
                disabled
                title="Delete selected"
              >
                🗑️
              </button>

            </div>


            <div class="message-toolbar-right">

              <div class="message-search-box">

                <span>
                  🔍
                </span>

                <input
                  type="search"
                  id="message-search"
                  placeholder="Search messages..."
                />

              </div>


              <select
                id="message-filter"
                class="message-filter-select"
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

                <option value="student">
                  Students
                </option>

                <option value="teacher">
                  Teachers
                </option>

                <option value="parent">
                  Parents
                </option>
              </select>

            </div>

          </div>


          <!-- MESSAGE LIST -->

          <div
            class="admin-message-list"
            id="admin-message-list"
          >
            <div class="messages-loading-state">
              Loading messages...
            </div>
          </div>

        </section>

      </div>


      <!-- MESSAGE VIEW MODAL -->

      <div
        class="admin-message-modal"
        id="admin-message-modal"
      >

        <div class="admin-message-modal-overlay"></div>

        <div class="admin-message-modal-card">

          <div class="admin-message-modal-header">

            <div>
              <span>
                MESSAGE
              </span>

              <h2>
                Message Details
              </h2>
            </div>

            <button
              type="button"
              class="admin-modal-close"
              data-action="close-message-modal"
            >
              ×
            </button>

          </div>

          <div
            class="admin-message-modal-body"
            id="admin-message-modal-body"
          >
          </div>

        </div>

      </div>


      <!-- COMPOSE MODAL -->

      <div
        class="admin-compose-modal"
        id="admin-compose-modal"
      >

        <div class="admin-compose-overlay"></div>

        <div class="admin-compose-card">

          <div class="admin-compose-header">

            <div>
              <span>
                NEW MESSAGE
              </span>

              <h2>
                Compose Message
              </h2>
            </div>

            <button
              type="button"
              class="admin-modal-close"
              data-action="close-compose-modal"
            >
              ×
            </button>

          </div>


          <form
            id="admin-compose-form"
            class="admin-compose-form"
          >

            <div class="compose-form-row">

              <div class="compose-form-group">

                <label for="message-recipient-type">
                  Recipient Type
                </label>

                <select
                  id="message-recipient-type"
                  required
                >
                  <option value="student">
                    Student
                  </option>

                  <option value="teacher">
                    Teacher
                  </option>

                  <option value="parent">
                    Parent
                  </option>

                  <option value="group">
                    Group
                  </option>
                </select>

              </div>


              <div class="compose-form-group">

                <label for="message-recipient">
                  Recipient
                </label>

                <input
                  type="text"
                  id="message-recipient"
                  placeholder="Enter recipient name"
                  required
                />

              </div>

            </div>


            <div class="compose-form-group">

              <label for="message-subject">
                Subject
              </label>

              <input
                type="text"
                id="message-subject"
                placeholder="Enter message subject"
                maxlength="150"
                required
              />

            </div>


            <div class="compose-form-group">

              <label for="message-body">
                Message
              </label>

              <textarea
                id="message-body"
                rows="8"
                placeholder="Write your message..."
                maxlength="5000"
                required
              ></textarea>

            </div>


            <div class="compose-form-group">

              <label for="message-attachment">
                Attachment
              </label>

              <div class="message-file-input-wrapper">

                <input
                  type="file"
                  id="message-attachment"
                />

                <small>
                  Maximum file size: 10 MB
                </small>

              </div>

            </div>


            <div class="compose-form-actions">

              <button
                type="button"
                class="compose-cancel-button"
                data-action="close-compose-modal"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="compose-send-button"
              >
                📤 Send Message
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  `;
}

/* =========================================
   SETUP NAVIGATION
========================================= */

export async function setupAdminMessagesNavigation() {
  const panel =
    document.querySelector(
      ".admin-messages"
    );

  if (!panel) {
    return;
  }

  try {
    await initializeMessages();
  } catch (error) {
    console.error(
      "Message database initialization error:",
      error
    );
  }

  await renderMessageList();
  updateActiveFolder();

  /* =========================================
     FOLDER NAVIGATION
  ========================================= */

  panel.addEventListener(
    "click",
    async function (event) {
      const folderButton =
        event.target.closest(
          "[data-message-folder]"
        );

      if (folderButton) {
        currentFolder =
          folderButton.dataset.messageFolder;

        currentSearch = "";

        currentFilter = "all";

        const searchInput =
          panel.querySelector(
            "#message-search"
          );

        if (searchInput) {
          searchInput.value = "";
        }

        const filterSelect =
          panel.querySelector(
            "#message-filter"
          );

        if (filterSelect) {
          filterSelect.value = "all";
        }

        updateActiveFolder();

        await renderMessageList();

        return;
      }


      /* =====================================
         ACTION BUTTONS
      ===================================== */

      const actionElement =
        event.target.closest(
          "[data-action]"
        );

      if (!actionElement) {
        return;
      }

      const action =
        actionElement.dataset.action;

      const messageId =
        actionElement.dataset.messageId;


      if (action === "open-message") {
        await openMessage(messageId);
        return;
      }


      if (action === "toggle-important") {
        await toggleImportant(messageId);
        return;
      }


      if (action === "delete-message") {
        await moveMessageToTrash(
          messageId
        );
        return;
      }


      if (action === "close-message-modal") {
        closeMessageModal();
        return;
      }


      if (action === "close-compose-modal") {
        closeComposeModal();
        return;
      }


      if (action === "download-attachment") {
        await downloadAttachment(
          messageId
        );
        return;
      }


      if (action === "reply-message") {
        const messages =
          await getAllMessages();

        const message =
          messages.find(
            (item) =>
              Number(item.id) ===
              Number(messageId)
          );

        if (message) {
          closeMessageModal();

          openComposeModal(
            message
          );
        }

        return;
      }
    }
  );


  /* =========================================
     OPEN COMPOSE
  ========================================= */

  const composeButton =
    panel.querySelector(
      "#open-compose-message"
    );

  if (composeButton) {
    composeButton.addEventListener(
      "click",
      function () {
        openComposeModal();
      }
    );
  }


  /* =========================================
     COMPOSE FORM
  ========================================= */

  const composeForm =
    panel.querySelector(
      "#admin-compose-form"
    );

  if (composeForm) {
    composeForm.addEventListener(
      "submit",
      sendMessage
    );
  }


  /* =========================================
     RECIPIENT TYPE
  ========================================= */

  const recipientType =
    panel.querySelector(
      "#message-recipient-type"
    );

  if (recipientType) {
    recipientType.addEventListener(
      "change",
      handleRecipientTypeChange
    );
  }


  /* =========================================
     SEARCH
  ========================================= */

  const searchInput =
    panel.querySelector(
      "#message-search"
    );

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      async function () {
        currentSearch =
          searchInput.value;

        await renderMessageList();
      }
    );
  }


  /* =========================================
     FILTER
  ========================================= */

  const filterSelect =
    panel.querySelector(
      "#message-filter"
    );

  if (filterSelect) {
    filterSelect.addEventListener(
      "change",
      async function () {
        currentFilter =
          filterSelect.value;

        await renderMessageList();
      }
    );
  }


  /* =========================================
     SELECT ALL
  ========================================= */

  const selectAll =
    panel.querySelector(
      "#message-select-all"
    );

  if (selectAll) {
    selectAll.addEventListener(
      "change",
      toggleSelectAll
    );
  }


  /* =========================================
     INDIVIDUAL CHECKBOX
  ========================================= */

  panel.addEventListener(
    "change",
    function (event) {
      if (
        event.target.matches(
          ".message-select-checkbox"
        )
      ) {
        updateBulkActionState();
      }
    }
  );


  /* =========================================
     BULK DELETE
  ========================================= */

  const bulkDelete =
    panel.querySelector(
      "#bulk-delete-messages"
    );

  if (bulkDelete) {
    bulkDelete.addEventListener(
      "click",
      bulkDeleteMessages
    );
  }


  /* =========================================
     MODAL OVERLAY
  ========================================= */

  const messageOverlay =
    panel.querySelector(
      ".admin-message-modal-overlay"
    );

  if (messageOverlay) {
    messageOverlay.addEventListener(
      "click",
      closeMessageModal
    );
  }


  const composeOverlay =
    panel.querySelector(
      ".admin-compose-overlay"
    );

  if (composeOverlay) {
    composeOverlay.addEventListener(
      "click",
      closeComposeModal
    );
  }


  /* =========================================
     ESC KEY
  ========================================= */

  panel.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape") {
        closeMessageModal();
        closeComposeModal();
      }
    }
  );
}