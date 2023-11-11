// dockerfile.test.js

const { execSync } = require('child_process');
const path = require('path');

test('Dockerfile content, and package installation match snapshot', () => {
    const dockerfilePath = path.join(__dirname, '../Dockerfile'); // Update the path as needed

    try {
        // Build the Docker image from the Dockerfile
        execSync(`docker build -t my-test-image -f ${dockerfilePath} .`, { stdio: 'inherit' });

        // Run a container using the built image
        execSync('docker run -d --name my-test-container my-test-image', { stdio: 'inherit' });

    } catch (error) {
        console.error('Error during Docker image build and package installation:', error);
        throw error; // Re-throw the error to fail the test
    } finally {
        // Clean up the container and image
        execSync('docker stop my-test-container', { stdio: 'inherit' });
        execSync('docker rm my-test-container', { stdio: 'inherit' });
        execSync('docker rmi my-test-image', { stdio: 'inherit' });
    }
});
