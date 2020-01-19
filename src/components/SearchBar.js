import React from "react";
import { Header, Item, Input, Icon, Button, Text } from "native-base";
import {StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <Header searchBar rounded style={{backgroundColor:'#04AA53'}}>
      <Item style={{borderRadius: 4}}>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
        <Icon name="ios-people" />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  );
};
const styles = StyleSheet.create({
  search: {
    borderRadius: 30
  }
});
export default SearchBar;
