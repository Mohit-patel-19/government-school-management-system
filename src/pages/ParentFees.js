/* =========================================
   PARENT FEES DATA
========================================= */

const DEFAULT_FEES_DATA = {
  totalFees: 30000,

  feeDetails: [
    {
      id: 1,
      feeType: "Tuition Fee",
      amount: 10000,
      dueDate: "05 July 2026",
      paidDate: "05 July 2026",
      status: "Paid",
      receiptNo: "FS-2026-00125",
      transactionId: "TXN20260705001",
      paymentMethod: "UPI"
    },

    {
      id: 2,
      feeType: "Examination Fee",
      amount: 2000,
      dueDate: "10 July 2026",
      paidDate: "10 July 2026",
      status: "Paid",
      receiptNo: "FS-2026-00126",
      transactionId: "TXN20260710002",
      paymentMethod: "UPI"
    },

    {
      id: 3,
      feeType: "Development Fee",
      amount: 8000,
      dueDate: "15 August 2026",
      paidDate: "15 August 2026",
      status: "Paid",
      receiptNo: "FS-2026-00127",
      transactionId: "TXN20260815003",
      paymentMethod: "Card"
    },

    {
      id: 4,
      feeType: "Tuition Fee",
      amount: 10000,
      dueDate: "15 September 2026",
      paidDate: "",
      status: "Pending",
      receiptNo: "",
      transactionId: "",
      paymentMethod: ""
    }
  ]
};


/* =========================================
   STORAGE KEY
========================================= */

const FEES_STORAGE_KEY =
  "government_school_parent_fees";


/* =========================================
   LOAD FEES FROM LOCAL STORAGE
========================================= */

function loadFeesData() {

  try {

    const savedData =
      localStorage.getItem(
        FEES_STORAGE_KEY
      );

    if (!savedData) {

      return JSON.parse(
        JSON.stringify(
          DEFAULT_FEES_DATA
        )
      );

    }

    const parsedData =
      JSON.parse(savedData);

    if (
      !parsedData ||
      !Array.isArray(
        parsedData.feeDetails
      )
    ) {

      return JSON.parse(
        JSON.stringify(
          DEFAULT_FEES_DATA
        )
      );

    }

    return parsedData;

  } catch (error) {

    console.error(
      "Unable to load fee data:",
      error
    );

    return JSON.parse(
      JSON.stringify(
        DEFAULT_FEES_DATA
      )
    );

  }

}


/* =========================================
   SAVE FEES TO LOCAL STORAGE
========================================= */

function saveFeesData(data) {

  try {

    localStorage.setItem(
      FEES_STORAGE_KEY,
      JSON.stringify(data)
    );

    return true;

  } catch (error) {

    console.error(
      "Unable to save fee data:",
      error
    );

    return false;

  }

}


/* =========================================
   CURRENT FEES DATA
========================================= */

