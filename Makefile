# Get local network router IP

LAN-IP:=$(shell ipconfig getifaddr en0)

# each time you update tailwind config or postcss you need to generate a new styles css file in resources folder (that you must commit)
build:
	env NODE_ENV=production hugo --gc
	open http://localhost:8910/
	# Install Caddy webserver on your machine https://caddyserver.com/docs/download
	caddy run --watch 

dev:
	env HUGO_PARAMS_APPURL=\"https://staging.pilot.pm\" hugo server --navigateToChanged --disableFastRender --bind 0.0.0.0 --baseURL http://0.0.0.0:1313