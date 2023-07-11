const { execSync } = require('child_process');

const packages = [
  '@fortawesome/free-brands-svg-icons',
  '@fortawesome/free-regular-svg-icons',
  '@fortawesome/free-solid-svg-icons',
  '@fortawesome/react-fontawesome',
  '@hotjar/browser',
  'font-awesome',
  'he',
  'install',
  'jquery',
  'react-scroll',
  '@types/he',
  '@types/jquery',
];

packages.forEach((package) => {
  try {
    execSync(`npm uninstall ${package}`);
    console.log(`Successfully uninstalled ${package}`);
  } catch (error) {
    console.error(`Error uninstalling ${package}:`, error.message);
  }
});
