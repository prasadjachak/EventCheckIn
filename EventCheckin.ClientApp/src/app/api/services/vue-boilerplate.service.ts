/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVueBoilerplateGetClientsPost } from '../fn/vue-boilerplate/api-vue-boilerplate-get-clients-post';
import { ApiVueBoilerplateGetClientsPost$Params } from '../fn/vue-boilerplate/api-vue-boilerplate-get-clients-post';
import { apiVueBoilerplateRegisterCircumventPost } from '../fn/vue-boilerplate/api-vue-boilerplate-register-circumvent-post';
import { ApiVueBoilerplateRegisterCircumventPost$Params } from '../fn/vue-boilerplate/api-vue-boilerplate-register-circumvent-post';
import { apiVueBoilerplateUploadMockDocumentsPost } from '../fn/vue-boilerplate/api-vue-boilerplate-upload-mock-documents-post';
import { ApiVueBoilerplateUploadMockDocumentsPost$Params } from '../fn/vue-boilerplate/api-vue-boilerplate-upload-mock-documents-post';

@Injectable({ providedIn: 'root' })
export class VueBoilerplateService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVueBoilerplateRegisterCircumventPost()` */
  static readonly ApiVueBoilerplateRegisterCircumventPostPath = '/api/VueBoilerplate/RegisterCircumvent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVueBoilerplateRegisterCircumventPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVueBoilerplateRegisterCircumventPost$Response(params?: ApiVueBoilerplateRegisterCircumventPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVueBoilerplateRegisterCircumventPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVueBoilerplateRegisterCircumventPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVueBoilerplateRegisterCircumventPost(params?: ApiVueBoilerplateRegisterCircumventPost$Params, context?: HttpContext): Observable<void> {
    return this.apiVueBoilerplateRegisterCircumventPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVueBoilerplateGetClientsPost()` */
  static readonly ApiVueBoilerplateGetClientsPostPath = '/api/VueBoilerplate/GetClients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVueBoilerplateGetClientsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVueBoilerplateGetClientsPost$Response(params?: ApiVueBoilerplateGetClientsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVueBoilerplateGetClientsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVueBoilerplateGetClientsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVueBoilerplateGetClientsPost(params?: ApiVueBoilerplateGetClientsPost$Params, context?: HttpContext): Observable<void> {
    return this.apiVueBoilerplateGetClientsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVueBoilerplateUploadMockDocumentsPost()` */
  static readonly ApiVueBoilerplateUploadMockDocumentsPostPath = '/api/VueBoilerplate/UploadMockDocuments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVueBoilerplateUploadMockDocumentsPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiVueBoilerplateUploadMockDocumentsPost$Response(params?: ApiVueBoilerplateUploadMockDocumentsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVueBoilerplateUploadMockDocumentsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVueBoilerplateUploadMockDocumentsPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiVueBoilerplateUploadMockDocumentsPost(params?: ApiVueBoilerplateUploadMockDocumentsPost$Params, context?: HttpContext): Observable<void> {
    return this.apiVueBoilerplateUploadMockDocumentsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
