import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress} android_ripple={{ color: Colors.primary600 }} style={({ pressed }) => pressed ? [styles.buttonInerContainer, styles.pressed] : styles.buttonInerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>

  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInerContainer: {
    backgroundColor: '#4e0329',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'open-sans'
  },
  pressed: {
    opacity: 0.25
  }
});