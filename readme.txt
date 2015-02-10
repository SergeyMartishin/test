Add it to your local server's folder.

Issues:
1. JSON. I use GitHub API. Avoid static file data.
2. $scope.watch is worked, but commented. Why? Because data will refresh after data changes.
3. Factories. I don't use it, because it is not necessary needed.
4. Some data for statistics are missing, because i don't find normal code source control api with full build stats.
5. In different places don't add green/red/grey borders. Too much css, html with "$scope.buildStatus" checks (empty status data[]).

Thanks for testing!
	