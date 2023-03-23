/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
import { TokenResponse } from '../../types/KindeSDK';
import { TokenType } from '../Enums/TokenType.enum';
import BaseStore from './Base';
/**
 * The Storage SDK module.
 * @module SDK/Storage
 * @version 1.1.0
 */
declare class Storage extends BaseStore {
    constructor();
    getStorage(): Promise<import("./RNStorage").default | import("./ExpoStorage").default>;
    getToken(): Promise<TokenResponse | null>;
    setToken(token: string): Promise<boolean>;
    getTokenType(type: TokenType): Promise<string | null>;
    getAccessToken(): Promise<string | null>;
    getIdToken(): Promise<string | null>;
    getExpiredAt(): Promise<number>;
    getState(): string | undefined;
    setState(newState: string): void;
    getCodeVerifier(): string | undefined;
    setCodeVerifier(newCodeVerifier: string): void;
    getAuthStatus(): string | undefined;
    setAuthStatus(newAuthStatus: string): void;
    clearAll(): Promise<boolean>;
    getUserProfile(): Promise<{
        id: string;
        given_name: string;
        family_name: string;
        email: string;
    }>;
    convertString(str: string | object): string;
}
declare const sessionStorage: Storage;
export { Storage, sessionStorage };
