import { View, Text, TextInput, TouchableOpacity, Image, Icon } from 'react-native'
import {useState} from 'react'
import { ListItem, expanded } from '@rneui/themed';


const CustomAccordion = () => {

  <ListItem.Accordion
    content={
      <>
        <Icon name="place" size={30} />
        <ListItem.Content>
          <ListItem.Title>List Accordion</ListItem.Title>
        </ListItem.Content>
      </>
    }
    isExpanded={expanded}
    onPress={() => {
      setExpanded(!expanded);
    }}
  >
    {list2.map((l, i) => (
      <ListItem key={i} onPress={log} bottomDivider>
        <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
        <ListItem.Content>
          <ListItem.Title><Text>Light</Text></ListItem.Title>
          <ListItem.Subtitle><Text>Dark</Text></ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))}
  </ListItem.Accordion>

}
export default CustomAccordion
