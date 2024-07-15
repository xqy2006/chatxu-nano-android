type ProgressCallback = (opts: {
    loaded: number;
    total: number;
}) => any;
/**
 * WebBlob is a Blob implementation for web resources that supports range requests.
 */
interface GGUFRemoteBlobCreateOptions {
    /**
     * Custom fetch function to use instead of the default one, for example to use a proxy or edit headers.
     */
    fetch?: typeof fetch;
    useCache?: boolean;
    progressCallback?: ProgressCallback;
    startSignal?: Promise<void>;
    allowOffline: boolean;
    /**
     * Custom debug logger
     */
    logger?: {
        debug: typeof console['debug'];
    };
}
export declare class GGUFRemoteBlob extends Blob {
    static create(url: string, opts: GGUFRemoteBlobCreateOptions): Promise<Blob>;
    private url;
    private etag;
    private start;
    private end;
    private contentType;
    private full;
    private fetch;
    private cachedStream?;
    private progressCallback;
    private startSignal?;
    constructor(url: string, start: number, end: number, full: boolean, customFetch: typeof fetch, additionals: {
        cachedStream?: ReadableStream;
        progressCallback: ProgressCallback;
        startSignal?: Promise<void>;
        etag: string;
    });
    get size(): number;
    get type(): string;
    slice(): GGUFRemoteBlob;
    arrayBuffer(): Promise<ArrayBuffer>;
    text(): Promise<string>;
    stream(): ReturnType<Blob['stream']>;
    private fetchRange;
}
export {};
