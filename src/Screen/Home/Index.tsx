import { Text, TextInput, View } from "react-native";
import  { styles }  from './styles'

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}> 
                nome do evento 
            </Text>
            <Text style={styles.eventDate}> 
                Sexta, 30 de maio de 2024
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="escreva aqui" 
                placeholderTextColor="#ffffd1"
                
            />
        </View>
    )
}