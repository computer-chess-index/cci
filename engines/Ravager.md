# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3414<sub>(+414) | 3667<sub>(+311) | 3713<sub>(+215) |  |
| 3.3.0 | 2026-10-09 | 3000<sub>(+417) | 3356<sub>(+318) | 3498<sub>(+321) |  |
| 2.0 | 2026-08-23 | 2583 | 3038 | 3177 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3560<sub>(+379) | 3781<sub>(+290) | 3780<sub>(+190) |  |
| 3.3.0 | 2026-10-09 | 3181<sub>(+397) | 3491<sub>(+273) | 3590<sub>(+210) |  |
| 2.0 | 2026-08-23 | 2784 | 3218 | 3380 |  |
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

Generated: 2026-11-09 05:41:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2583, 3000, 3414]
  line "E1: LTC (60.0+0.60s)" [3038, 3356, 3667]
  line "E1: VLTC (2m24s+1.12s)" [3177, 3498, 3713]
  line "P1: STC (8.0+0.08s)" [2784, 3181, 3560]
  line "P1: LTC (60.0+0.60s)" [3218, 3491, 3781]
  line "P1: VLTC (2m24s+1.12s)" [3380, 3590, 3780]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3780 | 39 | 156 | 55% | 3745 | 81% |
|  |  | E1 | 3713 | 30 | 254 | 48% | 3723 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3781 | 40 | 148 | 48% | 3792 | 80% |
|  |  | E1 | 3667 | 33 | 214 | 54% | 3638 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3560 | 43 | 136 | 53% | 3530 | 71% |
|  |  | E1 | 3414 | 29 | 312 | 55% | 3374 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3590 | 43 | 134 | 53% | 3567 | 69% |
|  |  | E1 | 3498 | 34 | 208 | 50% | 3495 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3491 | 28 | 322 | 56% | 3444 | 68% |
|  |  | E1 | 3356 | 31 | 276 | 54% | 3321 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3181 | 36 | 216 | 50% | 3170 | 56% |
|  |  | E1 | 3000 | 36 | 226 | 54% | 2970 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3380 | 37 | 204 | 49% | 3391 | 54% |
|  |  | E1 | 3177 | 30 | 302 | 44% | 3227 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3218 | 39 | 184 | 48% | 3232 | 52% |
|  |  | E1 | 3038 | 30 | 322 | 42% | 3101 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2784 | 37 | 216 | 48% | 2795 | 43% |
|  |  | E1 | 2583 | 35 | 298 | 39% | 2701 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |