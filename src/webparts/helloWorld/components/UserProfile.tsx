import * as React from 'react';

const UserProfile: React.FC = props => {
    const [userName, setUserName] = React.useState('');

    React.useEffect(() => {

        getUserProfile();

    }, []);

    const getUserProfile = () => {
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

                setUserName(userResponse.DisplayName);
            })
        });
    }

    return (<div>{userName}</div>);
}

export default UserProfile