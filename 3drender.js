var renderer, scene, camera, composer, circle, skelet, particle;

window.onload = function() {
  init();
  animate();
}

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  scene.add(camera);

  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  var geometry = new THREE.IcosahedronGeometry(2, 1);
  var geom = new THREE.IcosahedronGeometry(8, 1);
  var geom2 = new THREE.IcosahedronGeometry(15, 1);

  var material = new THREE.MeshBasicMaterial({
    color: 0xf55555,
    shading: THREE.FlatShading
  });

  for (var i =50; i < 100; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5,Math.random() - 0.5,  Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(200 + (Math.random() * 300));
    mesh.rotation.set(Math.random() * 5, Math.random() * 5, Math.random() * 5);
    particle.add(mesh);
  }


  var mat = new THREE.MeshPhongMaterial({
    color: 0x333343,
    shading: THREE.FlatShading
  });

  var mat2 = new THREE.MeshPhongMaterial({
    color: 0xdddddd,
    wireframe: true,
    side: THREE.DoubleSide

  });

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 10;
  circle.add(planet);

  var planet2 = new THREE.Mesh(geom2, mat2);
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  skelet.add(planet2);

  var ambientLight = new THREE.AmbientLight(0x999999 );
  scene.add(ambientLight);

  var lights = [];
  lights[0] = new THREE.DirectionalLight( 0xaaffba, 1 );
  lights[0].position.set( 10, 10, 0 );
scene.add( lights[0] );




  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  particle.rotation.x -= .002;
  particle.rotation.y -= .005;
  circle.rotation.x -= .0009;
  circle.rotation.y += .001;
  skelet.rotation.x -= .001;
  skelet.rotation.y += .0009;
  renderer.clear();

  renderer.render( scene, camera )
};
