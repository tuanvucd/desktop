// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present GChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// For detailed guides, please refer to https://docs.mattermost.com/deployment/desktop-app-deployment.html

/**
 * Build-time configuration. End-users can't change these parameters.
 * @prop {Object[]} defaultTeams
 * @prop {string} defaultTeams[].name - The tab name for default team.
 * @prop {string} defaultTeams[].url - The URL for default team.
 * @prop {string} helpLink - The URL for "Help->Learn More..." menu item.
 *                           If null is specified, the menu disappears.
 * @prop {boolean} enableServerManagement - Whether users can edit servers configuration.
 *                                          Specify at least one server for "defaultTeams"
 *                                          when "enableServerManagement is set to false
 */
const buildConfig = {
  defaultTeams: [
    {
      name: 'Grooo',
      url: 'https://hall.grooo.vn',
    },
  ],
  helpLink: '',
  enableServerManagement: true,
  enableAutoUpdater: true,
};

export default buildConfig;
