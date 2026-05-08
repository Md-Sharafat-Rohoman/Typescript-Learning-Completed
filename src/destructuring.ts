

const user = {
    id:123,
    name:{
        firstName: "sharafat",
        middleName: "rohoman",
        lastName:"zafourllah"
    },
    gender: "male",
    favouritColor: "green"
}
// const userName = user.name.firstName;
// console.log(userName);
const {id,name,gender,favouritColor:myFavouriteColor} = user;
console.log(id,name,gender,myFavouriteColor);



const friends = ["saru", "faru", "moni", "rohoman"];
// const myBestFriend = friends[1];
const [,myBestFriend,] = friends;
console.log(myBestFriend);