import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import UserProfile from './UserProfile';
import UserProfileCache from './UserProfileCache';
import UserProfileTimes from './UserProfileTimes';
import jQuery from 'jquery';

// DO
import Button from '@material-ui/core/Button';
//import { Button } from '@material-ui/core';

// DONT
// const Material: any = require('@material-ui/core');
// import * as Material from '@material-ui/core'
// import * as fluent from '@fluentui/react';
// import '@material-ui/core'

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {

  public componentWillMount() {
      let count = 10000;
      while(count--) 
      { 
        console.log("blocked");
      }
  }

  public componentDidMount() {
      console.log(jQuery('#WebPart1').html());
      console.log(document.querySelector('#WebPart1'));
  }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld } id="WebPart1">
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <div style={{padding: '2rem'}}>
                <Button variant="contained" color="secondary">
                  Button
                </Button>
              </div>
              {/* <fluent.PrimaryButton>Button 3</fluent.PrimaryButton> */}
              {/* <UserProfile /> */}
              {/* <UserProfileCache /> */}
              <UserProfileTimes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
