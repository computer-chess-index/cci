# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3066<sub>(-23) | 3309<sub>(+19) | 3387<sub>(+7) |  |
| 4.0 | 2026-08-04 | 3089 | 3290 | 3380 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3105<sub>(-11) | 3313<sub>(-22) | 3382<sub>(-21) |  |
| 4.0 | 2026-08-04 | 3116 | 3335 | 3403 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3141<sub>(+4) | 3324<sub>(-17) | 3379<sub>(+1) |  |
| 4.0 | 2026-08-04 | 3137<sub>(+108) | 3341<sub>(+139) | 3378<sub>(+99) |  |
| 3.5 | 2026-06-02 | 3029<sub>(+98) | 3202<sub>(+51) | 3279<sub>(+97) |  |
| 3.3.1 | 2026-02-10 | 2931<sub>(-26) | 3151<sub>(-28) | 3182<sub>(-18) |  |
| 3.3 | 2026-02-09 | 2957<sub>(+32) | 3179<sub>(+58) | 3200<sub>(+25) |  |
| 3.2 | 2025-12-21 | 2925<sub>(+86) | 3121<sub>(+98) | 3175<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2839<sub>(+76) | 3023<sub>(+73) | 3106<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2763<sub>(+534) | 2950<sub>(+536) | 2974<sub>(+487) |  |
| 2.1 | 2025-10-13 | 2229 | 2414 | 2487 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-28 05:41:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3089, 3066]
  line "E1: LTC (60.0+0.60s)" [3290, 3309]
  line "E1: VLTC (2m24s+1.12s)" [3380, 3387]
  line "P1: STC (8.0+0.08s)" [3116, 3105]
  line "P1: LTC (60.0+0.60s)" [3335, 3313]
  line "P1: VLTC (2m24s+1.12s)" [3403, 3382]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0", "4.1"]
  y-axis "Elo Rating" 2200 --> 3400
  line "T1: STC (8.0+0.08s)" [2229, 2763, 2839, 2925, 2957, 2931, 3029, 3137, 3141]
  line "T1: LTC (60.0+0.60s)" [2414, 2950, 3023, 3121, 3179, 3151, 3202, 3341, 3324]
  line "T1: VLTC (2m24s+1.12s)" [2487, 2974, 3106, 3175, 3200, 3182, 3279, 3378, 3379]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3382 | 32 | 240 | 51% | 3375 | 75% |
|  |  | E1 | 3387 | 23 | 464 | 48% | 3401 | 68% |
|  |  | T1 | 3379 | 32 | 236 | 49% | 3387 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3313 | 28 | 312 | 50% | 3313 | 71% |
|  |  | E1 | 3309 | 24 | 436 | 48% | 3322 | 64% |
|  |  | T1 | 3324 | 32 | 250 | 52% | 3312 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3066 | 24 | 512 | 49% | 3070 | 51% |
|  |  | T1 | 3141 | 31 | 276 | 53% | 3120 | 63% |
|  |  | P1 | 3105 | 29 | 342 | 45% | 3148 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3380 | 45 | 128 | 54% | 3344 | 65% |
|  |  | T1 | 3378 | 27 | 338 | 50% | 3378 | 74% |
|  |  | P1 | 3403 | 89 | 32 | 55% | 3347 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3290 | 44 | 138 | 51% | 3274 | 62% |
|  |  | T1 | 3341 | 28 | 322 | 49% | 3347 | 72% |
|  |  | P1 | 3335 | 81 | 48 | 67% | 3120 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3089 | 43 | 160 | 43% | 3143 | 49% |
|  |  | T1 | 3137 | 30 | 308 | 49% | 3146 | 57% |
|  |  | P1 | 3116 | 58 | 88 | 56% | 3020 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3279 | 27 | 368 | 49% | 3286 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3202 | 27 | 364 | 51% | 3191 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3029 | 28 | 364 | 49% | 3038 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3182 | 35 | 228 | 52% | 3166 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3151 | 42 | 158 | 53% | 3132 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2931 | 41 | 170 | 49% | 2942 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 104 | 24 | 58% | 3136 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3179 | 102 | 24 | 54% | 3143 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2957 | 110 | 24 | 50% | 2961 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3175 | 35 | 226 | 49% | 3186 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3121 | 33 | 260 | 52% | 3105 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2925 | 33 | 264 | 50% | 2927 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3106 | 35 | 232 | 51% | 3100 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3023 | 36 | 212 | 52% | 3004 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2839 | 37 | 224 | 48% | 2857 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2974 | 51 | 128 | 57% | 2896 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2950 | 43 | 184 | 59% | 2859 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2763 | 56 | 108 | 53% | 2720 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2487 | 57 | 110 | 48% | 2519 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2414 | 58 | 108 | 48% | 2434 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2229 | 62 | 88 | 51% | 2222 | 24% |