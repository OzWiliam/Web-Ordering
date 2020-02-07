import { IAppConfig } from './IAppConfig';
import { StagingAppConfig } from './AppConfig.staging';
import { ProductionAppConfig } from './AppConfig.prod';
let appConfig: IAppConfig;
if (process.env.NODE_ENV === 'production') {
  appConfig = ProductionAppConfig;
} else if (process.env.NODE_ENV === 'staging') {
  appConfig = StagingAppConfig;
} else {
  appConfig = {
    env: 'dev',
    webApi: 'http://localhost:3000',
  };
}
export default appConfig;
