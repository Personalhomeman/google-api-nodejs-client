/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace servicecontrol_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Service Control API
   *
   * Provides control plane functionality to managed services, such as logging,
   * monitoring, and status checks.
   *
   * @example
   * const {google} = require('googleapis');
   * const servicecontrol = google.servicecontrol('v1');
   *
   * @namespace servicecontrol
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Servicecontrol
   */
  export class Servicecontrol {
    context: APIRequestContext;
    services: Resource$Services;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {_options: options || {}, google};

      this.services = new Resource$Services(this.context);
    }
  }

  export interface Schema$AllocateInfo {
    /**
     * A list of label keys that were unused by the server in processing the
     * request. Thus, for similar requests repeated in a certain future time
     * window, the caller can choose to ignore these labels in the requests to
     * achieve better client-side cache hits and quota aggregation.
     */
    unusedArguments?: string[];
  }
  /**
   * Request message for the AllocateQuota method.
   */
  export interface Schema$AllocateQuotaRequest {
    /**
     * Operation that describes the quota allocation.
     */
    allocateOperation?: Schema$QuotaOperation;
    /**
     * Specifies which version of service configuration should be used to
     * process the request. If unspecified or no matching version can be found,
     * the latest one will be used.
     */
    serviceConfigId?: string;
  }
  /**
   * Response message for the AllocateQuota method.
   */
  export interface Schema$AllocateQuotaResponse {
    /**
     * Indicates the decision of the allocate.
     */
    allocateErrors?: Schema$QuotaError[];
    /**
     * WARNING: DO NOT use this field until this warning message is removed.
     */
    allocateInfo?: Schema$AllocateInfo;
    /**
     * The same operation_id value used in the AllocateQuotaRequest. Used for
     * logging and diagnostics purposes.
     */
    operationId?: string;
    /**
     * Quota metrics to indicate the result of allocation. Depending on the
     * request, one or more of the following metrics will be included:  1. Per
     * quota group or per quota metric incremental usage will be specified using
     * the following delta metric :
     * &quot;serviceruntime.googleapis.com/api/consumer/quota_used_count&quot;
     * 2. The quota limit reached condition will be specified using the
     * following boolean metric :
     * &quot;serviceruntime.googleapis.com/quota/exceeded&quot;
     */
    quotaMetrics?: Schema$MetricValueSet[];
    /**
     * ID of the actual config used to process the request.
     */
    serviceConfigId?: string;
  }
  /**
   * Common audit log format for Google Cloud Platform API operations.
   */
  export interface Schema$AuditLog {
    /**
     * Authentication information.
     */
    authenticationInfo?: Schema$AuthenticationInfo;
    /**
     * Authorization information. If there are multiple resources or permissions
     * involved, then there is one AuthorizationInfo element for each {resource,
     * permission} tuple.
     */
    authorizationInfo?: Schema$AuthorizationInfo[];
    /**
     * Other service-specific data about the request, response, and other
     * information associated with the current audited event.
     */
    metadata?: {[key: string]: any;};
    /**
     * The name of the service method or operation. For API calls, this should
     * be the name of the API method. For example,
     * &quot;google.datastore.v1.Datastore.RunQuery&quot;
     * &quot;google.logging.v1.LoggingService.DeleteLog&quot;
     */
    methodName?: string;
    /**
     * The number of items returned from a List or Query API method, if
     * applicable.
     */
    numResponseItems?: string;
    /**
     * The operation request. This may not include all request parameters, such
     * as those that are too large, privacy-sensitive, or duplicated elsewhere
     * in the log record. It should never include user-generated data, such as
     * file contents. When the JSON object represented here has a proto
     * equivalent, the proto name will be indicated in the `@type` property.
     */
    request?: {[key: string]: any;};
    /**
     * Metadata about the operation.
     */
    requestMetadata?: Schema$RequestMetadata;
    /**
     * The resource location information.
     */
    resourceLocation?: Schema$ResourceLocation;
    /**
     * The resource or collection that is the target of the operation. The name
     * is a scheme-less URI, not including the API service name. For example:
     * &quot;shelves/SHELF_ID/books&quot;
     * &quot;shelves/SHELF_ID/books/BOOK_ID&quot;
     */
    resourceName?: string;
    /**
     * The resource&#39;s original state before mutation. Present only for
     * operations which have successfully modified the targeted resource(s). In
     * general, this field should contain all changed fields, except those that
     * are already been included in `request`, `response`, `metadata` or
     * `service_data` fields. When the JSON object represented here has a proto
     * equivalent, the proto name will be indicated in the `@type` property.
     */
    resourceOriginalState?: {[key: string]: any;};
    /**
     * The operation response. This may not include all response elements, such
     * as those that are too large, privacy-sensitive, or duplicated elsewhere
     * in the log record. It should never include user-generated data, such as
     * file contents. When the JSON object represented here has a proto
     * equivalent, the proto name will be indicated in the `@type` property.
     */
    response?: {[key: string]: any;};
    /**
     * Deprecated, use `metadata` field instead. Other service-specific data
     * about the request, response, and other activities.
     */
    serviceData?: {[key: string]: any;};
    /**
     * The name of the API service performing the operation. For example,
     * `&quot;datastore.googleapis.com&quot;`.
     */
    serviceName?: string;
    /**
     * The status of the overall operation.
     */
    status?: Schema$Status;
  }
  /**
   * This message defines request authentication attributes. Terminology is
   * based on the JSON Web Token (JWT) standard, but the terms also correlate to
   * concepts in other standards.
   */
  export interface Schema$Auth {
    /**
     * A list of access level resource names that allow resources to be accessed
     * by authenticated requester. It is part of Secure GCP processing for the
     * incoming request. An access level string has the format:
     * &quot;//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}&quot;
     * Example:
     * &quot;//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL&quot;
     */
    accessLevels?: string[];
    /**
     * The intended audience(s) for this authentication information. Reflects
     * the audience (`aud`) claim within a JWT. The audience value(s) depends on
     * the `issuer`, but typically include one or more of the following pieces
     * of information:  *  The services intended to receive the credential such
     * as    [&quot;pubsub.googleapis.com&quot;,
     * &quot;storage.googleapis.com&quot;] *  A set of service-based scopes. For
     * example,    [&quot;https://www.googleapis.com/auth/cloud-platform&quot;]
     * *  The client id of an app, such as the Firebase project id for JWTs from
     * Firebase Auth.  Consult the documentation for the credential issuer to
     * determine the information provided.
     */
    audiences?: string[];
    /**
     * Structured claims presented with the credential. JWTs include `{key:
     * value}` pairs for standard and private claims. The following is a subset
     * of the standard required and optional claims that would typically be
     * presented for a Google-based JWT:     {&#39;iss&#39;:
     * &#39;accounts.google.com&#39;,     &#39;sub&#39;:
     * &#39;113289723416554971153&#39;,     &#39;aud&#39;:
     * [&#39;123456789012&#39;, &#39;pubsub.googleapis.com&#39;], &#39;azp&#39;:
     * &#39;123456789012.apps.googleusercontent.com&#39;,     &#39;email&#39;:
     * &#39;jsmith@example.com&#39;,     &#39;iat&#39;: 1353601026,
     * &#39;exp&#39;: 1353604926}  SAML assertions are similarly specified, but
     * with an identity provider dependent structure.
     */
    claims?: {[key: string]: any;};
    /**
     * The authorized presenter of the credential. Reflects the optional
     * Authorized Presenter (`azp`) claim within a JWT or the OAuth client id.
     * For example, a Google Cloud Platform client id looks as follows:
     * &quot;123456789012.apps.googleusercontent.com&quot;.
     */
    presenter?: string;
    /**
     * The authenticated principal. Reflects the issuer (`iss`) and subject
     * (`sub`) claims within a JWT. The issuer and subject should be `/`
     * delimited, with `/` percent-encoded within the subject fragment. For
     * Google accounts, the principal format is:
     * &quot;https://accounts.google.com/{id}&quot;
     */
    principal?: string;
  }
  /**
   * Authentication information for the operation.
   */
  export interface Schema$AuthenticationInfo {
    /**
     * The authority selector specified by the requestor, if any. It is not
     * guaranteed that the principal was allowed to use this authority.
     */
    authoritySelector?: string;
    /**
     * The email address of the authenticated user (or service account on behalf
     * of third party principal) making the request. For privacy reasons, the
     * principal email address is redacted for all read-only operations that
     * fail with a &quot;permission denied&quot; error.
     */
    principalEmail?: string;
    /**
     * Identity delegation history of an authenticated service account that
     * makes the request. It contains information on the real authorities that
     * try to access GCP resources by delegating on a service account. When
     * multiple authorities present, they are guaranteed to be sorted based on
     * the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: Schema$ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key used to create or exchange
     * credentials for authenticating the service account making the request.
     * This is a scheme-less URI full resource name. For example:
     * &quot;//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}&quot;
     */
    serviceAccountKeyName?: string;
    /**
     * The third party identification (if any) of the authenticated user making
     * the request. When the JSON object represented here has a proto
     * equivalent, the proto name will be indicated in the `@type` property.
     */
    thirdPartyPrincipal?: {[key: string]: any;};
  }
  /**
   * Authorization information for the operation.
   */
  export interface Schema$AuthorizationInfo {
    /**
     * Whether or not authorization for `resource` and `permission` was granted.
     */
    granted?: boolean;
    /**
     * The required IAM permission.
     */
    permission?: string;
    /**
     * The resource being accessed, as a REST-style string. For example:
     * bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
     */
    resource?: string;
    /**
     * Resource attributes used in IAM condition evaluation. This field contains
     * resource attributes like resource type and resource name.  To get the
     * whole view of the attributes used in IAM condition evaluation, the user
     * must also look into `AuditLog.request_metadata.request_attributes`.
     */
    resourceAttributes?: Schema$Resource;
  }
  /**
   * Defines the errors to be returned in
   * google.api.servicecontrol.v1.CheckResponse.check_errors.
   */
  export interface Schema$CheckError {
    /**
     * The error code.
     */
    code?: string;
    /**
     * Free-form text providing details on the error cause of the error.
     */
    detail?: string;
    /**
     * Contains public information about the check error. If available,
     * `status.code` will be non zero and client can propagate it out as public
     * error.
     */
    status?: Schema$Status;
    /**
     * Subject to whom this error applies. See the specific code enum for more
     * details on this field. For example:     - “project:&lt;project-id or
     * project-number&gt;”     - “folder:&lt;folder-id&gt;”     -
     * “organization:&lt;organization-id&gt;”
     */
    subject?: string;
  }
  /**
   * Contains additional information about the check operation.
   */
  export interface Schema$CheckInfo {
    /**
     * Consumer info of this check.
     */
    consumerInfo?: Schema$ConsumerInfo;
    /**
     * A list of fields and label keys that are ignored by the server. The
     * client doesn&#39;t need to send them for following requests to improve
     * performance and allow better aggregation.
     */
    unusedArguments?: string[];
  }
  /**
   * Request message for the Check method.
   */
  export interface Schema$CheckRequest {
    /**
     * The operation to be checked.
     */
    operation?: Schema$Operation;
    /**
     * Requests the project settings to be returned as part of the check
     * response.
     */
    requestProjectSettings?: boolean;
    /**
     * Specifies which version of service configuration should be used to
     * process the request.  If unspecified or no matching version can be found,
     * the latest one will be used.
     */
    serviceConfigId?: string;
    /**
     * Indicates if service activation check should be skipped for this request.
     * Default behavior is to perform the check and apply relevant quota.
     * WARNING: Setting this flag to &quot;true&quot; will disable quota
     * enforcement.
     */
    skipActivationCheck?: boolean;
  }
  /**
   * Response message for the Check method.
   */
  export interface Schema$CheckResponse {
    /**
     * Indicate the decision of the check.  If no check errors are present, the
     * service should process the operation. Otherwise the service should use
     * the list of errors to determine the appropriate action.
     */
    checkErrors?: Schema$CheckError[];
    /**
     * Feedback data returned from the server during processing a Check request.
     */
    checkInfo?: Schema$CheckInfo;
    /**
     * The same operation_id value used in the CheckRequest. Used for logging
     * and diagnostics purposes.
     */
    operationId?: string;
    /**
     * Quota information for the check request associated with this response.
     */
    quotaInfo?: Schema$QuotaInfo;
    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string;
  }
  /**
   * `ConsumerInfo` provides information about the consumer.
   */
  export interface Schema$ConsumerInfo {
    /**
     * The consumer identity number, can be Google cloud project number, folder
     * number or organization number e.g. 1234567890. A value of 0 indicates no
     * consumer number is found.
     */
    consumerNumber?: string;
    /**
     * The Google cloud project number, e.g. 1234567890. A value of 0 indicates
     * no project number is found.  NOTE: This field is deprecated after Chemist
     * support flexible consumer id. New code should not depend on this field
     * anymore.
     */
    projectNumber?: string;
    type?: string;
  }
  /**
   * Distribution represents a frequency distribution of double-valued sample
   * points. It contains the size of the population of sample points plus
   * additional optional information:    - the arithmetic mean of the samples -
   * the minimum and maximum of the samples   - the sum-squared-deviation of the
   * samples, used to compute variance   - a histogram of the values of the
   * sample points
   */
  export interface Schema$Distribution {
    /**
     * The number of samples in each histogram bucket. `bucket_counts` are
     * optional. If present, they must sum to the `count` value.  The buckets
     * are defined below in `bucket_option`. There are N buckets.
     * `bucket_counts[0]` is the number of samples in the underflow bucket.
     * `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples in
     * each of the finite buckets. And `bucket_counts[N] is the number of
     * samples in the overflow bucket. See the comments of `bucket_option` below
     * for more details.  Any suffix of trailing zeros may be omitted.
     */
    bucketCounts?: string[];
    /**
     * The total number of samples in the distribution. Must be &gt;= 0.
     */
    count?: string;
    /**
     * Buckets with arbitrary user-provided width.
     */
    explicitBuckets?: Schema$ExplicitBuckets;
    /**
     * Buckets with exponentially growing width.
     */
    exponentialBuckets?: Schema$ExponentialBuckets;
    /**
     * Buckets with constant width.
     */
    linearBuckets?: Schema$LinearBuckets;
    /**
     * The maximum of the population of values. Ignored if `count` is zero.
     */
    maximum?: number;
    /**
     * The arithmetic mean of the samples in the distribution. If `count` is
     * zero then this field must be zero.
     */
    mean?: number;
    /**
     * The minimum of the population of values. Ignored if `count` is zero.
     */
    minimum?: number;
    /**
     * The sum of squared deviations from the mean:   Sum[i=1..count]((x_i -
     * mean)^2) where each x_i is a sample values. If `count` is zero then this
     * field must be zero, otherwise validation of the request fails.
     */
    sumOfSquaredDeviation?: number;
  }
  /**
   * Describing buckets with arbitrary user-provided width.
   */
  export interface Schema$ExplicitBuckets {
    /**
     * &#39;bound&#39; is a list of strictly increasing boundaries between
     * buckets. Note that a list of length N-1 defines N buckets because of
     * fenceposting. See comments on `bucket_options` for details.  The i&#39;th
     * finite bucket covers the interval   [bound[i-1], bound[i]) where i ranges
     * from 1 to bound_size() - 1. Note that there are no finite buckets at all
     * if &#39;bound&#39; only contains a single element; in that special case
     * the single bound defines the boundary between the underflow and overflow
     * buckets.  bucket number                   lower bound    upper bound  i
     * == 0 (underflow)              -inf           bound[i]  0 &lt; i &lt;
     * bound_size()            bound[i-1]     bound[i]  i == bound_size()
     * (overflow)    bound[i-1]     +inf
     */
    bounds?: number[];
  }
  /**
   * Describing buckets with exponentially growing width.
   */
  export interface Schema$ExponentialBuckets {
    /**
     * The i&#39;th exponential bucket covers the interval   [scale *
     * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to
     * num_finite_buckets inclusive. Must be larger than 1.0.
     */
    growthFactor?: number;
    /**
     * The number of finite buckets. With the underflow and overflow buckets,
     * the total number of buckets is `num_finite_buckets` + 2. See comments on
     * `bucket_options` for details.
     */
    numFiniteBuckets?: number;
    /**
     * The i&#39;th exponential bucket covers the interval   [scale *
     * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to
     * num_finite_buckets inclusive. Must be &gt; 0.
     */
    scale?: number;
  }
  /**
   * First party identity principal.
   */
  export interface Schema$FirstPartyPrincipal {
    /**
     * The email address of a Google account. .
     */
    principalEmail?: string;
    /**
     * Metadata about the service that uses the service account. .
     */
    serviceMetadata?: {[key: string]: any;};
  }
  /**
   * A common proto for logging HTTP requests. Only contains semantics defined
   * by the HTTP specification. Product-specific logging information MUST be
   * defined in a separate message.
   */
  export interface Schema$HttpRequest {
    /**
     * The number of HTTP response bytes inserted into cache. Set only when a
     * cache fill was attempted.
     */
    cacheFillBytes?: string;
    /**
     * Whether or not an entity was served from cache (with or without
     * validation).
     */
    cacheHit?: boolean;
    /**
     * Whether or not a cache lookup was attempted.
     */
    cacheLookup?: boolean;
    /**
     * Whether or not the response was validated with the origin server before
     * being served from cache. This field is only meaningful if `cache_hit` is
     * True.
     */
    cacheValidatedWithOriginServer?: boolean;
    /**
     * The request processing latency on the server, from the time the request
     * was received until the response was sent.
     */
    latency?: string;
    /**
     * Protocol used for the request. Examples: &quot;HTTP/1.1&quot;,
     * &quot;HTTP/2&quot;, &quot;websocket&quot;
     */
    protocol?: string;
    /**
     * The referer URL of the request, as defined in [HTTP/1.1 Header Field
     * Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request.
     * Examples: `&quot;192.168.1.1&quot;`,
     * `&quot;FE80::0202:B3FF:FE1E:8329&quot;`.
     */
    remoteIp?: string;
    /**
     * The request method. Examples: `&quot;GET&quot;`, `&quot;HEAD&quot;`,
     * `&quot;PUT&quot;`, `&quot;POST&quot;`.
     */
    requestMethod?: string;
    /**
     * The size of the HTTP request message in bytes, including the request
     * headers and the request body.
     */
    requestSize?: string;
    /**
     * The scheme (http, https), the host name, the path, and the query portion
     * of the URL that was requested. Example:
     * `&quot;http://example.com/some/info?color=red&quot;`.
     */
    requestUrl?: string;
    /**
     * The size of the HTTP response message sent back to the client, in bytes,
     * including the response headers and the response body.
     */
    responseSize?: string;
    /**
     * The IP address (IPv4 or IPv6) of the origin server that the request was
     * sent to.
     */
    serverIp?: string;
    /**
     * The response code indicating the status of the response. Examples: 200,
     * 404.
     */
    status?: number;
    /**
     * The user agent sent by the client. Example: `&quot;Mozilla/4.0
     * (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)&quot;`.
     */
    userAgent?: string;
  }
  /**
   * Describing buckets with constant width.
   */
  export interface Schema$LinearBuckets {
    /**
     * The number of finite buckets. With the underflow and overflow buckets,
     * the total number of buckets is `num_finite_buckets` + 2. See comments on
     * `bucket_options` for details.
     */
    numFiniteBuckets?: number;
    /**
     * The i&#39;th linear bucket covers the interval   [offset + (i-1) * width,
     * offset + i * width) where i ranges from 1 to num_finite_buckets,
     * inclusive.
     */
    offset?: number;
    /**
     * The i&#39;th linear bucket covers the interval   [offset + (i-1) * width,
     * offset + i * width) where i ranges from 1 to num_finite_buckets,
     * inclusive. Must be strictly positive.
     */
    width?: number;
  }
  /**
   * An individual log entry.
   */
  export interface Schema$LogEntry {
    /**
     * Optional. Information about the HTTP request associated with this log
     * entry, if applicable.
     */
    httpRequest?: Schema$HttpRequest;
    /**
     * A unique ID for the log entry used for deduplication. If omitted, the
     * implementation will generate one based on operation_id.
     */
    insertId?: string;
    /**
     * A set of user-defined (key, value) data that provides additional
     * information about the log entry.
     */
    labels?: {[key: string]: string;};
    /**
     * Required. The log to which this log entry belongs. Examples:
     * `&quot;syslog&quot;`, `&quot;book_log&quot;`.
     */
    name?: string;
    /**
     * Optional. Information about an operation associated with the log entry,
     * if applicable.
     */
    operation?: Schema$LogEntryOperation;
    /**
     * The log entry payload, represented as a protocol buffer that is expressed
     * as a JSON object. The only accepted type currently is AuditLog.
     */
    protoPayload?: {[key: string]: any;};
    /**
     * The severity of the log entry. The default value is
     * `LogSeverity.DEFAULT`.
     */
    severity?: string;
    /**
     * The log entry payload, represented as a structure that is expressed as a
     * JSON object.
     */
    structPayload?: {[key: string]: any;};
    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string;
    /**
     * The time the event described by the log entry occurred. If omitted,
     * defaults to operation start time.
     */
    timestamp?: string;
    /**
     * Optional. Resource name of the trace associated with the log entry, if
     * any. If this field contains a relative resource name, you can assume the
     * name is relative to `//tracing.googleapis.com`. Example:
     * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace?: string;
  }
  /**
   * Additional information about a potentially long-running operation with
   * which a log entry is associated.
   */
  export interface Schema$LogEntryOperation {
    /**
     * Optional. Set this to True if this is the first log entry in the
     * operation.
     */
    first?: boolean;
    /**
     * Optional. An arbitrary operation identifier. Log entries with the same
     * identifier are assumed to be part of the same operation.
     */
    id?: string;
    /**
     * Optional. Set this to True if this is the last log entry in the
     * operation.
     */
    last?: boolean;
    /**
     * Optional. An arbitrary producer identifier. The combination of `id` and
     * `producer` must be globally unique.  Examples for `producer`:
     * `&quot;MyDivision.MyBigCompany.com&quot;`,
     * `&quot;github.com/MyProject/MyApplication&quot;`.
     */
    producer?: string;
  }
  /**
   * Represents a single metric value.
   */
  export interface Schema$MetricValue {
    /**
     * A boolean value.
     */
    boolValue?: boolean;
    /**
     * A distribution value.
     */
    distributionValue?: Schema$Distribution;
    /**
     * A double precision floating point value.
     */
    doubleValue?: number;
    /**
     * The end of the time period over which this metric value&#39;s measurement
     * applies.
     */
    endTime?: string;
    /**
     * A signed 64-bit integer value.
     */
    int64Value?: string;
    /**
     * The labels describing the metric value. See comments on
     * google.api.servicecontrol.v1.Operation.labels for the overriding
     * relationship.
     */
    labels?: {[key: string]: string;};
    /**
     * A money value.
     */
    moneyValue?: Schema$Money;
    /**
     * The start of the time period over which this metric value&#39;s
     * measurement applies. The time period has different semantics for
     * different metric types (cumulative, delta, and gauge). See the metric
     * definition documentation in the service configuration for details.
     */
    startTime?: string;
    /**
     * A text string value.
     */
    stringValue?: string;
  }
  /**
   * Represents a set of metric values in the same metric. Each metric value in
   * the set should have a unique combination of start time, end time, and label
   * values.
   */
  export interface Schema$MetricValueSet {
    /**
     * The metric name defined in the service configuration.
     */
    metricName?: string;
    /**
     * The values in this metric.
     */
    metricValues?: Schema$MetricValue[];
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between
     * -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos`
     * must be positive or zero. If `units` is zero, `nanos` can be positive,
     * zero, or negative. If `units` is negative, `nanos` must be negative or
     * zero. For example $-1.75 is represented as `units`=-1 and
     * `nanos`=-750,000,000.
     */
    nanos?: number;
    /**
     * The whole units of the amount. For example if `currencyCode` is
     * `&quot;USD&quot;`, then 1 unit is one US dollar.
     */
    units?: string;
  }
  /**
   * Represents information regarding an operation.
   */
  export interface Schema$Operation {
    /**
     * Identity of the consumer who is using the service. This field should be
     * filled in for the operations initiated by a consumer, but not for
     * service-initiated operations that are not related to a specific consumer.
     * - This can be in one of the following formats:     - project:PROJECT_ID,
     * - project`_`number:PROJECT_NUMBER,     - projects/PROJECT_ID or
     * PROJECT_NUMBER,     - folders/FOLDER_NUMBER,     -
     * organizations/ORGANIZATION_NUMBER,     - api`_`key:API_KEY.
     */
    consumerId?: string;
    /**
     * End time of the operation. Required when the operation is used in
     * ServiceController.Report, but optional when the operation is used in
     * ServiceController.Check.
     */
    endTime?: string;
    /**
     * DO NOT USE. This is an experimental field.
     */
    importance?: string;
    /**
     * Labels describing the operation. Only the following labels are allowed:
     * - Labels describing monitored resources as defined in   the service
     * configuration. - Default labels of metric values. When specified, labels
     * defined in the   metric value override these default. - The following
     * labels defined by Google Cloud Platform:     -
     * `cloud.googleapis.com/location` describing the location where the
     * operation happened,     - `servicecontrol.googleapis.com/user_agent`
     * describing the user agent        of the API request,     -
     * `servicecontrol.googleapis.com/service_agent` describing the service used
     * to handle the API request (e.g. ESP),     -
     * `servicecontrol.googleapis.com/platform` describing the platform where
     * the API is served, such as App Engine, Compute Engine, or Kubernetes
     * Engine.
     */
    labels?: {[key: string]: string;};
    /**
     * Represents information to be logged.
     */
    logEntries?: Schema$LogEntry[];
    /**
     * Represents information about this operation. Each MetricValueSet
     * corresponds to a metric defined in the service configuration. The data
     * type used in the MetricValueSet must agree with the data type specified
     * in the metric definition.  Within a single operation, it is not allowed
     * to have more than one MetricValue instances that have the same metric
     * names and identical label value combinations. If a request has such
     * duplicated MetricValue instances, the entire request is rejected with an
     * invalid argument error.
     */
    metricValueSets?: Schema$MetricValueSet[];
    /**
     * Identity of the operation. This must be unique within the scope of the
     * service that generated the operation. If the service calls Check() and
     * Report() on the same operation, the two calls should carry the same id.
     * UUID version 4 is recommended, though not required. In scenarios where an
     * operation is computed from existing information and an idempotent id is
     * desirable for deduplication purpose, UUID version 5 is recommended. See
     * RFC 4122 for details.
     */
    operationId?: string;
    /**
     * Fully qualified name of the operation. Reserved for future use.
     */
    operationName?: string;
    /**
     * Represents the properties needed for quota check. Applicable only if this
     * operation is for a quota check request. If this is not specified, no
     * quota check will be performed.
     */
    quotaProperties?: Schema$QuotaProperties;
    /**
     * DO NOT USE. This field is deprecated, use &quot;resources&quot; field
     * instead. The resource name of the parent of a resource in the resource
     * hierarchy.  This can be in one of the following formats:     -
     * “projects/&lt;project-id or project-number&gt;”     -
     * “folders/&lt;folder-id&gt;”     - “organizations/&lt;organization-id&gt;”
     */
    resourceContainer?: string;
    /**
     * The resources that are involved in the operation. The maximum supported
     * number of entries in this field is 100.
     */
    resources?: Schema$ResourceInfo[];
    /**
     * Required. Start time of the operation.
     */
    startTime?: string;
    /**
     * User defined labels for the resource that this operation is associated
     * with. Only a combination of 1000 user labels per consumer project are
     * allowed.
     */
    userLabels?: {[key: string]: string;};
  }
  /**
   * This message defines attributes for a node that handles a network request.
   * The node can be either a service or an application that sends, forwards, or
   * receives the request. Service peers should fill in the `service`,
   * `principal`, and `labels` as appropriate.
   */
  export interface Schema$Peer {
    /**
     * The IP address of the peer.
     */
    ip?: string;
    /**
     * The labels associated with the peer.
     */
    labels?: {[key: string]: string;};
    /**
     * The network port of the peer.
     */
    port?: string;
    /**
     * The identity of this peer. Similar to `Request.auth.principal`, but
     * relative to the peer instead of the request. For example, the idenity
     * associated with a load balancer that forwared the request.
     */
    principal?: string;
    /**
     * The CLDR country/region code associated with the above IP address. If the
     * IP address is private, the `region_code` should reflect the physical
     * location where this peer is running.
     */
    regionCode?: string;
    /**
     * The canonical service name of the peer.  NOTE: different systems may have
     * different service naming schemes.
     */
    service?: string;
  }
  /**
   * Represents error information for QuotaOperation.
   */
  export interface Schema$QuotaError {
    /**
     * Error code.
     */
    code?: string;
    /**
     * Free-form text that provides details on the cause of the error.
     */
    description?: string;
    /**
     * Subject to whom this error applies. See the specific enum for more
     * details on this field. For example, &quot;clientip:&lt;ip address of
     * client&gt;&quot; or &quot;project:&lt;Google developer project
     * id&gt;&quot;.
     */
    subject?: string;
  }
  /**
   * Contains the quota information for a quota check response.
   */
  export interface Schema$QuotaInfo {
    /**
     * Quota Metrics that have exceeded quota limits. For QuotaGroup-based
     * quota, this is QuotaGroup.name For QuotaLimit-based quota, this is
     * QuotaLimit.name See: google.api.Quota Deprecated: Use quota_metrics to
     * get per quota group limit exceeded status.
     */
    limitExceeded?: string[];
    /**
     * Map of quota group name to the actual number of tokens consumed. If the
     * quota check was not successful, then this will not be populated due to no
     * quota consumption.  We are not merging this field with
     * &#39;quota_metrics&#39; field because of the complexity of scaling in
     * Chemist client code base. For simplicity, we will keep this field for
     * Castor (that scales quota usage) and &#39;quota_metrics&#39; for
     * SuperQuota (that doesn&#39;t scale quota usage).
     */
    quotaConsumed?: {[key: string]: number;};
    /**
     * Quota metrics to indicate the usage. Depending on the check request, one
     * or more of the following metrics will be included:  1. For rate quota,
     * per quota group or per quota metric incremental usage will be specified
     * using the following delta metric:
     * &quot;serviceruntime.googleapis.com/api/consumer/quota_used_count&quot;
     * 2. For allocation quota, per quota metric total usage will be specified
     * using the following gauge metric:
     * &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;
     * 3. For both rate quota and allocation quota, the quota limit reached
     * condition will be specified using the following boolean metric:
     * &quot;serviceruntime.googleapis.com/quota/exceeded&quot;
     */
    quotaMetrics?: Schema$MetricValueSet[];
  }
  /**
   * Represents information regarding a quota operation.
   */
  export interface Schema$QuotaOperation {
    /**
     * Identity of the consumer for whom this quota operation is being
     * performed.  This can be in one of the following formats:
     * project:&lt;project_id&gt;,   project_number:&lt;project_number&gt;,
     * api_key:&lt;api_key&gt;.
     */
    consumerId?: string;
    /**
     * Labels describing the operation.
     */
    labels?: {[key: string]: string;};
    /**
     * Fully qualified name of the API method for which this quota operation is
     * requested. This name is used for matching quota rules or metric rules and
     * billing status rules defined in service configuration.  This field should
     * not be set if any of the following is true: (1) the quota operation is
     * performed on non-API resources. (2) quota_metrics is set because the
     * caller is doing quota override.  Example of an RPC method name:
     * google.example.library.v1.LibraryService.CreateShelf
     */
    methodName?: string;
    /**
     * Identity of the operation. This is expected to be unique within the scope
     * of the service that generated the operation, and guarantees idempotency
     * in case of retries.  UUID version 4 is recommended, though not required.
     * In scenarios where an operation is computed from existing information and
     * an idempotent id is desirable for deduplication purpose, UUID version 5
     * is recommended. See RFC 4122 for details.
     */
    operationId?: string;
    /**
     * Represents information about this operation. Each MetricValueSet
     * corresponds to a metric defined in the service configuration. The data
     * type used in the MetricValueSet must agree with the data type specified
     * in the metric definition.  Within a single operation, it is not allowed
     * to have more than one MetricValue instances that have the same metric
     * names and identical label value combinations. If a request has such
     * duplicated MetricValue instances, the entire request is rejected with an
     * invalid argument error.  This field is mutually exclusive with
     * method_name.
     */
    quotaMetrics?: Schema$MetricValueSet[];
    /**
     * Quota mode for this operation.
     */
    quotaMode?: string;
  }
  /**
   * Represents the properties needed for quota operations.
   */
  export interface Schema$QuotaProperties {
    /**
     * Quota mode for this operation.
     */
    quotaMode?: string;
  }
  /**
   * Represents the processing error of one Operation in the request.
   */
  export interface Schema$ReportError {
    /**
     * The Operation.operation_id value from the request.
     */
    operationId?: string;
    /**
     * Details of the error when processing the Operation.
     */
    status?: Schema$Status;
  }
  /**
   * Contains additional info about the report operation.
   */
  export interface Schema$ReportInfo {
    /**
     * The Operation.operation_id value from the request.
     */
    operationId?: string;
    /**
     * Quota usage info when processing the `Operation`.
     */
    quotaInfo?: Schema$QuotaInfo;
  }
  /**
   * Request message for the Report method.
   */
  export interface Schema$ReportRequest {
    /**
     * Operations to be reported.  Typically the service should report one
     * operation per request. Putting multiple operations into a single request
     * is allowed, but should be used only when multiple operations are natually
     * available at the time of the report.  If multiple operations are in a
     * single request, the total request size should be no larger than 1MB. See
     * ReportResponse.report_errors for partial failure behavior.
     */
    operations?: Schema$Operation[];
    /**
     * Specifies which version of service config should be used to process the
     * request.  If unspecified or no matching version can be found, the latest
     * one will be used.
     */
    serviceConfigId?: string;
  }
  /**
   * Response message for the Report method.
   */
  export interface Schema$ReportResponse {
    /**
     * Partial failures, one for each `Operation` in the request that failed
     * processing. There are three possible combinations of the RPC status:  1.
     * The combination of a successful RPC status and an empty `report_errors`
     * list indicates a complete success where all `Operations` in the request
     * are processed successfully. 2. The combination of a successful RPC status
     * and a non-empty    `report_errors` list indicates a partial success where
     * some    `Operations` in the request succeeded. Each    `Operation` that
     * failed processing has a corresponding item    in this list. 3. A failed
     * RPC status indicates a general non-deterministic failure.    When this
     * happens, it&#39;s impossible to know which of the    &#39;Operations&#39;
     * in the request succeeded or failed.
     */
    reportErrors?: Schema$ReportError[];
    /**
     * Quota usage for each quota release `Operation` request.  Fully or
     * partially failed quota release request may or may not be present in
     * `report_quota_info`. For example, a failed quota release request will
     * have the current quota usage info when precise quota library returns the
     * info. A deadline exceeded quota request will not have quota usage info.
     * If there is no quota release request, report_quota_info will be empty.
     */
    reportInfos?: Schema$ReportInfo[];
    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string;
  }
  /**
   * This message defines attributes for an HTTP request. If the actual request
   * is not an HTTP request, the runtime system should try to map the actual
   * request to an equivalent HTTP request.
   */
  export interface Schema$Request {
    /**
     * The request authentication. May be absent for unauthenticated requests.
     * Derived from the HTTP request `Authorization` header or equivalent.
     */
    auth?: Schema$Auth;
    /**
     * The HTTP URL fragment. No URL decoding is performed.
     */
    fragment?: string;
    /**
     * The HTTP request headers. If multiple headers share the same key, they
     * must be merged according to the HTTP spec. All header keys must be
     * lowercased, because HTTP header keys are case-insensitive.
     */
    headers?: {[key: string]: string;};
    /**
     * The HTTP request `Host` header value.
     */
    host?: string;
    /**
     * The unique ID for a request, which can be propagated to downstream
     * systems. The ID should have low probability of collision within a single
     * day for a specific service.
     */
    id?: string;
    /**
     * The HTTP request method, such as `GET`, `POST`.
     */
    method?: string;
    /**
     * The HTTP URL path.
     */
    path?: string;
    /**
     * The network protocol used with the request, such as &quot;http/1.1&quot;,
     * &quot;spdy/3&quot;, &quot;h2&quot;, &quot;h2c&quot;, &quot;webrtc&quot;,
     * &quot;tcp&quot;, &quot;udp&quot;, &quot;quic&quot;. See
     * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
     * for details.
     */
    protocol?: string;
    /**
     * The HTTP URL query in the format of `name1=value`&amp;name2=value2`, as
     * it appears in the first line of the HTTP request. No decoding is
     * performed.
     */
    query?: string;
    /**
     * A special parameter for request reason. It is used by security systems to
     * associate auditing information with a request.
     */
    reason?: string;
    /**
     * The HTTP URL scheme, such as `http` and `https`.
     */
    scheme?: string;
    /**
     * The HTTP request size in bytes. If unknown, it must be -1.
     */
    size?: string;
    /**
     * The timestamp when the `destination` service receives the first byte of
     * the request.
     */
    time?: string;
  }
  /**
   * Metadata about the request.
   */
  export interface Schema$RequestMetadata {
    /**
     * The IP address of the caller. For caller from internet, this will be
     * public IPv4 or IPv6 address. For caller from a Compute Engine VM with
     * external IP address, this will be the VM&#39;s external IP address. For
     * caller from a Compute Engine VM without external IP address, if the VM is
     * in the same organization (or project) as the accessed resource,
     * `caller_ip` will be the VM&#39;s internal IPv4 address, otherwise the
     * `caller_ip` will be redacted to &quot;gce-internal-ip&quot;. See
     * https://cloud.google.com/compute/docs/vpc/ for more information.
     */
    callerIp?: string;
    /**
     * The network of the caller. Set only if the network host project is part
     * of the same GCP organization (or project) as the accessed resource. See
     * https://cloud.google.com/compute/docs/vpc/ for more information. This is
     * a scheme-less URI full resource name. For example:
     * &quot;//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID&quot;
     */
    callerNetwork?: string;
    /**
     * The user agent of the caller. This information is not authenticated and
     * should be treated accordingly. For example:  +
     * `google-api-python-client/1.4.0`:     The request was made by the Google
     * API client for Python. +   `Cloud SDK Command Line Tool
     * apitools-client/1.0 gcloud/0.9.62`:     The request was made by the
     * Google Cloud SDK CLI (gcloud). +   `AppEngine-Google;
     * (+http://code.google.com/appengine; appid: s~my-project`:     The request
     * was made from the `my-project` App Engine app. NOLINT
     */
    callerSuppliedUserAgent?: string;
    /**
     * The destination of a network activity, such as accepting a TCP
     * connection. In a multi hop network activity, the destination represents
     * the receiver of the last hop. Only two fields are used in this message,
     * Peer.port and Peer.ip. These fields are optionally populated by those
     * services utilizing the IAM condition feature.
     */
    destinationAttributes?: Schema$Peer;
    /**
     * Request attributes used in IAM condition evaluation. This field contains
     * request attributes like request time and access levels associated with
     * the request.   To get the whole view of the attributes used in IAM
     * condition evaluation, the user must also look into
     * `AuditLog.authentication_info.resource_attributes`.
     */
    requestAttributes?: Schema$Request;
  }
  /**
   * This message defines core attributes for a resource. A resource is an
   * addressable (named) entity provided by the destination service. For
   * example, a file stored on a network storage service.
   */
  export interface Schema$Resource {
    /**
     * The labels or tags on the resource, such as AWS resource tags and
     * Kubernetes resource labels.
     */
    labels?: {[key: string]: string;};
    /**
     * The stable identifier (name) of a resource on the `service`. A resource
     * can be logically identified as
     * &quot;//{resource.service}/{resource.name}&quot;. The differences between
     * a resource name and a URI are:  *   Resource name is a logical
     * identifier, independent of network     protocol and API version. For
     * example,     `//pubsub.googleapis.com/projects/123/topics/news-feed`. *
     * URI often includes protocol and version information, so it can     be
     * used directly by applications. For example,
     * `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.  See
     * https://cloud.google.com/apis/design/resource_names for details.
     */
    name?: string;
    /**
     * The name of the service that this resource belongs to, such as
     * `pubsub.googleapis.com`. The service may be different from the DNS
     * hostname that actually serves the request.
     */
    service?: string;
    /**
     * The type of the resource. The scheme is platform-specific because
     * different platforms define their resources differently.
     */
    type?: string;
  }
  /**
   * Describes a resource associated with this operation.
   */
  export interface Schema$ResourceInfo {
    /**
     * The identifier of the parent of this resource instance. Must be in one of
     * the following formats:     - “projects/&lt;project-id or
     * project-number&gt;”     - “folders/&lt;folder-id&gt;”     -
     * “organizations/&lt;organization-id&gt;”
     */
    resourceContainer?: string;
    /**
     * The location of the resource. If not empty, the resource will be checked
     * against location policy. The value must be a valid zone, region or
     * multiregion. For example: &quot;europe-west4&quot; or
     * &quot;northamerica-northeast1-a&quot;
     */
    resourceLocation?: string;
    /**
     * Name of the resource. This is used for auditing purposes.
     */
    resourceName?: string;
  }
  /**
   * Location information about a resource.
   */
  export interface Schema$ResourceLocation {
    /**
     * The locations of a resource after the execution of the operation.
     * Requests to create or delete a location based resource must populate the
     * &#39;current_locations&#39; field and not the
     * &#39;original_locations&#39; field. For example:
     * &quot;europe-west1-a&quot;     &quot;us-east1&quot;     &quot;nam3&quot;
     */
    currentLocations?: string[];
    /**
     * The locations of a resource prior to the execution of the operation.
     * Requests that mutate the resource&#39;s location must populate both the
     * &#39;original_locations&#39; as well as the &#39;current_locations&#39;
     * fields. For example:      &quot;europe-west1-a&quot; &quot;us-east1&quot;
     * &quot;nam3&quot;
     */
    originalLocations?: string[];
  }
  /**
   * Identity delegation history of an authenticated service account.
   */
  export interface Schema$ServiceAccountDelegationInfo {
    /**
     * First party (Google) identity as the real authority.
     */
    firstPartyPrincipal?: Schema$FirstPartyPrincipal;
    /**
     * Third party identity as the real authority.
     */
    thirdPartyPrincipal?: Schema$ThirdPartyPrincipal;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Third party identity principal.
   */
  export interface Schema$ThirdPartyPrincipal {
    /**
     * Metadata about third party identity.
     */
    thirdPartyClaims?: {[key: string]: any;};
  }


  export class Resource$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * servicecontrol.services.allocateQuota
     * @desc Attempts to allocate quota for the specified consumer. It should be
     * called before the operation is executed.  This method requires the
     * `servicemanagement.services.quota` permission on the specified service.
     * For more information, see [Cloud IAM](https://cloud.google.com/iam).
     * **NOTE:** The client **must** fail-open on server errors `INTERNAL`,
     * `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
     * reliability, the server may inject these errors to prohibit any hard
     * dependency on the quota functionality.
     * @alias servicecontrol.services.allocateQuota
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
     * @param {().AllocateQuotaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    allocateQuota(
        params?: Params$Resource$Services$Allocatequota,
        options?: MethodOptions): GaxiosPromise<Schema$AllocateQuotaResponse>;
    allocateQuota(
        params: Params$Resource$Services$Allocatequota,
        options: MethodOptions|
        BodyResponseCallback<Schema$AllocateQuotaResponse>,
        callback: BodyResponseCallback<Schema$AllocateQuotaResponse>): void;
    allocateQuota(
        params: Params$Resource$Services$Allocatequota,
        callback: BodyResponseCallback<Schema$AllocateQuotaResponse>): void;
    allocateQuota(callback: BodyResponseCallback<Schema$AllocateQuotaResponse>):
        void;
    allocateQuota(
        paramsOrCallback?: Params$Resource$Services$Allocatequota|
        BodyResponseCallback<Schema$AllocateQuotaResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AllocateQuotaResponse>,
        callback?: BodyResponseCallback<Schema$AllocateQuotaResponse>):
        void|GaxiosPromise<Schema$AllocateQuotaResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Services$Allocatequota;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Allocatequota;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}:allocateQuota')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$AllocateQuotaResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AllocateQuotaResponse>(parameters);
      }
    }


    /**
     * servicecontrol.services.check
     * @desc Checks whether an operation on a service should be allowed to
     * proceed based on the configuration of the service and related policies.
     * It must be called before the operation is executed.  If feasible, the
     * client should cache the check results and reuse them for 60 seconds. In
     * case of any server errors, the client should rely on the cached results
     * for much longer time to avoid outage. WARNING: There is general 60s delay
     * for the configuration and policy propagation, therefore callers MUST NOT
     * depend on the `Check` method having the latest policy information.  NOTE:
     * the CheckRequest has the size limit of 64KB.  This method requires the
     * `servicemanagement.services.check` permission on the specified service.
     * For more information, see [Cloud IAM](https://cloud.google.com/iam).
     * @alias servicecontrol.services.check
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     * @param {().CheckRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    check(params?: Params$Resource$Services$Check, options?: MethodOptions):
        GaxiosPromise<Schema$CheckResponse>;
    check(
        params: Params$Resource$Services$Check,
        options: MethodOptions|BodyResponseCallback<Schema$CheckResponse>,
        callback: BodyResponseCallback<Schema$CheckResponse>): void;
    check(
        params: Params$Resource$Services$Check,
        callback: BodyResponseCallback<Schema$CheckResponse>): void;
    check(callback: BodyResponseCallback<Schema$CheckResponse>): void;
    check(
        paramsOrCallback?: Params$Resource$Services$Check|
        BodyResponseCallback<Schema$CheckResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CheckResponse>,
        callback?: BodyResponseCallback<Schema$CheckResponse>):
        void|GaxiosPromise<Schema$CheckResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}:check')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$CheckResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CheckResponse>(parameters);
      }
    }


    /**
     * servicecontrol.services.report
     * @desc Reports operation results to Google Service Control, such as logs
     * and metrics. It should be called after an operation is completed.  If
     * feasible, the client should aggregate reporting data for up to 5 seconds
     * to reduce API traffic. Limiting aggregation to 5 seconds is to reduce
     * data loss during client crashes. Clients should carefully choose the
     * aggregation time window to avoid data loss risk more than 0.01% for
     * business and compliance reasons.  NOTE: the ReportRequest has the size
     * limit of 1MB.  This method requires the
     * `servicemanagement.services.report` permission on the specified service.
     * For more information, see [Google Cloud
     * IAM](https://cloud.google.com/iam).
     * @alias servicecontrol.services.report
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     * @param {().ReportRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    report(params?: Params$Resource$Services$Report, options?: MethodOptions):
        GaxiosPromise<Schema$ReportResponse>;
    report(
        params: Params$Resource$Services$Report,
        options: MethodOptions|BodyResponseCallback<Schema$ReportResponse>,
        callback: BodyResponseCallback<Schema$ReportResponse>): void;
    report(
        params: Params$Resource$Services$Report,
        callback: BodyResponseCallback<Schema$ReportResponse>): void;
    report(callback: BodyResponseCallback<Schema$ReportResponse>): void;
    report(
        paramsOrCallback?: Params$Resource$Services$Report|
        BodyResponseCallback<Schema$ReportResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ReportResponse>,
        callback?: BodyResponseCallback<Schema$ReportResponse>):
        void|GaxiosPromise<Schema$ReportResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Report;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Report;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/services/{serviceName}:report')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$ReportResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReportResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Allocatequota extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the service as specified in the service configuration. For
     * example, `"pubsub.googleapis.com"`.  See google.api.Service for the
     * definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AllocateQuotaRequest;
  }
  export interface Params$Resource$Services$Check extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.  See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckRequest;
  }
  export interface Params$Resource$Services$Report extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.  See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportRequest;
  }
}
