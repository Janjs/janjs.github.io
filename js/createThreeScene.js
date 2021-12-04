var scene3d = document.getElementById("scene3d");
var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;

let scene, camera, renderer;
var car;

let loader = new THREE.GLTFLoader();


function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x020715);
  camera = new THREE.PerspectiveCamera(20, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 100);
  camera.position.set(1.2, 1.5, 1);

  renderer = new THREE.WebGLRenderer({ canvas: scene3d, antialias: true });
  renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
  var next = document.getElementById("next-to-canvas");
  next.appendChild(renderer.domElement);


  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.update();

  loader.load('../assets/dragonbcn.glb', function (gltf) {
    car = gltf.scene.children[0];
    car.scale.set(1, 1, 1);
    scene.add(gltf.scene);
    animate();
  })


  directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  light = new THREE.PointLight(0xc4c4c4, 3);
  light.position.set(1, 300, 500);
  scene.add(light);
  light2 = new THREE.PointLight(0xc4c4c4, 3);
  light2.position.set(500, 100, 0);
  scene.add(light2);
  light3 = new THREE.PointLight(0xc4c4c4, 3);
  light3.position.set(0, 100, -500);
  scene.add(light3);
  light4 = new THREE.PointLight(0xc4c4c4, 3);
  light4.position.set(-500, 300, 500);
  scene.add(light4);
}
function animate() {
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

init();