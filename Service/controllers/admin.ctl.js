const fileSystem = require ('fs')
const uzip       = require ('unzip')
const soundex    = require ('soundex-code')
const rimraf     = require ('rimraf')
const path       = require ('path')
const stemmer    = require ('stemmer')
const word       = require ('../models/words')
const document   = require ('../models/document')



