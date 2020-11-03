# Get local network router IP

LAN-IP:=$(shell ipconfig getifaddr en0)

# each time you update tailwind config or postcss you need to generate a new styles css file in resources folder (that you must commit)
build:
	hugo --gc
	open http://localhost:8910/
	# Install Caddy webserver on your machine https://caddyserver.com/docs/download
	caddy run --watch 
