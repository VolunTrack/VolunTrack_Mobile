import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import MailSearchBar from '../components/MailSearchBar';
import { usePushNotification } from '../services/pushnotification';

const MailScreen = ({ navigation }) => {
  usePushNotification();

  const [messages, setMessages] = useState([
    { id: 1, text: 'Message 1' },
    { id: 2, text: 'Message 2' },
    { id: 3, text: 'Message 3' },
  ]);
  const [showMessages, setShowMessages] = useState(true);
  const [starredMessages, setStarredMessages] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);

  useEffect(() => {
    // ... (your existing push notification code)
  }, []);

  const navigateToIndividualMail = (message) => {
    navigation.navigate('IndividualMail', { message });
  };

  const isMessageStarred = (messageId) => starredMessages.includes(messageId);

  const toggleSelectMenu = () => {
    console.log('Select menu pressed');
    setShowMessages((prevShowMessages) => !prevShowMessages);
    setSelectedMessages([]);
  };

  const deleteSelectedMessages = () => {
    const updatedMessages = messages.filter((message) => !selectedMessages.includes(message.id));
    setMessages(updatedMessages);
    setSelectedMessages([]);
    setShowMessages(updatedMessages.length > 0);
  };

  const handleDelete = () => {
    console.log('Delete button pressed');
    deleteSelectedMessages();
  };

  const toggleStar = (messageId) => {
    const isStarred = starredMessages.includes(messageId);
    if (isStarred) {
      setStarredMessages(starredMessages.filter((id) => id !== messageId));
    } else {
      setStarredMessages([...starredMessages, messageId]);
    }
  };

  const selectMessage = (messageId) => {
    setSelectedMessages((prevSelectedMessages) => {
      if (prevSelectedMessages.includes(messageId)) {
        return prevSelectedMessages.filter((id) => id !== messageId);
      } else {
        return [...prevSelectedMessages, messageId];
      }
    });
  };

  const profileImages = {
    1: require('../../assets/profile-pic.jpeg'),
    2: require('../../assets/profile-pic.jpeg'),
    3: require('../../assets/profile-pic.jpeg'),
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Image source={require('../../assets/adaptive-icon-cropped.png')} style={styles.icon} />
      </TouchableOpacity>
      <MailSearchBar />
      {showMessages ? (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <>
              {selectedMessages.length > 0 && (
                <View style={styles.selectLabelContainer}>
                  <Text style={styles.selectLabelText}>Select</Text>
                </View>
              )}
              <TouchableOpacity
                onPress={() => {
                  if (selectedMessages.length > 0) {
                    selectMessage(item.id);
                  } else {
                    navigateToIndividualMail(item);
                  }
                }}
              >
                <View
                  style={[
                    styles.messageItem,
                    selectedMessages.includes(item.id) && styles.selectedMessage,
                  ]}
                >
                  <TouchableOpacity onPress={() => selectMessage(item.id)}>
                    <Image source={profileImages[item.id]} style={styles.profileImage} />
                  </TouchableOpacity>
                  <View style={styles.messageContent}>
                    <Text style={styles.messageText}>{item.text}</Text>
                  </View>
                  <TouchableOpacity onPress={() => toggleStar(item.id)} style={styles.starIcon}>
                    {isMessageStarred(item.id) ? (
                      <MaterialIcons name="star" size={18} color="gold" />
                    ) : (
                      <MaterialIcons name="star-outline" size={18} color="gray" />
                    )}
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              {index < messages.length - 1 && <View style={styles.divider} />}
            </>
          )}
        />
      ) : (
        <View style={styles.noMessageContainer}>
          <Text style={styles.noMessageText}>No messages available</Text>
        </View>
      )}
      {messages.length > 0 && (
        <View style={styles.topRightIcons} elevation={5}>
          {selectedMessages.length > 0 && (
            <TouchableOpacity onPress={handleDelete}>
              <Image source={require('../../assets/trash.png')} style={styles.topRightIcon} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={toggleSelectMenu}>
            <Image source={require('../../assets/menuu.png')} style={styles.topRightIcon} />
          </TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: 25
  },
  header: {
    color: colors.primary,
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 28,
    marginVertical: 15,
    marginLeft: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    marginHorizontal: 15,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    color: 'rgb(58,59,60)',
    fontSize: 14,
  },
  starIcon: {
    marginLeft: 'auto',
  },
  topRightIcons: {
    position: 'absolute',
    top: 20,
    marginTop:40,
    marginLeft:20,
    right: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  topRightIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  trashIcon: {
    marginLeft: 10,
  },
  aboutUsIcon: {
    marginLeft: 10
  },
  divider: {
    height:  0.8,
    backgroundColor: 'lightgray',
    marginHorizontal: 0,
  },
  noMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMessageText: {
    fontSize: 18,
    color: 'gray',
  },
  selectedMessage: {
    backgroundColor: colors.primaryLight,
  },
  selectLabelContainer: {
    backgroundColor: colors.primary, // Customize the background color as needed
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 15,
    borderRadius: 5,
  },
  selectLabelText: {
    color: '#FFFFFF', // Customize the text color as needed
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default MailScreen