# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3329<sub>(+44) | 3491<sub>(+62) | 3528<sub>(+64) |  |
| 12.0 | 2026-05-08 | 3285<sub>(+44) | 3429<sub>(+9) | 3464<sub>(+17) |  |
| 11.0 | 2026-02-13 | 3241<sub>(+101) | 3420<sub>(+94) | 3447<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3140<sub>(+117) | 3326<sub>(+132) | 3389<sub>(+142) |  |
| 9.0 | 2025-12-08 | 3023<sub>(+79) | 3194<sub>(+51) | 3247<sub>(+53) |  |
| 8.0 | 2025-11-27 | 2944<sub>(+178) | 3143<sub>(+147) | 3194<sub>(+125) |  |
| 7.0 | 2025-11-07 | 2766 | 2996 | 3069 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tcheran+<version>&body=###%20Engine%20name%0ATcheran%0A%0A###%20Version%0A13.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:29:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "" [2766, 2944, 3023, 3140, 3241, 3285, 3329]
  line "STC (8.0+0.08s)" [2766, 2944, 3023, 3140, 3241, 3285, 3329]
  line "LTC (60.0+0.60s)" [2996, 3143, 3194, 3326, 3420, 3429, 3491]
  line "" [3069, 3194, 3247, 3389, 3447, 3464, 3528]
  line "VLTC (2m24s+1.12s)" [3069, 3194, 3247, 3389, 3447, 3464, 3528]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 25 | 380 | 50% | 3529 | 86% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 25 | 366 | 52% | 3482 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3329 | 29 | 304 | 51% | 3321 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3464 | 24 | 404 | 50% | 3468 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3429 | 25 | 380 | 51% | 3426 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 25 | 418 | 52% | 3268 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3447 | 23 | 434 | 51% | 3443 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 24 | 424 | 51% | 3410 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3241 | 25 | 448 | 51% | 3239 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3389 | 27 | 336 | 49% | 3397 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3326 | 30 | 268 | 49% | 3336 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3140 | 31 | 286 | 52% | 3128 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3247 | 38 | 180 | 50% | 3245 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 39 | 168 | 52% | 3181 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3023 | 37 | 212 | 47% | 3051 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3194 | 44 | 132 | 50% | 3193 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 37 | 204 | 57% | 3087 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2944 | 42 | 164 | 47% | 2967 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3069 | 51 | 116 | 47% | 3093 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2996 | 49 | 130 | 50% | 2975 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2766 | 54 | 116 | 56% | 2689 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |