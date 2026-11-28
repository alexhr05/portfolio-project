import React from "react";
import BankSAASShowLoanPage from "../Images/BankSAASShowLoanPage.PNG";
import BankSAASShowReportPage from "../Images/BankSAASShowReportPage.PNG";
import BankSAASLoginPage from "../Images/BankSAASLoginPage.PNG";
import ProjectDetailsLayout from "../Components/ProjectDetailsLayout";

function BankSAASPage() {
  return (
    <ProjectDetailsLayout
      title="Bank SAAS"
      heroImage={BankSAASLoginPage}
      heroImageOrientation="portrait"
      overview={[
        "Bank SAAS is a simplified banking application for keeping track of customer names, account balances, and credit information.",
        "The application includes a loan repayment calculator. Users enter a loan amount, term, and interest rate to calculate the repayment amount. A client report also provides sorting and filtering options for the displayed financial data.",
      ]}
      technologies={[
        { name: "Java", category: "Programming language" },
        { name: "Desktop GUI", category: "User interface" },
        { name: "Loan calculation", category: "Financial feature" },
        { name: "Sorting and filtering", category: "Report tools" },
      ]}
      features={[
        {
          title: "Customer financial records",
          description:
            "View customer names, credit amounts, and account balances in a report.",
        },
        {
          title: "Loan repayment calculator",
          description:
            "Calculate a repayment using the credit amount, loan term, and interest rate.",
        },
        {
          title: "Sort client records",
          description:
            "Sort the report by credit amount or money balance in ascending or descending order.",
        },
        {
          title: "Filter client records",
          description:
            "Filter report entries by balance thresholds, including amounts above or below 10,000 BGN.",
        },
      ]}
      screenshots={[
        {
          image: BankSAASShowLoanPage,
          caption: "Loan repayment calculator",
        },
        {
          image: BankSAASShowReportPage,
          caption: "Client report with sorting and filters",
        },
      ]}
      dateRange="May 2023 - June 2023"
      duration="Less than one month"
    />
  );
}

export default BankSAASPage;
