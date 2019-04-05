export const request = url => (
    new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => (
            xhr.readyState === 4 && resolve(xhr)
        );
        xhr.open('GET', url, true);
        xhr.send();
    })
);

export default {
    request
};
