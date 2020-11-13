<template>
    <div class="sidebar">
        <div class="logo iconfont icon-arm text-3xl" />
        <ul class="sm:with-title">
            <li v-for="item in menu" :key="item.index">
                <template v-if="item.route">
                    <router-link
                        :key="item.index"
                        :to="{name: item.route}"
                        exact-active-class="active"
                        :index="item.index"
                    >
                        <span :class="`icon iconfont icon-${item.icon}`" />
                        <span class="hidden sm:inline-block">{{ item.title }}</span>
                    </router-link>
                </template>
                <template v-else>
                    <p class="title">{{ item.title }}</p>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MwSidebar',
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    }
}
</script>
