# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3362<sub>(+414) | 3606<sub>(+307) | 3649<sub>(+208) |  |
| 3.3.0 | 2026-10-09 | 2948<sub>(+414) | 3299<sub>(+317) | 3441<sub>(+324) |  |
| 2.0 | 2026-08-23 | 2534 | 2982 | 3117 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3364<sub>(+359) | 3582<sub>(+280) | 3583<sub>(+188) |  |
| 3.3.0 | 2026-10-09 | 3005<sub>(+355) | 3302<sub>(+258) | 3395<sub>(+205) |  |
| 2.0 | 2026-08-23 | 2650 | 3044 | 3190 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:41:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2534, 2948, 3362]
  line "E1: LTC (60.0+0.60s)" [2982, 3299, 3606]
  line "E1: VLTC (2m24s+1.12s)" [3117, 3441, 3649]
  line "P1: STC (8.0+0.08s)" [2650, 3005, 3364]
  line "P1: LTC (60.0+0.60s)" [3044, 3302, 3582]
  line "P1: VLTC (2m24s+1.12s)" [3190, 3395, 3583]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3583 | 39 | 160 | 55% | 3549 | 81% |
|  |  | E1 | 3649 | 28 | 286 | 48% | 3661 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3582 | 38 | 164 | 47% | 3596 | 81% |
|  |  | E1 | 3606 | 32 | 238 | 53% | 3582 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3364 | 39 | 164 | 53% | 3339 | 71% |
|  |  | E1 | 3362 | 27 | 370 | 55% | 3322 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3395 | 42 | 146 | 53% | 3374 | 71% |
|  |  | E1 | 3441 | 32 | 244 | 50% | 3438 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3302 | 28 | 338 | 57% | 3255 | 67% |
|  |  | E1 | 3299 | 29 | 312 | 54% | 3270 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3005 | 34 | 248 | 49% | 2992 | 54% |
|  |  | E1 | 2948 | 34 | 258 | 53% | 2927 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3190 | 37 | 204 | 49% | 3202 | 54% |
|  |  | E1 | 3117 | 30 | 302 | 44% | 3167 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3044 | 39 | 184 | 48% | 3058 | 52% |
|  |  | E1 | 2982 | 30 | 322 | 42% | 3046 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2650 | 37 | 216 | 48% | 2661 | 43% |
|  |  | E1 | 2534 | 35 | 298 | 39% | 2653 | 26% |