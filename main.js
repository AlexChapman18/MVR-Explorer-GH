const canvas = document.querySelector("canvas");
const gl = canvas.getContext('webgl2');

const program = gl.createProgram();

// Load vertex shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER) // Create the shader
gl.shaderSource(vertexShader, vertexShaderSource) // Set the source code to: vertexShaderSource
gl.compileShader(vertexShader); // Compile the shader
gl.attachShader(program, vertexShader); // Attach the shader to the program

// Load fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragmentShader, fragmentShaderSource)
gl.compileShader(fragmentShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program); // Link shaders

// Verify shaders correctly linked
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log(gl.getShaderInfoLog(vertexShader));
    console.log(gl.getShaderInfoLog(fragmentShader));
}

gl.useProgram(program); // How you switch between webgl programs

gl.drawArrays(gl.POINTS, 0, 1);