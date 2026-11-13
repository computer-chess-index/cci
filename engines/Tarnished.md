# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3297<sub>(+22) | 3590<sub>(-48) | 3621<sub>(+31) |  |
| 5.0 | 2026-02-07 | 3275 | 3638 | 3590 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3390<sub>(+265) | 3569<sub>(+513) | 3615<sub>(+253) |  |
| 5.0 | 2026-02-07 | 3125 | 3056 | 3362 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3366<sub>(-9) | 3545<sub>(+5) | 3571<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3375<sub>(+111) | 3540<sub>(+95) | 3563<sub>(+71) |  |
| 4.0 | 2025-08-23 | 3264 | 3445 | 3492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tarnished+<version>&body=###%20Engine%20name%0ATarnished%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:43:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3275, 3297]
  line "E1: LTC (60.0+0.60s)" [3638, 3590]
  line "E1: VLTC (2m24s+1.12s)" [3590, 3621]
  line "P1: STC (8.0+0.08s)" [3125, 3390]
  line "P1: LTC (60.0+0.60s)" [3056, 3569]
  line "P1: VLTC (2m24s+1.12s)" [3362, 3615]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3264, 3375, 3366]
  line "T1: LTC (60.0+0.60s)" [3445, 3540, 3545]
  line "T1: VLTC (2m24s+1.12s)" [3492, 3563, 3571]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3571 | 25 | 372 | 51% | 3565 | 87% |
|  |  | P1 | 3615 | 40 | 168 | 61% | 3429 | 69% |
|  |  | E1 | 3621 | 34 | 232 | 57% | 3506 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3545 | 24 | 390 | 49% | 3552 | 86% |
|  |  | P1 | 3569 | 35 | 208 | 57% | 3456 | 76% |
|  |  | E1 | 3590 | 32 | 256 | 57% | 3455 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3366 | 24 | 444 | 49% | 3372 | 72% |
|  |  | P1 | 3390 | 30 | 272 | 49% | 3397 | 74% |
|  |  | E1 | 3297 | 27 | 372 | 46% | 3328 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 23 | 442 | 50% | 3563 | 86% |
|  |  | P1 | 3362 | 199 | 12 | 88% | 2894 | 25% |
|  |  | E1 | 3590 | 164 | 12 | 83% | 3313 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3056 | 171 | 12 | 83% | 2734 | 33% |
|  |  | E1 | 3638 | 180 | 16 | 91% | 3155 | 19% |
|  |  | T1 | 3540 | 23 | 442 | 51% | 3533 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3125 | 141 | 16 | 69% | 2896 | 38% |
|  |  | E1 | 3275 | 133 | 32 | 84% | 2624 | 19% |
|  |  | T1 | 3375 | 23 | 474 | 50% | 3374 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3492 | 29 | 282 | 51% | 3484 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3445 | 34 | 220 | 51% | 3426 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3264 | 29 | 316 | 54% | 3227 | 68% |