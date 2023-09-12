import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type ParticipantProps = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23E44',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
})
