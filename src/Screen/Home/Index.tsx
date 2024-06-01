import { Text, TextInput, TouchableOpacity, View } from "react-native";
import  { styles }  from './styles'
import { Participant } from "../../Components/Participant";

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

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="escreva aqui" 
                    placeholderTextColor="#b8b864"    
                />

                <TouchableOpacity onPress={handleAddParticipant} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant name="Tufão"/>
            <Participant name="Tamires" />
            <Participant name="Felipe" />

        </View>
    )
}