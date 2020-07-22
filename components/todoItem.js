import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CheckBox } from "react-native-elements";

const imgDelete = require("../assets/delete.png");

export default function TodoItem({ item, pressHandler }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.item}>
      <CheckBox
        style={styles.checkbox}
        checked={isChecked}
        onPress={() => {
          setChecked(() => !isChecked);
        }}
        checkedColor={"#000"}
      />
      <Text style={isChecked ? styles.striketext : styles.text}>
        {item.name}
      </Text>
      <View style={styles.delete}>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <Image style={styles.image} source={imgDelete} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  checkbox: {
    color: "#000",
    height: 40,
    borderWidth: 5,
  },
  text: {
    flex: 3,
    fontSize: 18,
    color: "#fff",
  },
  striketext: {
    flex: 3,
    fontSize: 18,
    color: "#000",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  image: {
    width: 30,
    height: 30,
  },
  delete: {
    flex: 1,
    flexDirection: "row-reverse",
    marginLeft: 5,
  },
});
