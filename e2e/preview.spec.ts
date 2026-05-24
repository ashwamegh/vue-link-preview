import { test, expect } from '@playwright/test';
import { resolve } from 'path';
import * as fs from 'fs';

test.describe('VueLinkPreview component', () => {
  test('should render link preview', async ({ page }) => {
    // Generate a temporary HTML file for Playwright
    const testHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
          <script src="../dist/vuelinkpreview.umd.js"></script>
        </head>
        <body>
          <div id="app">
            <vue-link-preview url="https://example.com/"></vue-link-preview>
          </div>
          <script>
            console.log(VueLinkPreview);
            new Vue({
              el: '#app',
              components: {
                'vue-link-preview': VueLinkPreview.default
              }
            })
          </script>
        </body>
      </html>
    `;
    fs.writeFileSync(resolve(__dirname, 'test.html'), testHtml);

    // Capture console logs to debug if the component is mounted
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    await page.route('https://lpdg-server.azurewebsites.net/parse/link', async route => {
      const json = {
        title: 'Example Domain',
        description: 'This domain is for use in illustrative examples in documents.',
        domain: 'example.com',
        img: 'https://example.com/image.jpg'
      };
      await route.fulfill({ json, headers: { 'Access-Control-Allow-Origin': '*' } });
    });

    await page.goto(`file://${resolve(__dirname, 'test.html')}`);

    const locator = page.locator('.link-preview-section');
    await expect(locator).toBeVisible();

    await expect(page.locator('.link-title').first()).toContainText('Example Domain');
    await expect(page.locator('.link-url').first()).toContainText('example.com');
  });
});
