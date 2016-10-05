/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  createRouter,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
  NavigationProvider,
} from '@exponent/ex-navigation';

class HomeScreen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>HomeScreen!</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.performAction(({ tabs, stacks }) => {
              tabs('main').jumpToTab('profile');
              stacks('profile').push(Router.getRoute('profile2'));
            });
          }}
        >
          <Text>This is broken, click me!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class PostsScreen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>PostsScreen!</Text>
      </View>
    )
  }
}

class ProfileScreen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>ProfileScreen!</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigator.push(Router.getRoute('profile2'));
          }}
        >
          <Text>This works to push, click me!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class Profile2Screen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Profile2Screen!</Text>
      </View>
    )
  }
}


const Router = createRouter(() => ({
  home: () => HomeScreen,
  posts: () => PostsScreen,
  profile: () => ProfileScreen,
  profile2: () => Profile2Screen,
}));

// Treat the TabScreen route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation
class TabScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <NavigationProvider router={Router}>
        <TabNavigation
          id="main"
          navigatorUID="main"
          initialTab="home">
          <TabItem
            id="home"
            title="Home"
            selectedStyle={styles.selectedTab}>
            <StackNavigation
              id="home"
              initialRoute={Router.getRoute('home')}
            />
          </TabItem>
          <TabItem
            id="posts"
            title="Posts"
            selectedStyle={styles.selectedTab}>
            <StackNavigation
              id="posts"
              initialRoute={Router.getRoute('posts')}
            />
          </TabItem>
          <TabItem
            id="profile"
            title="Profile"
            selectedStyle={styles.selectedTab}>
            <StackNavigation
              id="profile"
              initialRoute={Router.getRoute('profile')}
            />
          </TabItem>
        </TabNavigation>
      </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('minimalex', () => TabScreen);
