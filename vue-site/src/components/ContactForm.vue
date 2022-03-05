<template>
    <div class="email-form" onsubmit="return false">
        <form>
            <label for="name">Name</label>

            <!-- Start with this as v-bind:name="name" -->
            <!-- As :name="name", the value in textarea does not update and is stuck as the ref(value) -->
            <input type="text" v-model="name" id="name" />
            <fieldset>
                <legend>Would you like to apply to The Restaurant?</legend>
                <input type="radio" id="interest-yes" name="interest" 
                       v-model="applyInterest" value="interested">
                <label class="interest-label" for="interest-yes">Yes</label>
                <input type="radio" id="interest-no" name="interest" 
                       v-model="applyInterest" value="hi">
                <label class="interest-label" for="interest-no">No</label>
            </fieldset>
            <label v-if="applyInterest === 'interested'" for="welcome-text">Please talk about your past experiences in the food industry</label>
            <textarea v-if="applyInterest === 'interested'" textarea :placeholder="'Welcome ' + name"></textarea>
            <!-- <textarea :placeholder="getWelcomeMessage"></textarea> -->
            <input type="submit" />
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
    name: 'ContactForm',
    setup() {
        const applyInterest = ref();
        const name = ref('');

        // const getWelcomeMessage = computed (() => {
        //     let tempName = name.value ? name.value : 'you';
        //     return 'Application for ' + tempName + '!';
        // })

        return { applyInterest, name }
    }
})
</script>

<style scoped>
form {
    width: 300px;
    margin: 40px auto;
}

label {
    display: block;
}
label.interest-label {
    display: inline-block;
}

input[type=text], textarea, input[type=submit], fieldset {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--secondary);
}

input[type=submit] {
    background-color: var(--secondary);
    border: none;
    color: var(--dark);
    font-weight: bold;
    cursor: pointer;
}

textarea {
    resize: none;
    height: 150px;
}

fieldset {
    margin-bottom: 30px;
}
</style>