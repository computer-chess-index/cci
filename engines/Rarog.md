# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-11-13 | 2974<sub>(+3) | 3267<sub>(-8) | 3374<sub>(+4) |  |
| 2.6.0 | 2026-10-22 | 2971<sub>(+120) | 3275<sub>(+136) | 3370<sub>(+122) |  |
| 2.5.0 | 2026-10-05 | 2851<sub>(+351) | 3139<sub>(+269) | 3248<sub>(+233) |  |
| 2.4.0 | 2026-09-11 | 2500 | 2870 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-11-13 | 2946<sub>(-121) | 3306<sub>(+69) | 3345<sub>(+8) |  |
| 2.6.0 | 2026-10-22 | 3067<sub>(+212) | 3237<sub>(+79) | 3337<sub>(+82) |  |
| 2.5.0 | 2026-10-05 | 2855<sub>(+298) | 3158<sub>(+228) | 3255<sub>(+274) |  |
| 2.4.0 | 2026-09-11 | 2557 | 2930 | 2981 |  |
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

Generated: 2026-11-28 05:42:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2500, 2851, 2971, 2974]
  line "E1: LTC (60.0+0.60s)" [2870, 3139, 3275, 3267]
  line "E1: VLTC (2m24s+1.12s)" [3015, 3248, 3370, 3374]
  line "P1: STC (8.0+0.08s)" [2557, 2855, 3067, 2946]
  line "P1: LTC (60.0+0.60s)" [2930, 3158, 3237, 3306]
  line "P1: VLTC (2m24s+1.12s)" [2981, 3255, 3337, 3345]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3345 | 38 | 184 | 52% | 3328 | 59% |
|  |  | E1 | 3374 | 38 | 182 | 50% | 3376 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3306 | 45 | 128 | 51% | 3302 | 61% |
|  |  | E1 | 3267 | 34 | 240 | 49% | 3276 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2946 | 38 | 214 | 53% | 2919 | 38% |
|  |  | E1 | 2974 | 29 | 362 | 53% | 2947 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3370 | 27 | 354 | 49% | 3376 | 63% |
|  |  | P1 | 3337 | 36 | 204 | 50% | 3337 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3237 | 33 | 258 | 52% | 3220 | 53% |
|  |  | E1 | 3275 | 28 | 344 | 51% | 3267 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3067 | 40 | 192 | 50% | 3069 | 42% |
|  |  | E1 | 2971 | 30 | 340 | 50% | 2967 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3255 | 36 | 206 | 53% | 3233 | 61% |
|  |  | E1 | 3248 | 29 | 320 | 53% | 3224 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3158 | 35 | 238 | 47% | 3181 | 52% |
|  |  | E1 | 3139 | 32 | 280 | 54% | 3112 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2855 | 43 | 170 | 50% | 2859 | 41% |
|  |  | E1 | 2851 | 32 | 320 | 55% | 2807 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2981 | 39 | 198 | 51% | 2974 | 42% |
|  |  | E1 | 3015 | 29 | 367 | 52% | 3004 | 41% |
|  |  | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2930 | 42 | 168 | 53% | 2896 | 43% |
|  |  | E1 | 2870 | 32 | 310 | 47% | 2901 | 38% |
|  |  | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2557 | 46 | 156 | 46% | 2593 | 31% |
|  |  | E1 | 2500 | 36 | 252 | 41% | 2595 | 33% |
|  |  | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |