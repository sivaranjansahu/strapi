const slugify = require('slugify');

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    if (data.Title) {
      data.slug = slugify(data.Title, { lower: true });
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    if (data.Title && !data.slug) {
      data.slug = slugify(data.Title, { lower: true });
    }
  }
};
