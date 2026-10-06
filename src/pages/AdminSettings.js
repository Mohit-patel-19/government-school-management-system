import "./AdminSettings.css";

const STORAGE_KEY = "government_school_admin_settings";

const defaultSettings = {
  schoolName: "Government Senior Secondary School",
  schoolCode: "GOV-001",
  schoolEmail: "school@example.com",
  schoolPhone: "9876543210",
  principalName: "School Principal",
  address: "Udaipur, Rajasthan",
  academicSession: "2026-27",
  language: "English",
  theme: "Light",
  emailNotifications: true,
  smsNotifications: true,
  attendanceAlerts: true,
  resultNotifications: true,
  feeReminders: true,
  assignmentNotifications: true,
  noticeNotifications: true,
  twoFactor: false,
  loginAlerts: true,
  sessionTimeout: "30"
};

function getSettings() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return { ...defaultSettings };
    }

    return {
      ...defaultSettings,
      ...JSON.parse(saved)
    };
  } catch (error) {
    console.error("Settings load error:", error);
    return { ...defaultSettings };
  }
}

function saveSettings(settings) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(settings)
    );

    return true;
  } catch (error) {
    console.error("Settings save error:", error);
    return false;
  }
}

function getValue(settings, key) {
  return settings[key] ?? "";
}

