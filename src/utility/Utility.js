const getDataFromLS = () => {
    const giveData = JSON.parse(localStorage.getItem("read-item")) || [];
    return giveData;
}
const saveDataToLS = (id) => {
    const data = getDataFromLS();
    const isExist = data.filter(element => element === id);
    if (!isExist) {
        data.push(id);
        localStorage.setItem("read-item", JSON.stringify(data));
    }
}
export { getDataFromLS, saveDataToLS };