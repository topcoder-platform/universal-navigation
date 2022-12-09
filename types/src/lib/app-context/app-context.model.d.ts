import type { AuthConfig } from "./auth-config.model";
import type { NavigationHandler } from "./navigation-handler.model";
import type { SupportMeta } from "./support-meta.model";
import type { ToolConfig } from "./tool-config.model";
export interface AppContext {
    auth: AuthConfig;
    toolConfig: ToolConfig;
    navigationHandler: NavigationHandler;
    supportMeta: SupportMeta;
}
