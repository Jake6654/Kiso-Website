import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // next.js 권장 설정을 먼저 불러오고…
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 그 다음 객체로 룰 커스터마이징
  {
    rules: {
      // any 사용 금지 해제
      "@typescript-eslint/no-explicit-any": "off",

      // 사용 안 한 변수·인자 무시 (접두사 _: _foo 처럼 쓰면 경고 안 뜸)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      // 혹은 완전히 끄고 싶으면
      // "no-unused-vars": "off",
      // "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
