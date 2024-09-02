import delay from "./delay";

describe("delay", () => {
  it("지정된 지연 시간 후에 함수를 호출해야 합니다", (done) => {
    const mockFunc = jest.fn(); // 모의 함수 생성

    // mock 함수와 100ms 지연 시간을 사용하여 delay 호출
    delay(mockFunc, 100);

    // 100ms 후에 mock 함수가 호출되었는지 확인하기 위해 setTimeout 사용
    setTimeout(() => {
      expect(mockFunc).toHaveBeenCalled();
      done(); // 테스트가 완료되었음을 알림
    }, 110); // 함수가 호출되었는지 확인하기 위해 지연 시간보다 약간 더 기다림
  });

  it("함수에 인수를 전달해야 합니다", (done) => {
    const mockFunc = jest.fn();

    // mock 함수, 100ms 지연 시간, 그리고 몇 개의 인수를 사용하여 delay 호출
    delay(mockFunc, 100, "arg1", "arg2");

    setTimeout(() => {
      expect(mockFunc).toHaveBeenCalledWith("arg1", "arg2");
      done();
    }, 110);
  });

  it("첫 번째 인자가 함수가 아닐 경우 오류를 발생시켜야 합니다", () => {
    expect(() => delay(123 as any, 100)).toThrow(TypeError);
  });
});
