<template>
  <section id="login">
    <v-layout row class="full-h">
      <v-flex xs8 id="animLogin">
        <h1 class="display-4">animation login</h1>
      </v-flex>
      <v-flex xs4 id="connexion" class="d-flex">
        <div class="pa-4 my-auto">
          <img src="../assets/logo.svg" width="180px" class="mx-auto d-block my-5" alt="logo Recycle & Partage">
          <form>
            <v-text-field
            v-model="userName"
            :rules="userNameRules"
            dark
            prepend-icon="person"
            color="red darken-1"
            label="Identifiant"
            :error-messages="errors.collect('userName')"
            v-validate="'required'"
            data-vv-name="userName"
            clearable></v-text-field>

            <v-text-field
            v-model="password"
            :rules="pwdRules"
            dark prepend-icon="lock"
            type="password"
            color="red darken-1"
            label="Mot de passe"
            :error-messages="errors.collect('password')"
            v-validate="'required'"
            data-vv-name="password"
            clearable
            ></v-text-field>
            <v-btn :disabled="isValid" dark type="submit" @click="submit" color="red darken-1 mx-auto d-block mt-3" id="login_btn"><v-icon small>vpn_key</v-icon> Se connecter</v-btn>
            <router-link to="/login" class="txtCenter full d-inline-block mt-2" id="forgot">Mot de passe oublié ?</router-link>
          </form>
          <pre>{{$validator.validity}}</pre>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    userName: '',
    password: '',
    userNameRules: [],
    pwdRules: [],
    isValid: false,
    dictionary: {
      attributes: {
        userName: 'Identifiant',
        password: 'Mot de passe'
      },
      custom: {
        userName: {
          required: () => 'Vous devez entrer un nom d\'utilisateur'
          // custom messages
        },
        password: {
          required: () => 'Vous devez entrer un mot de passe'
        },
        mounted () {
          this.$validator.localize('fr', this.dictionary)
        }
      }
    }
  }),
  $_veeValidate: {
    validator: 'new'
  },
  watch: {
    '$validator.errors.items' (val) {
      if (!val.length) {
        this.isValid = false
      } else {
        this.isValid = true
      }
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll().then((result) => {
        if (!result) {
        } else {
          this.$router.push('/')
        }
      })
    }
  },
  created () {
    this.$validator.locale = 'fr'
    this.$validator.localize('fr', this.dictionary)
    this.isValid = false
    console.log('validators', this.$validator)
  }
}
</script>

<style scoped lang="scss">
  #login {
    height: 100%;
    #animLogin {

    }
    #connexion {
      background: #222;
      #forgot {
        color: #fff;
        transition: all 0.5s;
        &:hover {
          color:#E53935;
          transition: all 0.5s;
        }
      }
    }
  }
</style>
