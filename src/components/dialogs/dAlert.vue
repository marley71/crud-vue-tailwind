
<script>
import cComponent from '../misc/cComponent'
import {dAlertMixin} from 'crud-vue-core'

export default {
  name: 'd-alert',
  extends: cComponent,
  mixins: [dAlertMixin],
  props: {
    'cMessage': {
      default: ''
    },
    'cTime': {
      default: 2000
    }
  },
    methods: {
        show () {
            var that = this;
            if (that.cTime !== 0) {
                setTimeout(function() {
                    that.hide();
                }, that.cTime);
            }
        },
        hide () {
            var that = this;
            that.$destroy();
            window.jQuery(that.jQe()).remove();
        },
    }
}
</script>

<style scoped>
.crud-alert {
    z-index:100000;
    width:50%;
    left:25%;
}
body .crud-alert {
    position: fixed;
    top: 0;
}
</style>
