exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeout;
    function printer () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(printer, 100);
      }
    }

    printer();

    return {
      cancel: function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
}
