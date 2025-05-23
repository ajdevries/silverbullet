import { WorkerSandbox } from "./worker_sandbox.ts";
import type { SandboxFactory } from "./sandbox.ts";

export function createSandbox<HookT>(workerUrl: URL): SandboxFactory<HookT> {
  return (plug) => new WorkerSandbox(plug, workerUrl);
}
