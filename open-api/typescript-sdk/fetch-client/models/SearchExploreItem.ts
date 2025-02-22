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
import type { AssetResponseDto } from './AssetResponseDto';
import {
    AssetResponseDtoFromJSON,
    AssetResponseDtoFromJSONTyped,
    AssetResponseDtoToJSON,
} from './AssetResponseDto';

/**
 * 
 * @export
 * @interface SearchExploreItem
 */
export interface SearchExploreItem {
    /**
     * 
     * @type {AssetResponseDto}
     * @memberof SearchExploreItem
     */
    data: AssetResponseDto;
    /**
     * 
     * @type {string}
     * @memberof SearchExploreItem
     */
    value: string;
}

/**
 * Check if a given object implements the SearchExploreItem interface.
 */
export function instanceOfSearchExploreItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function SearchExploreItemFromJSON(json: any): SearchExploreItem {
    return SearchExploreItemFromJSONTyped(json, false);
}

export function SearchExploreItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchExploreItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AssetResponseDtoFromJSON(json['data']),
        'value': json['value'],
    };
}

export function SearchExploreItemToJSON(value?: SearchExploreItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AssetResponseDtoToJSON(value.data),
        'value': value.value,
    };
}

