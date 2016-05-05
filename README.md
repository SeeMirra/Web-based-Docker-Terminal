# Web based Docker Terminal

A terminal for Docker containers with [term.js](https://github.com/rancher/term.js), and it was originate from [Docker-Terminal](https://github.com/rainforestapp/Docker-Terminal)

## Usage

This repo was another modified version for supporting using rancher api to show a terminal for Docker containers. And if you're developing websites with Rails, here are instructions for you.

First, check out [DockerShellHelper](https://github.com/qazbnm456/rancher.api.docker-shell-helper).
Then...

```html
<div data-docker-terminal-token="<%= DockerShellHelper::Rancher.get_token client.to_json %>"
    data-docker-terminal-host="<rancher host>:<port>"></div>
</body>
```

###  More

Please take one shot at [NSYSU WARGAME](https://wargame.cse.nsysu.edu.tw/).
