import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, setTodoText, updateTodo } from '../actions';

import Input from './Input';

class TodoForm extends React.Component{

    onChangeText(text){
        this.props.dispatchSetTodoText(text);
    }

    onPress(){
        const { todo } = this.props;
        if(todo.id){
            this.props.dispatchUpdateTodo(todo);
        }else{
            const { text } = this.props.todo
            this.props.dispatchAddTodo( text );  
        }
    }
    
    render(){

        const { text } = this.props.todo;

        return(
            <View style={ styles.formContainer }>
                <View style={ styles.inputContainer }>
                  <Input 
                    onChangeText={text => this.onChangeText(text)}
                    value={text}
                  />
                </View>
                <View style={ styles.ButtonContainer }>
                   <Button 
                        title="ADD" 
                        onPress={ () => this.onPress() }
                    /> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flexDirection: 'row'
    },
    inputContainer:{
        flex: 4
    },
    ButtonContainer:{
        flex: 1
    }
})

// const mapDispatchToProps = {
//     dispatchAddTodo: addTodo
// }

const mapStateToProps = state => {
    return{ 
        todo: state.editingTodo
    }
}

export default connect(
    mapStateToProps, { 
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
})(TodoForm);