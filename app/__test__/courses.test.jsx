import { NextUIProvider } from "@nextui-org/react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { SWRConfig } from "swr";
import "whatwg-fetch";

const AllTheProviders = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        provider: () => new Map(),
        fetcher: async (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </SWRConfig>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// 여기서부터 테스트 코드 작성
