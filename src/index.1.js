import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, LayoutAnimation } from 'react-native';
import styles from './style';

class HiddenHeader extends Component {
  static defaultProps = {
    scrollViewProps: {},
    startHiddenHeaderOffset: 64,
    style: {},
    headerWrapStyle: {}
  };

  static propTypes = {
    header: PropTypes.func.isRequired,
    scrollViewProps: PropTypes.object,
    startHiddenHeaderOffset: PropTypes.number,
    style: PropTypes.object,
    headerWrapStyle: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      headerHeight: 64,
      offsetY: 0,
      headerOffsetY: 0
    };
  }

  /**
   * Calculate header offset Y.
   * @param currentOffsetY
   * @param lastOffsetY
   * @returns {number}
   */
  calcHeaderOffsetY = (currentOffsetY, lastOffsetY) => {
    const { startHiddenHeaderOffset } = this.props;
    const { headerOffsetY, headerHeight } = this.state;

    /**
     * Swipe up
     */
    if (currentOffsetY > lastOffsetY) {
      if (currentOffsetY < startHiddenHeaderOffset) {
        return headerOffsetY;
      }
      if (-headerOffsetY > headerHeight) {
        return -headerHeight;
      }

      return headerOffsetY - (currentOffsetY - lastOffsetY);
    }

    /**
    * Swipe down
    */
    if (headerOffsetY + (lastOffsetY - currentOffsetY) > 0) {
      return 0;
    }
    return headerOffsetY + (lastOffsetY - currentOffsetY);
  }

  calcScrollViewTop = () => {
    const { offsetY, headerHeight } = this.state;

    if (offsetY > 0 && offsetY < headerHeight) {
      return headerHeight - offsetY;
    } if (offsetY <= 0) {
      return headerHeight;
    }
    return 0;
  }

  /**
   * Get current header component height.
   * The height value will be the default value of
   * startHiddenOffset in `calcHeaderOffsetY` function.
   * @param e
   */
  onHeaderLayout = (e) => {
    this.setState({
      headerHeight: e.nativeEvent.layout.height
    });
  }

  onScroll = (e) => {
    const { scrollViewProps } = this.props;

    /**
     * Allow parent component do something when 'onScroll' event is fired.
     */
    scrollViewProps.onScroll && scrollViewProps.onScroll(e);

    const offsetY = e.nativeEvent.contentOffset.y;
    const { offsetY: lastOffsetY } = this.state;

    /**
     * Prevent animation when ios scroll bounce.
     */
    const contentHeight = e.nativeEvent.contentSize.height;
    const layoutHeight = e.nativeEvent.layoutMeasurement.height;

    if (offsetY <= 0) {
      this.setState({
        offsetY,
      });
      return;
    }
    if (contentHeight / layoutHeight <= 1) {
      if (offsetY > 0) {
        this.setState({
          offsetY,
        });
        return;
      }
    } else if (offsetY > (contentHeight - layoutHeight)) {
      this.setState({
        offsetY,
      });
      return;
    }

    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.linear,
      duration: 100
    });

    this.setState({
      offsetY,
      headerOffsetY: this.calcHeaderOffsetY(offsetY, lastOffsetY)
    });
  }

  scrollViewStyle = () => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: this.calcScrollViewTop(),
    bottom: 0
  })

  renderScrollView() {
    const { scrollViewProps, children } = this.props;
    return (
      <ScrollView
        scrollEventThrottle={16}
        {...scrollViewProps}
        onScroll={this.onScroll}
        style={this.scrollViewStyle()}
      >
        {children}
      </ScrollView>
    );
  }

  render() {
    const { header, style, headerWrapStyle } = this.props;
    const { headerOffsetY } = this.state;
    const Header = header;
    const CustomScrollView = () => this.renderScrollView();

    return (
      <View style={[styles.container, style]}>
        <View
          style={[styles.header.container, headerWrapStyle, {
            top: headerOffsetY
          }]}
          onLayout={this.onHeaderLayout}
        >
          <Header />
        </View>
        <View style={styles.scroll.wrap}>
          <CustomScrollView />
        </View>
      </View>
    );
  }
}

export default HiddenHeader;
