$(document).ready(function() {
  var wishList = [
    {
      item: "ZaReason Strata 7440",
      link: "https://zareason.com/shop/Strata-7440.html",
      image: "https://zareason.com/shop/images/P/strata7440front300.png",
      description: "Pre-setup Ubuntu based laptop with good hardware. Ubuntu is a Linux based OS, making it suitable for a Computer Science environment."
    },
    {
      item: "MEAN Machine",
      link: "https://leanpub.com/mean-machine",
      image: "https://s3.amazonaws.com/titlepages.leanpub.com/mean-machine/large?1438357190",
      description: "The MEAN Stack is a popular set of tools used for developing modern websites."
    },
    {
      item: "Hanes Jersey Knit Shorts",
      link: "http://www.amazon.com/Hanes-Mens-Jersey-Sleep-Shorts/dp/B0042AQ0EO",
      image: "http://ecx.images-amazon.com/images/I/816phRkqX6L._UX522_.jpg",
      description: "Just some nice shorts to wear to sleep in the dorm!"
    },
    {
      item: "Sennheiser HD 205-II",
      link: "http://en-us.sennheiser.com/dj-headphones-closed-hd-205",
      image: "http://en-us.sennheiser.com/images/654/all/square/3633/square_louped_hd_205_01_sq_dj_sennheiser.png",
      description: "Good headphones to wear while studying, and great quality."
    },
    {
      item: "Cash",
      link: "https://www.treasury.gov/Pages/default.aspx",
      image: "http://herhussle.com/wp-content/uploads/2014/03/heart_money1_.jpg",
      description: "Just some money for food and fun in college!"
    },
    {
      item: "Slurm Sticker",
      link: "http://www.redbubble.com/people/danur55/works/16111939-enjoy-slurm-geek-funny-nerd?grid_pos=13&p=sticker",
      image: "http://ih1.redbubble.net/image.93034363.1939/sticker,375x360.u1.png",
      description: "Slurm is a drink from the show Futurama, this is just a nice sticker for a new bare laptop (hint hint)."
    },
    {
      item: "Github Sticker Pack 4",
      link: "http://github.myshopify.com/products/octodex-sticker-packs",
      image: "http://cdn.shopify.com/s/files/1/0051/4802/products/StickerPackFour_1024x1024.jpg?v=1429028897",
      description: "More stickers for a laptop."
    },
    {
      item: "OSU Sweatshirt",
      link: "http://shop.ohiostatebuckeyes.com/style/NCAA-Mens-Holiday-Sweater-Crew-Neck-Sweatshirt/20824344",
      image: "http://lf.hatworld.com/hwl?set=sku[20824344],c[2],w[400],h[300]&load=url[file:product]",
      description: "A nice WARM sweatshirt, with adequate school representation."
    }
  ];

  var htmlString = '';
  $.each(wishList, function(index, value) {
    htmlString += '<div>';
    htmlString += '<h1><a href="' + value.link + '" target="_blank">' + value.item + '</a></h1>';
    htmlString += '<img src="' + value.image + '"/>';
    htmlString += '<p>' + value.description + '</p>';
    htmlString += '</div>';
  });
  $(".list-item").html(htmlString);
  $('.list-item').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    mobileFirst: true,
    pauseOnHover: false
  });
});