# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3580<sub>(+12) | 3692<sub>(-16) | 3702<sub>(-16) |  |
| 42 | 2026-11-05 | 3568<sub>(+27) | 3708<sub>(+25) | 3718<sub>(+12) |  |
| 41.2 | 2026-03-31 | 3541 | 3683 | 3706 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3560<sub>(-42) | 3668<sub>(+49) | 3680<sub>(+5) |  |
| 42 | 2026-11-05 | 3602<sub>(+99) | 3619<sub>(+16) | 3675<sub>(+31) |  |
| 41.2 | 2026-03-31 | 3503 | 3603 | 3644 |  |
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

Generated: 2026-11-14 05:42:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3500 --> 3800
  line "E1: STC (8.0+0.08s)" [3541, 3568, 3580]
  line "E1: LTC (60.0+0.60s)" [3683, 3708, 3692]
  line "E1: VLTC (2m24s+1.12s)" [3706, 3718, 3702]
  line "P1: STC (8.0+0.08s)" [3503, 3602, 3560]
  line "P1: LTC (60.0+0.60s)" [3603, 3619, 3668]
  line "P1: VLTC (2m24s+1.12s)" [3644, 3675, 3680]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3680 | 70 | 44 | 51% | 3673 | 93% |
|  |  | E1 | 3702 | 37 | 168 | 53% | 3683 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3668 | 53 | 80 | 52% | 3654 | 89% |
|  |  | E1 | 3692 | 35 | 176 | 51% | 3684 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3560 | 45 | 116 | 50% | 3561 | 84% |
|  |  | E1 | 3580 | 30 | 272 | 52% | 3563 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3675 | 60 | 60 | 52% | 3665 | 97% |
|  |  | E1 | 3718 | 42 | 128 | 54% | 3690 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3619 | 64 | 52 | 51% | 3613 | 98% |
|  |  | E1 | 3708 | 39 | 144 | 53% | 3688 | 92% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3602 | 45 | 112 | 47% | 3622 | 87% |
|  |  | E1 | 3568 | 37 | 172 | 49% | 3572 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3644 | 42 | 158 | 64% | 3402 | 70% |
|  |  | E1 | 3706 | 32 | 252 | 60% | 3572 | 79% |
|  |  | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3603 | 32 | 274 | 64% | 3294 | 71% |
|  |  | E1 | 3683 | 30 | 280 | 58% | 3521 | 79% |
|  |  | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3541 | 28 | 316 | 47% | 3557 | 76% |
|  |  | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3503 | 33 | 212 | 48% | 3513 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |