// document.body.innerHTML += `<h2>${typeof DeviceOrientationEvent !== 'undefined'} ${DeviceOrientationEvent}, </h2>`
// document.body.innerHTML += `<h2>${DeviceOrientationEvent.requestPermission}, ${typeof DeviceOrientationEvent.requestPermission}=${typeof DeviceOrientationEvent.requestPermission === 'function'}</h2>`
const button = document.createElement('button');
button.textContent = 'Запросить ориентацию устройства';
button.addEventListener('click', requestDeviceOrientation);
document.body.appendChild(button);
// async function requestDeviceOrientation() {
//   if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
//     //iOS 13+ devices
//     try {
//       const permissionState = await DeviceOrientationEvent.requestPermission()
//       document.body.innerHTML += `<h3>permissionState: ${permissionState}</h3>`

//       if (permissionState === 'granted') {
//         window.addEventListener('deviceorientation', handleOrientation)
//       } else {
//         document.body.innerHTML += `<h2>Alpha: ${event.alpha}, Beta: ${event.beta}, Gamma: ${event.gamma}</h2>`
//       }
//     } catch (error) {
//       document.body.innerHTML += `<h3>Доступ к данным датчиков отклонён пользователем. ${error}</h3>`
//     }
//   } else if ('DeviceOrientationEvent' in window) {
//     //non iOS 13+ devices
//     console.log("not iOS");
//     window.addEventListener('deviceorientation', handleOrientation)
//   } else {
//     //not supported
//     document.body.innerHTML +=  `<h2>Запрос разрешения не требуется.</h2>`
//   }
// }

async function requestDeviceOrientation() {
  // ... ваш существующий код

  try {
    const permissionState = await DeviceOrientationEvent.requestPermission()
    document.body.innerHTML += `<h3>permissionState: ${permissionState}</h3>`// Выводим значение permissionState в консоль

    if (permissionState === 'granted') {
      // ...
    } else {
      console.error('Permission denied:', error); // Выводим более подробную информацию об ошибке
      document.body.innerHTML += `<h3>Доступ к данным датчиков отклонён пользователем. ${error.message}</h3>`;
    }
  } catch (error) {
    console.error("Ошибка запроса разрешения:", error); // Вывод в консоль
    document.body.innerHTML += `<h3>Доступ к данным датчиков отклонён пользователем. ${error}</h3>`;
}
}