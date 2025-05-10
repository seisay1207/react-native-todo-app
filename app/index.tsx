import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Todo = {
  id: string;
  text: string;
};

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!todoText.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text: todoText.trim() },
    ]);
    setTodoText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo"
          value={todoText}
          onChangeText={setTodoText}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.todoItem}>{item.text}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#999",
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
    borderRadius: 4,
  },
  todoItem: {
    fontSize: 18,
    paddingVertical: 8,
  },
});
