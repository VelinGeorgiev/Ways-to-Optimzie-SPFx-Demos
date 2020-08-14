import * as React from 'react';
var UserProfileTimes = function (props) {
    var _a = React.useState(''), displayName = _a[0], setDisplayName = _a[1];
    React.useEffect(function () {
        getUserProfile();
    }, []);
    var getUserProfile = function () {
        console.time('DisplayNameFromSessionStorage');
        var displayName = sessionStorage.getItem('DisplayName');
        console.timeEnd('DisplayNameFromSessionStorage');
        if (displayName !== null) {
            setDisplayName(displayName);
        }
        else {
            getUserProfileServer();
        }
    };
    var getUserProfileServer = function () {
        console.time('DisplayNameFromServer');
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
                setDisplayName(userResponse.DisplayName);
                sessionStorage.setItem('DisplayName', userResponse.DisplayName);
                console.timeEnd('DisplayNameFromServer');
            });
        });
    };
    return (React.createElement("div", null, displayName));
};
export default UserProfileTimes;
//# sourceMappingURL=UserProfileTimes.js.map