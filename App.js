import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchBar from "./src/components/SearchBar";
import yelp from "./src/api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something Went Wrong");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have Found {results.length} Results </Text>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Business Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
