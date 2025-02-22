/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const JobCommand = {
    Start: 'start',
    Pause: 'pause',
    Resume: 'resume',
    Empty: 'empty',
    ClearFailed: 'clear-failed'
} as const;
export type JobCommand = typeof JobCommand[keyof typeof JobCommand];


export function JobCommandFromJSON(json: any): JobCommand {
    return JobCommandFromJSONTyped(json, false);
}

export function JobCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobCommand {
    return json as JobCommand;
}

export function JobCommandToJSON(value?: JobCommand | null): any {
    return value as any;
}

