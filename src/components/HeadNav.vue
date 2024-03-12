<template>
    <div class="border-bottom pb-4">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-virus" width="56" height="56" viewBox="0 0 24 24" stroke-width="3" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                        <path d="M12 7v-4" />
                        <path d="M11 3h2" />
                        <path d="M15.536 8.464l2.828 -2.828" />
                        <path d="M17.657 4.929l1.414 1.414" />
                        <path d="M17 12h4" />
                        <path d="M21 11v2" />
                        <path d="M15.535 15.536l2.829 2.828" />
                        <path d="M19.071 17.657l-1.414 1.414" />
                        <path d="M12 17v4" />
                        <path d="M13 21h-2" />
                        <path d="M8.465 15.536l-2.829 2.828" />
                        <path d="M6.343 19.071l-1.413 -1.414" />
                        <path d="M7 12h-4" />
                        <path d="M3 13v-2" />
                        <path d="M8.464 8.464l-2.828 -2.828" />
                        <path d="M4.929 6.343l1.414 -1.413" />
                    </svg>
                    <strong class="pl-2">Test WebSite</strong>
                </div>
                <div class="col-2">
                    <div class="row">
                        <div class="col">
                            <svg type="button" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle d-flex justify-content-end" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </div>
                        <div class="col">
                            <v-link href="login">

                                <svg xmlns="http://www.w3.org/2000/svg" type="button"  class="icon icon-tabler icon-tabler-login" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M21 12h-13l3 -3" />
                                    <path d="M11 15l-3 -3" />
                                </svg>
                            </v-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VLink from './VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>