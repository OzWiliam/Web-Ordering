import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Banner from './Banner';

test('render banner', () => {
  const testRenderer = TestRenderer.create(<Banner name="NGHIA" />);
  const testInstance = testRenderer.root;
  const bannerText = testInstance.findByProps({ className: 'banner_text' });
  expect(bannerText.children).toEqual(['Hello ', 'NGHIA']);
});
