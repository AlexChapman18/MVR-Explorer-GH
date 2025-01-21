import { Matrix4 } from "three";

export function parseMatrix(matrixString: string): Matrix4 {
    const matrix = matrixString
        .slice(1, -1) // Remove the outer curly braces
        .replace(/}{/g, ",") // Im lazy, sorry :(
        .split(",")
        .map(parseFloat);

    // prettier-ignore
    return new Matrix4(
    matrix[0]!, matrix[3]!, matrix[6]!, matrix[9]!, 
    matrix[1]!, matrix[4]!, matrix[7]!, matrix[10]!,
    matrix[2]!, matrix[5]!, matrix[8]!, matrix[11]!,
    0,         0,         0,         1,
  );
}
