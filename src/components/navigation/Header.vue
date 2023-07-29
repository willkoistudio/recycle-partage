<template>
	<section>
		<header class="abs full">
      <div class="fixed full">
			<v-toolbar scroll-off-screen height="30" id="subNav">
				<div class="pointer"><i class="fab fa-facebook-f"></i></div>
				<div class="pointer"><i class="fab fa-twitter"></i></div>
				<div class="pointer"><i class="fab fa-instagram"></i></div>
				<div class="pointer"><i class="fab fa-dribbble"></i></div>
				<div class="pointer"><i class="fab fa-pinterest"></i></div>
				<v-spacer></v-spacer>
				<v-btn flat><v-icon>person</v-icon> connexion / inscription</v-btn>
			</v-toolbar>
			<v-toolbar scroll-off-screen dark id="mainNav" class="nunito">
				<!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
				<v-btn flat to="/home"><v-icon>home</v-icon> accueil</v-btn>
				<v-btn flat to="/category/art"><v-icon color="amber">color_lens</v-icon> art</v-btn>
				<v-btn flat to="/category/environnement"><v-icon color="green darken-1">vpn_lock</v-icon> environnement</v-btn>
				<v-btn flat to="/category/economie"><v-icon color="blue darken-1">attach_money</v-icon> économie</v-btn>
				<v-btn flat to="/marketplace"><v-icon color="red darken-1">shopping_cart</v-icon> marketplace</v-btn>
				<v-btn flat to="/about">qui sommes-nous ?</v-btn>
				<v-spacer></v-spacer>
        <div>User<v-btn flat icon><v-avatar><img src="../../assets/logo.png"></v-avatar></v-btn></div>
			</v-toolbar>
      </div>
		</header>
	</section>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
@import url('../../assets/styles.scss');
	header {
    z-index: 5;
		#subNav {
			padding: 0 15px;
			button {
				text-transform:capitalize;
				font-weight: 400;
			}
			.pointer {
				width:20px;
				margin: 0 15px;
				&:first-child {
					margin-right: 5px;
				}
				.fa {
					&-facebook-f {
						color:#3b5999;
						transition: 1s;
						&:hover {
							color: #254077;
						}
					}
					&-twitter {
						color:#55acee;
						transition: 1s;
						&:hover {
							color: #3689c4;
						}
					}
					&-instagram {
						color:#e4405f;
						transition: 1s;
						&:hover {
							color: #000;
						}
					}
					&-dribbble {
						color:#ea4c89;
						transition: 1s;
						&:hover {
							color: #bf2f66;
						}
					}
					&-pinterest {
						color:#bd081c;
						transition: 1s;
						&:hover {
							color: #960917;
						}
					}
				}
			}
		}
		#mainNav {
      background: #333;
      &.elevation-0 {
        transform: translateY(-30px) !important;
        z-index: 5;
      }
		}
	}
</style>
