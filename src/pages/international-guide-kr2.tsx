import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InternationalGuideKr2() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="flex justify-end max-w-4xl mx-auto">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-800">
          <Link href="/international-guide-en2">English</Link>
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
            비자 인터뷰 준비하기
          </h1>
          <p className="text-lg text-gray-600">
            I-20, SEVIS, F-1 비자 신청 절차 안내
          </p>
        </div>

        {/* Step Block */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              비자 준비 단계
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <ol className="list-decimal list-inside text-gray-700 space-y-2 font-medium">
              <li>I-20 문서의 3페이지에 있는 설명서를 읽어보세요.</li>
              <li>
                {" "}
                <a
                  href="https://www.fmjfee.com"
                  className="text-sky-700 font-semibold underline"
                  target="_blank"
                >
                  www.fmjfee.com
                </a>{" "}
                에서 SEVIS 비용을 지불하고 영수증을 저장하세요.
              </li>
              <li>
                DS-160 비자 신청서를 작성하세요. 더 자세한 정보는{" "}
                <a
                  href="https://travel.state.gov"
                  className="text-sky-700 font-semibold underline"
                  target="_blank"
                >
                  미국 국무부 웹사이트
                </a>{" "}
                또는 해당 지역의 미국 대사관/영사관 웹사이트를 참조하세요.
              </li>
              <li>
                거주지 근처의 미국 대사관 또는 영사관에서 비자 인터뷰를
                예약하세요.
              </li>
            </ol>

            <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-lg">
              <h3 className="font-semibold text-sky-800 mb-2">
                인터뷰에 지참할 서류:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>UVA 입학 허가서</li>
                <li>서명된 I-20 문서</li>
                <li>SEVIS 비용 영수증</li>
                <li>유효한 여권</li>
                <li>재정 증빙 서류</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <p className="text-yellow-800">
                <strong>알림:</strong> 미국 대사관 또는 영사관에서 추가 서류를
                요청할 수 있습니다. 인터뷰 전 사전 확인을 권장합니다.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-lg">
              <p className="text-gray-800">
                비자 절차 전체에 대한 자세한 내용은{" "}
                <a
                  href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html"
                  className="text-sky-700 font-semibold underline"
                  target="_blank"
                >
                  travel.state.gov의 학생 비자 페이지
                </a>
                를 방문해 주세요.
              </p>
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
              href="/international-guide-kr"
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
              돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
