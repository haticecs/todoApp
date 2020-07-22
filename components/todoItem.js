import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

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
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <MaterialIcons name="delete" size={40} color={"#ddd"} />
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
  icon: {
    flex: 1,
    flexDirection: "row-reverse",
    marginLeft: 5,
  },
});
