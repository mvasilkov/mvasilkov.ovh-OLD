.PHONY: build
build:
	node build/make_changes.js

.PHONY: css
css:
	yarn css

.PHONY: prog
prog:
	python3 build/make_prog.py
