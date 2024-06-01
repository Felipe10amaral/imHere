import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import  { styles }  from './styles'
import { Participant } from "../../Components/Participant";

export function Home() {
    const [participant , setParticipant] = useState<string[]>(['']);
    const [participantName, setParticipantName] = useState('')


    function handleAddParticipant() {
        //if(particpants.includes()) {}

        setParticipant(prevState => [...prevState, participantName]);
        setParticipantName('')
    }

    function handleRemoveParticipant(name: string) {
        console.log('tufao')

        
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
                    onChangeText={setParticipantName} 
                    value={participantName}   
                />

                <TouchableOpacity onPress={() => handleAddParticipant()} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participant}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Participant 
                        key={item}
                        name={item} 
                        onRemove={() => handleRemoveParticipant(item)}
                    
                    />
                
                )}
            />
            
            
            

        </View>
    )
}