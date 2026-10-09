import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = fileURLToPath(new URL('..', import.meta.url));

// expected app drawer (PM-6555 design): section -> columns -> groups -> tool labels
const TALENT = ['Talent', [
  [
    ['Earn', ['Opportunities', 'Engagement Portal', 'Copilot Portal', 'Review App', 'Wallet']],
    ['Compete', ['Marathon Matches', 'Marathon Match Tournament']],
  ],
  [
    ['AI', ['AI Hub']],
    ['Learn', ['Topcoder Academy', 'Articles', 'Archive']],
    ['Connect', ['Public Forums', 'Discord']],
  ],
]];
const STAFF = ['Staff', [
  [
    ['Delivery & Payments', ['Work App', 'Wallet Admin']],
    ['Sales & Customers', ['Customer Portal', 'Salesforce', 'Sales Pipeline', 'Procurement']],
    ['Insights', ['Analytics', 'Reports']],
  ],
  [
    ['Community & Content', ['Support', 'Payload CMS', 'Mass Email', 'Campus']],
    ['Team & Platform', ['Leave Tracker', 'System Admin']],
  ],
]];

let server;
let getToolSelectorItems;

before(async () => {
  process.env.VITE_APP_HOST_ENV = 'prod';
  server = await createServer({
    root,
    configFile: false,
    logLevel: 'silent',
    appType: 'custom',
    resolve: { alias: { lib: `${root}src/lib` } },
    server: { middlewareMode: true, hmr: false, watch: null },
  });
  ({ getToolSelectorItems } = await server.ssrLoadModule('/src/lib/functions/tool-selector-menu.provider.ts'));
});

after(() => server?.close());

/**
 * Stubs the browser globals read by the jwt helpers with a `tcjwt` cookie holding the given roles.
 * @param {string[]} roles JWT roles of the signed in user
 */
function signIn(roles) {
  const payload = Buffer.from(JSON.stringify({ 'https://topcoder.com/roles': roles })).toString('base64url');
  globalThis.window = { atob: globalThis.atob };
  globalThis.document = { cookie: `tcjwt=e30.${payload}.signature` };
}

/** Reduces the drawer menu to [section, [column[[group, labels]]]] for comparison with the design. */
const toLayout = (sections) => sections.map((section) => [
  section.label,
  section.children.map((column) => column.children.map((group) => [
    group.label,
    group.children.map((item) => item.label),
  ])),
]);

const toItems = (sections) => sections.flatMap((section) => section.children
  .flatMap((column) => column.children.flatMap((group) => group.children)));

test('staff see the Talent and Staff sections laid out as in the design', () => {
  signIn(['Topcoder User', 'Topcoder Staff']);
  assert.deepEqual(toLayout(getToolSelectorItems()), [TALENT, STAFF]);
});

test('members only see the Talent section', () => {
  for (const roles of [['Topcoder User'], ['Topcoder User', 'Topcoder Talent']]) {
    signIn(roles);
    assert.deepEqual(toLayout(getToolSelectorItems()), [TALENT]);
  }
});

test('customers without talent or staff roles get no drawer items', () => {
  signIn(['Topcoder Customer']);
  assert.deepEqual(getToolSelectorItems(), []);
});

test('every drawer tool has a description, a sprite icon and its production url', async () => {
  const sprite = await readFile(`${root}public/assets/tools/sprite.svg`, 'utf8');
  signIn(['Topcoder Staff']);
  const items = toItems(getToolSelectorItems());

  for (const item of items) {
    assert.ok(item.description, `${item.label} has a description`);
    assert.ok(sprite.includes(`id="${item.icon}"`), `${item.label} icon "${item.icon}" is in the sprite`);
  }

  const urls = Object.fromEntries(items.map((item) => [item.label, item.url]));
  assert.deepEqual({
    'Archive': urls['Archive'],
    'Public Forums': urls['Public Forums'],
    'Work App': urls['Work App'],
    'Wallet Admin': urls['Wallet Admin'],
    'Customer Portal': urls['Customer Portal'],
    'Salesforce': urls['Salesforce'],
    'Sales Pipeline': urls['Sales Pipeline'],
    'Procurement': urls['Procurement'],
    'Analytics': urls['Analytics'],
    'Reports': urls['Reports'],
    'Support': urls['Support'],
    'Payload CMS': urls['Payload CMS'],
    'Mass Email': urls['Mass Email'],
    'Campus': urls['Campus'],
    'Leave Tracker': urls['Leave Tracker'],
    'System Admin': urls['System Admin'],
  }, {
    'Archive': 'https://archive.topcoder.com',
    'Public Forums': 'https://forums.topcoder.com',
    'Work App': 'https://work.topcoder.com',
    'Wallet Admin': 'https://wallet-admin.topcoder.com',
    'Customer Portal': 'https://customer.topcoder.com',
    'Salesforce': 'https://topcoder.my.salesforce.com',
    'Sales Pipeline': 'https://sales.topcoder.com',
    'Procurement': 'https://procurement.topcoder.com',
    'Analytics': 'https://analytics.topcoder.com',
    'Reports': 'https://reports.topcoder.com',
    'Support': 'https://support.topcoder.com',
    'Payload CMS': 'https://cms.topcoder.com/admin',
    'Mass Email': 'https://contact.topcoder.com',
    'Campus': 'https://campus.topcoder.com',
    'Leave Tracker': 'https://calendar.topcoder.com',
    'System Admin': 'https://system-admin.topcoder.com',
  });
});
