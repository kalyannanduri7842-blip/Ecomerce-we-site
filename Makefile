.PHONY: start test seed

start:
	node backend/src/server.js

test:
	npm test

seed:
	node backend/src/data/seed.js
