import { makeInstaller } from "@air/utils";
import components from "./components";

const installer = makeInstaller(components);

export * from "@air/components";
export default installer;