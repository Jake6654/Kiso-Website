import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InternationalGuideEn2() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="flex justify-end max-w-4xl mx-auto">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-800">
          <Link href="/international-guide-kr2">한글</Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-600 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Prepare for Your Visa Interview
          </h1>
          <p className="text-lg text-gray-600">
            Step-by-step instructions for I-20, SEVIS, and F-1 visa application
          </p>
        </div>

        {/* Step Block */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              Steps to Prepare for Your Visa
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <ol className="list-decimal list-inside text-gray-700 space-y-2 font-medium">
              <li>
                Read the I-20 instruction sheet (page 3 of the I-20 document).
              </li>
              <li>
                Pay your SEVIS fee at{" "}
                <a
                  href="https://www.fmjfee.com"
                  className="text-sky-700 font-semibold underline"
                  target="_blank"
                >
                  www.fmjfee.com
                </a>{" "}
                and save a copy of the receipt.
              </li>
              <li>
                Complete the DS-160 visa application. Learn more at the{" "}
                <a
                  href="https://travel.state.gov"
                  className="text-sky-700 font-semibold underline"
                  target="_blank"
                >
                  U.S. Department of State
                </a>{" "}
                or your local U.S. Embassy/Consulate site.
              </li>
              <li>
                Schedule your visa interview at your local U.S. Embassy or
                Consulate.
              </li>
              <a href=""></a>
            </ol>

            <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-lg">
              <h3 className="font-semibold text-sky-800 mb-2">
                Items to Bring to Your Interview:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Letter of Admission to UVA</li>
                <li>UVA signed I-20</li>
                <li>SEVIS fee receipt</li>
                <li>Valid passport</li>
                <li>Financial support documents</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <p className="text-yellow-800">
                <strong>Reminder:</strong> Additional documents may be requested
                by your local U.S. consulate or embassy. Contact them prior to
                your appointment for verification.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-lg">
              <p className="text-gray-800">
                For full visa process details, visit the{" "}
                <a
                  href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html"
                  className="text-sky-700 font-semibold underline"
                  target="_blank"
                >
                  Student Visa page
                </a>{" "}
                on travel.state.gov.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-4">
              For any questions, please contact the Korean International Student
              Organization.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/international-guide-en"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold rounded-lg shadow-lg hover:from-sky-700 hover:to-sky-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
