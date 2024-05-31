import { Text, TextInput, TouchableOpacity, View } from "react-native";
import  { styles }  from './styles'

export function Home() {

    function handleAddParticipant() {
        console.log("tufao")
    }

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

            <TouchableOpacity onPress={handleAddParticipant} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}