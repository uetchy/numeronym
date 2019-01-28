#!/usr/bin/env node

function numeronymify(string) {
  return string.replace(/^(.).+(.)$/, `$1${query.length - 2}$2`)
}

function capitalize(string) {
  if (string.charAt(0) !== 'l') {
    return string.toLowerCase()
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const query = process.argv[2]
console.log(capitalize(numeronymify(query)))
