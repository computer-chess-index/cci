# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3136<sub>(+4) | 3314<sub>(-21) | 3374<sub>(+2) |  |
| 4.0 | 2026-08-04 | 3132<sub>(+108) | 3335<sub>(+138) | 3372<sub>(+100) |  |
| 3.5 | 2026-06-02 | 3024<sub>(+99) | 3197<sub>(+51) | 3272<sub>(+95) |  |
| 3.3.1 | 2026-02-10 | 2925<sub>(-26) | 3146<sub>(-28) | 3177<sub>(-17) |  |
| 3.3 | 2026-02-09 | 2951<sub>(+31) | 3174<sub>(+58) | 3194<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2920<sub>(+86) | 3116<sub>(+99) | 3170<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2834<sub>(+75) | 3017<sub>(+73) | 3101<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2759<sub>(+536) | 2944<sub>(+534) | 2969<sub>(+486) |  |
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

Generated: 2026-09-14 04:40:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0", "4.1"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2223, 2759, 2834, 2920, 2951, 2925, 3024, 3132, 3136]
  line "STC (8.0+0.08s)" [2223, 2759, 2834, 2920, 2951, 2925, 3024, 3132, 3136]
  line "LTC (60.0+0.60s)" [2410, 2944, 3017, 3116, 3174, 3146, 3197, 3335, 3314]
  line "" [2483, 2969, 3101, 3170, 3194, 3177, 3272, 3372, 3374]
  line "VLTC (2m24s+1.12s)" [2483, 2969, 3101, 3170, 3194, 3177, 3272, 3372, 3374]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 35 | 204 | 49% | 3380 | 75% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3314 | 32 | 240 | 51% | 3305 | 70% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3136 | 33 | 248 | 53% | 3112 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 27 | 338 | 50% | 3371 | 74% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3335 | 28 | 322 | 49% | 3341 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3132 | 30 | 308 | 49% | 3141 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3272 | 27 | 368 | 49% | 3279 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3197 | 27 | 364 | 51% | 3185 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3024 | 28 | 364 | 49% | 3031 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 35 | 228 | 52% | 3160 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 42 | 158 | 53% | 3125 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2925 | 41 | 170 | 49% | 2938 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3194 | 104 | 24 | 58% | 3131 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3174 | 102 | 24 | 54% | 3136 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2951 | 110 | 24 | 50% | 2955 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3170 | 35 | 226 | 49% | 3181 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3116 | 33 | 260 | 52% | 3100 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2920 | 33 | 264 | 50% | 2923 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3101 | 35 | 232 | 51% | 3094 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3017 | 36 | 212 | 52% | 2998 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2834 | 37 | 224 | 48% | 2853 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2969 | 51 | 128 | 57% | 2890 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2944 | 43 | 184 | 59% | 2855 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2759 | 56 | 108 | 53% | 2716 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2483 | 57 | 110 | 48% | 2514 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 58 | 108 | 48% | 2429 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2223 | 62 | 88 | 51% | 2218 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |