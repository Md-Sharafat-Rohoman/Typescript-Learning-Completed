

type userRole = "admin" | "user";

const getDashboard = (role: userRole) => {
    if (role === "admin") {
        return "admin dashboard";
    }
    else if (role === "user") {
        return "user dashboard";
    }
    else {
        return "guest dashboard";
    }
}
console.log(getDashboard("admin"))


type Employ = {
    id: number;
    name: string;
    phoneNo: string;
}
type Manager = {
    designation: string;
    teamSize: number;
}
type EmployAndManager = Employ & Manager;
const employAndManager: EmployAndManager = {
    id: 1,
    name: "sharafat",
    phoneNo: "01615879508",
    designation: "manager",
    teamSize: 5
}
console.log(employAndManager);