# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3264<sub>(+198) | 3491<sub>(+117) | 3538<sub>(+86) |  |
| 1.9.1 | 2026-10-18 | 3066<sub>(+211) | 3374<sub>(+187) | 3452<sub>(+196) |  |
| 1.9.0 | 2026-10-16 | 2855 | 3187 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3340<sub>(+142) | 3559<sub>(+83) | 3640<sub>(+121) |  |
| 1.9.1 | 2026-10-18 | 3198<sub>(+210) | 3476<sub>(+171) | 3519<sub>(+143) |  |
| 1.9.0 | 2026-10-16 | 2988 | 3305 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2988 | 3305 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-10 05:43:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2855, 3066, 3264]
  line "E1: LTC (60.0+0.60s)" [3187, 3374, 3491]
  line "E1: VLTC (2m24s+1.12s)" [3256, 3452, 3538]
  line "P1: STC (8.0+0.08s)" [2988, 3198, 3340]
  line "P1: LTC (60.0+0.60s)" [3305, 3476, 3559]
  line "P1: VLTC (2m24s+1.12s)" [3376, 3519, 3640]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3640 | 31 | 254 | 55% | 3607 | 76% |
|  |  | E1 | 3538 | 37 | 184 | 51% | 3530 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3559 | 45 | 116 | 52% | 3545 | 78% |
|  |  | E1 | 3491 | 28 | 318 | 53% | 3475 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3340 | 47 | 124 | 50% | 3333 | 56% |
|  |  | E1 | 3264 | 34 | 230 | 53% | 3236 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3452 | 29 | 314 | 52% | 3441 | 65% |
|  |  | P1 | 3519 | 35 | 210 | 52% | 3507 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3476 | 35 | 216 | 50% | 3475 | 58% |
|  |  | E1 | 3374 | 32 | 264 | 52% | 3359 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3198 | 42 | 160 | 51% | 3190 | 48% |
|  |  | E1 | 3066 | 31 | 336 | 54% | 3027 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3376 | 43 | 194 | 60% | 3124 | 39% |
|  |  | E1 | 3256 | 34 | 292 | 55% | 3100 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3305 | 50 | 150 | 62% | 2967 | 32% |
|  |  | E1 | 3187 | 42 | 214 | 62% | 2894 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2988 | 47 | 176 | 58% | 2755 | 26% |
|  |  | E1 | 2855 | 42 | 220 | 61% | 2600 | 26% |