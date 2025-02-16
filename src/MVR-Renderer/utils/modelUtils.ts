import * as THREE from "three";

// All data a model should contain
export interface ModelMetadata {
    matrix: THREE.Matrix4; // Transformation
    layer: string; // Layer model is contained on
    fileName: string; // Layer model is contained on
}

// An individual Model
export interface Model {
    geometry: THREE.BufferGeometry;
    modelMetadata: ModelMetadata[];
}

// A container for models, that builds the Model[] when getModels is called, so save memory(Hopefully)
export class Models {
    private metadataMap: MetadataMap;
    private geometryMap: GeometryMap;

    constructor(metadataMap: MetadataMap, geometryMap: GeometryMap) {
        this.metadataMap = metadataMap;
        this.geometryMap = geometryMap;
    }

    // Combine the metadataMap and geometryMap to final models
    // This is done to improve memory usage and not store the models many times
    getModels(): Model[] {
        const models: Model[] = [];
        for (const [fileName, geometry] of this.geometryMap.entries()) {
            const modelMetadata = this.metadataMap.getMetadata(fileName);
            models.push({ geometry, modelMetadata });
        }
        return models;
    }
}

// Maps filenames to transition matrices
export class MetadataMap extends Map<string, ModelMetadata[]> {
    add(fileName: string, matrix: THREE.Matrix4, layer: string): void {
        const modelMetadata = { matrix, layer, fileName };
        if (!this.has(fileName)) {
            this.set(fileName, []);
        }
        this.get(fileName)!.push(modelMetadata);
    }

    getMetadata(fileName: string): ModelMetadata[] {
        return this.get(fileName) || [];
    }
}

// Maps filenames to transition matrices
export class GeometryMap extends Map<string, THREE.BufferGeometry> {}
