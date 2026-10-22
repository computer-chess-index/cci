# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3297<sub>(-16) | 3576<sub>(+30) | 3630<sub>(+19) |  |
| 3.0.0 | 2026-09-13 | 3313 | 3546 | 3611 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3447<sub>(0) | 3653<sub>(-12) | 3710<sub>(+29) |  |
| 3.0.0 | 2026-09-13 | 3447 | 3665 | 3681 |  |
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

Generated: 2026-10-22 04:41:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3800
  line "E1: STC (8.0+0.08s)" [3313, 3297]
  line "E1: LTC (60.0+0.60s)" [3546, 3576]
  line "E1: VLTC (2m24s+1.12s)" [3611, 3630]
  line "P1: STC (8.0+0.08s)" [3447, 3447]
  line "P1: LTC (60.0+0.60s)" [3665, 3653]
  line "P1: VLTC (2m24s+1.12s)" [3681, 3710]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3630 | 40 | 148 | 50% | 3630 | 81% |
|  |  | P1 | 3710 | 55 | 76 | 51% | 3702 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3576 | 34 | 204 | 48% | 3588 | 81% |
|  |  | P1 | 3653 | 51 | 88 | 50% | 3652 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3297 | 37 | 192 | 50% | 3298 | 61% |
|  |  | P1 | 3447 | 39 | 164 | 48% | 3457 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3681 | 36 | 184 | 48% | 3694 | 82% |
|  |  | E1 | 3611 | 33 | 220 | 48% | 3623 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3665 | 36 | 188 | 48% | 3676 | 79% |
|  |  | E1 | 3546 | 31 | 248 | 47% | 3565 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3447 | 37 | 196 | 49% | 3455 | 59% |
|  |  | E1 | 3313 | 31 | 288 | 49% | 3320 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |