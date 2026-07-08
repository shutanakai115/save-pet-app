import { afterEach, vi } from "vitest";

// 各テスト後にモックをリセットし、テスト間の汚染を防ぐ
afterEach(() => {
  vi.restoreAllMocks();
});
