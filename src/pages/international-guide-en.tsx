"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function InternationalGuideEn() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToStep = (stepIndex: number): void => {
    if (stepRefs.current[stepIndex]) {
      stepRefs.current[stepIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="flex justify-end max-w-4xl mx-auto">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-800">
          <Link href="/international-guide-kr">한글</Link>
        </Button>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Guide For Newly International Students
          </h1>
          <p className="text-lg text-gray-600">
            step by step guide for F-1 & J-1 visa
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4, 5].map((step: number, index: number) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => scrollToStep(index)}
                  className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={`Go to step ${step}`}
                >
                  {step}
                </button>
                {index < 4 && <div className="w-8 h-0.5 bg-blue-300"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Container */}
        <div className="space-y-8">
          {/* STEP 1 */}
          <div
            ref={(el: HTMLDivElement | null) => {
              stepRefs.current[0] = el;
            }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Complete the ITS New Student Checklist
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  Please complete the{" "}
                  <a
                    href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=4bfbe33cdbde5f405bce5478dc9619ff"
                    className="font-semibold underline"
                  >
                    ITS New Student Checklist.
                  </a>
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Create your{" "}
                    <a
                      href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=6e998dc7db701bc44f32fb671d9619c2"
                      className="text-blue-600 font-medium underline"
                    >
                      UVA email
                    </a>{" "}
                    and set up your{" "}
                    <a
                      href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=4f98738bdbf6c744f032f1f51d9619ed"
                      className="text-blue-600 font-medium underline"
                    >
                      NetBadge authentication
                    </a>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-blue-700">ISO </span>
                    will communicate directly to your{" "}
                    <span className="font-semibold text-blue-700">
                      UVA email
                    </span>{" "}
                    Not Darden, Comm, Law, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div
            ref={(el: HTMLDivElement | null) => {
              stepRefs.current[1] = el;
            }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Read Resources for F-1 & J-1
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 font-medium">
                Read the following resources:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Determine if you wish to obtain F-1 or J-1 status{" "}
                      <a
                        href="https://issp.virginia.edu/f-1-or-j-1"
                        className="text-green-600 font-medium underline"
                      >
                        (details about each status)
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <a
                        href="https://issp.virginia.edu/f-1-transfers-and-out-uva"
                        className="text-green-600 font-medium underline"
                      >
                        Transferring your F-1 or J-1 status to UVA
                      </a>{" "}
                      (If you have a SEVIS record active at a U.S institution)
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <a
                        href="https://issp.virginia.edu/changing-f-1j-1-status"
                        className="text-green-600 font-medium underline"
                      >
                        Changing to F-1 or J-1 Status
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div
            ref={(el: HTMLDivElement | null) => {
              stepRefs.current[2] = el;
            }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Complete I-20/DS-2019 Survey
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <p className="text-purple-800">
                  <a
                    href="https://virginiahsd.co1.qualtrics.com/jfe/form/SV_26wYtqUCEnvcFE2"
                    className="font-semibold underline"
                  >
                    Complete the I-20/DS-2019 Survey.
                  </a>{" "}
                  Allow 5 business days from submission to be invited to the{" "}
                  <span className="font-semibold">
                    ISSP Connect immigration portal.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div
            ref={(el: HTMLDivElement | null) => {
              stepRefs.current[3] = el;
            }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <span className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Access ISSP Connect
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                You will receive a link to your UVA email with instructions to
                access{" "}
                <a
                  href="https://connect.issp.virginia.edu/"
                  className="text-orange-600 font-semibold underline"
                >
                  ISSP Connect
                </a>{" "}
                to complete your immigration request.
              </p>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-orange-800">
                      Please use a{" "}
                      <span className="font-semibold">laptop or desktop </span>
                      to complete immigration request.{" "}
                      <span className="font-bold text-red-600">
                        Do not use a mobile device.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Ensure you complete all required fields and checkboxes
                      within the request.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-800">
                      <span className="font-bold">
                        Do not attempt to log in to ISSP Connect
                      </span>{" "}
                      prior to receiving the invitation to access the system as
                      you will not be able to request your I-20 or DS-2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div
            ref={(el: HTMLDivElement | null) => {
              stepRefs.current[4] = el;
            }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <span className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Check Email for Response
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 font-medium">
                Check your UVA email. You will receive an email in the following
                case:
              </p>
              <div className="space-y-3">
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-teal-800">
                      When an advisor requires more information
                    </p>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-teal-800">
                      <span className="font-semibold">
                        When your I-20 or DS-2019{" "}
                      </span>
                      is ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Do you need help?
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions please contact Korean International
              Student Organization.
            </p>
            <a
              href="mailto:uvakiso24@gmail.com"
              className="text-blue-600 underline hover:text-blue-900"
            >
              uvakiso24@gmail.com
            </a>
          </div>

          <div className="text-center">
            <Link
              href="/international-guide-en2"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next Step
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
