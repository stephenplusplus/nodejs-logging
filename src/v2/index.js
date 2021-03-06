/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var loggingServiceV2Client = require('./logging_service_v2_client');
var configServiceV2Client = require('./config_service_v2_client');
var metricsServiceV2Client = require('./metrics_service_v2_client');
var gax = require('google-gax');
var extend = require('extend');

function v2(options) {
  options = extend(
    {
      scopes: v2.ALL_SCOPES,
    },
    options
  );
  var gaxGrpc = gax.grpc(options);
  return extend(
    {},
    loggingServiceV2Client(gaxGrpc),
    configServiceV2Client(gaxGrpc),
    metricsServiceV2Client(gaxGrpc)
  );
}

v2.SERVICE_ADDRESS = loggingServiceV2Client.SERVICE_ADDRESS;
v2.ALL_SCOPES = loggingServiceV2Client.ALL_SCOPES;

module.exports = v2;
