# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3579<sub>(+8) | 3694<sub>(-12) | 3708<sub>(-7) |  |
| 42 | 2026-11-05 | 3571<sub>(+30) | 3706<sub>(+23) | 3715<sub>(+9) |  |
| 41.2 | 2026-03-31 | 3541 | 3683 | 3706 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3572<sub>(-45) | 3694<sub>(+58) | 3703<sub>(+11) |  |
| 42 | 2026-11-05 | 3617<sub>(+99) | 3636<sub>(+18) | 3692<sub>(+33) |  |
| 41.2 | 2026-03-31 | 3518 | 3618 | 3659 |  |
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

Generated: 2026-11-27 05:43:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3500 --> 3800
  line "E1: STC (8.0+0.08s)" [3541, 3571, 3579]
  line "E1: LTC (60.0+0.60s)" [3683, 3706, 3694]
  line "E1: VLTC (2m24s+1.12s)" [3706, 3715, 3708]
  line "P1: STC (8.0+0.08s)" [3518, 3617, 3572]
  line "P1: LTC (60.0+0.60s)" [3618, 3636, 3694]
  line "P1: VLTC (2m24s+1.12s)" [3659, 3692, 3703]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3703 | 55 | 72 | 53% | 3686 | 92% |
|  |  | E1 | 3708 | 24 | 402 | 53% | 3688 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3694 | 45 | 112 | 53% | 3675 | 89% |
|  |  | E1 | 3694 | 23 | 416 | 51% | 3690 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3579 | 28 | 296 | 52% | 3565 | 80% |
|  |  | P1 | 3572 | 43 | 124 | 49% | 3576 | 84% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3692 | 58 | 64 | 52% | 3677 | 95% |
|  |  | E1 | 3715 | 41 | 140 | 54% | 3690 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3636 | 64 | 52 | 51% | 3629 | 98% |
|  |  | E1 | 3706 | 39 | 148 | 53% | 3686 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3617 | 44 | 116 | 47% | 3636 | 87% |
|  |  | E1 | 3571 | 35 | 196 | 50% | 3572 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3659 | 42 | 158 | 64% | 3424 | 70% |
|  |  | E1 | 3706 | 32 | 252 | 60% | 3571 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3618 | 32 | 274 | 64% | 3310 | 71% |
|  |  | E1 | 3683 | 30 | 280 | 58% | 3521 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3518 | 33 | 212 | 48% | 3528 | 82% |
|  |  | E1 | 3541 | 28 | 316 | 47% | 3557 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |