function handler(event) {
    var request = event.request;
    var uri = request.uri;

    //🙈
    // Always redirect to root index.html
    if (uri.endsWith("/") || !uri.includes(".")) {
        request.uri = "/index.html";
    }

    return request;
}