<template>
    <div class="box-content w-full p-4 border-4">
        <!-- ... -->
        <h6>Gestione {{ translate(modelName + '.label', 1) }}</h6>
        <div>
            <div c-search-container>
            </div>
            <div c-list-container>

            </div>
            <div c-edit-area>
                <div class="portlet-header border-bottom mb-3" :class="$crud.env.layoutGradientColor">
                        <span class="d-block text-white text-truncate font-weight-medium" v-show="updateTitle">
                          {{ updateTitle }}
                        </span>
                </div>
                <div class="portlet-body pb-0" c-edit-container>

                </div>
            </div>
        </div>
        <span c-view_dialog class="modal hidden" tabindex="-1" role="dialog"
              aria-labelledby="" aria-hidden="true"
        >
            <div class="w-3/4" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ viewTitle }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="fi fi-close fs--18" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div c-view-container class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button crud-button="ok" type="button" class="btn btn-outline-success"
                                data-dismiss="modal">
                            <i class="fi fi-check"></i>
                            OK
                        </button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </span>
    </div>

</template>

<script>

import cComponent from '../misc/cComponent'
import {crud, cManageMixin} from 'crud-vue-core'

crud.conf['c-manage'].collapsible = false
crud.conf['c-manage'].collapsed = false
crud.conf['c-manage'].collapseId = null

crud.conf['c-manage'].listSelector = '[c-list-container]';
crud.conf['c-manage'].searchSelector = '[c-search-container]';
crud.conf['c-manage'].updateAreaSelector = '[c-edit-area]';
crud.conf['c-manage'].updateSelector = '[c-edit-container]';
crud.conf['c-manage'].viewSelector = '[c-view-container]';

export default {
    name: 'c-manage',
    extends: cComponent,
    // props: ['cModel', 'cInlineEdit', 'cCollapsible'],
    mixins: [cManageMixin],
    methods: {
        _dynamicData(conf) {
            conf.collapseId = 'manageCollapse' + conf.modelName
            return conf
        },
        showInsert() {
            this.jQe(this.updateAreaSelector).removeClass('hidden');
            this.jQe(this.listSelector).addClass('hidden');
            this.jQe(this.searchSelector).addClass('hidden');
        },
        showEdit() {
            this.jQe(this.updateAreaSelector).removeClass('hidden');
            this.jQe(this.listSelector).addClass('hidden');
            this.jQe(this.searchSelector).addClass('hidden');
        },
        showList() {
            var that = this;
            if (!that.listComp) {
                console.log('cManage.showList, listComp non valido');
                return;
            }
            this.jQe(this.updateAreaSelector).addClass('hidden');
            this.jQe(this.listSelector).removeClass('hidden');
            this.jQe(this.searchSelector).removeClass('hidden');
        }

    }
}
</script>

<style scoped>

</style>
