export const alwaysArray = [
    "GroupObject",
    "SceneObject",
    "FocusPoint",
    "Fixture",
    "Support",
    "Truss",
    "VideoScreen",
    "Projector",
    "Geometries",
    "Geometry3D",
    "Layer",
];

export interface GSDFile {
    GeneralSceneDescription: GeneralSceneDescription;
}

export interface GeneralSceneDescription {
    UserData: null;
    Scene: Scene;
}

export interface Scene {
    Layers: Layers;
}

export interface Layers {
    Layer: Layer[];
}

export interface Layer {
    Matrix?: string;
    ChildList: ChildList;
}

export interface ChildList {
    GroupObject?: GroupObject[];
    SceneObject?: SceneObject[];
    FocusPoint?: FocusPoint[];
    Fixture?: Fixture[];
    Support?: Support[];
    Truss?: Truss[];
    VideoScreen?: VideoScreen[];
    Projector?: Projector[];
}

export interface SceneObject {
    Matrix?: string;
    Geometries: Geometries[];
    ChildList?: ChildList;
}

export interface GroupObject {
    Matrix?: string;
    ChildList?: ChildList;
}

export interface FocusPoint {
    Matrix?: string;
    Geometries: Geometries[];
    ChildList?: ChildList;
}

export interface Fixture {
    Matrix?: string;
    ChildList?: ChildList;
}

export interface Support {
    Matrix?: string;
    Geometries: Geometries[];
    ChildList?: ChildList;
}

export interface Truss {
    Matrix?: string;
    Geometries: Geometries[];
    ChildList?: ChildList;
}

export interface VideoScreen {
    Matrix?: string;
    Geometries: Geometries[];
    ChildList?: ChildList;
}

export interface Projector {
    Matrix?: string;
    Geometries: Geometries[];
    ChildList?: ChildList;
}

// Other

export interface Geometries {
    Geometry3D: Geometry3D[];
    Symbol: Symbol;
}

export interface Geometry3D {
    Matrix: string;
    _fileName: string;
}

export interface Symbol {
    Matrix: string;
    _uuid: string;
    _symdef: string;
}
