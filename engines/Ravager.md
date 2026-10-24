# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3398<sub>(+408) | 3649<sub>(+304) | 3711<sub>(+221) |  |
| 3.3.0 | 2026-10-09 | 2990<sub>(+414) | 3345<sub>(+317) | 3490<sub>(+324) |  |
| 2.0 | 2026-08-23 | 2576 | 3028 | 3166 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3519<sub>(+373) | 3761<sub>(+310) | 3742<sub>(+191) |  |
| 3.3.0 | 2026-10-09 | 3146<sub>(+396) | 3451<sub>(+269) | 3551<sub>(+210) |  |
| 2.0 | 2026-08-23 | 2750 | 3182 | 3341 |  |
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

Generated: 2026-10-24 04:42:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2576, 2990, 3398]
  line "E1: LTC (60.0+0.60s)" [3028, 3345, 3649]
  line "E1: VLTC (2m24s+1.12s)" [3166, 3490, 3711]
  line "P1: STC (8.0+0.08s)" [2750, 3146, 3519]
  line "P1: LTC (60.0+0.60s)" [3182, 3451, 3761]
  line "P1: VLTC (2m24s+1.12s)" [3341, 3551, 3742]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3742 | 42 | 134 | 56% | 3700 | 78% |
|  |  | E1 | 3711 | 33 | 208 | 48% | 3725 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3761 | 55 | 80 | 49% | 3760 | 75% |
|  |  | E1 | 3649 | 41 | 144 | 54% | 3615 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3519 | 45 | 124 | 53% | 3490 | 71% |
|  |  | E1 | 3398 | 32 | 254 | 56% | 3352 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3551 | 43 | 134 | 53% | 3528 | 69% |
|  |  | E1 | 3490 | 34 | 208 | 50% | 3486 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3451 | 28 | 322 | 56% | 3405 | 68% |
|  |  | E1 | 3345 | 31 | 276 | 54% | 3310 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2990 | 36 | 226 | 54% | 2959 | 48% |
|  |  | P1 | 3146 | 36 | 216 | 50% | 3133 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3341 | 37 | 204 | 49% | 3353 | 54% |
|  |  | E1 | 3166 | 30 | 302 | 44% | 3216 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3182 | 39 | 184 | 48% | 3197 | 52% |
|  |  | E1 | 3028 | 30 | 322 | 42% | 3092 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2750 | 37 | 216 | 48% | 2759 | 43% |
|  |  | E1 | 2576 | 35 | 298 | 39% | 2695 | 26% |