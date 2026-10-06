/* =========================================
   PARENT MESSAGES DATA
========================================= */

const messagesData = [
  {
    id: 1,
    sender: "Mr. Rajesh Sharma",
    role: "Class Teacher",
    subject: "Half Yearly Examination Preparation",
    message:
      "Please ensure that your child is regularly attending school and preparing well for the upcoming Half Yearly Examination.",
    date: "05 September 2026",
    time: "10:30 AM",
    unread: true,
    avatar: "R",
    replies: []
  },

  {
    id: 2,
    sender: "Mrs. Neha Verma",
    role: "Mathematics Teacher",
    subject: "Mathematics Assignment",
    message:
      "Your child has been given a Mathematics assignment. Please make sure that it is completed and submitted on time.",
    date: "03 September 2026",
    time: "01:15 PM",
    unread: true,
    avatar: "N",
    replies: []
  },

  {
    id: 3,
    sender: "Mr. Amit Kumar",
    role: "Science Teacher",
    subject: "Science Performance",
    message:
      "Your child is performing well in Science. Regular revision at home will help improve the performance further.",
    date: "30 August 2026",
    time: "11:45 AM",
    unread: false,
    avatar: "A",
    replies: []
  },

  {
    id: 4,
    sender: "School Administration",
    role: "School Office",
    subject: "Parent Teacher Meeting",
    message:
      "The Parent Teacher Meeting will be conducted shortly. Parents are requested to attend the meeting and discuss their child's academic progress.",
    date: "28 August 2026",
    time: "09:20 AM",
    unread: false,
    avatar: "S",
    replies: []
  }
];


/* =========================================
   PARENT MESSAGES PAGE
========================================= */

export function ParentMessages(studentName = "Student") {

  return `
    <div class="parent-messages-page">

      <!-- HEADER -->
      <header class="parent-messages-header">

        <div class="parent-messages-title">

          <h1>Messages</h1>

          <p>
            Communicate with teachers and school
          </p>

        </div>

        <div class="parent-messages-header-actions">

          <button
            type="button"
            id="parentMessagesBackBtn"
            class="parent-messages-back-btn"
          >
            <span>←</span>
            <span>Back to Dashboard</span>
          </button>

        </div>

      </header>


      <!-- MAIN CONTENT -->
      <main class="parent-messages-content">

        <!-- STUDENT INFO -->
        <section class="parent-messages-card messages-student-card">

          <div class="messages-student-info">

            <div class="messages-student-avatar">
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

          <div class="messages-student-status">
            <span class="status-dot"></span>
            Parent Account
          </div>

        </section>


        <!-- MESSAGE TOOLBAR -->
        <section class="parent-messages-card messages-toolbar">

          <div class="messages-search-box">

            <span class="messages-search-icon">
              🔍
            </span>

            <input
              type="text"
              id="parentMessageSearch"
              placeholder="Search messages..."
              autocomplete="off"
            />

          </div>


          <div class="messages-toolbar-actions">

            <button
              type="button"
              id="parentMessageUnreadBtn"
              class="message-filter-btn"
            >
              Unread
              <span id="parentUnreadCount">
                0
              </span>
            </button>

            <button
              type="button"
              id="parentNewMessageBtn"
              class="new-message-btn"
            >
              <span>＋</span>
              New Message
            </button>

          </div>

        </section>


        <!-- MESSAGE AREA -->
        <section class="parent-messages-card messages-main-card">

          <div class="messages-list-section">

            <div class="messages-section-header">

              <div>

                <h2>Inbox</h2>

                <p id="parentMessageCount">
                  Messages
                </p>

              </div>

            </div>

            <div
              id="parentMessageList"
              class="parent-message-list"
            ></div>

          </div>


          <!-- CONVERSATION -->
          <div
            id="parentConversationSection"
            class="messages-conversation-section"
          >

            <div class="conversation-empty">

              <div class="conversation-empty-icon">
                💬
              </div>

              <h3>
                Select a message
              </h3>

              <p>
                Select a message from your inbox
                to view the conversation.
              </p>

            </div>

          </div>

        </section>

      </main>


      <!-- NEW MESSAGE MODAL -->
      <div
        id="parentNewMessageModal"
        class="parent-message-modal"
      >

        <div
          class="parent-message-modal-overlay"
          id="parentNewMessageOverlay"
        ></div>

        <div
          class="parent-message-modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="parentNewMessageTitle"
        >

          <div class="parent-message-modal-header">

            <div>

              <h2 id="parentNewMessageTitle">
                New Message
              </h2>

              <p>
                Send a message to the school
              </p>

            </div>

            <button
              type="button"
              id="parentNewMessageClose"
              class="parent-message-modal-close"
            >
              ×
            </button>

          </div>


          <form
            id="parentNewMessageForm"
            class="parent-message-form"
          >

            <div class="message-form-group">

              <label for="parentMessageRecipient">
                Recipient
              </label>

              <select
                id="parentMessageRecipient"
                required
              >

                <option value="">
                  Select Teacher / School
                </option>

                <option value="Mr. Rajesh Sharma">
                  Mr. Rajesh Sharma - Class Teacher
                </option>

                <option value="Mrs. Neha Verma">
                  Mrs. Neha Verma - Mathematics Teacher
                </option>

                <option value="Mr. Amit Kumar">
                  Mr. Amit Kumar - Science Teacher
                </option>

                <option value="School Administration">
                  School Administration
                </option>

              </select>

            </div>


            <div class="message-form-group">

              <label for="parentMessageSubject">
                Subject
              </label>

              <input
                type="text"
                id="parentMessageSubject"
                placeholder="Enter message subject"
                required
              />

            </div>


            <div class="message-form-group">

              <label for="parentMessageText">
                Message
              </label>

              <textarea
                id="parentMessageText"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            <div class="message-form-actions">

              <button
                type="button"
                id="parentNewMessageCancel"
                class="message-cancel-btn"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="message-send-btn"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  `;
}


