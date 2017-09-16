import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Chat extends React.Component {
    render () {
        return (
            <View>
                <Text>
                    Enter your name:
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
   title: {
       marginTop: 20,
       marginLeft: 20,
       fontSize: 20,
   }
});

export default Chat;