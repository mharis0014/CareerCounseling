import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const FriendScreen = (props) => {
  const usersOnline = useSelector((state) => state.usersOnline);

  const renderSeparator = () => (
    <View
      style={{
        marginBottom: -20,
      }}
    />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={usersOnline}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({item}) => {
          if (item.username != global.c_user) {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#f2f2f2',
                  width: '100%',
                  height: '100%',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Chat', {
                      name: item.username,
                      userId: item.userId,
                    })
                  }
                  style={{
                    width: '95%',
                    height: 100,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    elevation: 5,
                    margin: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{padding: 17}}>
                      <Image
                        style={{height: 60, width: 60, borderRadius: 30}}
                        source={require('../../assets/logo_transparent.png')}
                      />
                    </View>
                    <View style={{paddingTop: 20}}>
                      <Text style={{fontSize: 20}}>{item.username}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
        }}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

export default FriendScreen;
