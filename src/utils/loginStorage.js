import AsyncStorage from '@react-native-community/async-storage';

export const signIn = async (email, password) => {
    if (!email && !password) return false;

    try {
        let user = await AsyncStorage.getItem(email);
        if (!user) return false;
        user = JSON.parse(user);

        if (user.password === password) {
            await AsyncStorage.setItem('authenticated', 'true');
            console.log(`olaa ${result}`);
            return user;
        }

    } catch (e) {
        return false;
    }

};

export const signUp = async (name, email, password) => {
    if (!name && !email && !password) return false;
    try {
        const user = await AsyncStorage.getItem(email);
        if(user) return false;

        const data = {
            name: name,
            email: email,
            password: password
        }

        await AsyncStorage.setItem(email, JSON.stringify(data));

        return data;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const logout = async () => {
    try {
        await AsyncStorage.setItem('authenticated', 'false');

        return true;
    } catch (e) {
        return false;
    }
}

export const getAuthenticate = async () => {
    try {
        return await AsyncStorage.getItem('authenticated') || 'nao';
    } catch (e) {
        return false;
    }
}