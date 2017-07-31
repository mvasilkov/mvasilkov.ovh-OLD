#!/bin/bash
set -eu

if [[ $# -eq 0 ]]; then
	echo >&2 'Usage: run_java.sh <Java file> <main class>'
	exit 1
fi

echo >&2 Compiling
javac -d build "$1"

echo >&2 Running
java -cp build "$2"
