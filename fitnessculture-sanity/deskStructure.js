import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title("Website")
    .items([
      S.listItem()
        .title("Static Pages")
        .child(
          S.documentList()
            .title('All Pages')
            .filter('_type in ["indexPage","about","page","programPage"]')
        ),
      S.listItem()
        .title("Program Pages")
        .child(
          S.list()
            .title('Program')
            .items([
              S.listItem()
                .title('Men')
                 .child(
                   S.documentList()
                     .title('Men')
                     .menuItems(S.documentTypeList('program').getMenuItems())
                     .filter('_type in ["program"] && gender == "men"')
                     .params({ type: 'program'})
                 ),
              S.listItem()
                .title('Women')
                .child(
                  S.documentList()
                    .title('Women')
                    .menuItems(S.documentTypeList('program').getMenuItems())
                    .filter('_type in ["program"] && gender == "women"')
                    .params({ type: 'program'})
              ),
            ])
        ),
      S.listItem()
      .title('Landing Pages')
        .child(
          S.documentList()
            .title("All Landing Pages")
            .filter('_type in ["landingPage","basic","h3p","subscribe","webpage"]')
      ),
      S.listItem()
      .title("Testimonials")
      .child(
        S.list()
          .title('Gender')
          .items([
            S.listItem()
              .title('Male')
                .child(
                  S.documentList()
                    .title('Men')
                    .menuItems(S.documentTypeList('testimonial').getMenuItems())
                    .filter('_type in ["testimonial"]')
                    .params({ type: 'testimonial'})
                ),
            S.listItem()
              .title('Female')
              .child(
                S.documentList()
                  .title('Women')
                  .menuItems(S.documentTypeList('testimonial').getMenuItems())
                  .filter('_type in ["testimonial"]')
                  .params({ type: 'testimonial'})
            ),
          ])
      ),
      S.listItem()
      .title("Blogs")
      .child(
        S.documentList()
          .title('All Blogs')
          .menuItems(S.documentTypeList('post').getMenuItems())
          .filter('_type in ["post"]')
      ),
      S.listItem()
      .title("Products")
      .child(
        S.list()
          .title('Products')
          .items([
            S.listItem()
              .title('Products')
                .child(
                  S.documentList()
                    .title('Products')
                    .menuItems(S.documentTypeList('product').getMenuItems())
                    .filter('_type in ["product"]')
                    .params({ type: 'product'})
                ),
            S.listItem()
              .title('Variants')
              .child(
                S.documentList()
                  .title('Variants')
                  .menuItems(S.documentTypeList('variant').getMenuItems())
                  .filter('_type in ["variant"]')
                  .params({ type: 'variant'})
              ),
          ])
      ),
      S.listItem()
      .title("Objects")
      .child(
        S.list()
          .title('Objects')
          .items([
            S.listItem()
              .title('Technique')
                .child(
                  S.documentList()
                    .title('Technique')
                    .filter('_type in ["technique"]')
                    .params({ type: 'technique'})
                ),
            S.listItem()
              .title('Steps')
                .child(
                  S.documentList()
                    .title('Step')
                    .filter('_type in ["step"]')
                    .params({ type: 'step'})
                ),
            S.listItem()
              .title('Stats')
                .child(
                  S.documentList()
                    .title('Stat')
                    .filter('_type in ["stat"]')
                    .params({ type: 'stat'})
                ),
            S.listItem()
              .title('Questions')
              .child(
                S.documentList()
                  .title('Questions')
                  .filter('_type in ["question"]')
                  .params({ type: 'question'})
            ),
            S.listItem()
              .title('Price Benefits')
                .child(
                  S.documentList()
                    .title('Price Benefits')
                    .filter('_type in ["priceBenefit"]')
                    .params({ type: 'priceBenefit'})
                ),
            S.listItem()
              .title('Features')
              .child(
                S.documentList()
                  .title('Features')
                  .filter('_type in ["feature"]')
                  .params({ type: 'feature'})
            ),
            S.listItem()
            .title('Persona')
              .child(
                S.documentList()
                  .title('Persona')
                  .filter('_type in ["persona"]')
                  .params({ type: 'persona'})
              ),
            S.listItem()
              .title('Guarantee')
              .child(
                S.documentList()
                  .title('Guarantee')
                  .filter('_type in ["guarantee"]')
                  .params({ type: 'guarantee'})
            ),
            S.listItem()
              .title('Exercise')
              .child(
                S.documentList()
                  .title('Exercise')
                  .filter('_type in ["exercise"]')
                  .params({ type: 'exercise'})
            ),
            S.listItem()
              .title('Category')
              .child(
              S.documentList()
                .title('Category')
                .filter('_type in ["category"]')
                .params({ type: 'category'})
            ),
            S.listItem()
              .title('Benefit')
              .child(
                S.documentList()
                  .title('Benefit')
                  .filter('_type in ["benefit"]')
                  .params({ type: 'benefit'})
            ),
            S.listItem()
              .title('Block Content')
              .child(
              S.documentList()
                .title('Block Content')
                .filter('_type in ["blockContent"]')
                .params({ type: 'blockContent'})
            ),
            S.listItem()
              .title('Attributes')
              .child(
                S.documentList()
                  .title('Attributes')
                  .filter('_type in ["attribute"]')
                  .params({ type: 'attribute'})
            ),
            S.listItem()
              .title('Authors')
              .child(
              S.documentList()
                .title('Authors')
                .filter('_type in ["author"]')
                .params({ type: 'author'})
            ),
            S.listItem()
            .title('Price')
            .child(
            S.documentList()
              .title('Price')
              .filter('_type in ["price"]')
              .params({ type: 'price'})
          ),
          S.listItem()
            .title('Social Proof')
            .child(
            S.documentList()
              .title('Proof')
              .filter('_type in ["proof"]')
              .params({ type: 'proof'})
          ),
          S.listItem()
          .title('Tabs')
          .child(
          S.documentList()
            .title('Tab')
            .filter('_type in ["tab"]')
            .params({ type: 'tab'})
        ),

          ])
      ),
    ]);