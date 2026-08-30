# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3127<sub>(+107) | 3333<sub>(+140) | 3370<sub>(+100) |  |
| 3.5 | 2026-06-02 | 3020<sub>(+99) | 3193<sub>(+52) | 3270<sub>(+97) |  |
| 3.3.1 | 2026-02-10 | 2921<sub>(-26) | 3141<sub>(-29) | 3173<sub>(-18) |  |
| 3.3 | 2026-02-09 | 2947<sub>(+31) | 3170<sub>(+58) | 3191<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2916<sub>(+86) | 3112<sub>(+99) | 3167<sub>(+70) |  |
| 3.1 | 2025-11-28 | 2830<sub>(+75) | 3013<sub>(+73) | 3097<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2755<sub>(+533) | 2940<sub>(+534) | 2965<sub>(+485) |  |
| 2.1 | 2025-10-13 | 2222 | 2406 | 2480 |  |
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

Generated: 2026-08-30 06:27:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2222, 2755, 2830, 2916, 2947, 2921, 3020, 3127]
  line "STC (8.0+0.08s)" [2222, 2755, 2830, 2916, 2947, 2921, 3020, 3127]
  line "LTC (60.0+0.60s)" [2406, 2940, 3013, 3112, 3170, 3141, 3193, 3333]
  line "" [2480, 2965, 3097, 3167, 3191, 3173, 3270, 3370]
  line "VLTC (2m24s+1.12s)" [2480, 2965, 3097, 3167, 3191, 3173, 3270, 3370]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3370 | 28 | 322 | 50% | 3367 | 74% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3333 | 29 | 298 | 49% | 3337 | 73% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3127 | 31 | 280 | 48% | 3139 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 27 | 368 | 49% | 3275 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 27 | 364 | 51% | 3181 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3020 | 28 | 364 | 49% | 3027 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3173 | 35 | 228 | 52% | 3156 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3141 | 42 | 158 | 53% | 3123 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2921 | 41 | 170 | 49% | 2932 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3191 | 104 | 24 | 58% | 3128 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3170 | 102 | 24 | 54% | 3133 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2947 | 110 | 24 | 50% | 2951 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3167 | 35 | 226 | 49% | 3178 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3112 | 33 | 260 | 52% | 3096 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2916 | 33 | 264 | 50% | 2919 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3097 | 35 | 232 | 51% | 3090 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3013 | 36 | 212 | 52% | 2994 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2830 | 37 | 224 | 48% | 2849 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2965 | 51 | 128 | 57% | 2886 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2940 | 43 | 184 | 59% | 2851 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2755 | 56 | 108 | 53% | 2712 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2480 | 57 | 110 | 48% | 2511 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2406 | 58 | 108 | 48% | 2426 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2222 | 62 | 88 | 51% | 2215 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |