import { Builder, By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

// Define Chrome options for Selenium to optimize performance and functionality.
const CHROME_OPTIONS = [
    "--headless",  // Run Chrome in headless mode without a GUI.
    "--disable-gpu",  // Disable GPU hardware acceleration.
    "--no-sandbox",  // Disable the Chrome sandbox for running in certain environments.
    "--blink-settings=imagesEnabled=false",  // Disable image loading to improve speed.
    "--disable-remote-fonts",  // Disable remote fonts loading.
    "--mute-audio",  // Mute audio to avoid noise during operation.
    "--disable-notifications",  // Disable all Chrome notifications.
    "--disable-webgl",  // Disable WebGL to reduce resource usage.
];

// The SeleniumChromeAgent class manages a Selenium WebDriver with custom Chrome options.
class SeleniumChromeAgent {
    /**
     * Constructs a SeleniumChromeAgent instance optionally using proxy settings.
     * @param {Object} proxy_handler - An object containing proxy details such as IP, port, username, and password.
     */
    constructor(proxy_handler) {
        const options = new chrome.Options();
        // Set a user agent string to mimic a standard web browser session.
        const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36";
        options.addArguments(`--user-agent=${userAgent}`);

        // Apply all predefined Chrome options.
        CHROME_OPTIONS.forEach(option => options.addArguments(option));

        // Check if a proxy is provided and set it up if necessary.
        if (proxy_handler) {
            const proxy = proxy_handler.getConfig();

            /*
                // Does not work for SOCKS proxies, only HTTP/HTTPS.

                options.setProxy({
                    proxyType: 'manual',
                    socksVersion: 0,
                    httpProxy: proxy.httpProxy,
                    sslProxy: proxy.sslProxy,
                    socksProxy: proxy.socksProxy,
                    socksUsername: proxy.socksUsername,
                    socksPassword: proxy.socksPassword,
                });
            */
            
            // TODO: Implement SOCKS proxy support.
        }

        // Initialize the Chrome WebDriver with the specified options.
        this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    }

    /**
     * Retrieves the initialized WebDriver instance.
     * @returns {WebDriver} The WebDriver instance for further use with Selenium operations.
     */
    async getDriver() {
        return this.driver;
    }

    /**
     * Properly closes the WebDriver and all associated windows.
     */
    async close() {
        await this.driver.quit();
    }

}

// Export the SeleniumChromeAgent class for external use.
export { SeleniumChromeAgent };
