/* =========================================
   PARENT RESULTS DATA
========================================= */

const resultsData = {
  "Half Yearly": [
    {
      subject: "Mathematics",
      marks: 88,
      maxMarks: 100,
      grade: "A+",
      result: "Pass"
    },
    {
      subject: "Science",
      marks: 84,
      maxMarks: 100,
      grade: "A",
      result: "Pass"
    },
    {
      subject: "English",
      marks: 79,
      maxMarks: 100,
      grade: "B+",
      result: "Pass"
    },
    {
      subject: "Hindi",
      marks: 91,
      maxMarks: 100,
      grade: "A+",
      result: "Pass"
    },
    {
      subject: "Social Science",
      marks: 86,
      maxMarks: 100,
      grade: "A",
      result: "Pass"
    }
  ],

  "Annual": [
    {
      subject: "Mathematics",
      marks: 92,
      maxMarks: 100,
      grade: "A+",
      result: "Pass"
    },
    {
      subject: "Science",
      marks: 89,
      maxMarks: 100,
      grade: "A+",
      result: "Pass"
    },
    {
      subject: "English",
      marks: 85,
      maxMarks: 100,
      grade: "A",
      result: "Pass"
    },
    {
      subject: "Hindi",
      marks: 94,
      maxMarks: 100,
      grade: "A+",
      result: "Pass"
    },
    {
      subject: "Social Science",
      marks: 90,
      maxMarks: 100,
      grade: "A+",
      result: "Pass"
    }
  ]
};


/* =========================================
   PARENT RESULTS PAGE
========================================= */

export function ParentResults(studentName = "Student") {

  const firstLetter =
    studentName && studentName.length > 0
      ? studentName.charAt(0).toUpperCase()
      : "S";

  return `
    <div class="parent-results-page">

      <!-- =====================================
           HEADER
      ====================================== -->

      <header class="parent-results-header">

        <div class="parent-results-title">

          <h1>Student Results</h1>

          <p>
            View your child's academic performance
          </p>

        </div>


        <div class="parent-results-header-actions">

          <button
            type="button"
            id="parentResultBackBtn"
            class="parent-results-back-btn"
          >
            <span class="back-arrow">←</span>
            <span>Back to Dashboard</span>
          </button>

        </div>

      </header>


      <!-- =====================================
           MAIN CONTENT
      ====================================== -->

      <main class="parent-results-content">


        <!-- =====================================
             STUDENT INFORMATION
        ====================================== -->

        <section class="parent-results-card student-info-card">

          <div class="student-info-left">

            <div class="student-avatar">
              ${firstLetter}
            </div>


            <div class="student-details">

              <h2>${studentName}</h2>

              <p>
                Class 10
                <span>•</span>
                Section A
                <span>•</span>
                Roll No. 24
              </p>

              <span class="academic-session">
                Academic Session 2026-27
              </span>

            </div>

          </div>

        </section>


        <!-- =====================================
             EXAMINATION SELECTOR
        ====================================== -->

        <section class="parent-results-card exam-selector-card">

          <div class="exam-selector">

            <div class="exam-selector-text">

              <h3>Examination</h3>

              <p>
                Select an examination to view results
              </p>

            </div>


            <div class="exam-select-wrapper">

              <select
                id="parentResultExam"
                class="parent-result-exam-select"
              >

                <option value="Half Yearly">
                  Half Yearly
                </option>

                <option value="Annual">
                  Annual
                </option>

              </select>

            </div>

          </div>

        </section>


        <!-- =====================================
             RESULT CONTENT
        ====================================== -->

        <div id="parentResultContent"></div>


      </main>

    </div>
  `;
}


/* =========================================
   SETUP PARENT RESULTS
========================================= */

