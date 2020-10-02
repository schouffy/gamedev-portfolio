export default class Helpers {

    static preloadImages = (urls: string[]) => {
        urls.forEach(url => {
            Helpers.preloadImage(url);
        });
    }

    private static preloadImage = (url: string) => {
        const image = new Image(); 
        image.src = url; 
    }
}
