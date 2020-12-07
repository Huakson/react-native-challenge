import AsyncStorage from '@react-native-community/async-storage';

export const signIn = async (email, password) => {
    if (!email && !password) return false;

    try {
        let user = await AsyncStorage.getItem(email);
        if (!user) return false;
        user = JSON.parse(user);

        if (user.password === password) {

            let authData = {
                authenticated: 'true',
                email: user.email
            };

            await AsyncStorage.setItem('authenticated', JSON.stringify(authData));

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

        let authData = {
            authenticated: 'true',
            email: data.email
        };

        await AsyncStorage.setItem('authenticated', JSON.stringify(authData));

        return data;
    } catch (e) {

        return false;
    }
}

export const logout = async () => {
    try {

        let authData = {
            authenticated: 'false',
            email: ''
        };

        await AsyncStorage.setItem('authenticated', JSON.stringify(authData));

        return true;
    } catch (e) {
        return false;
    }
}

export const getAuthenticate = async () => {
    try {
        let data = await AsyncStorage.getItem('authenticated');
        data = JSON.parse(data);
        return data;
    } catch (e) {
        return false;
    }
}


export const getUser = async (email) => {
    try {
        let data = await AsyncStorage.getItem(email);
        data = JSON.parse(data)
        return data;
    } catch (e) {
        return false;
    }
}

export const changePassword = async (email, newPassword, oldPassword) => {
    try {
        await getUser(email).then(async (response) => {

            if(!(newPassword != response.password)) return false;
            if(oldPassword != response.password) return false;

            await AsyncStorage.removeItem(response.email);

            const newUser = {
                name: response.name,
                email: response.email,
                password: newPassword
            };

            await AsyncStorage.setItem(response.email, JSON.stringify(newUser));
            
            let authData = {
                authenticated: 'false',
                email: ''
            };
    
            await AsyncStorage.setItem('authenticated', JSON.stringify(authData));
            
        });

        return true;
    } catch (e) {
        return false;
    }
};
