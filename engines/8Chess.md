# Engine: 8Chess

Author: Hemesh Kasukurthy

Home: https://github.com/EightChess-Team/8chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-11-17 | 3491<sub>(+12) | 3667<sub>(-13) | 3699<sub>(-1) |  |
| 1.0.10 | 2026-10-24 | 3479 | 3680 | 3700 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-11-17 | 3483<sub>(-34) | 3618<sub>(-50) | 3640<sub>(-2) |  |
| 1.0.10 | 2026-10-24 | 3517 | 3668 | 3642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.10 | 2026-10-24 | 3517 | 3668 | 3642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+8Chess+<version>&body=###%20Engine%20name%0A8Chess%0A%0A###%20Version%0A2" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:35:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.10", "2"]
  y-axis "Elo Rating" 3400 --> 3700
  line "E1: STC (8.0+0.08s)" [3479, 3491]
  line "E1: LTC (60.0+0.60s)" [3680, 3667]
  line "E1: VLTC (2m24s+1.12s)" [3700, 3699]
  line "P1: STC (8.0+0.08s)" [3517, 3483]
  line "P1: LTC (60.0+0.60s)" [3668, 3618]
  line "P1: VLTC (2m24s+1.12s)" [3642, 3640]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3640 | 50 | 108 | 63% | 3430 | 74% |
|  |  | E1 | 3699 | 27 | 350 | 56% | 3595 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3618 | 47 | 124 | 65% | 3425 | 69% |
|  |  | E1 | 3667 | 37 | 202 | 61% | 3511 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3483 | 52 | 112 | 63% | 3241 | 59% |
|  |  | E1 | 3491 | 38 | 188 | 54% | 3380 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.10 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3642 | 120 | 16 | 50% | 3642 | 75% |
|  |  | E1 | 3700 | 36 | 176 | 50% | 3700 | 92% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3668 | 68 | 48 | 51% | 3660 | 90% |
|  |  | E1 | 3680 | 51 | 88 | 50% | 3680 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3517 | 75 | 44 | 57% | 3471 | 68% |
|  |  | E1 | 3479 | 45 | 118 | 48% | 3490 | 78% |