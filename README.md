# React Native Hidden Header
![npm version](https://img.shields.io/npm/v/react-native-hidden-header.svg?style=flat-square)

A component that hides the header as you swipe up and down.


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
