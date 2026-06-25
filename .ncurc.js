module.exports = {
  reject: [
    // js-yaml 5.x changed its module exports (no named `types` export) and breaks the current
    // CommonJS build (`The requested module 'js-yaml' does not provide an export named 'types'`).
    // Pin to 4.x pending a deliberate migration.
    'js-yaml',
    // commander 15.x is a new major; pin to 14.x pending a deliberate upgrade.
    'commander'
  ]
}
