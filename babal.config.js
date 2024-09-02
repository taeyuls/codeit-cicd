module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react", // JSX를 사용하는 경우 필요
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest", // TypeScript 파일을 Babel로 변환
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // 확장자 설정
  testEnvironment: "node", // Node.js 환경에서 실행
};
