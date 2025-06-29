import { Button } from "@/components/ui/button";
import { Home, Users, Check, X } from "lucide-react";
import Link from "next/link";

export default function HousingKr() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Header */}
      <div className="flex justify-end max-w-4xl mx-auto">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-800">
          <Link href="/housing-en">English</Link>
        </Button>
      </div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <Home className="text-3xl" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">기숙사 가이드</h1>
        <p className="text-lg text-gray-600">
          공식 UVA 기숙사 웹사이트 및 장단점 정리된 링크 모음
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Housing Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a
            href="https://housing.virginia.edu/incoming-undergraduates"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-transparent hover:border-blue-200"
            style={{ borderLeftColor: "#154DEC", borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5" style={{ color: "#154DEC" }} />
              <h2
                className="text-lg font-semibold underline"
                style={{ color: "#154DEC" }}
              >
                신입생용
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              신입생을 위한 기숙사 옵션과 정보
            </p>
          </a>

          <a
            href="https://housing.virginia.edu/incoming-transfers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-transparent hover:border-blue-200"
            style={{ borderLeftColor: "#154DEC", borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5" style={{ color: "#154DEC" }} />
              <h2
                className="text-lg font-semibold underline"
                style={{ color: "#154DEC" }}
              >
                편입생용
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              편입생을 위한 기숙사 옵션과 정보
            </p>
          </a>

          <a
            href="https://housing.virginia.edu/returning-undergraduates"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-transparent hover:border-blue-200"
            style={{ borderLeftColor: "#154DEC", borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5" style={{ color: "#154DEC" }} />
              <h2
                className="text-lg font-semibold underline"
                style={{ color: "#154DEC" }}
              >
                재학생용
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              재학생을 위한 기숙사 옵션과 정보
            </p>
          </a>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            기숙사 vs 자취 비교
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dorms */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                기숙사 (On-Grounds Housing)
              </h3>

              <div className="mb-4">
                <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  장점
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 커뮤니티 형성과 사교 기회</li>
                  <li>• 다양한 기숙사 이벤트</li>
                  <li>• 학교와 가까운 거리</li>
                  <li>• 비교적 안전함</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2 text-sm">
                  <X className="w-4 h-4" />
                  단점
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 개인 공간 부족</li>
                  <li>• 공용 화장실 및 주방 (기숙사 종류에 따라 다름)</li>
                  <li>• 유료 세탁</li>
                  <li>• 좁은 수납공간</li>
                </ul>
              </div>
            </div>

            {/* Off-Campus */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                자취 (Off-Grounds Housing)
              </h3>

              <div className="mb-4">
                <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4" />
                  장점
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 독립적이고 프라이버시 보장</li>
                  <li>• 넓은 생활 공간</li>
                  <li>• 직접 요리 가능</li>
                  <li>• 룸메이트 선택 가능</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2 text-sm">
                  <X className="w-4 h-4" />
                  단점
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 통학 거리 (위치에 따라 상이)</li>
                  <li>• 수도/전기 등 관리 직접 해야 함</li>
                  <li>• 가구 직접 구비해야 함</li>
                  <li>• 계약 기간 존재</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