/* =========================================
   SETUP PARENT MESSAGES
========================================= */

export function setupParentMessages() {

  const searchInput =
    document.getElementById(
      "parentMessageSearch"
    );

  const unreadButton =
    document.getElementById(
      "parentMessageUnreadBtn"
    );

  const unreadCount =
    document.getElementById(
      "parentUnreadCount"
    );

  const newMessageButton =
    document.getElementById(
      "parentNewMessageBtn"
    );

  const messageList =
    document.getElementById(
      "parentMessageList"
    );

  const messageCount =
    document.getElementById(
      "parentMessageCount"
    );

  const conversationSection =
    document.getElementById(
      "parentConversationSection"
    );

  const backButton =
    document.getElementById(
      "parentMessagesBackBtn"
    );

  const newMessageModal =
    document.getElementById(
      "parentNewMessageModal"
    );

  const newMessageClose =
    document.getElementById(
      "parentNewMessageClose"
    );

  const newMessageOverlay =
    document.getElementById(
      "parentNewMessageOverlay"
    );

  const newMessageCancel =
    document.getElementById(
      "parentNewMessageCancel"
    );

  const newMessageForm =
    document.getElementById(
      "parentNewMessageForm"
    );


  /* =========================================
     CHECK REQUIRED ELEMENTS
  ========================================= */

  if (!messageList) {
    return;
  }


  /* =========================================
     STATE
  ========================================= */

  let showUnreadOnly = false;

  let selectedMessageId = null;


  /* =========================================
     BACK TO DASHBOARD
  ========================================= */

  if (backButton) {

    backButton.addEventListener(
      "click",
      () => {

        if (
          typeof window.navigateParentPage ===
          "function"
        ) {

          window.navigateParentPage(
            "dashboard"
          );

        }

      }
    );

  }


  /* =========================================
     UPDATE UNREAD COUNT
  ========================================= */

  function updateUnreadCount() {

    const count =
      messagesData.filter(
        (message) => message.unread
      ).length;

    if (unreadCount) {

      unreadCount.textContent = count;

    }

  }


  /* =========================================
     OPEN CONVERSATION
  ========================================= */

  function openConversation(message) {

    if (!conversationSection) {
      return;
    }

    selectedMessageId = message.id;

    /* Mark message as read */

    message.unread = false;

    updateUnreadCount();

    renderMessages();

    conversationSection.innerHTML = `

      <div class="conversation-header">

        <div class="conversation-person">

          <div class="conversation-avatar">
            ${message.avatar}
          </div>

          <div>

            <h3>
              ${message.sender}
            </h3>

            <p>
              ${message.role}
            </p>

          </div>

        </div>

      </div>


      <div class="conversation-body">

        <div class="conversation-subject">

          <span>Subject</span>

          <h2>
            ${message.subject}
          </h2>

        </div>


        <div class="conversation-message">

          <div class="conversation-message-header">

            <strong>
              ${message.sender}
            </strong>

            <span>
              ${message.date} • ${message.time}
            </span>

          </div>

          <p>
            ${message.message}
          </p>

        </div>


        ${
          message.replies.length > 0
            ? message.replies
                .map(
                  (reply) => `

                    <div
                      class="conversation-message parent-reply"
                    >

                      <div
                        class="conversation-message-header"
                      >

                        <strong>
                          You
                        </strong>

                        <span>
                          ${reply.date} • ${reply.time}
                        </span>

                      </div>

                      <p>
                        ${reply.message}
                      </p>

                    </div>

                  `
                )
                .join("")
            : ""
        }

      </div>


      <form
        id="parentReplyForm"
        class="conversation-reply-form"
      >

        <div class="reply-input-wrapper">

          <textarea
            id="parentReplyText"
            rows="3"
            placeholder="Write a reply..."
            required
          ></textarea>

          <button
            type="submit"
            class="reply-send-btn"
          >
            Send Reply
          </button>

        </div>

      </form>

    `;


    const replyForm =
      document.getElementById(
        "parentReplyForm"
      );

    if (replyForm) {

      replyForm.addEventListener(
        "submit",
        (event) => {

          event.preventDefault();

          const replyText =
            document
              .getElementById(
                "parentReplyText"
              )
              ?.value
              .trim();

          if (!replyText) {
            return;
          }

          const now =
            new Date();

          const reply = {

            message: replyText,

            date:
              now.toLocaleDateString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                }
              ),

            time:
              now.toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit"
                }
              )

          };

          message.replies.push(reply);

          openConversation(message);

        }
      );

    }

  }


  /* =========================================
     RENDER MESSAGES
  ========================================= */

  function renderMessages() {

    const searchText =
      searchInput
        ? searchInput.value
            .trim()
            .toLowerCase()
        : "";


    const filteredMessages =
      messagesData.filter(
        (message) => {

          const matchesSearch =
            message.sender
              .toLowerCase()
              .includes(searchText) ||

            message.role
              .toLowerCase()
              .includes(searchText) ||

            message.subject
              .toLowerCase()
              .includes(searchText) ||

            message.message
              .toLowerCase()
              .includes(searchText);


          const matchesUnread =
            !showUnreadOnly ||
            message.unread;


          return (
            matchesSearch &&
            matchesUnread
          );

        }
      );


    if (messageCount) {

      messageCount.textContent =
        `${filteredMessages.length} message${
          filteredMessages.length === 1
            ? ""
            : "s"
        }`;

    }


    /* =========================================
       EMPTY STATE
    ========================================= */

    if (
      filteredMessages.length === 0
    ) {

      messageList.innerHTML = `

        <div class="messages-empty">

          <div class="messages-empty-icon">
            📭
          </div>

          <h3>
            No Messages Found
          </h3>

          <p>
            There are no messages matching your search.
          </p>

        </div>

      `;

      return;

    }


    /* =========================================
       MESSAGE LIST
    ========================================= */

    messageList.innerHTML =
      filteredMessages
        .map(
          (message) => `

            <button
              type="button"
              class="parent-message-item ${
                message.unread
                  ? "unread"
                  : ""
              } ${
                selectedMessageId === message.id
                  ? "selected"
                  : ""
              }"
              data-message-id="${message.id}"
            >

              <div class="message-item-avatar">

                ${message.avatar}

              </div>


              <div class="message-item-content">

                <div class="message-item-top">

                  <div class="message-sender">

                    <strong>
                      ${message.sender}
                    </strong>

                    ${
                      message.unread
                        ? `
                          <span class="message-unread-dot">
                          </span>
                        `
                        : ""
                    }

                  </div>

                  <span class="message-item-time">

                    ${message.date}

                  </span>

                </div>


                <span class="message-item-role">

                  ${message.role}

                </span>


                <h3 class="message-item-subject">

                  ${message.subject}

                </h3>


                <p class="message-item-preview">

                  ${message.message}

                </p>

              </div>

            </button>

          `
        )
        .join("");


    const messageButtons =
      messageList.querySelectorAll(
        ".parent-message-item"
      );


    messageButtons.forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const messageId =
              Number(
                button.dataset.messageId
              );

            const message =
              messagesData.find(
                (item) =>
                  item.id === messageId
              );

            if (message) {

              openConversation(
                message
              );

            }

          }
        );

      }
    );

  }


  /* =========================================
     SEARCH
  ========================================= */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      renderMessages
    );

  }


  /* =========================================
     UNREAD FILTER
  ========================================= */

  if (unreadButton) {

    unreadButton.addEventListener(
      "click",
      () => {

        showUnreadOnly =
          !showUnreadOnly;

        unreadButton.classList.toggle(
          "active",
          showUnreadOnly
        );

        renderMessages();

      }
    );

  }


  /* =========================================
     OPEN NEW MESSAGE MODAL
  ========================================= */

  function openNewMessageModal() {

    if (!newMessageModal) {
      return;
    }

    newMessageModal.classList.add(
      "active"
    );

    document.body.classList.add(
      "parent-message-modal-open"
    );

  }


  /* =========================================
     CLOSE NEW MESSAGE MODAL
  ========================================= */

  function closeNewMessageModal() {

    if (!newMessageModal) {
      return;
    }

    newMessageModal.classList.remove(
      "active"
    );

    document.body.classList.remove(
      "parent-message-modal-open"
    );

  }


  if (newMessageButton) {

    newMessageButton.addEventListener(
      "click",
      openNewMessageModal
    );

  }


  if (newMessageClose) {

    newMessageClose.addEventListener(
      "click",
      closeNewMessageModal
    );

  }


  if (newMessageOverlay) {

    newMessageOverlay.addEventListener(
      "click",
      closeNewMessageModal
    );

  }


  if (newMessageCancel) {

    newMessageCancel.addEventListener(
      "click",
      closeNewMessageModal
    );

  }


  /* =========================================
     NEW MESSAGE FORM
  ========================================= */

  if (newMessageForm) {

    newMessageForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const recipient =
          document
            .getElementById(
              "parentMessageRecipient"
            )
            ?.value
            .trim();


        const subject =
          document
            .getElementById(
              "parentMessageSubject"
            )
            ?.value
            .trim();


        const messageText =
          document
            .getElementById(
              "parentMessageText"
            )
            ?.value
            .trim();


        if (
          !recipient ||
          !subject ||
          !messageText
        ) {

          alert(
            "Please fill in all message fields."
          );

          return;

        }


        const newMessage = {

          id:
            Date.now(),

          sender:
            recipient,

          role:
            "School",

          subject:
            subject,

          message:
            messageText,

          date:
            new Date()
              .toLocaleDateString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                }
              ),

          time:
            new Date()
              .toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit"
                }
              ),

          unread:
            false,

          avatar:
            recipient
              .charAt(0)
              .toUpperCase(),

          replies:
            []

        };


        messagesData.unshift(
          newMessage
        );


        newMessageForm.reset();

        closeNewMessageModal();

        selectedMessageId =
          newMessage.id;

        renderMessages();

        openConversation(
          newMessage
        );


        alert(
          "Message sent successfully."
        );

      }
    );

  }


  /* =========================================
     ESCAPE KEY
  ========================================= */

  const handleEscape =
    (event) => {

      if (
        event.key === "Escape" &&
        newMessageModal &&
        newMessageModal.classList.contains(
          "active"
        )
      ) {

        closeNewMessageModal();

      }

    };


  document.addEventListener(
    "keydown",
    handleEscape
  );


  /* =========================================
     INITIAL RENDER
  ========================================= */

  updateUnreadCount();

  renderMessages();

}