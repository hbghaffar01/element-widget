export const filterElements = (
    elements: string[],
    searchTerm: string,
    filterType: string
): string[] => {
    return elements.filter(element => {
        const matchesSearch = element.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterElementByType(element, filterType);
        return matchesSearch && matchesFilter;
    });
};

const filterElementByType = (element: string, filterType: string): boolean => {
    const elementNumber = parseInt(element.split(' ')[1]);

    switch (filterType) {
        case '>10':
            return elementNumber > 10;
        case '>100':
            return elementNumber > 100;
        case '>200':
            return elementNumber > 200;
        default:
            return true;
    }
};