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
 * @interface LoginResponseDto
 */
export interface LoginResponseDto {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    accessToken: string;
    /**
     * 
     * @type {boolean}
     * @memberof LoginResponseDto
     */
    isAdmin: boolean;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    profileImagePath: string;
    /**
     * 
     * @type {boolean}
     * @memberof LoginResponseDto
     */
    shouldChangePassword: boolean;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    userEmail: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDto
     */
    userId: string;
}

/**
 * Check if a given object implements the LoginResponseDto interface.
 */
export function instanceOfLoginResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessToken" in value;
    isInstance = isInstance && "isAdmin" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "profileImagePath" in value;
    isInstance = isInstance && "shouldChangePassword" in value;
    isInstance = isInstance && "userEmail" in value;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function LoginResponseDtoFromJSON(json: any): LoginResponseDto {
    return LoginResponseDtoFromJSONTyped(json, false);
}

export function LoginResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'],
        'isAdmin': json['isAdmin'],
        'name': json['name'],
        'profileImagePath': json['profileImagePath'],
        'shouldChangePassword': json['shouldChangePassword'],
        'userEmail': json['userEmail'],
        'userId': json['userId'],
    };
}

export function LoginResponseDtoToJSON(value?: LoginResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessToken': value.accessToken,
        'isAdmin': value.isAdmin,
        'name': value.name,
        'profileImagePath': value.profileImagePath,
        'shouldChangePassword': value.shouldChangePassword,
        'userEmail': value.userEmail,
        'userId': value.userId,
    };
}

