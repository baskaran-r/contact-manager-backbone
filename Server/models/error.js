function Error(err, code) {
  this.err = err;
  this.code = code;
}

module.exports = Error;