const feesData =
  loadFeesData();


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHtml(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================
   FORMAT CURRENCY
========================================= */

function formatCurrency(amount) {

  return Number(amount || 0)
    .toLocaleString("en-IN");

}


/* =========================================
   PARENT FEES PAGE
========================================= */

export function ParentFees(
  studentName = "Student"
) {

  const safeStudentName =
    escapeHtml(studentName);

  const paidAmount =
    feesData.feeDetails
      .filter(
        (fee) =>
          fee.status === "Paid"
      )
      .reduce(
        (total, fee) =>
          total + Number(fee.amount || 0),
        0
      );


  const pendingAmount =
    feesData.feeDetails
      .filter(
        (fee) =>
          fee.status === "Pending"
      )
      .reduce(
        (total, fee) =>
          total + Number(fee.amount || 0),
        0
      );


  const pendingFee =
    feesData.feeDetails.find(
      (fee) =>
        fee.status === "Pending"
    );


  return `

    <div class="parent-fees-page">

      <!-- =====================================
           HEADER
      ====================================== -->

      <header class="parent-fees-header">

        <div class="parent-fees-title">

          <h1>
            Fees & Payments
          </h1>

          <p>
            View and manage your child's school fees
          </p>

        </div>


        <button
          type="button"
          id="parentFeesBackBtn"
          class="parent-fees-back-btn"
        >
          <span>←</span>
          <span>Back to Dashboard</span>
        </button>

      </header>


      <!-- =====================================
           MAIN CONTENT
      ====================================== -->

      <main class="parent-fees-content">


        <!-- =====================================
             STUDENT INFORMATION
        ====================================== -->

        <section
          class="parent-fees-card fees-student-card"
        >

          <div class="fees-student-info">

            <div class="fees-student-avatar">

              ${
                studentName
                  ? escapeHtml(
                      String(studentName)
                        .charAt(0)
                        .toUpperCase()
                    )
                  : "S"
              }

            </div>


            <div>

              <h2>
                ${safeStudentName}
              </h2>

              <p>
                Class 10
                <span>•</span>
                Section A
                <span>•</span>
                Roll No. 24
              </p>

            </div>

          </div>


          <div class="fees-student-status">

            <span class="fees-status-dot"></span>

            Fee Account Active

          </div>

        </section>


        <!-- =====================================
             FEE SUMMARY
        ====================================== -->

        <section class="fees-summary-grid">


          <div class="fees-summary-card">

            <div class="fees-summary-icon">
              💰
            </div>

            <div>

              <p>Total Fees</p>

              <h2>
                ₹${formatCurrency(
                  feesData.totalFees
                )}
              </h2>

            </div>

          </div>


          <div class="fees-summary-card">

            <div class="fees-summary-icon">
              ✅
            </div>

            <div>

              <p>Paid Amount</p>

              <h2>
                ₹${formatCurrency(
                  paidAmount
                )}
              </h2>

            </div>

          </div>


          <div class="fees-summary-card">

            <div class="fees-summary-icon">
              ⏳
            </div>

            <div>

              <p>Pending Amount</p>

              <h2>
                ₹${formatCurrency(
                  pendingAmount
                )}
              </h2>

            </div>

          </div>


          <div class="fees-summary-card">

            <div class="fees-summary-icon">
              📅
            </div>

            <div>

              <p>Next Due Date</p>

              <h2>

                ${
                  pendingFee
                    ? escapeHtml(
                        pendingFee.dueDate
                      )
                    : "No Pending Fee"
                }

              </h2>

            </div>

          </div>

        </section>


        <!-- =====================================
             PENDING PAYMENT
        ====================================== -->

        ${
          pendingFee
            ? `

              <section
                class="parent-fees-card pending-payment-card"
              >

                <div class="pending-payment-info">

                  <div class="pending-payment-icon">
                    💳
                  </div>

                  <div>

                    <span class="pending-label">
                      Pending Payment
                    </span>

                    <h2>
                      ${escapeHtml(
                        pendingFee.feeType
                      )}
                    </h2>

                    <p>

                      Due Date:

                      <strong>
                        ${escapeHtml(
                          pendingFee.dueDate
                        )}
                      </strong>

                    </p>

                  </div>

                </div>


                <div class="pending-payment-action">

                  <strong>
                    ₹${formatCurrency(
                      pendingFee.amount
                    )}
                  </strong>


                  <button
                    type="button"
                    class="pay-now-btn"
                    data-fee-id="${pendingFee.id}"
                  >
                    💳 Pay Now
                  </button>

                </div>

              </section>

            `
            : `

              <section
                class="parent-fees-card payment-complete-card"
              >

                <div>

                  <strong>
                    ✓ All Fees Paid
                  </strong>

                  <p>
                    There are no pending fees for this student.
                  </p>

                </div>

              </section>

            `
        }


        <!-- =====================================
             FEE DETAILS
        ====================================== -->

        <section
          class="parent-fees-card fee-details-card"
        >

          <div class="fees-section-header">

            <div>

              <h2>
                Fee Details
              </h2>

              <p>
                Complete fee information for the academic year
              </p>

            </div>

          </div>


          <div class="fees-table-wrapper">

            <table class="fees-table">

              <thead>

                <tr>

                  <th>
                    Fee Type
                  </th>

                  <th>
                    Amount
                  </th>

                  <th>
                    Due Date
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                ${feesData.feeDetails
                  .map(
                    (fee) => `

                      <tr>

                        <td>
                          <strong>
                            ${escapeHtml(
                              fee.feeType
                            )}
                          </strong>
                        </td>


                        <td>
                          ₹${formatCurrency(
                            fee.amount
                          )}
                        </td>


                        <td>
                          ${escapeHtml(
                            fee.dueDate
                          )}
                        </td>


                        <td>

                          ${
                            fee.status ===
                            "Paid"

                              ? `

                                <span
                                  class="fee-status paid"
                                >
                                  ✓ Paid
                                </span>

                              `

                              : `

                                <span
                                  class="fee-status pending"
                                >
                                  ⏳ Pending
                                </span>

                              `
                          }

                        </td>


                        <td>

                          ${
                            fee.status ===
                            "Paid"

                              ? `

                                <button
                                  type="button"
                                  class="download-receipt-btn"
                                  data-receipt-id="${fee.id}"
                                >
                                  🧾 Receipt
                                </button>

                              `

                              : `

                                <button
                                  type="button"
                                  class="table-pay-btn"
                                  data-fee-id="${fee.id}"
                                >
                                  Pay Now
                                </button>

                              `
                          }

                        </td>

                      </tr>

                    `
                  )
                  .join("")}

              </tbody>

            </table>

          </div>

        </section>


        <!-- =====================================
             PAYMENT HISTORY
        ====================================== -->

        <section
          class="parent-fees-card payment-history-card"
        >

          <div class="fees-section-header">

            <div>

              <h2>
                Payment History
              </h2>

              <p>
                Your previous fee payments
              </p>

            </div>

          </div>


          <div class="payment-history-list">

            ${
              feesData.feeDetails
                .filter(
                  (fee) =>
                    fee.status === "Paid"
                )
                .map(
                  (fee) => `

                    <div
                      class="payment-history-item"
                    >

                      <div
                        class="payment-history-left"
                      >

                        <div
                          class="payment-history-icon"
                        >
                          ✓
                        </div>


                        <div>

                          <h3>
                            ${escapeHtml(
                              fee.feeType
                            )}
                          </h3>

                          <p>
                            ${escapeHtml(
                              fee.paidDate
                            )}
                          </p>

                          <span>
                            Transaction ID:
                            ${escapeHtml(
                              fee.transactionId
                            )}
                          </span>

                        </div>

                      </div>


                      <div
                        class="payment-history-right"
                      >

                        <strong>
                          ₹${formatCurrency(
                            fee.amount
                          )}
                        </strong>


                        <button
                          type="button"
                          class="history-receipt-btn"
                          data-receipt-id="${fee.id}"
                        >
                          🧾 Download Receipt
                        </button>

                      </div>

                    </div>

                  `
                )
                .join("")
            }

          </div>

        </section>


        <!-- =====================================
             PAYMENT NOTE
        ====================================== -->

        <div class="fees-payment-note">

          <span>
            🔒
          </span>

          <p>
            Online payments are securely processed.
            Keep your transaction ID and receipt for future reference.
          </p>

        </div>

      </main>


      <!-- =====================================
           PAYMENT MODAL
      ====================================== -->

      <div
        id="parentFeePaymentModal"
        class="parent-fee-modal"
      >

        <div
          class="parent-fee-modal-overlay"
          id="parentFeePaymentOverlay"
        ></div>


        <div
          class="parent-fee-modal-content"
          role="dialog"
          aria-modal="true"
        >

          <div class="fee-modal-header">

            <div>

              <h2>
                Online Fee Payment
              </h2>

              <p>
                Secure payment for school fees
              </p>

            </div>


            <button
              type="button"
              id="parentFeeModalClose"
              class="fee-modal-close"
            >
              ×
            </button>

          </div>


          <div
            id="parentFeePaymentBody"
            class="fee-payment-body"
          ></div>

        </div>

      </div>


      <!-- =====================================
           PAYMENT SUCCESS MODAL
      ====================================== -->

      <div
        id="parentFeeSuccessModal"
        class="parent-fee-modal"
      >

        <div
          class="parent-fee-modal-overlay"
          id="parentFeeSuccessOverlay"
        ></div>


        <div
          class="parent-fee-modal-content fee-success-content"
        >

          <div class="payment-success-icon">
            ✓
          </div>


          <h2>
            Payment Successful
          </h2>


          <p>
            Your fee payment has been recorded successfully.
          </p>


          <div
            id="paymentSuccessDetails"
            class="payment-success-details"
          ></div>


          <div class="success-modal-actions">

            <button
              type="button"
              id="downloadSuccessReceiptBtn"
              class="success-receipt-btn"
            >
              🧾 Download Receipt
            </button>


            <button
              type="button"
              id="closeSuccessModalBtn"
              class="close-success-btn"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>

  `;

}


/* =========================================
   SETUP PARENT FEES
========================================= */

export function setupParentFees() {

  const backButton =
    document.getElementById(
      "parentFeesBackBtn"
    );


  const paymentModal =
    document.getElementById(
      "parentFeePaymentModal"
    );


  const paymentOverlay =
    document.getElementById(
      "parentFeePaymentOverlay"
    );


  const paymentModalClose =
    document.getElementById(
      "parentFeeModalClose"
    );


  const paymentBody =
    document.getElementById(
      "parentFeePaymentBody"
    );


  const successModal =
    document.getElementById(
      "parentFeeSuccessModal"
    );


  const successOverlay =
    document.getElementById(
      "parentFeeSuccessOverlay"
    );


  const closeSuccessButton =
    document.getElementById(
      "closeSuccessModalBtn"
    );


  const downloadSuccessReceiptButton =
    document.getElementById(
      "downloadSuccessReceiptBtn"
    );


  let currentFeeId = null;

  let currentReceiptId = null;

  let currentStudentName = "Student";


  /* =========================================
     GET STUDENT NAME
  ========================================= */

  function studentNameFromPage() {

    const studentHeading =
      document.querySelector(
        ".fees-student-info h2"
      );


    if (
      studentHeading &&
      studentHeading.textContent.trim()
    ) {

      return studentHeading
        .textContent
        .trim();

    }


    return "Student";

  }


  currentStudentName =
    studentNameFromPage();


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
     OPEN PAYMENT MODAL
  ========================================= */

  function openPaymentModal(feeId) {

    const fee =
      feesData.feeDetails.find(
        (item) =>
          Number(item.id) ===
          Number(feeId)
      );


    if (!fee) {

      alert(
        "Fee record not found."
      );

      return;

    }


    if (fee.status === "Paid") {

      alert(
        "This fee has already been paid."
      );

      return;

    }


    currentFeeId =
      Number(feeId);


    if (
      !paymentModal ||
      !paymentBody
    ) {

      return;

    }


    paymentBody.innerHTML = `

      <div class="payment-fee-summary">

        <div>

          <span>
            Fee Type
          </span>

          <strong>
            ${escapeHtml(
              fee.feeType
            )}
          </strong>

        </div>


        <div>

          <span>
            Amount
          </span>

          <strong>
            ₹${formatCurrency(
              fee.amount
            )}
          </strong>

        </div>

      </div>


      <div class="payment-method-title">
        Select Payment Method
      </div>


      <div class="payment-methods">

        <button
          type="button"
          class="payment-method-btn active"
          data-method="UPI"
        >
          <span>📱</span>
          <strong>UPI</strong>
          <small>
            Google Pay / PhonePe / Paytm
          </small>
        </button>


        <button
          type="button"
          class="payment-method-btn"
          data-method="Card"
        >
          <span>💳</span>
          <strong>
            Debit / Credit Card
          </strong>
          <small>
            Visa / Mastercard / RuPay
          </small>
        </button>


        <button
          type="button"
          class="payment-method-btn"
          data-method="Net Banking"
        >
          <span>🏦</span>
          <strong>
            Net Banking
          </strong>
          <small>
            All major banks
          </small>
        </button>

      </div>


      <div class="payment-security-note">

        🔒
        Your payment information is secure.

      </div>


      <button
        type="button"
        id="confirmFeePaymentBtn"
        class="confirm-payment-btn"
      >
        Pay ₹${formatCurrency(
          fee.amount
        )}
      </button>

    `;


    let selectedPaymentMethod =
      "UPI";


    const paymentMethodButtons =
      paymentBody.querySelectorAll(
        ".payment-method-btn"
      );


    paymentMethodButtons.forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            paymentMethodButtons.forEach(
              (item) => {

                item.classList.remove(
                  "active"
                );

              }
            );


            button.classList.add(
              "active"
            );


            selectedPaymentMethod =
              button.dataset.method ||
              "UPI";

          }
        );

      }
    );


    const confirmButton =
      document.getElementById(
        "confirmFeePaymentBtn"
      );


    if (confirmButton) {

      confirmButton.addEventListener(
        "click",
        () => {

          processPayment(
            selectedPaymentMethod
          );

        }
      );

    }


    paymentModal.classList.add(
      "active"
    );


    document.body.classList.add(
      "parent-fee-modal-open"
    );

  }


  /* =========================================
     CLOSE PAYMENT MODAL
  ========================================= */

  function closePaymentModal() {

    if (!paymentModal) {

      return;

    }


    paymentModal.classList.remove(
      "active"
    );


    document.body.classList.remove(
      "parent-fee-modal-open"
    );


    currentFeeId =
      null;

  }


  /* =========================================
     GENERATE RECEIPT NUMBER
  ========================================= */

  function generateReceiptNumber() {

    const year =
      new Date()
        .getFullYear();


    const randomNumber =
      Math.floor(
        10000 +
        Math.random() * 90000
      );


    return `FS-${year}-${randomNumber}`;

  }


  /* =========================================
     GENERATE TRANSACTION ID
  ========================================= */

  function generateTransactionId() {

    return (
      "TXN" +
      Date.now() +
      Math.floor(
        100 +
        Math.random() * 900
      )
    );

  }


  /* =========================================
     FORMAT PAYMENT DATE
  ========================================= */

  function getPaymentDate() {

    return new Date()
      .toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "long",
          year: "numeric"
        }
      );

  }


  /* =========================================
     PROCESS PAYMENT
  ========================================= */

  function processPayment(
    paymentMethod = "UPI"
  ) {

    const fee =
      feesData.feeDetails.find(
        (item) =>
          Number(item.id) ===
          Number(currentFeeId)
      );


    if (!fee) {

      alert(
        "Fee record not found."
      );

      return;

    }


    if (fee.status === "Paid") {

      alert(
        "This fee has already been paid."
      );

      return;

    }


    const confirmButton =
      document.getElementById(
        "confirmFeePaymentBtn"
      );


    if (confirmButton) {

      confirmButton.disabled =
        true;

      confirmButton.textContent =
        "Processing Payment...";

    }


    setTimeout(
      () => {

        const paymentDate =
          getPaymentDate();


        fee.status =
          "Paid";


        fee.paidDate =
          paymentDate;


        fee.receiptNo =
          generateReceiptNumber();


        fee.transactionId =
          generateTransactionId();


        fee.paymentMethod =
          paymentMethod;


        /*
          Save payment permanently.
        */

        const saved =
          saveFeesData(
            feesData
          );


        if (!saved) {

          alert(
            "Payment was completed, but data could not be saved in browser storage."
          );

        }


        currentReceiptId =
          fee.id;


        closePaymentModal();


        showPaymentSuccess(
          fee
        );


      },
      1200
    );

  }


  /* =========================================
     PAYMENT SUCCESS
  ========================================= */

  function showPaymentSuccess(
    fee
  ) {

    if (!successModal) {

      return;

    }


    const successDetails =
      document.getElementById(
        "paymentSuccessDetails"
      );


    if (successDetails) {

      successDetails.innerHTML = `

        <div class="success-detail-row">

          <span>
            Student Name
          </span>

          <strong>
            ${escapeHtml(
              currentStudentName
            )}
          </strong>

        </div>


        <div class="success-detail-row">

          <span>
            Fee Type
          </span>

          <strong>
            ${escapeHtml(
              fee.feeType
            )}
          </strong>

        </div>


        <div class="success-detail-row">

          <span>
            Amount Paid
          </span>

          <strong>
            ₹${formatCurrency(
              fee.amount
            )}
          </strong>

        </div>


        <div class="success-detail-row">

          <span>
            Payment Method
          </span>

          <strong>
            ${escapeHtml(
              fee.paymentMethod ||
              "UPI"
            )}
          </strong>

        </div>


        <div class="success-detail-row">

          <span>
            Payment Date
          </span>

          <strong>
            ${escapeHtml(
              fee.paidDate
            )}
          </strong>

        </div>


        <div class="success-detail-row">

          <span>
            Receipt No.
          </span>

          <strong>
            ${escapeHtml(
              fee.receiptNo
            )}
          </strong>

        </div>


        <div class="success-detail-row">

          <span>
            Transaction ID
          </span>

          <strong>
            ${escapeHtml(
              fee.transactionId
            )}
          </strong>

        </div>

      `;

    }


    successModal.classList.add(
      "active"
    );


    document.body.classList.add(
      "parent-fee-modal-open"
    );

  }


  /* =========================================
     CLOSE SUCCESS MODAL
  ========================================= */

  function closeSuccessModal() {

    if (!successModal) {

      return;

    }


    successModal.classList.remove(
      "active"
    );


    document.body.classList.remove(
      "parent-fee-modal-open"
    );

  }


  /* =========================================
     RECEIPT HTML
  ========================================= */

  function createReceiptHTML(
    fee
  ) {

    const studentName =
      escapeHtml(
        currentStudentName
      );


    const feeType =
      escapeHtml(
        fee.feeType
      );


    const receiptNo =
      escapeHtml(
        fee.receiptNo
      );


    const transactionId =
      escapeHtml(
        fee.transactionId
      );


    const paymentMethod =
      escapeHtml(
        fee.paymentMethod ||
        "UPI"
      );


    const paidDate =
      escapeHtml(
        fee.paidDate
      );


    const dueDate =
      escapeHtml(
        fee.dueDate
      );


    const amount =
      formatCurrency(
        fee.amount
      );


    return `

      <!DOCTYPE html>

      <html lang="en">

      <head>

        <meta charset="UTF-8">

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        >

        <title>
          Fee Receipt - ${receiptNo}
        </title>


        <style>

          * {
            box-sizing: border-box;
          }


          body {
            margin: 0;
            padding: 30px;
            background: #f3f4f6;
            font-family:
              Arial,
              Helvetica,
              sans-serif;
            color: #111827;
          }


          .receipt {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            background: #ffffff;
            border: 2px solid #1f2937;
            padding: 35px;
          }


          .school-header {
            text-align: center;
            border-bottom: 2px solid #1f2937;
            padding-bottom: 20px;
            margin-bottom: 25px;
          }


          .school-logo {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            border: 2px solid #1f2937;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            font-size: 30px;
          }


          .school-header h1 {
            margin: 0 0 8px;
            font-size: 28px;
            letter-spacing: 1px;
          }


          .school-header h2 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
          }


          .school-header p {
            margin: 8px 0 0;
            font-size: 13px;
            color: #4b5563;
          }


          .receipt-meta {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 25px;
          }


          .meta-box {
            border: 1px solid #d1d5db;
            padding: 13px;
          }


          .meta-box span {
            display: block;
            font-size: 12px;
            color: #6b7280;
            margin-bottom: 5px;
          }


          .meta-box strong {
            font-size: 14px;
          }


          .student-details {
            border: 1px solid #d1d5db;
            padding: 20px;
            margin-bottom: 25px;
          }


          .student-details h3 {
            margin: 0 0 16px;
            font-size: 18px;
          }


          .detail-grid {
            display: grid;
            grid-template-columns:
              1fr 1fr;
            gap: 16px;
          }


          .detail-item span {
            display: block;
            font-size: 12px;
            color: #6b7280;
            margin-bottom: 5px;
          }


          .detail-item strong {
            font-size: 15px;
          }


          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 22px;
          }


          th,
          td {
            border: 1px solid #cbd5e1;
            padding: 14px;
          }


          th {
            background: #f1f5f9;
            text-align: left;
          }


          .amount {
            text-align: right;
          }


          .total-row td {
            font-weight: bold;
            font-size: 17px;
          }


          .paid-status {
            display: inline-block;
            border: 1px solid #166534;
            color: #166534;
            padding: 7px 16px;
            font-weight: bold;
            border-radius: 4px;
          }


          .transaction-box {
            margin-top: 20px;
            border: 1px solid #d1d5db;
            padding: 18px;
            background: #f9fafb;
          }


          .transaction-row {
            display: grid;
            grid-template-columns:
              180px 1fr;
            gap: 15px;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
          }


          .transaction-row:last-child {
            border-bottom: none;
          }


          .transaction-row span {
            color: #6b7280;
          }


          .transaction-row strong {
            word-break: break-word;
          }


          .footer {
            margin-top: 55px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 30px;
          }


          .thank-you {
            font-size: 14px;
          }


          .thank-you strong {
            display: block;
            margin-bottom: 8px;
          }


          .thank-you p {
            margin: 0;
            color: #6b7280;
          }


          .signature {
            width: 190px;
            text-align: center;
          }


          .signature-line {
            border-top: 1px solid #111827;
            margin-bottom: 8px;
          }


          .signature small {
            color: #4b5563;
          }


          .print-note {
            margin-top: 35px;
            text-align: center;
            font-size: 11px;
            color: #6b7280;
          }


          @media print {

            @page {
              size: A4;
              margin: 12mm;
            }


            body {
              padding: 0;
              background: #ffffff;
            }


            .receipt {
              max-width: none;
              border: 2px solid #111827;
            }


            .print-note {
              display: none;
            }

          }


          @media screen and (max-width: 600px) {

            body {
              padding: 10px;
            }


            .receipt {
              padding: 20px;
            }


            .receipt-meta,
            .detail-grid {
              grid-template-columns: 1fr;
            }


            .transaction-row {
              grid-template-columns: 1fr;
              gap: 4px;
            }


            .footer {
              flex-direction: column;
              align-items: stretch;
            }


            .signature {
              margin-left: auto;
            }

          }

        </style>

      </head>


      <body>

        <div class="receipt">


          <div class="school-header">

            <div class="school-logo">
              🏫
            </div>

            <h1>
              GOVERNMENT SCHOOL
            </h1>

            <h2>
              FEE PAYMENT RECEIPT
            </h2>

            <p>
              Academic Session 2026-27
            </p>

          </div>


          <div class="receipt-meta">

            <div class="meta-box">

              <span>
                Receipt Number
              </span>

              <strong>
                ${receiptNo}
              </strong>

            </div>


            <div class="meta-box">

              <span>
                Payment Date
              </span>

              <strong>
                ${paidDate}
              </strong>

            </div>

          </div>


          <div class="student-details">

            <h3>
              Student Details
            </h3>


            <div class="detail-grid">

              <div class="detail-item">

                <span>
                  Student Name
                </span>

                <strong>
                  ${studentName}
                </strong>

              </div>


              <div class="detail-item">

                <span>
                  Class
                </span>

                <strong>
                  10
                </strong>

              </div>


              <div class="detail-item">

                <span>
                  Section
                </span>

                <strong>
                  A
                </strong>

              </div>


              <div class="detail-item">

                <span>
                  Roll No.
                </span>

                <strong>
                  24
                </strong>

              </div>

            </div>

          </div>


          <table>

            <thead>

              <tr>

                <th>
                  Fee Type
                </th>

                <th>
                  Due Date
                </th>

                <th class="amount">
                  Amount
                </th>

              </tr>

            </thead>


            <tbody>

              <tr>

                <td>
                  ${feeType}
                </td>

                <td>
                  ${dueDate}
                </td>

                <td class="amount">
                  ₹${amount}
                </td>

              </tr>


              <tr class="total-row">

                <td colspan="2">
                  TOTAL PAID
                </td>

                <td class="amount">
                  ₹${amount}
                </td>

              </tr>

            </tbody>

          </table>


          <div>

            <strong>
              Payment Status:
            </strong>

            &nbsp;

            <span class="paid-status">
              ✓ PAID
            </span>

          </div>


          <div class="transaction-box">

            <div class="transaction-row">

              <span>
                Transaction ID
              </span>

              <strong>
                ${transactionId}
              </strong>

            </div>


            <div class="transaction-row">

              <span>
                Payment Method
              </span>

              <strong>
                ${paymentMethod}
              </strong>

            </div>


            <div class="transaction-row">

              <span>
                Receipt Number
              </span>

              <strong>
                ${receiptNo}
              </strong>

            </div>


            <div class="transaction-row">

              <span>
                Payment Date
              </span>

              <strong>
                ${paidDate}
              </strong>

            </div>

          </div>


          <div class="footer">

            <div class="thank-you">

              <strong>
                Thank you for your payment.
              </strong>

              <p>
                Please keep this receipt
                for future reference.
              </p>

            </div>


            <div class="signature">

              <div class="signature-line"></div>

              <small>
                Authorized Signature
              </small>

            </div>

          </div>


          <div class="print-note">

            Use the browser Print option
            and select
            <strong>
              Save as PDF
            </strong>
            to download this receipt.

          </div>


        </div>


        <script>

          window.addEventListener(
            "load",
            function() {

              setTimeout(
                function() {

                  window.print();

                },
                700
              );

            }
          );

        </script>


      </body>

      </html>

    `;

  }


  /* =========================================
     DOWNLOAD / PRINT RECEIPT
  ========================================= */

  function downloadReceipt(
    feeId
  ) {

    const fee =
      feesData.feeDetails.find(
        (item) =>
          Number(item.id) ===
          Number(feeId)
      );


    if (!fee) {

      alert(
        "Receipt record not found."
      );

      return;

    }


    if (fee.status !== "Paid") {

      alert(
        "Receipt is available only after successful payment."
      );

      return;

    }


    if (
      !fee.receiptNo ||
      !fee.transactionId
    ) {

      alert(
        "Receipt information is incomplete."
      );

      return;

    }


    currentReceiptId =
      fee.id;


    const receiptWindow =
      window.open(
        "",
        "_blank",
        "width=900,height=800"
      );


    if (!receiptWindow) {

      alert(
        "Please allow pop-ups for the receipt."
      );

      return;

    }


    const receiptHTML =
      createReceiptHTML(
        fee
      );


    receiptWindow.document.open();

    receiptWindow.document.write(
      receiptHTML
    );

    receiptWindow.document.close();

  }


  /* =========================================
     PAY NOW BUTTONS
  ========================================= */

  const payButtons =
    document.querySelectorAll(
      ".pay-now-btn, .table-pay-btn"
    );


  payButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const feeId =
            Number(
              button.dataset.feeId
            );


          openPaymentModal(
            feeId
          );

        }
      );

    }
  );


  /* =========================================
     RECEIPT BUTTONS
  ========================================= */

  const receiptButtons =
    document.querySelectorAll(
      ".download-receipt-btn, .history-receipt-btn"
    );


  receiptButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const receiptId =
            Number(
              button.dataset.receiptId
            );


          downloadReceipt(
            receiptId
          );

        }
      );

    }
  );


  /* =========================================
     CLOSE PAYMENT MODAL
  ========================================= */

  if (paymentModalClose) {

    paymentModalClose.addEventListener(
      "click",
      closePaymentModal
    );

  }


  if (paymentOverlay) {

    paymentOverlay.addEventListener(
      "click",
      closePaymentModal
    );

  }


  /* =========================================
     CLOSE SUCCESS MODAL
  ========================================= */

  if (closeSuccessButton) {

    closeSuccessButton.addEventListener(
      "click",
      closeSuccessModal
    );

  }


  if (successOverlay) {

    successOverlay.addEventListener(
      "click",
      closeSuccessModal
    );

  }


  /* =========================================
     SUCCESS RECEIPT
  ========================================= */

  if (
    downloadSuccessReceiptButton
  ) {

    downloadSuccessReceiptButton.addEventListener(
      "click",
      () => {

        if (
          currentReceiptId !== null
        ) {

          downloadReceipt(
            currentReceiptId
          );

        }

      }
    );

  }


  /* =========================================
     ESCAPE KEY
  ========================================= */

  function handleEscape(
    event
  ) {

    if (
      event.key !== "Escape"
    ) {

      return;

    }


    closePaymentModal();

    closeSuccessModal();

  }


  document.addEventListener(
    "keydown",
    handleEscape
  );

}