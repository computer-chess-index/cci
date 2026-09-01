# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3129<sub>(+108) | 3332<sub>(+138) | 3371<sub>(+100) |  |
| 3.5 | 2026-06-02 | 3021<sub>(+98) | 3194<sub>(+51) | 3271<sub>(+96) |  |
| 3.3.1 | 2026-02-10 | 2923<sub>(-25) | 3143<sub>(-28) | 3175<sub>(-18) |  |
| 3.3 | 2026-02-09 | 2948<sub>(+29) | 3171<sub>(+58) | 3193<sub>(+25) |  |
| 3.2 | 2025-12-21 | 2919<sub>(+88) | 3113<sub>(+98) | 3168<sub>(+70) |  |
| 3.1 | 2025-11-28 | 2831<sub>(+74) | 3015<sub>(+73) | 3098<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2757<sub>(+535) | 2942<sub>(+535) | 2966<sub>(+485) |  |
| 2.1 | 2025-10-13 | 2222 | 2407 | 2481 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-01 04:37:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2222, 2757, 2831, 2919, 2948, 2923, 3021, 3129]
  line "STC (8.0+0.08s)" [2222, 2757, 2831, 2919, 2948, 2923, 3021, 3129]
  line "LTC (60.0+0.60s)" [2407, 2942, 3015, 3113, 3171, 3143, 3194, 3332]
  line "" [2481, 2966, 3098, 3168, 3193, 3175, 3271, 3371]
  line "VLTC (2m24s+1.12s)" [2481, 2966, 3098, 3168, 3193, 3175, 3271, 3371]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3371 | 28 | 322 | 50% | 3368 | 74% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3332 | 29 | 302 | 49% | 3339 | 73% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3129 | 31 | 280 | 48% | 3141 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3271 | 27 | 368 | 49% | 3278 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 27 | 364 | 51% | 3183 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3021 | 28 | 364 | 49% | 3028 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3175 | 35 | 228 | 52% | 3159 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 42 | 158 | 53% | 3124 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2923 | 41 | 170 | 49% | 2934 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3193 | 104 | 24 | 58% | 3129 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3171 | 102 | 24 | 54% | 3135 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2948 | 110 | 24 | 50% | 2952 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 35 | 226 | 49% | 3179 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3113 | 33 | 260 | 52% | 3098 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2919 | 33 | 264 | 50% | 2920 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3098 | 35 | 232 | 51% | 3092 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3015 | 36 | 212 | 52% | 2996 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2831 | 37 | 224 | 48% | 2850 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2966 | 51 | 128 | 57% | 2888 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 43 | 184 | 59% | 2853 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 56 | 108 | 53% | 2714 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 57 | 110 | 48% | 2511 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2407 | 58 | 108 | 48% | 2427 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2222 | 62 | 88 | 51% | 2215 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |