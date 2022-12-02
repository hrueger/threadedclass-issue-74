# Minimal Reproduction for [#74](https://github.com/nytamin/threadedClass/issues/74)

## Setup Instructions
- Install dependencies with `yarn`
- Insert the IP of an ATEM switcher into `index.js`. If you don't have an ATEM, you can use the [atem-simulator](https://github.com/jonknoll/pyAtemSim) to simulate one and use the IP `127.0.0.1`.

## Reproduction Steps
- Run `yarn start` to start the server
- Run `node .` --> ✔ This works and sets the program input to 3
- Run `yarn electron .` --> ✔ This works and sets the program input to 3
- Build using `yarn electron-builder` and run `dist/win-unpacked/atem.exe` --> ❌ This does not work. There are no logs except the usual `ThreadedClass (4283) Skipping exit handler registration as no exit handler is registered`
- (optional) Verify that if you disable multithreading in `index.js`, rebuilding using `yarn electron-builder` and running `dist/win-unpacked/atem.exe` it works as expected.
