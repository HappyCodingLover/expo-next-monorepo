import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'dripsy'

export type ButtonProps = {
  onPress: () => void
  title: string
  color?: string
  textColor?: string
  size?: string
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1
  },
  large: {
    paddingVertical: 20
  }
})

export const Button = ({
  title,
  onPress,
  color,
  textColor,
  size
}: ButtonProps) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[
        styles.button,
        !!color && { backgroundColor: color },
        size && styles[size]
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
)
