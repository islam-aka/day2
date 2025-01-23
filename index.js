// document.body.innerHTML += `<h2>${typeof DeviceOrientationEvent !== 'undefined'} ${DeviceOrientationEvent}, </h2>`
// document.body.innerHTML += `<h2>${DeviceOrientationEvent.requestPermission}, ${typeof DeviceOrientationEvent.requestPermission}=${typeof DeviceOrientationEvent.requestPermission === 'function'}</h2>`
const button = document.createElement('button');
button.textContent = 'Запросить ориентацию устройства';
button.addEventListener('click', requestDeviceOrientation);
document.body.appendChild(button);

function handleOrientation(event) {
  let alpha = event.alpha
  let beta = event.beta
  let gamma = event.gamma

  let cube = document.querySelector('.cube');
  cube.style.transform = 'rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg) rotateZ(' + alpha + 'deg)';

	const h2 = document.createElement('h2');
	h2.innerText = 'rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg) rotateZ(' + alpha + 'deg)'
	document.body.appendChild(h2);
}

async function requestDeviceOrientation() {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    //iOS 13+ devices
    try {
      const permissionState = await DeviceOrientationEvent.requestPermission()
      if (permissionState === 'granted') {
        window.addEventListener('deviceorientation', handleOrientation)
      } else {
        alert('Permission was denied')
      }
    } catch (error) {
      alert(error)
    }
  } else if ('DeviceOrientationEvent' in window) {
    //non iOS 13+ devices
    console.log("not iOS");
    window.addEventListener('deviceorientation', handleOrientation)
  } else {
    //not supported
    alert('nicht unterstützt')
  }
}
