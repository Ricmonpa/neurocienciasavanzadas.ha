import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'e3spfcgz',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  // URL del panel publicado: https://<studioHost>.sanity.studio
  studioHost: 'neurociencias-revista',
  deployment: { appId: 'zxskg5n08jaxneiwef0i92wg', autoUpdates: true },
})
