importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBqJDZ--lgsPpoTC_YpK9Pq6kRUdQ8NTBs",
  authDomain: "aynusum-db174.firebaseapp.com",
  projectId: "aynusum-db174",
  storageBucket: "aynusum-db174.firebasestorage.app",
  messagingSenderId: "6069166136",
  appId: "1:6069166136:web:adedbfe362c690c88b46cd",
  measurementId: "G-NSB0ED77SS"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Arka planda mesaj alındı:",
    payload
  );

  const notificationTitle =
    payload.notification?.title || "Aynusum ❤️";

  const notificationOptions = {
    body:
      payload.notification?.body ||
      "Sana yeni bir mesajım var. ❤️",
    icon: "/Aynusum/img/icon-192.png",
    badge: "/Aynusum/img/icon-192.png"
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
