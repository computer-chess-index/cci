# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3329<sub>(-27) | 3615<sub>(+28) | 3675<sub>(+23) |  |
| 3.0.0 | 2026-09-13 | 3356 | 3587 | 3652 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3468<sub>(0) | 3681<sub>(-5) | 3742<sub>(+40) |  |
| 3.0.0 | 2026-09-13 | 3468 | 3686 | 3702 |  |
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

Generated: 2026-11-10 05:40:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3356, 3329]
  line "E1: LTC (60.0+0.60s)" [3587, 3615]
  line "E1: VLTC (2m24s+1.12s)" [3652, 3675]
  line "P1: STC (8.0+0.08s)" [3468, 3468]
  line "P1: LTC (60.0+0.60s)" [3686, 3681]
  line "P1: VLTC (2m24s+1.12s)" [3702, 3742]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3742 | 43 | 122 | 52% | 3730 | 84% |
|  |  | E1 | 3675 | 36 | 184 | 50% | 3675 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3615 | 30 | 264 | 48% | 3625 | 82% |
|  |  | P1 | 3681 | 46 | 108 | 51% | 3673 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3329 | 29 | 304 | 49% | 3336 | 63% |
|  |  | P1 | 3468 | 34 | 212 | 48% | 3480 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3702 | 36 | 184 | 48% | 3714 | 82% |
|  |  | E1 | 3652 | 33 | 220 | 48% | 3665 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3686 | 36 | 188 | 48% | 3696 | 79% |
|  |  | E1 | 3587 | 31 | 248 | 47% | 3606 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3468 | 37 | 196 | 49% | 3476 | 59% |
|  |  | E1 | 3356 | 31 | 288 | 49% | 3363 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |