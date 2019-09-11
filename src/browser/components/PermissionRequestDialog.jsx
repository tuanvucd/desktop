// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present GChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import PropTypes from 'prop-types';
import {Button, Glyphicon, Popover} from 'react-bootstrap';

const PERMISSIONS = {
  media: {
    description: 'Use your camera and microphone',
    glyph: 'facetime-video',
  },
  geolocation: {
    description: 'Know your location',
    glyph: 'map-marker',
  },
  notifications: {
    description: 'Show notifications',
    glyph: 'bell',
  },
  midiSysex: {
    description: 'Use your MIDI devices',
    glyph: 'music',
  },
  pointerLock: {
    description: 'Lock your mouse cursor',
    glyph: 'hand-up',
  },
  fullscreen: {
    description: 'Enter full screen',
    glyph: 'resize-full',
  },
  openExternal: {
    description: 'Open external',
    glyph: 'new-window',
  },
};

function glyph(permission) {
  const data = PERMISSIONS[permission];
  if (data) {
    return data.glyph;
  }
  return 'alert';
}

function description(permission) {
  const data = PERMISSIONS[permission];
  if (data) {
    return data.description;
  }
  return `Be granted "${permission}" permission`;
}

export default function PermissionRequestDialog(props) {
  const {origin, permission, onClickAllow, onClickBlock, onClickClose, ...reft} = props;
  return (
    <Popover
      className='PermissionRequestDialog'
      {...reft}
    >
      <div
        className='PermissionRequestDialog-content'
      >
        <p>{`${origin} wants to:`}</p>
        <p className='PermissionRequestDialog-content-description'>
          <Glyphicon glyph={glyph(permission)}/>
          {description(permission)}
        </p>
        <p className='PermissionRequestDialog-content-buttons'>
          <Button onClick={onClickAllow}>{'Allow'}</Button>
          <Button onClick={onClickBlock}>{'Block'}</Button>
        </p>
        <Button
          className='PermissionRequestDialog-content-close'
          bsStyle='link'
          onClick={onClickClose}
        >{'×'}</Button>
      </div>
    </Popover>
  );
}

PermissionRequestDialog.propTypes = {
  origin: PropTypes.string,
  permission: PropTypes.oneOf(['media', 'geolocation', 'notifications', 'midiSysex', 'pointerLock', 'fullscreen', 'openExternal']),
  onClickAllow: PropTypes.func,
  onClickBlock: PropTypes.func,
  onClickClose: PropTypes.func,
};
