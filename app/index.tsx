import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { router } from 'expo-router';

export default function IndexScreen() {

  const handlePush = () => {
    router.replace('/sign-in');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index Screen</Text>
      <Pressable onPress={handlePush} style={{ padding: 10 }}>
        <Text>Iniciar</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
