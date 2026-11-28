# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3578<sub>(+9) | 3692<sub>(-12) | 3707<sub>(-7) |  |
| 42 | 2026-11-05 | 3569<sub>(+31) | 3704<sub>(+23) | 3714<sub>(+10) |  |
| 41.2 | 2026-03-31 | 3538 | 3681 | 3704 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3573<sub>(-44) | 3694<sub>(+58) | 3704<sub>(+12) |  |
| 42 | 2026-11-05 | 3617<sub>(+99) | 3636<sub>(+17) | 3692<sub>(+33) |  |
| 41.2 | 2026-03-31 | 3518 | 3619 | 3659 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 41.2 | 2026-03-31 | 3514<sub>(-8) | 3605<sub>(+3) | 3621<sub>(+10) |  |
| 41 | 2026-03-05 | 3522 | 3602 | 3611 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Shashchess+<version>&body=###%20Engine%20name%0AShashchess%0A%0A###%20Version%0A41.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:43:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3500 --> 3800
  line "E1: STC (8.0+0.08s)" [3538, 3569, 3578]
  line "E1: LTC (60.0+0.60s)" [3681, 3704, 3692]
  line "E1: VLTC (2m24s+1.12s)" [3704, 3714, 3707]
  line "P1: STC (8.0+0.08s)" [3518, 3617, 3573]
  line "P1: LTC (60.0+0.60s)" [3619, 3636, 3694]
  line "P1: VLTC (2m24s+1.12s)" [3659, 3692, 3704]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41", "41.2"]
  y-axis "Elo Rating" 3500 --> 3700
  line "T1: STC (8.0+0.08s)" [3522, 3514]
  line "T1: LTC (60.0+0.60s)" [3602, 3605]
  line "T1: VLTC (2m24s+1.12s)" [3611, 3621]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3704 | 55 | 72 | 53% | 3686 | 92% |
|  |  | E1 | 3707 | 24 | 402 | 53% | 3687 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3694 | 45 | 112 | 53% | 3675 | 89% |
|  |  | E1 | 3692 | 23 | 416 | 51% | 3688 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3573 | 43 | 124 | 49% | 3578 | 84% |
|  |  | E1 | 3578 | 28 | 296 | 52% | 3564 | 80% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3692 | 58 | 64 | 52% | 3677 | 95% |
|  |  | E1 | 3714 | 41 | 140 | 54% | 3687 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3704 | 39 | 148 | 53% | 3684 | 91% |
|  |  | P1 | 3636 | 64 | 52 | 51% | 3629 | 98% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3569 | 35 | 196 | 50% | 3571 | 82% |
|  |  | P1 | 3617 | 44 | 116 | 47% | 3637 | 87% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3659 | 42 | 158 | 64% | 3424 | 70% |
|  |  | E1 | 3704 | 32 | 252 | 60% | 3569 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3619 | 32 | 274 | 64% | 3310 | 71% |
|  |  | E1 | 3681 | 30 | 280 | 58% | 3519 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3518 | 33 | 212 | 48% | 3528 | 82% |
|  |  | E1 | 3538 | 28 | 316 | 47% | 3556 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |