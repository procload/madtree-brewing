var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://madtree.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'MC5VcU96Y3dFQUFEMFhLSTF2.bm0m77-9Wu-_ve-_ve-_ve-_ve-_ve-_ve-_vWHvv73vv73vv73vv73vv70pIe-_ve-_ve-_ve-_vXw3ae-_vWFEew8',

  // -- OAuth
  // clientId: 'UqOzcwEAAD0XKI1u',
  // clientSecret: 'eda761fb0e35566b011499d40950faf7',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
  }

}
