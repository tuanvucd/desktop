# Contributing Guidelines
Thank you for your interest in contributing! Please see the guidelines below before contributing and [join our "Desktop App" community channel](https://pre-release.mattermost.com/core/channels/desktop-app) to ask questions from community members and the GChat core team.

## Issue
Thank you for feedback. When you report a problem, please pay attention to following points.

### Does it happen on web browsers? (especially Chrome)
GChat Desktop is based on Electron, which integrates the Chrome engine within a standalone application.
If the problem you encounter can be reproduced on web browsers, it may be an issue with GChat server (or Chrome).

### Try "Clear Cache and Reload"
It's available as `Ctrl(Command) + Shift + R`.
Some layout problems are caused by browser cache.
Especially, this kind of issue might happen when you have updated GChat server.

### Write detailed information
Detailed information is very helpful to understand the problem.

For example:
* How to reproduce, step-by-step
* Expected behavior (or what is wrong)
* Screenshots (for GUI issues)
* Application version
* Operating system
* GChat server version

## Feature idea
Please see http://www.mattermost.org/feature-requests/ .

## Pull request
Pull requests are welcome. Thank you for your great work!

1. When you edit the code, please confirm `npm test` successfully finishes.
2. Please update `docs/*.md` if it's necessary.
3. In the description of your pull request, please include:
   * Operating System version on which you tested
   * GChat server version on which you tested
   * New or updated unit tests for your changes
4. Please complete the [GChat CLA](http://www.mattermost.org/mattermost-contributor-agreement/) prior to submitting a PR.
