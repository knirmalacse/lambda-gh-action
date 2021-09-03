import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import * as _ from 'lodash';
export const handler : Handler = async (event:APIGatewayProxyEvent) : Promise<APIGatewayProxyResultV2>=> {
    // TODO implement
    const max=10;
    const val=_.random(max);
    const response = {
        statusCode: 200,
        body: 'random value of (max ${max}) is : ${val}',
    };
    return response;
};
