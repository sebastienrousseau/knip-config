// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

export interface KnipConfig {
  [key: string]: unknown;
}

declare const config: KnipConfig;
export default config;
