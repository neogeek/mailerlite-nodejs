import { AxiosResponse } from "axios";

export interface BatchesInterface {
    send:   (params: BatchParams)   => Promise<AxiosResponse<BatchResponses>>;
}

export interface BatchParams {
    requests: Array<BatchRequestObject>;
}

interface BatchRequestObject {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    path:   string;
    body:   object;
}

export interface BatchResponses {
    total:      number;
    successful: number;
    failed:     number;
    responses:  Array<BatchResponseObject>;
}

interface BatchResponseObject {
    code: number;
    body: {
        data: Array<object>;
    }
}
