import * as Notifications from "expo-notifications";

async function main() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    alert("Sem permissão para receber notificação push! 🙁");
    return;
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    })
  })

  const { data } = await Notifications.getExpoPushTokenAsync();
  console.log("🔔 Expo push Notification: ", data);
}

main();