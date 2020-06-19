LAN-IP := $(shell ipconfig getifaddr en0) # Get local network router IP

# each time you update tailwind config or postcss you need to generate a new styles css file in resources folder (that you must commit)
build:
	hugo --gc

dev: 
	env HUGO_PARAMS_APPURL="https://staging.pilot.pm" hugo server --gc --navigateToChanged --bind 0.0.0.0 --baseURL http://${LAN-IP}:1313

