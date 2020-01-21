exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let deferred = $.Deferred();

    setTimeout(function() {
      deferred.resolve(value);
    }, 1);

    return deferred.promise();
  },

  manipulateRemoteData: function(url) {
    let deferred = $.Deferred();

    $.ajax({
      url: url
    })
    .then(function(data) {
      let stringArray = $.map(data.people, function(person) {
        return person.name;
      });
      deferred.resolve(stringArray.sort());
    });

    return deferred.promise();
  }
};
