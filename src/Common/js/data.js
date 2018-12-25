const URL_CONST = {
    popular_url: "https://api.douban.com/v2/movie/in_theaters",  //热映
    coming_url: "https://api.douban.com/v2/movie/coming_soon",  //待映
    top_url: "https://api.douban.com/v2/movie/top250",  //top250
    subject_url: "https://api.douban.com/v2/movie/subject/",  //电影详情
    celebrity_url: "https://api.douban.com/v2/movie/celebrity/",   //人物详情
    searchByKeyword_url: "https://api.douban.com/v2/movie/search?q=", //热门关键词
    searchByTag_url: "https://api.douban.com/v2/movie/search?tag="  //热门标签
}

//分页参数
const PAGE_CONFIG = {
    city: "北京",
    count: 20
}

export{
    URL_CONST,
    PAGE_CONFIG
}