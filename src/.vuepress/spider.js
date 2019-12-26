const rp = require('request-promise');
const cherrio = require('cheerio');

async function getUrl() {
  // 图虫网， 图片下载有点麻烦，以后再扩展吧
  let response = await rp(
    {
    uri: 'https://tuchong.com/rest/tags/%E9%A3%8E%E5%85%89/posts',
    page: 1,
    count: 20,
    order: 'weekly',
    json: true
    });
  response = response.postList;
  const res = [];
  response.forEach(post => {
    res.push({
      url: post.cover_image_src,
      title: post.title,
      // width: post.images ? post.images[0].width : 0,
      // height: post.images ? post.images[0].height : 0,
    })
  });
  // const $ = cherrio.load(html);
  // const res = [];
  // $('.post-item > .post-body').each((index, el) => {
  //   res.push($(el).attr('data-lazy-url'));
  // });
}

async function getUrl1() {
  let res = await rp('https://pixabay.com/zh/');
  const $ = cherrio.load(res);
  const images = [];
  $('img').each((index, el) => {
    const src = $(el).attr('src');
    if (/https/.test(src)) images.push(src);
  });
  console.log(images);
  return images;
}

getUrl1();

// export { getUrl1 };
