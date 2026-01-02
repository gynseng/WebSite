$html = Get-Content -Raw 'c:\Users\otmoya\OneDrive - enChord\telewebtech Ot\Ot\Moya Integration Group WebSite\WebSite\index.html'
$classes = [regex]::Matches($html,'class="([^"]+)"') | ForEach-Object { $_.Groups[1].Value -split '\s+' } | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' } | Sort-Object -Unique
Write-Output '---HTML_CLASSES---'
$classes
$css = Get-Content -Raw 'c:\Users\otmoya\OneDrive - enChord\telewebtech Ot\Ot\Moya Integration Group WebSite\WebSite\styles.css'
# extract class selectors from selector lists (start of line or after a comma)
$selectors = [regex]::Matches($css,'(?m)(?:^|,)\s*\.([A-Za-z0-9_-]+)') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
Write-Output '---CSS_CLASSES---'
$selectors
Write-Output '---IN_HTML_NOT_IN_CSS---'
($classes | Where-Object { $_ -and ($_ -notin $selectors) }) | Sort-Object -Unique
Write-Output '---IN_CSS_NOT_IN_HTML---'
($selectors | Where-Object { $_ -and ($_ -notin $classes) }) | Sort-Object -Unique
