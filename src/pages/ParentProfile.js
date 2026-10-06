/* =========================================
   PARENT PROFILE / MY CHILD
========================================= */

const STORAGE_KEY = 'parentChildProfile'


const defaultChildData = {
  studentName: 'Student Name',
  className: '10',
  section: 'A',
  rollNo: '24',
  admissionNo: 'GS20240024',
  academicSession: '2026-27',

  fatherName: 'Father Name',
  motherName: 'Mother Name',
  guardianPhone: '9876543210',
  guardianEmail: 'parent@example.com',

  schoolName: 'Government Senior Secondary School',
  classTeacher: 'Class Teacher',
  admissionDate: '10 April 2024'
}


/* =========================================
   GET PROFILE DATA
========================================= */

function getChildData() {

  const savedData =
    localStorage.getItem(STORAGE_KEY)

  if (!savedData) {
    return { ...defaultChildData }
  }

  try {
    return {
      ...defaultChildData,
      ...JSON.parse(savedData)
    }
  } catch (error) {
    console.error(
      'Unable to load child profile:',
      error
    )

    return { ...defaultChildData }
  }
}


/* =========================================
   SAVE PROFILE DATA
========================================= */

function saveChildData(data) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  )
}


/* =========================================
   PARENT PROFILE PAGE
========================================= */

export function ParentProfile() {

  const data = getChildData()

  return `
    <div class="parent-profile-page">

      <!-- PAGE HEADER -->

      <div class="parent-profile-header">

        <button
          class="parent-back-btn"
          data-parent-action="back"
        >
          ← Back to Dashboard
        </button>

        <div>
          <h1>My Child</h1>
          <p>
            View and manage your child's profile information
          </p>
        </div>

        <button
          class="parent-edit-btn"
          data-parent-action="edit"
        >
          ✏️ Edit Profile
        </button>

      </div>


      <!-- STUDENT SUMMARY -->

      <section class="parent-student-summary">

        <div class="parent-student-avatar">
          ${getInitial(data.studentName)}
        </div>

        <div class="parent-student-main-info">

          <h2>${escapeHtml(data.studentName)}</h2>

          <p>
            Class ${escapeHtml(data.className)}
            • Section ${escapeHtml(data.section)}
            • Roll No. ${escapeHtml(data.rollNo)}
          </p>

          <span>
            Academic Session ${escapeHtml(data.academicSession)}
          </span>

        </div>

        <div class="profile-status">
          <span class="status-dot"></span>
          Active Student
        </div>

      </section>


      <!-- BASIC INFORMATION -->

      <section class="parent-profile-card">

        <div class="parent-card-heading">

          <div>
            <h2>Student Information</h2>
            <p>Basic information provided by the school</p>
          </div>

        </div>


        <div class="parent-info-grid">

          ${infoItem(
            'Student Name',
            data.studentName
          )}

          ${infoItem(
            'Class',
            `Class ${data.className}`
          )}

          ${infoItem(
            'Section',
            data.section
          )}

          ${infoItem(
            'Roll Number',
            data.rollNo
          )}

          ${infoItem(
            'Admission Number',
            data.admissionNo
          )}

          ${infoItem(
            'Academic Session',
            data.academicSession
          )}

        </div>

      </section>


      <!-- PARENT / GUARDIAN INFORMATION -->

      <section class="parent-profile-card">

        <div class="parent-card-heading">

          <div>
            <h2>Parent / Guardian Information</h2>
            <p>
              Contact information for communication with school
            </p>
          </div>

        </div>


        <div class="parent-info-grid">

          ${infoItem(
            'Father Name',
            data.fatherName
          )}

          ${infoItem(
            'Mother Name',
            data.motherName
          )}

          ${infoItem(
            'Guardian Phone',
            data.guardianPhone
          )}

          ${infoItem(
            'Guardian Email',
            data.guardianEmail
          )}

        </div>

      </section>


      <!-- SCHOOL INFORMATION -->

      <section class="parent-profile-card">

        <div class="parent-card-heading">

          <div>
            <h2>School Information</h2>
            <p>Current school and class details</p>
          </div>

        </div>


        <div class="parent-info-grid">

          ${infoItem(
            'School Name',
            data.schoolName
          )}

          ${infoItem(
            'Class Teacher',
            data.classTeacher
          )}

          ${infoItem(
            'Admission Date',
            data.admissionDate
          )}

        </div>

      </section>


      <!-- EDIT MODAL -->

      <div
        class="parent-edit-overlay"
        id="parentEditModal"
        hidden
      >

        <div class="parent-edit-modal">

          <div class="parent-modal-header">

            <div>
              <h2>Edit Parent Information</h2>
              <p>
                Update only your contact information
              </p>
            </div>

            <button
              type="button"
              class="parent-modal-close"
              data-parent-action="cancel-edit"
            >
              ×
            </button>

          </div>


          <form id="parentProfileForm">

            <div class="parent-form-grid">

              <div class="parent-form-group">

                <label for="fatherName">
                  Father Name
                </label>

                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value="${escapeAttribute(data.fatherName)}"
                  required
                >

              </div>


              <div class="parent-form-group">

                <label for="motherName">
                  Mother Name
                </label>

                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value="${escapeAttribute(data.motherName)}"
                  required
                >

              </div>


              <div class="parent-form-group">

                <label for="guardianPhone">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  id="guardianPhone"
                  name="guardianPhone"
                  value="${escapeAttribute(data.guardianPhone)}"
                  maxlength="10"
                  pattern="[0-9]{10}"
                  required
                >

              </div>


              <div class="parent-form-group">

                <label for="guardianEmail">
                  Email Address
                </label>

                <input
                  type="email"
                  id="guardianEmail"
                  name="guardianEmail"
                  value="${escapeAttribute(data.guardianEmail)}"
                  required
                >

              </div>

            </div>


            <!-- READ ONLY NOTICE -->

            <div class="parent-readonly-notice">

              🔒 Student academic information such as
              class, section, roll number, marks and attendance
              can only be updated by the school.

            </div>


            <div class="parent-form-actions">

              <button
                type="button"
                class="parent-cancel-btn"
                data-parent-action="cancel-edit"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="parent-save-btn"
              >
                Save Changes
              </button>

            </div>

          </form>

        </div>

      </div>


      <!-- SAVE MESSAGE -->

      <div
        class="parent-save-message"
        id="parentSaveMessage"
        hidden
      >
        ✓ Profile information updated successfully
      </div>

    </div>
  `
}


/* =========================================
   INFORMATION ITEM
========================================= */

function infoItem(label, value) {

  return `
    <div class="parent-info-item">

      <span class="parent-info-label">
        ${escapeHtml(label)}
      </span>

      <strong class="parent-info-value">
        ${escapeHtml(value)}
      </strong>

    </div>
  `
}


/* =========================================
   INITIAL
========================================= */

function getInitial(name) {

  if (!name || !name.trim()) {
    return 'S'
  }

  return name
    .trim()
    .charAt(0)
    .toUpperCase()
}


/* =========================================
   HTML SAFETY
========================================= */

function escapeHtml(value) {

  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}


function escapeAttribute(value) {

  return escapeHtml(value)
}


/* =========================================
   NAVIGATION
========================================= */

export function setupParentProfileNavigation() {

  const page =
    document.querySelector('.parent-profile-page')

  if (!page) {
    return
  }


  /* -----------------------------------------
     BACK TO DASHBOARD
  ----------------------------------------- */

  page.addEventListener('click', (event) => {

    const actionButton =
      event.target.closest('[data-parent-action]')

    if (!actionButton) {
      return
    }

    const action =
      actionButton.dataset.parentAction


    if (action === 'back') {

      if (
        typeof window.navigateParentPage ===
        'function'
      ) {
        window.navigateParentPage('dashboard')
      }

      return
    }


    if (action === 'edit') {

      openEditModal()

      return
    }


    if (action === 'cancel-edit') {

      closeEditModal()

      return
    }

  })


  /* -----------------------------------------
     EDIT FORM SUBMIT
  ----------------------------------------- */

  const form =
    document.querySelector('#parentProfileForm')

  if (form) {

    form.addEventListener(
      'submit',
      handleProfileSubmit
    )

  }


  /* -----------------------------------------
     ESC KEY
  ----------------------------------------- */

  document.addEventListener(
    'keydown',
    handleEscapeKey
  )

}


/* =========================================
   OPEN EDIT MODAL
========================================= */

function openEditModal() {

  const modal =
    document.querySelector('#parentEditModal')

  if (!modal) {
    return
  }

  modal.hidden = false

  document.body.classList.add(
    'parent-modal-open'
  )


  const firstInput =
    modal.querySelector('input')

  if (firstInput) {
    setTimeout(() => {
      firstInput.focus()
    }, 50)
  }

}


/* =========================================
   CLOSE EDIT MODAL
========================================= */

function closeEditModal() {

  const modal =
    document.querySelector('#parentEditModal')

  if (!modal) {
    return
  }

  modal.hidden = true

  document.body.classList.remove(
    'parent-modal-open'
  )

}


/* =========================================
   SAVE PROFILE
========================================= */

function handleProfileSubmit(event) {

  event.preventDefault()


  const form = event.currentTarget

  const formData =
    new FormData(form)


  const currentData =
    getChildData()


  const updatedData = {
    ...currentData,

    fatherName:
      formData.get('fatherName').trim(),

    motherName:
      formData.get('motherName').trim(),

    guardianPhone:
      formData.get('guardianPhone').trim(),

    guardianEmail:
      formData.get('guardianEmail').trim()
  }


  /* -----------------------------------------
     PHONE VALIDATION
  ----------------------------------------- */

  if (
    !/^[0-9]{10}$/.test(
      updatedData.guardianPhone
    )
  ) {

    alert(
      'Please enter a valid 10-digit mobile number.'
    )

    return
  }


  /* -----------------------------------------
     SAVE
  ----------------------------------------- */

  saveChildData(updatedData)


  /* -----------------------------------------
     CLOSE MODAL
  ----------------------------------------- */

  closeEditModal()


  /* -----------------------------------------
     REFRESH PAGE CONTENT
  ----------------------------------------- */

  const app =
    document.querySelector('#app')

  if (app) {

    app.innerHTML =
      ParentProfile()

    setupParentProfileNavigation()

  }


  /* -----------------------------------------
     SUCCESS MESSAGE
  ----------------------------------------- */

  const message =
    document.querySelector('#parentSaveMessage')

  if (message) {

    message.hidden = false

    setTimeout(() => {

      message.hidden = true

    }, 3000)

  }

}


/* =========================================
   ESCAPE KEY
========================================= */

function handleEscapeKey(event) {

  if (event.key !== 'Escape') {
    return
  }

  const modal =
    document.querySelector('#parentEditModal')

  if (
    modal &&
    !modal.hidden
  ) {
    closeEditModal()
  }

}