export function requesterAPI(serachWord, page) {
    const API_KEY = '29321884-a1107c4d69cb5633d7e5f5c25';
    const requestPath = `https://pixabay.com/api/?q=${serachWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    return fetch(requestPath)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        });
};