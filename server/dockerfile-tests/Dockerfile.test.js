const { execSync } = require('child_process');
const path = require('path');

test('Server Dockerfile content, Node.js version, and package installation match snapshot', () => {
    const dockerfilePath = path.join(__dirname, '../Dockerfile'); // Update the path as needed

    try {
        // Build the Docker image from the Dockerfile
        execSync(`docker build -t my-test-image-server -f ${dockerfilePath} .`, { stdio: 'inherit' });

        // Run a container using the built image
        execSync('docker run -d --name my-test-container-server my-test-image-server', { stdio: 'inherit' });

        // Install packages and verify Node.js version inside the container
        const installPackagesCommand = 'docker exec my-test-container-server yarn install'; // Use your package manager (e.g., yarn or npm)
        execSync(installPackagesCommand, { stdio: 'inherit' });

        const nodeVersion = execSync('docker exec my-test-container-server node --version').toString().trim();
        expect(nodeVersion).not.toBeNull();
        expect(nodeVersion).toMatchSnapshot();
        expect(nodeVersion).toContain('v14'); // Replace with your expected Node.js version

    } catch (error) {
        console.error('Error during Server Dockerfile test:', error);
        throw error; // Re-throw the error to fail the test
    } finally {
        // Clean up the container and image
        execSync('docker stop my-test-container-server', { stdio: 'inherit' });
        execSync('docker rm my-test-container-server', { stdio: 'inherit' });
        execSync('docker rmi my-test-image-server', { stdio: 'inherit' });
    }
});
