

const friends = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve"];
const collegeFriends = ["Frank", "Grace"];

friends.push(...schoolFriends);
friends.push(...collegeFriends)
console.log(friends)


const user = {
    name: "sharafat",
    phoneNo: "01615879508"
}
const otherInfo = {
    hobby: "coding",
    favouriteColor: "Green"
}
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);


const sendInvite = (...friends:string[]) => {
    // console.log(friend)
    friends.forEach((friend:string) => console.log(`send invitation to ${friend}`))
}
sendInvite("saru", "faru", "moni", "rohoman")