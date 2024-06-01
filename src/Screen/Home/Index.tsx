import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import  { styles }  from './styles'
import { Participant } from "../../Components/Participant";

export function Home() {
    const particpants = ['Tamires', 'Tufao', 'Felipe', "Manu", "Iza", "Ana", "Pai", "mae", 'tia', 'avo', 'avó']

    function handleAddParticipant() {
        console.log("tufao")
    }

    function handleRemoveParticipant() {

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

            <FlatList 
                data={particpants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Participant 
                        key={item}
                        name={item} 
                        onRemove={handleRemoveParticipant}
                    
                    />
                
                )}
            />
            
            
            

        </View>
    )
}