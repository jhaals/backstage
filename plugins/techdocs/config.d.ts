/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Config {
  /** Configuration options for the techdocs plugin */
  techdocs: {
    /**
     * attr: 'requestUrl' - accepts a string value
     * e.g. requestUrl: http://localhost:7000/api/techdocs
     * @visibility frontend
     */
    requestUrl: string;
    /**
     * attr: 'storageUrl' - accepts a string value
     * e.g. storageUrl: http://localhost:7000/api/techdocs/static/docs
     */
    storageUrl: string;
    /**
     * documentation building process depends on the builder attr
     * attr: 'builder' - accepts a string value
     * e.g. builder: 'local'
     * alternative: 'external' etc.
     * @see http://backstage.io/docs/features/techdocs/configuration
     * @visibility frontend
     */
    builder: 'local' | 'external';

    /**
     * techdocs publisher information
     */
    generators?: {
      /**
       * attr: 'techdocs' - accepts a string value
       * e.g. type: 'docker'
       * aleternatives: 'local' etc.
       * @see http://backstage.io/docs/features/techdocs/configuration
       */
      techdocs: 'local' | 'docker';
    };

    /**
     * techdocs publisher information
     */
    publisher?:
      | {
          /**
           * attr: 'type' - accepts a string value
           * e.g. type: 'local'
           * aleternatives: 'googleGcs' etc.
           * @see http://backstage.io/docs/features/techdocs/configuration
           */
          type: 'local' | 'awsS3';
        }
      | {
          /**
           * attr: 'type' - accepts a string value
           * e.g. type: 'googleGcs'
           * aleternatives: 'googleGcs' etc.
           * @see http://backstage.io/docs/features/techdocs/configuration
           */
          type: 'googleGcs';

          /**
           * googleGcs required when 'type' is set to googleGcs
           */
          googleGcs?: {
            /**
             * API key used to write to a storage bucket.
             * attr: 'credentials' - accepts a string value
             * @visibility secret
             */
            credentials: string;
            /**
             * GCP Project ID where the Cloud Storage Bucket is hosted.
             * attr: 'projectId' - accepts a string value
             * @visibility secret
             */
            projectId: string;
            /**
             * Cloud Storage Bucket Name
             * attr: 'bucketName' - accepts a string value
             * @visibility secret
             */
            bucketName: string;
          };
        };
  };
}
