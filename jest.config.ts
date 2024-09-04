import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // 커버리지 리포트 설정 추가
  collectCoverage: true, // 커버리지 수집을 활성화
  coverageDirectory: "coverage", // 커버리지 리포트를 저장할 디렉토리
  coverageReporters: ["text", "lcov"], // 커버리지 리포트 포맷 설정
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/jest.setup.ts"], // 커버리지 수집에서 제외할 경로 설정
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
