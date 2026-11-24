# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3067<sub>(-43) | 3317<sub>(+16) | 3394<sub>(-1) |  |
| 4.0 | 2026-08-04 | 3110 | 3301 | 3395 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3100<sub>(-13) | 3302<sub>(-20) | 3372<sub>(-35) |  |
| 4.0 | 2026-08-04 | 3113 | 3322 | 3407 |  |
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

Generated: 2026-11-24 05:41:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3110, 3067]
  line "E1: LTC (60.0+0.60s)" [3301, 3317]
  line "E1: VLTC (2m24s+1.12s)" [3395, 3394]
  line "P1: STC (8.0+0.08s)" [3113, 3100]
  line "P1: LTC (60.0+0.60s)" [3322, 3302]
  line "P1: VLTC (2m24s+1.12s)" [3407, 3372]
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
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3379 | 32 | 236 | 49% | 3387 | 75% |
|  |  | P1 | 3372 | 32 | 240 | 51% | 3367 | 75% |
|  |  | E1 | 3394 | 24 | 456 | 48% | 3407 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3324 | 32 | 250 | 52% | 3312 | 70% |
|  |  | P1 | 3302 | 29 | 304 | 50% | 3303 | 71% |
|  |  | E1 | 3317 | 25 | 420 | 49% | 3326 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3141 | 31 | 276 | 53% | 3120 | 63% |
|  |  | P1 | 3100 | 30 | 328 | 45% | 3140 | 52% |
|  |  | E1 | 3067 | 24 | 484 | 49% | 3071 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3378 | 27 | 338 | 50% | 3378 | 74% |
|  |  | P1 | 3407 | 89 | 32 | 55% | 3351 | 72% |
|  |  | E1 | 3395 | 56 | 88 | 57% | 3325 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3341 | 28 | 322 | 49% | 3347 | 72% |
|  |  | P1 | 3322 | 86 | 44 | 68% | 3089 | 50% |
|  |  | E1 | 3301 | 56 | 86 | 52% | 3268 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3113 | 63 | 76 | 59% | 2989 | 54% |
|  |  | E1 | 3110 | 59 | 88 | 40% | 3182 | 50% |
|  |  | T1 | 3137 | 30 | 308 | 49% | 3146 | 57% |
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