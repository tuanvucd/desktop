// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present GChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {app} from 'electron';

function flushCookiesStore(session) {
  session.cookies.flushStore((err) => {
    if (err) {
      console.log(err);
    }
  });
}

export default function initCookieManager(session) {
  // Somehow cookies are not immediately saved to disk.
  // So manually flush cookie store to disk on closing the app.
  // https://github.com/electron/electron/issues/8416
  app.on('before-quit', () => {
    flushCookiesStore(session);
  });

  app.on('browser-window-blur', () => {
    flushCookiesStore(session);
  });
}
