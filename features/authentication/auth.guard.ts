import { router, useRootNavigationState, useSegments } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuthUser } from "./auth.slice";

export function useProtectedRoute() {
  const segments = useSegments();
  const user = useSelector(getAuthUser);
  const navigationState = useRootNavigationState();
  /*
  const token = AsyncStorage.getItem("@fabwert_token").then((token) => {
    return token;
  });
  */

  useEffect(() => {
    if (!navigationState?.key) return;
    const inAuthGroup = segments[0] === "(auth)";
    console.log("inAuthGroup", inAuthGroup);
    console.log("user", user);
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      router.push("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.push("/one");
    }
  }, [user, segments]);
}
