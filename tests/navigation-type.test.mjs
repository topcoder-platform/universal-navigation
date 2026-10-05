import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveNavigationType } from '../src/lib/utils/navigation-type.ts';

test('tool and explicit Topgear headers are limited to the two exact community hosts', () => {
  for (const type of ['tool', 'topgear']) {
    for (const host of ['topgear.topcoder.com', 'topgear.topcoder-dev.com']) {
      assert.equal(resolveNavigationType(type, host), 'topgear');
    }
    for (const host of ['www.topcoder.com', 'platform-ui.topcoder-dev.com', 'topgear.example.com',
      'topgear.topcoder.com.example.com', 'wipro.topcoder.com', 'localhost']) {
      assert.equal(resolveNavigationType(type, host), 'tool');
    }
  }
});

test('marketing and footer remain available on Topgear hosts', () => {
  for (const type of ['marketing', 'footer']) {
    assert.equal(resolveNavigationType(type, 'topgear.topcoder.com'), type);
  }
});
