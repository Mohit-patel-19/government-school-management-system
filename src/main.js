import './style.css'
import './second.css'

import {
  StudentDashboard,
  setupStudentNavigation
} from './pages/StudentDashboard.js'

import {
  TeacherDashboard,
  setupTeacherNavigation
} from './pages/TeacherDashboard.js'

import {
  ParentDashboard,
  setupParentNavigation
} from './pages/ParentDashboard.js'

import {
  AdminDashboard,
  setupAdminNavigation
} from './pages/AdminDashboard.js'


/* =========================================
   GLOBAL VARIABLES
========================================= */

let selectedRole = 'Student'

let generatedOtp = ''
let otpExpiryTime = 0
let recoveryMobile = ''

let otpTimerInterval = null


/* =========================================
   APP ELEMENT
========================================= */

const app = document.querySelector('#app')

if (!app) {
  throw new Error(
    'The #app element was not found. Please check your index.html file.'
  )
}


/* =========================================
   LOGIN PAGE CSS
   This removes the old side panel,
   extra divider and two-column layout.
========================================= */

const loginPageStyle = document.createElement('style')

loginPageStyle.id = 'government-school-login-style'

loginPageStyle.textContent = `

/* =========================================
   LOGIN PAGE
========================================= */

.login-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  box-sizing: border-box;
  background: #f4f7fb;
}

/* =========================================
   REMOVE OLD TWO COLUMN LOGIN LAYOUT
========================================= */

.login-container {
  width: 100% !important;
  max-width: 500px !important;
  margin: 0 auto !important;
  display: block !important;
  grid-template-columns: none !important;
  grid-template-areas: none !important;
  background: transparent !important;
  border: none !important;
  border-left: none !important;
  border-right: none !important;
  box-shadow: none !important;
  overflow: visible !important;
}

/* =========================================
   HIDE OLD SIDE PANEL
========================================= */

.login-info-panel,
.info-content,
.welcome-badge,
.info-features,
.info-feature,
.feature-icon,
.login-divider,
.login-side-panel,
.login-left-panel,
.login-right-panel {
  display: none !important;
}

/* Remove possible pseudo-elements */

.login-container::before,
.login-container::after,
.login-card::before,
.login-card::after,
.login-page::before,
.login-page::after {
  content: none !important;
  display: none !important;
  border: none !important;
}

/* =========================================
   LOGIN CARD
========================================= */

.login-card {
  width: 100% !important;
  max-width: 500px !important;
  margin: 0 auto !important;
  background: #ffffff !important;
  border: 1px solid #e3e9f2 !important;
  border-left: 1px solid #e3e9f2 !important;
  border-right: 1px solid #e3e9f2 !important;
  border-radius: 24px !important;
  padding: 36px !important;
  box-sizing: border-box !important;
  box-shadow: 0 20px 55px rgba(31, 55, 90, 0.12) !important;
}

/* =========================================
   LOGIN HEADER
========================================= */

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.school-logo {
  width: 70px;
  height: 70px;
  margin: 0 auto 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  background: #eef4ff;
}

.login-header h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #172033;
}

.login-header p {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 14px;
}

/* =========================================
   LOGIN FORM
========================================= */

.login-form {
  width: 100%;
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #273449;
}

/* =========================================
   MOBILE NUMBER
========================================= */

.mobile-input {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #d8e0eb;
  border-radius: 12px;
  background: #ffffff;
  overflow: hidden;
  box-sizing: border-box;
}

.mobile-input:focus-within {
  border-color: #2563eb;
}

.country-code {
  height: 100%;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-right: 1px solid #d8e0eb;
  background: #f8fafc;
  color: #374151;
  font-weight: 600;
  box-sizing: border-box;
}

.mobile-input input {
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 14px;
  font-size: 15px;
  color: #172033;
  box-sizing: border-box;
  background: #ffffff;
}

/* =========================================
   PASSWORD
========================================= */

.password-wrapper {
  position: relative;
  width: 100%;
}

.password-wrapper input {
  width: 100%;
  height: 50px;
  border: 1px solid #d8e0eb;
  border-radius: 12px;
  outline: none;
  padding: 0 70px 0 14px;
  font-size: 15px;
  color: #172033;
  box-sizing: border-box;
  background: #ffffff;
}

.password-wrapper input:focus {
  border-color: #2563eb;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: #2563eb;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

/* =========================================
   ROLE SELECT
========================================= */

.form-group select {
  width: 100%;
  height: 50px;
  border: 1px solid #d8e0eb;
  border-radius: 12px;
  outline: none;
  padding: 0 14px;
  font-size: 15px;
  color: #273449;
  background: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
}

.form-group select:focus {
  border-color: #2563eb;
}

/* =========================================
   REMEMBER ME
========================================= */

.remember-me {
  display: flex !important;
  align-items: center;
  gap: 9px;
  margin: 4px 0 20px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  user-select: none;
}

.remember-me input {
  width: 17px !important;
  height: 17px !important;
  margin: 0 !important;
  cursor: pointer;
  accent-color: #2563eb;
}

/* =========================================
   LOGIN BUTTON
========================================= */

.login-button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.login-button:hover {
  background: #1d4ed8;
}

.login-button:active {
  transform: scale(0.99);
}

/* =========================================
   FORGOT PASSWORD
========================================= */

.forgot-button {
  width: 100%;
  margin-top: 15px;
  border: none;
  background: transparent;
  color: #2563eb;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.forgot-button:hover {
  text-decoration: underline;
}

/* =========================================
   RECOVERY CARD
========================================= */

.recovery-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.recovery-card {
  width: 100%;
  background: #ffffff;
  border: 1px solid #e3e9f2;
  border-radius: 24px;
  padding: 36px;
  box-sizing: border-box;
  box-shadow: 0 20px 55px rgba(31, 55, 90, 0.12);
}

.recovery-header {
  text-align: center;
  margin-bottom: 28px;
}

.recovery-header h2 {
  margin: 0;
  color: #172033;
  font-size: 25px;
}

.recovery-header p {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 14px;
}

.recovery-input {
  width: 100%;
  height: 50px;
  border: 1px solid #d8e0eb;
  border-radius: 12px;
  outline: none;
  padding: 0 14px;
  font-size: 15px;
  box-sizing: border-box;
}

.recovery-input:focus {
  border-color: #2563eb;
}

.recovery-button {
  width: 100%;
  height: 50px;
  margin-top: 5px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.recovery-button:hover {
  background: #1d4ed8;
}

.secondary-button {
  width: 100%;
  height: 46px;
  margin-top: 12px;
  border: 1px solid #d8e0eb;
  border-radius: 12px;
  background: #ffffff;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.secondary-button:hover {
  background: #f8fafc;
}

.otp-info {
  margin: 15px 0;
  padding: 12px;
  border-radius: 10px;
  background: #f1f5f9;
  color: #475569;
  font-size: 13px;
  text-align: center;
}

.otp-timer {
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #dc2626;
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

  .login-page {
    padding: 20px 12px;
  }

  .login-card,
  .recovery-card {
    padding: 26px 20px !important;
    border-radius: 20px !important;
  }

  .login-header h1 {
    font-size: 24px;
  }

  .school-logo {
    width: 62px;
    height: 62px;
    font-size: 30px;
  }

}
`

document.head.appendChild(loginPageStyle)


/* =========================================
   LOGIN PAGE
========================================= */

function renderLoginPage() {

  selectedRole = 'Student'

  app.innerHTML = `

    <div class="login-page">

      <div class="login-container">

        <div class="login-card">

          <div class="login-header">

            <div class="school-logo">
              🏫
            </div>

            <h1>
                Government Sr.Sec School
                    Paderi
            </h1>

           

          </div>


          <div class="login-form">

            <!-- Mobile Number -->

            <div class="form-group">

              <label for="mobileNumber">
                Mobile Number
              </label>

              <div class="mobile-input">

                <span class="country-code">
                  +91
                </span>

                <input
                  type="tel"
                  id="mobileNumber"
                  maxlength="10"
                  placeholder="Enter 10 digit mobile number"
                  autocomplete="tel"
                />

              </div>

            </div>


            <!-- Password -->

            <div class="form-group">

              <label for="password">
                Password
              </label>

              <div class="password-wrapper">

                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  autocomplete="current-password"
                />

                <button
                  type="button"
                  id="togglePassword"
                  class="password-toggle"
                >
                  Show
                </button>

              </div>

            </div>


            <!-- Role -->

            <div class="form-group">

              <label for="role">
                Login As
              </label>

              <select id="role">

                <option value="Student">
                  Student
                </option>

                <option value="Teacher">
                  Teacher
                </option>

                <option value="Parent">
                  Parent
                </option>

                <option value="Admin">
                  Admin
                </option>

              </select>

            </div>


            <!-- Remember Me -->

            <label class="remember-me">

              <input
                type="checkbox"
                id="rememberMe"
              />

              <span>
                Remember me
              </span>

            </label>


            <!-- Login -->

            <button
              type="button"
              id="loginBtn"
              class="login-button"
            >
              Login
            </button>


            <!-- Forgot Password -->

            <button
              type="button"
              id="forgotPasswordBtn"
              class="forgot-button"
            >
              Forgot Password?
            </button>

          </div>

        </div>

      </div>

    </div>

  `


  /* =========================================
     MOBILE INPUT
  ========================================= */

  const mobileInput =
    document.querySelector('#mobileNumber')

  if (mobileInput) {

    mobileInput.addEventListener(
      'input',
      function () {

        let value = this.value

        value = value.replace(/\D/g, '')

        if (value.length > 10) {
          value = value.slice(0, 10)
        }

        this.value = value

      }
    )

  }


  /* =========================================
     PASSWORD SHOW / HIDE
  ========================================= */

  const passwordInput =
    document.querySelector('#password')

  const togglePassword =
    document.querySelector('#togglePassword')

  if (passwordInput && togglePassword) {

    togglePassword.addEventListener(
      'click',
      function () {

        if (passwordInput.type === 'password') {

          passwordInput.type = 'text'

          togglePassword.textContent = 'Hide'

        } else {

          passwordInput.type = 'password'

          togglePassword.textContent = 'Show'

        }

      }
    )

  }


  /* =========================================
     ROLE CHANGE
  ========================================= */

  const roleSelect =
    document.querySelector('#role')

  if (roleSelect) {

    roleSelect.addEventListener(
      'change',
      function () {

        selectedRole = this.value

      }
    )

  }


  /* =========================================
     LOGIN BUTTON
  ========================================= */

  const loginBtn =
    document.querySelector('#loginBtn')

  if (loginBtn) {

    loginBtn.addEventListener(
      'click',
      handleLogin
    )

  }


  /* =========================================
     ENTER KEY LOGIN
  ========================================= */

  const passwordField =
    document.querySelector('#password')

  if (passwordField) {

    passwordField.addEventListener(
      'keydown',
      function (event) {

        if (event.key === 'Enter') {

          event.preventDefault()

          handleLogin()

        }

      }
    )

  }


  /* =========================================
     FORGOT PASSWORD
  ========================================= */

  const forgotPasswordBtn =
    document.querySelector('#forgotPasswordBtn')

  if (forgotPasswordBtn) {

    forgotPasswordBtn.addEventListener(
      'click',
      renderForgotPasswordPage
    )

  }

}


