/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V3.2.0
 * Contact: avishay@flexi-core.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface FlexiCoreServerCreate { 
    name?: string;
    description?: string;
    enabled?: boolean;
    externalId?: string;
    basePathApi?: string;
    webSocketPath?: string;
    username?: string;
    password?: string;
    healthCheckInterval?: number;
}