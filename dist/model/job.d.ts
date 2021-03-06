/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V1.1.0
 * Contact: avishaybennatan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { JobInformation } from './jobInformation';
export interface Job {
    id?: string;
    currentPhasePrecentage?: number;
    numberOfProcessors?: number;
    jobInformation?: JobInformation;
    batchJobId?: number;
    batchStatus?: Job.BatchStatusEnum;
    history?: Array<string>;
    retry?: boolean;
    retryTimes?: number;
    retrySleepPeriod?: number;
    entityIdToReturnToClient?: string;
    typeOfReturned?: string;
    currentPhase?: string;
}
export declare namespace Job {
    enum BatchStatusEnum {
        STARTING,
        STARTED,
        STOPPING,
        STOPPED,
        FAILED,
        COMPLETED,
        ABANDONED
    }
}
