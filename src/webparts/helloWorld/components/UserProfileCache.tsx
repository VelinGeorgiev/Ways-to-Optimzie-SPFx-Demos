import * as React from 'react';

const UserProfileCache: React.FC = props => {
    const [displayName, setDisplayName] = React.useState('')

    React.useEffect(() => {

        getUserProfile();

    }, []);

    const getUserProfile = () => {
        const displayName = sessionStorage.getItem('DisplayName');
        if(displayName !== null) {
            setDisplayName(displayName)
        } else {
            getUserProfileServer();
        }
    }

    const getUserProfileServer = () => {
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
            })
        })
    }

    return (<div>{displayName}</div>);
}

export default UserProfileCache