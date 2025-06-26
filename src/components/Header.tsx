import { FC, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      {/* ─────── 상단 헤더 ─────── */}
      <header className="w-full h-16 sticky top-0 z-50 bg-[#00abef]">
        <div className="flex items-center justify-between h-full px-4">
          {/* ─ 왼쪽: 햄버거 or 닫기 버튼 + 로고 ─ */}
          <div className="flex items-center space-x-3">
            {/* 모바일에서만 보이는 메뉴 토글 버튼 */}
            <button
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none sm:hidden"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>

            <Link href="/" className="flex items-baseline space-x-1">
              <span className="text-white text-2xl font-bold">KISO</span>
              <span className="text-white text-xs">한인회</span>
            </Link>
          </div>

          {/* ─ 오른쪽: 데스크탑에서는 메뉴, 모바일에서는 검색 버튼만 ─ */}
          <div className="flex items-center space-x-4">
            {/* 데스크탑용 네비게이션 링크 */}
            <nav className="hidden sm:flex space-x-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">
              <Link href="#" className="text-white hover:">
                Test1
              </Link>
              <Link href="#" className="text-white hover:text-cyan-100">
                Test2
              </Link>
              <Link
                href="#"
                className="text-white hover:underline transition-colors duration-300"
              >
                Test3
              </Link>
              <Link href="#" className="text-white hover:underline">
                Test3
              </Link>
              <Link href="#" className="text-white hover:underline">
                Test3
              </Link>
            </nav>

            {/* 검색 버튼 */}
            <div className="relative">
              <button
                aria-label={isSearchOpen ? "검색 닫기" : "검색 열기"}
                onClick={toggleSearch}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <FaSearch className="text-2xl" />
              </button>

              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 z-40">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="w-64 px-3 py-1 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ─────── 모바일 사이드바 ─────── */}
      {isMenuOpen && (
        <>
          {/* 오버레이 */}
          <div
            className="fixed top-0 left-0 w-full h-full z-40 sm:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />

          {/* 왼쪽 사이드바 */}
          <aside className="fixed top-16 left-0 bottom-0 w-64 bg-[#00abef] z-60 flex flex-col border-t border-gray-200 overflow-y-auto sm:hidden">
            <nav className="flex-1 px-4 py-6 space-y-4">
              <Link
                href="#"
                className="block text-white text-xl hover:underline"
              >
                Test1
              </Link>
              <Link
                href="#"
                className="block text-white text-xl hover:underline"
              >
                Test2
              </Link>
              <Link
                href="#"
                className="block text-white text-xl hover:underline"
              >
                Test3
              </Link>
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;
