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

export namespace books_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not
     * exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Books API
   *
   * Searches for books and manages your Google Books library.
   *
   * @example
   * const {google} = require('googleapis');
   * const books = google.books('v1');
   *
   * @namespace books
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Books
   */
  export class Books {
    context: APIRequestContext;
    bookshelves: Resource$Bookshelves;
    cloudloading: Resource$Cloudloading;
    dictionary: Resource$Dictionary;
    familysharing: Resource$Familysharing;
    layers: Resource$Layers;
    myconfig: Resource$Myconfig;
    mylibrary: Resource$Mylibrary;
    notification: Resource$Notification;
    onboarding: Resource$Onboarding;
    personalizedstream: Resource$Personalizedstream;
    promooffer: Resource$Promooffer;
    series: Resource$Series;
    volumes: Resource$Volumes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {_options: options || {}, google};

      this.bookshelves = new Resource$Bookshelves(this.context);
      this.cloudloading = new Resource$Cloudloading(this.context);
      this.dictionary = new Resource$Dictionary(this.context);
      this.familysharing = new Resource$Familysharing(this.context);
      this.layers = new Resource$Layers(this.context);
      this.myconfig = new Resource$Myconfig(this.context);
      this.mylibrary = new Resource$Mylibrary(this.context);
      this.notification = new Resource$Notification(this.context);
      this.onboarding = new Resource$Onboarding(this.context);
      this.personalizedstream = new Resource$Personalizedstream(this.context);
      this.promooffer = new Resource$Promooffer(this.context);
      this.series = new Resource$Series(this.context);
      this.volumes = new Resource$Volumes(this.context);
    }
  }

  export interface Schema$Annotation {
    /**
     * Anchor text after excerpt. For requests, if the user bookmarked a screen
     * that has no flowing text on it, then this field should be empty.
     */
    afterSelectedText?: string;
    /**
     * Anchor text before excerpt. For requests, if the user bookmarked a screen
     * that has no flowing text on it, then this field should be empty.
     */
    beforeSelectedText?: string;
    /**
     * Selection ranges sent from the client.
     */
    clientVersionRanges?: {
      cfiRange?: Schema$BooksAnnotationsRange;
      contentVersion?: string;
      gbImageRange?: Schema$BooksAnnotationsRange;
      gbTextRange?: Schema$BooksAnnotationsRange;
      imageCfiRange?: Schema$BooksAnnotationsRange;
    };
    /**
     * Timestamp for the created time of this annotation.
     */
    created?: string;
    /**
     * Selection ranges for the most recent content version.
     */
    currentVersionRanges?: {
      cfiRange?: Schema$BooksAnnotationsRange;
      contentVersion?: string;
      gbImageRange?: Schema$BooksAnnotationsRange;
      gbTextRange?: Schema$BooksAnnotationsRange;
      imageCfiRange?: Schema$BooksAnnotationsRange;
    };
    /**
     * User-created data for this annotation.
     */
    data?: string;
    /**
     * Indicates that this annotation is deleted.
     */
    deleted?: boolean;
    /**
     * The highlight style for this annotation.
     */
    highlightStyle?: string;
    /**
     * Id of this annotation, in the form of a GUID.
     */
    id?: string;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The layer this annotation is for.
     */
    layerId?: string;
    layerSummary?: {
      allowedCharacterCount?: number;
      limitType?: string;
      remainingCharacterCount?: number;
    };
    /**
     * Pages that this annotation spans.
     */
    pageIds?: string[];
    /**
     * Excerpt from the volume.
     */
    selectedText?: string;
    /**
     * URL to this resource.
     */
    selfLink?: string;
    /**
     * Timestamp for the last time this annotation was modified.
     */
    updated?: string;
    /**
     * The volume that this annotation belongs to.
     */
    volumeId?: string;
  }
  export interface Schema$Annotationdata {
    /**
     * The type of annotation this data is for.
     */
    annotationType?: string;
    data?: any;
    /**
     * Base64 encoded data for this annotation data.
     */
    encoded_data?: string;
    /**
     * Unique id for this annotation data.
     */
    id?: string;
    /**
     * Resource Type
     */
    kind?: string;
    /**
     * The Layer id for this data. *
     */
    layerId?: string;
    /**
     * URL for this resource. *
     */
    selfLink?: string;
    /**
     * Timestamp for the last time this data was updated. (RFC 3339 UTC
     * date-time format).
     */
    updated?: string;
    /**
     * The volume id for this data. *
     */
    volumeId?: string;
  }
  export interface Schema$Annotations {
    /**
     * A list of annotations.
     */
    items?: Schema$Annotation[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Token to pass in for pagination for the next page. This will not be
     * present if this request does not have more results.
     */
    nextPageToken?: string;
    /**
     * Total number of annotations found. This may be greater than the number of
     * notes returned in this response if results have been paginated.
     */
    totalItems?: number;
  }
  export interface Schema$Annotationsdata {
    /**
     * A list of Annotation Data.
     */
    items?: Schema$Annotationdata[];
    /**
     * Resource type
     */
    kind?: string;
    /**
     * Token to pass in for pagination for the next page. This will not be
     * present if this request does not have more results.
     */
    nextPageToken?: string;
    /**
     * The total number of volume annotations found.
     */
    totalItems?: number;
  }
  export interface Schema$AnnotationsSummary {
    kind?: string;
    layers?: Array<{
      allowedCharacterCount?: number;
      layerId?: string;
      limitType?: string;
      remainingCharacterCount?: number;
      updated?: string;
    }>;
  }
  export interface Schema$BooksAnnotationsRange {
    /**
     * The offset from the ending position.
     */
    endOffset?: string;
    /**
     * The ending position for the range.
     */
    endPosition?: string;
    /**
     * The offset from the starting position.
     */
    startOffset?: string;
    /**
     * The starting position for the range.
     */
    startPosition?: string;
  }
  export interface Schema$BooksCloudloadingResource {
    author?: string;
    processingState?: string;
    title?: string;
    volumeId?: string;
  }
  export interface Schema$Bookshelf {
    /**
     * Whether this bookshelf is PUBLIC or PRIVATE.
     */
    access?: string;
    /**
     * Created time for this bookshelf (formatted UTC timestamp with millisecond
     * resolution).
     */
    created?: string;
    /**
     * Description of this bookshelf.
     */
    description?: string;
    /**
     * Id of this bookshelf, only unique by user.
     */
    id?: number;
    /**
     * Resource type for bookshelf metadata.
     */
    kind?: string;
    /**
     * URL to this resource.
     */
    selfLink?: string;
    /**
     * Title of this bookshelf.
     */
    title?: string;
    /**
     * Last modified time of this bookshelf (formatted UTC timestamp with
     * millisecond resolution).
     */
    updated?: string;
    /**
     * Number of volumes in this bookshelf.
     */
    volumeCount?: number;
    /**
     * Last time a volume was added or removed from this bookshelf (formatted
     * UTC timestamp with millisecond resolution).
     */
    volumesLastUpdated?: string;
  }
  export interface Schema$Bookshelves {
    /**
     * A list of bookshelves.
     */
    items?: Schema$Bookshelf[];
    /**
     * Resource type.
     */
    kind?: string;
  }
  export interface Schema$BooksVolumesRecommendedRateResponse {
    consistency_token?: string;
  }
  export interface Schema$Category {
    /**
     * A list of onboarding categories.
     */
    items?: Array<{badgeUrl?: string; categoryId?: string; name?: string;}>;
    /**
     * Resource type.
     */
    kind?: string;
  }
  export interface Schema$ConcurrentAccessRestriction {
    /**
     * Whether access is granted for this (user, device, volume).
     */
    deviceAllowed?: boolean;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The maximum number of concurrent access licenses for this volume.
     */
    maxConcurrentDevices?: number;
    /**
     * Error/warning message.
     */
    message?: string;
    /**
     * Client nonce for verification. Download access and client-validation
     * only.
     */
    nonce?: string;
    /**
     * Error/warning reason code.
     */
    reasonCode?: string;
    /**
     * Whether this volume has any concurrent access restrictions.
     */
    restricted?: boolean;
    /**
     * Response signature.
     */
    signature?: string;
    /**
     * Client app identifier for verification. Download access and
     * client-validation only.
     */
    source?: string;
    /**
     * Time in seconds for license auto-expiration.
     */
    timeWindowSeconds?: number;
    /**
     * Identifies the volume for which this entry applies.
     */
    volumeId?: string;
  }
  export interface Schema$Dictlayerdata {
    common?: {title?: string;};
    dict?: {
      source?: {attribution?: string; url?: string;};
      words?: Array<{
        derivatives?: Array<
            {source?: {attribution?: string; url?: string;}; text?: string;}>;
        examples?: Array<
            {source?: {attribution?: string; url?: string;}; text?: string;}>;
        senses?: Array<{
          conjugations?: Array<{type?: string; value?: string;}>;
          definitions?: Array<{
            definition?: string;
            examples?: Array<{
              source?: {attribution?: string; url?: string;};
              text?: string;
            }>;
          }>;
          partOfSpeech?: string;
          pronunciation?: string;
          pronunciationUrl?: string;
          source?: {attribution?: string; url?: string;};
          syllabification?: string;
          synonyms?: Array<{
            source?: {attribution?: string; url?: string;};
            text?: string;
          }>;
        }>;
        source?: {attribution?: string; url?: string;};
      }>;
    };
    kind?: string;
  }
  export interface Schema$Discoveryclusters {
    clusters?: Array<{
      banner_with_content_container?: {
        fillColorArgb?: string;
        imageUrl?: string;
        maskColorArgb?: string;
        moreButtonText?: string;
        moreButtonUrl?: string;
        textColorArgb?: string;
      };
      subTitle?: string;
      title?: string;
      totalVolumes?: number;
      uid?: string;
      volumes?: Schema$Volume[];
    }>;
    /**
     * Resorce type.
     */
    kind?: string;
    totalClusters?: number;
  }
  export interface Schema$DownloadAccesses {
    /**
     * A list of download access responses.
     */
    downloadAccessList?: Schema$DownloadAccessRestriction[];
    /**
     * Resource type.
     */
    kind?: string;
  }
  export interface Schema$DownloadAccessRestriction {
    /**
     * If restricted, whether access is granted for this (user, device, volume).
     */
    deviceAllowed?: boolean;
    /**
     * If restricted, the number of content download licenses already acquired
     * (including the requesting client, if licensed).
     */
    downloadsAcquired?: number;
    /**
     * If deviceAllowed, whether access was just acquired with this request.
     */
    justAcquired?: boolean;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * If restricted, the maximum number of content download licenses for this
     * volume.
     */
    maxDownloadDevices?: number;
    /**
     * Error/warning message.
     */
    message?: string;
    /**
     * Client nonce for verification. Download access and client-validation
     * only.
     */
    nonce?: string;
    /**
     * Error/warning reason code. Additional codes may be added in the future. 0
     * OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200
     * WARNING_USED_LAST_ACCESS
     */
    reasonCode?: string;
    /**
     * Whether this volume has any download access restrictions.
     */
    restricted?: boolean;
    /**
     * Response signature.
     */
    signature?: string;
    /**
     * Client app identifier for verification. Download access and
     * client-validation only.
     */
    source?: string;
    /**
     * Identifies the volume for which this entry applies.
     */
    volumeId?: string;
  }
  export interface Schema$FamilyInfo {
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Family membership info of the user that made the request.
     */
    membership?: {
      acquirePermission?: string;
      ageGroup?: string;
      allowedMaturityRating?: string;
      isInFamily?: boolean;
      role?: string;
    };
  }
  export interface Schema$Geolayerdata {
    common?: {
      lang?: string;
      previewImageUrl?: string;
      snippet?: string;
      snippetUrl?: string;
      title?: string;
    };
    geo?: {
      boundary?: Array<Array<{latitude?: number; longitude?: number;}>>;
      cachePolicy?: string;
      countryCode?: string;
      latitude?: number;
      longitude?: number;
      mapType?: string;
      viewport?: {
        hi?: {latitude?: number; longitude?: number;};
        lo?: {latitude?: number; longitude?: number;};
      };
      zoom?: number;
    };
    kind?: string;
  }
  export interface Schema$Layersummaries {
    /**
     * A list of layer summary items.
     */
    items?: Schema$Layersummary[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The total number of layer summaries found.
     */
    totalItems?: number;
  }
  export interface Schema$Layersummary {
    /**
     * The number of annotations for this layer.
     */
    annotationCount?: number;
    /**
     * Link to get data for this annotation.
     */
    annotationsDataLink?: string;
    /**
     * The link to get the annotations for this layer.
     */
    annotationsLink?: string;
    /**
     * The list of annotation types contained for this layer.
     */
    annotationTypes?: string[];
    /**
     * The content version this resource is for.
     */
    contentVersion?: string;
    /**
     * The number of data items for this layer.
     */
    dataCount?: number;
    /**
     * Unique id of this layer summary.
     */
    id?: string;
    /**
     * Resource Type
     */
    kind?: string;
    /**
     * The layer id for this summary.
     */
    layerId?: string;
    /**
     * URL to this resource.
     */
    selfLink?: string;
    /**
     * Timestamp for the last time an item in this layer was updated. (RFC 3339
     * UTC date-time format).
     */
    updated?: string;
    /**
     * The current version of this layer&#39;s volume annotations. Note that
     * this version applies only to the data in the
     * books.layers.volumeAnnotations.* responses. The actual annotation data is
     * versioned separately.
     */
    volumeAnnotationsVersion?: string;
    /**
     * The volume id this resource is for.
     */
    volumeId?: string;
  }
  export interface Schema$Metadata {
    /**
     * A list of offline dictionary metadata.
     */
    items?: Array<{
      download_url?: string;
      encrypted_key?: string;
      language?: string;
      size?: string;
      version?: string;
    }>;
    /**
     * Resource type.
     */
    kind?: string;
  }
  export interface Schema$Notification {
    body?: string;
    /**
     * The list of crm experiment ids.
     */
    crmExperimentIds?: string[];
    doc_id?: string;
    doc_type?: string;
    dont_show_notification?: boolean;
    iconUrl?: string;
    is_document_mature?: boolean;
    /**
     * Resource type.
     */
    kind?: string;
    notificationGroup?: string;
    notification_type?: string;
    pcampaign_id?: string;
    reason?: string;
    show_notification_settings_action?: boolean;
    targetUrl?: string;
    timeToExpireMs?: string;
    title?: string;
  }
  export interface Schema$Offers {
    /**
     * A list of offers.
     */
    items?: Array<{
      artUrl?: string;
      gservicesKey?: string;
      id?: string;
      items?: Array<{
        author?: string;
        canonicalVolumeLink?: string;
        coverUrl?: string;
        description?: string;
        title?: string;
        volumeId?: string;
      }>;
    }>;
    /**
     * Resource type.
     */
    kind?: string;
  }
  export interface Schema$ReadingPosition {
    /**
     * Position in an EPUB as a CFI.
     */
    epubCfiPosition?: string;
    /**
     * Position in a volume for image-based content.
     */
    gbImagePosition?: string;
    /**
     * Position in a volume for text-based content.
     */
    gbTextPosition?: string;
    /**
     * Resource type for a reading position.
     */
    kind?: string;
    /**
     * Position in a PDF file.
     */
    pdfPosition?: string;
    /**
     * Timestamp when this reading position was last updated (formatted UTC
     * timestamp with millisecond resolution).
     */
    updated?: string;
    /**
     * Volume id associated with this reading position.
     */
    volumeId?: string;
  }
  export interface Schema$RequestAccess {
    /**
     * A concurrent access response.
     */
    concurrentAccess?: Schema$ConcurrentAccessRestriction;
    /**
     * A download access response.
     */
    downloadAccess?: Schema$DownloadAccessRestriction;
    /**
     * Resource type.
     */
    kind?: string;
  }
  export interface Schema$Review {
    /**
     * Author of this review.
     */
    author?: {displayName?: string;};
    /**
     * Review text.
     */
    content?: string;
    /**
     * Date of this review.
     */
    date?: string;
    /**
     * URL for the full review text, for reviews gathered from the web.
     */
    fullTextUrl?: string;
    /**
     * Resource type for a review.
     */
    kind?: string;
    /**
     * Star rating for this review. Possible values are ONE, TWO, THREE, FOUR,
     * FIVE or NOT_RATED.
     */
    rating?: string;
    /**
     * Information regarding the source of this review, when the review is not
     * from a Google Books user.
     */
    source?: {description?: string; extraDescription?: string; url?: string;};
    /**
     * Title for this review.
     */
    title?: string;
    /**
     * Source type for this review. Possible values are EDITORIAL, WEB_USER or
     * GOOGLE_USER.
     */
    type?: string;
    /**
     * Volume that this review is for.
     */
    volumeId?: string;
  }
  export interface Schema$Series {
    /**
     * Resource type.
     */
    kind?: string;
    series?: Array<{
      bannerImageUrl?: string;
      imageUrl?: string;
      seriesId?: string;
      seriesType?: string;
      title?: string;
    }>;
  }
  export interface Schema$Seriesmembership {
    /**
     * Resorce type.
     */
    kind?: string;
    member?: Schema$Volume[];
    nextPageToken?: string;
  }
  export interface Schema$Usersettings {
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * User settings in sub-objects, each for different purposes.
     */
    notesExport?: {folderName?: string; isEnabled?: boolean;};
    notification?: {
      matchMyInterests?: {opted_state?: string;};
      moreFromAuthors?: {opted_state?: string;};
      moreFromSeries?: {opted_state?: string;};
      priceDrop?: {opted_state?: string;};
      rewardExpirations?: {opted_state?: string;};
    };
  }
  export interface Schema$Volume {
    /**
     * Any information about a volume related to reading or obtaining that
     * volume text. This information can depend on country (books may be public
     * domain in one country but not in another, e.g.).
     */
    accessInfo?: {
      accessViewStatus?: string;
      country?: string;
      downloadAccess?: Schema$DownloadAccessRestriction;
      driveImportedContentLink?: string;
      embeddable?: boolean;
      epub?: {
        acsTokenLink?: string;
        downloadLink?: string;
        isAvailable?: boolean;
      };
      explicitOfflineLicenseManagement?: boolean;
      pdf?: {
        acsTokenLink?: string;
        downloadLink?: string;
        isAvailable?: boolean;
      };
      publicDomain?: boolean;
      quoteSharingAllowed?: boolean;
      textToSpeechPermission?: string;
      viewOrderUrl?: string;
      viewability?: string;
      webReaderLink?: string;
    };
    /**
     * Opaque identifier for a specific version of a volume resource. (In LITE
     * projection)
     */
    etag?: string;
    /**
     * Unique identifier for a volume. (In LITE projection.)
     */
    id?: string;
    /**
     * Resource type for a volume. (In LITE projection.)
     */
    kind?: string;
    /**
     * What layers exist in this volume and high level information about them.
     */
    layerInfo?: {
      layers?: Array<{layerId?: string; volumeAnnotationsVersion?: string;}>;
    };
    /**
     * Recommendation related information for this volume.
     */
    recommendedInfo?: {explanation?: string;};
    /**
     * Any information about a volume related to the eBookstore and/or
     * purchaseability. This information can depend on the country where the
     * request originates from (i.e. books may not be for sale in certain
     * countries).
     */
    saleInfo?: {
      buyLink?: string;
      country?: string;
      isEbook?: boolean;
      listPrice?: {amount?: number; currencyCode?: string;};
      offers?: Array<{
        finskyOfferType?: number;
        giftable?: boolean;
        listPrice?: {amountInMicros?: number; currencyCode?: string;};
        rentalDuration?: {count?: number; unit?: string;};
        retailPrice?: {amountInMicros?: number; currencyCode?: string;};
      }>;
      onSaleDate?: string;
      retailPrice?: {amount?: number; currencyCode?: string;};
      saleability?: string;
    };
    /**
     * Search result information related to this volume.
     */
    searchInfo?: {textSnippet?: string;};
    /**
     * URL to this resource. (In LITE projection.)
     */
    selfLink?: string;
    /**
     * User specific information related to this volume. (e.g. page this user
     * last read or whether they purchased this book)
     */
    userInfo?: {
      acquiredTime?: string;
      acquisitionType?: number;
      copy?: {
        allowedCharacterCount?: number;
        limitType?: string;
        remainingCharacterCount?: number;
        updated?: string;
      };
      entitlementType?: number;
      familySharing?: {
        familyRole?: string;
        isSharingAllowed?: boolean;
        isSharingDisabledByFop?: boolean;
      };
      isFamilySharedFromUser?: boolean;
      isFamilySharedToUser?: boolean;
      isFamilySharingAllowed?: boolean;
      isFamilySharingDisabledByFop?: boolean;
      isInMyBooks?: boolean;
      isPreordered?: boolean;
      isPurchased?: boolean;
      isUploaded?: boolean;
      readingPosition?: Schema$ReadingPosition;
      rentalPeriod?: {endUtcSec?: string; startUtcSec?: string;};
      rentalState?: string;
      review?: Schema$Review;
      updated?: string;
      userUploadedVolumeInfo?: {processingState?: string;};
    };
    /**
     * General volume information.
     */
    volumeInfo?: {
      allowAnonLogging?: boolean;
      authors?: string[];
      averageRating?: number;
      canonicalVolumeLink?: string;
      categories?: string[];
      comicsContent?: boolean;
      contentVersion?: string;
      description?: string;
      dimensions?: {height?: string; thickness?: string; width?: string;};
      imageLinks?: {
        extraLarge?: string;
        large?: string;
        medium?: string;
        small?: string;
        smallThumbnail?: string;
        thumbnail?: string;
      };
      industryIdentifiers?: Array<{identifier?: string; type?: string;}>;
      infoLink?: string;
      language?: string;
      mainCategory?: string;
      maturityRating?: string;
      pageCount?: number;
      panelizationSummary?: {
        containsEpubBubbles?: boolean;
        containsImageBubbles?: boolean;
        epubBubbleVersion?: string;
        imageBubbleVersion?: string;
      };
      previewLink?: string;
      printType?: string;
      printedPageCount?: number;
      publishedDate?: string;
      publisher?: string;
      ratingsCount?: number;
      readingModes?: any;
      samplePageCount?: number;
      seriesInfo?: Schema$Volumeseriesinfo;
      subtitle?: string;
      title?: string;
    };
  }
  export interface Schema$Volume2 {
    /**
     * A list of volumes.
     */
    items?: Schema$Volume[];
    /**
     * Resource type.
     */
    kind?: string;
    nextPageToken?: string;
  }
  export interface Schema$Volumeannotation {
    /**
     * The annotation data id for this volume annotation.
     */
    annotationDataId?: string;
    /**
     * Link to get data for this annotation.
     */
    annotationDataLink?: string;
    /**
     * The type of annotation this is.
     */
    annotationType?: string;
    /**
     * The content ranges to identify the selected text.
     */
    contentRanges?: {
      cfiRange?: Schema$BooksAnnotationsRange;
      contentVersion?: string;
      gbImageRange?: Schema$BooksAnnotationsRange;
      gbTextRange?: Schema$BooksAnnotationsRange;
    };
    /**
     * Data for this annotation.
     */
    data?: string;
    /**
     * Indicates that this annotation is deleted.
     */
    deleted?: boolean;
    /**
     * Unique id of this volume annotation.
     */
    id?: string;
    /**
     * Resource Type
     */
    kind?: string;
    /**
     * The Layer this annotation is for.
     */
    layerId?: string;
    /**
     * Pages the annotation spans.
     */
    pageIds?: string[];
    /**
     * Excerpt from the volume.
     */
    selectedText?: string;
    /**
     * URL to this resource.
     */
    selfLink?: string;
    /**
     * Timestamp for the last time this anntoation was updated. (RFC 3339 UTC
     * date-time format).
     */
    updated?: string;
    /**
     * The Volume this annotation is for.
     */
    volumeId?: string;
  }
  export interface Schema$Volumeannotations {
    /**
     * A list of volume annotations.
     */
    items?: Schema$Volumeannotation[];
    /**
     * Resource type
     */
    kind?: string;
    /**
     * Token to pass in for pagination for the next page. This will not be
     * present if this request does not have more results.
     */
    nextPageToken?: string;
    /**
     * The total number of volume annotations found.
     */
    totalItems?: number;
    /**
     * The version string for all of the volume annotations in this layer (not
     * just the ones in this response). Note: the version string doesn&#39;t
     * apply to the annotation data, just the information in this response (e.g.
     * the location of annotations in the book).
     */
    version?: string;
  }
  export interface Schema$Volumes {
    /**
     * A list of volumes.
     */
    items?: Schema$Volume[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Total number of volumes found. This might be greater than the number of
     * volumes returned in this response if results have been paginated.
     */
    totalItems?: number;
  }
  export interface Schema$Volumeseriesinfo {
    /**
     * The display number string. This should be used only for display purposes
     * and the actual sequence should be inferred from the below orderNumber.
     */
    bookDisplayNumber?: string;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Short book title in the context of the series.
     */
    shortSeriesBookTitle?: string;
    volumeSeries?: Array<{
      issue?: Array<{issueDisplayNumber?: string; issueOrderNumber?: number;}>;
      orderNumber?: number;
      seriesBookType?: string;
      seriesId?: string;
    }>;
  }


  export class Resource$Bookshelves {
    context: APIRequestContext;
    volumes: Resource$Bookshelves$Volumes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.volumes = new Resource$Bookshelves$Volumes(this.context);
    }


    /**
     * books.bookshelves.get
     * @desc Retrieves metadata for a specific bookshelf for the specified user.
     * @alias books.bookshelves.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf to retrieve.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.userId ID of user for whom to retrieve bookshelves.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Bookshelves$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Bookshelf>;
    get(params: Params$Resource$Bookshelves$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Bookshelf>,
        callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(params: Params$Resource$Bookshelves$Get,
        callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(paramsOrCallback?: Params$Resource$Bookshelves$Get|
        BodyResponseCallback<Schema$Bookshelf>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Bookshelf>,
        callback?: BodyResponseCallback<Schema$Bookshelf>):
        void|GaxiosPromise<Schema$Bookshelf> {
      let params = (paramsOrCallback || {}) as Params$Resource$Bookshelves$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bookshelves$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/users/{userId}/bookshelves/{shelf}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId', 'shelf'],
        pathParams: ['shelf', 'userId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Bookshelf>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bookshelf>(parameters);
      }
    }


    /**
     * books.bookshelves.list
     * @desc Retrieves a list of public bookshelves for the specified user.
     * @alias books.bookshelves.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.userId ID of user for whom to retrieve bookshelves.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Bookshelves$List, options?: MethodOptions):
        GaxiosPromise<Schema$Bookshelves>;
    list(
        params: Params$Resource$Bookshelves$List,
        options: MethodOptions|BodyResponseCallback<Schema$Bookshelves>,
        callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(
        params: Params$Resource$Bookshelves$List,
        callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(
        paramsOrCallback?: Params$Resource$Bookshelves$List|
        BodyResponseCallback<Schema$Bookshelves>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Bookshelves>,
        callback?: BodyResponseCallback<Schema$Bookshelves>):
        void|GaxiosPromise<Schema$Bookshelves> {
      let params = (paramsOrCallback || {}) as Params$Resource$Bookshelves$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bookshelves$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/users/{userId}/bookshelves')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Bookshelves>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bookshelves>(parameters);
      }
    }
  }

  export interface Params$Resource$Bookshelves$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of bookshelf to retrieve.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of user for whom to retrieve bookshelves.
     */
    userId?: string;
  }
  export interface Params$Resource$Bookshelves$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of user for whom to retrieve bookshelves.
     */
    userId?: string;
  }

  export class Resource$Bookshelves$Volumes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.bookshelves.volumes.list
     * @desc Retrieves volumes in a specific bookshelf for the specified user.
     * @alias books.bookshelves.volumes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string} params.shelf ID of bookshelf to retrieve volumes.
     * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
     * @param {string} params.userId ID of user for whom to retrieve bookshelf volumes.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bookshelves$Volumes$List,
        options?: MethodOptions): GaxiosPromise<Schema$Volumes>;
    list(
        params: Params$Resource$Bookshelves$Volumes$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        params: Params$Resource$Bookshelves$Volumes$List,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        paramsOrCallback?: Params$Resource$Bookshelves$Volumes$List|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Bookshelves$Volumes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bookshelves$Volumes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/books/v1/users/{userId}/bookshelves/{shelf}/volumes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId', 'shelf'],
        pathParams: ['shelf', 'userId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Bookshelves$Volumes$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * ID of bookshelf to retrieve volumes.
     */
    shelf?: string;
    /**
     * Set to true to show pre-ordered books. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first element to return (starts at 0)
     */
    startIndex?: number;
    /**
     * ID of user for whom to retrieve bookshelf volumes.
     */
    userId?: string;
  }



  export class Resource$Cloudloading {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.cloudloading.addBook
     * @alias books.cloudloading.addBook
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.drive_document_id A drive document id. The upload_client_token must not be set.
     * @param {string=} params.mime_type The document MIME type. It can be set only if the drive_document_id is set.
     * @param {string=} params.name The document name. It can be set only if the drive_document_id is set.
     * @param {string=} params.upload_client_token
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addBook(
        params?: Params$Resource$Cloudloading$Addbook, options?: MethodOptions):
        GaxiosPromise<Schema$BooksCloudloadingResource>;
    addBook(
        params: Params$Resource$Cloudloading$Addbook,
        options: MethodOptions|
        BodyResponseCallback<Schema$BooksCloudloadingResource>,
        callback: BodyResponseCallback<Schema$BooksCloudloadingResource>): void;
    addBook(
        params: Params$Resource$Cloudloading$Addbook,
        callback: BodyResponseCallback<Schema$BooksCloudloadingResource>): void;
    addBook(callback: BodyResponseCallback<Schema$BooksCloudloadingResource>):
        void;
    addBook(
        paramsOrCallback?: Params$Resource$Cloudloading$Addbook|
        BodyResponseCallback<Schema$BooksCloudloadingResource>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BooksCloudloadingResource>,
        callback?: BodyResponseCallback<Schema$BooksCloudloadingResource>):
        void|GaxiosPromise<Schema$BooksCloudloadingResource> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Cloudloading$Addbook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cloudloading$Addbook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/cloudloading/addBook')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$BooksCloudloadingResource>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BooksCloudloadingResource>(parameters);
      }
    }


    /**
     * books.cloudloading.deleteBook
     * @desc Remove the book and its contents
     * @alias books.cloudloading.deleteBook
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.volumeId The id of the book to be removed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteBook(
        params?: Params$Resource$Cloudloading$Deletebook,
        options?: MethodOptions): GaxiosPromise<void>;
    deleteBook(
        params: Params$Resource$Cloudloading$Deletebook,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    deleteBook(
        params: Params$Resource$Cloudloading$Deletebook,
        callback: BodyResponseCallback<void>): void;
    deleteBook(callback: BodyResponseCallback<void>): void;
    deleteBook(
        paramsOrCallback?: Params$Resource$Cloudloading$Deletebook|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Cloudloading$Deletebook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cloudloading$Deletebook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/cloudloading/deleteBook')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['volumeId'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.cloudloading.updateBook
     * @alias books.cloudloading.updateBook
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BooksCloudloadingResource} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateBook(
        params?: Params$Resource$Cloudloading$Updatebook,
        options?: MethodOptions):
        GaxiosPromise<Schema$BooksCloudloadingResource>;
    updateBook(
        params: Params$Resource$Cloudloading$Updatebook,
        options: MethodOptions|
        BodyResponseCallback<Schema$BooksCloudloadingResource>,
        callback: BodyResponseCallback<Schema$BooksCloudloadingResource>): void;
    updateBook(
        params: Params$Resource$Cloudloading$Updatebook,
        callback: BodyResponseCallback<Schema$BooksCloudloadingResource>): void;
    updateBook(
        callback: BodyResponseCallback<Schema$BooksCloudloadingResource>): void;
    updateBook(
        paramsOrCallback?: Params$Resource$Cloudloading$Updatebook|
        BodyResponseCallback<Schema$BooksCloudloadingResource>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BooksCloudloadingResource>,
        callback?: BodyResponseCallback<Schema$BooksCloudloadingResource>):
        void|GaxiosPromise<Schema$BooksCloudloadingResource> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Cloudloading$Updatebook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cloudloading$Updatebook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/cloudloading/updateBook')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$BooksCloudloadingResource>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BooksCloudloadingResource>(parameters);
      }
    }
  }

  export interface Params$Resource$Cloudloading$Addbook extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A drive document id. The upload_client_token must not be set.
     */
    drive_document_id?: string;
    /**
     * The document MIME type. It can be set only if the drive_document_id is
     * set.
     */
    mime_type?: string;
    /**
     * The document name. It can be set only if the drive_document_id is set.
     */
    name?: string;
    /**
     *
     */
    upload_client_token?: string;
  }
  export interface Params$Resource$Cloudloading$Deletebook extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The id of the book to be removed.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Cloudloading$Updatebook extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$BooksCloudloadingResource;
  }


  export class Resource$Dictionary {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.dictionary.listOfflineMetadata
     * @desc Returns a list of offline dictionary metadata available
     * @alias books.dictionary.listOfflineMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to request the data.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOfflineMetadata(
        params?: Params$Resource$Dictionary$Listofflinemetadata,
        options?: MethodOptions): GaxiosPromise<Schema$Metadata>;
    listOfflineMetadata(
        params: Params$Resource$Dictionary$Listofflinemetadata,
        options: MethodOptions|BodyResponseCallback<Schema$Metadata>,
        callback: BodyResponseCallback<Schema$Metadata>): void;
    listOfflineMetadata(
        params: Params$Resource$Dictionary$Listofflinemetadata,
        callback: BodyResponseCallback<Schema$Metadata>): void;
    listOfflineMetadata(callback: BodyResponseCallback<Schema$Metadata>): void;
    listOfflineMetadata(
        paramsOrCallback?: Params$Resource$Dictionary$Listofflinemetadata|
        BodyResponseCallback<Schema$Metadata>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Metadata>,
        callback?: BodyResponseCallback<Schema$Metadata>):
        void|GaxiosPromise<Schema$Metadata> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Dictionary$Listofflinemetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dictionary$Listofflinemetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/dictionary/listOfflineMetadata')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['cpksver'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Metadata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Metadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Dictionary$Listofflinemetadata extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The device/version ID from which to request the data.
     */
    cpksver?: string;
  }


  export class Resource$Familysharing {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.familysharing.getFamilyInfo
     * @desc Gets information regarding the family that the user is part of.
     * @alias books.familysharing.getFamilyInfo
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getFamilyInfo(
        params?: Params$Resource$Familysharing$Getfamilyinfo,
        options?: MethodOptions): GaxiosPromise<Schema$FamilyInfo>;
    getFamilyInfo(
        params: Params$Resource$Familysharing$Getfamilyinfo,
        options: MethodOptions|BodyResponseCallback<Schema$FamilyInfo>,
        callback: BodyResponseCallback<Schema$FamilyInfo>): void;
    getFamilyInfo(
        params: Params$Resource$Familysharing$Getfamilyinfo,
        callback: BodyResponseCallback<Schema$FamilyInfo>): void;
    getFamilyInfo(callback: BodyResponseCallback<Schema$FamilyInfo>): void;
    getFamilyInfo(
        paramsOrCallback?: Params$Resource$Familysharing$Getfamilyinfo|
        BodyResponseCallback<Schema$FamilyInfo>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FamilyInfo>,
        callback?: BodyResponseCallback<Schema$FamilyInfo>):
        void|GaxiosPromise<Schema$FamilyInfo> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Familysharing$Getfamilyinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Familysharing$Getfamilyinfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/familysharing/getFamilyInfo')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$FamilyInfo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FamilyInfo>(parameters);
      }
    }


    /**
     * books.familysharing.share
     * @desc Initiates sharing of the content with the user's family. Empty
     * response indicates success.
     * @alias books.familysharing.share
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.docId The docid to share.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId The volume to share.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    share(
        params?: Params$Resource$Familysharing$Share,
        options?: MethodOptions): GaxiosPromise<void>;
    share(
        params: Params$Resource$Familysharing$Share,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    share(
        params: Params$Resource$Familysharing$Share,
        callback: BodyResponseCallback<void>): void;
    share(callback: BodyResponseCallback<void>): void;
    share(
        paramsOrCallback?: Params$Resource$Familysharing$Share|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Familysharing$Share;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Familysharing$Share;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/familysharing/share')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.familysharing.unshare
     * @desc Initiates revoking content that has already been shared with the
     * user's family. Empty response indicates success.
     * @alias books.familysharing.unshare
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.docId The docid to unshare.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId The volume to unshare.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unshare(
        params?: Params$Resource$Familysharing$Unshare,
        options?: MethodOptions): GaxiosPromise<void>;
    unshare(
        params: Params$Resource$Familysharing$Unshare,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    unshare(
        params: Params$Resource$Familysharing$Unshare,
        callback: BodyResponseCallback<void>): void;
    unshare(callback: BodyResponseCallback<void>): void;
    unshare(
        paramsOrCallback?: Params$Resource$Familysharing$Unshare|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Familysharing$Unshare;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Familysharing$Unshare;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/familysharing/unshare')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Familysharing$Getfamilyinfo extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Familysharing$Share extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The docid to share.
     */
    docId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to share.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Familysharing$Unshare extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The docid to unshare.
     */
    docId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to unshare.
     */
    volumeId?: string;
  }


  export class Resource$Layers {
    context: APIRequestContext;
    annotationData: Resource$Layers$Annotationdata;
    volumeAnnotations: Resource$Layers$Volumeannotations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotationData = new Resource$Layers$Annotationdata(this.context);
      this.volumeAnnotations =
          new Resource$Layers$Volumeannotations(this.context);
    }


    /**
     * books.layers.get
     * @desc Gets the layer summary for a volume.
     * @alias books.layers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.summaryId The ID for the layer to get the summary for.
     * @param {string} params.volumeId The volume to retrieve layers for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Layers$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Layersummary>;
    get(params: Params$Resource$Layers$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Layersummary>,
        callback: BodyResponseCallback<Schema$Layersummary>): void;
    get(params: Params$Resource$Layers$Get,
        callback: BodyResponseCallback<Schema$Layersummary>): void;
    get(callback: BodyResponseCallback<Schema$Layersummary>): void;
    get(paramsOrCallback?: Params$Resource$Layers$Get|
        BodyResponseCallback<Schema$Layersummary>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Layersummary>,
        callback?: BodyResponseCallback<Schema$Layersummary>):
        void|GaxiosPromise<Schema$Layersummary> {
      let params = (paramsOrCallback || {}) as Params$Resource$Layers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/books/v1/volumes/{volumeId}/layersummary/{summaryId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId', 'summaryId'],
        pathParams: ['summaryId', 'volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Layersummary>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Layersummary>(parameters);
      }
    }


    /**
     * books.layers.list
     * @desc List the layer summaries for a volume.
     * @alias books.layers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to retrieve layers for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Layers$List, options?: MethodOptions):
        GaxiosPromise<Schema$Layersummaries>;
    list(
        params: Params$Resource$Layers$List,
        options: MethodOptions|BodyResponseCallback<Schema$Layersummaries>,
        callback: BodyResponseCallback<Schema$Layersummaries>): void;
    list(
        params: Params$Resource$Layers$List,
        callback: BodyResponseCallback<Schema$Layersummaries>): void;
    list(callback: BodyResponseCallback<Schema$Layersummaries>): void;
    list(
        paramsOrCallback?: Params$Resource$Layers$List|
        BodyResponseCallback<Schema$Layersummaries>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Layersummaries>,
        callback?: BodyResponseCallback<Schema$Layersummaries>):
        void|GaxiosPromise<Schema$Layersummaries> {
      let params = (paramsOrCallback || {}) as Params$Resource$Layers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/{volumeId}/layersummary')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Layersummaries>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Layersummaries>(parameters);
      }
    }
  }

  export interface Params$Resource$Layers$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The ID for the layer to get the summary for.
     */
    summaryId?: string;
    /**
     * The volume to retrieve layers for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Layers$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to retrieve layers for.
     */
    volumeId?: string;
  }

  export class Resource$Layers$Annotationdata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.layers.annotationData.get
     * @desc Gets the annotation data.
     * @alias books.layers.annotationData.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
     * @param {string} params.annotationDataId The ID of the annotation data to retrieve.
     * @param {string} params.contentVersion The content version for the volume you are trying to retrieve.
     * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} params.layerId The ID for the layer to get the annotations.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer=} params.scale The requested scale for the image.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to retrieve annotations for.
     * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Layers$Annotationdata$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Annotationdata>;
    get(params: Params$Resource$Layers$Annotationdata$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Annotationdata>,
        callback: BodyResponseCallback<Schema$Annotationdata>): void;
    get(params: Params$Resource$Layers$Annotationdata$Get,
        callback: BodyResponseCallback<Schema$Annotationdata>): void;
    get(callback: BodyResponseCallback<Schema$Annotationdata>): void;
    get(paramsOrCallback?: Params$Resource$Layers$Annotationdata$Get|
        BodyResponseCallback<Schema$Annotationdata>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotationdata>,
        callback?: BodyResponseCallback<Schema$Annotationdata>):
        void|GaxiosPromise<Schema$Annotationdata> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Layers$Annotationdata$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Annotationdata$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams:
            ['volumeId', 'layerId', 'annotationDataId', 'contentVersion'],
        pathParams: ['annotationDataId', 'layerId', 'volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotationdata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotationdata>(parameters);
      }
    }


    /**
     * books.layers.annotationData.list
     * @desc Gets the annotation data for a volume and layer.
     * @alias books.layers.annotationData.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.annotationDataId The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
     * @param {string} params.contentVersion The content version for the requested volume.
     * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} params.layerId The ID for the layer to get the annotation data.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {integer=} params.scale The requested scale for the image.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} params.volumeId The volume to retrieve annotation data for.
     * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Layers$Annotationdata$List,
        options?: MethodOptions): GaxiosPromise<Schema$Annotationsdata>;
    list(
        params: Params$Resource$Layers$Annotationdata$List,
        options: MethodOptions|BodyResponseCallback<Schema$Annotationsdata>,
        callback: BodyResponseCallback<Schema$Annotationsdata>): void;
    list(
        params: Params$Resource$Layers$Annotationdata$List,
        callback: BodyResponseCallback<Schema$Annotationsdata>): void;
    list(callback: BodyResponseCallback<Schema$Annotationsdata>): void;
    list(
        paramsOrCallback?: Params$Resource$Layers$Annotationdata$List|
        BodyResponseCallback<Schema$Annotationsdata>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotationsdata>,
        callback?: BodyResponseCallback<Schema$Annotationsdata>):
        void|GaxiosPromise<Schema$Annotationsdata> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Layers$Annotationdata$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Annotationdata$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/books/v1/volumes/{volumeId}/layers/{layerId}/data')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId', 'layerId', 'contentVersion'],
        pathParams: ['layerId', 'volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotationsdata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotationsdata>(parameters);
      }
    }
  }

  export interface Params$Resource$Layers$Annotationdata$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * For the dictionary layer. Whether or not to allow web definitions.
     */
    allowWebDefinitions?: boolean;
    /**
     * The ID of the annotation data to retrieve.
     */
    annotationDataId?: string;
    /**
     * The content version for the volume you are trying to retrieve.
     */
    contentVersion?: string;
    /**
     * The requested pixel height for any images. If height is provided width
     * must also be provided.
     */
    h?: number;
    /**
     * The ID for the layer to get the annotations.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1
     * country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * The requested scale for the image.
     */
    scale?: number;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to retrieve annotations for.
     */
    volumeId?: string;
    /**
     * The requested pixel width for any images. If width is provided height
     * must also be provided.
     */
    w?: number;
  }
  export interface Params$Resource$Layers$Annotationdata$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The list of Annotation Data Ids to retrieve. Pagination is ignored if
     * this is set.
     */
    annotationDataId?: string[];
    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * The requested pixel height for any images. If height is provided width
     * must also be provided.
     */
    h?: number;
    /**
     * The ID for the layer to get the annotation data.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1
     * country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * The requested scale for the image.
     */
    scale?: number;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp
     * (exclusive).
     */
    updatedMax?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp
     * (inclusive).
     */
    updatedMin?: string;
    /**
     * The volume to retrieve annotation data for.
     */
    volumeId?: string;
    /**
     * The requested pixel width for any images. If width is provided height
     * must also be provided.
     */
    w?: number;
  }


  export class Resource$Layers$Volumeannotations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.layers.volumeAnnotations.get
     * @desc Gets the volume annotation.
     * @alias books.layers.volumeAnnotations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the volume annotation to retrieve.
     * @param {string} params.layerId The ID for the layer to get the annotations.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to retrieve annotations for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Layers$Volumeannotations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Volumeannotation>;
    get(params: Params$Resource$Layers$Volumeannotations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Volumeannotation>,
        callback: BodyResponseCallback<Schema$Volumeannotation>): void;
    get(params: Params$Resource$Layers$Volumeannotations$Get,
        callback: BodyResponseCallback<Schema$Volumeannotation>): void;
    get(callback: BodyResponseCallback<Schema$Volumeannotation>): void;
    get(paramsOrCallback?: Params$Resource$Layers$Volumeannotations$Get|
        BodyResponseCallback<Schema$Volumeannotation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Volumeannotation>,
        callback?: BodyResponseCallback<Schema$Volumeannotation>):
        void|GaxiosPromise<Schema$Volumeannotation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Layers$Volumeannotations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Volumeannotations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId', 'layerId', 'annotationId'],
        pathParams: ['annotationId', 'layerId', 'volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumeannotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumeannotation>(parameters);
      }
    }


    /**
     * books.layers.volumeAnnotations.list
     * @desc Gets the volume annotations for a volume and layer.
     * @alias books.layers.volumeAnnotations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.contentVersion The content version for the requested volume.
     * @param {string=} params.endOffset The end offset to end retrieving data from.
     * @param {string=} params.endPosition The end position to end retrieving data from.
     * @param {string} params.layerId The ID for the layer to get the annotations.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.startOffset The start offset to start retrieving data from.
     * @param {string=} params.startPosition The start position to start retrieving data from.
     * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string=} params.volumeAnnotationsVersion The version of the volume annotations that you are requesting.
     * @param {string} params.volumeId The volume to retrieve annotations for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Layers$Volumeannotations$List,
        options?: MethodOptions): GaxiosPromise<Schema$Volumeannotations>;
    list(
        params: Params$Resource$Layers$Volumeannotations$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumeannotations>,
        callback: BodyResponseCallback<Schema$Volumeannotations>): void;
    list(
        params: Params$Resource$Layers$Volumeannotations$List,
        callback: BodyResponseCallback<Schema$Volumeannotations>): void;
    list(callback: BodyResponseCallback<Schema$Volumeannotations>): void;
    list(
        paramsOrCallback?: Params$Resource$Layers$Volumeannotations$List|
        BodyResponseCallback<Schema$Volumeannotations>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Volumeannotations>,
        callback?: BodyResponseCallback<Schema$Volumeannotations>):
        void|GaxiosPromise<Schema$Volumeannotations> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Layers$Volumeannotations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Volumeannotations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/{volumeId}/layers/{layerId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId', 'layerId', 'contentVersion'],
        pathParams: ['layerId', 'volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumeannotations>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumeannotations>(parameters);
      }
    }
  }

  export interface Params$Resource$Layers$Volumeannotations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the volume annotation to retrieve.
     */
    annotationId?: string;
    /**
     * The ID for the layer to get the annotations.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1
     * country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to retrieve annotations for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Layers$Volumeannotations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * The end offset to end retrieving data from.
     */
    endOffset?: string;
    /**
     * The end position to end retrieving data from.
     */
    endPosition?: string;
    /**
     * The ID for the layer to get the annotations.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1
     * country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * Set to true to return deleted annotations. updatedMin must be in the
     * request to use this. Defaults to false.
     */
    showDeleted?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The start offset to start retrieving data from.
     */
    startOffset?: string;
    /**
     * The start position to start retrieving data from.
     */
    startPosition?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp
     * (exclusive).
     */
    updatedMax?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp
     * (inclusive).
     */
    updatedMin?: string;
    /**
     * The version of the volume annotations that you are requesting.
     */
    volumeAnnotationsVersion?: string;
    /**
     * The volume to retrieve annotations for.
     */
    volumeId?: string;
  }



  export class Resource$Myconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.myconfig.getUserSettings
     * @desc Gets the current settings for the user.
     * @alias books.myconfig.getUserSettings
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getUserSettings(
        params?: Params$Resource$Myconfig$Getusersettings,
        options?: MethodOptions): GaxiosPromise<Schema$Usersettings>;
    getUserSettings(
        params: Params$Resource$Myconfig$Getusersettings,
        options: MethodOptions|BodyResponseCallback<Schema$Usersettings>,
        callback: BodyResponseCallback<Schema$Usersettings>): void;
    getUserSettings(
        params: Params$Resource$Myconfig$Getusersettings,
        callback: BodyResponseCallback<Schema$Usersettings>): void;
    getUserSettings(callback: BodyResponseCallback<Schema$Usersettings>): void;
    getUserSettings(
        paramsOrCallback?: Params$Resource$Myconfig$Getusersettings|
        BodyResponseCallback<Schema$Usersettings>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Usersettings>,
        callback?: BodyResponseCallback<Schema$Usersettings>):
        void|GaxiosPromise<Schema$Usersettings> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Myconfig$Getusersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Getusersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/myconfig/getUserSettings')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Usersettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Usersettings>(parameters);
      }
    }


    /**
     * books.myconfig.releaseDownloadAccess
     * @desc Release downloaded content access restriction.
     * @alias books.myconfig.releaseDownloadAccess
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to release the restriction.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeIds The volume(s) to release restrictions for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    releaseDownloadAccess(
        params?: Params$Resource$Myconfig$Releasedownloadaccess,
        options?: MethodOptions): GaxiosPromise<Schema$DownloadAccesses>;
    releaseDownloadAccess(
        params: Params$Resource$Myconfig$Releasedownloadaccess,
        options: MethodOptions|BodyResponseCallback<Schema$DownloadAccesses>,
        callback: BodyResponseCallback<Schema$DownloadAccesses>): void;
    releaseDownloadAccess(
        params: Params$Resource$Myconfig$Releasedownloadaccess,
        callback: BodyResponseCallback<Schema$DownloadAccesses>): void;
    releaseDownloadAccess(
        callback: BodyResponseCallback<Schema$DownloadAccesses>): void;
    releaseDownloadAccess(
        paramsOrCallback?: Params$Resource$Myconfig$Releasedownloadaccess|
        BodyResponseCallback<Schema$DownloadAccesses>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DownloadAccesses>,
        callback?: BodyResponseCallback<Schema$DownloadAccesses>):
        void|GaxiosPromise<Schema$DownloadAccesses> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Myconfig$Releasedownloadaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Releasedownloadaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/myconfig/releaseDownloadAccess')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['volumeIds', 'cpksver'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$DownloadAccesses>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DownloadAccesses>(parameters);
      }
    }


    /**
     * books.myconfig.requestAccess
     * @desc Request concurrent and download access restrictions.
     * @alias books.myconfig.requestAccess
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to request the restrictions.
     * @param {string=} params.licenseTypes The type of access license to request. If not specified, the default is BOTH.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} params.nonce The client nonce value.
     * @param {string} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to request concurrent/download restrictions for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    requestAccess(
        params?: Params$Resource$Myconfig$Requestaccess,
        options?: MethodOptions): GaxiosPromise<Schema$RequestAccess>;
    requestAccess(
        params: Params$Resource$Myconfig$Requestaccess,
        options: MethodOptions|BodyResponseCallback<Schema$RequestAccess>,
        callback: BodyResponseCallback<Schema$RequestAccess>): void;
    requestAccess(
        params: Params$Resource$Myconfig$Requestaccess,
        callback: BodyResponseCallback<Schema$RequestAccess>): void;
    requestAccess(callback: BodyResponseCallback<Schema$RequestAccess>): void;
    requestAccess(
        paramsOrCallback?: Params$Resource$Myconfig$Requestaccess|
        BodyResponseCallback<Schema$RequestAccess>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RequestAccess>,
        callback?: BodyResponseCallback<Schema$RequestAccess>):
        void|GaxiosPromise<Schema$RequestAccess> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Myconfig$Requestaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Requestaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/myconfig/requestAccess')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['source', 'volumeId', 'nonce', 'cpksver'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$RequestAccess>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RequestAccess>(parameters);
      }
    }


    /**
     * books.myconfig.syncVolumeLicenses
     * @desc Request downloaded content access for specified volumes on the My
     * eBooks shelf.
     * @alias books.myconfig.syncVolumeLicenses
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to release the restriction.
     * @param {string=} params.features List of features supported by the client, i.e., 'RENTALS'
     * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} params.nonce The client nonce value.
     * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
     * @param {string} params.source String to identify the originator of this request.
     * @param {string=} params.volumeIds The volume(s) to request download restrictions for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    syncVolumeLicenses(
        params?: Params$Resource$Myconfig$Syncvolumelicenses,
        options?: MethodOptions): GaxiosPromise<Schema$Volumes>;
    syncVolumeLicenses(
        params: Params$Resource$Myconfig$Syncvolumelicenses,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    syncVolumeLicenses(
        params: Params$Resource$Myconfig$Syncvolumelicenses,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    syncVolumeLicenses(callback: BodyResponseCallback<Schema$Volumes>): void;
    syncVolumeLicenses(
        paramsOrCallback?: Params$Resource$Myconfig$Syncvolumelicenses|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Myconfig$Syncvolumelicenses;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Syncvolumelicenses;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/myconfig/syncVolumeLicenses')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['source', 'nonce', 'cpksver'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }


    /**
     * books.myconfig.updateUserSettings
     * @desc Sets the settings for the user. If a sub-object is specified, it
     * will overwrite the existing sub-object stored in the server. Unspecified
     * sub-objects will retain the existing value.
     * @alias books.myconfig.updateUserSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Usersettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateUserSettings(
        params?: Params$Resource$Myconfig$Updateusersettings,
        options?: MethodOptions): GaxiosPromise<Schema$Usersettings>;
    updateUserSettings(
        params: Params$Resource$Myconfig$Updateusersettings,
        options: MethodOptions|BodyResponseCallback<Schema$Usersettings>,
        callback: BodyResponseCallback<Schema$Usersettings>): void;
    updateUserSettings(
        params: Params$Resource$Myconfig$Updateusersettings,
        callback: BodyResponseCallback<Schema$Usersettings>): void;
    updateUserSettings(callback: BodyResponseCallback<Schema$Usersettings>):
        void;
    updateUserSettings(
        paramsOrCallback?: Params$Resource$Myconfig$Updateusersettings|
        BodyResponseCallback<Schema$Usersettings>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Usersettings>,
        callback?: BodyResponseCallback<Schema$Usersettings>):
        void|GaxiosPromise<Schema$Usersettings> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Myconfig$Updateusersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Updateusersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/myconfig/updateUserSettings')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Usersettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Usersettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Myconfig$Getusersettings extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }
  export interface Params$Resource$Myconfig$Releasedownloadaccess extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The device/version ID from which to release the restriction.
     */
    cpksver?: string;
    /**
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume(s) to release restrictions for.
     */
    volumeIds?: string[];
  }
  export interface Params$Resource$Myconfig$Requestaccess extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The device/version ID from which to request the restrictions.
     */
    cpksver?: string;
    /**
     * The type of access license to request. If not specified, the default is
     * BOTH.
     */
    licenseTypes?: string;
    /**
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;
    /**
     * The client nonce value.
     */
    nonce?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to request concurrent/download restrictions for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Myconfig$Syncvolumelicenses extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The device/version ID from which to release the restriction.
     */
    cpksver?: string;
    /**
     * List of features supported by the client, i.e., 'RENTALS'
     */
    features?: string[];
    /**
     * Set to true to include non-comics series. Defaults to false.
     */
    includeNonComicsSeries?: boolean;
    /**
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;
    /**
     * The client nonce value.
     */
    nonce?: string;
    /**
     * Set to true to show pre-ordered books. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume(s) to request download restrictions for.
     */
    volumeIds?: string[];
  }
  export interface Params$Resource$Myconfig$Updateusersettings extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Usersettings;
  }


  export class Resource$Mylibrary {
    context: APIRequestContext;
    annotations: Resource$Mylibrary$Annotations;
    bookshelves: Resource$Mylibrary$Bookshelves;
    readingpositions: Resource$Mylibrary$Readingpositions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotations = new Resource$Mylibrary$Annotations(this.context);
      this.bookshelves = new Resource$Mylibrary$Bookshelves(this.context);
      this.readingpositions =
          new Resource$Mylibrary$Readingpositions(this.context);
    }
  }


  export class Resource$Mylibrary$Annotations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.mylibrary.annotations.delete
     * @desc Deletes an annotation.
     * @alias books.mylibrary.annotations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID for the annotation to delete.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Mylibrary$Annotations$Delete,
        options?: MethodOptions): GaxiosPromise<void>;
    delete(
        params: Params$Resource$Mylibrary$Annotations$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Mylibrary$Annotations$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Mylibrary$Annotations$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Annotations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/annotations/{annotationId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.mylibrary.annotations.insert
     * @desc Inserts a new annotation.
     * @alias books.mylibrary.annotations.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.annotationId The ID for the annotation to insert.
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {boolean=} params.showOnlySummaryInResponse Requests that only the summary of the specified layer be provided in the response.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {().Annotation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
        params?: Params$Resource$Mylibrary$Annotations$Insert,
        options?: MethodOptions): GaxiosPromise<Schema$Annotation>;
    insert(
        params: Params$Resource$Mylibrary$Annotations$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    insert(
        params: Params$Resource$Mylibrary$Annotations$Insert,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    insert(callback: BodyResponseCallback<Schema$Annotation>): void;
    insert(
        paramsOrCallback?: Params$Resource$Mylibrary$Annotations$Insert|
        BodyResponseCallback<Schema$Annotation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|GaxiosPromise<Schema$Annotation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Annotations$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/annotations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }


    /**
     * books.mylibrary.annotations.list
     * @desc Retrieves a list of annotations, possibly filtered.
     * @alias books.mylibrary.annotations.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {string=} params.layerId The layer ID to limit annotation by.
     * @param {string=} params.layerIds The layer ID(s) to limit annotation by.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string=} params.volumeId The volume to restrict annotations to.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Mylibrary$Annotations$List,
        options?: MethodOptions): GaxiosPromise<Schema$Annotations>;
    list(
        params: Params$Resource$Mylibrary$Annotations$List,
        options: MethodOptions|BodyResponseCallback<Schema$Annotations>,
        callback: BodyResponseCallback<Schema$Annotations>): void;
    list(
        params: Params$Resource$Mylibrary$Annotations$List,
        callback: BodyResponseCallback<Schema$Annotations>): void;
    list(callback: BodyResponseCallback<Schema$Annotations>): void;
    list(
        paramsOrCallback?: Params$Resource$Mylibrary$Annotations$List|
        BodyResponseCallback<Schema$Annotations>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotations>,
        callback?: BodyResponseCallback<Schema$Annotations>):
        void|GaxiosPromise<Schema$Annotations> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Annotations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/annotations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotations>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotations>(parameters);
      }
    }


    /**
     * books.mylibrary.annotations.summary
     * @desc Gets the summary of specified layers.
     * @alias books.mylibrary.annotations.summary
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.layerIds Array of layer IDs to get the summary for.
     * @param {string} params.volumeId Volume id to get the summary for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    summary(
        params?: Params$Resource$Mylibrary$Annotations$Summary,
        options?: MethodOptions): GaxiosPromise<Schema$AnnotationsSummary>;
    summary(
        params: Params$Resource$Mylibrary$Annotations$Summary,
        options: MethodOptions|BodyResponseCallback<Schema$AnnotationsSummary>,
        callback: BodyResponseCallback<Schema$AnnotationsSummary>): void;
    summary(
        params: Params$Resource$Mylibrary$Annotations$Summary,
        callback: BodyResponseCallback<Schema$AnnotationsSummary>): void;
    summary(callback: BodyResponseCallback<Schema$AnnotationsSummary>): void;
    summary(
        paramsOrCallback?: Params$Resource$Mylibrary$Annotations$Summary|
        BodyResponseCallback<Schema$AnnotationsSummary>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AnnotationsSummary>,
        callback?: BodyResponseCallback<Schema$AnnotationsSummary>):
        void|GaxiosPromise<Schema$AnnotationsSummary> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Annotations$Summary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Summary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/annotations/summary')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['layerIds', 'volumeId'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$AnnotationsSummary>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotationsSummary>(parameters);
      }
    }


    /**
     * books.mylibrary.annotations.update
     * @desc Updates an existing annotation.
     * @alias books.mylibrary.annotations.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID for the annotation to update.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {().Annotation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Mylibrary$Annotations$Update,
        options?: MethodOptions): GaxiosPromise<Schema$Annotation>;
    update(
        params: Params$Resource$Mylibrary$Annotations$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    update(
        params: Params$Resource$Mylibrary$Annotations$Update,
        callback: BodyResponseCallback<Schema$Annotation>): void;
    update(callback: BodyResponseCallback<Schema$Annotation>): void;
    update(
        paramsOrCallback?: Params$Resource$Mylibrary$Annotations$Update|
        BodyResponseCallback<Schema$Annotation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|GaxiosPromise<Schema$Annotation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Annotations$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/annotations/{annotationId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Annotations$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID for the annotation to delete.
     */
    annotationId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Annotations$Insert extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID for the annotation to insert.
     */
    annotationId?: string;
    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Requests that only the summary of the specified layer be provided in the
     * response.
     */
    showOnlySummaryInResponse?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Annotation;
  }
  export interface Params$Resource$Mylibrary$Annotations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * The layer ID to limit annotation by.
     */
    layerId?: string;
    /**
     * The layer ID(s) to limit annotation by.
     */
    layerIds?: string[];
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * Set to true to return deleted annotations. updatedMin must be in the
     * request to use this. Defaults to false.
     */
    showDeleted?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp
     * (exclusive).
     */
    updatedMax?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp
     * (inclusive).
     */
    updatedMin?: string;
    /**
     * The volume to restrict annotations to.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Annotations$Summary extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Array of layer IDs to get the summary for.
     */
    layerIds?: string[];
    /**
     * Volume id to get the summary for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Annotations$Update extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID for the annotation to update.
     */
    annotationId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Annotation;
  }


  export class Resource$Mylibrary$Bookshelves {
    context: APIRequestContext;
    volumes: Resource$Mylibrary$Bookshelves$Volumes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.volumes = new Resource$Mylibrary$Bookshelves$Volumes(this.context);
    }


    /**
     * books.mylibrary.bookshelves.addVolume
     * @desc Adds a volume to a bookshelf.
     * @alias books.mylibrary.bookshelves.addVolume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.reason The reason for which the book is added to the library.
     * @param {string} params.shelf ID of bookshelf to which to add a volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of volume to add.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addVolume(
        params?: Params$Resource$Mylibrary$Bookshelves$Addvolume,
        options?: MethodOptions): GaxiosPromise<void>;
    addVolume(
        params: Params$Resource$Mylibrary$Bookshelves$Addvolume,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    addVolume(
        params: Params$Resource$Mylibrary$Bookshelves$Addvolume,
        callback: BodyResponseCallback<void>): void;
    addVolume(callback: BodyResponseCallback<void>): void;
    addVolume(
        paramsOrCallback?: Params$Resource$Mylibrary$Bookshelves$Addvolume|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Bookshelves$Addvolume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Addvolume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/books/v1/mylibrary/bookshelves/{shelf}/addVolume')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['shelf', 'volumeId'],
        pathParams: ['shelf'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.mylibrary.bookshelves.clearVolumes
     * @desc Clears all volumes from a bookshelf.
     * @alias books.mylibrary.bookshelves.clearVolumes
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf from which to remove a volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearVolumes(
        params?: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
        options?: MethodOptions): GaxiosPromise<void>;
    clearVolumes(
        params: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    clearVolumes(
        params: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
        callback: BodyResponseCallback<void>): void;
    clearVolumes(callback: BodyResponseCallback<void>): void;
    clearVolumes(
        paramsOrCallback?: Params$Resource$Mylibrary$Bookshelves$Clearvolumes|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Bookshelves$Clearvolumes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Clearvolumes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.mylibrary.bookshelves.get
     * @desc Retrieves metadata for a specific bookshelf belonging to the
     * authenticated user.
     * @alias books.mylibrary.bookshelves.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf to retrieve.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Mylibrary$Bookshelves$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Bookshelf>;
    get(params: Params$Resource$Mylibrary$Bookshelves$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Bookshelf>,
        callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(params: Params$Resource$Mylibrary$Bookshelves$Get,
        callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(paramsOrCallback?: Params$Resource$Mylibrary$Bookshelves$Get|
        BodyResponseCallback<Schema$Bookshelf>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Bookshelf>,
        callback?: BodyResponseCallback<Schema$Bookshelf>):
        void|GaxiosPromise<Schema$Bookshelf> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Mylibrary$Bookshelves$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Bookshelf>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bookshelf>(parameters);
      }
    }


    /**
     * books.mylibrary.bookshelves.list
     * @desc Retrieves a list of bookshelves belonging to the authenticated
     * user.
     * @alias books.mylibrary.bookshelves.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Mylibrary$Bookshelves$List,
        options?: MethodOptions): GaxiosPromise<Schema$Bookshelves>;
    list(
        params: Params$Resource$Mylibrary$Bookshelves$List,
        options: MethodOptions|BodyResponseCallback<Schema$Bookshelves>,
        callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(
        params: Params$Resource$Mylibrary$Bookshelves$List,
        callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(
        paramsOrCallback?: Params$Resource$Mylibrary$Bookshelves$List|
        BodyResponseCallback<Schema$Bookshelves>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Bookshelves>,
        callback?: BodyResponseCallback<Schema$Bookshelves>):
        void|GaxiosPromise<Schema$Bookshelves> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Bookshelves$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/bookshelves')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Bookshelves>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Bookshelves>(parameters);
      }
    }


    /**
     * books.mylibrary.bookshelves.moveVolume
     * @desc Moves a volume within a bookshelf.
     * @alias books.mylibrary.bookshelves.moveVolume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf with the volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of volume to move.
     * @param {integer} params.volumePosition Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    moveVolume(
        params?: Params$Resource$Mylibrary$Bookshelves$Movevolume,
        options?: MethodOptions): GaxiosPromise<void>;
    moveVolume(
        params: Params$Resource$Mylibrary$Bookshelves$Movevolume,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    moveVolume(
        params: Params$Resource$Mylibrary$Bookshelves$Movevolume,
        callback: BodyResponseCallback<void>): void;
    moveVolume(callback: BodyResponseCallback<void>): void;
    moveVolume(
        paramsOrCallback?: Params$Resource$Mylibrary$Bookshelves$Movevolume|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Bookshelves$Movevolume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Movevolume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/books/v1/mylibrary/bookshelves/{shelf}/moveVolume')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['shelf', 'volumeId', 'volumePosition'],
        pathParams: ['shelf'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.mylibrary.bookshelves.removeVolume
     * @desc Removes a volume from a bookshelf.
     * @alias books.mylibrary.bookshelves.removeVolume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.reason The reason for which the book is removed from the library.
     * @param {string} params.shelf ID of bookshelf from which to remove a volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of volume to remove.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeVolume(
        params?: Params$Resource$Mylibrary$Bookshelves$Removevolume,
        options?: MethodOptions): GaxiosPromise<void>;
    removeVolume(
        params: Params$Resource$Mylibrary$Bookshelves$Removevolume,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    removeVolume(
        params: Params$Resource$Mylibrary$Bookshelves$Removevolume,
        callback: BodyResponseCallback<void>): void;
    removeVolume(callback: BodyResponseCallback<void>): void;
    removeVolume(
        paramsOrCallback?: Params$Resource$Mylibrary$Bookshelves$Removevolume|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Bookshelves$Removevolume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Removevolume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/books/v1/mylibrary/bookshelves/{shelf}/removeVolume')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['shelf', 'volumeId'],
        pathParams: ['shelf'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Bookshelves$Addvolume extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The reason for which the book is added to the library.
     */
    reason?: string;
    /**
     * ID of bookshelf to which to add a volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume to add.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Clearvolumes extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of bookshelf from which to remove a volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of bookshelf to retrieve.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Movevolume extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of bookshelf with the volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume to move.
     */
    volumeId?: string;
    /**
     * Position on shelf to move the item (0 puts the item before the current
     * first item, 1 puts it between the first and the second and so on.)
     */
    volumePosition?: number;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Removevolume extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The reason for which the book is removed from the library.
     */
    reason?: string;
    /**
     * ID of bookshelf from which to remove a volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume to remove.
     */
    volumeId?: string;
  }

  export class Resource$Mylibrary$Bookshelves$Volumes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.mylibrary.bookshelves.volumes.list
     * @desc Gets volume information for volumes on a bookshelf.
     * @alias books.mylibrary.bookshelves.volumes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.q Full-text search query string in this bookshelf.
     * @param {string} params.shelf The bookshelf ID or name retrieve volumes for.
     * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
        options?: MethodOptions): GaxiosPromise<Schema$Volumes>;
    list(
        params: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        params: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        paramsOrCallback?: Params$Resource$Mylibrary$Bookshelves$Volumes$List|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Bookshelves$Volumes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Volumes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}/volumes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Bookshelves$Volumes$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Full-text search query string in this bookshelf.
     */
    q?: string;
    /**
     * The bookshelf ID or name retrieve volumes for.
     */
    shelf?: string;
    /**
     * Set to true to show pre-ordered books. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first element to return (starts at 0)
     */
    startIndex?: number;
  }



  export class Resource$Mylibrary$Readingpositions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.mylibrary.readingpositions.get
     * @desc Retrieves my reading position information for a volume.
     * @alias books.mylibrary.readingpositions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion Volume content version for which this reading position is requested.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of volume for which to retrieve a reading position.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Mylibrary$Readingpositions$Get,
        options?: MethodOptions): GaxiosPromise<Schema$ReadingPosition>;
    get(params: Params$Resource$Mylibrary$Readingpositions$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ReadingPosition>,
        callback: BodyResponseCallback<Schema$ReadingPosition>): void;
    get(params: Params$Resource$Mylibrary$Readingpositions$Get,
        callback: BodyResponseCallback<Schema$ReadingPosition>): void;
    get(callback: BodyResponseCallback<Schema$ReadingPosition>): void;
    get(paramsOrCallback?: Params$Resource$Mylibrary$Readingpositions$Get|
        BodyResponseCallback<Schema$ReadingPosition>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ReadingPosition>,
        callback?: BodyResponseCallback<Schema$ReadingPosition>):
        void|GaxiosPromise<Schema$ReadingPosition> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Readingpositions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Readingpositions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/mylibrary/readingpositions/{volumeId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$ReadingPosition>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReadingPosition>(parameters);
      }
    }


    /**
     * books.mylibrary.readingpositions.setPosition
     * @desc Sets my reading position information for a volume.
     * @alias books.mylibrary.readingpositions.setPosition
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.action Action that caused this reading position to be set.
     * @param {string=} params.contentVersion Volume content version for which this reading position applies.
     * @param {string=} params.deviceCookie Random persistent device cookie optional on set position.
     * @param {string} params.position Position string for the new volume reading position.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.timestamp RFC 3339 UTC format timestamp associated with this reading position.
     * @param {string} params.volumeId ID of volume for which to update the reading position.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setPosition(
        params?: Params$Resource$Mylibrary$Readingpositions$Setposition,
        options?: MethodOptions): GaxiosPromise<void>;
    setPosition(
        params: Params$Resource$Mylibrary$Readingpositions$Setposition,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    setPosition(
        params: Params$Resource$Mylibrary$Readingpositions$Setposition,
        callback: BodyResponseCallback<void>): void;
    setPosition(callback: BodyResponseCallback<void>): void;
    setPosition(
        paramsOrCallback?:
            Params$Resource$Mylibrary$Readingpositions$Setposition|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Mylibrary$Readingpositions$Setposition;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Readingpositions$Setposition;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/books/v1/mylibrary/readingpositions/{volumeId}/setPosition')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['volumeId', 'timestamp', 'position'],
        pathParams: ['volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Readingpositions$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Volume content version for which this reading position is requested.
     */
    contentVersion?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume for which to retrieve a reading position.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Readingpositions$Setposition
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Action that caused this reading position to be set.
     */
    action?: string;
    /**
     * Volume content version for which this reading position applies.
     */
    contentVersion?: string;
    /**
     * Random persistent device cookie optional on set position.
     */
    deviceCookie?: string;
    /**
     * Position string for the new volume reading position.
     */
    position?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 UTC format timestamp associated with this reading position.
     */
    timestamp?: string;
    /**
     * ID of volume for which to update the reading position.
     */
    volumeId?: string;
  }



  export class Resource$Notification {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.notification.get
     * @desc Returns notification details for a given notification id.
     * @alias books.notification.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
     * @param {string} params.notification_id String to identify the notification.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Notification$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Notification>;
    get(params: Params$Resource$Notification$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Notification>,
        callback: BodyResponseCallback<Schema$Notification>): void;
    get(params: Params$Resource$Notification$Get,
        callback: BodyResponseCallback<Schema$Notification>): void;
    get(callback: BodyResponseCallback<Schema$Notification>): void;
    get(paramsOrCallback?: Params$Resource$Notification$Get|
        BodyResponseCallback<Schema$Notification>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Notification>,
        callback?: BodyResponseCallback<Schema$Notification>):
        void|GaxiosPromise<Schema$Notification> {
      let params = (paramsOrCallback || {}) as Params$Resource$Notification$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notification$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/notification/get')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['notification_id'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Notification>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Notification>(parameters);
      }
    }
  }

  export interface Params$Resource$Notification$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     * generating notification title and body.
     */
    locale?: string;
    /**
     * String to identify the notification.
     */
    notification_id?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }


  export class Resource$Onboarding {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.onboarding.listCategories
     * @desc List categories for onboarding experience.
     * @alias books.onboarding.listCategories
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCategories(
        params?: Params$Resource$Onboarding$Listcategories,
        options?: MethodOptions): GaxiosPromise<Schema$Category>;
    listCategories(
        params: Params$Resource$Onboarding$Listcategories,
        options: MethodOptions|BodyResponseCallback<Schema$Category>,
        callback: BodyResponseCallback<Schema$Category>): void;
    listCategories(
        params: Params$Resource$Onboarding$Listcategories,
        callback: BodyResponseCallback<Schema$Category>): void;
    listCategories(callback: BodyResponseCallback<Schema$Category>): void;
    listCategories(
        paramsOrCallback?: Params$Resource$Onboarding$Listcategories|
        BodyResponseCallback<Schema$Category>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Category>,
        callback?: BodyResponseCallback<Schema$Category>):
        void|GaxiosPromise<Schema$Category> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Onboarding$Listcategories;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Onboarding$Listcategories;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/onboarding/listCategories')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Category>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Category>(parameters);
      }
    }


    /**
     * books.onboarding.listCategoryVolumes
     * @desc List available volumes under categories for onboarding experience.
     * @alias books.onboarding.listCategoryVolumes
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.categoryId List of category ids requested.
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
     * @param {integer=} params.pageSize Number of maximum results per page to be included in the response.
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCategoryVolumes(
        params?: Params$Resource$Onboarding$Listcategoryvolumes,
        options?: MethodOptions): GaxiosPromise<Schema$Volume2>;
    listCategoryVolumes(
        params: Params$Resource$Onboarding$Listcategoryvolumes,
        options: MethodOptions|BodyResponseCallback<Schema$Volume2>,
        callback: BodyResponseCallback<Schema$Volume2>): void;
    listCategoryVolumes(
        params: Params$Resource$Onboarding$Listcategoryvolumes,
        callback: BodyResponseCallback<Schema$Volume2>): void;
    listCategoryVolumes(callback: BodyResponseCallback<Schema$Volume2>): void;
    listCategoryVolumes(
        paramsOrCallback?: Params$Resource$Onboarding$Listcategoryvolumes|
        BodyResponseCallback<Schema$Volume2>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volume2>,
        callback?: BodyResponseCallback<Schema$Volume2>):
        void|GaxiosPromise<Schema$Volume2> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Onboarding$Listcategoryvolumes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Onboarding$Listcategoryvolumes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/onboarding/listCategoryVolumes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volume2>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volume2>(parameters);
      }
    }
  }

  export interface Params$Resource$Onboarding$Listcategories extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Default is en-US if
     * unset.
     */
    locale?: string;
  }
  export interface Params$Resource$Onboarding$Listcategoryvolumes extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * List of category ids requested.
     */
    categoryId?: string[];
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Default is en-US if
     * unset.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned volumes. Books with a
     * higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * Number of maximum results per page to be included in the response.
     */
    pageSize?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
  }


  export class Resource$Personalizedstream {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.personalizedstream.get
     * @desc Returns a stream of personalized book clusters
     * @alias books.personalizedstream.get
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Personalizedstream$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Discoveryclusters>;
    get(params: Params$Resource$Personalizedstream$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Discoveryclusters>,
        callback: BodyResponseCallback<Schema$Discoveryclusters>): void;
    get(params: Params$Resource$Personalizedstream$Get,
        callback: BodyResponseCallback<Schema$Discoveryclusters>): void;
    get(callback: BodyResponseCallback<Schema$Discoveryclusters>): void;
    get(paramsOrCallback?: Params$Resource$Personalizedstream$Get|
        BodyResponseCallback<Schema$Discoveryclusters>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Discoveryclusters>,
        callback?: BodyResponseCallback<Schema$Discoveryclusters>):
        void|GaxiosPromise<Schema$Discoveryclusters> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Personalizedstream$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Personalizedstream$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/personalizedstream/get')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Discoveryclusters>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Discoveryclusters>(parameters);
      }
    }
  }

  export interface Params$Resource$Personalizedstream$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     * generating recommendations.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books
     * with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }


  export class Resource$Promooffer {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.promooffer.accept
     * @alias books.promooffer.accept
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.offerId
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {string=} params.volumeId Volume id to exercise the offer
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    accept(params?: Params$Resource$Promooffer$Accept, options?: MethodOptions):
        GaxiosPromise<void>;
    accept(
        params: Params$Resource$Promooffer$Accept,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    accept(
        params: Params$Resource$Promooffer$Accept,
        callback: BodyResponseCallback<void>): void;
    accept(callback: BodyResponseCallback<void>): void;
    accept(
        paramsOrCallback?: Params$Resource$Promooffer$Accept|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Promooffer$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promooffer$Accept;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/promooffer/accept')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.promooffer.dismiss
     * @alias books.promooffer.dismiss
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.offerId Offer to dimiss
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss(
        params?: Params$Resource$Promooffer$Dismiss,
        options?: MethodOptions): GaxiosPromise<void>;
    dismiss(
        params: Params$Resource$Promooffer$Dismiss,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    dismiss(
        params: Params$Resource$Promooffer$Dismiss,
        callback: BodyResponseCallback<void>): void;
    dismiss(callback: BodyResponseCallback<void>): void;
    dismiss(
        paramsOrCallback?: Params$Resource$Promooffer$Dismiss|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Promooffer$Dismiss;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promooffer$Dismiss;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/promooffer/dismiss')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * books.promooffer.get
     * @desc Returns a list of promo offers available to the user
     * @alias books.promooffer.get
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Promooffer$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Offers>;
    get(params: Params$Resource$Promooffer$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Offers>,
        callback: BodyResponseCallback<Schema$Offers>): void;
    get(params: Params$Resource$Promooffer$Get,
        callback: BodyResponseCallback<Schema$Offers>): void;
    get(callback: BodyResponseCallback<Schema$Offers>): void;
    get(paramsOrCallback?: Params$Resource$Promooffer$Get|
        BodyResponseCallback<Schema$Offers>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Offers>,
        callback?: BodyResponseCallback<Schema$Offers>):
        void|GaxiosPromise<Schema$Offers> {
      let params = (paramsOrCallback || {}) as Params$Resource$Promooffer$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promooffer$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/promooffer/get')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Offers>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Offers>(parameters);
      }
    }
  }

  export interface Params$Resource$Promooffer$Accept extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * device android_id
     */
    androidId?: string;
    /**
     * device device
     */
    device?: string;
    /**
     * device manufacturer
     */
    manufacturer?: string;
    /**
     * device model
     */
    model?: string;
    /**
     *
     */
    offerId?: string;
    /**
     * device product
     */
    product?: string;
    /**
     * device serial
     */
    serial?: string;
    /**
     * Volume id to exercise the offer
     */
    volumeId?: string;
  }
  export interface Params$Resource$Promooffer$Dismiss extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * device android_id
     */
    androidId?: string;
    /**
     * device device
     */
    device?: string;
    /**
     * device manufacturer
     */
    manufacturer?: string;
    /**
     * device model
     */
    model?: string;
    /**
     * Offer to dimiss
     */
    offerId?: string;
    /**
     * device product
     */
    product?: string;
    /**
     * device serial
     */
    serial?: string;
  }
  export interface Params$Resource$Promooffer$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * device android_id
     */
    androidId?: string;
    /**
     * device device
     */
    device?: string;
    /**
     * device manufacturer
     */
    manufacturer?: string;
    /**
     * device model
     */
    model?: string;
    /**
     * device product
     */
    product?: string;
    /**
     * device serial
     */
    serial?: string;
  }


  export class Resource$Series {
    context: APIRequestContext;
    membership: Resource$Series$Membership;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.membership = new Resource$Series$Membership(this.context);
    }


    /**
     * books.series.get
     * @desc Returns Series metadata for the given series ids.
     * @alias books.series.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.series_id String that identifies the series
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Series$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Series>;
    get(params: Params$Resource$Series$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Series>,
        callback: BodyResponseCallback<Schema$Series>): void;
    get(params: Params$Resource$Series$Get,
        callback: BodyResponseCallback<Schema$Series>): void;
    get(callback: BodyResponseCallback<Schema$Series>): void;
    get(paramsOrCallback?: Params$Resource$Series$Get|
        BodyResponseCallback<Schema$Series>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Series>,
        callback?: BodyResponseCallback<Schema$Series>):
        void|GaxiosPromise<Schema$Series> {
      let params = (paramsOrCallback || {}) as Params$Resource$Series$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Series$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/series/get')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['series_id'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Series>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Series>(parameters);
      }
    }
  }

  export interface Params$Resource$Series$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * String that identifies the series
     */
    series_id?: string[];
  }

  export class Resource$Series$Membership {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.series.membership.get
     * @desc Returns Series membership data given the series id.
     * @alias books.series.membership.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.page_size Number of maximum results per page to be included in the response.
     * @param {string=} params.page_token The value of the nextToken from the previous page.
     * @param {string} params.series_id String that identifies the series
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Series$Membership$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Seriesmembership>;
    get(params: Params$Resource$Series$Membership$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Seriesmembership>,
        callback: BodyResponseCallback<Schema$Seriesmembership>): void;
    get(params: Params$Resource$Series$Membership$Get,
        callback: BodyResponseCallback<Schema$Seriesmembership>): void;
    get(callback: BodyResponseCallback<Schema$Seriesmembership>): void;
    get(paramsOrCallback?: Params$Resource$Series$Membership$Get|
        BodyResponseCallback<Schema$Seriesmembership>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Seriesmembership>,
        callback?: BodyResponseCallback<Schema$Seriesmembership>):
        void|GaxiosPromise<Schema$Seriesmembership> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Series$Membership$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Series$Membership$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/series/membership/get')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['series_id'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Seriesmembership>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Seriesmembership>(parameters);
      }
    }
  }

  export interface Params$Resource$Series$Membership$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Number of maximum results per page to be included in the response.
     */
    page_size?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    page_token?: string;
    /**
     * String that identifies the series
     */
    series_id?: string;
  }



  export class Resource$Volumes {
    context: APIRequestContext;
    associated: Resource$Volumes$Associated;
    mybooks: Resource$Volumes$Mybooks;
    recommended: Resource$Volumes$Recommended;
    useruploaded: Resource$Volumes$Useruploaded;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.associated = new Resource$Volumes$Associated(this.context);
      this.mybooks = new Resource$Volumes$Mybooks(this.context);
      this.recommended = new Resource$Volumes$Recommended(this.context);
      this.useruploaded = new Resource$Volumes$Useruploaded(this.context);
    }


    /**
     * books.volumes.get
     * @desc Gets volume information for a single volume.
     * @alias books.volumes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
     * @param {string=} params.partner Brand results for partner ID.
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {boolean=} params.user_library_consistent_read
     * @param {string} params.volumeId ID of volume to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Volumes$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Volume>;
    get(params: Params$Resource$Volumes$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Volume>,
        callback: BodyResponseCallback<Schema$Volume>): void;
    get(params: Params$Resource$Volumes$Get,
        callback: BodyResponseCallback<Schema$Volume>): void;
    get(callback: BodyResponseCallback<Schema$Volume>): void;
    get(paramsOrCallback?: Params$Resource$Volumes$Get|
        BodyResponseCallback<Schema$Volume>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volume>,
        callback?: BodyResponseCallback<Schema$Volume>):
        void|GaxiosPromise<Schema$Volume> {
      let params = (paramsOrCallback || {}) as Params$Resource$Volumes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/{volumeId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volume>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volume>(parameters);
      }
    }


    /**
     * books.volumes.list
     * @desc Performs a book search.
     * @alias books.volumes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.download Restrict to volumes by download availability.
     * @param {string=} params.filter Filter search results.
     * @param {string=} params.langRestrict Restrict results to books with this language code.
     * @param {string=} params.libraryRestrict Restrict search to this user's library.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.orderBy Sort search results.
     * @param {string=} params.partner Restrict and brand results for partner ID.
     * @param {string=} params.printType Restrict to books or magazines.
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string} params.q Full-text search query string.
     * @param {boolean=} params.showPreorders Set to true to show books available for preorder. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Volumes$List, options?: MethodOptions):
        GaxiosPromise<Schema$Volumes>;
    list(
        params: Params$Resource$Volumes$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        params: Params$Resource$Volumes$List,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        paramsOrCallback?: Params$Resource$Volumes$List|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params = (paramsOrCallback || {}) as Params$Resource$Volumes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/books/v1/volumes').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['q'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Set to true to include non-comics series. Defaults to false.
     */
    includeNonComicsSeries?: boolean;
    /**
     * Brand results for partner ID.
     */
    partner?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     *
     */
    user_library_consistent_read?: boolean;
    /**
     * ID of volume to retrieve.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Volumes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Restrict to volumes by download availability.
     */
    download?: string;
    /**
     * Filter search results.
     */
    filter?: string;
    /**
     * Restrict results to books with this language code.
     */
    langRestrict?: string;
    /**
     * Restrict search to this user's library.
     */
    libraryRestrict?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books
     * with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Sort search results.
     */
    orderBy?: string;
    /**
     * Restrict and brand results for partner ID.
     */
    partner?: string;
    /**
     * Restrict to books or magazines.
     */
    printType?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Full-text search query string.
     */
    q?: string;
    /**
     * Set to true to show books available for preorder. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;
  }

  export class Resource$Volumes$Associated {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.volumes.associated.list
     * @desc Return a list of associated books.
     * @alias books.volumes.associated.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.association Association type.
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of the source volume.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Volumes$Associated$List,
        options?: MethodOptions): GaxiosPromise<Schema$Volumes>;
    list(
        params: Params$Resource$Volumes$Associated$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        params: Params$Resource$Volumes$Associated$List,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        paramsOrCallback?: Params$Resource$Volumes$Associated$List|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Volumes$Associated$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Associated$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/{volumeId}/associated')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Associated$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Association type.
     */
    association?: string;
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     * generating recommendations.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books
     * with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of the source volume.
     */
    volumeId?: string;
  }


  export class Resource$Volumes$Mybooks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.volumes.mybooks.list
     * @desc Return a list of books in My Library.
     * @alias books.volumes.mybooks.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.acquireMethod How the book was acquired
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Volumes$Mybooks$List,
        options?: MethodOptions): GaxiosPromise<Schema$Volumes>;
    list(
        params: Params$Resource$Volumes$Mybooks$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        params: Params$Resource$Volumes$Mybooks$List,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        paramsOrCallback?: Params$Resource$Volumes$Mybooks$List|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Volumes$Mybooks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Mybooks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/mybooks')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Mybooks$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * How the book was acquired
     */
    acquireMethod?: string[];
    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for
     * generating recommendations.
     */
    locale?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The processing state of the user uploaded volumes to be returned.
     * Applicable only if the UPLOADED is specified in the acquireMethod.
     */
    processingState?: string[];
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;
  }


  export class Resource$Volumes$Recommended {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.volumes.recommended.list
     * @desc Return a list of recommended books for the current user.
     * @alias books.volumes.recommended.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Volumes$Recommended$List,
        options?: MethodOptions): GaxiosPromise<Schema$Volumes>;
    list(
        params: Params$Resource$Volumes$Recommended$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        params: Params$Resource$Volumes$Recommended$List,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        paramsOrCallback?: Params$Resource$Volumes$Recommended$List|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Volumes$Recommended$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Recommended$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/recommended')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }


    /**
     * books.volumes.recommended.rate
     * @desc Rate a recommended book for the current user.
     * @alias books.volumes.recommended.rate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string} params.rating Rating to be given to the volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of the source volume.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rate(
        params?: Params$Resource$Volumes$Recommended$Rate,
        options?: MethodOptions):
        GaxiosPromise<Schema$BooksVolumesRecommendedRateResponse>;
    rate(
        params: Params$Resource$Volumes$Recommended$Rate,
        options: MethodOptions|
        BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>,
        callback:
            BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>):
        void;
    rate(
        params: Params$Resource$Volumes$Recommended$Rate,
        callback:
            BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>):
        void;
    rate(callback:
             BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>):
        void;
    rate(
        paramsOrCallback?: Params$Resource$Volumes$Recommended$Rate|
        BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>,
        callback?:
            BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>):
        void|GaxiosPromise<Schema$BooksVolumesRecommendedRateResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Volumes$Recommended$Rate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Recommended$Rate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/recommended/rate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['rating', 'volumeId'],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$BooksVolumesRecommendedRateResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BooksVolumesRecommendedRateResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Recommended$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     * generating recommendations.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books
     * with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Volumes$Recommended$Rate extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     * generating recommendations.
     */
    locale?: string;
    /**
     * Rating to be given to the volume.
     */
    rating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of the source volume.
     */
    volumeId?: string;
  }


  export class Resource$Volumes$Useruploaded {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * books.volumes.useruploaded.list
     * @desc Return a list of books uploaded by the current user.
     * @alias books.volumes.useruploaded.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
     * @param {string=} params.volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Volumes$Useruploaded$List,
        options?: MethodOptions): GaxiosPromise<Schema$Volumes>;
    list(
        params: Params$Resource$Volumes$Useruploaded$List,
        options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        params: Params$Resource$Volumes$Useruploaded$List,
        callback: BodyResponseCallback<Schema$Volumes>): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
        paramsOrCallback?: Params$Resource$Volumes$Useruploaded$List|
        BodyResponseCallback<Schema$Volumes>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Volumes>,
        callback?: BodyResponseCallback<Schema$Volumes>):
        void|GaxiosPromise<Schema$Volumes> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Volumes$Useruploaded$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Useruploaded$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/books/v1/volumes/useruploaded')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Useruploaded$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     * generating recommendations.
     */
    locale?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The processing state of the user uploaded volumes to be returned.
     */
    processingState?: string[];
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;
    /**
     * The ids of the volumes to be returned. If not specified all that match
     * the processingState are returned.
     */
    volumeId?: string[];
  }
}
