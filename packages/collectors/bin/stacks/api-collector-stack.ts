import { App, Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import {
  CoingeckoEventCollectorConstruct
} from "../../lib/constructs/coingecko-event-collector-construct";
import {
  CmcEventCollectorConstruct
} from "../../lib/constructs/coinmarketcap-event-collector-construct";

interface CollectorStackProps extends StackProps {
  coingecko: boolean;
  coinmarketcap: boolean;
}

export class ApiCollectorStack extends Stack {

  constructor(scope: App, id: string, props?: CollectorStackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'DataBucket', {
      bucketName: 'euler-data',
    })

    new CoingeckoEventCollectorConstruct(this, 'CoingeckoEventCollectorConstruct', {
      bucket
    })

    new CmcEventCollectorConstruct(this, 'CmcEventCollectorConstruct', {
      bucket
    })
  }
}
