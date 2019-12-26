<template>
	<div> 
        <ul class="blog-list">
            <li v-for="(item, index) in filteredList"
                class="blog-list__item">
                <BlogPostPreview 
                    v-show="index >= currentPage * pageSize && index < (currentPage + 1) * pageSize"
                    :item="item"
                />
                <ul v-for="tag in item.frontmatter.tags" class="blog-list__tags">
                    <li>
                        <button @click="addTag(tag)">{{ tag }}</button>
                    </li>
                </ul>
            </li>
        </ul>
        <Pagination :pages="totalPages" :current-page="currentPage" @page-change="pageChange"/>
    </div>
</template>

<script>
export default {
    name: 'BlogPostList',
    props: {
        // 所有的文章
        pages: {
            type: Array,
            default: []
        },
        pageSize: {
            type: Number,
            default: 5
        },
        startPage: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentPage: Math.ceil(this.startPage / this.pageSize),
            selectedTags: []
        }
    },
    computed: {
        filteredList() {
            if (this.pages) {
                
                return this.pages.filter(item => {
                    const isBlogPost = !!item.frontmatter.blog
                    const isReadyToPublish = new Date(item.frontmatter.date) <= new Date()
                     // check for locales
                    let isCurrentLocale = true;
                    if(this.$site.locales) {
                        const localePath = this.$route.path.split('/')[1] || "";
                        isCurrentLocale = item.relativePath.startsWith(localePath);   
                    }
                    // check if tags contain all of the selected tags
                    const hasTags = !!item.frontmatter.tags && this.selectedTags.every((tag) => item.frontmatter.tags.includes(tag))

                    if (!isBlogPost || !isReadyToPublish || (this.selectedTags.length > 0 && !hasTags) || !isCurrentLocale){ 
                        return false
                    }

                    return true
                    
                }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
            }
        },

        totalPages() {
            
            return Math.ceil(this.filteredList.length / this.pageSize)
        },
    },

    mounted() {
        this.currentPage =  Math.min(Math.max(this.currentPage, 0), this.totalPages - 1)
    },

    methods: {
        pageChange(index) {
          this.currentPage= index-1;
        },
        addTag(tag) {
            const tagExists = this.selectedTags.some(item => {
                return item === tag
            })

            if (!tagExists){
                this.selectedTags = this.selectedTags.concat(tag)
            }
        },
        removeTag(tag) {
            this.selectedTags.filter(t => t != tag)
        },
        resetTags(){
            this.selectedTags = []
        }
    }
}
</script>

<style scoped>
.blog-list {
	padding: 0;
	margin: 0;
}

.blog-list__item {
	list-style-type: none;
}

.blog-list__tags {
    margin-bottom: 15px;
}

.button--pagination {
	background-color: #32c8cf;
	border-radius: 4px;
	color: #fff;
	font-size: 0.8rem;
	padding: 0.5rem 0.75rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button--pagination:hover {
    background-color: #fff;
    border: 1px solid #32c8cf;
    border-radius: 4px;
    color: #32c8cf;
}

.clear-filter-btn {
    align-self: center;
    margin-left: 20px;
}

.filtered-heading {
    display: flex;
}

.pagination {
    text-align: center;
}
</style>
