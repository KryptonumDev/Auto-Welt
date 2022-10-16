export function urlModification(url) {
    let string = url
    if (string === -1) {
        return string
    }
    if (!string || string.includes('undefined')) {
        return 'broken link - ' + string
    }
    if (url.includes('#') || url.includes('?')) {
        return string
    }
    if (url[0] !== '/') {
        string = '/' + string
    }
    if (url[url.length - 1] !== '/') {
        string = string + '/'
    }
    return string.replace(/ /g, '')
}