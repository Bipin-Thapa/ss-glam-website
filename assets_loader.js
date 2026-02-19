<<<<<<< HEAD

export const preloadImages = (urls) => {
    const promises = urls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
        });
    });
    return Promise.all(promises);
};
=======

export const preloadImages = (urls) => {
    const promises = urls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
        });
    });
    return Promise.all(promises);
};
>>>>>>> 9def192408a31e5a130aedbc43f89880184eea5c
