import no from './no';
export default (Comp, rightType) => ({
    components: {
        Comp,
        no,
      },
    computed: {
    hasRight() {
        const  rightList  = this.$store.state.power;
        return rightList.includes(rightType);
        }
    },
    render(h) {
        console.log(no)
    return this.hasRight ? h(Comp, {}) : h(no, {});
    }
})