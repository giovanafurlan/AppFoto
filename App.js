import { 
  Pressable, 
  StyleSheet,
  Text,
  View 
} from 'react-native';
import { useState } from 'react';

export default function App() {

  const[result, setResult] = useState();

  function busca(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      return res.json();
    })
    .then(data => {
      const foto = data.message;
      setResult(foto);
    });
  };

  return (
    <View 
     style={styles.container}>
      <Pressable  
        onPress={busca}
        style={styles.btn}>
          <Text style={{
            color: 'white'
          }}>
            Buscar
          </Text>
        </Pressable>
      <img 
        src={result}
        width="200"
        height="200"
        style={{
          border: '10px',
          margin: '50px'
        }}/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'purple'
  }
});
