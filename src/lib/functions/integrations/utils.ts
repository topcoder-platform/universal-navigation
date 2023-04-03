import type { NavigationAppProps } from '../../../main';

/**
 * Checks if a named integration is disabled by the parent app
 * @param config Main Navigation Config props
 * @param integrationName The name of the integration to be checked
 * @returns
 */
export const integrationIsDisabled = (
  config: NavigationAppProps['integrations'],
  integrationName: string,
): boolean => {
  return !config?.[integrationName] ? false : (
    !!config[integrationName].match(/^disable/i)
  );
}
