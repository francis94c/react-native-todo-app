import {
    StyleSheet
} from 'react-native';
const text = {
    color: '#fff',
    fontSize: 18
}

const styles = StyleSheet.create({
    text,
    smallText: {
        ...text,
        fontSize: 14,
        fontWeight: "bold"
    },
    bigText: {
        ...text,
        fontSize: 32,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16
    }
});

module.exports = styles;