# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3417<sub>(+1959) | 3634<sub>(-3) | 3673<sub>(+52) |  |
| 13 | 2024-03-31 | 1458 | 3637 | 3621 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3409<sub>(+1870) | 3552<sub>(+145) | 3619<sub>(+101) |  |
| 13 | 2024-03-31 | 1539 | 3407 | 3518 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14 | 2026-05-24 | 3443<sub>(+1843) | 3555<sub>(+17) | 3586<sub>(+23) |  |
| 13 | 2024-03-31 | 1600 | 3538 | 3563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A14" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:36:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1400 --> 3700
  line "E1: STC (8.0+0.08s)" [1458, 3417]
  line "E1: LTC (60.0+0.60s)" [3637, 3634]
  line "E1: VLTC (2m24s+1.12s)" [3621, 3673]
  line "P1: STC (8.0+0.08s)" [1539, 3409]
  line "P1: LTC (60.0+0.60s)" [3407, 3552]
  line "P1: VLTC (2m24s+1.12s)" [3518, 3619]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1600 --> 3600
  line "T1: STC (8.0+0.08s)" [1600, 3443]
  line "T1: LTC (60.0+0.60s)" [3538, 3555]
  line "T1: VLTC (2m24s+1.12s)" [3563, 3586]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3619 | 39 | 144 | 51% | 3611 | 94% |
|  |  | E1 | 3673 | 31 | 242 | 51% | 3668 | 86% |
|  |  | T1 | 3586 | 29 | 268 | 51% | 3582 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3634 | 30 | 260 | 50% | 3633 | 84% |
|  |  | T1 | 3555 | 29 | 264 | 50% | 3556 | 91% |
|  |  | P1 | 3552 | 35 | 188 | 48% | 3563 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3417 | 24 | 434 | 47% | 3434 | 71% |
|  |  | T1 | 3443 | 24 | 426 | 53% | 3372 | 76% |
|  |  | P1 | 3409 | 33 | 220 | 48% | 3424 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3621 | 70 | 60 | 65% | 3452 | 60% |
|  |  | T1 | 3563 | 13 | 1458 | 53% | 3488 | 84% |
|  |  | P1 | 3518 | 136 | 20 | 80% | 3159 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3538 | 12 | 1740 | 51% | 3534 | 87% |
|  |  | P1 | 3407 | 128 | 26 | 81% | 3085 | 31% |
|  |  | E1 | 3637 | 72 | 56 | 64% | 3465 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1600 | 15 | 1932 | 53% | 1558 | 10% |
|  |  | P1 | 1539 | 64 | 108 | 39% | 1755 | 14% |
|  |  | E1 | 1458 | 55 | 128 | 54% | 1396 | 15% |