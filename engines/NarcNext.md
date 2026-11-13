# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3163<sub>(-16) | 3386<sub>(+2) | 3421<sub>(-30) |  |
| 5.0 | 2026-11-02 | 3179<sub>(+407) | 3384<sub>(+251) | 3451<sub>(+215) |  |
| 4.1 | 2026-08-06 | 2772 | 3133 | 3236 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3224<sub>(+14) | 3459<sub>(+61) | 3449<sub>(+21) |  |
| 5.0 | 2026-11-02 | 3210<sub>(+442) | 3398<sub>(+228) | 3428<sub>(+154) |  |
| 4.1 | 2026-08-06 | 2768 | 3170 | 3274 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-08-06 | 2871 | 3163 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+NarcNext+<version>&body=###%20Engine%20name%0ANarcNext%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:40:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2772, 3179, 3163]
  line "E1: LTC (60.0+0.60s)" [3133, 3384, 3386]
  line "E1: VLTC (2m24s+1.12s)" [3236, 3451, 3421]
  line "P1: STC (8.0+0.08s)" [2768, 3210, 3224]
  line "P1: LTC (60.0+0.60s)" [3170, 3398, 3459]
  line "P1: VLTC (2m24s+1.12s)" [3274, 3428, 3449]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3449 | 46 | 110 | 50% | 3447 | 83% |
|  |  | E1 | 3421 | 34 | 214 | 50% | 3420 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3459 | 44 | 128 | 50% | 3460 | 73% |
|  |  | E1 | 3386 | 33 | 226 | 51% | 3382 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3224 | 41 | 152 | 48% | 3239 | 63% |
|  |  | E1 | 3163 | 31 | 274 | 52% | 3152 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3428 | 44 | 130 | 52% | 3411 | 72% |
|  |  | E1 | 3451 | 34 | 224 | 54% | 3420 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3398 | 34 | 218 | 57% | 3349 | 75% |
|  |  | E1 | 3384 | 31 | 264 | 54% | 3353 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3210 | 48 | 122 | 55% | 3167 | 58% |
|  |  | E1 | 3179 | 32 | 276 | 54% | 3120 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3236 | 27 | 378 | 47% | 3258 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3274 | 31 | 276 | 48% | 3287 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3133 | 28 | 372 | 48% | 3146 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3170 | 35 | 226 | 49% | 3178 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2772 | 29 | 386 | 45% | 2819 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2768 | 37 | 236 | 46% | 2812 | 38% |