export function setupParentResults() {

  const examSelect =
    document.getElementById("parentResultExam");

  const resultContent =
    document.getElementById("parentResultContent");

  const backButton =
    document.getElementById("parentResultBackBtn");


  /* =========================================
     BACK TO DASHBOARD
  ========================================= */

  if (backButton) {

    backButton.addEventListener("click", () => {

      if (
        typeof window.navigateParentPage === "function"
      ) {

        window.navigateParentPage("dashboard");

      }

    });

  }


  if (!examSelect || !resultContent) {
    return;
  }


  /* =========================================
     RENDER RESULTS
  ========================================= */

  function renderResults(exam) {

    const results =
      resultsData[exam] || [];


    let totalMarks = 0;
    let obtainedMarks = 0;


    results.forEach((item) => {

      totalMarks += Number(item.maxMarks) || 0;

      obtainedMarks += Number(item.marks) || 0;

    });


    const percentage =
      totalMarks > 0
        ? ((obtainedMarks / totalMarks) * 100).toFixed(2)
        : "0.00";


    /* =========================================
       OVERALL GRADE
    ========================================= */

    let overallGrade = "F";


    const percentageNumber =
      Number(percentage);


    if (percentageNumber >= 90) {

      overallGrade = "A+";

    } else if (percentageNumber >= 80) {

      overallGrade = "A";

    } else if (percentageNumber >= 70) {

      overallGrade = "B+";

    } else if (percentageNumber >= 60) {

      overallGrade = "B";

    } else if (percentageNumber >= 50) {

      overallGrade = "C";

    } else if (percentageNumber >= 40) {

      overallGrade = "D";

    }


    /* =========================================
       OVERALL RESULT
    ========================================= */

    const overallResult =
      results.length > 0 &&
      results.every(
        (item) =>
          String(item.result).toLowerCase() === "pass"
      )
        ? "Pass"
        : "Fail";


    /* =========================================
       RESULT CONTENT
    ========================================= */

    resultContent.innerHTML = `

      <!-- =====================================
           RESULT SUMMARY
      ====================================== -->

      <section class="result-summary">


        <div class="result-summary-card">

          <div class="result-summary-icon">
            📊
          </div>

          <div class="result-summary-info">

            <span>Total Marks</span>

            <strong>
              ${obtainedMarks} / ${totalMarks}
            </strong>

          </div>

        </div>


        <div class="result-summary-card">

          <div class="result-summary-icon">
            %
          </div>

          <div class="result-summary-info">

            <span>Percentage</span>

            <strong>
              ${percentage}%
            </strong>

          </div>

        </div>


        <div class="result-summary-card">

          <div class="result-summary-icon">
            🎓
          </div>

          <div class="result-summary-info">

            <span>Overall Grade</span>

            <strong>
              ${overallGrade}
            </strong>

          </div>

        </div>


        <div class="result-summary-card">

          <div class="result-summary-icon">
            ✓
          </div>

          <div class="result-summary-info">

            <span>Result</span>

            <strong class="overall-result ${overallResult.toLowerCase()}">
              ${overallResult}
            </strong>

          </div>

        </div>


      </section>


      <!-- =====================================
           RESULT TABLE CARD
      ====================================== -->

      <section class="parent-results-card result-table-card">


        <!-- TABLE HEADER -->

        <div class="result-table-header">

          <div class="result-table-title">

            <h2>${exam} Result</h2>

            <p>
              Subject-wise academic performance
            </p>

          </div>


          <button
            type="button"
            id="printParentResult"
            class="print-result-btn"
          >

            <span>🖨️</span>

            <span>Print Result</span>

          </button>

        </div>


        <!-- TABLE -->

        <div class="result-table-wrapper">

          <table class="parent-result-table">

            <thead>

              <tr>

                <th>Subject</th>

                <th>Marks</th>

                <th>Max Marks</th>

                <th>Grade</th>

                <th>Result</th>

              </tr>

            </thead>


            <tbody>

              ${
                results.length > 0
                  ? results
                      .map(
                        (item) => `

                          <tr>

                            <td class="subject-name">
                              ${item.subject}
                            </td>

                            <td class="marks-cell">
                              ${item.marks}
                            </td>

                            <td>
                              ${item.maxMarks}
                            </td>

                            <td class="grade-cell">
                              ${item.grade}
                            </td>

                            <td>

                              <span
                                class="result-badge ${
                                  String(item.result).toLowerCase() ===
                                  "pass"
                                    ? "pass"
                                    : "fail"
                                }"
                              >
                                ${item.result}
                              </span>

                            </td>

                          </tr>

                        `
                      )
                      .join("")
                  : `

                      <tr>

                        <td
                          colspan="5"
                          class="no-result"
                        >
                          No result available
                        </td>

                      </tr>

                    `
              }

            </tbody>

          </table>

        </div>


      </section>

    `;


    /* =========================================
       PRINT RESULT
    ========================================= */

    const printButton =
      document.getElementById(
        "printParentResult"
      );


    if (printButton) {

      printButton.addEventListener(
        "click",
        () => {

          window.print();

        }
      );

    }

  }


  /* =========================================
     INITIAL RESULT
  ========================================= */

  renderResults(examSelect.value);


  /* =========================================
     EXAMINATION CHANGE
  ========================================= */

  examSelect.addEventListener(
    "change",
    () => {

      renderResults(
        examSelect.value
      );

    }
  );

}