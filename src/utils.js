class PostEntry {
    constructor(entry) {
        this.id = entry.sys.id;
        this.title = entry.fields.title;
        this.slug = entry.fields.slug;
        this.author = entry.fields.author.fields.name;
        this.category = new Category(entry.fields.category.fields.title, entry.fields.category.fields.slug);
        if (entry.fields.cover)
            this.cover = new Cover(entry.fields.cover.fields.title, entry.fields.cover.fields.file.url);
        this.summary = entry.fields.summary;
        this.body = entry.fields.body;
        this.date = new Date(entry.sys.createdAt);
    }
}

class Category {
    constructor(title, slug) {
        this.title = title;
        this.slug = slug;
    }
}

class Cover {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
}

export default PostEntry;
