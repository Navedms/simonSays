import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import TextInput from './AppTextInput';
import Button from './Button';
import Text from './Text';
import ErrorMessage from './ErrorMessage';


function EnterName({ onPress }) {
    const [isTouched, setIsTouched] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');

    const handleOnChangeText = (text) => {
        setValue(text);
        if (!text) {
            setError('Name is a required field');
        } else {
            setError(false);
            setIsTouched(false);
        }
    }
    const handleOnPressOk = () => {
        if (!value) {
            setError('Name is a required field');
            setIsTouched(true);
        } else {
            onPress(value);
        }
    }

    return (
        <Modal animationType="slide">
            <View style={styles.modal}>
                <View style={styles.textContainer}>
                    <Text style={styles.enterName}>Please enter your name:</Text>
                    <TextInput
                        onBlur={() => setIsTouched(true)}
                        onChangeText={handleOnChangeText}
                        value={value}
                        placeholder="Full name"
                        icon="person"
                        border={1}
                    />
                    <ErrorMessage error={error} visible={isTouched} />
                </View>

                <Button title="Ok" onPress={handleOnPressOk} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        padding: 20,
    },
    textContainer: {
        marginVertical: 30,
    },
    enterName: {
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default EnterName;