/* =========================================
   LOGIN FUNCTION
========================================= */

function handleLogin() {

  const mobileInput =
    document.querySelector('#mobileNumber')

  const passwordInput =
    document.querySelector('#password')

  const roleSelect =
    document.querySelector('#role')

  const rememberMe =
    document.querySelector('#rememberMe')


  /* =========================================
     SAFETY CHECK
  ========================================= */

  if (
    !mobileInput ||
    !passwordInput ||
    !roleSelect ||
    !rememberMe
  ) {

    alert(
      'Login form could not be loaded. Please refresh the page.'
    )

    return

  }


  const mobile =
    mobileInput.value.trim()

  const password =
    passwordInput.value.trim()

  const role =
    roleSelect.value


  /* =========================================
     MOBILE VALIDATION
  ========================================= */

  if (mobile === '') {

    alert(
      'Please enter your mobile number.'
    )

    mobileInput.focus()

    return

  }


  if (!/^[6-9]\d{9}$/.test(mobile)) {

    alert(
      'Please enter a valid 10 digit Indian mobile number starting with 6, 7, 8 or 9.'
    )

    mobileInput.focus()

    return

  }


  /* =========================================
     PASSWORD VALIDATION
  ========================================= */

  if (password === '') {

    alert(
      'Please enter your password.'
    )

    passwordInput.focus()

    return

  }


  /* =========================================
     REMEMBER ME IS REQUIRED
  ========================================= */

  if (!rememberMe.checked) {

    alert(
      'Please select "Remember me" before login.'
    )

    rememberMe.focus()

    return

  }


  /* =========================================
     SAVE ROLE
  ========================================= */

  selectedRole = role


  /* =========================================
     LOGIN ROUTING
  ========================================= */

  if (role === 'Student') {

    openStudentDashboard()

    return

  }


  if (role === 'Teacher') {

    openTeacherDashboard()

    return

  }


  if (role === 'Parent') {

    openParentDashboard()

    return

  }


  if (role === 'Admin') {

    openAdminDashboard()

    return

  }


  alert(
    'Please select a valid login role.'
  )

}


