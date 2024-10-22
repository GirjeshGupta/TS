// valid javsceipt is valide for typescript
// Arrays
var arr = [1, 2, 3, 4, 56, 6];
// Truples 
var arr1 = ["prem", 23];
// truple is use for fix size and type assign
// Enum -> enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["SUPER_ADMIN"] = "super_admin";
    UserRoles["GUEST"] = "guest";
})(UserRoles || (UserRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ABANDAND"] = 500] = "ABANDAND";
    StatusCode[StatusCode["NOTFOUND"] = 404] = "NOTFOUND";
})(StatusCode || (StatusCode = {}));
console.log(UserRoles.SUPER_ADMIN);
console.log(StatusCode.ABANDAND);
