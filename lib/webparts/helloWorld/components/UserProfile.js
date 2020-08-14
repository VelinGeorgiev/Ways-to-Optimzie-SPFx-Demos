import * as React from 'react';
var UserProfile = function (props) {
    var _a = React.useState(''), userName = _a[0], setUserName = _a[1];
    React.useEffect(function () {
        getUserProfile();
    }, []);
    var getUserProfile = function () {
        return fetch("https://veling.sharepoint.com/_api/contextinfo", {
            headers: {
                "Accept": "application/json;odata=nometadata",
                "Content-type": "application/json;odata=verbose"
            },
            method: "POST"
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            return fetch("https://veling.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetMyProperties", {
                headers: {
                    "Accept": "application/json;odata=nometadata",
                    "Content-type": "application/json;odata=verbose",
                    "X-RequestDigest": response.FormDigestValue
                },
                method: "GET"
            }).then(function (response) {
                return response.json();
            }).then(function (userResponse) {
                setUserName(userResponse.DisplayName);
            });
        });
    };
    return (React.createElement("div", null, userName));
};
export default UserProfile;
//# sourceMappingURL=UserProfile.js.map