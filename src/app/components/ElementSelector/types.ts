export interface Element {
    id: string;
    name: string;
}

export interface ElementSelectorState {
    elements: Element[];
    selectedElements: Element[];
    maxSelections: number;
}