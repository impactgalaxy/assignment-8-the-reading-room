const getDataFromLS = () => {
    const giveData = JSON.parse(localStorage.getItem("read-item")) || [];
    return giveData;
}
const getDataFromLSByWishlist = () => {
    const giveData = JSON.parse(localStorage.getItem("wishlist")) || [];
    return giveData;
}
const saveDataToLS = (id, toast) => {
    const data = getDataFromLS();
    const isExist = data.includes(id);
    if (!isExist) {
        data.push(id);
        localStorage.setItem("read-item", JSON.stringify(data));
        toast.success("Congratulations! you complete this book");
    } else {
        toast.error("Sorry! You already finished this book");
    }
}
const saveDataToLSByWishlist = (id, toast) => {
    const data = getDataFromLSByWishlist();
    const isExist = data.includes(id);
    if (!isExist) {
        data.push(id);
        localStorage.setItem("wishlist", JSON.stringify(data));
        toast.success("Your book added in Wishlist");
    } else {
        toast.error("Sorry! You already been added");
    }
}
export { getDataFromLS, saveDataToLS, saveDataToLSByWishlist, getDataFromLSByWishlist };