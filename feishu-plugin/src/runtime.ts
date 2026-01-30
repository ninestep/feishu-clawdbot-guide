import type { OpenclawRuntime } from "openclaw/plugin-sdk";

let runtime: OpenclawRuntime | null = null;

export function setFeishuRuntime(rt: OpenclawRuntime) {
  runtime = rt;
}

export function getFeishuRuntime(): OpenclawRuntime {
  if (!runtime) {
    throw new Error("飞书 runtime 未初始化");
  }
  return runtime;
}
