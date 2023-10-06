type Endpoint = {
    (findWord: string, category: string, sorting: string, startIndex: number): string
};

export const createEndpoint: Endpoint = (findWord, category, sorting, startIndex) => {
    if (category === 'all') {
        return `v1/volumes?q=${findWord}&maxResults=30&startIndex=${startIndex}&orderBy=${sorting}`;
    }
    return `v1/volumes?q=${findWord}+subject:${category}&maxResults=30&startIndex=${startIndex}&orderBy=${sorting}`;
};