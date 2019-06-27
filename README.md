# React Native Hidden Header
![npm version](https://img.shields.io/npm/v/react-native-hidden-header.svg?style=flat-square)

A component that hides the header as you swipe up and down.

![animated](https://user-images.githubusercontent.com/16087712/60230737-55cf0a80-986d-11e9-81d1-08870d1c16cb.gif)

### Installation

#### Using npm:

```sh
$ npm install --save react-native-hidden-header
```

#### Using yarn:

```sh
$ yarn add react-native-hidden-header
```

**USAGE**

Use internal scrollView:

```jsx
import HiddenHeader from 'react-native-hidden-header';

[...]

render() {
    return (
      <HiddenHeader
        header={()=> (
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>
        )}
        refreshControl={(
          <RefreshControl
            onRefresh={() => this.onRefresh()}
            refreshing={loading}
            style={{ backgroundColor: 'black' }}
            tintColor={Colors.white}
          />
        )}
      >
        <View style={styles.block}>
            <Text>This is content</Text>
        </View>
      </HiddenHeader>
    );
  }
```

You can find the gif example under [example/normal.js](https://github.com/matheushf/react-native-hidden-header/blob/master/example/normal.js):

### Props

| Prop | Type | Description |
|---|---|---|
|**`header`**|`() => ReactElement<any>`|Prop to render the header Component|
|**`refreshControl`**|`() => <RefreshControl />`|Prop that renders the RefreshControl (from `<Scrollview>`) Component|
|**`startHiddenHeaderOffset`**|`?number`|When offsetY reach this value, header will start hide.|
|**`headerWrapStyle`**|`?Object`|The styles of the header wrap element.|

### Platform Support

iOS / Android

forked and upgraded from https://github.com/fengliu222/react-native-swipe-hidden-header