/* =========================================
   STUDENT DASHBOARD
========================================= */

function openStudentDashboard() {

  try {

    app.innerHTML =
      StudentDashboard('Student')

    setupStudentNavigation('Student')

  } catch (error) {

    console.error(
      'Student Dashboard Error:',
      error
    )

    alert(
      'Unable to open Student Dashboard. Please check StudentDashboard.js.'
    )

  }

}


/* =========================================
   TEACHER DASHBOARD
========================================= */

function openTeacherDashboard() {

  try {

    app.innerHTML =
      TeacherDashboard()

    setupTeacherNavigation()

  } catch (error) {

    console.error(
      'Teacher Dashboard Error:',
      error
    )

    alert(
      'Unable to open Teacher Dashboard. Please check TeacherDashboard.js.'
    )

  }

}


/* =========================================
   PARENT DASHBOARD
========================================= */

function openParentDashboard() {

  try {

    app.innerHTML =
      ParentDashboard()

    setupParentNavigation()

  } catch (error) {

    console.error(
      'Parent Dashboard Error:',
      error
    )

    alert(
      'Unable to open Parent Dashboard. Please check ParentDashboard.js.'
    )

  }

}


/* =========================================
   ADMIN DASHBOARD
========================================= */

function openAdminDashboard() {

  try {

    app.innerHTML =
      AdminDashboard('Administrator')

    setupAdminNavigation()

  } catch (error) {

    console.error(
      'Admin Dashboard Error:',
      error
    )

    alert(
      'Unable to open Admin Dashboard. Please check AdminDashboard.js.'
    )

  }

}


/* =========================================
   FORGOT PASSWORD PAGE
========================================= */

function renderForgotPasswordPage() {

  clearOtpTimer()

  app.innerHTML = `

    <div class="login-page">

      <div class="recovery-container">

        <div class="recovery-card">

          <div class="recovery-header">

            <div class="school-logo">
              🔐
            </div>

            <h2>
              Forgot Password
            </h2>

            <p>
              Enter your registered mobile number
            </p>

          </div>


          <div class="form-group">

            <label for="recoveryMobile">
              Mobile Number
            </label>

            <input
              type="tel"
              id="recoveryMobile"
              class="recovery-input"
              maxlength="10"
              placeholder="Enter 10 digit mobile number"
              autocomplete="tel"
            />

          </div>


          <button
            type="button"
            id="sendOtpBtn"
            class="recovery-button"
          >
            Send OTP
          </button>


          <button
            type="button"
            id="backToLoginBtn"
            class="secondary-button"
          >
            Back to Login
          </button>

        </div>

      </div>

    </div>

  `


  /* =========================================
     RECOVERY MOBILE VALIDATION
  ========================================= */

  const recoveryInput =
    document.querySelector('#recoveryMobile')

  if (recoveryInput) {

    recoveryInput.addEventListener(
      'input',
      function () {

        let value = this.value

        value = value.replace(/\D/g, '')

        if (value.length > 10) {
          value = value.slice(0, 10)
        }

        this.value = value

      }
    )

  }


  /* =========================================
     SEND OTP
  ========================================= */

  const sendOtpBtn =
    document.querySelector('#sendOtpBtn')

  if (sendOtpBtn) {

    sendOtpBtn.addEventListener(
      'click',
      sendOtp
    )

  }


  /* =========================================
     BACK TO LOGIN
  ========================================= */

  const backToLoginBtn =
    document.querySelector('#backToLoginBtn')

  if (backToLoginBtn) {

    backToLoginBtn.addEventListener(
      'click',
      renderLoginPage
    )

  }

}


/* =========================================
   SEND OTP
========================================= */

function sendOtp() {

  const recoveryInput =
    document.querySelector('#recoveryMobile')

  if (!recoveryInput) {
    return
  }


  const mobile =
    recoveryInput.value.trim()


  /* =========================================
     MOBILE VALIDATION
  ========================================= */

  if (!/^[6-9]\d{9}$/.test(mobile)) {

    alert(
      'Please enter a valid 10 digit mobile number.'
    )

    recoveryInput.focus()

    return

  }


  /* =========================================
     SAVE RECOVERY MOBILE
  ========================================= */

  recoveryMobile = mobile


  /* =========================================
     GENERATE DEMO OTP
  ========================================= */

  generatedOtp =
    Math.floor(
      100000 +
      Math.random() * 900000
    ).toString()


  /* =========================================
     OTP EXPIRY - 5 MINUTES
  ========================================= */

  otpExpiryTime =
    Date.now() +
    5 * 60 * 1000


  /* =========================================
     DEMO OTP
  ========================================= */

  alert(
    'Demo OTP: ' + generatedOtp
  )


  /* =========================================
     SHOW OTP PAGE
  ========================================= */

  renderOtpPage()

}


/* =========================================
   OTP PAGE
========================================= */

function renderOtpPage() {

  clearOtpTimer()

  app.innerHTML = `

    <div class="login-page">

      <div class="recovery-container">

        <div class="recovery-card">

          <div class="recovery-header">

            <div class="school-logo">
              📱
            </div>

            <h2>
              Verify OTP
            </h2>

            <p>
              Enter the 6 digit OTP sent to your mobile number
            </p>

          </div>


          <div class="form-group">

            <label for="otpInput">
              OTP
            </label>

            <input
              type="text"
              id="otpInput"
              class="recovery-input"
              maxlength="6"
              inputmode="numeric"
              placeholder="Enter 6 digit OTP"
            />

          </div>


          <div class="otp-info">
            OTP is valid for 5 minutes.
          </div>


          <div
            id="otpTimer"
            class="otp-timer"
          >
            OTP expires in 05:00
          </div>


          <button
            type="button"
            id="verifyOtpBtn"
            class="recovery-button"
          >
            Verify OTP
          </button>


          <button
            type="button"
            id="resendOtpBtn"
            class="secondary-button"
          >
            Resend OTP
          </button>


          <button
            type="button"
            id="backLoginFromOtpBtn"
            class="secondary-button"
          >
            Back to Login
          </button>

        </div>

      </div>

    </div>

  `


  /* =========================================
     OTP INPUT
  ========================================= */

  const otpInput =
    document.querySelector('#otpInput')

  if (otpInput) {

    otpInput.addEventListener(
      'input',
      function () {

        let value =
          this.value.replace(/\D/g, '')

        if (value.length > 6) {
          value = value.slice(0, 6)
        }

        this.value = value

      }
    )

  }


  /* =========================================
     VERIFY OTP
  ========================================= */

  const verifyOtpBtn =
    document.querySelector('#verifyOtpBtn')

  if (verifyOtpBtn) {

    verifyOtpBtn.addEventListener(
      'click',
      verifyOtp
    )

  }


  /* =========================================
     RESEND OTP
  ========================================= */

  const resendOtpBtn =
    document.querySelector('#resendOtpBtn')

  if (resendOtpBtn) {

    resendOtpBtn.addEventListener(
      'click',
      resendOtp
    )

  }


  /* =========================================
     BACK TO LOGIN
  ========================================= */

  const backLoginFromOtpBtn =
    document.querySelector(
      '#backLoginFromOtpBtn'
    )

  if (backLoginFromOtpBtn) {

    backLoginFromOtpBtn.addEventListener(
      'click',
      renderLoginPage
    )

  }


  /* =========================================
     START TIMER
  ========================================= */

  startOtpTimer()

}


/* =========================================
   VERIFY OTP
========================================= */

function verifyOtp() {

  const otpInput =
    document.querySelector('#otpInput')

  if (!otpInput) {
    return
  }


  const enteredOtp =
    otpInput.value.trim()


  /* =========================================
     EMPTY OTP
  ========================================= */

  if (enteredOtp === '') {

    alert(
      'Please enter the OTP.'
    )

    otpInput.focus()

    return

  }


  /* =========================================
     OTP LENGTH
  ========================================= */

  if (!/^\d{6}$/.test(enteredOtp)) {

    alert(
      'Please enter a valid 6 digit OTP.'
    )

    otpInput.focus()

    return

  }


  /* =========================================
     EXPIRY CHECK
  ========================================= */

  if (Date.now() > otpExpiryTime) {

    clearOtpTimer()

    alert(
      'OTP has expired. Please request a new OTP.'
    )

    return

  }


  /* =========================================
     OTP MATCH
  ========================================= */

  if (enteredOtp !== generatedOtp) {

    alert(
      'Invalid OTP. Please enter the correct OTP.'
    )

    otpInput.focus()

    return

  }


  /* =========================================
     OTP VERIFIED
  ========================================= */

  clearOtpTimer()

  alert(
    'OTP verified successfully.'
  )


  renderResetPasswordPage()

}


/* =========================================
   RESEND OTP
========================================= */

function resendOtp() {

  if (!recoveryMobile) {

    renderForgotPasswordPage()

    return

  }


  /* =========================================
     GENERATE NEW OTP
  ========================================= */

  generatedOtp =
    Math.floor(
      100000 +
      Math.random() * 900000
    ).toString()


  /* =========================================
     RESET EXPIRY
  ========================================= */

  otpExpiryTime =
    Date.now() +
    5 * 60 * 1000


  alert(
    'New Demo OTP: ' + generatedOtp
  )


  renderOtpPage()

}


/* =========================================
   OTP TIMER
========================================= */

function startOtpTimer() {

  clearOtpTimer()


  const timerElement =
    document.querySelector('#otpTimer')

  if (!timerElement) {
    return
  }


  function updateTimer() {

    const remaining =
      otpExpiryTime - Date.now()


    if (remaining <= 0) {

      timerElement.textContent =
        'OTP expired'

      clearOtpTimer()

      return

    }


    const totalSeconds =
      Math.floor(
        remaining / 1000
      )


    const minutes =
      Math.floor(
        totalSeconds / 60
      )


    const seconds =
      totalSeconds % 60


    const formattedMinutes =
      String(minutes).padStart(2, '0')

    const formattedSeconds =
      String(seconds).padStart(2, '0')


    timerElement.textContent =
      'OTP expires in ' +
      formattedMinutes +
      ':' +
      formattedSeconds

  }


  updateTimer()


  otpTimerInterval =
    setInterval(
      updateTimer,
      1000
    )

}


