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
export const MapTheme = {
    Light: 'light',
    Dark: 'dark'
} as const;
export type MapTheme = typeof MapTheme[keyof typeof MapTheme];


export function MapThemeFromJSON(json: any): MapTheme {
    return MapThemeFromJSONTyped(json, false);
}

export function MapThemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapTheme {
    return json as MapTheme;
}

export function MapThemeToJSON(value?: MapTheme | null): any {
    return value as any;
}

