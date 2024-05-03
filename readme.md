![demo](demo.gif)

# Vinted Monitor

Welcome to the Vinted Real Monitor! This tool helps you keep track of new items on Vinted. It's like having your personal shopping assistant who never sleeps.

## How to Use It?

If you want to simply use and try it out, you can use my bot at this link: https://web.telegram.org/k/#@vinteditemsbot or search for `@vinteditemsbot` on Telegram. 

> [!NOTE]\
> It's just a showcase bot, so it may not be available 24/7. If you want to use it all the time, you can deploy it on your own server. Sometimes too many users can overload the bot, so it's better to have your own instance. But it is 100% free to use my bot, so feel free to use it.

Start by sending the `/start` command to the bot. It will guide you through the process. 

## Deploy Your Own Bot

If you want to deploy your own bot, you can follow the instructions below.

First of all start by cloning the repository:


```sh 
git clone https://github.com/teddy-vltn/vinted-monitor 
```

### Configuration

Before you can start using the Vinted Real Monitor, you need to configure the application. The configuration settings are stored in a file named `config.yaml`. You need to provide your Telegram bot token in this file. You can obtain a bot token from BotFather on Telegram.

> [!NOTE]\
> If you want to know about how to create a Telegram Bot : https://core.telegram.org/bots/tutorial
> Follow this tutorial to create your own bot and set your token in `config.yaml` file under `telegram` section.

```yaml
# Configuration settings for the Telegram bot

telegram:
  token: "YOUR_TELEGRAM_TOKEN" # Bot token obtained from BotFather

interval: 5 # Interval in seconds for checking new items on Vinted

use_proxies: false # Set to true if you want to use a proxy server

# List of proxy configurations for handling multiple proxy servers
proxies:
  - host: "YOUR_PROXY_IP"  # Proxy server IP address
    port: "YOUR_PROXY_PORT"            # Proxy server port
    username: "YOUR_PROXY_USERNAME"       # Proxy authentication username
    password: "YOUR_PROXY_PASSWORD"  # Proxy authentication password
    type: "YOUR_PROXY_PROTOCOL"           # Proxy type, e.g., socks, http
```

> [!WARNING]\
> If you want to use proxies, you need to set `use_proxies` to `true` and provide the proxy server details in the `proxies` section. You can add multiple proxy servers to the list. If you want to test if your proxies or your proxy server is working, you can use the following command:
> `npm run test_proxy`

To start using the Vinted Real Monitor, all you need to do is run the following command:

```sh
npm install
```

To start the Telegram bot, use the following command:

```sh
npm run telegram
```

## Need Help?

If you encounter any issues or need help with the Vinted Real Monitor, please refer to the log file named `app.log`. It contains information about the application's activities and can help you troubleshoot any issues. https://discord.gg/HgMHRjXqhQ

## TODO List

- [ ] Add a discord bot
