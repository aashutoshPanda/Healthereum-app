import React, { Component } from "react";
import { Header, Item, Input, Icon, Button, Text } from "native-base";
import { StyleSheet,View } from "react-native";
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };
  render() {
    return (
      <Header searchBar rounded style={{backgroundColor:'#04AA53'}}>
        <Item style={{borderRadius: 4}}>
          <Icon name="ios-search" />
          <Input placeholder="Search" 
            onChangeText={text => this.props.setSearchTerm(text)}
            value={this.props.search.searchTerm}/>
          <Icon name="ios-people" />
        </Item>
        <Button
            transparent
            small
            rounded
            onPress={() => this.props.searchFunction()}
          >
          <Text>Search</Text>
        </Button>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    borderRadius: 30
  }
});

const mapDispatchToProps = dispatch => {
  return {
    login: data => {
      dispatch(login(data));
    },
    setSearchTerm: term => {
      dispatch(setSearchTerm(term));
    }
  };
};
const mapStateToProps = state => {
  const { search, auth } = state;
  return { search, auth };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);