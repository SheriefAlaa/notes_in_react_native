# ReactNative notes
The purpose of this app is to practise RN. The app will be able to CRUD notes. This app will not have a backend.

## What is a note?
A note can have:
1. Title
2. Body can be one or more of:
   1. Text
   2. Images
   3. Voice notes
   4. Hyperlinks to other notes or web links

## Goals
- [ ] Should support dev / prod modes.
- [ ] Should use a feature flag system (Firebase Remote Config).
- [ ] Lock app with password.
  - [ ] FaceID/Fingerprint authentication.
- [ ] Full text search notes.
- [ ] Share a note as a PDF with a friend.
- [ ] Backup to iCloud.
- [ ] Unit tests
  - [ ] Integration tests
- [ ] CI/CD
- [ ] The app will not use a backend and will rely solely on local storage such as sqlite.
- [ ] Deep links to specific notes on a custom scheme (not via http).
- [ ] Supports push notifications (local reminder and FCM).