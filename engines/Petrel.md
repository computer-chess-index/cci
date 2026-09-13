# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3133<sub>(+1) | 3316<sub>(-19) | 3371<sub>(0) |  |
| 4.0 | 2026-08-04 | 3132<sub>(+109) | 3335<sub>(+140) | 3371<sub>(+99) |  |
| 3.5 | 2026-06-02 | 3023<sub>(+98) | 3195<sub>(+51) | 3272<sub>(+97) |  |
| 3.3.1 | 2026-02-10 | 2925<sub>(-26) | 3144<sub>(-29) | 3175<sub>(-19) |  |
| 3.3 | 2026-02-09 | 2951<sub>(+31) | 3173<sub>(+59) | 3194<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2920<sub>(+86) | 3114<sub>(+98) | 3170<sub>(+70) |  |
| 3.1 | 2025-11-28 | 2834<sub>(+76) | 3016<sub>(+73) | 3100<sub>(+133) |  |
| 3.0 | 2025-11-26 | 2758<sub>(+535) | 2943<sub>(+533) | 2967<sub>(+484) |  |
| 2.1 | 2025-10-13 | 2223 | 2410 | 2483 |  |
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

Generated: 2026-09-13 04:40:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0", "4.1"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2223, 2758, 2834, 2920, 2951, 2925, 3023, 3132, 3133]
  line "STC (8.0+0.08s)" [2223, 2758, 2834, 2920, 2951, 2925, 3023, 3132, 3133]
  line "LTC (60.0+0.60s)" [2410, 2943, 3016, 3114, 3173, 3144, 3195, 3335, 3316]
  line "" [2483, 2967, 3100, 3170, 3194, 3175, 3272, 3371, 3371]
  line "VLTC (2m24s+1.12s)" [2483, 2967, 3100, 3170, 3194, 3175, 3272, 3371, 3371]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3371 | 36 | 194 | 49% | 3380 | 74% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3316 | 33 | 232 | 52% | 3303 | 70% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3133 | 33 | 240 | 53% | 3110 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3371 | 27 | 338 | 50% | 3370 | 74% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3335 | 28 | 322 | 49% | 3340 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3132 | 30 | 308 | 49% | 3140 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3272 | 27 | 368 | 49% | 3279 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3195 | 27 | 364 | 51% | 3185 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3023 | 28 | 364 | 49% | 3031 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3175 | 35 | 228 | 52% | 3160 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3144 | 42 | 158 | 53% | 3125 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2925 | 41 | 170 | 49% | 2936 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3194 | 104 | 24 | 58% | 3129 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3173 | 102 | 24 | 54% | 3136 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2951 | 110 | 24 | 50% | 2954 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3170 | 35 | 226 | 49% | 3181 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3114 | 33 | 260 | 52% | 3100 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2920 | 33 | 264 | 50% | 2921 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3100 | 35 | 232 | 51% | 3093 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3016 | 36 | 212 | 52% | 2998 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2834 | 37 | 224 | 48% | 2851 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2967 | 51 | 128 | 57% | 2890 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2943 | 43 | 184 | 59% | 2854 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2758 | 56 | 108 | 53% | 2715 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2483 | 57 | 110 | 48% | 2514 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 58 | 108 | 48% | 2429 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2223 | 62 | 88 | 51% | 2217 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |