import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({ children, style }) {
  return (
    <Text style={[styles.instructionProperty, style]}>{children}</Text>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionProperty: {
    fontSize: 24,
    color: Colors.accent500
  },
});