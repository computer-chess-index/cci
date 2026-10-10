# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 2913 | 3143 | 3247 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3182 | 3452 | 3513 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3006<sub>(-21) | 3266<sub>(+48) | 3294<sub>(+28) |  |
| 20260704 | 2026-07-04 | 3027<sub>(+615) | 3218<sub>(+540) | 3266<sub>(+538) |  |
| 20260628 | 2026-06-28 | 2412<sub>(-2) | 2678<sub>(+23) | 2728<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2414 | 2655 | 2751 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:36:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "" [2414, 2412, 3027, 3006]
  line "STC (8.0+0.08s)" [2414, 2412, 3027, 3006]
  line "LTC (60.0+0.60s)" [2655, 2678, 3218, 3266]
  line "" [2751, 2728, 3266, 3294]
  line "VLTC (2m24s+1.12s)" [2751, 2728, 3266, 3294]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 40 | 176 | 51% | 3510 | 49% |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3247 | 33 | 251 | 49% | 3255 | 54% |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3294 | 29 | 338 | 49% | 3299 | 54% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 37 | 212 | 48% | 3472 | 44% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 32 | 296 | 47% | 3168 | 43% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3266 | 28 | 376 | 48% | 3278 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 2913 | 34 | 280 | 49% | 2913 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3006 | 27 | 428 | 51% | 2992 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3182 | 38 | 224 | 54% | 3146 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 31 | 312 | 54% | 3229 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3218 | 30 | 320 | 53% | 3190 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3027 | 32 | 312 | 53% | 2997 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2728 | 46 | 148 | 51% | 2718 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 53 | 116 | 49% | 2688 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2412 | 53 | 116 | 50% | 2411 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2751 | 47 | 144 | 51% | 2739 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2655 | 47 | 148 | 46% | 2689 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2414 | 41 | 196 | 44% | 2473 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |