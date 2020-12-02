<template>
    <div
        v-show="visible"
        class="modal"
    >
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
                :class="{ 'modal_background': true, 'hide': closed, 'show': !closed }"
                aria-hidden="true"
                @click="hide()"
            >
                <div class="absolute inset-0 bg-gray-800 opacity-75" />
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div :class="{ 'modal_body': true, 'hide': closed, 'show': !closed }" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <slot name="body" />
                </div>
                <div
                    v-if="$slots.footer"
                    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                >
                    <slot name="footer" />
                </div>
            </div>
        </div>


        <div v-if="$slots.header" class="card-header">
            <slot name="header" />
        </div>
        <div class="card-body">
            <slot name="default" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MwModal',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            visible: false,
            closed: true,
        }
    },
    watch: {
        modelValue(val) {
            if (val) {
                this.$emit('open')
                this.visible = true
                let self = this
                setTimeout(() => {
                    self.closed = false
                    self.$emit('opened')
                }, 100)
            } else {
                this.hide()
            }
        }
    },
    methods: {
        hide() {
            this.$emit('update:modelValue', false)
            this.$emit('close')
            this.closed = true
            let self = this
            setTimeout(() => {
                self.visible = false
                self.$emit('closed')
            }, 500)
        },
    }

}
</script>