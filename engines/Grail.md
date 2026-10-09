# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2948<sub>(+32) | 3222<sub>(+45) | 3291<sub>(+21) |  |
| 2.0.0 | 2026-05-11 | 2916<sub>(+103) | 3177<sub>(+88) | 3270<sub>(+83) |  |
| 1.1.0 | 2026-02-28 | 2813<sub>(+355) | 3089<sub>(+362) | 3187<sub>(+324) |  |
| 1.0.4 | 2026-01-16 | 2458<sub>(+128) | 2727<sub>(+38) | 2863<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2330<sub>(+26) | 2689<sub>(+115) | 2762<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2304<sub>(+27) | 2574<sub>(+21) | 2688<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2277<sub>(+36) | 2553<sub>(-15) | 2742<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2241 | 2568 | 2796 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:38:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "" [2241, 2277, 2304, 2330, 2458, 2813, 2916, 2948]
  line "STC (8.0+0.08s)" [2241, 2277, 2304, 2330, 2458, 2813, 2916, 2948]
  line "LTC (60.0+0.60s)" [2568, 2553, 2574, 2689, 2727, 3089, 3177, 3222]
  line "" [2796, 2742, 2688, 2762, 2863, 3187, 3270, 3291]
  line "VLTC (2m24s+1.12s)" [2796, 2742, 2688, 2762, 2863, 3187, 3270, 3291]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3291 | 26 | 420 | 52% | 3278 | 57% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3222 | 25 | 432 | 51% | 3213 | 60% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2948 | 25 | 480 | 52% | 2934 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 29 | 316 | 51% | 3263 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3177 | 29 | 322 | 48% | 3189 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2916 | 29 | 352 | 52% | 2896 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3187 | 27 | 392 | 53% | 3167 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3089 | 28 | 356 | 51% | 3075 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2813 | 28 | 398 | 51% | 2803 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2863 | 34 | 272 | 49% | 2871 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2727 | 35 | 252 | 50% | 2728 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2458 | 31 | 348 | 55% | 2414 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2762 | 43 | 172 | 50% | 2766 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2689 | 45 | 160 | 51% | 2682 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2330 | 44 | 172 | 51% | 2323 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2688 | 38 | 214 | 50% | 2689 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2574 | 35 | 264 | 46% | 2612 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2304 | 41 | 212 | 55% | 2260 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 42 | 180 | 52% | 2727 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2553 | 40 | 202 | 53% | 2526 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2277 | 50 | 142 | 48% | 2296 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2796 | 61 | 92 | 42% | 2866 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2568 | 59 | 92 | 46% | 2601 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2241 | 67 | 82 | 59% | 2157 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |