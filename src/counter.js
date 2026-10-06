import './style.css'
import './second.css'
import './Login.css'

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


/* =========================================
   LOGIN PAGE
========================================= */

function renderLoginPage() {

  document.querySelector('#app').innerHTML = `

    <div class="login-page">

      <!-- TOP HEADER -->
      <header class="login-topbar">

        <div class="school-brand">

          <div class="school-brand-icon">
            🏫
          </div>

          <div class="school-brand-text">

            <h1>Government School</h1>

            <p>
              Digital School Management System
            </p>

          </div>

        </div>

        <div class="system-badge">
          <span class="status-dot"></span>
          School Portal
        </div>

      </header>


      <!-- MAIN LOGIN AREA -->
      <main class="login-main">

        <div class="login-container">


          <!-- LEFT INFORMATION PANEL -->
          <section class="login-info-panel">

            <div class="info-content">

              <span class="welcome-badge">
                Welcome to your school portal
              </span>

              <h2>
                Learn.
                <span>Grow.</span>
                Succeed.
              </h2>

              <p>
                Access your academic information, attendance,
                assignments, results and school services from
                one secure digital platform.
              </p>


              <div class="info-features">

                <div class="info-feature">

                  <div class="feature-icon">
                    📚
                  </div>

                  <div>
                    <strong>Academic Management</strong>
                    <span>Classes, assignments and results</span>
                  </div>

                </div>


                <div class="info-feature">

                  <div class="feature-icon">
                    📊
                  </div>

                  <div>
                    <strong>Track Progress</strong>
                    <span>Attendance and academic performance</span>
                  </div>

                </div>


                <div class="info-feature">

                  <div class="feature-icon">
                    🔔
                  </div>

                  <div>
                    <strong>Stay Connected</strong>
                    <span>Notices and school communication</span>
                  </div>

                </div>

              </div>

            </div>


            <div class="info-decoration decoration-one"></div>
            <div class="info-decoration decoration-two"></div>

          </section>


          <!-- LOGIN CARD -->
          <section class="login-card">

            <div class="login-card-header">

              <div class="login-card-icon">
                🏫
              </div>

              <div>
                <h2>Welcome Back</h2>

                <p>
                  Login to continue to your school portal
                </p>
              </div>

            </div>


            <!-- ROLE SELECTOR -->

            <div class="role-section">

              <label class="section-label">
                Select Portal
              </label>

              <div class="role-buttons">


                <button
                  type="button"
                  class="role-btn active"
                  data-role="Student"
                >

                  <span class="role-icon">
                    👨‍🎓
                  </span>

                  <span class="role-name">
                    Student
                  </span>

                  <span class="role-check">
                    ✓
                  </span>

                </button>


                <button
                  type="button"
                  class="role-btn"
                  data-role="Teacher"
                >

                  <span class="role-icon">
                    👨‍🏫
                  </span>

                  <span class="role-name">
                    Teacher
                  </span>

                  <span class="role-check">
                    ✓
                  </span>

                </button>


                <button
                  type="button"
                  class="role-btn"
                  data-role="Parent"
                >

                  <span class="role-icon">
                    👨‍👩‍👧
                  </span>

                  <span class="role-name">
                    Parent
                  </span>

                  <span class="role-check">
                    ✓
                  </span>

                </button>


                <button
                  type="button"
                  class="role-btn"
                  data-role="Admin"
                >

                  <span class="role-icon">
                    🛡️
                  </span>

                  <span class="role-name">
                    Admin
                  </span>

                  <span class="role-check">
                    ✓
                  </span>

                </button>

              </div>

            </div>


            <!-- LOGIN FORM -->

            <form id="loginForm" class="login-form">

              <div class="form-group">

                <label for="username">
                  Mobile Number
                </label>

                <div class="input-wrapper mobile-wrapper">

                  <span class="input-icon">
                    📱
                  </span>

                  <span class="country-code">
                    +91
                  </span>

                  <input
                    type="tel"
                    id="username"
                    placeholder="Enter 10 digit mobile number"
                    maxlength="10"
                    inputmode="numeric"
                    autocomplete="tel"
                    required
                  />

                </div>

              </div>


              <div class="form-group">

                <label for="password">
                  Password
                </label>

                <div class="input-wrapper">

                  <span class="input-icon">
                    🔒
                  </span>

                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    autocomplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    class="password-toggle"
                    id="passwordToggle"
                    aria-label="Show password"
                  >
                    👁
                  </button>

                </div>

              </div>


              <div class="login-options">

                <label class="remember-me">

                  <input
                    type="checkbox"
                    id="rememberMe"
                  />

                  <span class="custom-checkbox"></span>

                  <span>
                    Remember me
                  </span>

                </label>


                <button
                  type="button"
                  class="forgot-btn"
                  id="forgotPasswordBtn"
                >
                  Forgot Password?
                </button>

              </div>


              <button
                type="submit"
                class="login-btn"
              >

                <span>
                  Login
                </span>

                <span class="login-arrow">
                  →
                </span>

              </button>

            </form>


            <div class="secure-login">

              <span class="secure-icon">
                🔐
              </span>

              <span>
                Your login information is securely protected
              </span>

            </div>


            <p class="help-text">
              Need help?
              <span>
                Contact your school administrator
              </span>
            </p>

          </section>

        </div>

      </main>


      <!-- FOOTER -->

      <footer class="login-footer">

        <span>
          © 2026 Government School Management System
        </span>

        <span class="footer-separator">
          •
        </span>

        <span>
          Secure School Portal
        </span>

      </footer>

    </div>

  `

  setupLoginEvents()
}


/* =========================================
   LOGIN EVENTS
========================================= */

function setupLoginEvents() {

  const roleButtons =
    document.querySelectorAll('.role-btn')

  roleButtons.forEach((button) => {

    button.addEventListener('click', () => {

      roleButtons.forEach((btn) => {
        btn.classList.remove('active')
      })

      button.classList.add('active')

      selectedRole =
        button.dataset.role

    })

  })


  /* =========================================
     MOBILE INPUT
  ========================================= */

  const mobileInput =
    document.querySelector('#username')

  if (mobileInput) {

    mobileInput.addEventListener('input', () => {

      mobileInput.value =
        mobileInput.value
          .replace(/\D/g, '')
          .slice(0, 10)

    })

  }


  /* =========================================
     PASSWORD SHOW / HIDE
  ========================================= */

  const passwordToggle =
    document.querySelector('#passwordToggle')

  const passwordInput =
    document.querySelector('#password')

  if (passwordToggle && passwordInput) {

    passwordToggle.addEventListener('click', () => {

      if (passwordInput.type === 'password') {

        passwordInput.type = 'text'

        passwordToggle.textContent = '🙈'

        passwordToggle.setAttribute(
          'aria-label',
          'Hide password'
        )

      } else {

        passwordInput.type = 'password'

        passwordToggle.textContent = '👁'

        passwordToggle.setAttribute(
          'aria-label',
          'Show password'
        )

      }

    })

  }


  /* =========================================
     FORGOT PASSWORD
  ========================================= */

  const forgotPasswordBtn =
    document.querySelector('#forgotPasswordBtn')

  if (forgotPasswordBtn) {

    forgotPasswordBtn.addEventListener('click', () => {

      renderForgotPasswordPage()

    })

  }


  /* =========================================
     LOGIN FORM
  ========================================= */

  const loginForm =
    document.querySelector('#loginForm')

  if (loginForm) {

    loginForm.addEventListener(
      'submit',
      handleLogin
    )

  }

}


/* =========================================
   LOGIN
========================================= */

function handleLogin(event) {

  event.preventDefault()


  const mobileInput =
    document.querySelector('#username')

  const passwordInput =
    document.querySelector('#password')


  const mobile =
    mobileInput.value.trim()

  const password =
    passwordInput.value


  /* =========================================
     MOBILE LENGTH
  ========================================= */

  if (mobile.length !== 10) {

    alert(
      'Please enter a 10-digit mobile number.'
    )

    mobileInput.focus()

    return

  }


  /* =========================================
     INDIAN MOBILE VALIDATION
  ========================================= */

  if (!/^[6-9]\d{9}$/.test(mobile)) {

    alert(
      'Please enter a valid 10-digit Indian mobile number.'
    )

    mobileInput.focus()

    return

  }


  /* =========================================
     PASSWORD VALIDATION
  ========================================= */

  if (!password.trim()) {

    alert(
      'Please enter your password.'
    )

    passwordInput.focus()

    return

  }


  /* =========================================
     STUDENT
  ========================================= */

  if (selectedRole === 'Student') {

    document.querySelector('#app').innerHTML =
      StudentDashboard('Student')

    setupStudentNavigation('Student')

    return

  }


  /* =========================================
     TEACHER
  ========================================= */

  if (selectedRole === 'Teacher') {

    document.querySelector('#app').innerHTML =
      TeacherDashboard()

    setupTeacherNavigation()

    return

  }


  /* =========================================
     PARENT
  ========================================= */

  if (selectedRole === 'Parent') {

    document.querySelector('#app').innerHTML =
      ParentDashboard()

    setupParentNavigation()

    return

  }


  /* =========================================
     ADMIN
  ========================================= */

  if (selectedRole === 'Admin') {

    document.querySelector('#app').innerHTML =
      AdminDashboard('Administrator')

    setupAdminNavigation()

    return

  }

}


/* =========================================
   FORGOT PASSWORD PAGE
========================================= */

function renderForgotPasswordPage() {

  document.querySelector('#app').innerHTML = `

    <div class="recovery-page">

      <div class="recovery-card">

        <button
          type="button"
          class="back-login-btn"
          id="backToLogin"
        >
          ← Back to Login
        </button>


        <div class="recovery-icon">
          🔐
        </div>


        <div class="recovery-header">

          <h2>Forgot Password?</h2>

          <p>
            Enter your registered mobile number
            to reset your password.
          </p>

        </div>


        <form
          id="forgotPasswordForm"
          class="recovery-form"
        >

          <div class="form-group">

            <label for="recoveryMobile">
              Registered Mobile Number
            </label>

            <div class="input-wrapper mobile-wrapper">

              <span class="input-icon">
                📱
              </span>

              <span class="country-code">
                +91
              </span>

              <input
                type="tel"
                id="recoveryMobile"
                placeholder="Enter 10 digit mobile number"
                maxlength="10"
                inputmode="numeric"
                required
              />

            </div>

          </div>


          <button
            type="submit"
            class="recovery-btn"
          >

            Send OTP

            <span>
              →
            </span>

          </button>

        </form>


        <div class="recovery-security">

          <span>
            🔒
          </span>

          <span>
            We will send a verification OTP
            to your registered mobile number.
          </span>

        </div>

      </div>

    </div>

  `


  const mobileInput =
    document.querySelector('#recoveryMobile')


  mobileInput.addEventListener('input', () => {

    mobileInput.value =
      mobileInput.value
        .replace(/\D/g, '')
        .slice(0, 10)

  })


  const backButton =
    document.querySelector('#backToLogin')

  backButton.addEventListener('click', () => {

    renderLoginPage()

  })


  const form =
    document.querySelector('#forgotPasswordForm')

  form.addEventListener('submit', sendOtp)

}


/* =========================================
   SEND OTP
========================================= */

function sendOtp(event) {

  event.preventDefault()


  const mobileInput =
    document.querySelector('#recoveryMobile')


  const mobile =
    mobileInput.value.trim()


  if (mobile.length !== 10) {

    alert(
      'Please enter a 10-digit mobile number.'
    )

    mobileInput.focus()

    return

  }


  if (!/^[6-9]\d{9}$/.test(mobile)) {

    alert(
      'Please enter a valid 10-digit Indian mobile number.'
    )

    mobileInput.focus()

    return

  }


  recoveryMobile = mobile


  /* =========================================
     DEMO OTP
  ========================================= */

  generatedOtp =
    Math.floor(
      100000 +
      Math.random() * 900000
    ).toString()


  otpExpiryTime =
    Date.now() + 5 * 60 * 1000


  /*
     This is frontend demo OTP.
     Real SMS OTP requires backend integration.
  */

  alert(
    'Demo OTP: ' + generatedOtp
  )


  renderOtpPage()

}


/* =========================================
   OTP PAGE
========================================= */

function renderOtpPage() {

  document.querySelector('#app').innerHTML = `

    <div class="recovery-page">

      <div class="recovery-card otp-card">

        <button
          type="button"
          class="back-login-btn"
          id="backToForgot"
        >
          ← Back
        </button>


        <div class="recovery-icon">
          📲
        </div>


        <div class="recovery-header">

          <h2>Verify OTP</h2>

          <p>
            Enter the 6-digit OTP sent to
            <strong>
              +91 ${recoveryMobile}
            </strong>
          </p>

        </div>


        <form
          id="otpForm"
          class="recovery-form"
        >

          <div class="form-group">

            <label for="otpInput">
              Verification OTP
            </label>

            <div class="otp-input-wrapper">

              <input
                type="text"
                id="otpInput"
                class="otp-input"
                placeholder="Enter 6 digit OTP"
                maxlength="6"
                inputmode="numeric"
                autocomplete="one-time-code"
                required
              />

            </div>

          </div>


          <div
            class="otp-timer"
            id="otpTimer"
          >
            OTP expires in 05:00
          </div>


          <button
            type="submit"
            class="recovery-btn"
          >

            Verify OTP

            <span>
              →
            </span>

          </button>

        </form>


        <button
          type="button"
          class="resend-btn"
          id="resendOtpBtn"
        >
          Resend OTP
        </button>


        <div class="recovery-security">

          <span>
            🔒
          </span>

          <span>
            Never share your OTP with anyone.
          </span>

        </div>

      </div>

    </div>

  `


  const otpInput =
    document.querySelector('#otpInput')


  otpInput.addEventListener('input', () => {

    otpInput.value =
      otpInput.value
        .replace(/\D/g, '')
        .slice(0, 6)

  })


  const backButton =
    document.querySelector('#backToForgot')

  backButton.addEventListener('click', () => {

    renderForgotPasswordPage()

  })


  const form =
    document.querySelector('#otpForm')

  form.addEventListener('submit', verifyOtp)


  const resendButton =
    document.querySelector('#resendOtpBtn')

  resendButton.addEventListener(
    'click',
    resendOtp
  )


  startOtpTimer()

}


/* =========================================
   OTP TIMER
========================================= */

let otpTimerInterval = null


function startOtpTimer() {

  if (otpTimerInterval) {

    clearInterval(otpTimerInterval)

  }


  updateOtpTimer()


  otpTimerInterval =
    setInterval(() => {

      updateOtpTimer()

    }, 1000)

}


/* =========================================
   UPDATE OTP TIMER
========================================= */

function updateOtpTimer() {

  const timer =
    document.querySelector('#otpTimer')


  if (!timer) {

    if (otpTimerInterval) {
      clearInterval(otpTimerInterval)
    }

    return

  }


  const remaining =
    Math.max(
      0,
      otpExpiryTime - Date.now()
    )


  if (remaining <= 0) {

    timer.textContent =
      'OTP expired. Please resend OTP.'

    timer.classList.add('expired')

    if (otpTimerInterval) {

      clearInterval(otpTimerInterval)

    }

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


  timer.textContent =
    'OTP expires in ' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0')

}


/* =========================================
   VERIFY OTP
========================================= */

function verifyOtp(event) {

  event.preventDefault()


  const otpInput =
    document.querySelector('#otpInput')


  const enteredOtp =
    otpInput.value.trim()


  if (Date.now() > otpExpiryTime) {

    alert(
      'OTP has expired. Please resend OTP.'
    )

    return

  }


  if (enteredOtp.length !== 6) {

    alert(
      'Please enter the 6-digit OTP.'
    )

    otpInput.focus()

    return

  }


  if (enteredOtp !== generatedOtp) {

    alert(
      'Invalid OTP. Please try again.'
    )

    otpInput.focus()

    return

  }


  if (otpTimerInterval) {

    clearInterval(otpTimerInterval)

  }


  alert(
    'OTP verified successfully.'
  )


  renderResetPasswordPage()

}


/* =========================================
   RESEND OTP
========================================= */

function resendOtp() {

  generatedOtp =
    Math.floor(
      100000 +
      Math.random() * 900000
    ).toString()


  otpExpiryTime =
    Date.now() + 5 * 60 * 1000


  alert(
    'New Demo OTP: ' + generatedOtp
  )


  const otpInput =
    document.querySelector('#otpInput')


  if (otpInput) {

    otpInput.value = ''

    otpInput.focus()

  }


  const timer =
    document.querySelector('#otpTimer')


  if (timer) {

    timer.classList.remove('expired')

  }


  startOtpTimer()

}


/* =========================================
   RESET PASSWORD PAGE
========================================= */

function renderResetPasswordPage() {

  document.querySelector('#app').innerHTML = `

    <div class="recovery-page">

      <div class="recovery-card">

        <div class="recovery-icon success-icon">
          🔑
        </div>


        <div class="recovery-header">

          <h2>Reset Password</h2>

          <p>
            Create a new secure password for
            your account.
          </p>

        </div>


        <form
          id="resetPasswordForm"
          class="recovery-form"
        >

          <div class="form-group">

            <label for="newPassword">
              New Password
            </label>

            <div class="input-wrapper">

              <span class="input-icon">
                🔒
              </span>

              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                required
              />

              <button
                type="button"
                class="password-toggle"
                id="newPasswordToggle"
              >
                👁
              </button>

            </div>

          </div>


          <div class="form-group">

            <label for="confirmPassword">
              Confirm Password
            </label>

            <div class="input-wrapper">

              <span class="input-icon">
                🔒
              </span>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                required
              />

              <button
                type="button"
                class="password-toggle"
                id="confirmPasswordToggle"
              >
                👁
              </button>

            </div>

          </div>


          <div class="password-rules">

            <div>
              ✓ Password should not be empty
            </div>

            <div>
              ✓ Both passwords should match
            </div>

          </div>


          <button
            type="submit"
            class="recovery-btn"
          >

            Reset Password

            <span>
              →
            </span>

          </button>

        </form>


        <div class="recovery-security">

          <span>
            🛡️
          </span>

          <span>
            Use a password that is difficult
            for others to guess.
          </span>

        </div>

      </div>

    </div>

  `


  setupPasswordToggle(
    'newPasswordToggle',
    'newPassword'
  )


  setupPasswordToggle(
    'confirmPasswordToggle',
    'confirmPassword'
  )


  const form =
    document.querySelector('#resetPasswordForm')


  form.addEventListener(
    'submit',
    handlePasswordReset
  )

}


/* =========================================
   PASSWORD TOGGLE
========================================= */

function setupPasswordToggle(
  buttonId,
  inputId
) {

  const button =
    document.querySelector('#' + buttonId)

  const input =
    document.querySelector('#' + inputId)


  if (!button || !input) {
    return
  }


  button.addEventListener('click', () => {

    if (input.type === 'password') {

      input.type = 'text'

      button.textContent = '🙈'

    } else {

      input.type = 'password'

      button.textContent = '👁'

    }

  })

}


/* =========================================
   RESET PASSWORD
========================================= */

function handlePasswordReset(event) {

  event.preventDefault()


  const newPassword =
    document.querySelector('#newPassword').value


  const confirmPassword =
    document.querySelector('#confirmPassword').value


  if (!newPassword.trim()) {

    alert(
      'Please enter a new password.'
    )

    return

  }


  if (!confirmPassword.trim()) {

    alert(
      'Please confirm your new password.'
    )

    return

  }


  if (newPassword !== confirmPassword) {

    alert(
      'Passwords do not match.'
    )

    return

  }


  alert(
    'Password reset successfully. Please login with your new password.'
  )


  generatedOtp = ''

  recoveryMobile = ''


  renderLoginPage()

}


/* =========================================
   START APPLICATION
========================================= */

renderLoginPage()