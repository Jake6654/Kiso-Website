"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

export default function InternationalGuideKr() {
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
          <Link href="/international-guide-en">English</Link>
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
            국제 신입생 F1 발급 절차
          </h1>
          <p className="text-lg text-gray-600">
            F-1 & J-1 비자 신청을 위한 단계별 가이드
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
                ITS 새 학생 체크리스트 완료
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <a
                    href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=4bfbe33cdbde5f405bce5478dc9619ff"
                    className="font-semibold underline"
                  >
                    ITS New Student Checklist
                  </a>
                  를 완료해주세요.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <a
                      href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=6e998dc7db701bc44f32fb671d9619c2"
                      className="text-blue-600 font-medium underline"
                    >
                      UVA email
                    </a>
                    을 만든후{" "}
                    <a
                      href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=4f98738bdbf6c744f032f1f51d9619ed"
                      className="text-blue-600 font-medium underline"
                    >
                      NetBadge authentication
                    </a>
                    을 설정해 주세요.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-blue-700">ISO</span>는{" "}
                    <span className="font-semibold text-blue-700">
                      UVA email
                    </span>
                    로만 연락하며, Darden, Comm, Law 등의 이메일은 사용하지
                    않습니다
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
                필수 자료 확인
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 font-medium">
                다음 자료를 읽어보세요:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      F-1 또는 J-1 비자 상태 중 어떤 비자에 해당하는지 다음
                      자료를 참고해서 알아보세요:{" "}
                      <a
                        href="https://issp.virginia.edu/f-1-or-j-1"
                        className="text-green-600 font-medium underline"
                      >
                        (각 신분에 대한 정보)
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
                      (미국 내 다른 학교에서 SEVIS 기록이 있는 경우)
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
                I-20/DS-2019 설문조사 작성
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <p className="text-purple-800">
                  <a
                    href="https://virginiahsd.co1.qualtrics.com/jfe/form/SV_26wYtqUCEnvcFE2"
                    className="font-semibold underline"
                  >
                    I-20/DS-2019 Survey
                  </a>
                  를 작성해 주세요. 제출 후 약 5영업일 이내에{" "}
                  <span className="font-semibold">ISSP Connect 이민 포털</span>
                  에 엑세스를 얻을것입니다.
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
                ISSP Connect 접근
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                UVA 이메일을 통해{" "}
                <a
                  href="https://connect.issp.virginia.edu/"
                  className="text-orange-600 font-semibold underline"
                >
                  ISSP Connect
                </a>{" "}
                에 접근하는 방법에 대한 안내 링크를 받게 됩니다.
              </p>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-orange-800">
                      요청을 완료하려면{" "}
                      <span className="font-semibold">
                        노트북 또는 데스크탑
                      </span>
                      을 사용하세요.{" "}
                      <span className="font-bold text-red-600">
                        모바일 기기 사용은 피해주세요.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      모든 필수 항목과 체크박스를 빠짐없이 작성해야 합니다.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-red-800">
                      <span className="font-bold">
                        ISSP Connect에 초대받기 전까지는 로그인하지 마세요.
                      </span>{" "}
                      초대 없이 로그인하면 I-20 또는 DS-2019를 요청할 수
                      없습니다.
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
                이메일 확인 및 후속 조치
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 font-medium">
                UVA 이메일을 자주 확인하세요. 다음과 같은 경우 이메일을 받게
                됩니다:
              </p>
              <div className="space-y-3">
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-teal-800">
                      담당자가 추가 정보를 요청하는 경우
                    </p>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-teal-800">
                      <span className="font-semibold">I-20 또는 DS-2019</span>가
                      준비된 경우
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
              도움이 필요하신가요?
            </h3>
            <p className="text-gray-600 mb-4">
              질문이 있으시면 Korean International Student Organization에
              문의해주세요.
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
              href="/international-guide-kr2"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              다음 가이드로 이동
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
