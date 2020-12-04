import React from 'react';
import {
    InputArea,
    Input
} from './styles'

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#268592" />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#268592"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                
            />
        </InputArea>
    );
}