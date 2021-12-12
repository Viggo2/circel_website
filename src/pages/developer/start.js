import * as React from 'react'
import reactDom from 'react-dom'
import * as uniUX from 'uniux'
import { Link } from 'gatsby'
import * as firebaseSetup from '../../components/firebasesetup.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import {appConfig} from './config.js'

class Page extends React.Component{
  render(){
    return <body>
    <uniUX.Main pageType={'app'} content={
      <uniUX.ColumnedApp appConfig={appConfig} page={appConfig.pageConfigs.start}
      pageOptionButtons={[]} pageContent={
        <span>
        <h4>
          Install UniUX
        </h4>
        <p>
          UniUX is be installed and updated just like any other Node module.
        </p>
        
        </span>
      }/>
    }>
    </uniUX.Main>
    </body>
  }
}

export default Page
