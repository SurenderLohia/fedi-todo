<GoogleAnalytics {stores} id={ga_measurment_id}/>

<script>
    import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte"
    import { stores } from "@sapper/app"

    let ga_measurment_id = "UA-164813758-1"  // your analytics id
</script>

<main>
	<slot></slot>
</main>