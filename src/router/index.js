import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import ExploreCategory from '../views/ExploreCategory.vue';
import Signup from '../views/Signup.vue';
import OfferHelp from '../views/OfferHelp.vue';
import EditProfile from '../views/EditProfile.vue';
import Post from '../views/Post.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/explore',
		name: 'explore',
		component: Explore,
		children: [
			{
				path: ':id',
				name: 'exploreCategory',
				component: ExploreCategory,
			},
		],
	},
	{
		path: '/post/:id',
		name: 'Post',
		component: Post,
	},
	{
		path: '/signup',
		name: 'Signup',
		component: Signup,
	},
	{
		path: '/offerhelp',
		name: 'OfferHelp',
		component: OfferHelp,
	},
	{
		path: '/editprofile',
		name: 'EditProfile',
		component: EditProfile,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
