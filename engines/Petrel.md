# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3132<sub>(+111) | 3332<sub>(+138) | 3370<sub>(+99) |  |
| 3.5 | 2026-06-02 | 3021<sub>(+98) | 3194<sub>(+51) | 3271<sub>(+97) |  |
| 3.3.1 | 2026-02-10 | 2923<sub>(-25) | 3143<sub>(-28) | 3174<sub>(-17) |  |
| 3.3 | 2026-02-09 | 2948<sub>(+29) | 3171<sub>(+58) | 3191<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2919<sub>(+87) | 3113<sub>(+98) | 3167<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2832<sub>(+75) | 3015<sub>(+73) | 3098<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2757<sub>(+535) | 2942<sub>(+534) | 2966<sub>(+485) |  |
| 2.1 | 2025-10-13 | 2222 | 2408 | 2481 |  |
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

Generated: 2026-09-06 06:26:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2222, 2757, 2832, 2919, 2948, 2923, 3021, 3132]
  line "STC (8.0+0.08s)" [2222, 2757, 2832, 2919, 2948, 2923, 3021, 3132]
  line "LTC (60.0+0.60s)" [2408, 2942, 3015, 3113, 3171, 3143, 3194, 3332]
  line "" [2481, 2966, 3098, 3167, 3191, 3174, 3271, 3370]
  line "VLTC (2m24s+1.12s)" [2481, 2966, 3098, 3167, 3191, 3174, 3271, 3370]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3370 | 27 | 330 | 50% | 3368 | 75% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3332 | 28 | 318 | 49% | 3339 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3132 | 30 | 296 | 49% | 3139 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3271 | 27 | 368 | 49% | 3276 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 27 | 364 | 51% | 3182 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3021 | 28 | 364 | 49% | 3028 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 35 | 228 | 52% | 3158 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 42 | 158 | 53% | 3124 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2923 | 41 | 170 | 49% | 2934 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3191 | 104 | 24 | 58% | 3128 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3171 | 102 | 24 | 54% | 3135 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2948 | 110 | 24 | 50% | 2952 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3167 | 35 | 226 | 49% | 3178 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3113 | 33 | 260 | 52% | 3097 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2919 | 33 | 264 | 50% | 2920 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3098 | 35 | 232 | 51% | 3092 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3015 | 36 | 212 | 52% | 2996 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2832 | 37 | 224 | 48% | 2850 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2966 | 51 | 128 | 57% | 2888 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 43 | 184 | 59% | 2853 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2757 | 56 | 108 | 53% | 2714 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 57 | 110 | 48% | 2512 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2408 | 58 | 108 | 48% | 2427 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2222 | 62 | 88 | 51% | 2217 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |