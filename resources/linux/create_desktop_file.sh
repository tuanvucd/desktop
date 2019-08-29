#!/bin/sh
set -e
WORKING_DIR=`pwd`
THIS_PATH=`readlink -f $0`
cd `dirname ${THIS_PATH}`
FULL_PATH=`pwd`
cd ${WORKING_DIR}
cat <<EOS > Gchat.desktop
[Desktop Entry]
Name=Gchat
Comment=Gchat Desktop application for Linux
Exec="${FULL_PATH}/gchat-desktop"
Terminal=false
Type=Application
Icon=${FULL_PATH}/icon.svg
Categories=Network;InstantMessaging;
EOS
chmod +x Gchat.desktop
