# roadhow-react-native-sdk

RoadHow Library for React Native Application

## Installation

```sh
npm install roadhow-react-native-sdk
```
OR
```sh
npm install "git+ssh://git@bitbucket.org/avdevs/roadhow_react_native_sdk.git#new-js-module" --save
```

OR 

add the following to your `package.json` file inside dependencies.
```json
...
"dependencies": {
    ...
    "roadhow-react-native-sdk": "git+ssh://git@bitbucket.org/avdevs/roadhow_react_native_sdk.git#new-js-module"

    ...
}
```

### Installation via local filesystem
Another way to install is to clone this repo, and store the path to this sdk. Now, create a new react-native or expo project in separate folder. Once done, install this sdk via the following command.

```bash
$ npm install — save <path to Library>
```

you need to put your local module path in place of <path to Library>

eg: `$ npm install — save /home/user/BluetoothLibrary`

After adding your module, you need to link the module.

```bash 
$ react-native link <module name created in node module>
```

eg: `$ react-native link react-native-bluetooth`

Note: You can find the module name in the package.json file.

## Installing Dependencies
You will need to install the following packages in your project.

```js
yarn add @react-navigation/stack 
yarn add expo-modules-core expo-constants
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add -D jetifier
npx jetify
```

## Resolve dependency issues
```npx expo-cli doctor --fix-dependencies```

## Usage

```js
import { multiply } from 'roadhow-react-native-sdk';

// ...

const result = await multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
