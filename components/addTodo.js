import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

export default function Addtodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (value) => {
    setText(value);
  };
  return (
    <View style={styles.conteiner}>
      <TextInput
        placeholder="new todo?"
        style={styles.input}
        onChangeText={(val) => changeHandler(val)}
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            submitHandler(text);
          }}
          style={styles.addbtn}
        >
          <Text style={styles.addtodo}> Add todo </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 2,
    fontSize: 18,
    marginHorizontal: 10,
  },
  addbtn: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#fff",
    marginHorizontal: 100,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  addtodo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
});
