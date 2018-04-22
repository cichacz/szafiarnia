import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        background: String
    }
})
export default class ParallaxComponent extends Vue {
    scroll: string = '';

    created() {
        window.addEventListener('scroll', this.scrollParallax);
    }

    destroyed() {
        window.removeEventListener('scroll', this.scrollParallax);
    }

    private scrollParallax(e: Event) {
        let scrollOffset = window.scrollY/2;
        this.scroll = 'translateY(' + scrollOffset + 'px)';
    }
}