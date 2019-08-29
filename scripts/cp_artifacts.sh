#!/bin/sh
set -eu

VERSION=`cat package.json | jq -r '.version'`
SRC=$1
DEST=$2

cp "${SRC}/gchat-desktop-${VERSION}-win-ia32.zip" "${DEST}/gchat-desktop-${VERSION}-win32.zip"
cp "${SRC}/gchat-desktop-${VERSION}-win-x64.zip" "${DEST}/gchat-desktop-${VERSION}-win64.zip"
cp "${SRC}/gchat-desktop-setup-${VERSION}-win.exe" "${DEST}/"
cp "${SRC}"/gchat-desktop-*-mac.* "${DEST}/"
cp "${SRC}"/gchat-desktop-*-linux-* "${DEST}/"
cp "${SRC}"/*.yml "${DEST}/"
cp "${SRC}"/*.blockmap "${DEST}/"
