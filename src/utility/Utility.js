const getDataFromLS = () => {
    const giveData = JSON.parse(localStorage.getItem("read-item")) || [];
    return giveData;
}
const getDataFromLSByWishlist = () => {
    const giveData = JSON.parse(localStorage.getItem("wishlist")) || [];
    return giveData;
}
const saveDataToLS = (id) => {
    const data = getDataFromLS();
    const isExist = data.includes(id);
    if (!isExist) {
        data.push(id);
        localStorage.setItem("read-item", JSON.stringify(data));
    } else {
        alert("Item already been added")
    }
}
const saveDataToLSByWishlist = (id) => {
    const data = getDataFromLSByWishlist();
    const isExist = data.includes(id);
    if (!isExist) {
        data.push(id);
        localStorage.setItem("wishlist", JSON.stringify(data));
    } else {
        alert("Item already been added")
    }
}
export { getDataFromLS, saveDataToLS, saveDataToLSByWishlist, getDataFromLSByWishlist };