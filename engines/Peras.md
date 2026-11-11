# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3344<sub>(-28) | 3632<sub>(+29) | 3690<sub>(+23) |  |
| 3.0.0 | 2026-09-13 | 3372 | 3603 | 3667 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3468<sub>(-2) | 3681<sub>(-6) | 3746<sub>(+44) |  |
| 3.0.0 | 2026-09-13 | 3470 | 3687 | 3702 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-09-13 | 3283 | 3488 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Peras+<version>&body=###%20Engine%20name%0APeras%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-11 05:40:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3372, 3344]
  line "E1: LTC (60.0+0.60s)" [3603, 3632]
  line "E1: VLTC (2m24s+1.12s)" [3667, 3690]
  line "P1: STC (8.0+0.08s)" [3470, 3468]
  line "P1: LTC (60.0+0.60s)" [3687, 3681]
  line "P1: VLTC (2m24s+1.12s)" [3702, 3746]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3690 | 35 | 188 | 50% | 3690 | 81% |
|  |  | P1 | 3746 | 42 | 130 | 52% | 3731 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3632 | 29 | 272 | 49% | 3641 | 82% |
|  |  | P1 | 3681 | 46 | 108 | 51% | 3675 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3344 | 29 | 312 | 49% | 3351 | 63% |
|  |  | P1 | 3468 | 33 | 224 | 48% | 3484 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3702 | 36 | 184 | 48% | 3715 | 82% |
|  |  | E1 | 3667 | 33 | 220 | 48% | 3680 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3687 | 36 | 188 | 48% | 3698 | 79% |
|  |  | E1 | 3603 | 31 | 248 | 47% | 3622 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3470 | 37 | 196 | 49% | 3478 | 59% |
|  |  | E1 | 3372 | 31 | 288 | 49% | 3378 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |