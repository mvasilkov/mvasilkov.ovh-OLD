.PHONY: build
build:
	node build/make_changes.js

.PHONY: prog
prog:
	python3 build/make_prog.py
