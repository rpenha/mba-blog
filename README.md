# React Blog

This is a React SPA blog built on top of Contentful Headless CMS.

Running version: [https://blog.rpenha.net/](https://blog.rpenha.net/)

### Technology Stack

* **Frontend:**
    * ReactJS: [https://react.dev/](https://react.dev/)
    * React Router: [https://reactrouter.com/](https://reactrouter.com/)
    * Vite: [https://vitejs.dev/](https://vitejs.dev/)
    * Bootstrap with SASS customization: [https://getbootstrap.com/](https://getbootstrap.com/)
    * SASS: [https://sass-lang.com/](https://sass-lang.com/) 
    * Terser (for JS minification and splitting): [https://terser.org/](https://terser.org/)
    * PurgeCSS (for minimal CSS bundle size): [https://purgecss.com/](https://purgecss.com/)
* **Package Manager:** pnpm: [https://pnpm.io/](https://pnpm.io/)
* **Hosting:** AWS Cloudfront & AWS S3 Static Web App Hosting: [https://console.aws.amazon.com/amplify/home](https://console.aws.amazon.com/amplify/home)
* **Headless CMS:** Contentful: [https://www.contentful.com/](https://www.contentful.com/)

### Environment Variables

The following environment variables are required and should be defined in a `.env` file:

* `VITE_CONTENTFUL_SPACE_ID`: Your Contentful Space ID
* `VITE_CONTENTFUL_ACCESS_TOKEN`: Your Contentful Delivery API Access Token (**Important: Keep this secret!**).

**Note:** You should never commit the `.env` file to version control.

### Production Setup Instructions

1. Clone this repository.
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the project root directory and add the required environment variables (see above).
4. Build the project for production:

   ```bash
   pnpm build
   ```

   This will create an optimized production build in the `dist` folder.

5. Deploy the `dist` folder to your AWS S3 bucket and configure Cloudfront for distribution.

### Developement Setup Instructions

1. Clone this repository.
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the project root directory and add the required environment variables (see above).
4. Build the project for development:

   ```bash
   pnpm dev
   ```

    This will start a local copy of the app on [http://localhost:5173/](http://localhost:5173/) for development.

### Content Management

This blog utilizes Contentful as a headless CMS for managing blog content. Content types and models are defined within the Contentful platform.

**Important:** Ensure you configure the correct `VITE_CONTENTFUL_SPACE_ID` and `VITE_CONTENTFUL_ACCESS_TOKEN` environment variables to connect to your Contentful space.

#### JSON Example of a blog post item
```json
{
  "name": "Post",
  "description": "",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "author",
      "name": "Author",
      "type": "Link",
      "localized": false,
      "required": true,
      "validations": [
        {
          "linkContentType": [
            "author"
          ]
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    },
    {
      "id": "category",
      "name": "Category",
      "type": "Link",
      "localized": false,
      "required": true,
      "validations": [
        {
          "linkContentType": [
            "category"
          ]
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    },
    {
      "id": "summary",
      "name": "Summary",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "cover",
      "name": "Cover",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [
        {
          "linkMimetypeGroup": [
            "image"
          ]
        },
        {
          "assetImageDimensions": {
            "width": {
              "min": 800,
              "max": null
            },
            "height": {
              "min": 200,
              "max": null
            }
          }
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    },
    {
      "id": "body",
      "name": "Body",
      "type": "RichText",
      "localized": false,
      "required": true,
      "validations": [
        {
          "enabledMarks": [
            "bold",
            "italic",
            "underline",
            "code",
            "superscript",
            "subscript"
          ],
          "message": "Only bold, italic, underline, code, superscript, and subscript marks are allowed"
        },
        {
          "enabledNodeTypes": [
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "heading-6",
            "ordered-list",
            "unordered-list",
            "hr",
            "blockquote",
            "embedded-entry-block",
            "embedded-asset-block",
            "table",
            "hyperlink",
            "entry-hyperlink",
            "asset-hyperlink",
            "embedded-entry-inline"
          ],
          "message": "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed"
        },
        {
          "nodes": {}
        }
      ],
      "disabled": false,
      "omitted": false
    }
  ],
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "xj8ro83rjak0"
      }
    },
    "id": "post",
    "type": "ContentType",
    "createdAt": "2024-04-10T00:43:34.084Z",
    "updatedAt": "2024-04-15T20:26:56.814Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 63,
    "publishedAt": "2024-04-15T20:26:56.814Z",
    "firstPublishedAt": "2024-04-10T00:43:34.461Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "3KHPR1faSdIgPMY8cWpX4y"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "3KHPR1faSdIgPMY8cWpX4y"
      }
    },
    "publishedCounter": 32,
    "version": 64,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "3KHPR1faSdIgPMY8cWpX4y"
      }
    },
    "urn": "crn:contentful:::content:spaces/xj8ro83rjak0/environments/master/content_types/post"
  }
}
```

### Running Infrastructure

```

                +---------------+
                |     User      |
                +---------------+
                        |
                        v
                +---------------+        +----------------+
                |    Browser    |------->|   Contentful   |
                +---------------+        +----------------+
                        |
                        v
                +---------------+        +----------------+
                |  Blog Domain  |------->|    Route 53    |
                +---------------+        +----------------+
                                                  |
                                                  v
                                         +-----------------+       +-----------------+
                                         |    CloudFront   |------>| AWS Certificate |
                                         +-----------------+       |     Manager     |
                                         |    S3 Origin    |       +-----------------+
                                         +-----------------+
                                                 |
                                                 v
                                        +-------------------+
                                        | S3 Content Bucket |
                                        +-------------------+
                                             
```

### Additional Notes

* This project utilizes a customized SASS version of Bootstrap for styling consistency.
* Code splitting and minification are handled by Terser to improve application performance.
* PurgeCSS ensures the final CSS bundle only contains styles used by the application components.
