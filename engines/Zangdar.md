# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3271<sub>(+175) | 3499<sub>(+231) | 3563<sub>(+108) |  |
| 6.1.1 | 2026-02-25 | 3096 | 3268 | 3455 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3270<sub>(+138) | 3474<sub>(+208) | 3515<sub>(+264) |  |
| 6.1.1 | 2026-02-25 | 3132 | 3266 | 3251 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3313<sub>(+101) | 3474<sub>(+85) | 3510<sub>(+96) |  |
| 6.1.1 | 2026-02-25 | 3212<sub>(+56) | 3389<sub>(+6) | 3414<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3156<sub>(+1) | 3383<sub>(+17) | 3445<sub>(+27) |  |
| 6 | 2026-02-07 | 3155<sub>(+12) | 3366<sub>(+6) | 3418<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3143 | 3360 | 3403 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:44:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3096, 3271]
  line "E1: LTC (60.0+0.60s)" [3268, 3499]
  line "E1: VLTC (2m24s+1.12s)" [3455, 3563]
  line "P1: STC (8.0+0.08s)" [3132, 3270]
  line "P1: LTC (60.0+0.60s)" [3266, 3474]
  line "P1: VLTC (2m24s+1.12s)" [3251, 3515]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3600
  line "T1: STC (8.0+0.08s)" [3143, 3155, 3156, 3212, 3313]
  line "T1: LTC (60.0+0.60s)" [3360, 3366, 3383, 3389, 3474]
  line "T1: VLTC (2m24s+1.12s)" [3403, 3418, 3445, 3414, 3510]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3563 | 29 | 308 | 56% | 3460 | 75% |
|  |  | T1 | 3510 | 35 | 196 | 49% | 3513 | 81% |
|  |  | P1 | 3515 | 35 | 204 | 55% | 3459 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3499 | 29 | 328 | 58% | 3362 | 65% |
|  |  | T1 | 3474 | 36 | 186 | 51% | 3468 | 78% |
|  |  | P1 | 3474 | 35 | 216 | 56% | 3368 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3313 | 27 | 352 | 50% | 3310 | 68% |
|  |  | P1 | 3270 | 28 | 336 | 49% | 3276 | 64% |
|  |  | E1 | 3271 | 25 | 424 | 46% | 3303 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3414 | 25 | 394 | 50% | 3411 | 75% |
|  |  | P1 | 3251 | 155 | 40 | 95% | 2213 | 10% |
|  |  | E1 | 3455 | 110 | 40 | 85% | 2994 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3389 | 26 | 364 | 51% | 3384 | 70% |
|  |  | P1 | 3266 | 125 | 28 | 86% | 2824 | 29% |
|  |  | E1 | 3268 | 88 | 32 | 55% | 3241 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3212 | 25 | 444 | 51% | 3208 | 55% |
|  |  | P1 | 3132 | 130 | 24 | 56% | 3031 | 29% |
|  |  | E1 | 3096 | 87 | 48 | 65% | 2862 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3445 | 31 | 256 | 50% | 3443 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3383 | 27 | 332 | 49% | 3387 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3156 | 32 | 276 | 51% | 3150 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3418 | 36 | 192 | 50% | 3418 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3366 | 33 | 228 | 52% | 3356 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3155 | 34 | 244 | 49% | 3160 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3403 | 27 | 356 | 54% | 3366 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3360 | 31 | 272 | 51% | 3340 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3143 | 32 | 280 | 55% | 3086 | 59% |