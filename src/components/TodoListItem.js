import React from 'react';
import { StyleSheet ,Text, View, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
    <TouchableOpacity onLongPress={ onLongPressTodo } onPress={ onPressTodo }>
        <View style={ styles.line }>
            <Text style={ [
                    styles.lineText,
                    todo.done ? styles.lineThrough : null
            ] }>
                { todo.text }
            </Text>
        </View>
    </TouchableOpacity>

)

const styles = StyleSheet.create({
    line: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: "center",
        flexDirection: "row"
    },

    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    lineThrough:{
        textDecorationLine: 'line-through'
    }
})

export default TodoListItem;