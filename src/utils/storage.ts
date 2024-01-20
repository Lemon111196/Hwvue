const getLocal = (item: string) => {
    return localStorage.getItem(item)
}
const setLocal = (key: string, value: string) => {
    localStorage.setItem(key, value)
}
const removeLocal = (key:string) => {
    localStorage.removeItem(key)
}
export {
    getLocal,
    setLocal,
    removeLocal
}