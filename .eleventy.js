module.exports = function (c) {
	c.addPassthroughCopy({ "_static": "/" })
	return { htmlTemplateEngine: 'njk', }
}