/* =========================================
   CLEAR OTP TIMER
========================================= */

function clearOtpTimer() {

  if (otpTimerInterval !== null) {

    clearInterval(
      otpTimerInterval
    )

    otpTimerInterval = null

  }

}


/* =========================================
   RESET PASSWORD PAGE
========================================= */

function renderResetPasswordPage() {

  app.innerHTML = `

    <div class="login-page">

      <div class="recovery-container">

        <div class="recovery-card">

          <div class="recovery-header">

            <div class="school-logo">
              🔑
            </div>

            <h2>
              Reset Password
            </h2>

            <p>
              Create a new password for your account
            </p>

          </div>


          <!-- New Password -->

          <div class="form-group">

            <label for="newPassword">
              New Password
            </label>

            <input
              type="password"
              id="newPassword"
              class="recovery-input"
              placeholder="Enter new password"
              autocomplete="new-password"
            />

          </div>


          <!-- Confirm Password -->

          <div class="form-group">

            <label for="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              class="recovery-input"
              placeholder="Confirm new password"
              autocomplete="new-password"
            />

          </div>


          <button
            type="button"
            id="resetPasswordBtn"
            class="recovery-button"
          >
            Reset Password
          </button>


          <button
            type="button"
            id="cancelResetBtn"
            class="secondary-button"
          >
            Back to Login
          </button>

        </div>

      </div>

    </div>

  `


  /* =========================================
     RESET BUTTON
  ========================================= */

  const resetPasswordBtn =
    document.querySelector(
      '#resetPasswordBtn'
    )

  if (resetPasswordBtn) {

    resetPasswordBtn.addEventListener(
      'click',
      resetPassword
    )

  }


  /* =========================================
     CANCEL RESET
  ========================================= */

  const cancelResetBtn =
    document.querySelector(
      '#cancelResetBtn'
    )

  if (cancelResetBtn) {

    cancelResetBtn.addEventListener(
      'click',
      renderLoginPage
    )

  }

}


/* =========================================
   RESET PASSWORD
========================================= */

function resetPassword() {

  const newPasswordInput =
    document.querySelector('#newPassword')

  const confirmPasswordInput =
    document.querySelector('#confirmPassword')


  if (
    !newPasswordInput ||
    !confirmPasswordInput
  ) {

    return

  }


  const newPassword =
    newPasswordInput.value

  const confirmPassword =
    confirmPasswordInput.value


  /* =========================================
     EMPTY PASSWORD
  ========================================= */

  if (newPassword === '') {

    alert(
      'Please enter a new password.'
    )

    newPasswordInput.focus()

    return

  }


  /* =========================================
     MINIMUM LENGTH
  ========================================= */

  if (newPassword.length < 6) {

    alert(
      'Password must be at least 6 characters long.'
    )

    newPasswordInput.focus()

    return

  }


  /* =========================================
     CONFIRM PASSWORD
  ========================================= */

  if (confirmPassword === '') {

    alert(
      'Please confirm your new password.'
    )

    confirmPasswordInput.focus()

    return

  }


  /* =========================================
     PASSWORD MATCH
  ========================================= */

  if (newPassword !== confirmPassword) {

    alert(
      'New password and confirm password do not match.'
    )

    confirmPasswordInput.focus()

    return

  }


  /* =========================================
     PASSWORD RESET SUCCESS
  ========================================= */

  alert(
    'Password reset successfully for +91 ' +
    recoveryMobile +
    '. Please login with your new password.'
  )


  /* =========================================
     CLEAR RECOVERY DATA
  ========================================= */

  generatedOtp = ''

  otpExpiryTime = 0

  recoveryMobile = ''


  /* =========================================
     RETURN LOGIN
  ========================================= */

  renderLoginPage()

}


/* =========================================
   INITIAL PAGE
========================================= */

renderLoginPage()