import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        // borderBottomColor: 'grey',
        // borderBottomWidth: 2,

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10
    },
    badgeContainer: {
        backgroundColor: '#3872E9',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        position: 'absolute',
        left: 45,
        top: 10
    },
    badgeText: {
        color: 'white',
        fontSize: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    text: {
        color: 'grey',
        fontSize: 15
    }
});

export default styles;