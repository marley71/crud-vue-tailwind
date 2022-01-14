
<script>
import cComponent from '../misc/cComponent'
import {dBaseMixin} from 'crud-vue-core'

export default {
  name: 'd-base',
  extends: cComponent,
  mixins: [dBaseMixin],
  methods: {
      show () {
          var that = this
          that.visible = true;
      },
      hide () {
          var that = this
          that.visible = false;
      }
  }
}
</script>

<style scoped>

</style>
