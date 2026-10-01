import type { NavigationType } from '../../main';
/**
 * Selects the branded header only on the two Topgear community hosts.
 * Tool integrations opt in automatically; explicit `topgear` requests fall back
 * to the standard tool header elsewhere. Marketing and footer are unchanged.
 * @param type Requested navigation variant.
 * @param hostname Hostname without a port, normally window.location.hostname.
 * @returns The navigation variant to load. Does not throw.
 */
export declare function resolveNavigationType(type: NavigationType, hostname: string): NavigationType;
