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
 * @interface AssetStatsResponseDto
 */
export interface AssetStatsResponseDto {
    /**
     * 
     * @type {number}
     * @memberof AssetStatsResponseDto
     */
    images: number;
    /**
     * 
     * @type {number}
     * @memberof AssetStatsResponseDto
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof AssetStatsResponseDto
     */
    videos: number;
}

/**
 * Check if a given object implements the AssetStatsResponseDto interface.
 */
export function instanceOfAssetStatsResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "images" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "videos" in value;

    return isInstance;
}

export function AssetStatsResponseDtoFromJSON(json: any): AssetStatsResponseDto {
    return AssetStatsResponseDtoFromJSONTyped(json, false);
}

export function AssetStatsResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetStatsResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'images': json['images'],
        'total': json['total'],
        'videos': json['videos'],
    };
}

export function AssetStatsResponseDtoToJSON(value?: AssetStatsResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'images': value.images,
        'total': value.total,
        'videos': value.videos,
    };
}

