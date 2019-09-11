// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present GChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {URL} from 'url';

import {ipcMain} from 'electron';

function dequeueRequests(requestQueue, permissionManager, origin, permission, status) {
  switch (status) {
  case 'allow':
    permissionManager.grant(origin, permission);
    break;
  case 'block':
    permissionManager.deny(origin, permission);
    break;
  default:
    break;
  }
  if (status === 'allow' || status === 'block') {
    const newQueue = requestQueue.filter((request) => {
      if (request.origin === origin && request.permission === permission) {
        request.callback(status === 'allow');
        return false;
      }
      return true;
    });
    requestQueue.splice(0, requestQueue.length, ...newQueue);
  } else {
    const index = requestQueue.findIndex((request) => {
      return request.origin === origin && request.permission === permission;
    });
    requestQueue[index].callback(false);
    requestQueue.splice(index, 1);
  }
}

export default function permissionRequestHandler(mainWindow, permissionManager) {
  const requestQueue = [];
  ipcMain.on('update-permission', (event, origin, permission, status) => {
    dequeueRequests(requestQueue, permissionManager, origin, permission, status);
  });
  return (webContents, permission, callback) => {
    let targetURL;
    try {
      targetURL = new URL(webContents.getURL());
    } catch (err) {
      console.log(err);
      callback(false);
      return;
    }
    if (permissionManager.isDenied(targetURL.origin, permission)) {
      callback(false);
      return;
    }
    if (permissionManager.isGranted(targetURL.origin, permission)) {
      callback(true);
      return;
    }

    requestQueue.push({
      origin: targetURL.origin,
      permission,
      callback,
    });
    mainWindow.webContents.send('request-permission', targetURL.origin, permission);
  };
}
