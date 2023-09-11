import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useAppDispatch } from "@/store";
import { login } from "@/features/authentication/auth.slice";

export default function SignInScreen() {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Pressable onPress={handleLogin} style={{ padding: 10 }}>
        <Text>Press to Login</Text>
      </Pressable>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(auth)/sign-in.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