export function AdminSettings() {
  const settings = getSettings();

  return `
    <div class="admin-settings-page">

      <div class="admin-settings-header">
        <div>
          <h1>⚙️ Admin Settings</h1>
          <p>Manage school and admin panel settings</p>
        </div>

        <div class="admin-settings-actions">
          <button
            type="button"
            class="admin-settings-reset"
            data-settings-reset
          >
            Reset
          </button>

          <button
            type="button"
            class="admin-settings-save"
            data-settings-save
          >
            Save Changes
          </button>
        </div>
      </div>


      <div class="admin-settings-container">

        <aside class="admin-settings-menu">

          <button
            type="button"
            class="admin-settings-menu-item active"
            data-settings-tab="school"
          >
            🏫 School Information
          </button>

          <button
            type="button"
            class="admin-settings-menu-item"
            data-settings-tab="admin"
          >
            👤 Admin Profile
          </button>

          <button
            type="button"
            class="admin-settings-menu-item"
            data-settings-tab="academic"
          >
            🎓 Academic Settings
          </button>

          <button
            type="button"
            class="admin-settings-menu-item"
            data-settings-tab="notifications"
          >
            🔔 Notifications
          </button>

          <button
            type="button"
            class="admin-settings-menu-item"
            data-settings-tab="appearance"
          >
            🎨 Appearance
          </button>

          <button
            type="button"
            class="admin-settings-menu-item"
            data-settings-tab="security"
          >
            🔐 Security
          </button>

        </aside>


        <main class="admin-settings-content">


          <section
            class="admin-settings-section active"
            data-settings-section="school"
          >

            <div class="admin-settings-section-title">
              <h2>🏫 School Information</h2>
              <p>Update your school information</p>
            </div>

            <div class="admin-settings-form">

              <div class="admin-settings-field full">
                <label>School Name</label>
                <input
                  type="text"
                  data-setting="schoolName"
                  value="${getValue(settings, "schoolName")}"
                  placeholder="Enter school name"
                />
              </div>

              <div class="admin-settings-field">
                <label>School Code</label>
                <input
                  type="text"
                  data-setting="schoolCode"
                  value="${getValue(settings, "schoolCode")}"
                  placeholder="Enter school code"
                />
              </div>

              <div class="admin-settings-field">
                <label>School Email</label>
                <input
                  type="email"
                  data-setting="schoolEmail"
                  value="${getValue(settings, "schoolEmail")}"
                  placeholder="Enter school email"
                />
              </div>

              <div class="admin-settings-field">
                <label>School Phone</label>
                <input
                  type="tel"
                  data-setting="schoolPhone"
                  value="${getValue(settings, "schoolPhone")}"
                  placeholder="Enter phone number"
                />
              </div>

              <div class="admin-settings-field">
                <label>Principal Name</label>
                <input
                  type="text"
                  data-setting="principalName"
                  value="${getValue(settings, "principalName")}"
                  placeholder="Enter principal name"
                />
              </div>

              <div class="admin-settings-field full">
                <label>School Address</label>
                <textarea
                  data-setting="address"
                  rows="4"
                  placeholder="Enter school address"
                >${getValue(settings, "address")}</textarea>
              </div>

            </div>

          </section>


          <section
            class="admin-settings-section"
            data-settings-section="admin"
          >

            <div class="admin-settings-section-title">
              <h2>👤 Admin Profile</h2>
              <p>Manage administrator information</p>
            </div>

            <div class="admin-settings-form">

              <div class="admin-settings-field">
                <label>Administrator Name</label>
                <input
                  type="text"
                  data-setting="adminName"
                  value="${getValue(settings, "adminName") || "Administrator"}"
                  placeholder="Enter admin name"
                />
              </div>

              <div class="admin-settings-field">
                <label>Administrator Email</label>
                <input
                  type="email"
                  data-setting="adminEmail"
                  value="${getValue(settings, "adminEmail") || "admin@school.com"}"
                  placeholder="Enter admin email"
                />
              </div>

              <div class="admin-settings-field">
                <label>Administrator Phone</label>
                <input
                  type="tel"
                  data-setting="adminPhone"
                  value="${getValue(settings, "adminPhone") || "9876543210"}"
                  placeholder="Enter phone"
                />
              </div>

              <div class="admin-settings-field">
                <label>Role</label>
                <input
                  type="text"
                  value="Super Administrator"
                  disabled
                />
              </div>

            </div>

          </section>


          <section
            class="admin-settings-section"
            data-settings-section="academic"
          >

            <div class="admin-settings-section-title">
              <h2>🎓 Academic Settings</h2>
              <p>Manage academic year settings</p>
            </div>

            <div class="admin-settings-form">

              <div class="admin-settings-field">
                <label>Academic Session</label>

                <select data-setting="academicSession">

                  <option
                    value="2025-26"
                    ${settings.academicSession === "2025-26" ? "selected" : ""}
                  >
                    2025-26
                  </option>

                  <option
                    value="2026-27"
                    ${settings.academicSession === "2026-27" ? "selected" : ""}
                  >
                    2026-27
                  </option>

                  <option
                    value="2027-28"
                    ${settings.academicSession === "2027-28" ? "selected" : ""}
                  >
                    2027-28
                  </option>

                  <option
                    value="2028-29"
                    ${settings.academicSession === "2028-29" ? "selected" : ""}
                  >
                    2028-29
                  </option>

                </select>
              </div>

              <div class="admin-settings-field">
                <label>Language</label>

                <select data-setting="language">

                  <option
                    value="English"
                    ${settings.language === "English" ? "selected" : ""}
                  >
                    English
                  </option>

                  <option
                    value="Hindi"
                    ${settings.language === "Hindi" ? "selected" : ""}
                  >
                    Hindi
                  </option>

                </select>
              </div>

            </div>

          </section>


          <section
            class="admin-settings-section"
            data-settings-section="notifications"
          >

            <div class="admin-settings-section-title">
              <h2>🔔 Notifications</h2>
              <p>Control admin notifications</p>
            </div>

            <div class="admin-settings-options">

              <label class="admin-settings-option">
                <div>
                  <strong>Email Notifications</strong>
                  <small>Receive notifications by email</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="emailNotifications"
                  ${settings.emailNotifications ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>


              <label class="admin-settings-option">
                <div>
                  <strong>SMS Notifications</strong>
                  <small>Receive important SMS alerts</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="smsNotifications"
                  ${settings.smsNotifications ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>


              <label class="admin-settings-option">
                <div>
                  <strong>Attendance Alerts</strong>
                  <small>Receive attendance alerts</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="attendanceAlerts"
                  ${settings.attendanceAlerts ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>


              <label class="admin-settings-option">
                <div>
                  <strong>Result Notifications</strong>
                  <small>Receive result notifications</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="resultNotifications"
                  ${settings.resultNotifications ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>


              <label class="admin-settings-option">
                <div>
                  <strong>Fee Reminders</strong>
                  <small>Receive fee reminder notifications</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="feeReminders"
                  ${settings.feeReminders ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>


              <label class="admin-settings-option">
                <div>
                  <strong>Assignment Notifications</strong>
                  <small>Receive assignment notifications</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="assignmentNotifications"
                  ${settings.assignmentNotifications ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>


              <label class="admin-settings-option">
                <div>
                  <strong>Notice Notifications</strong>
                  <small>Receive new notice notifications</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="noticeNotifications"
                  ${settings.noticeNotifications ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>

            </div>

          </section>


          <section
            class="admin-settings-section"
            data-settings-section="appearance"
          >

            <div class="admin-settings-section-title">
              <h2>🎨 Appearance</h2>
              <p>Customize admin panel appearance</p>
            </div>

            <div class="admin-settings-form">

              <div class="admin-settings-field">
                <label>Theme</label>

                <select data-setting="theme">

                  <option
                    value="Light"
                    ${settings.theme === "Light" ? "selected" : ""}
                  >
                    Light
                  </option>

                  <option
                    value="Dark"
                    ${settings.theme === "Dark" ? "selected" : ""}
                  >
                    Dark
                  </option>

                  <option
                    value="System"
                    ${settings.theme === "System" ? "selected" : ""}
                  >
                    System Default
                  </option>

                </select>
              </div>

            </div>

          </section>


          <section
            class="admin-settings-section"
            data-settings-section="security"
          >

            <div class="admin-settings-section-title">
              <h2>🔐 Security</h2>
              <p>Manage administrator security settings</p>
            </div>

            <div class="admin-settings-options">

              <label class="admin-settings-option">
                <div>
                  <strong>Two-Factor Authentication</strong>
                  <small>Protect admin account with 2FA</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="twoFactor"
                  ${settings.twoFactor ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>


              <label class="admin-settings-option">
                <div>
                  <strong>Login Alerts</strong>
                  <small>Get alerts for administrator login</small>
                </div>

                <input
                  type="checkbox"
                  data-setting="loginAlerts"
                  ${settings.loginAlerts ? "checked" : ""}
                />

                <span class="admin-settings-switch"></span>
              </label>

            </div>


            <div class="admin-settings-form">

              <div class="admin-settings-field">

                <label>Session Timeout</label>

                <select data-setting="sessionTimeout">

                  <option
                    value="15"
                    ${settings.sessionTimeout === "15" ? "selected" : ""}
                  >
                    15 Minutes
                  </option>

                  <option
                    value="30"
                    ${settings.sessionTimeout === "30" ? "selected" : ""}
                  >
                    30 Minutes
                  </option>

                  <option
                    value="60"
                    ${settings.sessionTimeout === "60" ? "selected" : ""}
                  >
                    1 Hour
                  </option>

                  <option
                    value="120"
                    ${settings.sessionTimeout === "120" ? "selected" : ""}
                  >
                    2 Hours
                  </option>

                </select>

              </div>

            </div>

          </section>


          <div
            class="admin-settings-message"
            data-settings-message
          ></div>


          <div class="admin-settings-bottom-actions">

            <button
              type="button"
              class="admin-settings-reset"
              data-settings-reset
            >
              Reset
            </button>

            <button
              type="button"
              class="admin-settings-save"
              data-settings-save
            >
              Save Settings
            </button>

          </div>

        </main>

      </div>

    </div>
  `;
}


