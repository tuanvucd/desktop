// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present GChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import JsonFileManager from '../common/JsonFileManager';

export default class AppStateManager extends JsonFileManager {
  set lastAppVersion(version) {
    this.setValue('lastAppVersion', version);
  }

  get lastAppVersion() {
    return this.getValue('lastAppVersion');
  }

  set skippedVersion(version) {
    this.setValue('skippedVersion', version);
  }

  get skippedVersion() {
    return this.getValue('skippedVersion');
  }

  set updateCheckedDate(date) {
    this.setValue('updateCheckedDate', date.toISOString());
  }

  get updateCheckedDate() {
    const date = this.getValue('updateCheckedDate');
    if (date) {
      return new Date(date);
    }
    return null;
  }
}
