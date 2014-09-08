SRC = $(shell find src -name "*.js" -type f)
TEST_TIMEOUT = 2000
TEST_REPORTER = spec

all: lib/pathfinding-browser.js visual

lib/pathfinding-browser.js: $(SRC)
	@mkdir -p lib
	@node utils/build.js

visual: visual/lib/pathfinding-browser.min.js

visual/lib/pathfinding-browser.min.js: lib/pathfinding-browser.js
	@cp -v $^ visual/lib/pathfinding-browser.min.js

test:
	@NODE_ENV=test \
		./node_modules/.bin/mocha \
			--require should \
			--timeout $(TEST_TIMEOUT) \
			--reporter $(TEST_REPORTER) \
			--bail

clean:
	rm -f lib/pathfinding-browser.js

.PHONY: test clean
