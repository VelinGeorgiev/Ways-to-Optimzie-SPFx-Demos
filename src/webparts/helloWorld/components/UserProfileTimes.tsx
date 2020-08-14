import * as React from 'react';

const UserProfileTimes: React.FC = props => {
    const [displayName, setDisplayName] = React.useState('')

    React.useEffect(() => {

        getUserProfile();

    }, []);

    const getUserProfile = () => {
        console.time('DisplayNameFromSessionStorage');
        const displayName = sessionStorage.getItem('DisplayName');
        console.timeEnd('DisplayNameFromSessionStorage');
        if(displayName !== null) {
            setDisplayName(displayName)
        } else {
            getUserProfileServer();
        }
    }

    const getUserProfileServer = () => {
        console.time('DisplayNameFromServer');
        return fetch(`https://veling.sharepoint.com/_api/contextinfo`, {
            headers: {
                "Accept": "application/json;odata=nometadata",
                "Content-type": "application/json;odata=verbose"
            },
            method: "POST"
        }).then(response => {

            return response.json();
        }).then(response => {
            return fetch(`https://veling.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetMyProperties`, {
                headers: {
                    "Accept": "application/json;odata=nometadata",
                    "Content-type": "application/json;odata=verbose",
                    "X-RequestDigest": response.FormDigestValue
                },
                method: "GET"
            }).then(response => {
                return response.json();
            }).then(userResponse => {

                setDisplayName(userResponse.DisplayName);
                sessionStorage.setItem('DisplayName', userResponse.DisplayName);
                console.timeEnd('DisplayNameFromServer');
            })
        })
    }

    return (<div>{displayName}</div>);
}

export default UserProfileTimes