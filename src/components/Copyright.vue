<template>
	<div class="copyright-wrapper">
		Copyright
		<font-awesome-icon icon="fa fa-copyright" />&nbsp;
		{{ formattedYear }}
		Tanner Woody All Rights Reserved
	</div>
</template>

<script>
import {DateTime} from "luxon"

export default {
	name: "Copyright",
	computed:
	{
		/**
		 * @todo Install datetime package
		 * @returns {string} Year in yyyy format
		 */
		formattedYear ()
		{
			// return DateTime.local().toFormat('yyyy')
			return "2023"
		},
	},
}
</script>
