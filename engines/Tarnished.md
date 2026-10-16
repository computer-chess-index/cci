# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3262 | 3549 | 3586 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3517 | 3690 | 3737 |  |
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

Generated: 2026-10-16 04:44:21

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
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3586 | 41 | 164 | 60% | 3426 | 67% |
|  |  | T1 | 3571 | 25 | 372 | 51% | 3565 | 87% |
|  |  | P1 | 3737 | 48 | 124 | 65% | 3488 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3549 | 39 | 188 | 59% | 3370 | 66% |
|  |  | T1 | 3545 | 24 | 390 | 49% | 3552 | 86% |
|  |  | P1 | 3690 | 40 | 164 | 59% | 3545 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3366 | 24 | 444 | 49% | 3372 | 72% |
|  |  | P1 | 3517 | 34 | 208 | 50% | 3519 | 74% |
|  |  | E1 | 3262 | 30 | 300 | 45% | 3301 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 23 | 442 | 50% | 3563 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3540 | 23 | 442 | 51% | 3533 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3375 | 23 | 474 | 50% | 3374 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3492 | 29 | 282 | 51% | 3484 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3445 | 34 | 220 | 51% | 3426 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3264 | 29 | 316 | 54% | 3227 | 68% |