# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3141<sub>(+6) | 3318<sub>(-21) | 3378<sub>(+2) |  |
| 4.0 | 2026-08-04 | 3135<sub>(+107) | 3339<sub>(+138) | 3376<sub>(+100) |  |
| 3.5 | 2026-06-02 | 3028<sub>(+98) | 3201<sub>(+53) | 3276<sub>(+95) |  |
| 3.3.1 | 2026-02-10 | 2930<sub>(-25) | 3148<sub>(-29) | 3181<sub>(-17) |  |
| 3.3 | 2026-02-09 | 2955<sub>(+31) | 3177<sub>(+57) | 3198<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2924<sub>(+86) | 3120<sub>(+99) | 3174<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2838<sub>(+76) | 3021<sub>(+73) | 3105<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2762<sub>(+536) | 2948<sub>(+536) | 2973<sub>(+488) |  |
| 2.1 | 2025-10-13 | 2226 | 2412 | 2485 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:40:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0", "4.1"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2226, 2762, 2838, 2924, 2955, 2930, 3028, 3135, 3141]
  line "STC (8.0+0.08s)" [2226, 2762, 2838, 2924, 2955, 2930, 3028, 3135, 3141]
  line "LTC (60.0+0.60s)" [2412, 2948, 3021, 3120, 3177, 3148, 3201, 3339, 3318]
  line "" [2485, 2973, 3105, 3174, 3198, 3181, 3276, 3376, 3378]
  line "VLTC (2m24s+1.12s)" [2485, 2973, 3105, 3174, 3198, 3181, 3276, 3376, 3378]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3378 | 32 | 236 | 49% | 3384 | 75% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3318 | 32 | 246 | 51% | 3309 | 70% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3141 | 31 | 274 | 53% | 3117 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3376 | 27 | 338 | 50% | 3375 | 74% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3339 | 28 | 322 | 49% | 3345 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3135 | 30 | 308 | 49% | 3144 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3276 | 27 | 368 | 49% | 3283 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3201 | 27 | 364 | 51% | 3189 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3028 | 28 | 364 | 49% | 3035 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 35 | 228 | 52% | 3164 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3148 | 42 | 158 | 53% | 3129 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2930 | 41 | 170 | 49% | 2940 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3198 | 104 | 24 | 58% | 3133 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3177 | 102 | 24 | 54% | 3140 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2955 | 110 | 24 | 50% | 2958 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 35 | 226 | 49% | 3185 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3120 | 33 | 260 | 52% | 3104 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2924 | 33 | 264 | 50% | 2925 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3105 | 35 | 232 | 51% | 3098 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3021 | 36 | 212 | 52% | 3002 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2838 | 37 | 224 | 48% | 2855 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2973 | 51 | 128 | 57% | 2894 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2948 | 43 | 184 | 59% | 2858 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2762 | 56 | 108 | 53% | 2719 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2485 | 57 | 110 | 48% | 2516 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2412 | 58 | 108 | 48% | 2433 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2226 | 62 | 88 | 51% | 2221 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |