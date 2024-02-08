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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OAuthConfigDto
 */
export interface OAuthConfigDto {
    /**
     * 
     * @type {string}
     * @memberof OAuthConfigDto
     */
    redirectUri: string;
}

/**
 * Check if a given object implements the OAuthConfigDto interface.
 */
export function instanceOfOAuthConfigDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "redirectUri" in value;

    return isInstance;
}

export function OAuthConfigDtoFromJSON(json: any): OAuthConfigDto {
    return OAuthConfigDtoFromJSONTyped(json, false);
}

export function OAuthConfigDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthConfigDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'redirectUri': json['redirectUri'],
    };
}

export function OAuthConfigDtoToJSON(value?: OAuthConfigDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirectUri': value.redirectUri,
    };
}

