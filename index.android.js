import React, { Component } from 'react';
import { AppRegistry, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import codePush from 'react-native-code-push';

const { width, height } = Dimensions.get('window');
const bgImageUrl = 'http://lorempixel.com/' + width + '/' + height + '/abstract/7/';

export default class rnCodePush extends Component {
  componentDidMount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: bgImageUrl }}
          style={{ flex: 1, padding: 5, width: null, height: null }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fefefe',
              padding: 10,
            }}>
              Lorem Ipsum
            </Text>
            <Text style={{
              fontSize: 16,
              color: '#222',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: 10,
              borderRadius: 10,
              marginBottom: 15
            }}>
              Quisque pellentesque a odio eget porta. Duis bibendum mollis viverra. Pellentesque at blandit odio. Quisque eget risus non dolor ultrices tincidunt. Proin sit amet mi odio. Pellentesque et euismod libero. Morbi vitae turpis ac lectus accumsan facilisis in et lectus. Quisque in leo hendrerit odio molestie imperdiet id id felis.
            </Text>
            <Text style={{
              fontSize: 16,
              color: '#222',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: 10,
              borderRadius: 10,
              marginBottom: 15
            }}>
              Quisque pellentesque a odio eget porta. Duis bibendum mollis viverra. Pellentesque at blandit odio. Quisque eget risus non dolor ultrices tincidunt. Proin sit amet mi odio. Pellentesque et euismod libero. Morbi vitae turpis ac lectus accumsan facilisis in et lectus. Quisque in leo hendrerit odio molestie imperdiet id id felis.
            </Text>
          </View>
          <View style={{
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 10,
              color: '#ccc'
            }}>
              Version 1.0.2
            </Text>
            <TouchableOpacity onPress={() => {
              console.log('update clicked!')
              codePush.sync({
                updateDialog: true,
                installMode: codePush.InstallMode.IMMEDIATE
              })
            }}>
              <Text style={{
                fontSize: 10,
                color: '#ccc'
              }}>
                Check for updates
              </Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

AppRegistry.registerComponent('rnCodePush', () => rnCodePush);
