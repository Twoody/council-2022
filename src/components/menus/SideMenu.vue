<template>
	<div class="sidebar" :class="{ collapsed: isCollapsed }">
		<div class="sidebar-header" @click="toggleCollapsed">
			<font-awesome-icon
				v-if="isCollapsed"
				:icon="['fa', 'chevron-right']"
			/>
			<font-awesome-icon
				v-else
				:icon="['fa', 'chevron-left']"
			/>
		</div>
		<ul class="sidebar-nav">
			<li><a href="#">
				Link 1
			</a></li>
			<li><a href="#">
				Link 2
			</a></li>
			<li><a href="#">
				Link 3
			</a></li>
			<!-- Add more links here -->
		</ul>
	</div>
</template>

<script>
export default {
	name: "SideMenu",
	data () 
	{
		return {
			isCollapsed: false,
		}
	},
	methods: {
		toggleCollapsed () 
		{
			this.isCollapsed = !this.isCollapsed
		},
	},
}
</script>

<style scoped>
.sidebar {
	width: 200px;
	height: 100%;
	background-color: #f5f5f5;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	transition: width 0.3s ease-in-out;
}

.sidebar-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background-color: #e0e0e0;
	cursor: pointer;
}

.sidebar-header span {
	font-weight: bold;
	font-size: 1.2rem;
}

.sidebar-nav {
	list-style: none;
	margin: 0;
	padding: 10px;
}

.sidebar-nav li {
	margin-bottom: 5px;
}

.sidebar-nav a {
	display: block;
	padding: 5px;
	text-decoration: none;
	color: #333;
}

.collapsed {
	width: 60px;
}

.collapsed .sidebar-header span {
	display: none;
}
</style>

