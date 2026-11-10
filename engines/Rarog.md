# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3027<sub>(+111) | 3349<sub>(+145) | 3438<sub>(+118) |  |
| 2.5.0 | 2026-10-05 | 2916<sub>(+359) | 3204<sub>(+268) | 3320<sub>(+241) |  |
| 2.4.0 | 2026-09-11 | 2557 | 2936 | 3079 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3202<sub>(+232) | 3409<sub>(+83) | 3517<sub>(+93) |  |
| 2.5.0 | 2026-10-05 | 2970<sub>(+294) | 3326<sub>(+267) | 3424<sub>(+304) |  |
| 2.4.0 | 2026-09-11 | 2676 | 3059 | 3120 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-10 05:41:30

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2500 --> 3600
  line "E1: STC (8.0+0.08s)" [2557, 2916, 3027]
  line "E1: LTC (60.0+0.60s)" [2936, 3204, 3349]
  line "E1: VLTC (2m24s+1.12s)" [3079, 3320, 3438]
  line "P1: STC (8.0+0.08s)" [2676, 2970, 3202]
  line "P1: LTC (60.0+0.60s)" [3059, 3326, 3409]
  line "P1: VLTC (2m24s+1.12s)" [3120, 3424, 3517]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3517 | 37 | 192 | 51% | 3513 | 61% |
|  |  | E1 | 3438 | 28 | 330 | 48% | 3449 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3409 | 35 | 230 | 54% | 3378 | 55% |
|  |  | E1 | 3349 | 30 | 308 | 50% | 3347 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3202 | 43 | 158 | 52% | 3186 | 45% |
|  |  | E1 | 3027 | 32 | 296 | 50% | 3024 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3424 | 36 | 206 | 53% | 3402 | 61% |
|  |  | E1 | 3320 | 30 | 312 | 54% | 3294 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3326 | 35 | 230 | 48% | 3339 | 52% |
|  |  | E1 | 3204 | 33 | 264 | 53% | 3177 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2970 | 45 | 150 | 51% | 2957 | 40% |
|  |  | E1 | 2916 | 32 | 312 | 56% | 2862 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3079 | 29 | 367 | 52% | 3069 | 41% |
|  |  | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 3120 | 39 | 198 | 51% | 3112 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2936 | 32 | 310 | 47% | 2967 | 38% |
|  |  | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 3059 | 42 | 168 | 53% | 3024 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2557 | 36 | 252 | 41% | 2651 | 33% |
|  |  | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2676 | 46 | 156 | 46% | 2712 | 31% |