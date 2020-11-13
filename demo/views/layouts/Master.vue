<template>
    <div class="flex min-h-full bg-gray-800">
        <MwSidebar :class="{'closed': !showSidebar}" :menu="menu" />
        <div class="flex-grow bg-gray-200">
            <router-view />
        </div>
    </div>
</template>
<script>

export default {
    name: 'Master',
    data () {
        return {
            showSidebar: true,
            menu: [{
                title: 'demo.home',
                icon: 'game',
                route: 'demo-home',
            }, {
                title: 'demo.dashboard',
                icon: 'game',
                route: 'demo-dashboard',
            }, {
                title: 'demo.system',
            }, {
                title: 'demo.user',
                icon: 'activity',
                route: 'demo-user',
            }, {
                title: 'demo.devtools',
                icon: 'game',
                route: 'demo-devtools',
            }, {
                title: 'demo.ui',
                icon: 'gift',
                route: 'demo-ui',
            }
            ]
        }
    }
}
</script>