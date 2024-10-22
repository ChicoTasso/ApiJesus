import {View, Text} from 'react-native'
import Perfil from '../components/Perfil'



export default function Usuarios(){
    return(
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Perfil title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}