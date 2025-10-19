// Color change for C-Class (optional feature)
function changeCarColor(color) {
  const carImage = document.getElementById('car-image');
  if (!carImage) return;
  if (color === 'black') carImage.src = 'images/cclass-black.jpg';
  else if (color === 'white') carImage.src = 'images/cclass-white.jpg';
  else if (color === 'blue') carImage.src = 'images/cclass-blue.jpg';
}

// Models page functionality
function showModel(model) {
  const detail = document.getElementById('model-detail');
  if (!detail) return;

  let content = '';
  switch(model) {
    case 'eclass':
      content = '<h3>E-Class</h3><p>Elegant design, advanced technology, comfort features.</p><img src="images/eclass.jpg" alt="E-Class" width="400">';
      break;
    case 'sclass':
      content = '<h3>S-Class</h3><p>Luxury redefined — innovation and style combined.</p><img src="images/sclass.jpg" alt="S-Class" width="400">';
      break;
    case 'cclass':
      content = '<h3>C-Class AMG</h3><p>2.1L turbo, heated seats, 360 camera.</p><img src="images/cclass.jpg" alt="C-Class" width="400">';
      break;
    case 'aclass':
      content = '<h3>A-Class</h3><p>Compact luxury, sporty design, modern tech.</p><img src="images/aclass.jpg" alt="A-Class" width="400">';
      break;
    case 'gwagon':
      content = '<h3>G-Wagon</h3><p>Off-road power, iconic design, strong presence.</p><img src="images/gwagon.jpg" alt="G-Wagon" width="400">';
      break;
    case 'cla':
      content = '<h3>CLA</h3><p>Sporty coupe, advanced features, luxurious interior.</p><img src="images/cla.jpg" alt="CLA" width="400">';
      break;
    default:
      content = '<h3>Select a model to see details</h3>';
  }

  detail.innerHTML = content;
}