function readSettingsFromForm() {
  const current = getSettings();

  const fields = document.querySelectorAll(
    "#admin-page-content [data-setting]"
  );

  fields.forEach((field) => {
    const key = field.dataset.setting;

    if (field.type === "checkbox") {
      current[key] = field.checked;
    } else {
      current[key] = field.value;
    }
  });

  return current;
}


function showMessage(message, type) {
  const messageBox = document.querySelector(
    "#admin-page-content [data-settings-message]"
  );

  if (!messageBox) {
    return;
  }

  messageBox.textContent = message;
  messageBox.className =
    `admin-settings-message ${type}`;

  setTimeout(() => {
    messageBox.textContent = "";
    messageBox.className = "admin-settings-message";
  }, 3000);
}


function saveFormSettings() {
  const settings = readSettingsFromForm();

  if (!settings.schoolName.trim()) {
    showMessage(
      "Please enter school name.",
      "error"
    );
    return;
  }

  if (!settings.schoolEmail.trim()) {
    showMessage(
      "Please enter school email.",
      "error"
    );
    return;
  }

  const result = saveSettings(settings);

  if (result) {
    showMessage(
      "Settings saved successfully.",
      "success"
    );
  } else {
    showMessage(
      "Unable to save settings.",
      "error"
    );
  }
}


function resetFormSettings() {
  const confirmReset = window.confirm(
    "Are you sure you want to reset all settings?"
  );

  if (!confirmReset) {
    return;
  }

  saveSettings({ ...defaultSettings });

  const content = document.querySelector(
    "#admin-page-content"
  );

  if (!content) {
    return;
  }

  content.innerHTML = AdminSettings();

  setupAdminSettingsNavigation();

  showMessage(
    "Settings reset successfully.",
    "success"
  );
}


function activateTab(tabName) {
  const tabs = document.querySelectorAll(
    "#admin-page-content [data-settings-tab]"
  );

  const sections = document.querySelectorAll(
    "#admin-page-content [data-settings-section]"
  );

  tabs.forEach((tab) => {
    tab.classList.toggle(
      "active",
      tab.dataset.settingsTab === tabName
    );
  });

  sections.forEach((section) => {
    section.classList.toggle(
      "active",
      section.dataset.settingsSection === tabName
    );
  });
}


export function setupAdminSettingsNavigation() {
  const content = document.querySelector(
    "#admin-page-content"
  );

  if (!content) {
    return;
  }

  if (content.dataset.settingsReady === "true") {
    return;
  }

  content.dataset.settingsReady = "true";


  content.addEventListener("click", (event) => {

    const tab = event.target.closest(
      "[data-settings-tab]"
    );

    if (tab) {
      activateTab(tab.dataset.settingsTab);
      return;
    }


    const saveButton = event.target.closest(
      "[data-settings-save]"
    );

    if (saveButton) {
      saveFormSettings();
      return;
    }


    const resetButton = event.target.closest(
      "[data-settings-reset]"
    );

    if (resetButton) {
      resetFormSettings();
    }

  });
}