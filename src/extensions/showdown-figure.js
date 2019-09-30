
  var figure = '<figure>' + '<img src="%1" alt="%2" title="%4">' + '<figcaption>%3</figcaption>' + '</figure>';
  var imgRegex = /(?:<p>)?<img.*?src="(.+?)".*?alt="(.*?)"(.*?)\/?>(?:<\/p>)?/gi;
  export const extension = {
    type: 'output',
    filter: function (text, converter, options) {
    var tag = figure;

    return text.replace(imgRegex, function (match, url, alt, rest) {
    return tag.replace('%1', url).replace('%2', alt).replace('%3', alt).replace('%4', alt);
    });
    }
  }
