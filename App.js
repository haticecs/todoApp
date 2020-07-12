import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  StatusBar,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
const Imgbackground = require("./assets/background.jpg");
//const { width, height } = Dimensions.get("window");

export default function App() {
  const [todos, setTodos] = useState([
    { name: "clean house", key: "1" },
    { name: "watch tutorial", key: "2" },
    { name: "cook!", key: "3" },
    { name: "workout", key: "4" },
  ]);

  const pressHandler = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((currentTodos) => [
        ...currentTodos,
        { name: text, key: Math.random().toString() },
      ]);
    } else {
      Alert.alert("OPPS!", "Todo must be over 3 chars", [
        { text: "Understood", onPress: () => console.log("alert  closed") },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("keyboard dismissed");
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={Imgbackground} style={styles.image}>
          <Text style={styles.title}>
            {" "}
            You can do anything, here your todos{" "}
          </Text>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    padding: 5,
  },
});
