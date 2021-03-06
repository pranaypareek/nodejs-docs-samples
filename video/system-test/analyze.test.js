/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the `License`);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an `AS IS` BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// https://cloud.google.com/video-intelligence/docs/

'use strict';

require(`../../system-test/_setup`);

const cmd = `node analyze.js`;

// analyze_faces
test(`should analyze faces`, async (t) => {
  const output = await runAsync(`${cmd} faces gs://nodejs-docs-samples/video/google_gmail.mp4`);
  t.regex(output, /Thumbnail size: \d+/);
});

// analyze_labels
test(`should analyze labels`, async (t) => {
  const output = await runAsync(`${cmd} labels gs://nodejs-docs-samples/video/cat.mp4`);
  t.regex(output, /Label description: Whiskers/);
});

// analyze_shots
test(`should analyze shots`, async (t) => {
  const output = await runAsync(`${cmd} shots gs://nodejs-docs-samples/video/gbike_dinosaur.mp4`);
  t.regex(output, /Scene 0:/);
});
