LAN-IP := $(shell ipconfig getifaddr en0) # Get local network router IP


dev: 
	env HUGO_PARAMS_APPURL="https://staging.pilot.pm" hugo server --navigateToChanged --bind 0.0.0.0 --baseURL http://${LAN-IP}:1313

