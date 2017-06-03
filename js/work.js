// GRAPHIC DESIGN PROJECTS HANDLEBARS
$(function () {
  var source = $("#project-post").html();
  var template = Handlebars.compile(source);

  var context = {
    project: [{
        title: "Chronicle Magazine",
        date: "2012–2015",
        text: "Logos, layout designs, and promotional material for the Chronicle, Clemson University's student art and literary magazine",
        image: "chronicle-cover",
      },{
        title: "Dogs! Booklet",
        date: "2015",
        text: "Layout design for a Graphic Communications class at Clemson University",
        image: "dogs-spread",
      },{
        title: "Jamaica Stickers",
        date: "2015",
        text: "Sticker designs for a Graphic Communications class at Clemson University",
        image: "stickers",
      },{
        title: "Stillwater T-shirt",
        date: "2015",
        text: "T-shirt design for a Graphic Communications class at Clemson University",
        image: "stillwater-t-shirt",
      },{
        title: "TopTix Marketing Collateral",
        date: "2016–2017",
        text: "Print and digital RFP responses, email marketing campaign designs, advertisements, and other marketing collateral for TopTix, a ticketing, CRM/marketing, and fundraising software company ",
        image: "toptix-proposal"
      },{
        title: "Dogtooth Album Artwork",
        date: "2016–2017",
        text: "Print and digital album artwork for emerging hip hop producer Dogtooth",
        image: "dogtooth-artwork-with-border"
    }]
  };

  var compiled = template(context);
  $(document.body).append(compiled);
});
